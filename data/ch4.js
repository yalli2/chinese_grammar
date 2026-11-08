window.CHAPTER_DATA = window.CHAPTER_DATA || {};
(function () {
  const L = (ko, en, es, ja, fr) => ({ ko, en, es, ja, fr });

  window.CHAPTER_DATA[4] = {
    id: 4,
    icon: "🧩",
    title: L("한자의 특별함", "Mandarin Character Uniqueness", "La singularidad de los caracteres chinos", "漢字のユニークさ", "L'originalité des caractères chinois"),
    subtitle: L("그림에서 온 글자, 부수를 바꾸면 뜻이 바뀌는 퍼즐 같은 한자!", "Characters born from pictures — swap a radical and the meaning changes!", "Caracteres nacidos de dibujos: ¡cambia un radical y cambia el significado!", "絵から生まれた文字。部首を替えると意味が変わる！", "Des caractères nés de dessins : change une clé et le sens change !"),
    goals: [
      L("山·日·月·人·口·木 같은 상형문자를 알아볼 수 있다.", "I can recognise pictographs like 山, 日, 月, 人, 口, 木.", "Reconozco pictogramas como 山, 日, 月, 人, 口, 木.", "山・日・月・人・口・木などの象形文字がわかる。", "Je reconnais des pictogrammes comme 山, 日, 月, 人, 口, 木."),
      L("부수의 뜻으로 한자의 의미를 짐작할 수 있다 (情·请·清).", "I can guess a character's meaning from its radical (情, 请, 清).", "Puedo adivinar el significado por el radical (情, 请, 清).", "部首から漢字の意味を推測できる（情・请・清）。", "Je devine le sens d'un caractère grâce à sa clé (情, 请, 清)."),
      L("외래어(咖啡, 巧克力, 沙发…)를 듣고 뜻을 말할 수 있다.", "I can understand loanwords like 咖啡, 巧克力, 沙发.", "Entiendo préstamos como 咖啡, 巧克力, 沙发.", "外来語（咖啡・巧克力・沙发など）を聞いて意味がわかる。", "Je comprends des emprunts comme 咖啡, 巧克力, 沙发."),
      L("8주 부수 학습 계획을 세울 수 있다.", "I can plan an eight-week radical study schedule.", "Puedo planear un estudio de radicales de ocho semanas.", "8週間の部首学習計画を立てられる。", "Je peux planifier huit semaines d'étude des clés.")
    ],
    sections: [
      {
        h: L("그림에서 태어난 글자", "Characters born from pictures", "Caracteres nacidos de dibujos", "絵から生まれた文字", "Des caractères nés de dessins"),
        body: L(
          "• 중국어(보통화)는 9억 명이 넘는 사람의 모국어로, 세계에서 모국어 사용자가 가장 많은 언어예요.<br>• 가장 오래된 한자 중 일부는 <b>사물의 모양을 그린 그림</b>(상형문자)에서 왔어요. 마치 그림 퀴즈 같아요!<br>• 예: <span class=\"hz\">山</span> <span class=\"py\">shān</span>(산)은 봉우리 세 개처럼 생겼어요.<br>• 획이 많은 복잡한 한자는 작은 글자 여러 개를 <b>조립</b>해서 만들어요.",
          "• Mandarin is the mother tongue of over 900 million people — more native speakers than any other language.<br>• Some of the oldest characters started as <b>drawings of real things</b> (pictographs) — like a game of Pictionary!<br>• Example: <span class=\"hz\">山</span> <span class=\"py\">shān</span> (mountain) looks like three peaks.<br>• Complex characters with many strokes are <b>built</b> from smaller pieces.",
          "• El mandarín es la lengua materna de más de 900 millones de personas: la que más hablantes nativos tiene.<br>• Algunos de los caracteres más antiguos fueron <b>dibujos de cosas reales</b> (pictogramas), ¡como un Pictionary!<br>• Ejemplo: <span class=\"hz\">山</span> <span class=\"py\">shān</span> (montaña) parece tres picos.<br>• Los caracteres complejos se <b>construyen</b> con piezas más pequeñas.",
          "• 中国語（普通話）は9億人以上の母語で、母語話者数が世界一の言語です。<br>• 最も古い漢字の一部は<b>物の形を描いた絵</b>（象形文字）から来ています。お絵かきクイズのよう！<br>• 例：<span class=\"hz\">山</span> <span class=\"py\">shān</span>（山）は3つの峰の形。<br>• 画数の多い複雑な漢字は、小さな部品を<b>組み立てて</b>できています。",
          "• Le mandarin est la langue maternelle de plus de 900 millions de personnes : record mondial de locuteurs natifs.<br>• Certains des plus anciens caractères étaient des <b>dessins d'objets réels</b> (pictogrammes), comme au Pictionary !<br>• Exemple : <span class=\"hz\">山</span> <span class=\"py\">shān</span> (montagne) ressemble à trois sommets.<br>• Les caractères complexes sont <b>assemblés</b> à partir de petites pièces."
        ),
        note: {
          ko: "<b>교재 정정</b>: 교재는 중국어를 '유일한 현대 그림문자'라고 하지만, 한자는 정확히는 <b>표어문자</b>(뜻+소리를 나타내는 글자)예요. 순수한 상형문자는 적고, 대부분(약 80% 이상)은 뜻 부분+소리 부분을 합친 <b>형성자</b>(形声字)예요.",
          en: "<b>Correction</b>: the book calls Mandarin the \"only modern pictographic language\", but Chinese characters are really <b>logograms</b> (they show meaning and sound). Pure pictographs are few; most characters (over ~80%) are <b>phono-semantic compounds</b> (形声字) = meaning part + sound part.",
          es: "<b>Corrección</b>: el libro dice que el mandarín es «la única lengua pictográfica moderna», pero los caracteres son en realidad <b>logogramas</b> (indican significado y sonido). Hay pocos pictogramas puros; la mayoría (más del ~80 %) son <b>compuestos fonético-semánticos</b> (形声字) = parte de significado + parte de sonido.",
          ja: "<b>教材の訂正</b>：教材は中国語を「唯一の現代の絵文字言語」としていますが、漢字は正確には<b>表語文字</b>（意味と音を表す文字）です。純粋な象形文字は少なく、大部分（約8割以上）は意味の部分＋音の部分を合わせた<b>形声文字</b>（形声字）です。",
          fr: "<b>Correction</b> : le livre dit que le mandarin est « la seule langue pictographique moderne », mais les caractères chinois sont en fait des <b>logogrammes</b> (sens + son). Les vrais pictogrammes sont rares ; la plupart (plus de ~80 %) sont des <b>idéophonogrammes</b> (形声字) = partie sens + partie son."
        },
        widget: "cards",
        items: [
          { icon: "⛰️", title: L("산", "Mountain", "Montaña", "山", "Montagne"), body: L("봉우리 세 개", "Three peaks", "Tres picos", "3つの峰", "Trois sommets"), hz: "山", py: "shān" },
          { icon: "☀️", title: L("해, 날", "Sun, day", "Sol, día", "太陽、日", "Soleil, jour"), body: L("가운데 점이 있는 둥근 해 → 네모로 변함", "A round sun with a dot, later squared off", "Un sol redondo con un punto, luego cuadrado", "点のある丸い太陽が四角に", "Un soleil rond avec un point, devenu carré"), hz: "日", py: "rì" },
          { icon: "🌙", title: L("달", "Moon", "Luna", "月", "Lune"), body: L("초승달 모양", "A crescent moon", "Una luna creciente", "三日月の形", "Un croissant de lune"), hz: "月", py: "yuè" },
          { icon: "🚶", title: L("사람", "Person", "Persona", "人", "Personne"), body: L("옆에서 본 걸어가는 사람", "A person walking, seen from the side", "Una persona caminando, de perfil", "横から見た歩く人", "Une personne qui marche, de profil"), hz: "人", py: "rén" },
          { icon: "👄", title: L("입", "Mouth", "Boca", "口", "Bouche"), body: L("벌린 입", "An open mouth", "Una boca abierta", "開いた口", "Une bouche ouverte"), hz: "口", py: "kǒu" },
          { icon: "🌳", title: L("나무", "Tree, wood", "Árbol, madera", "木", "Arbre, bois"), body: L("가지와 뿌리가 있는 나무", "A tree with branches and roots", "Un árbol con ramas y raíces", "枝と根のある木", "Un arbre avec branches et racines"), hz: "木", py: "mù" }
        ]
      },
      {
        h: L("부수: 한자의 레고 블록", "Radicals: the LEGO bricks of characters", "Radicales: los bloques LEGO de los caracteres", "部首：漢字のレゴブロック", "Les clés : les briques LEGO des caractères"),
        body: L(
          "• 복잡한 한자를 이루는 작은 부품을 <b>부수</b>(部首)라고 해요. 부수는 보통 <b>뜻의 힌트</b>를 줘요.<br>• 예: <span class=\"hz\">情</span> <span class=\"py\">qíng</span>(감정) = <span class=\"hz\">忄</span>(마음) + <span class=\"hz\">青</span>.<br>• <span class=\"hz\">青</span>은 다시 <span class=\"hz\">龶</span> + <span class=\"hz\">月</span>(달 모양)으로 나눌 수 있어요.<br>• <span class=\"hz\">青</span>이 소리(qing)를 알려 주고, <span class=\"hz\">忄</span>이 '마음'이라는 뜻을 알려 줘요.",
          "• The small building blocks inside a character are called <b>radicals</b> (部首). A radical usually gives a <b>meaning clue</b>.<br>• Example: <span class=\"hz\">情</span> <span class=\"py\">qíng</span> (feeling) = <span class=\"hz\">忄</span> (heart) + <span class=\"hz\">青</span>.<br>• <span class=\"hz\">青</span> splits again into <span class=\"hz\">龶</span> + <span class=\"hz\">月</span> (moon shape).<br>• <span class=\"hz\">青</span> hints at the sound (qing); <span class=\"hz\">忄</span> hints at the meaning \"heart\".",
          "• Las piezas pequeñas dentro de un carácter se llaman <b>radicales</b> (部首). Suelen dar una <b>pista del significado</b>.<br>• Ejemplo: <span class=\"hz\">情</span> <span class=\"py\">qíng</span> (sentimiento) = <span class=\"hz\">忄</span> (corazón) + <span class=\"hz\">青</span>.<br>• <span class=\"hz\">青</span> se divide a su vez en <span class=\"hz\">龶</span> + <span class=\"hz\">月</span> (forma de luna).<br>• <span class=\"hz\">青</span> da pista del sonido (qing); <span class=\"hz\">忄</span>, del significado «corazón».",
          "• 漢字の中の小さな部品を<b>部首</b>といいます。部首はふつう<b>意味のヒント</b>になります。<br>• 例：<span class=\"hz\">情</span> <span class=\"py\">qíng</span>（気持ち）＝<span class=\"hz\">忄</span>（心）＋<span class=\"hz\">青</span>。<br>• <span class=\"hz\">青</span>はさらに<span class=\"hz\">龶</span>＋<span class=\"hz\">月</span>（月の形）に分けられます。<br>• <span class=\"hz\">青</span>は音（qing）、<span class=\"hz\">忄</span>は「心」という意味を教えてくれます。",
          "• Les petites pièces d'un caractère s'appellent des <b>clés</b> ou radicaux (部首). Elles donnent souvent un <b>indice de sens</b>.<br>• Exemple : <span class=\"hz\">情</span> <span class=\"py\">qíng</span> (sentiment) = <span class=\"hz\">忄</span> (cœur) + <span class=\"hz\">青</span>.<br>• <span class=\"hz\">青</span> se décompose en <span class=\"hz\">龶</span> + <span class=\"hz\">月</span> (forme de lune).<br>• <span class=\"hz\">青</span> indique le son (qing) ; <span class=\"hz\">忄</span>, le sens « cœur »."
        ),
        note: {
          ko: "<b>교재 정정</b>: 교재는 青을 '풍부한(plentiful)'이라고 설명하지만, <span class=\"hz\">青</span> <span class=\"py\">qīng</span>의 실제 뜻은 <b>푸른색/초록색</b>이에요. 情에서는 주로 소리를 담당해요.",
          en: "<b>Correction</b>: the book glosses 青 as \"plentiful\", but <span class=\"hz\">青</span> <span class=\"py\">qīng</span> really means <b>blue/green</b>. In 情 it mainly gives the sound.",
          es: "<b>Corrección</b>: el libro traduce 青 como «abundante», pero <span class=\"hz\">青</span> <span class=\"py\">qīng</span> significa en realidad <b>azul/verde</b>. En 情 aporta sobre todo el sonido.",
          ja: "<b>教材の訂正</b>：教材は青を「豊富な」と説明していますが、<span class=\"hz\">青</span> <span class=\"py\">qīng</span>の本当の意味は<b>青・緑</b>です。情では主に音を表します。",
          fr: "<b>Correction</b> : le livre traduit 青 par « abondant », mais <span class=\"hz\">青</span> <span class=\"py\">qīng</span> signifie en réalité <b>bleu/vert</b>. Dans 情, il donne surtout le son."
        },
        widget: "table",
        cols: [L("부품", "Part", "Parte", "部品", "Pièce"), L("뜻", "Meaning", "Significado", "意味", "Sens"), L("역할", "Role", "Función", "役割", "Rôle")],
        items: [
          [{ hz: "忄", py: "xīn" }, L("마음 (心의 왼쪽 형태)", "heart (left-side form of 心)", "corazón (forma izquierda de 心)", "心（心の左側の形）", "cœur (forme gauche de 心)"), L("뜻", "meaning", "significado", "意味", "sens")],
          [{ hz: "青", py: "qīng" }, L("푸른색/초록색", "blue/green", "azul/verde", "青・緑", "bleu/vert"), L("소리", "sound", "sonido", "音", "son")],
          [{ hz: "月", py: "yuè" }, L("달 (青 아래쪽 모양)", "moon (lower part of 青)", "luna (parte baja de 青)", "月（青の下の形）", "lune (bas de 青)"), L("모양 부품", "shape piece", "pieza de forma", "形の部品", "pièce de forme")],
          [{ hz: "情", py: "qíng" }, L("감정, 느낌", "feeling, emotion", "sentimiento, emoción", "気持ち、感情", "sentiment, émotion"), L("완성된 글자", "whole character", "carácter completo", "完成した字", "caractère complet")]
        ]
      },
      {
        h: L("부수를 바꾸면 뜻이 바뀐다!", "Swap the radical, change the meaning!", "¡Cambia el radical, cambia el significado!", "部首を替えると意味が変わる！", "Change la clé, change le sens !"),
        body: L(
          "<span class=\"hz\">青</span>은 그대로 두고 왼쪽 부수만 바꿔 보세요. 소리는 비슷하고(qing), 뜻은 부수를 따라가요.",
          "Keep <span class=\"hz\">青</span> and swap only the left radical. The sound stays similar (qing); the meaning follows the radical.",
          "Deja <span class=\"hz\">青</span> y cambia solo el radical izquierdo. El sonido se parece (qing); el significado sigue al radical.",
          "<span class=\"hz\">青</span>はそのままで左の部首だけ替えてみよう。音は似ていて（qing）、意味は部首に従います。",
          "Garde <span class=\"hz\">青</span> et change seulement la clé de gauche. Le son reste proche (qing) ; le sens suit la clé."
        ),
        widget: "cards",
        items: [
          { icon: "❤️", title: L("忄 마음 + 青 = 감정", "忄 heart + 青 = feeling", "忄 corazón + 青 = sentimiento", "忄 心 + 青 = 気持ち", "忄 cœur + 青 = sentiment"),
            body: L("마음과 관련된 '감정'.", "Something of the heart: feeling.", "Algo del corazón: sentimiento.", "心に関わる「気持ち」。", "Une affaire de cœur : le sentiment."), hz: "情", py: "qíng" },
          { icon: "💬", title: L("讠 말 + 青 = 청하다, ~해 주세요", "讠 speech + 青 = to ask / please", "讠 palabra + 青 = pedir / por favor", "讠 言葉 + 青 = 頼む／どうぞ", "讠 parole + 青 = demander / s'il vous plaît"),
            body: L("말로 부탁하는 것. 请坐 qǐng zuò = 앉으세요.", "Asking with words. 请坐 qǐng zuò = please sit.", "Pedir con palabras. 请坐 qǐng zuò = siéntese, por favor.", "言葉で頼むこと。请坐 qǐng zuò＝お座りください。", "Demander avec des mots. 请坐 qǐng zuò = asseyez-vous."), hz: "请", py: "qǐng" },
          { icon: "💧", title: L("氵 물 + 青 = 맑다", "氵 water + 青 = clear", "氵 agua + 青 = claro", "氵 水 + 青 = 澄んだ", "氵 eau + 青 = clair"),
            body: L("물이 맑고 깨끗한 것. 清楚 qīngchu = 분명하다.", "Clear, clean water. 清楚 qīngchu = clear, distinct.", "Agua clara y limpia. 清楚 qīngchu = claro, nítido.", "水が澄んでいること。清楚 qīngchu＝はっきりしている。", "Eau claire et pure. 清楚 qīngchu = clair, net."), hz: "清", py: "qīng" },
          { icon: "☀️", title: L("보너스: 日 해 + 青 = 맑은 날", "Bonus: 日 sun + 青 = sunny", "Extra: 日 sol + 青 = soleado", "おまけ：日 太陽 + 青 = 晴れ", "Bonus : 日 soleil + 青 = ensoleillé"),
            body: L("해가 뜬 맑은 날씨. 晴天 qíngtiān = 맑은 날.", "Sunny weather. 晴天 qíngtiān = a clear day.", "Tiempo soleado. 晴天 qíngtiān = día despejado.", "晴れた天気。晴天 qíngtiān＝晴れの日。", "Temps ensoleillé. 晴天 qíngtiān = jour de beau temps."), hz: "晴", py: "qíng" }
        ]
      },
      {
        h: L("서양에서 온 외래어", "Loanwords from the West", "Préstamos de Occidente", "西洋からの外来語", "Emprunts venus d'Occident"),
        body: L(
          "중국어는 외국어 단어를 <b>비슷한 소리의 한자</b>로 옮기기도 해요. 소리 내어 읽으면 원래 단어가 들려요! 한 음절 = 한 글자 규칙은 여기서도 똑같아요.",
          "Chinese sometimes borrows foreign words using <b>characters that sound similar</b>. Read them aloud and you'll hear the original! One syllable = one character still applies.",
          "El chino a veces toma palabras extranjeras con <b>caracteres de sonido parecido</b>. ¡Léelos en voz alta y oirás la palabra original! Sigue valiendo una sílaba = un carácter.",
          "中国語は外国語を<b>似た音の漢字</b>で書き表すことがあります。声に出すと元の単語が聞こえます！1音節＝1文字のルールはここでも同じ。",
          "Le chinois emprunte parfois des mots étrangers avec des <b>caractères au son proche</b>. Lis-les à voix haute : tu entendras le mot d'origine ! Une syllabe = un caractère, toujours."
        ),
        note: {
          ko: "<b>교재 정정</b>: '마사지'의 표준어는 <span class=\"hz\">按摩</span> <span class=\"py\">ànmó</span>예요. 교재의 mǎshājī(<span class=\"hz\">马杀鸡</span>)는 소리를 흉내 낸 장난스러운 속어예요. '참치'는 중국 대륙에서 <span class=\"hz\">金枪鱼</span> <span class=\"py\">jīnqiāngyú</span>라고 해요. 교재의 tūnnáyú(<span class=\"hz\">吞拿鱼</span>)는 홍콩·싱가포르 등에서 쓰고, 대만에서는 <span class=\"hz\">鲔鱼</span> wěiyú라고도 해요.",
          en: "<b>Correction</b>: the standard word for massage is <span class=\"hz\">按摩</span> <span class=\"py\">ànmó</span>; the book's mǎshājī (<span class=\"hz\">马杀鸡</span>) is jokey slang that imitates the English sound. Tuna in mainland China is <span class=\"hz\">金枪鱼</span> <span class=\"py\">jīnqiāngyú</span>; the book's tūnnáyú (<span class=\"hz\">吞拿鱼</span>) is used in Hong Kong/Singapore, and Taiwan also says <span class=\"hz\">鲔鱼</span> wěiyú.",
          es: "<b>Corrección</b>: la palabra estándar para masaje es <span class=\"hz\">按摩</span> <span class=\"py\">ànmó</span>; el mǎshājī (<span class=\"hz\">马杀鸡</span>) del libro es jerga humorística que imita el inglés. Atún en China continental es <span class=\"hz\">金枪鱼</span> <span class=\"py\">jīnqiāngyú</span>; el tūnnáyú (<span class=\"hz\">吞拿鱼</span>) del libro se usa en Hong Kong/Singapur, y en Taiwán también <span class=\"hz\">鲔鱼</span> wěiyú.",
          ja: "<b>教材の訂正</b>：「マッサージ」の標準語は<span class=\"hz\">按摩</span> <span class=\"py\">ànmó</span>。教材の mǎshājī（<span class=\"hz\">马杀鸡</span>）は英語の音をまねたおどけたスラングです。「ツナ」は中国大陸では<span class=\"hz\">金枪鱼</span> <span class=\"py\">jīnqiāngyú</span>。教材の tūnnáyú（<span class=\"hz\">吞拿鱼</span>）は香港・シンガポールなどで使われ、台湾では<span class=\"hz\">鲔鱼</span> wěiyú とも言います。",
          fr: "<b>Correction</b> : le mot standard pour massage est <span class=\"hz\">按摩</span> <span class=\"py\">ànmó</span> ; le mǎshājī (<span class=\"hz\">马杀鸡</span>) du livre est un argot plaisant qui imite l'anglais. Le thon en Chine continentale se dit <span class=\"hz\">金枪鱼</span> <span class=\"py\">jīnqiāngyú</span> ; le tūnnáyú (<span class=\"hz\">吞拿鱼</span>) du livre s'emploie à Hong Kong/Singapour, et Taïwan dit aussi <span class=\"hz\">鲔鱼</span> wěiyú."
        },
        widget: "wordlist",
        items: [
          { hz: "阿米巴", py: "āmǐbā", m: L("아메바", "amoeba", "ameba", "アメーバ", "amibe") },
          { hz: "培根", py: "péigēn", m: L("베이컨", "bacon", "beicon", "ベーコン", "bacon") },
          { hz: "贝果", py: "bèiguǒ", m: L("베이글", "bagel", "bagel", "ベーグル", "bagel") },
          { hz: "巧克力", py: "qiǎokèlì", m: L("초콜릿", "chocolate", "chocolate", "チョコレート", "chocolat") },
          { hz: "咖啡", py: "kāfēi", m: L("커피", "coffee", "café", "コーヒー", "café") },
          { hz: "曲奇", py: "qūqí", m: L("쿠키", "cookie", "galleta", "クッキー", "cookie") },
          { hz: "高尔夫", py: "gāo'ěrfū", m: L("골프", "golf", "golf", "ゴルフ", "golf") },
          { hz: "按摩", py: "ànmó", m: L("마사지 (표준어)", "massage (standard word)", "masaje (palabra estándar)", "マッサージ（標準語）", "massage (mot standard)") },
          { hz: "沙发", py: "shāfā", m: L("소파", "sofa", "sofá", "ソファー", "canapé") },
          { hz: "金枪鱼", py: "jīnqiāngyú", m: L("참치 (중국 대륙)", "tuna (mainland China)", "atún (China continental)", "ツナ・マグロ（中国大陸）", "thon (Chine continentale)") }
        ]
      },
      {
        h: L("해서(楷书)와 종요(钟繇)", "Regular script (楷书) and Zhong Yao (钟繇)", "La escritura regular (楷书) y Zhong Yao (钟繇)", "楷書（楷书）と鍾繇（钟繇）", "L'écriture régulière (楷书) et Zhong Yao (钟繇)"),
        widget: "timeline",
        items: [
          { year: "~200 CE", title: L("한나라 말기: 종요", "Late Han: Zhong Yao", "Final de los Han: Zhong Yao", "後漢末：鍾繇", "Fin des Han : Zhong Yao"),
            body: L("서예가 종요가 '해서의 아버지'로 불려요. 남아 있는 가장 오래된 해서 작품도 그의 손글씨 메모예요.", "Calligrapher Zhong Yao is called the \"father of regular script\". The oldest surviving regular-script pieces are his handwritten notes.", "Al calígrafo Zhong Yao se le llama «padre de la escritura regular». Las piezas más antiguas conservadas son notas suyas.", "書家の鍾繇は「楷書の父」と呼ばれます。現存最古の楷書も彼の手書きのメモです。", "Le calligraphe Zhong Yao est appelé « père de l'écriture régulière ». Les plus anciens textes conservés sont ses notes manuscrites."),
            hz: "钟繇", py: "Zhōng Yáo" },
          { year: "220–420", title: L("위·진 시대", "Wei–Jin period", "Período Wei–Jin", "魏晋時代", "Période Wei–Jin"),
            body: L("해서가 자리를 잡아요. 글자 하나하나를 또박또박 쓰는 반듯한 서체예요.", "Regular script becomes established: neat, clearly separated characters.", "Se asienta la escritura regular: caracteres claros y bien separados.", "楷書が定着。一字一字をきちんと書く整った書体です。", "L'écriture régulière s'impose : des caractères nets et bien séparés."),
            hz: "楷书", py: "kǎishū" },
          { year: "Today · 今天", title: L("오늘날", "Today", "Hoy", "現在", "Aujourd'hui"),
            body: L("교과서·간판·컴퓨터 글꼴은 대부분 해서를 바탕으로 해요. 가로획 끝의 멈춤, 오른쪽 아래 삐침의 굵은 꼬리가 특징이에요.", "Most textbooks, signs and fonts are based on regular script — note the pause at the end of horizontal strokes and the heavy tail on right-falling strokes.", "La mayoría de libros, carteles y fuentes se basan en ella: pausa al final de los trazos horizontales y cola gruesa en los trazos hacia abajo a la derecha.", "教科書・看板・フォントの多くは楷書が元。横画の終わりの止めと、右払いの太い尾が特徴です。", "La plupart des manuels, enseignes et polices s'en inspirent : arrêt en fin de trait horizontal, queue épaisse des traits descendant à droite."),
            hz: "汉字", py: "hànzì" }
        ]
      },
      {
        h: L("왼쪽에 오는 부수 10가지", "10 radicals found on the left", "10 radicales que van a la izquierda", "左側に来る部首10個", "10 clés placées à gauche"),
        body: L(
          "아래 부수는 주로 한자의 <b>왼쪽</b>에 와요 (日은 早처럼 위에 오기도 해요). 부수를 누르고 예시 글자를 들어 보세요.",
          "These radicals usually sit on the <b>left</b> of a character (日 can also go on top, as in 早). Tap each one and listen to the examples.",
          "Estos radicales suelen ir a la <b>izquierda</b> (日 también puede ir arriba, como en 早). Toca cada uno y escucha los ejemplos.",
          "これらの部首はふつう漢字の<b>左側</b>に来ます（日は早のように上に来ることも）。押して例を聞いてみよう。",
          "Ces clés se placent en général à <b>gauche</b> (日 peut aussi être en haut, comme dans 早). Touche-les et écoute les exemples."
        ),
        note: {
          ko: "<b>교재 정정</b>: '마시다' 喝의 병음은 <b>hē</b>(1성), '아이' 孩子는 <b>háizi</b>, '언어' 语言은 <b>yǔyán</b>, '친구' 朋友는 <b>péngyou</b>예요.",
          en: "<b>Correction</b>: \"drink\" 喝 is <b>hē</b> (tone 1); \"child\" 孩子 is <b>háizi</b>; \"language\" 语言 is <b>yǔyán</b>; \"friend\" 朋友 is <b>péngyou</b>.",
          es: "<b>Corrección</b>: «beber» 喝 es <b>hē</b> (tono 1); «niño» 孩子 es <b>háizi</b>; «idioma» 语言 es <b>yǔyán</b>; «amigo» 朋友 es <b>péngyou</b>.",
          ja: "<b>教材の訂正</b>：「飲む」喝は<b>hē</b>（1声）、「子ども」孩子は<b>háizi</b>、「言語」语言は<b>yǔyán</b>、「友達」朋友は<b>péngyou</b>です。",
          fr: "<b>Correction</b> : « boire » 喝 = <b>hē</b> (ton 1) ; « enfant » 孩子 = <b>háizi</b> ; « langue » 语言 = <b>yǔyán</b> ; « ami » 朋友 = <b>péngyou</b>."
        },
        widget: "radicals",
        items: [
          { rad: "亻", py: "rén", m: L("사람", "person", "persona", "人", "personne"),
            ex: [{ hz: "你", py: "nǐ", m: L("너", "you", "tú", "あなた", "tu") }, { hz: "他们", py: "tāmen", m: L("그들", "they", "ellos", "彼ら", "ils") }] },
          { rad: "氵", py: "shuǐ", m: L("물", "water", "agua", "水", "eau"),
            ex: [{ hz: "河", py: "hé", m: L("강", "river", "río", "川", "rivière") }, { hz: "洗", py: "xǐ", m: L("씻다", "to wash", "lavar", "洗う", "laver") }] },
          { rad: "日", py: "rì", m: L("해, 날, 시간", "sun, day, time", "sol, día, tiempo", "太陽・日・時間", "soleil, jour, temps"),
            ex: [{ hz: "时", py: "shí", m: L("때, 시간", "time", "tiempo, hora", "時", "temps, heure") }, { hz: "早", py: "zǎo", m: L("이르다", "early", "temprano", "早い", "tôt") }] },
          { rad: "女", py: "nǚ", m: L("여자", "female", "mujer", "女", "femme"),
            ex: [{ hz: "好", py: "hǎo", m: L("좋다", "good", "bueno", "よい", "bon") }, { hz: "妈妈", py: "māma", m: L("엄마", "mom", "mamá", "お母さん", "maman") }] },
          { rad: "月", py: "yuè", m: L("달 (몸·고기 뜻도)", "moon (also body/flesh)", "luna (también cuerpo/carne)", "月（体・肉の意味も）", "lune (aussi corps/chair)"),
            ex: [{ hz: "服", py: "fú", m: L("옷 (衣服 yīfu)", "clothes (衣服 yīfu)", "ropa (衣服 yīfu)", "服（衣服 yīfu）", "vêtements (衣服 yīfu)") }, { hz: "朋友", py: "péngyou", m: L("친구", "friend", "amigo", "友達", "ami") }] },
          { rad: "⻊", py: "zú", m: L("발 (足의 왼쪽 형태)", "foot (left form of 足)", "pie (forma izquierda de 足)", "足（足の左側の形）", "pied (forme gauche de 足)"),
            ex: [{ hz: "踢", py: "tī", m: L("차다", "to kick", "patear", "蹴る", "donner un coup de pied") }, { hz: "跑", py: "pǎo", m: L("달리다", "to run", "correr", "走る", "courir") }] },
          { rad: "扌", py: "shǒu", m: L("손", "hand", "mano", "手", "main"),
            ex: [{ hz: "推", py: "tuī", m: L("밀다", "to push", "empujar", "押す", "pousser") }, { hz: "拉", py: "lā", m: L("당기다", "to pull", "tirar", "引く", "tirer") }] },
          { rad: "讠", py: "yán", m: L("말, 언어", "speech, language", "habla, lengua", "言葉", "parole, langue"),
            ex: [{ hz: "说话", py: "shuōhuà", m: L("말하다", "to talk", "hablar", "話す", "parler") }, { hz: "语言", py: "yǔyán", m: L("언어", "language", "idioma", "言語", "langue") }] },
          { rad: "口", py: "kǒu", m: L("입", "mouth", "boca", "口", "bouche"),
            ex: [{ hz: "唱", py: "chàng", m: L("노래하다", "to sing", "cantar", "歌う", "chanter") }, { hz: "喝", py: "hē", m: L("마시다", "to drink", "beber", "飲む", "boire") }] },
          { rad: "子", py: "zǐ", m: L("아이", "child", "niño", "子", "enfant"),
            ex: [{ hz: "孩子", py: "háizi", m: L("아이", "child", "niño/a", "子ども", "enfant") }, { hz: "孜", py: "zī", m: L("부지런하다 (孜孜)", "diligent (孜孜)", "diligente (孜孜)", "勤勉な（孜孜）", "assidu (孜孜)") }] }
        ]
      },
      {
        h: L("8주 부수 학습 계획", "An eight-week radical plan", "Plan de radicales en ocho semanas", "8週間の部首学習プラン", "Plan de huit semaines pour les clés"),
        body: L(
          "• 부수는 200개가 넘어요(전통적인 강희자전 부수는 214개). 그래서 <b>주제별로 묶어서</b> 일주일에 하나씩 배워 봐요.<br>• 복잡한 한자는 수학 식처럼 '부수 + 부수 = 뜻'이에요.<br>• 새 주로 넘어가기 전에 하루 <b>30~45분</b> 지난 내용을 복습하세요. 계획을 바꾸는 건 실패가 아니에요!",
          "• There are over 200 radicals (the traditional Kangxi set has 214), so group them <b>by theme</b> and learn one a week.<br>• A complex character is like a maths equation: radical + radical = meaning.<br>• Before moving on, spend <b>30–45 minutes</b> a day reviewing. Changing the plan isn't failing!",
          "• Hay más de 200 radicales (el conjunto tradicional Kangxi tiene 214), así que agrúpalos <b>por temas</b> y aprende uno por semana.<br>• Un carácter complejo es como una ecuación: radical + radical = significado.<br>• Antes de avanzar, repasa <b>30–45 minutos</b> al día. ¡Cambiar el plan no es fracasar!",
          "• 部首は200個以上（伝統的な康熙字典の部首は214個）。<b>テーマ別</b>にまとめて週1つずつ学ぼう。<br>• 複雑な漢字は数式のように「部首＋部首＝意味」。<br>• 次の週に進む前に、1日<b>30〜45分</b>復習しよう。計画を変えるのは失敗ではありません！",
          "• Il existe plus de 200 clés (la liste traditionnelle Kangxi en compte 214) : regroupe-les <b>par thème</b> et apprends-en une par semaine.<br>• Un caractère complexe est comme une équation : clé + clé = sens.<br>• Avant de passer à la suite, révise <b>30 à 45 minutes</b> par jour. Changer de plan n'est pas un échec !"
        ),
        note: {
          ko: "교재 PDF에서 각 주의 부수 글자가 빠져 있어서, 주제에 맞는 대표 부수를 골랐어요.",
          en: "The radical for each week was missing in the book's PDF, so we chose a typical radical that fits each theme.",
          es: "En el PDF del libro faltaba el radical de cada semana, así que elegimos uno típico para cada tema.",
          ja: "教材のPDFで各週の部首が欠けていたため、テーマに合う代表的な部首を選びました。",
          fr: "La clé de chaque semaine manquait dans le PDF du livre ; nous avons choisi une clé typique pour chaque thème."
        },
        widget: "cards",
        items: [
          { icon: "1️⃣", title: L("1주: 亻 사람", "Week 1: 亻 person", "Semana 1: 亻 persona", "第1週：亻 人", "Semaine 1 : 亻 personne"),
            body: L("인사와 대명사: 你, 他, 们. 올바른 대명사는 예의의 기본!", "Greetings & pronouns: 你, 他, 们. The right pronoun shows respect.", "Saludos y pronombres: 你, 他, 们. El pronombre correcto muestra respeto.", "あいさつと代名詞：你・他・们。正しい代名詞は礼儀の基本！", "Salutations et pronoms : 你, 他, 们. Le bon pronom montre du respect."), hz: "你们", py: "nǐmen" },
          { icon: "2️⃣", title: L("2주: 子 아이", "Week 2: 子 child", "Semana 2: 子 niño", "第2週：子 子ども", "Semaine 2 : 子 enfant"),
            body: L("교육과 가족: 学(배우다), 字(글자), 孩(아이).", "Education & family: 学 (learn), 字 (character), 孩 (child).", "Educación y familia: 学 (aprender), 字 (carácter), 孩 (niño).", "教育と家族：学（学ぶ）・字（文字）・孩（子ども）。", "Éducation et famille : 学 (apprendre), 字 (caractère), 孩 (enfant)."), hz: "学字", py: "xué zì" },
          { icon: "3️⃣", title: L("3주: 宀 지붕", "Week 3: 宀 roof", "Semana 3: 宀 techo", "第3週：宀 屋根", "Semaine 3 : 宀 toit"),
            body: L("집과 가족: 家(집), 室(방), 安(편안하다). 홈스테이에 유용!", "House & family: 家 (home), 室 (room), 安 (peaceful). Handy for a host family!", "Casa y familia: 家 (hogar), 室 (habitación), 安 (tranquilo). ¡Útil con una familia anfitriona!", "家と家族：家（家）・室（部屋）・安（安らか）。ホームステイに便利！", "Maison et famille : 家 (maison), 室 (pièce), 安 (paisible). Utile en famille d'accueil !"), hz: "家", py: "jiā" },
          { icon: "4️⃣", title: L("4주: 讠 말", "Week 4: 讠 speech", "Semana 4: 讠 habla", "第4週：讠 言葉", "Semaine 4 : 讠 parole"),
            body: L("언어: 说(말하다), 语(말), 话(이야기). \"천천히 말해 주세요\"라고 부탁할 수 있어요.", "Language: 说 (speak), 语 (language), 话 (words). Ask people to speak slowly!", "Lengua: 说 (hablar), 语 (idioma), 话 (palabras). ¡Pide que hablen despacio!", "言語：说（話す）・语（言葉）・话（話）。ゆっくり話してと頼めます。", "Langue : 说 (parler), 语 (langue), 话 (paroles). Demande de parler lentement !"), hz: "说话", py: "shuōhuà" },
          { icon: "5️⃣", title: L("5주: 辶 걷다·길", "Week 5: 辶 walk / road", "Semana 5: 辶 caminar / camino", "第5週：辶 道・進む", "Semaine 5 : 辶 marcher / route"),
            body: L("방향과 길: 道(길), 边(쪽), 近(가깝다), 远(멀다). 표지판 읽기!", "Directions: 道 (road), 边 (side), 近 (near), 远 (far). Read the road signs!", "Direcciones: 道 (camino), 边 (lado), 近 (cerca), 远 (lejos). ¡Lee las señales!", "方向：道（道）・边（〜側）・近（近い）・远（遠い）。標識を読もう！", "Directions : 道 (route), 边 (côté), 近 (près), 远 (loin). Lis les panneaux !"), hz: "近", py: "jìn" },
          { icon: "6️⃣", title: L("6주: 车 수레", "Week 6: 车 vehicle", "Semana 6: 车 vehículo", "第6週：车 車", "Semaine 6 : 车 véhicule"),
            body: L("이동과 교통: 车(차), 辆(대, 차를 세는 말), 转(갈아타다), 轮(바퀴).", "Motion & transport: 车 (vehicle), 辆 (measure word for cars), 转 (transfer), 轮 (wheel).", "Movimiento y transporte: 车 (vehículo), 辆 (clasificador de coches), 转 (transbordar), 轮 (rueda).", "移動と交通：车（車）・辆（台）・转（乗り換える）・轮（車輪）。", "Mouvement et transport : 车 (véhicule), 辆 (classificateur), 转 (changer), 轮 (roue)."), hz: "车", py: "chē" },
          { icon: "7️⃣", title: L("7주: 疒 병", "Week 7: 疒 illness", "Semana 7: 疒 enfermedad", "第7週：疒 病気", "Semaine 7 : 疒 maladie"),
            body: L("병원에서: 病(병), 疼(아프다), 痛(통증). 아플 때 꼭 필요해요!", "At the doctor's: 病 (illness), 疼 (to hurt), 痛 (pain). Vital if you get sick!", "En el médico: 病 (enfermedad), 疼 (doler), 痛 (dolor). ¡Imprescindible si te enfermas!", "病院で：病（病気）・疼（痛む）・痛（痛み）。具合が悪いときに必須！", "Chez le médecin : 病 (maladie), 疼 (avoir mal), 痛 (douleur). Indispensable si tu es malade !"), hz: "病", py: "bìng" },
          { icon: "8️⃣", title: L("8주: 心/忄 마음", "Week 8: 心/忄 heart", "Semana 8: 心/忄 corazón", "第8週：心/忄 心", "Semaine 8 : 心/忄 cœur"),
            body: L("생각과 감정: 想(생각하다), 情(감정), 忙(바쁘다), 怕(무서워하다).", "Thoughts & feelings: 想 (think), 情 (feeling), 忙 (busy), 怕 (afraid).", "Pensamientos y sentimientos: 想 (pensar), 情 (sentimiento), 忙 (ocupado), 怕 (tener miedo).", "考えと気持ち：想（思う）・情（気持ち）・忙（忙しい）・怕（怖がる）。", "Pensées et sentiments : 想 (penser), 情 (sentiment), 忙 (occupé), 怕 (avoir peur)."), hz: "想", py: "xiǎng" }
        ]
      }
    ],
    sets: [
      {
        title: L("1. 상형문자와 부수", "1. Pictographs and radicals", "1. Pictogramas y radicales", "1. 象形文字と部首", "1. Pictogrammes et clés"),
        items: [
          { type: "match",
            q: L("한자와 뜻을 연결하세요.", "Match the character to its meaning.", "Une el carácter con su significado.", "漢字と意味を結ぼう。", "Associe le caractère à son sens."),
            pairs: [
              [{ hz: "山", py: "shān" }, L("산", "mountain", "montaña", "山", "montagne")],
              [{ hz: "日", py: "rì" }, L("해", "sun", "sol", "太陽", "soleil")],
              [{ hz: "月", py: "yuè" }, L("달", "moon", "luna", "月", "lune")],
              [{ hz: "口", py: "kǒu" }, L("입", "mouth", "boca", "口", "bouche")],
              [{ hz: "木", py: "mù" }, L("나무", "tree", "árbol", "木", "arbre")]
            ] },
          { type: "mc", say: "山",
            q: L("山은 무엇의 모양에서 왔을까요?", "What does the shape of 山 come from?", "¿De qué forma viene 山?", "山は何の形から来た？", "D'où vient la forme de 山 ?"),
            opts: [
              L("흐르는 물", "Flowing water", "Agua que corre", "流れる水", "De l'eau qui coule"),
              L("봉우리 세 개", "Three mountain peaks", "Tres picos", "3つの峰", "Trois sommets"),
              L("사람의 두 다리", "A person's two legs", "Dos piernas", "人の2本の脚", "Deux jambes"),
              L("나무 한 그루", "A tree", "Un árbol", "1本の木", "Un arbre")
            ], a: 1,
            ex: L("山 shān = 봉우리 세 개를 그린 상형문자.", "山 shān is a pictograph of three peaks.", "山 shān es un pictograma de tres picos.", "山 shān は3つの峰を描いた象形文字。", "山 shān est le pictogramme de trois sommets.") },
          { type: "mc", say: "情",
            q: L("情의 뜻은?", "What does 情 mean?", "¿Qué significa 情?", "情の意味は？", "Que signifie 情 ?"),
            opts: [
              L("맑다", "clear", "claro", "澄んだ", "clair"),
              L("부탁하다", "to ask", "pedir", "頼む", "demander"),
              L("감정, 느낌", "feeling", "sentimiento", "気持ち", "sentiment"),
              L("맑은 날", "sunny", "soleado", "晴れ", "ensoleillé")
            ], a: 2,
            ex: L("忄(마음) + 青 = 情 qíng, 감정.", "忄 (heart) + 青 = 情 qíng, feeling.", "忄 (corazón) + 青 = 情 qíng, sentimiento.", "忄（心）＋青＝情 qíng、気持ち。", "忄 (cœur) + 青 = 情 qíng, sentiment.") },
          { type: "mc",
            q: L("情에서 '마음'을 뜻하는 부수는?", "In 情, which part means \"heart\"?", "En 情, ¿qué parte significa «corazón»?", "情で「心」を表す部首は？", "Dans 情, quelle partie signifie « cœur » ?"),
            opts: ["青", "月", "氵", "忄"], a: 3,
            ex: L("忄은 心(마음)이 왼쪽에 올 때의 모양이에요.", "忄 is the left-side form of 心 (heart).", "忄 es la forma izquierda de 心 (corazón).", "忄は心が左側に来るときの形。", "忄 est la forme gauche de 心 (cœur).") },
          { type: "tf",
            q: L("青 qīng의 실제 뜻은 '푸른색/초록색'이다.", "青 qīng actually means \"blue/green\".", "青 qīng significa en realidad «azul/verde».", "青 qīng の本当の意味は「青・緑」だ。", "青 qīng signifie en réalité « bleu/vert »."),
            a: true,
            ex: L("맞아요. 교재의 'plentiful(풍부한)'은 정확하지 않아요.", "Yes. The book's \"plentiful\" is not accurate.", "Sí. El «abundante» del libro no es exacto.", "その通り。教材の「豊富な」は不正確です。", "Oui. Le « abondant » du livre est inexact.") },
          { type: "mc",
            q: L("情의 忄을 讠(말)으로 바꾸면?", "Replace 忄 in 情 with 讠 (speech). Which character do you get?", "Cambia 忄 de 情 por 讠 (habla). ¿Qué carácter sale?", "情の忄を讠（言葉）に替えると？", "Remplace 忄 dans 情 par 讠 (parole). Quel caractère obtiens-tu ?"),
            opts: ["清", "晴", "情", "请"], a: 3,
            ex: L("讠 + 青 = 请 qǐng, 부탁하다 / ~해 주세요.", "讠 + 青 = 请 qǐng, to ask / please.", "讠 + 青 = 请 qǐng, pedir / por favor.", "讠＋青＝请 qǐng、頼む／どうぞ。", "讠 + 青 = 请 qǐng, demander / s'il vous plaît.") },
          { type: "listen", say: "清", opts: ["qíng", "qǐng", "qīng", "jìng"], a: 2,
            ex: L("清 qīng (1성) = 맑다. 氵(물) + 青.", "清 qīng (tone 1) = clear. 氵 (water) + 青.", "清 qīng (tono 1) = claro. 氵 (agua) + 青.", "清 qīng（1声）＝澄んだ。氵（水）＋青。", "清 qīng (ton 1) = clair. 氵 (eau) + 青.") },
          { type: "type", say: "情",
            q: L("情(감정)의 병음을 쓰세요.", "Type the pinyin for 情 (feeling).", "Escribe el pinyin de 情 (sentimiento).", "情（気持ち）のピンインを書こう。", "Tape le pinyin de 情 (sentiment)."),
            a: ["qíng", "qing2"], loose: true,
            ex: L("情 = qíng (2성).", "情 = qíng (tone 2).", "情 = qíng (tono 2).", "情＝qíng（2声）。", "情 = qíng (ton 2).") }
        ]
      },
      {
        title: L("2. 외래어", "2. Loanwords", "2. Préstamos", "2. 外来語", "2. Emprunts"),
        items: [
          { type: "listen", say: "咖啡", opts: ["沙发", "咖啡", "贝果", "培根"], a: 1,
            ex: L("咖啡 kāfēi = 커피.", "咖啡 kāfēi = coffee.", "咖啡 kāfēi = café.", "咖啡 kāfēi＝コーヒー。", "咖啡 kāfēi = café.") },
          { type: "match",
            q: L("외래어와 뜻을 연결하세요.", "Match the loanwords to their meanings.", "Une los préstamos con su significado.", "外来語と意味を結ぼう。", "Associe les emprunts à leur sens."),
            pairs: [
              [{ hz: "巧克力", py: "qiǎokèlì" }, L("초콜릿", "chocolate", "chocolate", "チョコレート", "chocolat")],
              [{ hz: "沙发", py: "shāfā" }, L("소파", "sofa", "sofá", "ソファー", "canapé")],
              [{ hz: "高尔夫", py: "gāo'ěrfū" }, L("골프", "golf", "golf", "ゴルフ", "golf")],
              [{ hz: "培根", py: "péigēn" }, L("베이컨", "bacon", "beicon", "ベーコン", "bacon")]
            ] },
          { type: "mc",
            q: L("'마사지'의 표준 중국어는?", "Standard Chinese word for \"massage\"?", "¿Palabra estándar en chino para «masaje»?", "「マッサージ」の標準的な中国語は？", "Mot chinois standard pour « massage » ?"),
            opts: ["马杀鸡 mǎshājī", "按摩 ànmó", "曲奇 qūqí", "咖啡 kāfēi"], a: 1,
            ex: L("按摩 ànmó가 표준어예요. 马杀鸡는 소리를 흉내 낸 장난스러운 속어예요.", "按摩 ànmó is standard; 马杀鸡 is jokey slang imitating the English sound.", "按摩 ànmó es la estándar; 马杀鸡 es jerga humorística que imita el inglés.", "按摩 ànmó が標準語。马杀鸡は英語の音をまねたスラング。", "按摩 ànmó est le mot standard ; 马杀鸡 est un argot plaisant.") },
          { type: "tf",
            q: L("중국 대륙에서 '참치'는 보통 金枪鱼 jīnqiāngyú라고 한다.", "In mainland China, tuna is usually 金枪鱼 jīnqiāngyú.", "En China continental, el atún suele ser 金枪鱼 jīnqiāngyú.", "中国大陸では「ツナ」はふつう金枪鱼 jīnqiāngyú と言う。", "En Chine continentale, le thon se dit généralement 金枪鱼 jīnqiāngyú."),
            a: true,
            ex: L("맞아요. 吞拿鱼 tūnnáyú는 홍콩·싱가포르 등에서 써요.", "Yes. 吞拿鱼 tūnnáyú is used in Hong Kong/Singapore.", "Sí. 吞拿鱼 tūnnáyú se usa en Hong Kong/Singapur.", "その通り。吞拿鱼 tūnnáyú は香港・シンガポールなどで使います。", "Oui. 吞拿鱼 tūnnáyú s'emploie à Hong Kong/Singapour.") },
          { type: "type", say: "沙发",
            q: L("沙发(소파)의 병음을 쓰세요.", "Type the pinyin for 沙发 (sofa).", "Escribe el pinyin de 沙发 (sofá).", "沙发（ソファー）のピンインを書こう。", "Tape le pinyin de 沙发 (canapé)."),
            a: ["shāfā", "sha1fa1"], loose: true,
            ex: L("沙发 = shāfā. 소리를 그대로 옮긴 말이에요.", "沙发 = shāfā — a pure sound borrowing.", "沙发 = shāfā, un préstamo de sonido.", "沙发＝shāfā。音をそのまま写した語。", "沙发 = shāfā, un pur emprunt sonore.") },
          { type: "listen", say: "曲奇", opts: ["qiǎokèlì", "āmǐbā", "bèiguǒ", "qūqí"], a: 3,
            ex: L("曲奇 qūqí = 쿠키.", "曲奇 qūqí = cookie.", "曲奇 qūqí = galleta.", "曲奇 qūqí＝クッキー。", "曲奇 qūqí = cookie.") },
          { type: "mc", say: "贝果",
            q: L("贝果 bèiguǒ는 무엇일까요?", "What is 贝果 bèiguǒ?", "¿Qué es 贝果 bèiguǒ?", "贝果 bèiguǒ とは？", "Qu'est-ce que 贝果 bèiguǒ ?"),
            opts: [L("베이글", "bagel", "bagel", "ベーグル", "bagel"), L("베이컨", "bacon", "beicon", "ベーコン", "bacon"), L("바나나", "banana", "plátano", "バナナ", "banane"), L("버터", "butter", "mantequilla", "バター", "beurre")],
            a: 0,
            ex: L("bèiguǒ ≈ bagel. 果(guǒ)는 '과일·열매'라 먹을 것 느낌도 나요.", "bèiguǒ ≈ bagel; 果 (fruit) also hints it's food.", "bèiguǒ ≈ bagel; 果 (fruta) sugiere que es comida.", "bèiguǒ≈bagel。果（果物）で食べ物らしさも。", "bèiguǒ ≈ bagel ; 果 (fruit) suggère un aliment.") },
          { type: "mc", say: "阿米巴",
            q: L("阿米巴 āmǐbā의 뜻은?", "What does 阿米巴 āmǐbā mean?", "¿Qué significa 阿米巴 āmǐbā?", "阿米巴 āmǐbā の意味は？", "Que signifie 阿米巴 āmǐbā ?"),
            opts: [L("아보카도", "avocado", "aguacate", "アボカド", "avocat"), L("앰뷸런스", "ambulance", "ambulancia", "救急車", "ambulance"), L("아메바", "amoeba", "ameba", "アメーバ", "amibe"), L("알람", "alarm", "alarma", "アラーム", "alarme")],
            a: 2,
            ex: L("ā-mǐ-bā ≈ a-moe-ba. 세 음절 = 세 글자!", "ā-mǐ-bā ≈ a-moe-ba. Three syllables = three characters!", "ā-mǐ-bā ≈ a-me-ba. ¡Tres sílabas = tres caracteres!", "ā-mǐ-bā≈ア・メー・バ。3音節＝3文字！", "ā-mǐ-bā ≈ a-mi-be. Trois syllabes = trois caractères !") }
        ]
      },
      {
        title: L("3. 왼쪽 부수 마스터", "3. Left-side radicals", "3. Radicales de la izquierda", "3. 左側の部首", "3. Les clés de gauche"),
        items: [
          { type: "mc",
            q: L("河(강)와 洗(씻다)에 공통으로 있는 부수 氵의 뜻은?", "河 (river) and 洗 (wash) share 氵. What does it mean?", "河 (río) y 洗 (lavar) comparten 氵. ¿Qué significa?", "河（川）と洗（洗う）に共通の氵の意味は？", "河 (rivière) et 洗 (laver) ont 氵. Que signifie-t-il ?"),
            opts: [L("불", "fire", "fuego", "火", "feu"), L("나무", "wood", "madera", "木", "bois"), L("손", "hand", "mano", "手", "main"), L("물", "water", "agua", "水", "eau")],
            a: 3,
            ex: L("氵 = 물(水). 물과 관련된 글자에 많이 나와요.", "氵 = water (水); it appears in many water-related characters.", "氵 = agua (水); aparece en muchos caracteres relacionados con el agua.", "氵＝水。水に関係する字によく出ます。", "氵 = eau (水) ; on la trouve dans beaucoup de caractères liés à l'eau.") },
          { type: "match",
            q: L("부수와 뜻을 연결하세요.", "Match each radical to its meaning.", "Une cada radical con su significado.", "部首と意味を結ぼう。", "Associe chaque clé à son sens."),
            pairs: [
              ["亻", L("사람", "person", "persona", "人", "personne")],
              ["扌", L("손", "hand", "mano", "手", "main")],
              ["讠", L("말", "speech", "habla", "言葉", "parole")],
              ["⻊", L("발", "foot", "pie", "足", "pied")],
              ["女", L("여자", "female", "mujer", "女", "femme")]
            ] },
          { type: "mc",
            q: L("口(입) 부수가 있고 '마시다'라는 뜻의 글자는?", "Which character has 口 (mouth) and means \"to drink\"?", "¿Qué carácter lleva 口 (boca) y significa «beber»?", "口（口）があり「飲む」という意味の字は？", "Quel caractère contient 口 (bouche) et signifie « boire » ?"),
            opts: ["唱", "喝", "好", "河"], a: 1,
            ex: L("喝 hē = 마시다. 唱 chàng은 '노래하다'.", "喝 hē = to drink; 唱 chàng = to sing.", "喝 hē = beber; 唱 chàng = cantar.", "喝 hē＝飲む。唱 chàng は「歌う」。", "喝 hē = boire ; 唱 chàng = chanter.") },
          { type: "tf", say: "喝",
            q: L("'마시다' 喝는 hé(2성)로 읽는다.", "喝 (to drink) is pronounced hé (tone 2).", "喝 (beber) se pronuncia hé (tono 2).", "「飲む」喝は hé（2声）と読む。", "喝 (boire) se prononce hé (ton 2)."),
            a: false,
            ex: L("喝는 hē(1성)예요. hé(2성)는 河(강) 등이에요.", "喝 is hē (tone 1). hé (tone 2) is e.g. 河 (river).", "喝 es hē (tono 1). hé (tono 2) es p. ej. 河 (río).", "喝は hē（1声）。hé（2声）は河（川）など。", "喝 se dit hē (ton 1). hé (ton 2), c'est par ex. 河 (rivière).") },
          { type: "listen", say: "孩子", opts: ["háizi", "hǎizi", "hàizi", "hāizi"], a: 0,
            ex: L("孩子 háizi = 아이. (교재의 hǎi zi는 틀렸어요.)", "孩子 háizi = child. (The book's hǎi zi is wrong.)", "孩子 háizi = niño/a. (El hǎi zi del libro es incorrecto.)", "孩子 háizi＝子ども。（教材の hǎi zi は誤り）", "孩子 háizi = enfant. (Le hǎi zi du livre est faux.)") },
          { type: "mc", say: "推",
            q: L("推(밀다)의 부수는?", "Which radical is in 推 (to push)?", "¿Qué radical tiene 推 (empujar)?", "推（押す）の部首は？", "Quelle clé dans 推 (pousser) ?"),
            opts: ["扌", "亻", "⻊", "讠"], a: 0,
            ex: L("扌 = 손. 밀고(推) 당기는(拉) 건 손으로 하죠!", "扌 = hand. You push (推) and pull (拉) with your hands!", "扌 = mano. ¡Empujas (推) y tiras (拉) con las manos!", "扌＝手。押す（推）も引く（拉）も手で！", "扌 = main. On pousse (推) et tire (拉) avec les mains !") },
          { type: "type", say: "朋友",
            q: L("朋友(친구)의 병음을 쓰세요.", "Type the pinyin for 朋友 (friend).", "Escribe el pinyin de 朋友 (amigo).", "朋友（友達）のピンインを書こう。", "Tape le pinyin de 朋友 (ami)."),
            a: ["péngyou", "peng2you", "péngyǒu", "peng2you3"], loose: true,
            ex: L("朋友 = péngyou (友는 경성으로 가볍게). 朋은 月 두 개!", "朋友 = péngyou (友 is light/neutral). 朋 is two 月!", "朋友 = péngyou (友 en tono neutro). ¡朋 son dos 月!", "朋友＝péngyou（友は軽声）。朋は月が2つ！", "朋友 = péngyou (友 au ton neutre). 朋 = deux 月 !") },
          { type: "mc", say: "跑",
            q: L("跑 pǎo의 뜻은? (힌트: 부수 ⻊)", "What does 跑 pǎo mean? (Hint: radical ⻊)", "¿Qué significa 跑 pǎo? (Pista: radical ⻊)", "跑 pǎo の意味は？（ヒント：部首⻊）", "Que signifie 跑 pǎo ? (Indice : clé ⻊)"),
            opts: [L("밀다", "to push", "empujar", "押す", "pousser"), L("노래하다", "to sing", "cantar", "歌う", "chanter"), L("달리다", "to run", "correr", "走る", "courir"), L("씻다", "to wash", "lavar", "洗う", "laver")],
            a: 2,
            ex: L("⻊(발) → 발로 하는 동작: 跑 달리다, 踢 차다.", "⻊ (foot) → foot actions: 跑 run, 踢 kick.", "⻊ (pie) → acciones con los pies: 跑 correr, 踢 patear.", "⻊（足）→足の動作：跑 走る、踢 蹴る。", "⻊ (pied) → actions du pied : 跑 courir, 踢 donner un coup de pied.") }
        ]
      },
      {
        title: L("4. 8주 계획과 해서", "4. The 8-week plan & regular script", "4. El plan de 8 semanas y la escritura regular", "4. 8週間プランと楷書", "4. Le plan de 8 semaines et l'écriture régulière"),
        items: [
          { type: "mc", say: "家",
            q: L("3주차(집·가족)에 배우는 부수 宀가 들어간 글자는?", "Week 3 (house/family) uses 宀. Which character has it?", "La semana 3 (casa/familia) usa 宀. ¿Qué carácter lo tiene?", "第3週（家・家族）の部首宀が入った字は？", "Semaine 3 (maison/famille) : 宀. Quel caractère la contient ?"),
            opts: ["病", "说", "家", "近"], a: 2,
            ex: L("家 jiā = 집. 宀은 지붕 모양이에요.", "家 jiā = home. 宀 looks like a roof.", "家 jiā = hogar. 宀 parece un techo.", "家 jiā＝家。宀は屋根の形。", "家 jiā = maison. 宀 ressemble à un toit.") },
          { type: "mc", say: "病",
            q: L("부수 疒는 어떤 주제와 관련 있을까요?", "Radical 疒 relates to which theme?", "¿Con qué tema se relaciona el radical 疒?", "部首疒はどのテーマと関係がある？", "La clé 疒 se rapporte à quel thème ?"),
            opts: [L("교통", "transport", "transporte", "交通", "transport"), L("병, 아픔", "illness", "enfermedad", "病気", "maladie"), L("감정", "feelings", "sentimientos", "気持ち", "sentiments"), L("언어", "language", "lengua", "言語", "langue")],
            a: 1,
            ex: L("疒: 病 bìng(병), 疼 téng(아프다), 痛 tòng(통증).", "疒: 病 bìng (illness), 疼 téng (hurt), 痛 tòng (pain).", "疒: 病 bìng (enfermedad), 疼 téng (doler), 痛 tòng (dolor).", "疒：病 bìng（病気）・疼 téng（痛む）・痛 tòng（痛み）。", "疒 : 病 bìng (maladie), 疼 téng (avoir mal), 痛 tòng (douleur).") },
          { type: "order",
            q: L("8주 계획의 부수를 1주부터 순서대로 놓으세요.", "Put the plan's radicals in order, week 1 to 8.", "Ordena los radicales del plan, de la semana 1 a la 8.", "プランの部首を第1週から順に並べよう。", "Range les clés du plan, de la semaine 1 à 8."),
            tokens: ["亻", "子", "宀", "讠", "辶", "车", "疒", "忄"],
            ex: L("사람 → 아이 → 집 → 말 → 길 → 교통 → 병 → 마음.", "person → child → house → speech → road → transport → illness → heart.", "persona → niño → casa → habla → camino → transporte → enfermedad → corazón.", "人→子→家→言葉→道→交通→病気→心。", "personne → enfant → maison → parole → route → transport → maladie → cœur.") },
          { type: "mc", say: "钟繇",
            q: L("'해서의 아버지'로 불리는 사람은?", "Who is called the \"father of regular script\"?", "¿Quién es el «padre de la escritura regular»?", "「楷書の父」と呼ばれるのは？", "Qui est le « père de l'écriture régulière » ?"),
            opts: [L("공자", "Confucius", "Confucio", "孔子", "Confucius"), L("진시황", "Qin Shi Huang", "Qin Shi Huang", "始皇帝", "Qin Shi Huang"), L("이백", "Li Bai", "Li Bai", "李白", "Li Bai"), L("종요 (钟繇)", "Zhong Yao (钟繇)", "Zhong Yao (钟繇)", "鍾繇（钟繇）", "Zhong Yao (钟繇)")],
            a: 3,
            ex: L("한나라 말기의 서예가 종요. 남아 있는 가장 오래된 해서도 그의 메모예요.", "Late-Han calligrapher Zhong Yao; the oldest surviving regular script is his notes.", "El calígrafo Zhong Yao, de finales de los Han; lo más antiguo conservado son sus notas.", "後漢末の書家・鍾繇。現存最古の楷書も彼のメモ。", "Le calligraphe Zhong Yao (fin des Han) ; ses notes sont les plus anciens textes conservés.") },
          { type: "tf",
            q: L("중국어 부수는 200개가 넘는다.", "There are more than 200 radicals.", "Hay más de 200 radicales.", "中国語の部首は200個以上ある。", "Il existe plus de 200 clés."),
            a: true,
            ex: L("맞아요. 전통적인 강희자전 부수는 214개예요. 그래서 주제별로 나눠 배워요.", "Yes — the traditional Kangxi list has 214, so we learn them by theme.", "Sí: la lista tradicional Kangxi tiene 214, por eso se aprenden por temas.", "その通り。伝統的な康熙字典の部首は214個。だからテーマ別に学びます。", "Oui : la liste traditionnelle Kangxi en compte 214, d'où l'étude par thème.") },
          { type: "mc",
            q: L("다음 주로 넘어가기 전 하루 복습 시간으로 추천된 것은?", "How long should you review each day before moving to the next week?", "¿Cuánto repasar al día antes de pasar a la semana siguiente?", "次の週に進む前の1日の復習時間のおすすめは？", "Combien de temps réviser par jour avant la semaine suivante ?"),
            opts: [L("5분", "5 minutes", "5 minutos", "5分", "5 minutes"), L("30~45분", "30–45 minutes", "30–45 minutos", "30〜45分", "30 à 45 minutes"), L("3시간", "3 hours", "3 horas", "3時間", "3 heures"), L("복습 필요 없음", "No review needed", "No hace falta repasar", "復習は不要", "Pas besoin de réviser")],
            a: 1,
            ex: L("부수들은 서로 쌓여 가니까 30~45분 복습이 중요해요.", "Radicals build on each other, so 30–45 minutes of review matters.", "Los radicales se apoyan unos en otros: repasar 30–45 minutos es clave.", "部首は積み重なるので30〜45分の復習が大切。", "Les clés s'appuient les unes sur les autres : 30 à 45 minutes de révision comptent.") },
          { type: "listen", say: "楷书", opts: ["kǎishū", "hànzì", "pīnyīn", "Zhōng Yáo"], a: 0,
            ex: L("楷书 kǎishū = 해서(반듯한 정자체).", "楷书 kǎishū = regular script.", "楷书 kǎishū = escritura regular.", "楷书 kǎishū＝楷書。", "楷书 kǎishū = écriture régulière.") },
          { type: "type", say: "车",
            q: L("6주차 '교통'의 부수(한자 또는 병음)를 쓰세요.", "Type the week-6 \"transport\" radical (character or pinyin).", "Escribe el radical de «transporte» de la semana 6 (carácter o pinyin).", "第6週「交通」の部首（漢字かピンイン）を書こう。", "Tape la clé « transport » de la semaine 6 (caractère ou pinyin)."),
            a: ["车", "chē", "che1"], loose: true,
            ex: L("车 chē = 차, 수레. 辆, 转, 轮에 들어 있어요.", "车 chē = vehicle; found in 辆, 转, 轮.", "车 chē = vehículo; aparece en 辆, 转, 轮.", "车 chē＝車。辆・转・轮に入っています。", "车 chē = véhicule ; dans 辆, 转, 轮.") }
        ]
      }
    ]
  };
})();
