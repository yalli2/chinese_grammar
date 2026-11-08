/* Chapter page renderer (chapters 1–8 + shared widgets) */
(function(){
const W = window.Widgets = {};

W.cards = (s)=>h("div",{class:"cards"},s.items.map(c=>h("div",{class:"card"},
  c.icon?h("div",{class:"ci"},c.icon):null, h("h4",{html:L(c.title)}), c.body?h("p",{html:richHTML(L(c.body))}):null,
  c.hz?h("div",{class:"hzline"},h("span",{class:"hz"},c.hz),c.py?h("span",{class:"py"},c.py):null,sayBtn(c.hz),h("button",{class:"wbtn",onclick:()=>openWriter(c.hz,c.py,L(c.title))},t("write"))):null)));

W.timeline = (s)=>h("div",{class:"timeline"},s.items.map(c=>h("div",{class:"tl"},
  h("div",{class:"yr"},L(c.year)), h("h4",null,h("span",{html:L(c.title)}), c.hz?hzChip(c.hz,c.py):null),
  c.body?h("p",{html:richHTML(L(c.body))}):null)));

W.wordlist = (s)=>h("div",{class:"wordlist"},s.items.map(wordCard));
function wordCard(w){
  const m=L(w.m);
  return h("div",{class:"word"},
    h("span",{class:"hz"},w.hz),
    h("span",{class:"t"},h("span",{class:"py"},w.py||""),h("span",{class:"m",html:m}), w.note?h("span",{class:"note-i",html:"📌 "+L(w.note)}):null),
    h("span",{class:"acts"},sayBtn(w.hz),Array.from(w.hz).some(isHan)?h("button",{class:"wbtn",title:"write",onclick:()=>openWriter(w.hz.split(/\s*\/\s*/)[0],w.py,m)},"✍️"):null));
}
window.wordCard=wordCard;

W.table = (s)=>{
  const tb=h("table",{class:"tbl"});
  if(s.cols) tb.append(h("thead",null,h("tr",null,s.cols.map(c=>h("th",{html:L(c)})))));
  tb.append(h("tbody",null,s.items.map(r=>h("tr",null,r.map(c=>h("td",null,cellNode(c)))))));
  return h("div",{class:"tbl-wrap"},tb);
};

W.tones = ()=>{
  const words=[["妈","mā"],["麻","má"],["马","mǎ"],["骂","mà"]];
  const paths=["M10 22 L190 22","M10 70 L190 18","M10 45 Q60 98 110 92 T190 30","M10 14 L190 90"];
  const box=h("div",{class:"tones"});
  words.forEach((w,i)=>{
    const svg=`<svg viewBox="0 0 200 104"><g stroke="#eee3d3" stroke-width="1">${[14,33,52,71,90].map(y=>`<line x1="0" x2="200" y1="${y}" y2="${y}"/>`).join("")}</g><text x="2" y="12" font-size="9" fill="#bbb">5</text><text x="2" y="101" font-size="9" fill="#bbb">1</text><path class="anim" d="${paths[i]}" fill="none" stroke="#c8102e" stroke-width="6" stroke-linecap="round"/></svg>`;
    const card=h("div",{class:"tone",onclick:()=>{ $$(".tone",box).forEach(x=>x.classList.remove("on")); card.classList.add("on"); const p=$("path",card); p.classList.remove("anim"); void p.getBBox(); p.classList.add("anim"); TTS.speak(w[0],{rate:.7}); }},
      h("div",{html:svg}), h("span",{class:"hz"},w[0]), h("span",{class:"py"},w[1]), h("div",{class:"lbl"},t("tone"+(i+1))), h("div",{class:"lbl"},(UI.toneM[getLang()]||UI.toneM.en)[i]));
    box.append(card);
  });
  return box;
};

W.tonePairs = (s)=>{
  const wrap=h("div");
  const grid=h("div",{class:"pairs"});
  s.items.forEach((p,i)=>grid.append(h("div",{class:"pair",onclick:(e)=>TTS.speak(p.hz,{btn:$(".say",e.currentTarget)})},
    h("span",{class:"pn"},p.pair),h("span",{class:"rank"},"#"+(i+1)),h("span",{class:"hz"},p.hz),h("span",{class:"py"},p.py),h("div",{class:"m"},L(p.m)),
    h("button",{class:"say",style:"position:absolute;right:8px;bottom:8px;width:26px;height:26px;font-size:12px"},"🔊"))));
  let stop=false;
  const playBtn=h("button",{class:"btn ghost",onclick:async()=>{
    if(playBtn._on){stop=true;TTS.stop();return}
    playBtn._on=true; stop=false; playBtn.textContent=t("stop");
    const cards=$$(".pair",grid);
    for(let i=0;i<s.items.length&&!stop;i++){ cards[i].style.borderColor="var(--red)"; await TTS.speak(s.items[i].hz); cards[i].style.borderColor=""; await new Promise(r=>setTimeout(r,450)); }
    playBtn._on=false; playBtn.textContent=t("playPairs");
  }},t("playPairs"));
  wrap.append(h("div",{class:"pair-tools"},playBtn),grid);
  return wrap;
};

W.pinyin = (s)=>h("div",null,s.items.map(g=>h("div",{class:"pgroup"},h("h4",{html:L(g.title)}),
  h("div",{class:"pgrid"},(g.rows||g.items||[]).map(r=>h("button",{class:"pcell",onclick:()=>TTS.speak(r.hz,{rate:.7})},
    h("span",{class:"sym"},r.sym), h("span",{class:"ex"},h("span",{class:"hz"},r.hz),h("span",{class:"py"},r.py)),
    r.tip?h("span",{class:"tip",html:L(r.tip)}):null))))));

W.radicals = (s)=>h("div",{class:"radicals"},s.items.map(r=>h("div",{class:"rad"},
  h("div",{class:"rh"},h("span",{class:"hz"},r.rad),h("div",null,h("b",{html:L(r.m)}),h("span",{class:"py"},r.py||""))),
  h("div",{class:"ex"},(r.ex||[]).map(e=>h("span",{class:"e"},h("span",{class:"hz"},e.hz),h("span",null,h("span",{class:"py"},e.py)," ",L(e.m)),sayBtn(e.hz)))))));

W.strokes = (s)=>h("div",{class:"strokes"},s.items.map(st=>h("div",{class:"stroke"},
  h("div",{class:"sh"},h("span",{class:"shape"},st.shape||""),h("div",{class:"nm"},h("b",null,st.name+(st.zh?" "+st.zh:"")),h("span",null,st.hz?("→ "+st.hz):""))),
  st.body?h("p",{html:richHTML(L(st.body))}):null,
  st.hz?writerBox(st.hz,140):null)));

W.rules = (s)=>h("div",{class:"strokes"},s.items.map((r,i)=>h("div",{class:"stroke"},
  h("div",{class:"sh"},h("span",{class:"shape",style:"background:var(--red-l);color:var(--red);font-size:20px;font-weight:900;font-family:inherit"},i+1),h("div",{class:"nm"},h("b",{html:L(r.title)}))),
  r.body?h("p",{html:richHTML(L(r.body))}):null, r.hz?writerBox(r.hz,140):null)));

W.flip = (s)=>h("div",{class:"flips"},s.items.map(f=>{ const el=h("div",{class:"flip",onclick:()=>el.classList.toggle("on")},h("div",{class:"in"},h("div",{class:"f",html:L(f.front)}),h("div",{class:"b",html:L(f.back)}))); return el; }));

W.checklist = (s,ch)=>{
  const key="check_"+ch; const st=LS.get(key,{});
  return h("ul",{class:"checklist"},s.items.map((it,i)=>{ const li=h("li",{class:st[i]?"on":"",onclick:()=>{st[i]=!st[i];LS.set(key,st);li.classList.toggle("on",!!st[i])}},h("span",{class:"bx"},"✓"),h("span",{html:L(it)})); return li; }));
};

W.smart = ()=>{
  const st=LS.get("smart",["","","","",""]);
  const names=UI.smartNames[getLang()]||UI.smartNames.en, phs=UI.smartPh[getLang()]||UI.smartPh.en;
  const box=h("div",{class:"smart"});
  const out=h("div",{class:"smart-out"});
  const tas=[];
  "SMART".split("").forEach((l,i)=>{
    const ta=h("textarea",{placeholder:phs[i],oninput:()=>{st[i]=ta.value;LS.set("smart",st)}}); ta.value=st[i]||""; tas.push(ta);
    box.append(h("div",{class:"row"},h("div",{class:"lt"},l),h("div",null,h("b",null,names[i]),ta)));
  });
  box.append(h("div",null,h("button",{class:"btn primary",onclick:()=>{ out.style.display="block"; out.innerHTML="<b>🎯 "+esc(t("smartResult"))+"</b><br>"+tas.map((x,i)=>"<b>"+"SMART"[i]+"</b> · "+esc(x.value||"—")).join("<br>"); toast(t("saved")); }},t("smartMake"))),out);
  return box;
};

/* ---------- section ---------- */
window.stripNum=(x)=>String(x).replace(/^\s*\d+[.)]\s*/,"");
window.renderSection = function(s, i, chId){
  const sec=h("section",{class:"sec",id:"s"+(i+1)});
  sec.append(h("h2",null,h("span",{class:"n"},String(i+1).padStart(2,"0")),h("span",{html:stripNum(L(s.h))})));
  if(s.body) sec.append(h("div",{class:"body",html:richHTML(L(s.body))}));
  if(s.widget && W[s.widget]){ try{ sec.append(W[s.widget](s,chId)); }catch(e){ console.error("widget",s.widget,e); } }
  if(s.note) sec.append(h("div",{class:"note",html:richHTML(L(s.note))}));
  return sec;
};

/* ---------- page ---------- */
window.chapterHeader = function(d){
  const hero=h("div",{class:"ch-hero"},
    h("div",{class:"kicker"},d.icon+" "+t("chapter")+" "+d.id+t("chapterSuffix")),
    h("h1",{html:L(d.title)}),
    d.subtitle?h("p",{class:"sub",html:L(d.subtitle)}):null);
  if(d.goals&&d.goals.length) hero.append(h("div",{class:"goals"},h("b",null,"🎯 "+t("goals")),h("ul",null,d.goals.map(g=>h("li",{html:L(g)})))));
  return hero;
};
window.chapterNav = function(id){
  const nav=h("div",{class:"chnav"});
  const D=window.CHAPTER_DATA||{};
  const title=(n)=>D[n]?L(D[n].title):(window.CHAPTER_TITLES&&CHAPTER_TITLES[n]?L(CHAPTER_TITLES[n]):"");
  if(id>1) nav.append(h("a",{href:"ch"+(id-1)+".html"},h("small",null,t("prev")),title(id-1)||t("chapter")+" "+(id-1))); else nav.append(h("a",{href:"index.html"},h("small",null,"←"),t("home")));
  if(id<9) nav.append(h("a",{class:"next",href:"ch"+(id+1)+".html"},h("small",null,t("next")),title(id+1)||t("chapter")+" "+(id+1))); else nav.append(h("a",{class:"next",href:"index.html"},h("small",null,"→"),t("home")));
  return nav;
};
window.makeTabs = function(defs, chId){
  // defs: [{key,label,render(container)}]
  const tabs=h("div",{class:"tabs"}); const panes=[];
  const want=(location.hash||"").replace("#","");
  let cur=LS.get("tab_"+chId,defs[0].key); if(defs.some(d=>d.key===want)) cur=want; if(!defs.some(d=>d.key===cur)) cur=defs[0].key;
  const btns=defs.map(d=>{ const b=h("button",{class:"tab"},t(d.label)); b.onclick=()=>sel(d.key); tabs.append(b); return b; });
  const holder=h("div");
  defs.forEach(d=>{ const p=h("div",{class:"pane"}); p._d=d; panes.push(p); holder.append(p); });
  function sel(k){
    cur=k; LS.set("tab_"+chId,k);
    defs.forEach((d,i)=>{ btns[i].classList.toggle("on",d.key===k); panes[i].classList.toggle("on",d.key===k); if(d.key===k && !panes[i]._done){ panes[i]._done=true; d.render(panes[i]); } });
    history.replaceState(null,"","#"+k);
  }
  sel(cur);
  return {tabs,holder,sel};
};

window.renderChapterPage = function(id){
  const d=(window.CHAPTER_DATA||{})[id];
  document.body.innerHTML="";
  document.body.append(buildTopbar({home:true}));
  const main=h("main",{class:"wrap"});
  if(!d){ main.append(h("p",null,"Loading error.")); document.body.append(main); return; }
  document.title=d.id+". "+L(d.title).replace(/<[^>]+>/g,"")+" | "+t("siteName");
  main.append(chapterHeader(d));
  const T=makeTabs([
    {key:"learn",label:"learn",render:(p)=>{
      p.append(h("div",{class:"toc"},d.sections.map((s,i)=>h("a",{href:"#s"+(i+1),onclick:(e)=>{e.preventDefault();$("#s"+(i+1)).scrollIntoView({behavior:"smooth"})}},(i+1)+". "+stripNum(L(s.h)).replace(/<[^>]+>/g,"")))));
      d.sections.forEach((s,i)=>p.append(renderSection(s,i,id)));
      p.append(h("div",{style:"text-align:center;margin:10px 0 0"},h("button",{class:"btn primary",onclick:()=>{T.sel("practice");window.scrollTo({top:0,behavior:"smooth"})}},t("practice")+" →")));
    }},
    {key:"practice",label:"practice",render:(p)=>renderPractice(p,d.sets,id)}
  ],id);
  main.append(T.tabs,T.holder,chapterNav(id));
  document.body.append(main,h("footer",null,h("div",{class:"wrap"},t("footer"))));
};
})();
