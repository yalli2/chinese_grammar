/* Chapter 9 – vocabulary page with auto-generated exercises */
(function(){
function cats(){ return (window.VOCAB_PARTS||[]).slice().sort((a,b)=>a.order-b.order); }
function allWords(){ return cats().flatMap(c=>c.words.map(w=>Object.assign({cat:c.id},w))); }
const plainM=(w)=>String(L(w.m)).replace(/<[^>]+>/g,"");
const firstHz=(w)=>w.hz.split(/\s*\/\s*/)[0];

/* ---- auto-generated exercise sets for one category ---- */
function genSets(cat, seed){
  const rnd=seeded(seed);
  const pool=cat.words.filter(w=>w.hz&&w.m);
  // unique by meaning (en) to avoid duplicate distractors
  const byM=new Map(); pool.forEach(w=>{ const k=(w.m.en||"")+"|"+w.hz; if(!byM.has(k)) byM.set(k,w); });
  const uniq=[...byM.values()];
  const pick=(n,arr=uniq)=>shuffle(arr,rnd).slice(0,Math.min(n,arr.length));
  const distract=(w,n,key)=>{ const others=shuffle(uniq.filter(x=>x!==w && key(x)!==key(w)),rnd); const seen=new Set([key(w)]); const out=[]; for(const o of others){ if(!seen.has(key(o))){seen.add(key(o));out.push(o)} if(out.length>=n)break } return out; };
  const mcOf=(w,key,lab)=>{ const ds=distract(w,3,key); const opts=shuffle([w,...ds],rnd); return {opts:opts.map(lab),a:opts.indexOf(w)}; };

  const s1=pick(10).map(w=>{ const o=mcOf(w,x=>x.m.en,x=>x.m); return {type:"mc",q:{ko:"",en:"",es:"",ja:"",fr:""},_q:w,say:firstHz(w),opts:o.opts,a:o.a,ex:{ko:`${w.hz} (${w.py})`,en:`${w.hz} (${w.py})`,es:`${w.hz} (${w.py})`,ja:`${w.hz} (${w.py})`,fr:`${w.hz} (${w.py})`}}; });
  s1.forEach(it=>{ const w=it._q; const q={}; ["ko","en","es","ja","fr"].forEach(l=>q[l]=`${UI.vqMeaning[l]} <span class="hz" style="font-size:24px">${firstHz(w)}</span> <i class="py">${w.py}</i>`); it.q=q; delete it._q; });

  const s2=pick(10).map((w,i)=>{
    if(i%2===0){ const o=mcOf(w,x=>x.py.replace(/[\s']/g,"").toLowerCase(),x=>x.hz); return {type:"listen",say:firstHz(w),q:UI.vqListen,opts:o.opts,a:o.a,ex:w.m}; }
    const o=mcOf(w,x=>x.hz,x=>({hz:x.hz,py:""})); const q={}; ["ko","en","es","ja","fr"].forEach(l=>q[l]=`${UI.vqHanzi[l]}: <b>${String(w.m[l]||w.m.en)}</b>`);
    return {type:"mc",q,opts:o.opts,a:o.a,ex:{ko:w.py,en:w.py,es:w.py,ja:w.py,fr:w.py},say:null};
  });

  const typed=pick(6).map(w=>{ const q={}; ["ko","en","es","ja","fr"].forEach(l=>q[l]=`${UI.vqPinyin[l]}: <span class="hz" style="font-size:24px">${firstHz(w)}</span> = ${w.m[l]||w.m.en}`); return {type:"type",q,a:w.py.split(/\s*\/\s*/).concat([w.py]),loose:true,say:firstHz(w)}; });
  const mpairs=pick(5).map(w=>[{hz:firstHz(w),py:w.py},w.m]);
  const s3=typed.concat([{type:"match",q:UI.vqMatch,pairs:mpairs}]);
  const sets=[{title:UI.vsMeaning,items:s1},{title:UI.vsListen,items:s2},{title:UI.vsWrite,items:s3}];
  if(cat.sentences&&cat.sentences.length){
    const s4=cat.sentences.map(s=>{ const q={}; ["ko","en","es","ja","fr"].forEach(l=>q[l]=`${UI.vqOrder[l]} <b>${s.m[l]||s.m.en}</b>`); return {type:"order",q,tokens:s.tokens,ex:{ko:s.py,en:s.py,es:s.py,ja:s.py,fr:s.py}}; });
    sets.push({title:UI.vsSent,items:s4});
  }
  return sets;
}
window.genVocabSets=genSets;

/* ---- vocabulary list ---- */
function renderList(p, state){
  p.innerHTML="";
  const cs=cats();
  const catBar=h("div",{class:"cats"});
  const all=[{id:"all",icon:"🌏",title:UI.allVocab,words:allWords()}].concat(cs);
  all.forEach(c=>catBar.append(h("button",{class:"cat"+(state.cat===c.id?" on":""),onclick:()=>{state.cat=c.id;LS.set("vcat",c.id);renderList(p,state)}},c.icon+" "+L(c.title),h("span",{class:"c"},c.words.length))));
  p.append(catBar);
  const cat=all.find(c=>c.id===state.cat)||all[1];
  const q=h("input",{type:"search",placeholder:t("search"),value:state.q||""});
  const cbP=h("input",{type:"checkbox",checked:state.py!==false}); const cbM=h("input",{type:"checkbox",checked:state.m!==false});
  const grid=h("div",{class:"wordlist"});
  let stop=false;
  const play=h("button",{class:"btn ghost",onclick:async()=>{
    if(play._on){stop=true;TTS.stop();return} play._on=true;stop=false;play.textContent=t("stop");
    for(const el of $$(".word",grid)){ if(stop)break; el.classList.add("playing"); el.scrollIntoView({block:"nearest",behavior:"smooth"}); await TTS.speak(el._w.hz); el.classList.remove("playing"); await new Promise(r=>setTimeout(r,350)); }
    play._on=false; play.textContent=t("playAll");
  }},t("playAll"));
  p.append(h("div",{class:"vtools"},q,play,h("label",null,cbP," ",t("showPy")),h("label",null,cbM," ",t("showM"))));
  const draw=()=>{
    grid.innerHTML=""; const term=(q.value||"").trim().toLowerCase(); state.q=q.value;
    const nt=term?QuizUtil.stripTones(term):"";
    cat.words.forEach(w=>{
      if(term){ const hay=(w.hz+" "+QuizUtil.stripTones(w.py.toLowerCase())+" "+w.py.toLowerCase()+" "+plainM(w).toLowerCase()); if(!hay.includes(term)&&!hay.includes(nt)) return; }
      else if(w.sub) grid.append(h("div",{class:"vsub"},L(w.sub)));
      const c=wordCard(w); c._w=w;
      if(!cbP.checked) $(".py",c).style.visibility="hidden";
      if(!cbM.checked) $(".m",c).style.visibility="hidden";
      grid.append(c);
    });
  };
  q.oninput=draw; cbP.onchange=()=>{state.py=cbP.checked;draw()}; cbM.onchange=()=>{state.m=cbM.checked;draw()};
  draw(); p.append(grid);
  if(cat.sentences&&cat.sentences.length){
    p.append(h("h2",{class:"sec-title"},"💬 "+t("sentences")));
    p.append(h("div",{class:"sentences"},cat.sentences.map(s=>h("div",{class:"sent"},sayBtn(s.hz),h("div",null,h("span",{class:"hz"},s.hz),h("span",{class:"py"},s.py),h("span",{class:"m"},L(s.m)))))));
  }
}

/* ---- flashcards ---- */
function renderFlash(p, state){
  p.innerHTML="";
  const cs=cats();
  const catBar=h("div",{class:"cats"});
  cs.forEach(c=>catBar.append(h("button",{class:"cat"+(state.fcat===c.id?" on":""),onclick:()=>{state.fcat=c.id;renderFlash(p,state)}},c.icon+" "+L(c.title))));
  p.append(catBar);
  const cat=cs.find(c=>c.id===state.fcat)||cs[0]; state.fcat=cat.id;
  let deck=cat.words.slice(), i=0;
  const card=h("div",{class:"fc",onclick:()=>card.classList.toggle("on")});
  const cnt=h("span",{class:"fc-count"});
  const show=()=>{ const w=deck[i]; card.classList.remove("on"); card.innerHTML="";
    card.append(h("div",{class:"in"},h("div",{class:"f"},h("span",{class:"hz"},firstHz(w)),h("small",{style:"color:var(--mut)"},t("tapFlip"))),
      h("div",{class:"b"},h("span",{class:"py"},w.py),h("span",{class:"m"},plainM(w)),h("span",{class:"hz",style:"font-size:26px"},w.hz))));
    cnt.textContent=(i+1)+" / "+deck.length; TTS.speak(firstHz(w)); };
  const ctrl=h("div",{class:"fc-ctrl"},
    h("button",{class:"btn ghost",onclick:()=>{i=(i-1+deck.length)%deck.length;show()}},t("prev")),cnt,
    h("button",{class:"btn ghost",onclick:()=>{i=(i+1)%deck.length;show()}},t("next")),
    h("button",{class:"btn ghost",onclick:()=>TTS.speak(firstHz(deck[i]))},"🔊"),
    h("button",{class:"btn ghost",onclick:()=>openWriter(firstHz(deck[i]),deck[i].py,plainM(deck[i]))},"✍️"),
    h("button",{class:"btn ghost",onclick:()=>{deck=shuffle(deck);i=0;show()}},t("shuffle")));
  p.append(h("div",{class:"fc-wrap"},card,ctrl));
  // keyboard
  p._key=(e)=>{ if(!p.classList.contains("on"))return; if(e.key==="ArrowRight"){i=(i+1)%deck.length;show()} else if(e.key==="ArrowLeft"){i=(i-1+deck.length)%deck.length;show()} else if(e.key===" "){e.preventDefault();card.classList.toggle("on")} };
  document.removeEventListener("keydown",window._fcKey||(()=>{})); window._fcKey=p._key; document.addEventListener("keydown",p._key);
  i=0; show(); TTS.stop();
}

/* ---- practice: one category at a time; set index = catOrder*10 + k ---- */
function renderVPractice(p, state){
  p.innerHTML="";
  const cs=cats();
  const catBar=h("div",{class:"cats"});
  cs.forEach(c=>{
    const sc=[0,1,2,3].map(k=>Scores.get(9,c.order*10+k)).filter(v=>v!=null);
    const avg=sc.length?Math.round(sc.reduce((a,b)=>a+b,0)/sc.length):null;
    catBar.append(h("button",{class:"cat"+(state.pcat===c.id?" on":""),onclick:()=>{state.pcat=c.id;LS.set("vpcat",c.id);renderVPractice(p,state)}},c.icon+" "+L(c.title),h("span",{class:"c"},avg==null?"":"★"+avg+"%")));
  });
  p.append(catBar);
  const cat=cs.find(c=>c.id===state.pcat)||cs[0]; state.pcat=cat.id;
  const seedKey="vseed_"+cat.id; let seed=LS.get(seedKey,cat.order*7919+13);
  const holder=h("div");
  p.append(h("div",{class:"vtools"},h("b",{style:"font-size:18px"},cat.icon+" "+L(cat.title)),h("button",{class:"btn ghost",onclick:()=>{seed=Math.floor(Math.random()*1e9);LS.set(seedKey,seed);build()}},t("newQs"))),holder);
  function build(){
    holder.innerHTML="";
    const sets=genSets(cat,seed);
    // map set indexes to unique score slots
    const nameInp=h("input",{type:"text",placeholder:t("namePh"),value:LS.get("name",""),oninput:e=>LS.set("name",e.target.value)});
    holder.append(h("div",{class:"student"},h("b",null,"👤 "+t("name")),nameInp));
    const nav=h("div",{class:"set-nav"}); const box=h("div"); const btns=[],roots=[];
    const show=(i)=>{btns.forEach((b,k)=>b.classList.toggle("on",k===i));roots.forEach((r,k)=>r.classList.toggle("on",k===i));};
    sets.forEach((s,i)=>{
      const slot=cat.order*10+i; const best=Scores.get(9,slot);
      const b=h("button",{class:"set-btn",onclick:()=>show(i)},t("set")+" "+(i+1)+" · "+setTitle(s.title),h("span",{class:"bs"},best==null?s.items.length+" "+t("items"):"★ "+best+"%"));
      btns.push(b); nav.append(b);
      const r=renderSet(s,{chapter:9,index:slot,getName:()=>nameInp.value.trim(),onNext:i<sets.length-1?()=>{show(i+1);window.scrollTo({top:holder.offsetTop-80,behavior:"smooth"})}:null});
      roots.push(r); box.append(r);
    });
    holder.append(nav,box); show(0);
  }
  build();
}
document.addEventListener("scored",e=>{ if(e.detail.chapter===9){ const b=$$(".set-btn.on .bs")[0]; if(b) b.textContent="★ "+Scores.get(9,e.detail.index)+"%"; } });

window.renderVocabPage = function(){
  const d=window.CHAPTER_DATA[9];
  document.body.innerHTML="";
  document.body.append(buildTopbar({home:true}));
  const main=h("main",{class:"wrap"});
  document.title="9. "+L(d.title)+" | "+t("siteName");
  main.append(chapterHeader(d));
  const state={cat:LS.get("vcat","pronouns"),pcat:LS.get("vpcat","pronouns"),fcat:"pronouns"};
  const T=makeTabs([
    {key:"vocab",label:"vocab",render:(p)=>{ if(d.sections) d.sections.forEach((s,i)=>p.append(renderSection(s,i,9))); const c=h("div"); p.append(c); renderList(c,state); }},
    {key:"flash",label:"flash",render:(p)=>renderFlash(p,state)},
    {key:"practice",label:"practice",render:(p)=>renderVPractice(p,state)}
  ],9);
  main.append(T.tabs,T.holder,chapterNav(9));
  document.body.append(main,h("footer",null,h("div",{class:"wrap"},t("footer"))));
};
window.vocabSetCount = ()=>cats().reduce((a,c)=>a+3+((c.sentences&&c.sentences.length)?1:0),0);
window.vocabSlots = ()=>cats().flatMap(c=>[0,1,2,3].slice(0,3+((c.sentences&&c.sentences.length)?1:0)).map(k=>c.order*10+k));
})();
