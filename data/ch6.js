window.CHAPTER_DATA = window.CHAPTER_DATA || {};
window.CHAPTER_DATA[6] = {
  id: 6,
  icon: "🔤",
  title: {ko:"6장. 병음 발음", en:"Chapter 6: Pinyin Pronunciation", es:"Capítulo 6: Pronunciación del pinyin", ja:"第6章 ピンインの発音", fr:"Chapitre 6 : Prononciation du pinyin"},
  subtitle: {
    ko:"성모 + 운모 + 성조 = 중국어 한 음절!",
    en:"Initial + final + tone = one Mandarin syllable!",
    es:"¡Inicial + final + tono = una sílaba en chino!",
    ja:"声母＋韻母＋声調＝中国語の1音節！",
    fr:"Initiale + finale + ton = une syllabe en mandarin !"
  },
  goals: [
    {ko:"한 음절을 성모·운모·성조로 나눌 수 있다.", en:"I can split a syllable into initial, final and tone.", es:"Puedo dividir una sílaba en inicial, final y tono.", ja:"1音節を声母・韻母・声調に分けられる。", fr:"Je sais découper une syllabe en initiale, finale et ton."},
    {ko:"헷갈리는 성모(q/ch, x/sh, z/zh 등)를 구별해 발음할 수 있다.", en:"I can tell apart tricky initials (q/ch, x/sh, z/zh…).", es:"Puedo distinguir iniciales difíciles (q/ch, x/sh, z/zh…).", ja:"紛らわしい声母（q/ch、x/sh、z/zh など）を区別できる。", fr:"Je sais distinguer les initiales difficiles (q/ch, x/sh, z/zh…)."},
    {ko:"y·w 철자 규칙과 ü 점 생략 규칙을 적용할 수 있다.", en:"I can apply the y/w spelling rules and the ü-dot rule.", es:"Puedo aplicar las reglas de y/w y de los puntos de la ü.", ja:"y・w のつづりのルールと ü の点の省略ルールを使える。", fr:"Je sais appliquer les règles d'écriture y/w et du tréma de ü."}
  ],
  sections: [
    {
      h: {ko:"병음 한 음절의 구조", en:"How a pinyin syllable is built", es:"Cómo se forma una sílaba en pinyin", ja:"ピンイン1音節のしくみ", fr:"Comment se construit une syllabe"},
      body: {
        ko:"병음 한 음절은 보통 세 부분으로 되어 있어요.<br><b>성모(声母)</b> = 앞의 자음, <b>운모(韵母)</b> = 뒤의 모음 부분, <b>성조(声调)</b> = 음의 높낮이.<br>성모가 없는 음절도 있지만(爱 ài), 운모와 성조는 꼭 있어요. 셋 중 하나만 바뀌어도 다른 글자가 돼요!",
        en:"A pinyin syllable usually has three parts.<br><b>Initial (声母)</b> = the consonant at the start, <b>final (韵母)</b> = the vowel part after it, <b>tone (声调)</b> = the pitch.<br>Some syllables have no initial (爱 ài), but every syllable has a final and a tone. Change any one part and you get a different character!",
        es:"Una sílaba en pinyin suele tener tres partes.<br><b>Inicial (声母)</b> = la consonante del principio, <b>final (韵母)</b> = la parte vocálica, <b>tono (声调)</b> = la entonación.<br>Algunas sílabas no tienen inicial (爱 ài), pero todas tienen final y tono. ¡Cambia una parte y tendrás otro carácter!",
        ja:"ピンインの1音節はふつう3つの部分からなります。<br><b>声母</b>＝最初の子音、<b>韻母（韵母）</b>＝その後の母音部分、<b>声調</b>＝音の高さ。<br>声母のない音節（爱 ài）もありますが、韻母と声調は必ずあります。どれか1つ変わると別の字に！",
        fr:"Une syllabe pinyin a en général trois parties.<br><b>Initiale (声母)</b> = la consonne de départ, <b>finale (韵母)</b> = la partie vocalique, <b>ton (声调)</b> = la hauteur.<br>Certaines syllabes n'ont pas d'initiale (爱 ài), mais toutes ont une finale et un ton. Change une partie et tu obtiens un autre caractère !"
      },
      widget: "cards",
      items: [
        {icon:"👩", title:{ko:"m + a + 1성", en:"m + a + tone 1", es:"m + a + tono 1", ja:"m＋a＋第1声", fr:"m + a + ton 1"}, body:{ko:"妈 mā = 엄마", en:"妈 mā = mum", es:"妈 mā = mamá", ja:"妈 mā＝お母さん", fr:"妈 mā = maman"}, hz:"妈", py:"mā"},
        {icon:"👍", title:{ko:"h + ao + 3성", en:"h + ao + tone 3", es:"h + ao + tono 3", ja:"h＋ao＋第3声", fr:"h + ao + ton 3"}, body:{ko:"好 hǎo = 좋다", en:"好 hǎo = good", es:"好 hǎo = bueno", ja:"好 hǎo＝よい", fr:"好 hǎo = bon"}, hz:"好", py:"hǎo"},
        {icon:"🇨🇳", title:{ko:"zh + ong + 1성", en:"zh + ong + tone 1", es:"zh + ong + tono 1", ja:"zh＋ong＋第1声", fr:"zh + ong + ton 1"}, body:{ko:"中 zhōng = 가운데", en:"中 zhōng = middle", es:"中 zhōng = medio", ja:"中 zhōng＝なか", fr:"中 zhōng = milieu"}, hz:"中", py:"zhōng"},
        {icon:"❤️", title:{ko:"(성모 없음) + ai + 4성", en:"(no initial) + ai + tone 4", es:"(sin inicial) + ai + tono 4", ja:"（声母なし）＋ai＋第4声", fr:"(pas d'initiale) + ai + ton 4"}, body:{ko:"爱 ài = 사랑하다", en:"爱 ài = love", es:"爱 ài = amar", ja:"爱 ài＝愛する", fr:"爱 ài = aimer"}, hz:"爱", py:"ài"}
      ]
    },
    {
      h: {ko:"성모 ①: b p m f d t n l g k h j q x", en:"Initials ①: b p m f d t n l g k h j q x", es:"Iniciales ①: b p m f d t n l g k h j q x", ja:"声母①：b p m f d t n l g k h j q x", fr:"Initiales ① : b p m f d t n l g k h j q x"},
      body: {
        ko:"영어와 비슷한 소리가 많지만 주의할 점이 있어요.<br><b>b/p, d/t, g/k</b>는 짝이에요. p·t·k는 <b>숨(바람)을 세게</b> 내뿜고, b·d·g는 바람 없이 부드럽게.<br><b>j, q, x</b>는 혀끝을 아랫니 뒤에 대고 입을 옆으로 벌려 내요. 뒤에는 항상 i나 ü가 와요.",
        en:"Many sounds are close to English, with a few traps.<br><b>b/p, d/t, g/k</b> are pairs: p, t, k have a <b>strong puff of air</b>; b, d, g have none.<br><b>j, q, x</b> are made with the tongue tip behind the lower teeth and lips spread. They are always followed by i or ü.",
        es:"Muchos sonidos se parecen al inglés, pero hay trampas.<br><b>b/p, d/t, g/k</b> son parejas: p, t, k llevan un <b>soplo fuerte de aire</b>; b, d, g, no.<br><b>j, q, x</b> se hacen con la punta de la lengua detrás de los dientes inferiores y los labios estirados. Siempre van seguidas de i o ü.",
        ja:"英語に似た音が多いですが、注意点もあります。<br><b>b/p、d/t、g/k</b> はペア。p・t・k は<b>息を強く</b>出し、b・d・g は息を出さずにやわらかく。<br><b>j、q、x</b> は舌先を下の歯の裏に付け、口を横に引いて発音。後ろには必ず i か ü が来ます。",
        fr:"Beaucoup de sons ressemblent à l'anglais, avec quelques pièges.<br><b>b/p, d/t, g/k</b> vont par paires : p, t, k ont un <b>fort souffle d'air</b> ; b, d, g n'en ont pas.<br><b>j, q, x</b> se font la pointe de la langue derrière les dents du bas, lèvres étirées. Ils sont toujours suivis de i ou ü."
      },
      widget: "pinyin",
      items: [
        {title:{ko:"입술 소리", en:"Lip sounds", es:"Sonidos labiales", ja:"唇の音", fr:"Sons des lèvres"}, rows:[
          {sym:"b", hz:"八", py:"bā", tip:{ko:"‘ㅃ’과 ‘ㅂ’ 사이, 바람 없이", en:"unaspirated, like “p” in “spy”", es:"como una p suave del español, sin aire", ja:"息を出さない「パ」と「バ」の間", fr:"comme un « p » français, sans souffle"}},
          {sym:"p", hz:"怕", py:"pà", tip:{ko:"‘ㅍ’, 바람을 세게", en:"“p” in “pie” with a strong puff", es:"p con un soplo fuerte de aire", ja:"息を強く出す「パ」", fr:"« p » avec un fort souffle d'air"}},
          {sym:"m", hz:"妈", py:"mā", tip:{ko:"‘ㅁ’과 같아요", en:"like “m” in “mum”", es:"como la m de “mamá”", ja:"「マ」の m", fr:"comme le « m » de « maman »"}},
          {sym:"f", hz:"发", py:"fā", tip:{ko:"윗니를 아랫입술에 대는 f", en:"like “f” in “far”", es:"como la f de “fácil”", ja:"上の歯を下唇に当てる f", fr:"comme le « f » de « fa »"}}
        ]},
        {title:{ko:"혀끝 소리", en:"Tongue-tip sounds", es:"Sonidos con la punta de la lengua", ja:"舌先の音", fr:"Sons de la pointe de la langue"}, rows:[
          {sym:"d", hz:"大", py:"dà", tip:{ko:"‘ㄸ’과 ‘ㄷ’ 사이, 바람 없이", en:"unaspirated, like “t” in “stop”", es:"como la t española, sin aire", ja:"息を出さない「タ」と「ダ」の間", fr:"comme un « t » français, sans souffle"}},
          {sym:"t", hz:"他", py:"tā", tip:{ko:"‘ㅌ’, 바람을 세게", en:"“t” in “top” with a puff", es:"t con soplo fuerte de aire", ja:"息を強く出す「タ」", fr:"« t » avec un fort souffle"}},
          {sym:"n", hz:"你", py:"nǐ", tip:{ko:"‘ㄴ’과 같아요", en:"like “n” in “no”", es:"como la n de “no”", ja:"「ナ」の n", fr:"comme le « n » de « non »"}},
          {sym:"l", hz:"拉", py:"lā", tip:{ko:"‘ㄹ’(라)", en:"like “l” in “law”", es:"como la l de “la”", ja:"英語の l", fr:"comme le « l » de « la »"}}
        ]},
        {title:{ko:"목구멍 소리", en:"Back-of-throat sounds", es:"Sonidos del fondo de la boca", ja:"のどの奥の音", fr:"Sons du fond de la bouche"}, rows:[
          {sym:"g", hz:"哥", py:"gē", tip:{ko:"‘ㄲ’과 ‘ㄱ’ 사이, 바람 없이", en:"unaspirated, like “k” in “sky”", es:"como una c suave de “casa”, sin aire", ja:"息を出さない「カ」と「ガ」の間", fr:"comme un « k » français, sans souffle"}},
          {sym:"k", hz:"课", py:"kè", tip:{ko:"‘ㅋ’, 바람을 세게", en:"“k” in “kite” with a puff", es:"k con soplo fuerte de aire", ja:"息を強く出す「カ」", fr:"« k » avec un fort souffle"}},
          {sym:"h", hz:"喝", py:"hē", tip:{ko:"목 안쪽을 긁는 듯한 ‘ㅎ’", en:"a raspy “h”, a bit like Scottish “loch”", es:"como la j española, más suave", ja:"のどの奥でこする「ハ」", fr:"un « h » râpeux, comme la jota espagnole"}}
        ]},
        {title:{ko:"혓바닥 소리 (j q x)", en:"Flat-tongue sounds (j q x)", es:"Sonidos palatales (j q x)", ja:"舌面音（j q x）", fr:"Sons palataux (j q x)"}, rows:[
          {sym:"j", hz:"鸡", py:"jī", tip:{ko:"‘지’, 입을 옆으로", en:"like “j” in “jeep”, lips spread", es:"como “yi” con lengua plana, sin aire", ja:"口を横に引いた「ジ」", fr:"comme « dj » de « djinn », lèvres étirées"}},
          {sym:"q", hz:"七", py:"qī", tip:{ko:"‘치’, 바람을 세게 — ch가 아니에요!", en:"≈ “ch” in “cheese” (tongue flat) — not English q!", es:"≈ “chi” con soplo y lengua plana; no es la q española", ja:"息を強く出す「チ」。英語の q ではない！", fr:"≈ « tch » de « tchin », langue à plat — pas le « q » français !"}},
          {sym:"x", hz:"西", py:"xī", tip:{ko:"‘시’, 입을 옆으로 — 영어 x가 아니에요!", en:"≈ “sh” in “sheep” (tongue flat) — not English x!", es:"≈ “si” suave, entre s y sh; no es la x española", ja:"口を横に引いた「シ」。英語の x ではない！", fr:"≈ « ch » de « chic », langue à plat — pas le « x » français !"}}
        ]}
      ]
    },
    {
      h: {ko:"성모 ②: zh ch sh r z c s", en:"Initials ②: zh ch sh r z c s", es:"Iniciales ②: zh ch sh r z c s", ja:"声母②：zh ch sh r z c s", fr:"Initiales ② : zh ch sh r z c s"},
      body: {
        ko:"<b>zh ch sh r</b>은 혀끝을 <b>위로 말아 올려</b> 입천장 앞쪽에 가까이 대고 내요(권설음).<br><b>z c s</b>는 혀끝을 <b>윗니 뒤</b>에 두고 내요. c는 영어 cats의 ‘ts’처럼!<br>zhi·chi·shi·ri·zi·ci·si의 <b>i는 ‘이’가 아니에요</b>. 앞 자음 모양을 유지한 채 ‘으’처럼 웅~ 울리는 소리예요.",
        en:"<b>zh ch sh r</b> are made with the tongue tip <b>curled up</b> towards the roof of the mouth (retroflex).<br><b>z c s</b> are made with the tongue tip <b>behind the upper teeth</b>. c sounds like “ts” in “cats”!<br>The <b>i in zhi, chi, shi, ri, zi, ci, si is NOT “ee”</b>. Keep the consonant position and let a buzzing “-rr/-zz” vowel ring.",
        es:"<b>zh ch sh r</b> se hacen con la punta de la lengua <b>curvada hacia arriba</b> (retrofleja).<br><b>z c s</b> se hacen con la lengua <b>detrás de los dientes superiores</b>. ¡La c suena como “ts” en “tsunami”!<br>La <b>i de zhi, chi, shi, ri, zi, ci, si NO es “i”</b>: mantén la posición de la consonante y deja sonar una vocal zumbante.",
        ja:"<b>zh ch sh r</b> は舌先を<b>上にそり上げて</b>上あごに近づけて出します（そり舌音）。<br><b>z c s</b> は舌先を<b>上の歯の裏</b>に置きます。c は「ツ」に近い音！<br>zhi・chi・shi・ri・zi・ci・si の <b>i は「イ」ではありません</b>。子音の形のまま「ウ」に近い響く音を出します。",
        fr:"<b>zh ch sh r</b> se font la pointe de la langue <b>recourbée vers le haut</b> (rétroflexe).<br><b>z c s</b> se font la langue <b>derrière les dents du haut</b>. Le c se dit « ts » comme dans « tsar » !<br>Le <b>i de zhi, chi, shi, ri, zi, ci, si n'est PAS « i »</b> : garde la position de la consonne et laisse vibrer une voyelle bourdonnante."
      },
      widget: "pinyin",
      items: [
        {title:{ko:"혀 말기 (권설음)", en:"Curled tongue (retroflex)", es:"Lengua curvada (retroflejas)", ja:"そり舌音", fr:"Langue recourbée (rétroflexes)"}, rows:[
          {sym:"zh", hz:"知", py:"zhī", tip:{ko:"혀를 말고 ‘즈’, 바람 없이", en:"like “j” in “judge”, tongue curled", es:"como “ch” suave con la lengua curvada", ja:"舌をそらせて息なしの「ヂ」", fr:"comme « dj », langue recourbée"}},
          {sym:"ch", hz:"吃", py:"chī", tip:{ko:"혀를 말고 ‘츠’, 바람 세게", en:"like “ch” in “church”, tongue curled", es:"como la ch de “chico”, lengua curvada y con aire", ja:"舌をそらせて息を強く「チ」", fr:"comme « tch », langue recourbée, avec souffle"}},
          {sym:"sh", hz:"是", py:"shì", tip:{ko:"혀를 말고 ‘스’", en:"like “sh” in “shirt”, tongue curled", es:"como la “sh” inglesa, lengua curvada", ja:"舌をそらせて「シ」", fr:"comme « ch » de « chou », langue recourbée"}},
          {sym:"r", hz:"日", py:"rì", tip:{ko:"sh 모양 그대로 목을 울려요", en:"like “r” in “run” with a slight buzz", es:"como una r inglesa con zumbido", ja:"sh の形のまま声を出す", fr:"comme le « j » de « jour », langue recourbée"}}
        ]},
        {title:{ko:"윗니 뒤 (설치음)", en:"Behind the teeth", es:"Detrás de los dientes", ja:"歯の裏（舌歯音）", fr:"Derrière les dents"}, rows:[
          {sym:"z", hz:"字", py:"zì", tip:{ko:"‘즈’, 바람 없이 (ds처럼)", en:"like “ds” in “kids”", es:"como “ds” en inglés “kids”", ja:"息なしの「ズ」（ds）", fr:"comme « dz »"}},
          {sym:"c", hz:"词", py:"cí", tip:{ko:"‘츠’, 바람 세게 (ts처럼)", en:"like “ts” in “cats”, with a puff", es:"como “ts” en “tsunami”, con aire", ja:"息を強く「ツ」", fr:"comme « ts » de « tsar », avec souffle"}},
          {sym:"s", hz:"四", py:"sì", tip:{ko:"‘스’", en:"like “s” in “sit”", es:"como la s de “sí”", ja:"「ス」", fr:"comme le « s » de « si »"}}
        ]}
      ],
      note: {
        ko:"zhi, chi, shi, ri, zi, ci, si의 i를 ‘이’로 읽으면 jī·qī·xī처럼 들려요. 예: 是 shì ≠ 戏 xì, 四 sì ≠ 戏 xì.",
        en:"If you read the i in zhi, chi, shi, ri, zi, ci, si as “ee”, it sounds like jī/qī/xī. e.g. 是 shì ≠ 戏 xì, 四 sì ≠ 戏 xì.",
        es:"Si lees la i de zhi, chi, shi, ri, zi, ci, si como “i”, suena como jī/qī/xī. Ej.: 是 shì ≠ 戏 xì, 四 sì ≠ 戏 xì.",
        ja:"zhi・chi・shi・ri・zi・ci・si の i を「イ」と読むと jī・qī・xī のように聞こえます。例：是 shì ≠ 戏 xì、四 sì ≠ 戏 xì。",
        fr:"Si tu lis le i de zhi, chi, shi, ri, zi, ci, si comme « i », on entend jī/qī/xī. Ex. : 是 shì ≠ 戏 xì, 四 sì ≠ 戏 xì."
      }
    },
    {
      h: {ko:"반모음 i · u · ü 와 y · w 철자", en:"Semivowels i · u · ü and y · w spelling", es:"Semivocales i · u · ü y la escritura con y · w", ja:"半母音 i・u・ü と y・w のつづり", fr:"Semi-voyelles i · u · ü et l'écriture y · w"},
      body: {
        ko:"i, u, ü는 성모 뒤에 붙기도 하고, 혼자 음절을 만들기도 해요.<br>앞에 성모가 없을 때는 철자를 이렇게 바꿔요:<br><b>i → yi</b> (一 yī), <b>u → wu</b> (五 wǔ), <b>ü → yu</b> (鱼 yú — 점이 사라져요!).<br>뒤에 다른 모음이 붙으면: ia → <b>ya</b>, ua → <b>wa</b>, üe → <b>yue</b> 처럼 i→y, u→w, ü→yu.",
        en:"i, u and ü can follow an initial or make a syllable on their own.<br>With no initial in front, the spelling changes:<br><b>i → yi</b> (一 yī), <b>u → wu</b> (五 wǔ), <b>ü → yu</b> (鱼 yú — the dots disappear!).<br>When another vowel follows: ia → <b>ya</b>, ua → <b>wa</b>, üe → <b>yue</b> (i→y, u→w, ü→yu).",
        es:"i, u y ü pueden ir tras una inicial o formar sílaba solas.<br>Sin inicial delante, la escritura cambia:<br><b>i → yi</b> (一 yī), <b>u → wu</b> (五 wǔ), <b>ü → yu</b> (鱼 yú — ¡desaparecen los puntos!).<br>Si sigue otra vocal: ia → <b>ya</b>, ua → <b>wa</b>, üe → <b>yue</b> (i→y, u→w, ü→yu).",
        ja:"i、u、ü は声母の後に付くことも、単独で音節を作ることもあります。<br>前に声母がないときは、つづりをこう変えます：<br><b>i → yi</b>（一 yī）、<b>u → wu</b>（五 wǔ）、<b>ü → yu</b>（鱼 yú — 点が消える！）。<br>後ろに母音が続くと：ia → <b>ya</b>、ua → <b>wa</b>、üe → <b>yue</b>（i→y、u→w、ü→yu）。",
        fr:"i, u et ü peuvent suivre une initiale ou former seuls une syllabe.<br>Sans initiale devant, l'écriture change :<br><b>i → yi</b> (一 yī), <b>u → wu</b> (五 wǔ), <b>ü → yu</b> (鱼 yú — le tréma disparaît !).<br>Si une autre voyelle suit : ia → <b>ya</b>, ua → <b>wa</b>, üe → <b>yue</b> (i→y, u→w, ü→yu)."
      },
      widget: "pinyin",
      items: [
        {title:{ko:"혼자 쓸 때", en:"Standing alone", es:"Solas", ja:"単独のとき", fr:"Seules"}, rows:[
          {sym:"i → yi", hz:"一", py:"yī", tip:{ko:"‘이’ — 혼자 쓰면 yi", en:"“ee” as in “see”; alone it is written yi", es:"como la i de “sí”; sola se escribe yi", ja:"「イ」。単独では yi と書く", fr:"comme « i » de « si » ; seule elle s'écrit yi"}},
          {sym:"u → wu", hz:"五", py:"wǔ", tip:{ko:"‘우’ — 입술을 둥글게, 혼자 쓰면 wu", en:"“oo” as in “food”; alone it is written wu", es:"como la u de “uno”; sola se escribe wu", ja:"唇を丸めた「ウ」。単独では wu", fr:"comme « ou » de « fou » ; seule elle s'écrit wu"}},
          {sym:"ü → yu", hz:"鱼", py:"yú", tip:{ko:"‘이’ 입 모양에서 입술만 동그랗게 ‘위’ (한 소리로)", en:"say “ee” with rounded lips (like German ü); alone it is yu", es:"di “i” con los labios redondeados (como la u francesa); sola es yu", ja:"「イ」の舌で唇を丸める（ドイツ語の ü）。単独では yu", fr:"comme le « u » français de « tu » ; seule elle s'écrit yu"}}
        ]}
      ]
    },
    {
      h: {ko:"단운모와 기본 운모", en:"Simple and basic finals", es:"Finales simples y básicas", ja:"単韻母と基本の韻母", fr:"Finales simples et de base"},
      body: {
        ko:"운모는 음절의 뒷부분이에요. 먼저 기본 운모부터 익혀요.<br><b>-n</b>과 <b>-ng</b>를 꼭 구별하세요: an(안) vs ang(앙), en(언) vs eng(엉).<br>e는 ‘에’가 아니라 ‘으어’에 가까워요!",
        en:"Finals are the end part of a syllable. Start with the basic ones.<br>Keep <b>-n</b> and <b>-ng</b> apart: an vs ang, en vs eng.<br>e is not “eh” — it is closer to the “u” in “duh”!",
        es:"Las finales son la parte final de la sílaba. Empieza por las básicas.<br>Distingue bien <b>-n</b> y <b>-ng</b>: an / ang, en / eng.<br>La e no es “e” española: se parece a una “ë” cerrada, entre “e” y “o”.",
        ja:"韻母は音節の後ろの部分。まず基本の韻母から覚えましょう。<br><b>-n</b> と <b>-ng</b> を区別しよう：an（アン）と ang（アン゛）、en と eng。<br>e は「エ」ではなく「ウ」と「オ」の間のような音！",
        fr:"Les finales sont la fin de la syllabe. Commence par les finales de base.<br>Distingue bien <b>-n</b> et <b>-ng</b> : an / ang, en / eng.<br>Le e n'est pas « é » : il ressemble au « e » de « le », un peu plus en arrière."
      },
      widget: "pinyin",
      items: [
        {title:{ko:"단운모", en:"Single vowels", es:"Vocales simples", ja:"単母音", fr:"Voyelles simples"}, rows:[
          {sym:"a", hz:"他", py:"tā", tip:{ko:"입을 크게 ‘아’", en:"open “ah” as in “father”", es:"a abierta como en “casa”", ja:"口を大きく「ア」", fr:"« a » bien ouvert"}},
          {sym:"o", hz:"波", py:"bō", tip:{ko:"‘오’에서 살짝 ‘(우)오’ — b p m f 뒤에서 주로", en:"“aw/wo”, mostly after b p m f", es:"como “uo” suave, sobre todo tras b p m f", ja:"「(ウ)オ」。主に b p m f の後", fr:"comme « (ou)o », surtout après b p m f"}},
          {sym:"e", hz:"饿", py:"è", tip:{ko:"‘으어’ — 입을 옆으로 살짝", en:"like “u” in “duh”, from the back of the mouth", es:"entre “e” y “o”, en el fondo de la boca", ja:"「ウ」と「オ」の間（のどの奥）", fr:"comme « eu » de « peur », plus en arrière"}},
          {sym:"ê", hz:"也", py:"yě", tip:{ko:"‘에’ — 혼자는 거의 안 쓰고 ie, üe 안에 나와요", en:"“eh” as in “ten”; mostly found inside ie and üe", es:"como la e de “té”; aparece sobre todo en ie y üe", ja:"「エ」。単独はまれで ie・üe の中に出る", fr:"comme « è » de « mère » ; surtout dans ie et üe"}},
          {sym:"er", hz:"二", py:"èr", tip:{ko:"‘얼’ — 혀를 말아 올리며", en:"like “ar” in American “are”, tongue curled", es:"como “ar” en inglés americano, con la lengua curvada", ja:"舌をそらせる「アル」", fr:"comme « eur » avec la langue recourbée"}}
        ]},
        {title:{ko:"복운모", en:"Vowel combinations", es:"Diptongos", ja:"複韻母", fr:"Diphtongues"}, rows:[
          {sym:"ai", hz:"爱", py:"ài", tip:{ko:"‘아이’", en:"like “eye”", es:"como “ai” en “hay”", ja:"「アイ」", fr:"comme « aïe »"}},
          {sym:"ei", hz:"黑", py:"hēi", tip:{ko:"‘에이’", en:"like “ay” in “say”", es:"como “ei” en “rey”", ja:"「エイ」", fr:"comme « eille » de « merveille »"}},
          {sym:"ao", hz:"好", py:"hǎo", tip:{ko:"‘아오’", en:"like “ow” in “how”", es:"como “ao” en “Callao”", ja:"「アオ」", fr:"comme « ao » de « cacao »"}},
          {sym:"ou", hz:"狗", py:"gǒu", tip:{ko:"‘어우’ (오우)", en:"like “oh” in “go”", es:"como “ou” en “Bou”", ja:"「オウ」", fr:"comme « eau » + « ou »"}}
        ]},
        {title:{ko:"콧소리 운모 (-n / -ng)", en:"Nasal finals (-n / -ng)", es:"Finales nasales (-n / -ng)", ja:"鼻音韻母（-n / -ng）", fr:"Finales nasales (-n / -ng)"}, rows:[
          {sym:"an", hz:"安", py:"ān", tip:{ko:"‘안’ — 혀끝이 윗니 뒤에", en:"“an” as in “pan” but with “ah”", es:"como “an” en “pan”", ja:"「アン」（舌先が上の歯の裏）", fr:"« ane » avec n bien prononcé"}},
          {sym:"en", hz:"门", py:"mén", tip:{ko:"‘언’", en:"like “un” in “taken”", es:"como “en” con una e neutra", ja:"「エン」と「ウン」の間", fr:"comme « eune »"}},
          {sym:"ang", hz:"忙", py:"máng", tip:{ko:"‘앙’ — 입 안쪽에서 울려요", en:"like “ahng”, ending at the back", es:"como “ang” con la ng del fondo", ja:"「アン゛」（奥で響かせる）", fr:"« ang » qui résonne au fond"}},
          {sym:"eng", hz:"冷", py:"lěng", tip:{ko:"‘엉’", en:"like “ung” in “lung”", es:"como “ung” en inglés “lung”", ja:"「オン゛」に近い", fr:"comme « eung »"}}
        ]}
      ]
    },
    {
      h: {ko:"결합 운모: i·u·ü로 시작하는 운모", en:"Compound finals starting with i, u, ü", es:"Finales compuestas con i, u, ü", ja:"i・u・ü で始まる結合韻母", fr:"Finales composées en i, u, ü"},
      body: {
        ko:"각 줄의 왼쪽은 <b>성모가 있을 때</b>, 오른쪽은 <b>성모 없이 혼자 쓸 때</b>의 철자예요.<br>세 가지는 줄여 써요: <b>iou → -iu</b> (六 liù), <b>uei → -ui</b> (对 duì), <b>uen → -un</b> (春 chūn).<br>소리는 줄어들지 않으니 가운데 모음을 살짝 넣어 발음해요.",
        en:"In each row, the left spelling is used <b>after an initial</b>, the right one <b>with no initial</b>.<br>Three finals are shortened in writing: <b>iou → -iu</b> (六 liù), <b>uei → -ui</b> (对 duì), <b>uen → -un</b> (春 chūn).<br>The sound is not shortened, so keep a light middle vowel.",
        es:"En cada fila, la forma de la izquierda se usa <b>tras una inicial</b> y la de la derecha <b>sin inicial</b>.<br>Tres finales se acortan al escribir: <b>iou → -iu</b> (六 liù), <b>uei → -ui</b> (对 duì), <b>uen → -un</b> (春 chūn).<br>El sonido no se acorta: mantén una vocal intermedia suave.",
        ja:"各行の左は<b>声母があるとき</b>、右は<b>声母なしで単独のとき</b>のつづりです。<br>3つは短縮して書きます：<b>iou → -iu</b>（六 liù）、<b>uei → -ui</b>（对 duì）、<b>uen → -un</b>（春 chūn）。<br>音は短くならないので、真ん中の母音を軽く入れて発音します。",
        fr:"Dans chaque ligne, la forme de gauche s'emploie <b>après une initiale</b>, celle de droite <b>sans initiale</b>.<br>Trois finales s'abrègent à l'écrit : <b>iou → -iu</b> (六 liù), <b>uei → -ui</b> (对 duì), <b>uen → -un</b> (春 chūn).<br>Le son, lui, ne s'abrège pas : garde une légère voyelle au milieu."
      },
      widget: "pinyin",
      items: [
        {title:{ko:"i로 시작", en:"Starting with i", es:"Empiezan por i", ja:"i で始まる", fr:"Commençant par i"}, rows:[
          {sym:"ia · ya", hz:"家", py:"jiā", tip:{ko:"‘이아’를 빠르게 ‘야’ (牙 yá)", en:"“ya” as in “yard” (牙 yá)", es:"“ia” como en “piano” (牙 yá)", ja:"「ヤ」（牙 yá）", fr:"« ia » comme « piano » (牙 yá)"}},
          {sym:"ie · ye", hz:"谢", py:"xiè", tip:{ko:"‘이에’ → ‘예’ (也 yě)", en:"“ye” as in “yes” (也 yě)", es:"“ie” como en “pie” (也 yě)", ja:"「イエ」（也 yě）", fr:"« ié » comme « pied » (也 yě)"}},
          {sym:"iao · yao", hz:"小", py:"xiǎo", tip:{ko:"‘이아오’ → ‘야오’ (要 yào)", en:"“yow” as in “yowl” (要 yào)", es:"“iao” como “miau” (要 yào)", ja:"「ヤオ」（要 yào）", fr:"« iao » comme « miaou » (要 yào)"}},
          {sym:"iou · you (-iu)", hz:"六", py:"liù", tip:{ko:"‘이오우’ → ‘요우’. 성모 뒤에선 iu로 써요 (有 yǒu)", en:"“yo” as in “yo-yo”; written -iu after an initial (有 yǒu)", es:"como “io(u)”; tras inicial se escribe -iu (有 yǒu)", ja:"「ヨウ」。声母の後では iu と書く（有 yǒu）", fr:"« io(u) » ; après une initiale on écrit -iu (有 yǒu)"}},
          {sym:"ian · yan", hz:"天", py:"tiān", tip:{ko:"‘이안’이 아니라 ‘이엔’ → ‘옌’ (烟 yān)", en:"sounds like “yen”, but is spelled yan (烟 yān)", es:"suena como “ien”, pero se escribe yan (烟 yān)", ja:"「イエン」と発音、つづりは yan（烟 yān）", fr:"se prononce « yenne », mais s'écrit yan (烟 yān)"}},
          {sym:"in · yin", hz:"新", py:"xīn", tip:{ko:"‘인’ (音 yīn)", en:"“een” as in “seen” (音 yīn)", es:"“in” como en “fin” (音 yīn)", ja:"「イン」（音 yīn）", fr:"« ine » comme « mine » (音 yīn)"}},
          {sym:"iang · yang", hz:"想", py:"xiǎng", tip:{ko:"‘이앙’ → ‘양’ (羊 yáng)", en:"“yahng” (羊 yáng)", es:"“iang” (羊 yáng)", ja:"「ヤン゛」（羊 yáng）", fr:"« iang » (羊 yáng)"}},
          {sym:"ing · ying", hz:"听", py:"tīng", tip:{ko:"‘잉’ (英 yīng)", en:"“ing” as in “sing” (英 yīng)", es:"“ing” como en inglés “sing” (英 yīng)", ja:"「イン゛」（英 yīng）", fr:"« ing » comme « parking » (英 yīng)"}}
        ]},
        {title:{ko:"u로 시작", en:"Starting with u", es:"Empiezan por u", ja:"u で始まる", fr:"Commençant par u"}, rows:[
          {sym:"ua · wa", hz:"花", py:"huā", tip:{ko:"‘와’ (瓦 wǎ)", en:"“wa” as in “wander” (瓦 wǎ)", es:"“ua” como en “agua” (瓦 wǎ)", ja:"「ワ」（瓦 wǎ）", fr:"« oua » comme « ouah » (瓦 wǎ)"}},
          {sym:"uo · wo", hz:"多", py:"duō", tip:{ko:"‘워’ (我 wǒ)", en:"“wo” as in “woe” (我 wǒ)", es:"“uo” (我 wǒ)", ja:"「ウオ」（我 wǒ）", fr:"« ouo » (我 wǒ)"}},
          {sym:"uai · wai", hz:"快", py:"kuài", tip:{ko:"‘와이’ (外 wài)", en:"like “why” (外 wài)", es:"“uai” como en “Paraguay” (外 wài)", ja:"「ワイ」（外 wài）", fr:"« ouaï » (外 wài)"}},
          {sym:"uei · wei (-ui)", hz:"对", py:"duì", tip:{ko:"‘웨이’. 성모 뒤에선 ui로 써요 (为 wèi)", en:"like “way”; written -ui after an initial (为 wèi)", es:"como “uei”; tras inicial se escribe -ui (为 wèi)", ja:"「ウェイ」。声母の後では ui と書く（为 wèi）", fr:"« oueï » ; après une initiale on écrit -ui (为 wèi)"}},
          {sym:"uan · wan", hz:"关", py:"guān", tip:{ko:"‘완’ (万 wàn)", en:"“wahn” (万 wàn)", es:"“uan” como en “Juan” (万 wàn)", ja:"「ワン」（万 wàn）", fr:"« ouane » (万 wàn)"}},
          {sym:"uen · wen (-un)", hz:"春", py:"chūn", tip:{ko:"‘웬’에 가깝게. 성모 뒤에선 un으로 써요 (问 wèn)", en:"≈ “wun”; written -un after an initial (问 wèn)", es:"≈ “uen”; tras inicial se escribe -un (问 wèn)", ja:"「ウェン」。声母の後では un と書く（问 wèn）", fr:"≈ « ouen » ; après une initiale on écrit -un (问 wèn)"}},
          {sym:"uang · wang", hz:"黄", py:"huáng", tip:{ko:"‘왕’ (王 wáng)", en:"“wahng” (王 wáng)", es:"“uang” (王 wáng)", ja:"「ワン゛」（王 wáng）", fr:"« ouang » (王 wáng)"}},
          {sym:"ong · weng", hz:"东", py:"dōng", tip:{ko:"성모 뒤 ‘옹’, 혼자일 땐 weng ‘웡’ (翁 wēng)", en:"“ong” after an initial; alone it is weng (翁 wēng)", es:"“ong” tras inicial; sola es weng (翁 wēng)", ja:"声母の後は「オン゛」、単独では weng（翁 wēng）", fr:"« ong » après une initiale ; seule : weng (翁 wēng)"}}
        ]},
        {title:{ko:"ü로 시작", en:"Starting with ü", es:"Empiezan por ü", ja:"ü で始まる", fr:"Commençant par ü"}, rows:[
          {sym:"üe · yue", hz:"学", py:"xué", tip:{ko:"‘위에’ (月 yuè)", en:"“ü” + “eh” (月 yuè)", es:"“ü” + “e” (月 yuè)", ja:"「ユエ」（月 yuè）", fr:"« u » + « è » (月 yuè)"}},
          {sym:"üan · yuan", hz:"全", py:"quán", tip:{ko:"‘위앤’ (远 yuǎn)", en:"“ü” + “en” (远 yuǎn)", es:"“ü” + “en” (远 yuǎn)", ja:"「ユエン」（远 yuǎn）", fr:"« u » + « ène » (远 yuǎn)"}},
          {sym:"ün · yun", hz:"军", py:"jūn", tip:{ko:"‘윈’ (云 yún)", en:"“ü” + “n” (云 yún)", es:"“ü” + “n” (云 yún)", ja:"「ユン」（云 yún）", fr:"« u » + « n » (云 yún)"}},
          {sym:"iong · yong", hz:"熊", py:"xióng", tip:{ko:"‘이옹’ → ‘용’ (用 yòng)", en:"“yong” (用 yòng)", es:"“iong” (用 yòng)", ja:"「ヨン゛」（用 yòng）", fr:"« ion(g) » (用 yòng)"}}
        ]}
      ],
      note: {
        ko:"<b>교재 정정</b>: 교재 표에는 i+an의 단독 철자가 “yen”으로 되어 있지만 올바른 철자는 <b>yan</b>이에요(발음은 ‘옌’에 가까움). 또 üe·üan·ün 옆의 “un”은 오타예요.",
        en:"<b>Correction</b>: The book's table spells i+an alone as “yen”, but the correct spelling is <b>yan</b> (it does sound close to “yen”). The extra “un” next to üe and üan is also a typo.",
        es:"<b>Corrección</b>: la tabla del libro escribe i+an sola como “yen”, pero lo correcto es <b>yan</b> (aunque suena parecido a “yen”). El “un” junto a üe y üan también es una errata.",
        ja:"<b>教科書の訂正</b>：教科書の表では i+an の単独形が「yen」になっていますが、正しくは <b>yan</b>（発音は「イエン」に近い）。üe・üan の横の「un」も誤植です。",
        fr:"<b>Correction</b> : le tableau du livre écrit i+an seul « yen », mais l'orthographe correcte est <b>yan</b> (le son est proche de « yenne »). Le « un » à côté de üe et üan est aussi une coquille."
      }
    },
    {
      h: {ko:"ü의 두 점은 언제 사라질까?", en:"When do the ü dots disappear?", es:"¿Cuándo desaparecen los puntos de la ü?", ja:"ü の点はいつ消える？", fr:"Quand le tréma du ü disparaît-il ?"},
      body: {
        ko:"<b>j, q, x, y</b> 뒤에서는 ü의 점을 빼고 u로 써요. 이 네 글자 뒤에는 원래 ‘우(u)’ 소리가 올 수 없어서 헷갈릴 일이 없거든요.<br>그래서 去 qù, 句 jù, 学 xué, 鱼 yú의 u는 사실 <b>ü 소리</b>예요!<br>하지만 <b>n, l</b> 뒤에서는 nu/nü, lu/lü가 모두 있어서 점을 꼭 써요: 女 nǚ, 绿 lǜ. (컴퓨터로는 v로 입력: nv, lv)",
        en:"After <b>j, q, x and y</b>, ü is written as plain u. A real “u” sound can never follow these letters, so there is no confusion.<br>So the u in 去 qù, 句 jù, 学 xué, 鱼 yú is really an <b>ü sound</b>!<br>After <b>n and l</b>, both u and ü exist, so the dots stay: 女 nǚ, 绿 lǜ. (On a keyboard type v: nv, lv.)",
        es:"Tras <b>j, q, x e y</b>, la ü se escribe como u. Detrás de estas letras nunca puede ir una “u” real, así que no hay confusión.<br>¡La u de 去 qù, 句 jù, 学 xué, 鱼 yú es en realidad una <b>ü</b>!<br>Tras <b>n y l</b> existen u y ü, así que los puntos se mantienen: 女 nǚ, 绿 lǜ. (En el teclado se teclea v: nv, lv.)",
        ja:"<b>j、q、x、y</b> の後では ü の点を取って u と書きます。この4つの後に本物の「u」は来ないので、混乱しません。<br>だから 去 qù、句 jù、学 xué、鱼 yú の u は実は <b>ü の音</b>！<br><b>n、l</b> の後では u と ü の両方があるので点を残します：女 nǚ、绿 lǜ。（キーボードでは v：nv、lv）",
        fr:"Après <b>j, q, x et y</b>, le ü s'écrit u. Un vrai « ou » ne peut jamais suivre ces lettres, donc pas de confusion.<br>Le u de 去 qù, 句 jù, 学 xué, 鱼 yú est donc en réalité un <b>son ü</b> !<br>Après <b>n et l</b>, u et ü existent tous les deux, donc le tréma reste : 女 nǚ, 绿 lǜ. (Au clavier, tape v : nv, lv.)"
      },
      widget: "table",
      cols: [
        {ko:"성모", en:"Initial", es:"Inicial", ja:"声母", fr:"Initiale"},
        {ko:"예", en:"Example", es:"Ejemplo", ja:"例", fr:"Exemple"},
        {ko:"점?", en:"Dots?", es:"¿Puntos?", ja:"点？", fr:"Tréma ?"}
      ],
      items: [
        ["j", {hz:"句", py:"jù"}, {ko:"없음 (ü 소리)", en:"no (ü sound)", es:"no (suena ü)", ja:"なし（ü の音）", fr:"non (son ü)"}],
        ["q", {hz:"去", py:"qù"}, {ko:"없음 (ü 소리)", en:"no (ü sound)", es:"no (suena ü)", ja:"なし（ü の音）", fr:"non (son ü)"}],
        ["x", {hz:"学", py:"xué"}, {ko:"없음 (ü 소리)", en:"no (ü sound)", es:"no (suena ü)", ja:"なし（ü の音）", fr:"non (son ü)"}],
        ["y", {hz:"鱼", py:"yú"}, {ko:"없음 (ü 소리)", en:"no (ü sound)", es:"no (suena ü)", ja:"なし（ü の音）", fr:"non (son ü)"}],
        ["n", {hz:"女", py:"nǚ"}, {ko:"있음 (nu와 구별)", en:"yes (≠ nu)", es:"sí (≠ nu)", ja:"あり（nu と区別）", fr:"oui (≠ nu)"}],
        ["l", {hz:"绿", py:"lǜ"}, {ko:"있음 (路 lù와 구별)", en:"yes (≠ 路 lù)", es:"sí (≠ 路 lù)", ja:"あり（路 lù と区別）", fr:"oui (≠ 路 lù)"}]
      ]
    },
    {
      h: {ko:"헷갈리는 소리 짝", en:"Tricky sound pairs", es:"Parejas de sonidos difíciles", ja:"紛らわしい音のペア", fr:"Paires de sons difficiles"},
      body: {
        ko:"카드를 눌러 구별 방법을 확인하고, 거울을 보며 혀와 입술 모양을 비교해 보세요.",
        en:"Flip each card for the trick, then check your tongue and lips in a mirror.",
        es:"Gira cada tarjeta para ver el truco y mira tu lengua y labios en un espejo.",
        ja:"カードをめくってコツを確認し、鏡で舌と唇の形を比べよう。",
        fr:"Retourne chaque carte pour voir l'astuce, puis observe ta langue et tes lèvres dans un miroir."
      },
      widget: "flip",
      items: [
        {front:{ko:"q (七 qī) vs ch (吃 chī)", en:"q (七 qī) vs ch (吃 chī)", es:"q (七 qī) vs ch (吃 chī)", ja:"q（七 qī）vs ch（吃 chī）", fr:"q (七 qī) vs ch (吃 chī)"}, back:{ko:"q: 혀 평평, 입을 옆으로 웃듯이. ch: 혀끝을 말아 올림.", en:"q: tongue flat, lips spread in a smile. ch: tongue tip curled up.", es:"q: lengua plana, labios en sonrisa. ch: punta de la lengua curvada.", ja:"q：舌は平ら、笑うように口を横に。ch：舌先をそり上げる。", fr:"q : langue à plat, lèvres en sourire. ch : pointe de langue recourbée."}},
        {front:{ko:"x (西 xī) vs sh (是 shì)", en:"x (西 xī) vs sh (是 shì)", es:"x (西 xī) vs sh (是 shì)", ja:"x（西 xī）vs sh（是 shì）", fr:"x (西 xī) vs sh (是 shì)"}, back:{ko:"x: 혀끝이 아랫니 뒤, 얇은 ‘시’. sh: 혀를 말아 두꺼운 ‘스’.", en:"x: tongue tip behind lower teeth, thin hiss. sh: tongue curled, deeper sound.", es:"x: punta tras los dientes inferiores, sonido fino. sh: lengua curvada, sonido grave.", ja:"x：舌先は下の歯の裏、細い「シ」。sh：舌をそらせた太い音。", fr:"x : pointe derrière les dents du bas, son fin. sh : langue recourbée, son plus grave."}},
        {front:{ko:"z (字 zì) vs zh (知 zhī)", en:"z (字 zì) vs zh (知 zhī)", es:"z (字 zì) vs zh (知 zhī)", ja:"z（字 zì）vs zh（知 zhī）", fr:"z (字 zì) vs zh (知 zhī)"}, back:{ko:"z: 혀가 윗니 뒤에 납작. zh: 혀끝을 위로 말아요. h가 붙으면 ‘말기’!", en:"z: tongue flat behind upper teeth. zh: tongue tip curled. An h means “curl”!", es:"z: lengua plana tras los dientes superiores. zh: lengua curvada. ¡La h significa “curvar”!", ja:"z：舌は上の歯の裏で平ら。zh：舌先をそらせる。h が付いたら「そり舌」！", fr:"z : langue à plat derrière les dents du haut. zh : langue recourbée. Le h veut dire « recourber » !"}},
        {front:{ko:"b (八 bā) vs p (怕 pà)", en:"b (八 bā) vs p (怕 pà)", es:"b (八 bā) vs p (怕 pà)", ja:"b（八 bā）vs p（怕 pà）", fr:"b (八 bā) vs p (怕 pà)"}, back:{ko:"입 앞에 휴지를 대 보세요. p에서만 휴지가 크게 흔들려요.", en:"Hold a tissue in front of your mouth: only p makes it flutter.", es:"Pon un pañuelo delante de la boca: solo con p se mueve.", ja:"口の前にティッシュを当てよう。p のときだけ大きく揺れます。", fr:"Tiens un mouchoir devant ta bouche : seul le p le fait bouger."}},
        {front:{ko:"an (安 ān) vs ang (忙 máng)", en:"an (安 ān) vs ang (忙 máng)", es:"an (安 ān) vs ang (忙 máng)", ja:"an（安 ān）vs ang（忙 máng）", fr:"an (安 ān) vs ang (忙 máng)"}, back:{ko:"-n은 혀끝이 윗잇몸에 닿고 끝나요. -ng는 입을 벌린 채 코로 울려요.", en:"-n ends with the tongue tip on the gum ridge; -ng ends at the back with the mouth open.", es:"-n termina con la lengua en los alvéolos; -ng termina atrás con la boca abierta.", ja:"-n は舌先が上の歯ぐきに付いて終わる。-ng は口を開けたまま鼻に響かせる。", fr:"-n finit langue contre les gencives ; -ng finit au fond, bouche ouverte."}}
      ]
    }
  ],
  sets: [
    {
      title: {ko:"세트 1: 성모 듣고 고르기", en:"Set 1: Hear the initial", es:"Serie 1: Escucha la inicial", ja:"セット1：声母を聞き分ける", fr:"Série 1 : Écoute l'initiale"},
      items: [
        {type:"listen", say:"七", opts:["qī","chī","xī","jī"], a:0, ex:{ko:"七 qī(7): 혀를 평평하게, 바람을 세게.", en:"七 qī (seven): flat tongue, strong puff of air.", es:"七 qī (siete): lengua plana, mucho aire.", ja:"七 qī（7）：舌は平ら、息を強く。", fr:"七 qī (sept) : langue à plat, fort souffle."}},
        {type:"listen", say:"吃", opts:["zhī","chī","qī","cī"], a:1, ex:{ko:"吃 chī(먹다): 혀를 말아 올린 ch.", en:"吃 chī (eat): retroflex ch.", es:"吃 chī (comer): ch retrofleja.", ja:"吃 chī（食べる）：そり舌の ch。", fr:"吃 chī (manger) : ch rétroflexe."}},
        {type:"listen", say:"西", opts:["sī","shī","xī"], a:2, ex:{ko:"西 xī(서쪽): 얇은 ‘시’ 소리.", en:"西 xī (west): thin “shee” with a flat tongue.", es:"西 xī (oeste): “si” fino con la lengua plana.", ja:"西 xī（西）：細い「シ」。", fr:"西 xī (ouest) : « si » fin, langue à plat."}},
        {type:"listen", say:"是", opts:["sì","shì","xì"], a:1, ex:{ko:"是 shì(~이다): 혀를 말고, i는 ‘이’가 아니에요.", en:"是 shì (to be): curled tongue; the i is not “ee”.", es:"是 shì (ser): lengua curvada; la i no es “i”.", ja:"是 shì（〜である）：舌をそらせ、i は「イ」ではない。", fr:"是 shì (être) : langue recourbée ; le i n'est pas « i »."}},
        {type:"listen", say:"四", opts:["sì","shì","xì"], a:0, ex:{ko:"四 sì(4): 혀끝이 윗니 뒤에, ‘스’ 소리.", en:"四 sì (four): tongue behind upper teeth, “sz” sound.", es:"四 sì (cuatro): lengua tras los dientes superiores.", ja:"四 sì（4）：舌先は上の歯の裏、「ス」の音。", fr:"四 sì (quatre) : langue derrière les dents du haut."}},
        {type:"listen", say:"词", opts:["chí","qí","cí"], a:2, ex:{ko:"词 cí(단어): ‘ts’ 소리의 c.", en:"词 cí (word): c = “ts”.", es:"词 cí (palabra): c = “ts”.", ja:"词 cí（単語）：c は「ツ」。", fr:"词 cí (mot) : c = « ts »."}},
        {type:"listen", say:"怕", opts:["bà","pà"], a:1, ex:{ko:"怕 pà(무서워하다): 바람을 내뿜는 p.", en:"怕 pà (to fear): aspirated p.", es:"怕 pà (temer): p con aire.", ja:"怕 pà（怖がる）：息を出す p。", fr:"怕 pà (avoir peur) : p aspiré."}},
        {type:"listen", say:"大", opts:["dà","tà"], a:0, ex:{ko:"大 dà(크다): 바람 없는 d.", en:"大 dà (big): unaspirated d.", es:"大 dà (grande): d sin aire.", ja:"大 dà（大きい）：息を出さない d。", fr:"大 dà (grand) : d non aspiré."}},
        {type:"listen", say:"日", opts:["lì","rì","yì","zì"], a:1, ex:{ko:"日 rì(해, 날): 혀를 만 r 소리.", en:"日 rì (sun/day): retroflex r.", es:"日 rì (sol/día): r retrofleja.", ja:"日 rì（日）：そり舌の r。", fr:"日 rì (soleil/jour) : r rétroflexe."}}
      ]
    },
    {
      title: {ko:"세트 2: 음절 구조와 철자", en:"Set 2: Syllable parts and spelling", es:"Serie 2: Partes de la sílaba y escritura", ja:"セット2：音節のしくみとつづり", fr:"Série 2 : Parties de la syllabe et orthographe"},
      items: [
        {type:"tf", q:{ko:"병음 한 음절은 성모 + 운모 + 성조로 이루어진다.", en:"A pinyin syllable is made of initial + final + tone.", es:"Una sílaba en pinyin = inicial + final + tono.", ja:"ピンインの1音節は声母＋韻母＋声調でできている。", fr:"Une syllabe pinyin = initiale + finale + ton."}, a:true, ex:{ko:"맞아요! 성모가 없는 음절(爱 ài)도 있지만 운모와 성조는 항상 있어요.", en:"True! Some have no initial (爱 ài), but all have a final and a tone.", es:"¡Verdadero! Algunas no tienen inicial (爱 ài), pero todas tienen final y tono.", ja:"正しい！声母のない音節（爱 ài）もあるが、韻母と声調は必ずある。", fr:"Vrai ! Certaines n'ont pas d'initiale (爱 ài), mais toutes ont une finale et un ton."}},
        {type:"mc", q:{ko:"中 zhōng의 성모는?", en:"What is the initial of 中 zhōng?", es:"¿Cuál es la inicial de 中 zhōng?", ja:"中 zhōng の声母は？", fr:"Quelle est l'initiale de 中 zhōng ?"}, say:"中", opts:["z","zh","ong","h"], a:1, ex:{ko:"zh + ong + 1성이에요.", en:"zh + ong + tone 1.", es:"zh + ong + tono 1.", ja:"zh＋ong＋第1声。", fr:"zh + ong + ton 1."}},
        {type:"mc", q:{ko:"好 hǎo의 운모는?", en:"What is the final of 好 hǎo?", es:"¿Cuál es la final de 好 hǎo?", ja:"好 hǎo の韻母は？", fr:"Quelle est la finale de 好 hǎo ?"}, say:"好", opts:["h","o","ǎ","ao"], a:3, ex:{ko:"h(성모) + ao(운모) + 3성.", en:"h (initial) + ao (final) + tone 3.", es:"h (inicial) + ao (final) + tono 3.", ja:"h（声母）＋ao（韻母）＋第3声。", fr:"h (initiale) + ao (finale) + ton 3."}},
        {type:"type", q:{ko:"i가 성모 없이 혼자 음절이 되면 어떻게 쓸까요? (성조 없이)", en:"How is i written when it is a syllable by itself? (no tone)", es:"¿Cómo se escribe i cuando es una sílaba sola? (sin tono)", ja:"i が単独で音節になるとどう書く？（声調なし）", fr:"Comment écrit-on i quand il forme seul une syllabe ? (sans ton)"}, say:"一", a:["yi"], loose:true, ex:{ko:"i → yi (一 yī).", en:"i → yi (一 yī).", es:"i → yi (一 yī).", ja:"i → yi（一 yī）。", fr:"i → yi (一 yī)."}},
        {type:"type", q:{ko:"u가 혼자 음절이 되면? (성조 없이)", en:"How is u written alone? (no tone)", es:"¿Cómo se escribe u sola? (sin tono)", ja:"u が単独のときは？（声調なし）", fr:"Comment écrit-on u seul ? (sans ton)"}, say:"五", a:["wu"], loose:true, ex:{ko:"u → wu (五 wǔ).", en:"u → wu (五 wǔ).", es:"u → wu (五 wǔ).", ja:"u → wu（五 wǔ）。", fr:"u → wu (五 wǔ)."}},
        {type:"type", q:{ko:"ü가 혼자 음절이 되면? (성조 없이)", en:"How is ü written alone? (no tone)", es:"¿Cómo se escribe ü sola? (sin tono)", ja:"ü が単独のときは？（声調なし）", fr:"Comment écrit-on ü seul ? (sans ton)"}, say:"鱼", a:["yu"], loose:true, ex:{ko:"ü → yu (鱼 yú). 점이 사라져요!", en:"ü → yu (鱼 yú). The dots disappear!", es:"ü → yu (鱼 yú). ¡Desaparecen los puntos!", ja:"ü → yu（鱼 yú）。点が消えます！", fr:"ü → yu (鱼 yú). Le tréma disparaît !"}},
        {type:"mc", q:{ko:"l + iou + 4성(六, 6)을 바르게 쓴 것은?", en:"Which is the correct spelling of l + iou + tone 4 (六, six)?", es:"¿Cuál es la escritura correcta de l + iou + tono 4 (六, seis)?", ja:"l＋iou＋第4声（六、6）の正しいつづりは？", fr:"Quelle est la bonne écriture de l + iou + ton 4 (六, six) ?"}, say:"六", opts:["liòu","lyòu","liù","lioù"], a:2, ex:{ko:"성모 뒤의 iou는 iu로 줄여 써요: liù.", en:"After an initial, iou is shortened to iu: liù.", es:"Tras una inicial, iou se acorta a iu: liù.", ja:"声母の後の iou は iu と書く：liù。", fr:"Après une initiale, iou s'abrège en iu : liù."}},
        {type:"type", q:{ko:"ch + uen + 1성(春, 봄)을 성조 없이 쓰면?", en:"Write ch + uen (春, spring) without the tone.", es:"Escribe ch + uen (春, primavera) sin tono.", ja:"ch＋uen（春）を声調なしで書くと？", fr:"Écris ch + uen (春, printemps) sans le ton."}, say:"春", a:["chun","chūn"], loose:true, ex:{ko:"uen은 성모 뒤에서 un: chūn.", en:"uen becomes -un after an initial: chūn.", es:"uen pasa a -un tras inicial: chūn.", ja:"uen は声母の後で un：chūn。", fr:"uen devient -un après une initiale : chūn."}},
        {type:"tf", q:{ko:"i + an이 성모 없이 혼자 쓰일 때 철자는 “yen”이다.", en:"When i + an stands alone it is spelled “yen”.", es:"Cuando i + an va sola se escribe “yen”.", ja:"i＋an が単独のときのつづりは「yen」だ。", fr:"Quand i + an est seul, on l'écrit « yen »."}, a:false, ex:{ko:"정답은 yan (烟 yān)이에요. 소리는 ‘옌’에 가깝지만 철자는 yan!", en:"It is yan (烟 yān). It sounds close to “yen”, but is spelled yan!", es:"Es yan (烟 yān). Suena parecido a “yen”, ¡pero se escribe yan!", ja:"正しくは yan（烟 yān）。音は「イエン」に近いがつづりは yan！", fr:"C'est yan (烟 yān). Ça sonne comme « yenne », mais ça s'écrit yan !"}}
      ]
    },
    {
      title: {ko:"세트 3: 운모 듣기", en:"Set 3: Hear the final", es:"Serie 3: Escucha la final", ja:"セット3：韻母を聞く", fr:"Série 3 : Écoute la finale"},
      items: [
        {type:"listen", say:"二", opts:["è","èr","ài"], a:1, ex:{ko:"二 èr(2): 혀를 말아 올리는 er.", en:"二 èr (two): er with a curled tongue.", es:"二 èr (dos): er con la lengua curvada.", ja:"二 èr（2）：舌をそらせる er。", fr:"二 èr (deux) : er langue recourbée."}},
        {type:"listen", say:"冷", opts:["lěn","lǎn","lěng"], a:2, ex:{ko:"冷 lěng(춥다): -ng로 끝나요.", en:"冷 lěng (cold): ends in -ng.", es:"冷 lěng (frío): termina en -ng.", ja:"冷 lěng（寒い）：-ng で終わる。", fr:"冷 lěng (froid) : finit en -ng."}},
        {type:"listen", say:"安", opts:["ān","āng"], a:0, ex:{ko:"安 ān(편안하다): -n으로 끝나요.", en:"安 ān (peaceful): ends in -n.", es:"安 ān (tranquilo): termina en -n.", ja:"安 ān（安らか）：-n で終わる。", fr:"安 ān (paisible) : finit en -n."}},
        {type:"listen", say:"月", opts:["yè","wèi","yuè","yòu"], a:2, ex:{ko:"月 yuè(달): ü + ê.", en:"月 yuè (moon/month): ü + ê.", es:"月 yuè (luna/mes): ü + ê.", ja:"月 yuè（月）：ü＋ê。", fr:"月 yuè (lune/mois) : ü + ê."}},
        {type:"listen", say:"狗", opts:["gǒu","gǎo","gǔ"], a:0, ex:{ko:"狗 gǒu(개): ou ‘어우’.", en:"狗 gǒu (dog): ou as in “go”.", es:"狗 gǒu (perro): ou.", ja:"狗 gǒu（犬）：ou「オウ」。", fr:"狗 gǒu (chien) : ou."}},
        {type:"match", q:{ko:"운모와 예시 글자를 연결하세요.", en:"Match each final to its example character.", es:"Une cada final con su carácter de ejemplo.", ja:"韻母と例の漢字を結びましょう。", fr:"Associe chaque finale à son caractère exemple."}, pairs:[
          ["ai", {hz:"爱", py:"ài"}],
          ["ao", {hz:"好", py:"hǎo"}],
          ["ang", {hz:"忙", py:"máng"}],
          ["ong", {hz:"东", py:"dōng"}],
          ["ie", {hz:"谢", py:"xiè"}]
        ]},
        {type:"mc", q:{ko:"对 duì의 운모를 줄이지 않은 원래 형태는?", en:"What is the full (unshortened) final in 对 duì?", es:"¿Cuál es la final completa (sin acortar) de 对 duì?", ja:"对 duì の韻母の省略しない形は？", fr:"Quelle est la finale complète (non abrégée) de 对 duì ?"}, say:"对", opts:["uai","ui","uei","üe"], a:2, ex:{ko:"uei → 성모 뒤에서 -ui로 줄여 써요.", en:"uei → shortened to -ui after an initial.", es:"uei → se acorta a -ui tras una inicial.", ja:"uei は声母の後で -ui と書く。", fr:"uei → abrégé en -ui après une initiale."}},
        {type:"mc", q:{ko:"e(饿 è)의 소리에 가장 가까운 것은?", en:"Which is closest to the sound of e in 饿 è?", es:"¿Qué se parece más al sonido de la e en 饿 è?", ja:"饿 è の e にいちばん近いのは？", fr:"Qu'est-ce qui ressemble le plus au son du e dans 饿 è ?"}, say:"饿", opts:[{ko:"‘에’",en:"“eh” in “bed”",es:"la e de “mesa”",ja:"「エ」",fr:"« è » de « mère »"},{ko:"‘으어’",en:"“u” in “duh”",es:"entre “e” y “o”, al fondo",ja:"「ウ」と「オ」の間",fr:"« eu » plus en arrière"},{ko:"‘이’",en:"“ee” in “see”",es:"la i de “sí”",ja:"「イ」",fr:"« i » de « si »"}], a:1, ex:{ko:"pinyin e는 입 안쪽에서 나는 ‘으어’ 소리예요.", en:"Pinyin e is a back “uh” sound, not “eh”.", es:"La e del pinyin es un sonido del fondo de la boca, no “e”.", ja:"ピンインの e は口の奥の音で「エ」ではありません。", fr:"Le e du pinyin est un son d'arrière, pas « è »."}}
      ]
    },
    {
      title: {ko:"세트 4: ü 규칙과 헷갈리는 소리", en:"Set 4: The ü rule and tricky sounds", es:"Serie 4: La regla de la ü y sonidos difíciles", ja:"セット4：ü のルールと紛らわしい音", fr:"Série 4 : La règle du ü et les sons difficiles"},
      items: [
        {type:"mc", q:{ko:"去 qù의 u는 실제로 어떤 소리일까요?", en:"What sound is the u in 去 qù really?", es:"¿Qué sonido es en realidad la u de 去 qù?", ja:"去 qù の u は実際どんな音？", fr:"Quel son est vraiment le u de 去 qù ?"}, say:"去", opts:["u","ü","i","o"], a:1, ex:{ko:"j·q·x·y 뒤의 u는 항상 ü 소리예요. 점만 생략!", en:"After j, q, x, y, u is always the ü sound — the dots are just dropped.", es:"Tras j, q, x, y, la u siempre suena ü; solo se quitan los puntos.", ja:"j・q・x・y の後の u は常に ü の音。点を省略しているだけ！", fr:"Après j, q, x, y, le u est toujours un son ü ; on omet juste le tréma."}},
        {type:"tf", q:{ko:"女(여자)는 점을 빼고 nu로 쓴다.", en:"女 (woman) is written nu, without the dots.", es:"女 (mujer) se escribe nu, sin puntos.", ja:"女（女性）は点を取って nu と書く。", fr:"女 (femme) s'écrit nu, sans tréma."}, say:"女", a:false, ex:{ko:"n 뒤에는 u와 ü가 모두 있으니 점을 써요: nǚ.", en:"After n both u and ü exist, so keep the dots: nǚ.", es:"Tras n existen u y ü, así que se mantienen los puntos: nǚ.", ja:"n の後は u も ü もあるので点を残す：nǚ。", fr:"Après n, u et ü existent tous deux : on garde le tréma, nǚ."}},
        {type:"type", q:{ko:"j + ü + 4성(句, 문장)을 성조 없이 바르게 쓰면?", en:"Spell j + ü (句, sentence) correctly, without the tone.", es:"Escribe bien j + ü (句, frase) sin tono.", ja:"j＋ü（句）を声調なしで正しく書くと？", fr:"Écris correctement j + ü (句, phrase) sans le ton."}, say:"句", a:["ju","jù"], loose:true, ex:{ko:"j 뒤에서는 점을 빼요: jù.", en:"Drop the dots after j: jù.", es:"Tras j se quitan los puntos: jù.", ja:"j の後では点を取る：jù。", fr:"On enlève le tréma après j : jù."}},
        {type:"listen", say:"绿", opts:["lù","lǜ"], a:1, ex:{ko:"绿 lǜ(초록): ü 소리. 路 lù(길)와 달라요.", en:"绿 lǜ (green) has ü; 路 lù (road) has u.", es:"绿 lǜ (verde) tiene ü; 路 lù (camino) tiene u.", ja:"绿 lǜ（緑）は ü、路 lù（道）は u。", fr:"绿 lǜ (vert) a un ü ; 路 lù (route) un u."}},
        {type:"mc", q:{ko:"zhi, chi, shi, ri의 i 소리에 대해 맞는 것은?", en:"Which is true about the i in zhi, chi, shi, ri?", es:"¿Qué es cierto sobre la i de zhi, chi, shi, ri?", ja:"zhi・chi・shi・ri の i について正しいのは？", fr:"Qu'est-ce qui est vrai pour le i de zhi, chi, shi, ri ?"}, say:"知", opts:[{ko:"‘이’로 또렷하게 읽는다",en:"It is a clear “ee”",es:"Es una “i” clara",ja:"はっきり「イ」と読む",fr:"C'est un « i » net"},{ko:"소리를 내지 않는다",en:"It is completely silent",es:"Es totalmente muda",ja:"まったく発音しない",fr:"Il est totalement muet"},{ko:"자음 모양 그대로 웅~ 울리는 모음이다",en:"It is a buzzing vowel made in the consonant's position",es:"Es una vocal zumbante en la posición de la consonante",ja:"子音の形のまま響く母音だ",fr:"C'est une voyelle bourdonnante dans la position de la consonne"}], a:2, ex:{ko:"‘이’도 무음도 아니에요. 혀 위치를 유지한 채 울리는 소리예요.", en:"Neither “ee” nor silent — it buzzes with the tongue held in place.", es:"Ni “i” ni muda: zumba con la lengua en su sitio.", ja:"「イ」でも無音でもなく、舌の位置を保ったまま響く音。", fr:"Ni « i » ni muet : il vibre avec la langue en place."}},
        {type:"match", q:{ko:"성모와 예시 단어를 연결하세요.", en:"Match each initial to its example.", es:"Une cada inicial con su ejemplo.", ja:"声母と例を結びましょう。", fr:"Associe chaque initiale à son exemple."}, pairs:[
          ["q", {hz:"七", py:"qī"}],
          ["x", {hz:"西", py:"xī"}],
          ["zh", {hz:"知", py:"zhī"}],
          ["c", {hz:"词", py:"cí"}],
          ["h", {hz:"喝", py:"hē"}],
          ["j", {hz:"鸡", py:"jī"}]
        ]},
        {type:"order", q:{ko:"성모표 첫 줄(입술 소리)을 순서대로 놓으세요.", en:"Put the first row of initials (lip sounds) in order.", es:"Ordena la primera fila de iniciales (labiales).", ja:"声母表の1行目（唇の音）を順番に並べよう。", fr:"Range la première ligne d'initiales (labiales) dans l'ordre."}, tokens:["b","p","m","f"], ex:{ko:"b p m f → d t n l → g k h → j q x 순서로 외워요.", en:"Learn them as b p m f → d t n l → g k h → j q x.", es:"Apréndelas así: b p m f → d t n l → g k h → j q x.", ja:"b p m f → d t n l → g k h → j q x の順で覚えよう。", fr:"Retiens-les ainsi : b p m f → d t n l → g k h → j q x."}},
        {type:"listen", say:"学", opts:["xué","shué","xuó","sué"], a:0, ex:{ko:"学 xué(배우다): x + üe(점 생략) + 2성.", en:"学 xué (learn): x + üe (dots dropped) + tone 2.", es:"学 xué (aprender): x + üe (sin puntos) + tono 2.", ja:"学 xué（学ぶ）：x＋üe（点省略）＋第2声。", fr:"学 xué (apprendre) : x + üe (sans tréma) + ton 2."}}
      ]
    }
  ]
};
