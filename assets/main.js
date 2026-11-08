/* Main page */
window.renderMain = function(){
  const D=window.CHAPTER_DATA||{};
  document.body.innerHTML="";
  document.body.append(buildTopbar());
  const main=h("main",{class:"wrap"});
  const nWords=(window.VOCAB_PARTS||[]).reduce((a,c)=>a+c.words.length,0);
  let nEx=0; for(let i=1;i<=8;i++) if(D[i]) nEx+=D[i].sets.reduce((a,s)=>a+s.items.length,0);
  nEx += (window.VOCAB_PARTS||[]).reduce((a,c)=>a+10+10+7+(c.sentences?c.sentences.length:0),0);
  // overall progress
  const prog=[]; for(let i=1;i<=9;i++) prog.push(chapterProgress(i));
  const overall=Math.round(prog.reduce((a,b)=>a+b.avg,0)/9);
  main.append(h("section",{class:"hero"},
    h("div",{class:"bg-hz"},"中文"),
    h("div",{class:"book-chip"},"📘 ",h("i",null,"Learn Mandarin Chinese for Beginners")," · ",t("bookBy")),
    h("h1",{html:t("heroTitle")}),
    h("p",{class:"lead"},t("heroLead")),
    h("div",{class:"stats"},
      h("div",{class:"stat"},h("b",null,"9"),h("span",null,t("chapters"))),
      h("div",{class:"stat"},h("b",null,nEx+"+"),h("span",null,t("exercises"))),
      h("div",{class:"stat"},h("b",null,nWords),h("span",null,t("words"))),
      h("div",{class:"stat"},h("b",null,overall+"%"),h("span",null,t("myProgress")))),
    h("div",{class:"howto"},
      h("div",null,h("b",null,t("how1t")),h("span",null,t("how1"))),
      h("div",null,h("b",null,t("how2t")),h("span",null,t("how2"))),
      h("div",null,h("b",null,t("how3t")),h("span",null,t("how3"))))));
  main.append(h("h2",{class:"sec-title"},"📚 "+t("chapters")));
  const grid=h("div",{class:"ch-grid"});
  for(let i=1;i<=9;i++){
    const d=D[i]; if(!d) continue;
    const pr=prog[i-1];
    let items = i===9 ? nWords+" "+t("words") : d.sets.reduce((a,s)=>a+s.items.length,0)+" "+t("exercises");
    const sets = i===9 ? (window.vocabSetCount?vocabSetCount():0) : d.sets.length;
    grid.append(h("a",{class:"ch-card",href:"ch"+i+".html"},
      h("div",{class:"top"},h("div",{class:"ic"},d.icon),h("div",null,h("div",{class:"num"},t("chapter")+" "+i+t("chapterSuffix")),h("h3",{html:L(d.title)}))),
      h("p",{html:L(d.subtitle)}),
      h("div",{class:"meta"},h("span",null,"📖 "+(i===9?13:d.sections.length)+" "+(i===9?"topics":"sections").replace("sections",{ko:"섹션",en:"sections",es:"secciones",ja:"セクション",fr:"sections"}[getLang()]).replace("topics",{ko:"주제",en:"topics",es:"temas",ja:"テーマ",fr:"thèmes"}[getLang()])),h("span",null,"✍️ "+items),h("span",null,"🔊")),
      h("div",{class:"prog-row"},h("div",{class:"prog"},h("i",{style:"width:"+pr.avg+"%"})),h("span",null,pr.done?t("best")+" "+pr.avg+"%":t("notYet")))));
  }
  main.append(grid);
  main.append(h("div",{style:"text-align:right;margin:-20px 0 30px"},h("button",{class:"wbtn",onclick:()=>{ if(confirm(t("resetConfirm"))){Scores.reset();renderMain();} }},"↺ "+t("resetProgress"))));
  document.body.append(main,h("footer",null,h("div",{class:"wrap"},t("footer"))));
  document.title=t("siteName")+" · Learn Mandarin Chinese";
};
function chapterProgress(i){
  if(i===9){ const slots=window.vocabSlots?vocabSlots():[]; let s=0,d=0; slots.forEach(k=>{const v=Scores.get(9,k); if(v!=null){s+=v;d++}}); return {avg:slots.length?Math.round(s/slots.length):0,done:d}; }
  const d=(window.CHAPTER_DATA||{})[i]; if(!d) return {avg:0,done:0};
  return Scores.chapter(i,d.sets.length);
}
