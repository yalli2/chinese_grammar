/* Quiz engine: renders a Set of items, grades it, keeps score */
(function(){
const KEYS="ABCDEFGH";
const TONES={a:"āáǎà",e:"ēéěè",i:"īíǐì",o:"ōóǒò",u:"ūúǔù",ü:"ǖǘǚǜ"};

function stripTones(s){ return s.normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/ü/g,"u").replace(/v/g,"u"); }
/* convert numbered pinyin "ma3" / "ni3hao3" to marks */
function numToMarks(s){
  return s.replace(/([a-zü]+)([1-5])/gi,(m,syl,n)=>{
    n=+n; syl=syl.replace(/v/g,"ü"); if(n===5) return syl;
    let idx=-1; const low=syl.toLowerCase();
    if(low.includes("a")) idx=low.indexOf("a"); else if(low.includes("e")) idx=low.indexOf("e");
    else if(low.includes("ou")) idx=low.indexOf("o");
    else { for(let i=low.length-1;i>=0;i--) if("iouü".includes(low[i])){idx=i;break} }
    if(idx<0) return syl;
    const v=low[idx]; const mk=TONES[v]?TONES[v][n-1]:v;
    return syl.slice(0,idx)+mk+syl.slice(idx+1);
  });
}
function norm(s){ return numToMarks(String(s).normalize("NFC").toLowerCase()).replace(/[\s'’·\-.,!?。！？，、]/g,"").normalize("NFC"); }
window.QuizUtil={norm,stripTones,numToMarks};
window.setTitle=(x)=>String(L(x)).replace(/^[^:：]{0,14}?\d+\s*[:：.]\s*/,"");

function answerVariants(a){
  const arr=Array.isArray(a)?a:[a]; const out=[];
  arr.forEach(x=>String(L(x)).split(/\s*\/\s*/).forEach(y=>{ if(y) out.push(y); }));
  return out;
}

function cellNode(x){
  if(x && typeof x==="object" && x.hz!==undefined && x.ko===undefined){
    return h("span",{class:"cellhz"},h("span",{class:"hz"},x.hz),x.py?h("span",{class:"py"},x.py):null,sayBtn(x.hz));
  }
  const s=L(x);
  const isHz=/^[㐀-鿿，。！？、]+$/.test(s);
  return isHz? h("span",{class:"cellhz"},h("span",{class:"hz"},s),sayBtn(s)) : h("span",{html:richTxt(s)});
}
function optText(x){ // plain label for options
  if(x && typeof x==="object" && x.hz!==undefined && x.ko===undefined) return x.hz+(x.py?"  "+x.py:"");
  return L(x);
}
function richTxt(s){ return String(s); }
window.cellNode=cellNode;

/* ---- build a single question ---- */
function buildItem(it, idx){
  const box=h("div",{class:"q","data-type":it.type});
  const typeName={mc:"tMC",tf:"tTF",listen:"tListen",type:"tType",match:"tMatch",order:"tOrder"}[it.type]||"tMC";
  box.append(h("span",{class:"qn"},idx+1));
  const state={answered:false, val:null};
  box._state=state; box._item=it;
  const qtxt = it.q? L(it.q) : (it.type==="listen"? t("listenPick") : "");
  const qt=h("div",{class:"qt"},h("div",{class:"txt",html:richHTML(qtxt)}),h("span",{class:"type-tag"},t(typeName)));
  if(it.say && it.type!=="listen") qt.insertBefore(sayBtn(it.say),qt.lastChild);
  box.append(qt);

  if(it.type==="listen"){
    const big=sayBtn(it.say,"lg");
    box.append(h("div",{class:"listen-box"},big,h("button",{class:"wbtn slow",onclick:()=>TTS.speak(it.say,{rate:0.55})},t("slow"))));
  }

  if(it.type==="mc"||it.type==="listen"){
    const o=h("div",{class:"opts"});
    it.opts.forEach((op,i)=>{
      const txt=optText(op); const isHz=/^[㐀-鿿]/.test(txt);
      const b=h("button",{class:"opt",onclick:()=>{ if(box._graded) return; $$(".opt",o).forEach(x=>x.classList.remove("sel")); b.classList.add("sel"); state.val=i; state.answered=true; }},
        h("span",{class:"k"},KEYS[i]), h("span",{class:isHz?"hz":"",html:txt}));
      o.append(b);
    });
    box.append(o);
  }
  else if(it.type==="tf"){
    const o=h("div",{class:"opts tf"});
    [[true,"T"],[false,"F"]].forEach(([v,k])=>{
      const b=h("button",{class:"opt",onclick:()=>{ if(box._graded) return; $$(".opt",o).forEach(x=>x.classList.remove("sel")); b.classList.add("sel"); state.val=v; state.answered=true; }},t(k));
      b._v=v; o.append(b);
    });
    box.append(o);
  }
  else if(it.type==="type"){
    const inp=h("input",{class:"ans",type:"text",placeholder:t("typeHere"),autocomplete:"off",autocapitalize:"off",spellcheck:"false",oninput:()=>{state.val=inp.value;state.answered=inp.value.trim()!==""}});
    box.append(inp);
    // tone pad for pinyin answers
    const vars=answerVariants(it.a);
    if(vars.some(v=>/[āáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜü]/.test(v))){
      const pad=h("div",{class:"tonepad"},h("span",{style:"font-size:12px;color:var(--mut);align-self:center"},t("toneHelp")));
      "āáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜü".split("").forEach(c=>pad.append(h("button",{type:"button",onclick:()=>{if(box._graded)return;const p=inp.selectionStart??inp.value.length;inp.value=inp.value.slice(0,p)+c+inp.value.slice(inp.selectionEnd??p);inp.focus();inp.setSelectionRange(p+1,p+1);inp.dispatchEvent(new Event("input"))}},c)));
      box.append(pad);
    }
    box._inp=inp;
  }
  else if(it.type==="match"){
    const rights=shuffle(it.pairs.map((p,i)=>({i,label:optText(p[1])})));
    const m=h("div",{class:"match"}); const sels=[];
    it.pairs.forEach((p,i)=>{
      const sel=h("select",{onchange:()=>{state.answered=sels.every(s=>s.value!=="")}});
      sel.append(h("option",{value:""},t("choose")));
      rights.forEach(r=>sel.append(h("option",{value:r.i},r.label.replace(/<[^>]+>/g,""))));
      sels.push(sel);
      m.append(h("div",{class:"mrow"},h("div",{class:"ml"},cellNode(p[0])),h("div",{class:"arrow"},"→"),sel));
    });
    box._sels=sels; box.append(m);
  }
  else if(it.type==="order"){
    const wrap=h("div",{class:"order"});
    const slot=h("div",{class:"slot"}); const bank=h("div",{class:"bank"});
    const toks=it.tokens.map((x,i)=>({i,txt:L(x)}));
    let sh=shuffle(toks); let guard=0;
    while(toks.length>1 && sh.every((x,k)=>x.txt===toks[k].txt) && guard++<10) sh=shuffle(toks);
    const chosen=[];
    sh.forEach(tk=>{
      const isHz=/^[㐀-鿿，。！？、]+$/.test(tk.txt);
      const b=h("button",{class:"tok"+(isHz?" hzt":"")},tk.txt);
      b.onclick=()=>{
        if(box._graded) return;
        b.classList.add("used");
        const c=h("button",{class:"tok"+(isHz?" hzt":"")},tk.txt);
        c.onclick=()=>{ if(box._graded) return; c.remove(); b.classList.remove("used"); chosen.splice(chosen.indexOf(tk),1); state.answered=chosen.length===toks.length; };
        slot.append(c); chosen.push(tk); state.answered=chosen.length===toks.length;
      };
      bank.append(b);
    });
    box._chosen=chosen; box._toks=toks;
    const hzAll=toks.every(x=>/^[㐀-鿿，。！？、]+$/.test(x.txt));
    wrap.append(h("div",{style:"font-size:12px;color:var(--mut);margin-bottom:6px;display:flex;gap:8px;align-items:center"},t("orderHelp"), hzAll? sayBtn(toks.map(x=>x.txt).join("")) : null),slot,bank);
    box._slot=slot; box.append(wrap);
    // hide answer audio until graded
    if(hzAll){ const sb=$(".say",wrap); sb.style.display="none"; box._orderSay=sb; }
  }
  box.append(h("div",{class:"fb"}));
  return box;
}

/* ---- grade a single question; returns points 0..1 ---- */
function gradeItem(box){
  const it=box._item, st=box._state; let pts=0, answerText="";
  const fb=$(".fb",box); box._graded=true;
  if(it.type==="mc"||it.type==="listen"){
    const os=$$(".opt",box);
    os.forEach((b,i)=>{ if(i===it.a) b.classList.add("right"); else if(i===st.val) b.classList.add("wrong"); });
    pts = st.val===it.a?1:0; answerText=optText(it.opts[it.a]);
    if(it.type==="listen") answerText += "";
  } else if(it.type==="tf"){
    $$(".opt",box).forEach(b=>{ if(b._v===it.a) b.classList.add("right"); else if(b._v===st.val) b.classList.add("wrong"); });
    pts = st.val===it.a?1:0; answerText=t(it.a?"T":"F");
  } else if(it.type==="type"){
    const v=String(st.val||""); const vars=answerVariants(it.a);
    let ok=vars.some(a=>norm(a)===norm(v));
    if(!ok && it.loose) ok=vars.some(a=>stripTones(norm(a))===stripTones(norm(v)) && stripTones(norm(v))!=="");
    pts=ok?1:0; box._inp.classList.add(ok?"right":"wrong"); box._inp.readOnly=true;
    answerText=vars.join(" / ");
  } else if(it.type==="match"){
    let c=0;
    box._sels.forEach((s,i)=>{ const ok=s.value!==""&&+s.value===i; if(ok)c++; s.classList.add(ok?"right":"wrong"); s.disabled=true; });
    pts=c/it.pairs.length;
    answerText=it.pairs.map(p=>optText(p[0]).replace(/<[^>]+>/g,"")+" → "+optText(p[1]).replace(/<[^>]+>/g,"")).join(" · ");
  } else if(it.type==="order"){
    const got=box._chosen.map(x=>x.txt).join("\u0001"), want=box._toks.map(x=>x.txt).join("\u0001");
    pts = got===want?1:0; box._slot.classList.add(pts?"right":"wrong");
    answerText=box._toks.map(x=>x.txt).join(box._toks.every(x=>/^[㐀-鿿，。！？、]+$/.test(x.txt))?"":" ");
    if(box._orderSay) box._orderSay.style.display="";
  }
  const full=pts>=0.999;
  box.append(h("span",{class:"mark "+(full?"ok":"no")},full?"○":(pts>0?"△":"✕")));
  fb.className="fb show "+(full?"ok":"no");
  fb.innerHTML="";
  fb.append(h("b",{class:"v"},full?"✔ "+t("correct"):"✘ "+t("wrong")));
  if(!full) fb.append(h("span",null,t("answerIs")+": "), h("b",{html:answerText}), " ");
  if(it.type==="listen") fb.append(" ", h("span",{class:"hz",style:"font-size:18px"},it.say)," ");
  if(it.ex) fb.append(h("div",{style:"margin-top:4px",html:richHTML(L(it.ex))}));
  return pts;
}

/* ---- render a whole set ---- */
window.renderSet = function(set, opts){
  // opts: {chapter, index, total, onNext, getName}
  const root=h("div",{class:"set"});
  const head=h("div",{class:"set-head"},h("h3",null,setTitle(set.title)),h("span",{class:"cnt"},set.items.length+" "+t("items")));
  const list=h("div");
  const result=h("div",{class:"result"});
  const btnCheck=h("button",{class:"btn primary"},t("check"));
  const btnRetry=h("button",{class:"btn ghost",style:"display:none"},t("retry"));
  const btnWrong=h("button",{class:"btn ghost",style:"display:none"},t("retryWrong"));
  const btnNext=opts.onNext?h("button",{class:"btn ghost",style:"display:none",onclick:opts.onNext},t("nextSet")):null;
  let boxes=[];
  function draw(only){
    list.innerHTML=""; boxes=[];
    const items = only? only : set.items;
    items.forEach((it,i)=>{ const b=buildItem(it,i); boxes.push(b); list.append(b); });
    result.classList.remove("show"); btnCheck.style.display=""; btnRetry.style.display="none"; btnWrong.style.display="none"; if(btnNext)btnNext.style.display="none";
  }
  btnCheck.onclick=()=>{
    const un=boxes.filter(b=>!b._state.answered).length;
    if(un && !confirm(t("unanswered").replace("{n}",un))) return;
    let sum=0; boxes.forEach(b=>sum+=gradeItem(b));
    const n=boxes.length, pct=Math.round(sum/n*100);
    if(boxes.length===set.items.length) Scores.put(opts.chapter,opts.index,pct);
    const msg = pct===100?t("r100"):pct>=80?t("r80"):pct>=60?t("r60"):t("r0");
    const name=(opts.getName&&opts.getName())||"";
    const now=new Date();
    result.innerHTML="";
    result.append(h("div",{class:"ring",style:"--p:"+pct},h("b",null,pct+"%")),
      h("div",{class:"rt"},h("h4",null,msg),
        h("p",null,(name?"👤 "+name+" · ":"")+t("chapter")+" "+opts.chapter+t("chapterSuffix")+" · "+setTitle(set.title)),
        h("p",null,t("score")+": "+(Math.round(sum*10)/10)+" / "+n+" · "+now.toLocaleString(getLang()))));
    result.classList.add("show");
    btnCheck.style.display="none"; btnRetry.style.display=""; if(pct<100) btnWrong.style.display=""; if(btnNext)btnNext.style.display="";
    result.scrollIntoView({behavior:"smooth",block:"center"});
    document.dispatchEvent(new CustomEvent("scored",{detail:{chapter:opts.chapter,index:opts.index,pct}}));
    btnWrong._wrong = boxes.filter(b=>{ const m=$(".mark",b); return m && !m.classList.contains("ok"); }).map(b=>b._item);
  };
  btnRetry.onclick=()=>{ draw(); root.scrollIntoView({behavior:"smooth"}); };
  btnWrong.onclick=()=>{ draw(btnWrong._wrong); root.scrollIntoView({behavior:"smooth"}); };
  draw();
  root.append(head,result,list,h("div",{class:"set-actions"},btnCheck,btnRetry,btnWrong,btnNext));
  root._redraw=()=>draw();
  return root;
};

/* ---- practice pane with set navigation ---- */
window.renderPractice = function(container, sets, chapterId){
  container.innerHTML="";
  const nameInp=h("input",{type:"text",placeholder:t("namePh"),value:LS.get("name",""),oninput:e=>LS.set("name",e.target.value)});
  container.append(h("div",{class:"student"},h("b",null,"👤 "+t("name")),nameInp));
  const nav=h("div",{class:"set-nav"}); const holder=h("div");
  const btns=[], roots=[];
  const show=(i)=>{ btns.forEach((b,k)=>b.classList.toggle("on",k===i)); roots.forEach((r,k)=>r.classList.toggle("on",k===i)); LS.set("lastset_"+chapterId,i); };
  sets.forEach((s,i)=>{
    const best=Scores.get(chapterId,i);
    const b=h("button",{class:"set-btn",onclick:()=>{show(i);}},t("set")+" "+(i+1)+" · "+setTitle(s.title),h("span",{class:"bs"},best==null?s.items.length+" "+t("items"):"★ "+best+"%"));
    btns.push(b); nav.append(b);
    const r=renderSet(s,{chapter:chapterId,index:i,getName:()=>nameInp.value.trim(),onNext: i<sets.length-1?()=>{show(i+1);window.scrollTo({top:container.offsetTop-80,behavior:"smooth"})}:null});
    roots.push(r); holder.append(r);
  });
  document.addEventListener("scored",e=>{ if(e.detail.chapter!==chapterId) return; const b=btns[e.detail.index]; const best=Scores.get(chapterId,e.detail.index); if(b) $(".bs",b).textContent="★ "+best+"%"; });
  container.append(nav,holder);
  show(Math.min(LS.get("lastset_"+chapterId,0),sets.length-1));
};
})();
