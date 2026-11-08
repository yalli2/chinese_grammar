/* Core: language, storage, TTS, top bar, writer modal */
(function(){
const LS = {
  get(k,d){try{const v=localStorage.getItem("cg_"+k);return v==null?d:JSON.parse(v)}catch(e){return d}},
  set(k,v){try{localStorage.setItem("cg_"+k,JSON.stringify(v))}catch(e){}}
};
window.LS = LS;

/* ---------- language ---------- */
const codes = LANGS.map(l=>l.code);
let lang = LS.get("lang", null);
if(!lang){ const n=(navigator.language||"en").slice(0,2).toLowerCase(); lang = codes.includes(n)?n:"en"; }
window.getLang = ()=>lang;
window.setLang = (c)=>{ lang=c; LS.set("lang",c); document.documentElement.lang=c; document.dispatchEvent(new Event("langchange")); };
document.documentElement.lang = lang;

/* L(x): localized value */
window.L = function(x){
  if(x==null) return "";
  if(typeof x==="string"||typeof x==="number") return String(x);
  if(Array.isArray(x)) return x;
  if(typeof x==="object"){
    if(x.hz!==undefined && x.ko===undefined) return x.hz;
    return x[lang]!=null ? x[lang] : (x.en!=null?x.en:(x.ko||""));
  }
  return String(x);
};
window.t = (k)=>L(UI[k]);
window.esc = (s)=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
window.$ = (s,r=document)=>r.querySelector(s);
window.$$ = (s,r=document)=>Array.from(r.querySelectorAll(s));
window.h = function(tag, attrs, ...kids){
  const e=document.createElement(tag);
  if(attrs) for(const k in attrs){
    const v=attrs[k]; if(v==null||v===false) continue;
    if(k==="class") e.className=v; else if(k==="html") e.innerHTML=v;
    else if(k.startsWith("on")) e.addEventListener(k.slice(2),v);
    else e.setAttribute(k,v===true?"":v);
  }
  for(const c of kids.flat()){ if(c==null||c===false) continue; e.append(c.nodeType?c:document.createTextNode(c)); }
  return e;
};
window.shuffle = function(a, rnd=Math.random){ a=a.slice(); for(let i=a.length-1;i>0;i--){const j=Math.floor(rnd()*(i+1));[a[i],a[j]]=[a[j],a[i]]} return a; };
window.seeded = function(seed){ let s=seed>>>0||1; return ()=>{ s^=s<<13; s>>>=0; s^=s>>17; s^=s<<5; s>>>=0; return (s%100000)/100000; }; };
window.toast = function(msg){ let el=$(".toast"); if(!el){el=h("div",{class:"toast"});document.body.append(el)} el.textContent=msg; el.classList.add("on"); clearTimeout(el._t); el._t=setTimeout(()=>el.classList.remove("on"),2200); };

/* ---------- TTS (native Mandarin) ---------- */
const TTS = window.TTS = {
  voices:[], voice:null, rate:LS.get("rate",0.85), pref:LS.get("voice","auto"), audio:null, curBtn:null,
  score(v){
    const n=v.name, l=(v.lang||"").replace("_","-").toLowerCase();
    if(!/^zh|^cmn/.test(l) && !/chinese|普通话|中文|mandarin/i.test(n)) return -1;
    if(/hk|yue|cantonese|粤|廣東|粵/i.test(l+n)) return -1;
    let s=0;
    if(/zh-cn|cmn|zh-hans/.test(l)) s+=20; else if(/zh-tw/.test(l)) s+=8; else s+=10;
    if(/natural|neural|online/i.test(n)) s+=30;
    if(/xiaoxiao|yunxi|xiaoyi|yunjian|xiaochen|xiaohan|xiaomo|xiaoxuan/i.test(n)) s+=15;
    if(/google/i.test(n)) s+=18;
    if(/tingting|ting-ting|lili|yu-shu|lilian/i.test(n)) s+=12;
    if(/premium|enhanced|高品质|增强/i.test(n)) s+=10;
    if(/huihui|kangkang|yaoyao/i.test(n)) s+=4;
    if(v.localService===false) s+=2;
    return s;
  },
  load(){
    if(!("speechSynthesis" in window)) return;
    const all=speechSynthesis.getVoices();
    this.voices = all.filter(v=>this.score(v)>=0).sort((a,b)=>this.score(b)-this.score(a));
    this.pick();
  },
  pick(){
    if(this.pref==="online"){ this.voice=null; return; }
    if(this.pref!=="auto"){ const v=this.voices.find(v=>v.name===this.pref); if(v){this.voice=v;return;} }
    this.voice = this.voices[0]||null;
  },
  clean(text){ return String(text).replace(/\s*\/\s*/g,"，").replace(/[（(][^)）]*[)）]/g,"").replace(/…|\.\.\./g,"，").trim(); },
  stop(){ try{speechSynthesis.cancel()}catch(e){} if(this.audio){this.audio.pause();this.audio=null} if(this.curBtn){this.curBtn.classList.remove("playing");this.curBtn=null} },
  speak(text, opt={}){
    text=this.clean(text); if(!text) return Promise.resolve();
    this.stop();
    const btn=opt.btn; if(btn){btn.classList.add("playing");this.curBtn=btn}
    const rate=(opt.rate||this.rate);
    const done=()=>{ if(btn) btn.classList.remove("playing"); };
    return new Promise(res=>{
      const fin=()=>{done();res()};
      if(this.voice && "speechSynthesis" in window){
        const u=new SpeechSynthesisUtterance(text);
        u.voice=this.voice; u.lang=this.voice.lang||"zh-CN"; u.rate=rate; u.pitch=1;
        u.onend=fin; u.onerror=fin;
        speechSynthesis.speak(u);
        // Chrome sometimes stalls long queues
        setTimeout(()=>{ if(!speechSynthesis.speaking && !speechSynthesis.pending) fin(); }, 15000);
      } else {
        const url="https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=zh-CN&ttsspeed="+(rate<0.8?"0.3":"1")+"&q="+encodeURIComponent(text);
        const a=new Audio(url); this.audio=a; a.playbackRate = rate<0.8?1:Math.max(.8,Math.min(1.1,rate+0.1));
        a.onended=fin; a.onerror=()=>{ fin(); if(!("speechSynthesis" in window) || !this.voices.length) toast("🔇 Chinese voice unavailable — try Edge or Chrome"); };
        a.play().catch(()=>fin());
      }
    });
  }
};
if("speechSynthesis" in window){ TTS.load(); speechSynthesis.onvoiceschanged=()=>{TTS.load(); renderVoiceMenu&&renderVoiceMenu();}; setTimeout(()=>TTS.load(),600); }

/* a 🔊 button */
window.sayBtn = function(text, cls=""){
  return h("button",{class:"say "+cls,title:"🔊 "+text,"aria-label":"play "+text,onclick:(e)=>{e.stopPropagation();TTS.speak(text,{btn:e.currentTarget})}},"🔊");
};
/* hz + py chip with audio */
window.hzChip = function(hz, py){
  return h("span",{class:"inline-hz"}, h("span",{class:"hz"},hz), py?h("span",{class:"py"},py):null, sayBtn(hz));
};
/* turn <span class="hz">…</span> inside rich text into playable chips */
window.richHTML = function(html){
  const d=h("div",{html:html});
  $$("span.hz",d).forEach(s=>{
    const txt=s.textContent; const b=document.createElement("button");
    b.className="say"; b.textContent="🔊"; b.style.width="24px"; b.style.height="24px"; b.style.fontSize="11px"; b.style.marginLeft="3px";
    b.setAttribute("data-say",txt);
    s.after(b);
  });
  return d.innerHTML;
};
document.addEventListener("click",e=>{
  const b=e.target.closest("[data-say]"); if(b){ e.preventDefault(); TTS.speak(b.getAttribute("data-say"),{btn:b}); }
});

/* ---------- top bar ---------- */
let renderVoiceMenu=null;
window.buildTopbar = function(opts={}){
  const bar=h("header",{class:"topbar"});
  const w=h("div",{class:"wrap"});
  const depth=opts.depth||"";
  w.append(h("a",{class:"brand",href:depth+"index.html"},
    h("span",{class:"seal"},"汉"),
    h("span",null,h("span",{class:"bn"},t("siteName")),h("small",null,"Learn Mandarin Chinese for Beginners"))));
  w.append(h("div",{class:"spacer"}));
  if(opts.home) w.append(h("a",{class:"tbtn",href:depth+"index.html"},"🏠",h("span",{class:"lbl"},t("home"))));
  // voice menu
  const vm=h("div",{class:"menu"});
  const vbtn=h("button",{class:"tbtn",onclick:(e)=>{e.stopPropagation();closeMenus(vm);vm.classList.toggle("open")}},"🔊",h("span",{class:"lbl"},t("voice")));
  const vpop=h("div",{class:"menu-pop voice-pop",onclick:e=>e.stopPropagation()});
  vm.append(vbtn,vpop);
  renderVoiceMenu=function(){
    vpop.innerHTML="";
    const sel=h("select",{onchange:e=>{TTS.pref=e.target.value;LS.set("voice",TTS.pref);TTS.pick();}});
    sel.append(h("option",{value:"auto"},t("autoVoice")+(TTS.voices[0]?" — "+TTS.voices[0].name:"")));
    TTS.voices.forEach(v=>sel.append(h("option",{value:v.name},v.name+" ("+v.lang+")")));
    sel.append(h("option",{value:"online"},t("onlineVoice")));
    sel.value=TTS.pref; if(sel.value!==TTS.pref) sel.value="auto";
    const rng=h("input",{type:"range",min:"0.5",max:"1.2",step:"0.05",value:TTS.rate,oninput:e=>{TTS.rate=+e.target.value;LS.set("rate",TTS.rate);rv.textContent=TTS.rate.toFixed(2)+"×"}});
    const rv=h("b",null,TTS.rate.toFixed(2)+"×");
    vpop.append(h("label",null,t("voiceSel")),sel,h("label",null,t("speed")," ",rv),rng,
      h("div",{style:"margin-top:10px"},h("button",{class:"tbtn",onclick:()=>TTS.speak("你好！欢迎来学习中文。")},t("test"))),
      h("div",{class:"hint"},t("voiceHint")));
  };
  renderVoiceMenu();
  w.append(vm);
  // language menu
  const lm=h("div",{class:"menu"});
  const cur=LANGS.find(l=>l.code===lang);
  const lbtn=h("button",{class:"tbtn",id:"langBtn",onclick:(e)=>{e.stopPropagation();closeMenus(lm);lm.classList.toggle("open")}},"🌐",h("span",null,cur.name),"▾");
  const lpop=h("div",{class:"menu-pop"});
  LANGS.forEach(l=>lpop.append(h("button",{class:"opt"+(l.code===lang?" on":""),onclick:()=>{setLang(l.code);lm.classList.remove("open")}},h("span",null,l.flag),l.name)));
  lm.append(lbtn,lpop);
  w.append(lm);
  bar.append(w);
  return bar;
};
function closeMenus(except){ $$(".menu.open").forEach(m=>{if(m!==except)m.classList.remove("open")}); }
document.addEventListener("click",()=>closeMenus());

/* ---------- Hanzi Writer modal ---------- */
window.HW_URL="https://cdn.jsdelivr.net/npm/hanzi-writer@3.5/dist/hanzi-writer.min.js";
let hwLoading=null;
window.loadHW=function(){
  if(window.HanziWriter) return Promise.resolve();
  if(!hwLoading) hwLoading=new Promise((res,rej)=>{const s=document.createElement("script");s.src=HW_URL;s.onload=res;s.onerror=rej;document.head.append(s)});
  return hwLoading;
};
window.isHan = ch=>/[㐀-鿿]/.test(ch);
/* create a writer box for one char; returns element */
window.writerBox = function(ch, size=150){
  const box=h("div",{class:"hw-box",style:`width:${size}px;height:${size}px`});
  const msg=h("div",{class:"wmsg"});
  const wrap=h("div",{class:"wchar"});
  let writer=null;
  const ensure=()=>loadHW().then(()=>{
    if(!writer){ writer=HanziWriter.create(box,ch,{width:size,height:size,padding:8,strokeColor:"#1f2330",radicalColor:"#c8102e",outlineColor:"#e8e1d4",strokeAnimationSpeed:1.1,delayBetweenStrokes:250,showCharacter:true,showOutline:true,highlightColor:"#2459c4",drawingColor:"#2459c4",drawingWidth:Math.max(14,size/10)}); }
    return writer;
  });
  const bA=h("button",{class:"wbtn",onclick:()=>{msg.textContent="";ensure().then(w=>{w.cancelQuiz&&w.cancelQuiz();w.animateCharacter()}).catch(()=>msg.textContent="⚠️ offline")}},t("animate"));
  const bT=h("button",{class:"wbtn",onclick:()=>{msg.textContent="";ensure().then(w=>{w.hideCharacter();w.quiz({showHintAfterMisses:2,onComplete:()=>{msg.textContent="✔ "+t("wellDone");w.showCharacter()}})}).catch(()=>msg.textContent="⚠️ offline")}},t("trace"));
  const bS=h("button",{class:"wbtn",onclick:()=>TTS.speak(ch)},"🔊");
  wrap.append(box,h("div",{class:"hw-tools"},bA,bT,bS),msg);
  // lazy init when visible
  const io=new IntersectionObserver(es=>{ if(es[0].isIntersecting){ io.disconnect(); ensure().catch(()=>{box.textContent=ch;box.style.cssText+=";display:grid;place-items:center;font-size:"+(size*0.6)+"px;font-family:var(--hz)"}); } });
  io.observe(box);
  wrap._writer=()=>ensure();
  return wrap;
};
window.openWriter = function(word, py, meaning){
  let m=$("#writerModal");
  if(!m){ m=h("div",{class:"modal",id:"writerModal",onclick:e=>{if(e.target===m)m.classList.remove("on")}},h("div",{class:"box"})); document.body.append(m); }
  const box=$(".box",m); box.innerHTML="";
  box.append(h("button",{class:"x",onclick:()=>m.classList.remove("on")},"×"),
    h("h3",null,h("span",{class:"hz",style:"font-size:30px;margin-right:10px"},word),py?h("span",{class:"py"},py):null," ",sayBtn(word)),
    meaning?h("div",{style:"color:var(--ink2)"},meaning):null,
    h("div",{style:"font-size:13px;color:var(--mut);margin-top:6px"},t("writeHelp")));
  const chars=h("div",{class:"wchars"});
  Array.from(word).filter(isHan).forEach(c=>chars.append(writerBox(c, Array.from(word).length>2?130:170)));
  box.append(chars);
  m.classList.add("on");
};
document.addEventListener("keydown",e=>{ if(e.key==="Escape") $$(".modal.on").forEach(m=>m.classList.remove("on")); });

/* ---------- scores ---------- */
window.Scores = {
  key:(ch,set)=>`score_${ch}_${set}`,
  get(ch,set){ return LS.get(this.key(ch,set),null); },
  put(ch,set,pct){ const b=this.get(ch,set); if(b==null||pct>b){ LS.set(this.key(ch,set),pct); } },
  chapter(ch,nsets){ let sum=0,done=0; for(let i=0;i<nsets;i++){ const v=this.get(ch,i); if(v!=null){sum+=v;done++} } return {avg: nsets?Math.round(sum/nsets):0, done}; },
  reset(){ try{ Object.keys(localStorage).filter(k=>k.startsWith("cg_score_")).forEach(k=>localStorage.removeItem(k)); }catch(e){} }
};
})();
