window.CHAPTER_DATA = window.CHAPTER_DATA || {};
(function () {
  const L = (ko, en, es, ja, fr) => ({ ko, en, es, ja, fr });

  window.CHAPTER_DATA[3] = {
    id: 3,
    icon: "🎯",
    title: L("중국어 공부법 – 공부 팁과 요령", "How to Approach Learning Mandarin – Study Tips and Tricks", "Cómo aprender mandarín – consejos y trucos de estudio", "中国語の学び方 – 勉強のコツ", "Comment apprendre le mandarin – astuces d'étude"),
    subtitle: L("목표를 세우고, 매일 조금씩, 네 가지 기술을 섞어서 공부하자!", "Set goals, study a little every day, and mix the four skills!", "¡Fija metas, estudia un poco cada día y combina las cuatro destrezas!", "目標を立て、毎日少しずつ、4つの技能を組み合わせて学ぼう！", "Fixe des objectifs, étudie un peu chaque jour et combine les quatre compétences !"),
    goals: [
      L("한 음절 = 한 글자 규칙을 설명할 수 있다.", "I can explain the rule \"one syllable = one character\".", "Puedo explicar la regla «una sílaba = un carácter».", "「1音節＝1文字」のルールを説明できる。", "Je peux expliquer la règle « une syllabe = un caractère »."),
      L("SMART 기준으로 나만의 중국어 학습 목표를 세울 수 있다.", "I can write my own Mandarin goal using the SMART criteria.", "Puedo escribir mi propia meta de mandarín con los criterios SMART.", "SMARTの基準で自分の中国語の目標を立てられる。", "Je peux écrire mon objectif de mandarin avec les critères SMART."),
      L("읽기·말하기·듣기·쓰기를 섞어서 연습하는 방법을 고를 수 있다.", "I can choose activities that combine reading, speaking, listening and writing.", "Puedo elegir actividades que combinen leer, hablar, escuchar y escribir.", "読む・話す・聞く・書くを組み合わせた練習を選べる。", "Je peux choisir des activités qui combinent lire, parler, écouter et écrire."),
      L("교실에서 쓰는 중국어 단어(学习, 汉字, 拼音…)를 듣고 말할 수 있다.", "I can hear and say classroom words like 学习, 汉字, 拼音.", "Puedo oír y decir palabras de clase como 学习, 汉字, 拼音.", "学习・汉字・拼音などの教室のことばを聞いて言える。", "Je peux entendre et dire des mots de classe comme 学习, 汉字, 拼音.")
    ],
    sections: [
      {
        h: L("출발하기 전에: 왜 배우나요?", "Before you start: why are you learning?", "Antes de empezar: ¿por qué aprendes?", "始める前に：なぜ学ぶの？", "Avant de commencer : pourquoi apprendre ?"),
        body: L(
          "• 중국어는 다른 언어보다 시간이 더 걸려요. 그래서 <b>나만의 이유</b>(열정)가 있어야 꾸준히 할 수 있어요.<br>• 무료 체험 수업이나 온라인 자료로 먼저 맛보기를 해 보세요.<br>• <b>중국어 전용 공책</b>을 하나 준비하세요. 줄 간격과 여백이 넓으면 한자를 크게 연습하기 좋아요.",
          "• Mandarin takes more hours than many languages, so you need <b>your own reason</b> (passion) to keep going.<br>• Try a free trial class or online materials first to get a feel for it.<br>• Keep a <b>notebook just for Chinese</b>. Wide lines and margins give you room to practise big characters.",
          "• El mandarín requiere más horas que muchos idiomas: necesitas <b>tu propia razón</b> (pasión) para seguir.<br>• Prueba primero una clase gratuita o materiales en línea.<br>• Ten un <b>cuaderno solo para chino</b>. Las líneas anchas y los márgenes amplios dejan espacio para practicar caracteres grandes.",
          "• 中国語は他の言語より時間がかかるので、続けるには<b>自分なりの理由</b>（情熱）が必要です。<br>• まず無料体験レッスンやオンライン教材で試してみましょう。<br>• <b>中国語専用ノート</b>を用意しましょう。行間と余白が広いと漢字を大きく練習できます。",
          "• Le mandarin demande plus d'heures que beaucoup de langues : il te faut <b>ta propre raison</b> (passion) pour continuer.<br>• Essaie d'abord un cours d'essai gratuit ou des ressources en ligne.<br>• Garde un <b>cahier réservé au chinois</b>. Des lignes larges et de grandes marges laissent la place d'écrire de grands caractères."
        ),
        widget: "wordlist",
        items: [
          { hz: "学习", py: "xuéxí", m: L("공부하다, 배우다", "to study, to learn", "estudiar, aprender", "勉強する、学ぶ", "étudier, apprendre") },
          { hz: "中文", py: "Zhōngwén", m: L("중국어", "Chinese (language)", "chino (idioma)", "中国語", "le chinois (langue)") },
          { hz: "汉字", py: "hànzì", m: L("한자, 중국 글자", "Chinese characters", "caracteres chinos", "漢字", "caractères chinois") },
          { hz: "拼音", py: "pīnyīn", m: L("병음 (로마자 발음 표기)", "pinyin (romanised spelling)", "pinyin (transcripción en letras latinas)", "ピンイン（ローマ字の発音表記）", "pinyin (transcription en lettres latines)") },
          { hz: "笔记本", py: "bǐjìběn", m: L("공책, 노트", "notebook", "cuaderno", "ノート", "cahier") },
          { hz: "老师", py: "lǎoshī", m: L("선생님", "teacher", "profesor/a", "先生", "professeur") },
          { hz: "目标", py: "mùbiāo", m: L("목표", "goal, target", "meta, objetivo", "目標", "objectif") },
          { hz: "每天", py: "měitiān", m: L("매일", "every day", "todos los días", "毎日", "chaque jour") },
          { hz: "加油", py: "jiāyóu", m: L("힘내! 파이팅!", "Go for it! You can do it!", "¡Ánimo! ¡Tú puedes!", "がんばれ！", "Courage ! Vas-y !") }
        ]
      },
      {
        h: L("한 음절 = 한 글자", "One syllable = one character", "Una sílaba = un carácter", "1音節＝1文字", "Une syllabe = un caractère"),
        body: L(
          "• 중국어 한자 한 글자는 <b>한 음절</b>로 읽어요.<br>• 그래서 병음 음절 수를 세면 한자 수를 알 수 있어요.<br>• <span class=\"py\">wǒ shì Zhōngguó rén</span>(나는 중국인이에요)은 5음절 → <span class=\"hz\">我是中国人</span> 5글자!",
          "• Each Chinese character is read as <b>one syllable</b>.<br>• So if you count the pinyin syllables, you know how many characters there are.<br>• <span class=\"py\">wǒ shì Zhōngguó rén</span> (I am Chinese) has 5 syllables → <span class=\"hz\">我是中国人</span>, 5 characters!",
          "• Cada carácter chino se lee como <b>una sílaba</b>.<br>• Si cuentas las sílabas en pinyin, sabes cuántos caracteres hay.<br>• <span class=\"py\">wǒ shì Zhōngguó rén</span> (Soy chino/a) tiene 5 sílabas → <span class=\"hz\">我是中国人</span>, ¡5 caracteres!",
          "• 漢字1文字は<b>1音節</b>で読みます。<br>• ピンインの音節を数えれば、漢字の数がわかります。<br>• <span class=\"py\">wǒ shì Zhōngguó rén</span>（私は中国人です）は5音節 → <span class=\"hz\">我是中国人</span>で5文字！",
          "• Chaque caractère chinois se lit en <b>une syllabe</b>.<br>• En comptant les syllabes du pinyin, tu connais le nombre de caractères.<br>• <span class=\"py\">wǒ shì Zhōngguó rén</span> (Je suis chinois·e) a 5 syllabes → <span class=\"hz\">我是中国人</span>, 5 caractères !"
        ),
        widget: "wordlist",
        items: [
          { hz: "我", py: "wǒ", m: L("나", "I, me", "yo", "私", "je, moi") },
          { hz: "是", py: "shì", m: L("~이다", "to be (am/is/are)", "ser", "～である", "être") },
          { hz: "中", py: "zhōng", m: L("가운데", "middle", "medio, centro", "真ん中", "milieu") },
          { hz: "国", py: "guó", m: L("나라", "country", "país", "国", "pays") },
          { hz: "人", py: "rén", m: L("사람", "person", "persona", "人", "personne") },
          { hz: "中国人", py: "Zhōngguó rén", m: L("중국 사람", "Chinese person", "persona china", "中国人", "Chinois·e") }
        ]
      },
      {
        h: L("병음은 영어처럼 읽지 않아요", "Pinyin is not read like English", "El pinyin no se lee como el inglés", "ピンインは英語読みしない", "Le pinyin ne se lit pas comme l'anglais"),
        body: L(
          "• 병음은 로마자를 쓰지만 <b>영어 발음 규칙이 아니에요</b>.<br>• 예: <span class=\"py\">shì</span>(是)는 영어 \"she\"(쉬)가 아니라 혀를 말아 올린 <b>\"슈r\"</b>에 가까워요. 영어 \"sure\"의 첫소리를 떠올려 보세요.<br>• 아래 표에서 헷갈리기 쉬운 병음을 확인하세요.",
          "• Pinyin uses Latin letters, but it does <b>not follow English spelling rules</b>.<br>• Example: <span class=\"py\">shì</span> (是) is not like English \"she\" — it sounds closer to the start of \"<b>sure</b>\", with the tongue curled back.<br>• Check the tricky pinyin in the table below.",
          "• El pinyin usa letras latinas, pero <b>no sigue las reglas del inglés</b>.<br>• Ejemplo: <span class=\"py\">shì</span> (是) no suena como el inglés \"she\"; se parece más al inicio de \"<b>sure</b>\", con la lengua curvada hacia atrás.<br>• Revisa en la tabla el pinyin más engañoso.",
          "• ピンインはローマ字を使いますが、<b>英語の読み方ではありません</b>。<br>• 例：<span class=\"py\">shì</span>（是）は英語の \"she\" ではなく、舌を反らせた「<b>シュ(r)</b>」に近く、英語 \"sure\" の出だしのような音です。<br>• 下の表でまぎらわしいピンインを確認しましょう。",
          "• Le pinyin utilise l'alphabet latin, mais <b>pas les règles de l'anglais</b>.<br>• Exemple : <span class=\"py\">shì</span> (是) ne se dit pas comme l'anglais « she » ; c'est plus proche du début de « <b>sure</b> », langue recourbée vers l'arrière.<br>• Vérifie les pinyin piégeux dans le tableau."
        ),
        widget: "table",
        cols: [
          L("병음", "Pinyin", "Pinyin", "ピンイン", "Pinyin"),
          L("이렇게 읽지 마세요", "Don't read it like…", "No lo leas como…", "こう読まない", "Ne le lis pas comme…"),
          L("실제 소리에 가까운 것", "Closer to…", "Más cerca de…", "実際の音に近いのは", "Plus proche de…"),
          L("예", "Example", "Ejemplo", "例", "Exemple")
        ],
        items: [
          ["shi", "she", L("sure의 sh + 혀 말기", "\"sh\" of sure, tongue curled", "\"sh\" de sure, lengua curvada", "sure の sh＋舌を反らす", "« sh » de sure, langue recourbée"), { hz: "是", py: "shì" }],
          ["xi", "ksi / zai", L("\"시\" (혀를 아랫니 뒤에)", "\"see\" with tongue behind lower teeth", "\"si\" con la lengua tras los dientes inferiores", "「シ」（舌先を下の歯の裏に）", "« si », langue derrière les dents du bas"), { hz: "学习", py: "xuéxí" }],
          ["c", "k / s", L("\"ㅊ\" (ts + 숨)", "\"ts\" in cats + a puff of air", "\"ts\" con aire", "「ツ」＋息", "« ts » avec un souffle"), { hz: "词", py: "cí" }],
          ["q", "k / kw", L("\"치\" (숨을 세게)", "\"ch\" in cheese, with a puff", "\"ch\" con aire", "「チ」（強い息）", "« tch » avec un souffle"), { hz: "七", py: "qī" }],
          ["zh", "z", L("\"j\" + 혀 말기", "\"j\" in jug, tongue curled", "\"y\" fuerte, lengua curvada", "「ヂ」＋舌を反らす", "« dj », langue recourbée"), { hz: "中", py: "zhōng" }]
        ]
      },
      {
        h: L("말하고 듣는 환경 만들기", "Surround yourself with speaking and listening", "Rodéate de mandarín hablado", "話す・聞く環境をつくる", "Entoure-toi de mandarin parlé"),
        widget: "cards",
        items: [
          { icon: "🗣️", title: L("원어민과 대화하기", "Talk with native speakers", "Habla con nativos", "ネイティブと話す", "Parle avec des natifs"),
            body: L("발음을 바로 고쳐 주니까 나쁜 습관이 굳기 전에 고칠 수 있어요. 자신감도 쑥쑥!", "They fix your pronunciation right away, before bad habits stick. Your confidence grows too!", "Te corrigen la pronunciación al momento, antes de que se fijen malos hábitos. ¡Y ganas confianza!", "発音をすぐ直してもらえるので、悪いクセがつく前に直せます。自信もつきます！", "Ils corrigent ta prononciation tout de suite, avant que les mauvaises habitudes s'installent. Et tu gagnes en confiance !"),
            hz: "你好", py: "nǐ hǎo" },
          { icon: "🎧", title: L("이동 시간에 듣기", "Listen on the way", "Escucha en el trayecto", "移動中に聞く", "Écoute en chemin"),
            body: L("등하굣길에 중국어를 들으면 자주 함께 나오는 소리와 뜻이 귀에 익어요.", "Listening on your way to school helps you notice sounds that go together and what they mean.", "Escuchar de camino a la escuela te ayuda a reconocer sonidos que van juntos y su significado.", "通学中に聞くと、よく一緒に出てくる音と意味に耳が慣れます。", "Écouter sur le trajet de l'école t'aide à repérer les sons qui vont ensemble et leur sens."),
            hz: "听", py: "tīng" },
          { icon: "📻", title: L("뉴스가 너무 빠르면?", "News too fast?", "¿Las noticias van muy rápido?", "ニュースが速すぎたら？", "Les infos vont trop vite ?"),
            body: L("처음엔 다 빠르게 들려요. 하루 한 글자씩 가르쳐 주는 쉬운 팟캐스트로 시작해도 좋아요.", "Everything sounds fast at first. Start with an easy podcast that teaches one character a day.", "Al principio todo suena rápido. Empieza con un pódcast fácil que enseñe un carácter al día.", "最初は何でも速く聞こえます。1日1文字教えてくれるやさしいポッドキャストから始めましょう。", "Au début, tout semble rapide. Commence par un podcast facile qui enseigne un caractère par jour."),
            hz: "说", py: "shuō" }
        ]
      },
      {
        h: L("SMART 목표 세우기", "Setting SMART goals", "Metas SMART", "SMARTな目標を立てる", "Des objectifs SMART"),
        body: L(
          "3개월·9개월·1년 뒤의 나를 상상하고, 큰 목표를 <b>월별 작은 목표</b>로 나누세요.<br><b>S – Specific(구체적)</b>: 무엇을, 어떤 단계로 할지 정해요.<br><b>M – Measurable(측정 가능)</b>: 숫자를 넣어요. 예: 두 달에 한자 30개.<br><b>A – Attainable(달성 가능)</b>: 현실적인지 점검해요. 일주일에 1시간 공부로 한 달에 한자 100개는 무리!<br><b>R – Relevant(의미 있는)</b>: 이 목표가 나에게 왜 중요한지 적어요.<br><b>T – Time-bound(기한)</b>: 마감과 중간 점검을 정해요. 한 달 100개 = 일주일 25개.<br>목표는 바꿔도 괜찮아요. 현실에 맞게 고치는 것도 실력이에요!",
          "Picture yourself in 3 months, 9 months and 1 year, then split big goals into <b>small monthly goals</b>.<br><b>S – Specific</b>: decide exactly what and which steps.<br><b>M – Measurable</b>: add a number, e.g. 30 characters in two months.<br><b>A – Attainable</b>: be realistic. 100 characters a month with only 1 hour a week? Too much!<br><b>R – Relevant</b>: write down why this goal matters to you.<br><b>T – Time-bound</b>: set a deadline and checkpoints. 100 a month = 25 a week.<br>It's fine to change your goals — adjusting them is smart, not failing!",
          "Imagínate dentro de 3 meses, 9 meses y 1 año, y divide las metas grandes en <b>metas mensuales pequeñas</b>.<br><b>S – Específica</b>: decide qué harás y con qué pasos.<br><b>M – Medible</b>: pon un número, p. ej. 30 caracteres en dos meses.<br><b>A – Alcanzable</b>: sé realista. ¿100 caracteres al mes con 1 hora semanal? ¡Demasiado!<br><b>R – Relevante</b>: escribe por qué te importa.<br><b>T – Con plazo</b>: fija fecha límite y controles. 100 al mes = 25 por semana.<br>Cambiar tus metas está bien: ajustarlas es de listos, ¡no es fracasar!",
          "3か月後・9か月後・1年後の自分を想像し、大きな目標を<b>月ごとの小さな目標</b>に分けましょう。<br><b>S – Specific（具体的）</b>：何を、どんな手順でやるか決める。<br><b>M – Measurable（測定可能）</b>：数字を入れる。例：2か月で漢字30字。<br><b>A – Attainable（達成可能）</b>：現実的か確認。週1時間で月100字は無理！<br><b>R – Relevant（自分にとって意味がある）</b>：なぜ大事かを書く。<br><b>T – Time-bound（期限）</b>：締め切りと中間チェックを決める。月100字＝週25字。<br>目標は変えてもOK。調整するのは失敗ではなく賢さです！",
          "Imagine-toi dans 3 mois, 9 mois et 1 an, puis découpe les grands objectifs en <b>petits objectifs mensuels</b>.<br><b>S – Spécifique</b> : décide quoi faire et par quelles étapes.<br><b>M – Mesurable</b> : ajoute un nombre, ex. 30 caractères en deux mois.<br><b>A – Atteignable</b> : sois réaliste. 100 caractères par mois avec 1 heure par semaine ? Trop !<br><b>R – Pertinent</b> : écris pourquoi c'est important pour toi.<br><b>T – Temporel</b> : fixe une date limite et des étapes. 100 par mois = 25 par semaine.<br>Tu peux changer tes objectifs : les ajuster, c'est intelligent, pas un échec !"
        ),
        widget: "smart"
      },
      {
        h: L("매일 조금씩 + 기술 섞기", "A little every day + mix the skills", "Un poco cada día + combina destrezas", "毎日少しずつ＋技能をミックス", "Un peu chaque jour + mélange les compétences"),
        body: L(
          "• 일주일에 한 번 몰아서 하기보다 <b>매일 정해진 시간</b>에 짧게 공부하세요. 뇌는 짧은 집중을 좋아해요.<br>• 읽기·말하기·듣기·쓰기를 <b>두 개씩 묶어서</b> 연습하면 더 빨리 늘어요.",
          "• Instead of one long session a week, study <b>a short time every day</b> at a set time. Your brain likes short bursts.<br>• Practise the four skills <b>in pairs</b> to improve faster.",
          "• En vez de una sesión larga a la semana, estudia <b>un rato corto cada día</b> a una hora fija. Al cerebro le gustan los ratos cortos.<br>• Practica las cuatro destrezas <b>de dos en dos</b> para avanzar más rápido.",
          "• 週1回まとめてやるより、<b>毎日決まった時間に短く</b>勉強しましょう。脳は短い集中が得意です。<br>• 4技能を<b>2つずつ組み合わせて</b>練習すると早く伸びます。",
          "• Plutôt qu'une longue séance par semaine, étudie <b>un peu chaque jour</b> à heure fixe. Le cerveau aime les sessions courtes.<br>• Travaille les quatre compétences <b>par paires</b> pour progresser plus vite."
        ),
        widget: "cards",
        items: [
          { icon: "📖🗣️", title: L("읽기 + 말하기", "Reading + speaking", "Leer + hablar", "読む＋話す", "Lire + parler"),
            body: L("소리 내어 읽기! 성조를 신경 쓰게 되고 내 목소리도 들을 수 있어요. 아침 먹을 때 음식 단어 카드처럼 상황에 맞는 플래시카드를 써 보세요.", "Read aloud! You'll pay attention to tones and hear yourself. Use flashcards that match the moment, like food words at breakfast.", "¡Lee en voz alta! Prestarás atención a los tonos y te oirás. Usa tarjetas según el momento, como palabras de comida en el desayuno.", "音読しよう！声調に注意し、自分の声も聞けます。朝食中は食べ物の単語カードなど、場面に合ったカードを使おう。", "Lis à voix haute ! Tu fais attention aux tons et tu t'entends. Utilise des cartes liées au moment, comme les aliments au petit-déjeuner."),
            hz: "读", py: "dú" },
          { icon: "🎧✍️", title: L("듣기 + 쓰기", "Listening + writing", "Escuchar + escribir", "聞く＋書く", "Écouter + écrire"),
            body: L("중국어 영상을 듣고 들린 것을 받아 적은 뒤, 중국어 잘하는 친구에게 확인받아요. 하루 약 15분이면 충분해요.", "Listen to a Chinese video, write down what you hear, then ask a fluent friend to check. About 15 minutes a day is enough.", "Escucha un vídeo en chino, escribe lo que oyes y pide a un amigo que lo revise. Unos 15 minutos al día bastan.", "中国語の動画を聞いて書き取り、中国語が得意な友達に確認してもらおう。1日約15分でOK。", "Écoute une vidéo en chinois, note ce que tu entends, puis fais vérifier par un ami bilingue. Environ 15 minutes par jour suffisent."),
            hz: "写", py: "xiě" },
          { icon: "📖✍️", title: L("읽기 + 쓰기", "Reading + writing", "Leer + escribir", "読む＋書く", "Lire + écrire"),
            body: L("문장을 읽고 따라 써요. 초보라면 병음을 먼저 쓰고 그 아래에 한자를 써요. 비슷하게 생긴 한자를 구별하는 힘이 생겨요.", "Read a sentence, then copy it. Beginners: write the pinyin first, then the characters underneath. You'll learn to spot look-alike characters.", "Lee una frase y cópiala. Principiantes: primero el pinyin y debajo los caracteres. Aprenderás a distinguir caracteres parecidos.", "文を読んで書き写そう。初心者はまずピンイン、その下に漢字を書く。似た漢字を見分ける力がつきます。", "Lis une phrase puis recopie-la. Débutant : d'abord le pinyin, puis les caractères en dessous. Tu apprendras à distinguer les caractères qui se ressemblent."),
            hz: "看", py: "kàn" }
        ]
      },
      {
        h: L("더 많은 공부 요령", "More study tricks", "Más trucos de estudio", "その他のコツ", "Autres astuces"),
        widget: "flip",
        items: [
          { front: L("단어만 외우면 대화에서 못 써요 😢", "I memorise words but can't use them 😢", "Memorizo palabras pero no sé usarlas 😢", "単語を覚えても会話で使えない😢", "J'apprends des mots mais je ne sais pas les utiliser 😢"),
            back: L("새 단어마다 <b>짧은 문장</b>을 하나 만들어요. 문맥이 있어야 기억에 남아요.", "Make a <b>short sentence</b> for each new word. Context makes it stick.", "Crea una <b>frase corta</b> con cada palabra nueva. El contexto ayuda a recordar.", "新しい単語ごとに<b>短い文</b>を1つ作ろう。文脈があると覚えられます。", "Fais une <b>petite phrase</b> avec chaque nouveau mot. Le contexte aide à retenir.") },
          { front: L("문법이 너무 복잡해요 🤯", "Grammar is overwhelming 🤯", "La gramática me abruma 🤯", "文法が難しすぎる🤯", "La grammaire me submerge 🤯"),
            back: L("문법은 시간이 걸려요. <b>한 가지를 완전히 이해한 뒤</b> 다음으로 넘어가요.", "Grammar takes time. <b>Fully understand one point</b> before adding the next.", "La gramática lleva tiempo. <b>Entiende bien un punto</b> antes de pasar al siguiente.", "文法は時間がかかるもの。<b>1つを完全に理解してから</b>次へ。", "La grammaire prend du temps. <b>Comprends bien un point</b> avant le suivant.") },
          { front: L("눈으로 봐야 외워지는 타입이에요 👀", "I'm a visual learner 👀", "Aprendo mejor con lo visual 👀", "目で見て覚えるタイプ👀", "J'apprends mieux en voyant 👀"),
            back: L("<b>포스트잇 방법</b>: 색깔마다 단어 종류를 정해 한자를 써서 벽(특히 방문 옆)에 붙여요. 드나들 때마다 하나씩 읽어요!", "<b>Sticky-note method</b>: one colour per word category; write characters and stick them on the wall (by the door is best). Read one each time you go in or out!", "<b>Método de notas adhesivas</b>: un color por categoría; escribe caracteres y pégalos en la pared (junto a la puerta). ¡Lee uno al entrar o salir!", "<b>付箋メソッド</b>：色ごとに単語の種類を決め、漢字を書いて壁（ドアの横がおすすめ）に貼る。出入りのたびに1つ読もう！", "<b>Méthode des post-it</b> : une couleur par catégorie ; écris des caractères et colle-les au mur (près de la porte). Lis-en un à chaque passage !") },
          { front: L("이제 좀 익숙해졌어요. 다음 단계는? 🚀", "I'm getting comfortable. What's next? 🚀", "Ya me siento cómodo/a. ¿Y ahora? 🚀", "少し慣れてきた。次は？🚀", "Je suis plus à l'aise. Et maintenant ? 🚀"),
            back: L("<b>완전 몰입</b>: 휴대폰·컴퓨터 언어를 중국어로 바꿔요. 단, 준비가 됐을 때만! 너무 이르면 지칠 수 있어요.", "<b>Total immersion</b>: switch your phone/computer language to Chinese — but only when you're ready, or it can overwhelm you.", "<b>Inmersión total</b>: pon el móvil/ordenador en chino, pero solo cuando estés listo/a, o te puedes agobiar.", "<b>完全没入</b>：スマホやPCの言語を中国語に。ただし準備ができてから！早すぎると疲れてしまいます。", "<b>Immersion totale</b> : mets ton téléphone/ordinateur en chinois, mais seulement quand tu es prêt·e, sinon c'est décourageant.") }
        ]
      }
    ],
    sets: [
      {
        title: L("1. 음절·병음·교실 단어", "1. Syllables, pinyin & classroom words", "1. Sílabas, pinyin y palabras de clase", "1. 音節・ピンイン・教室のことば", "1. Syllabes, pinyin et mots de classe"),
        items: [
          { type: "mc", say: "我是中国人",
            q: L("<span class=\"py\">wǒ shì Zhōngguó rén</span>은 한자 몇 글자일까요?", "How many characters are in <span class=\"py\">wǒ shì Zhōngguó rén</span>?", "¿Cuántos caracteres tiene <span class=\"py\">wǒ shì Zhōngguó rén</span>?", "<span class=\"py\">wǒ shì Zhōngguó rén</span> は漢字何文字？", "Combien de caractères dans <span class=\"py\">wǒ shì Zhōngguó rén</span> ?"),
            opts: ["3", "4", "5", "6"], a: 2,
            ex: L("5음절 = 5글자: 我·是·中·国·人.", "5 syllables = 5 characters: 我·是·中·国·人.", "5 sílabas = 5 caracteres: 我·是·中·国·人.", "5音節＝5文字：我・是・中・国・人。", "5 syllabes = 5 caractères : 我·是·中·国·人.") },
          { type: "order",
            q: L("\"나는 중국 사람이에요\"를 만드세요.", "Build \"I am Chinese.\"", "Forma «Soy chino/a».", "「私は中国人です」を作ろう。", "Construis « Je suis chinois·e »."),
            tokens: ["我", "是", "中国", "人"],
            ex: L("我(나) + 是(이다) + 中国人(중국 사람).", "我 (I) + 是 (am) + 中国人 (Chinese person).", "我 (yo) + 是 (soy) + 中国人 (persona china).", "我（私）＋是（です）＋中国人（中国人）。", "我 (je) + 是 (suis) + 中国人 (Chinois·e).") },
          { type: "tf",
            q: L("병음 <span class=\"py\">shi</span>는 영어 \"she\"와 똑같이 읽는다.", "Pinyin <span class=\"py\">shi</span> is pronounced exactly like English \"she\".", "El pinyin <span class=\"py\">shi</span> se pronuncia igual que el inglés \"she\".", "ピンイン <span class=\"py\">shi</span> は英語の \"she\" と同じ発音だ。", "Le pinyin <span class=\"py\">shi</span> se prononce exactement comme l'anglais « she »."),
            a: false,
            ex: L("아니에요! 혀를 말아 올린 소리로, \"sure\"의 첫소리에 더 가까워요.", "No! The tongue curls back; it's closer to the start of \"sure\".", "¡No! La lengua se curva; se parece más al inicio de \"sure\".", "いいえ！舌を反らせる音で、\"sure\" の出だしに近いです。", "Non ! La langue se recourbe ; c'est plus proche du début de « sure ».") },
          { type: "listen", say: "汉字", opts: ["hànzì", "pīnyīn", "xuéxí", "mùbiāo"], a: 0,
            ex: L("汉字 hànzì = 한자.", "汉字 hànzì = Chinese characters.", "汉字 hànzì = caracteres chinos.", "汉字 hànzì＝漢字。", "汉字 hànzì = caractères chinois.") },
          { type: "type", say: "拼音",
            q: L("拼音의 병음을 쓰세요.", "Type the pinyin for 拼音.", "Escribe el pinyin de 拼音.", "拼音のピンインを書こう。", "Tape le pinyin de 拼音."),
            a: ["pīnyīn", "pin1yin1"], loose: true,
            ex: L("拼音 = pīnyīn (1성 + 1성).", "拼音 = pīnyīn (tone 1 + tone 1).", "拼音 = pīnyīn (tono 1 + tono 1).", "拼音＝pīnyīn（1声＋1声）。", "拼音 = pīnyīn (ton 1 + ton 1).") },
          { type: "match",
            q: L("단어와 뜻을 연결하세요.", "Match the words and meanings.", "Une palabras y significados.", "単語と意味を結ぼう。", "Associe mots et sens."),
            pairs: [
              [{ hz: "学习", py: "xuéxí" }, L("공부하다", "to study", "estudiar", "勉強する", "étudier")],
              [{ hz: "笔记本", py: "bǐjìběn" }, L("공책", "notebook", "cuaderno", "ノート", "cahier")],
              [{ hz: "目标", py: "mùbiāo" }, L("목표", "goal", "meta", "目標", "objectif")],
              [{ hz: "每天", py: "měitiān" }, L("매일", "every day", "cada día", "毎日", "chaque jour")]
            ] },
          { type: "listen", say: "加油", opts: ["měitiān", "jiāyóu", "bǐjìběn", "Zhōngwén"], a: 1,
            ex: L("加油 jiāyóu = 힘내! 파이팅!", "加油 jiāyóu = Go for it!", "加油 jiāyóu = ¡Ánimo!", "加油 jiāyóu＝がんばれ！", "加油 jiāyóu = Courage !") },
          { type: "mc",
            q: L("한자 연습용 공책으로 좋은 것은?", "Which notebook is best for character practice?", "¿Qué cuaderno es mejor para practicar caracteres?", "漢字練習に向いているノートは？", "Quel cahier est le mieux pour les caractères ?"),
            opts: [
              L("아주 작은 수첩", "A tiny pocket notebook", "Una libreta diminuta", "とても小さい手帳", "Un tout petit carnet"),
              L("다른 과목과 같이 쓰는 공책", "One shared with other subjects", "Uno compartido con otras asignaturas", "他の教科と共用のノート", "Un cahier partagé avec d'autres matières"),
              L("줄이 없는 스케치북만", "Only a blank sketchbook", "Solo un cuaderno de dibujo", "無地のスケッチブックだけ", "Seulement un carnet de croquis"),
              L("줄 간격과 여백이 넓은 중국어 전용 공책", "A Chinese-only notebook with wide lines and margins", "Uno solo para chino con líneas y márgenes amplios", "行間と余白が広い中国語専用ノート", "Un cahier réservé au chinois, avec lignes et marges larges")
            ], a: 3,
            ex: L("넓은 줄과 여백이 있어야 한자를 크게, 여러 번 연습할 수 있어요.", "Wide lines and margins give room to write characters big and many times.", "Las líneas y márgenes amplios dejan espacio para escribir caracteres grandes.", "広い行間と余白があれば漢字を大きく何度も練習できます。", "Lignes et marges larges laissent la place d'écrire grand et souvent.") }
        ]
      },
      {
        title: L("2. SMART 목표", "2. SMART goals", "2. Metas SMART", "2. SMARTな目標", "2. Objectifs SMART"),
        items: [
          { type: "match",
            q: L("SMART의 글자와 뜻을 연결하세요.", "Match each SMART letter to its meaning.", "Une cada letra SMART con su significado.", "SMARTの文字と意味を結ぼう。", "Associe chaque lettre SMART à son sens."),
            pairs: [
              ["S", L("구체적", "Specific", "Específica", "具体的", "Spécifique")],
              ["M", L("측정 가능", "Measurable", "Medible", "測定可能", "Mesurable")],
              ["A", L("달성 가능", "Attainable", "Alcanzable", "達成可能", "Atteignable")],
              ["R", L("나에게 의미 있는", "Relevant", "Relevante", "自分にとって意味がある", "Pertinent")],
              ["T", L("기한이 있는", "Time-bound", "Con plazo", "期限がある", "Temporel")]
            ] },
          { type: "mc",
            q: L("\"공부 열심히 하기\"를 \"두 달 안에 한자 30개\"로 바꾸면 주로 어떤 기준이 좋아질까요?", "Changing \"study hard\" to \"30 characters in two months\" mainly adds which criterion?", "Cambiar «estudiar mucho» por «30 caracteres en dos meses» añade sobre todo…", "「がんばる」を「2か月で漢字30字」に変えると、主にどの基準が加わる？", "Passer de « travailler dur » à « 30 caractères en deux mois » ajoute surtout…"),
            opts: [L("R – 의미", "R – Relevant", "R – Relevante", "R – 意味", "R – Pertinent"), L("M – 측정 가능", "M – Measurable", "M – Medible", "M – 測定可能", "M – Mesurable"), L("A – 달성 가능", "A – Attainable", "A – Alcanzable", "A – 達成可能", "A – Atteignable"), L("없음", "None", "Ninguno", "なし", "Aucun")],
            a: 1,
            ex: L("숫자(30개)가 들어가서 측정할 수 있게 됐어요. (기한 T도 생겼어요!)", "A number (30) makes it measurable. (It also gained a deadline, T!)", "Un número (30) la hace medible. (¡Y también tiene plazo, T!)", "数字（30）が入って測定可能に。（期限Tも加わりました！）", "Un nombre (30) la rend mesurable. (Et elle a aussi une échéance, T !)") },
          { type: "tf",
            q: L("일주일에 1시간만 공부하면서 한 달에 한자 100개를 외우는 것은 현실적인 목표다.", "Learning 100 characters a month while studying only 1 hour a week is a realistic goal.", "Aprender 100 caracteres al mes estudiando solo 1 hora a la semana es realista.", "週1時間だけの勉強で月100字覚えるのは現実的な目標だ。", "Apprendre 100 caractères par mois en étudiant 1 heure par semaine est réaliste."),
            a: false,
            ex: L("A(달성 가능)에 어긋나요. 공부 시간을 늘리거나 목표를 줄여야 해요.", "That fails A (Attainable). Study more or lower the target.", "No cumple la A (Alcanzable). Estudia más o baja la meta.", "A（達成可能）に合いません。時間を増やすか目標を下げよう。", "Ça ne respecte pas A (Atteignable). Étudie plus ou réduis l'objectif.") },
          { type: "type",
            q: L("한 달(4주)에 한자 100개가 목표라면 일주일에 몇 개?", "Goal: 100 characters a month (4 weeks). How many per week?", "Meta: 100 caracteres al mes (4 semanas). ¿Cuántos por semana?", "月（4週）100字が目標なら、1週間に何字？", "Objectif : 100 caractères par mois (4 semaines). Combien par semaine ?"),
            a: ["25"],
            ex: L("100 ÷ 4 = 25. 이런 중간 점검이 T(기한)의 핵심이에요.", "100 ÷ 4 = 25. Mini-checkpoints like this are what T is about.", "100 ÷ 4 = 25. Estos controles intermedios son la clave de la T.", "100÷4＝25。こうした中間チェックがTのポイント。", "100 ÷ 4 = 25. Ces mini-étapes sont l'essence du T.") },
          { type: "mc",
            q: L("R(Relevant)를 위해 스스로에게 물어볼 질문은?", "Which question helps with R (Relevant)?", "¿Qué pregunta ayuda con la R (Relevante)?", "R（Relevant）のために自分に聞く質問は？", "Quelle question aide pour R (Pertinent) ?"),
            opts: [
              L("마감일은 언제지?", "When is the deadline?", "¿Cuál es la fecha límite?", "締め切りはいつ？", "Quelle est la date limite ?"),
              L("몇 개를 외울까?", "How many will I learn?", "¿Cuántos aprenderé?", "何字覚える？", "Combien vais-je en apprendre ?"),
              L("이 목표가 나에게 왜 중요하지?", "Why does this goal matter to me?", "¿Por qué me importa esta meta?", "この目標はなぜ自分に大切？", "Pourquoi cet objectif compte-t-il pour moi ?"),
              L("친구는 몇 개를 외웠지?", "How many did my friend learn?", "¿Cuántos aprendió mi amigo?", "友達は何字覚えた？", "Combien mon ami en a-t-il appris ?")
            ], a: 2,
            ex: L("R은 목표에 나만의 이유와 이익을 연결하는 거예요.", "R links the goal to your own reason and benefit.", "La R une la meta a tu propio motivo y beneficio.", "Rは目標に自分の理由やメリットを結びつけること。", "R relie l'objectif à ta propre raison et à ton bénéfice.") },
          { type: "mc",
            q: L("T(Time-bound)가 필요한 가장 큰 이유는?", "Main reason for T (Time-bound)?", "¿Razón principal de la T (Con plazo)?", "T（期限）が必要な一番の理由は？", "Raison principale du T (Temporel) ?"),
            opts: [
              L("마감이 없으면 계속 미루게 되니까", "Without a deadline we keep putting it off", "Sin plazo, lo vamos posponiendo", "期限がないと先延ばしするから", "Sans échéance, on remet toujours à plus tard"),
              L("선생님이 좋아해서", "Teachers like it", "A los profesores les gusta", "先生が好きだから", "Les profs aiment ça"),
              L("목표를 더 어렵게 하려고", "To make goals harder", "Para hacer las metas más difíciles", "目標を難しくするため", "Pour rendre l'objectif plus dur"),
              L("숫자를 없애려고", "To remove numbers", "Para quitar números", "数字をなくすため", "Pour enlever les nombres")
            ], a: 0,
            ex: L("기한과 중간 점검이 미루기를 막아 줘요.", "Deadlines and checkpoints stop procrastination.", "Plazos y controles evitan dejarlo para después.", "期限と中間チェックが先延ばしを防ぎます。", "Échéances et étapes évitent de procrastiner.") },
          { type: "tf",
            q: L("목표가 너무 어려우면 현실에 맞게 바꿔도 된다.", "If a goal is too hard, it's OK to adjust it.", "Si una meta es demasiado difícil, se puede ajustar.", "目標が難しすぎたら、現実に合わせて変えてもいい。", "Si un objectif est trop dur, on peut l'ajuster."),
            a: true,
            ex: L("맞아요! 목표를 조정하는 건 실패가 아니라 자기 능력을 잘 아는 거예요.", "Yes! Adjusting shows you know your own abilities — it's not failing.", "¡Sí! Ajustarla muestra que conoces tus capacidades; no es fracasar.", "その通り！調整は失敗ではなく、自分をよく知っている証拠。", "Oui ! Ajuster montre que tu connais tes capacités ; ce n'est pas un échec.") },
          { type: "order",
            q: L("SMART 순서대로 놓으세요.", "Put the SMART words in order.", "Ordena las palabras SMART.", "SMARTの順に並べよう。", "Remets les mots SMART dans l'ordre."),
            tokens: ["Specific", "Measurable", "Attainable", "Relevant", "Time-bound"] }
        ]
      },
      {
        title: L("3. 공부 습관과 요령", "3. Study habits and tricks", "3. Hábitos y trucos de estudio", "3. 勉強の習慣とコツ", "3. Habitudes et astuces"),
        items: [
          { type: "mc",
            q: L("가장 효과적인 공부 시간표는?", "Which schedule works best?", "¿Qué horario funciona mejor?", "一番効果的なスケジュールは？", "Quel emploi du temps marche le mieux ?"),
            opts: [
              L("일요일에 5시간 몰아서", "5 hours every Sunday", "5 horas cada domingo", "日曜に5時間まとめて", "5 heures chaque dimanche"),
              L("시험 전날 밤새기", "All-nighter before the test", "Toda la noche antes del examen", "テスト前日に徹夜", "Nuit blanche avant l'examen"),
              L("기분 내킬 때만", "Only when I feel like it", "Solo cuando me apetece", "気が向いたときだけ", "Seulement quand j'en ai envie"),
              L("매일 정해진 시간에 짧게", "A short session at a set time every day", "Una sesión corta cada día a hora fija", "毎日決まった時間に短く", "Une courte séance chaque jour à heure fixe")
            ], a: 3,
            ex: L("뇌는 짧고 자주 하는 공부에 강해요. 기초도 탄탄해져요.", "Brains do best with short, frequent study, and it builds a strong base.", "El cerebro rinde mejor con ratos cortos y frecuentes, y crea una base sólida.", "脳は短く頻繁な学習が得意。基礎も固まります。", "Le cerveau préfère des séances courtes et fréquentes ; la base devient solide.") },
          { type: "match",
            q: L("기술 조합과 활동을 연결하세요.", "Match each skill combo to an activity.", "Une cada combinación con una actividad.", "技能の組み合わせと活動を結ぼう。", "Associe chaque combinaison à une activité."),
            pairs: [
              [L("읽기 + 말하기", "Reading + speaking", "Leer + hablar", "読む＋話す", "Lire + parler"), L("소리 내어 읽기", "Reading aloud", "Leer en voz alta", "音読", "Lire à voix haute")],
              [L("듣기 + 쓰기", "Listening + writing", "Escuchar + escribir", "聞く＋書く", "Écouter + écrire"), L("영상 받아쓰기 후 친구 확인", "Write down a video, friend checks", "Transcribir un vídeo y que un amigo revise", "動画を書き取り友達が確認", "Noter une vidéo, un ami vérifie")],
              [L("읽기 + 쓰기", "Reading + writing", "Leer + escribir", "読む＋書く", "Lire + écrire"), L("문장 읽고 병음→한자로 따라 쓰기", "Read a sentence, copy it: pinyin then characters", "Leer y copiar: pinyin y luego caracteres", "文を読み、ピンイン→漢字で書き写す", "Lire puis recopier : pinyin puis caractères")]
            ] },
          { type: "tf",
            q: L("듣기+쓰기 연습은 하루 약 15분 정도가 추천된다.", "About 15 minutes a day is suggested for listening + writing.", "Se sugieren unos 15 minutos al día de escuchar + escribir.", "聞く＋書くの練習は1日約15分がおすすめ。", "On conseille environ 15 minutes par jour pour écouter + écrire."),
            a: true,
            ex: L("맞아요. 짧게라도 매일 하면 대화 속도에 익숙해져요.", "Right. Even short daily practice gets you used to real conversation speed.", "Correcto. Practicar poco pero a diario te acostumbra a la velocidad real.", "その通り。毎日少しでも会話の速さに慣れます。", "Exact. Un peu chaque jour t'habitue à la vitesse réelle.") },
          { type: "mc",
            q: L("포스트잇 방법에서 색깔이 다른 이유는?", "In the sticky-note method, why use different colours?", "En el método de notas adhesivas, ¿por qué colores distintos?", "付箋メソッドで色を変える理由は？", "Méthode des post-it : pourquoi plusieurs couleurs ?"),
            opts: [
              L("예뻐 보이려고", "Just to look pretty", "Solo para que quede bonito", "かわいく見せるため", "Juste pour faire joli"),
              L("색마다 단어 종류(주제)를 나타내려고", "Each colour = one category of words", "Cada color = una categoría de palabras", "色ごとに単語の種類を表すため", "Chaque couleur = une catégorie de mots"),
              L("성조를 표시하려고", "To show tones", "Para marcar los tonos", "声調を示すため", "Pour indiquer les tons"),
              L("선생님께 제출하려고", "To hand them in", "Para entregarlas", "先生に提出するため", "Pour les rendre au prof")
            ], a: 1,
            ex: L("색깔별로 주제를 나누면 눈으로 정리가 잘 돼요. 흰 종이 + 색깔 펜도 괜찮아요.", "Colour-coding categories helps visual learners. White notes + coloured pens work too.", "Clasificar por colores ayuda a recordar. También sirven notas blancas y bolígrafos de colores.", "色で分けると目で整理できます。白い付箋＋色ペンでもOK。", "Le code couleur aide à mémoriser. Post-it blancs + stylos de couleur, ça marche aussi.") },
          { type: "mc",
            q: L("'완전 몰입(total immersion)'의 예는?", "Which is an example of \"total immersion\"?", "¿Cuál es un ejemplo de «inmersión total»?", "「完全没入」の例は？", "Exemple d'« immersion totale » ?"),
            opts: [
              L("한자 하나 외우기", "Learning one character", "Aprender un carácter", "漢字を1つ覚える", "Apprendre un caractère"),
              L("단어장 사기", "Buying a vocab book", "Comprar un libro de vocabulario", "単語帳を買う", "Acheter un livre de vocabulaire"),
              L("휴대폰 언어를 중국어로 바꾸기", "Switching your phone to Chinese", "Poner el móvil en chino", "スマホの言語を中国語にする", "Mettre son téléphone en chinois"),
              L("영어 자막으로 영화 보기", "Watching films with English subtitles", "Ver películas con subtítulos en inglés", "英語字幕で映画を見る", "Regarder des films sous-titrés en anglais")
            ], a: 2,
            ex: L("기기를 중국어로 쓰면 직접 부딪히며 배워요. 단, 준비됐을 때만!", "Using devices in Chinese is hands-on learning — but only when you're ready!", "Usar los dispositivos en chino es aprender haciendo, ¡pero solo cuando estés listo/a!", "機器を中国語で使うと実践的に学べます。ただし準備ができてから！", "Utiliser ses appareils en chinois, c'est apprendre en pratiquant — quand on est prêt·e !") },
          { type: "tf",
            q: L("처음에는 문장보다 낱말 하나하나의 미세한 차이에 집중하는 게 좋다.", "At first, focus on tiny details of single words rather than phrases.", "Al principio, conviene centrarse en detalles de palabras sueltas y no en frases.", "最初は文より単語一つ一つの細かい違いに集中するのがよい。", "Au début, mieux vaut se concentrer sur les détails des mots isolés que sur les phrases."),
            a: false,
            ex: L("반대예요! 처음부터 <b>문장·표현</b>으로 배워야 문맥이 생기고 대화에서 쓸 수 있어요.", "The opposite! Learn <b>phrases</b> from the start so words have context and you can use them.", "¡Al revés! Aprende <b>frases</b> desde el principio para tener contexto.", "逆です！最初から<b>文・フレーズ</b>で学ぶと文脈ができ、会話で使えます。", "Au contraire ! Apprends des <b>phrases</b> dès le début pour avoir du contexte.") },
          { type: "mc",
            q: L("원어민과 대화하는 것의 큰 장점은?", "A big benefit of talking with native speakers?", "¿Gran ventaja de hablar con nativos?", "ネイティブと話す大きな利点は？", "Grand avantage de parler avec des natifs ?"),
            opts: [
              L("숙제가 없어진다", "No more homework", "Ya no hay deberes", "宿題がなくなる", "Plus de devoirs"),
              L("한자를 안 배워도 된다", "You can skip characters", "No hace falta aprender caracteres", "漢字を学ばなくていい", "Plus besoin des caractères"),
              L("문법이 필요 없다", "Grammar isn't needed", "La gramática no hace falta", "文法が要らない", "Plus besoin de grammaire"),
              L("발음을 습관이 되기 전에 고쳐 준다", "They correct pronunciation before it becomes a habit", "Corrigen la pronunciación antes de que se vuelva hábito", "クセになる前に発音を直してくれる", "Ils corrigent la prononciation avant qu'elle devienne une habitude")
            ], a: 3,
            ex: L("발음 교정 + 자신감 향상!", "Pronunciation correction + more confidence!", "¡Corrección de pronunciación + más confianza!", "発音の矯正＋自信アップ！", "Correction de la prononciation + confiance !") },
          { type: "mc",
            q: L("문법을 공부할 때 좋은 방법은?", "Good way to study grammar?", "¿Buena forma de estudiar gramática?", "文法の良い勉強法は？", "Bonne façon d'étudier la grammaire ?"),
            opts: [
              L("한 가지를 완전히 이해하고 다음으로", "Master one point, then add the next", "Dominar un punto y luego el siguiente", "1つを完全に理解してから次へ", "Maîtriser un point, puis le suivant"),
              L("모든 규칙을 하루에", "All rules in one day", "Todas las reglas en un día", "全ルールを1日で", "Toutes les règles en un jour"),
              L("문법은 아예 무시", "Ignore grammar completely", "Ignorar la gramática", "文法は完全に無視", "Ignorer la grammaire"),
              L("예외부터 외우기", "Start with exceptions", "Empezar por las excepciones", "例外から覚える", "Commencer par les exceptions")
            ], a: 0,
            ex: L("한꺼번에 하면 헷갈리고 지쳐요. 하나씩 차근차근!", "Doing everything at once is confusing. One step at a time!", "Todo a la vez confunde. ¡Paso a paso!", "一度にやると混乱します。一歩ずつ！", "Tout à la fois, c'est confus. Pas à pas !") }
        ]
      },
      {
        title: L("4. 교실 단어 듣기·쓰기", "4. Classroom words: listen & write", "4. Palabras de clase: escuchar y escribir", "4. 教室のことば：聞く・書く", "4. Mots de classe : écouter et écrire"),
        items: [
          { type: "listen", say: "学习", opts: ["汉字", "目标", "学习", "每天"], a: 2,
            ex: L("学习 xuéxí = 공부하다.", "学习 xuéxí = to study.", "学习 xuéxí = estudiar.", "学习 xuéxí＝勉強する。", "学习 xuéxí = étudier.") },
          { type: "listen", say: "笔记本", opts: ["笔记本", "拼音", "老师", "中文"], a: 0,
            ex: L("笔记本 bǐjìběn = 공책 (노트북 컴퓨터라는 뜻도 있어요).", "笔记本 bǐjìběn = notebook (also \"laptop\").", "笔记本 bǐjìběn = cuaderno (también «portátil»).", "笔记本 bǐjìběn＝ノート（ノートパソコンの意味も）。", "笔记本 bǐjìběn = cahier (aussi « ordinateur portable »).") },
          { type: "type", say: "目标",
            q: L("目标(목표)의 병음을 쓰세요.", "Type the pinyin for 目标 (goal).", "Escribe el pinyin de 目标 (meta).", "目标（目標）のピンインを書こう。", "Tape le pinyin de 目标 (objectif)."),
            a: ["mùbiāo", "mu4biao1"], loose: true,
            ex: L("目标 = mùbiāo (4성 + 1성).", "目标 = mùbiāo (tone 4 + tone 1).", "目标 = mùbiāo (tono 4 + tono 1).", "目标＝mùbiāo（4声＋1声）。", "目标 = mùbiāo (ton 4 + ton 1).") },
          { type: "type", say: "每天",
            q: L("每天(매일)의 병음을 쓰세요.", "Type the pinyin for 每天 (every day).", "Escribe el pinyin de 每天 (cada día).", "每天（毎日）のピンインを書こう。", "Tape le pinyin de 每天 (chaque jour)."),
            a: ["měitiān", "mei3tian1"], loose: true,
            ex: L("每天 = měitiān (3성 + 1성).", "每天 = měitiān (tone 3 + tone 1).", "每天 = měitiān (tono 3 + tono 1).", "每天＝měitiān（3声＋1声）。", "每天 = měitiān (ton 3 + ton 1).") },
          { type: "mc", say: "加油",
            q: L("시험 보러 가는 친구에게 \"加油!\"라고 하면 무슨 뜻?", "You tell a friend before a test: \"加油!\" What does it mean?", "Le dices a un amigo antes de un examen: «¡加油!». ¿Qué significa?", "テスト前の友達に「加油！」。どういう意味？", "Tu dis « 加油 ! » à un ami avant un examen. Ça veut dire ?"),
            opts: [
              L("기름을 넣어!", "Add oil to the car!", "¡Echa aceite!", "油を入れて！", "Mets de l'huile !"),
              L("잘 가!", "Goodbye!", "¡Adiós!", "さようなら！", "Au revoir !"),
              L("미안해!", "Sorry!", "¡Perdón!", "ごめん！", "Pardon !"),
              L("힘내! 파이팅!", "You can do it!", "¡Ánimo, tú puedes!", "がんばれ！", "Courage, tu peux le faire !")
            ], a: 3,
            ex: L("글자로는 '기름을 더하다'지만, 응원할 때 쓰는 말이에요.", "Literally \"add oil\", but it's used to cheer someone on.", "Literalmente «echar aceite», pero se usa para animar.", "文字通りは「油を足す」ですが、応援の言葉です。", "Littéralement « ajouter de l'huile », mais on l'utilise pour encourager.") },
          { type: "order",
            q: L("\"나는 매일 한자를 공부해요.\"를 만드세요.", "Build \"I study characters every day.\"", "Forma «Estudio caracteres todos los días».", "「私は毎日漢字を勉強します」を作ろう。", "Construis « J'étudie les caractères chaque jour »."),
            tokens: ["我", "每天", "学习", "汉字"],
            ex: L("중국어는 '언제'(每天)가 동사 앞에 와요: 我 + 每天 + 学习 + 汉字.", "In Chinese, \"when\" (每天) comes before the verb: 我 + 每天 + 学习 + 汉字.", "En chino, el «cuándo» (每天) va antes del verbo: 我 + 每天 + 学习 + 汉字.", "中国語では「いつ」（每天）が動詞の前：我＋每天＋学习＋汉字。", "En chinois, le « quand » (每天) précède le verbe : 我 + 每天 + 学习 + 汉字.") },
          { type: "listen", say: "中文", opts: ["Zhōngguó", "Zhōngwén", "zhōng", "rén"], a: 1,
            ex: L("中文 Zhōngwén = 중국어. 中国 Zhōngguó = 중국(나라).", "中文 Zhōngwén = Chinese language; 中国 Zhōngguó = China.", "中文 Zhōngwén = idioma chino; 中国 Zhōngguó = China.", "中文 Zhōngwén＝中国語、中国 Zhōngguó＝中国。", "中文 Zhōngwén = langue chinoise ; 中国 Zhōngguó = la Chine.") }
        ]
      }
    ]
  };
})();
