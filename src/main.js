/* ╔══════════════════════════════════════════╗
   ║  i18n — 다국어 지원 시스템                ║
   ╚══════════════════════════════════════════╝ */
var LANG='ko';
const LANG_FLAG={ko:'🇰🇷 한국어',ja:'🇯🇵 日本語',en:'🇺🇸 English','zh-TW':'🇹🇼 繁體中文','zh-CN':'🇨🇳 简体中文',vi:'🇻🇳 Tiếng Việt'};

/* ── 한국어 읽기 (SH/BH) 다국어 ── */
const SH_I18N={ko:['갑','을','병','정','무','기','경','신','임','계'],ja:['甲','乙','丙','丁','戊','己','庚','辛','壬','癸'],en:['Jia','Yi','Bing','Ding','Wu','Ji','Geng','Xin','Ren','Gui'],'zh-TW':['甲','乙','丙','丁','戊','己','庚','辛','壬','癸'],'zh-CN':['甲','乙','丙','丁','戊','己','庚','辛','壬','癸'],vi:['Giáp','Ất','Bính','Đinh','Mậu','Kỷ','Canh','Tân','Nhâm','Quý']};
const BH_I18N={ko:['자','축','인','묘','진','사','오','미','신','유','술','해'],ja:['子','丑','寅','卯','辰','巳','午','未','申','酉','戌','亥'],en:['Zi','Chou','Yin','Mao','Chen','Si','Wu','Wei','Shen','You','Xu','Hai'],'zh-TW':['子','丑','寅','卯','辰','巳','午','未','申','酉','戌','亥'],'zh-CN':['子','丑','寅','卯','辰','巳','午','未','申','酉','戌','亥'],vi:['Tý','Sửu','Dần','Mão','Thìn','Tỵ','Ngọ','Mùi','Thân','Dậu','Tuất','Hợi']};

const I={
ko:{
  // 입력
  title:'생일MBTI',heroH:'내 생일에 숨겨진<br><em>타고난 나</em>를 찾아볼까?',
  heroP:'환경이 만든 MBTI 말고,<br>태어날 때부터 정해진 <strong style="color:var(--lav)">나만의 기질</strong>을 읽어줄게 🌙',
  infoTitle:'🌙 생일MBTI가 뭔가요?',
  infoP1:'혹시 MBTI 검사할 때마다 결과가 달라진 적 있어?<br>그건 <strong style="color:var(--lav)">환경과 기분</strong>에 따라 달라지는 게 당연하거든.',
  infoP2:'생일MBTI는 달라. 태어난 날의 <strong style="color:var(--lav)">사주 원국</strong>에 담긴 타고난 기질을 MBTI로 표현한 거야. 환경이 아니라 <em style="font-style:normal;color:var(--rose)">내가 원래 가지고 태어난 성격의 뼈대</em>를 보여줘.',
  diffNormal:'일반 MBTI',diffBirth:'생일 MBTI',
  diffNormalT:'환경·경험·기분에 따라 바뀔 수 있어',diffBirthT:'태어난 날 정해진 타고난 기질 — 안 바뀌어!',
  diffNote:'💡 둘 다 진짜 나야. 타고난 뼈대 위에 환경이 살을 붙인 거지!',
  lblBirth:'🎂 생년월일 6자리',lblGender:'🌟 성별',
  btnM:'♂ 남자',btnF:'♀ 여자',
  qTitle:'🎲 냥별이의 순간 테스트!',qSub:'직감으로 골라봐! 안 골라도 분석엔 문제 없어 🐱',
  q1L:'Q1. 배달 온 치킨 한 마리! 이 순간 더 행복한 건?',
  q1aT:'친구들이랑 쪼개 먹는 그 왁자지껄',q1aH:'나눠 먹어야 맛있지!',
  q1bT:'혼자 한 마리 독점 + 넷플릭스',q1bH:'이것이 진정한 힐링이지...',
  q2L:'Q2. 길 가다가 수상한 자판기 발견! 뭐가 나올지 모름 👀',
  q2aT:'일단 동전 넣는다. 인생은 모험이니까!',q2aH:'뭐가 나오든 재밌을 듯',
  q2bT:'뒤에 써있는 설명부터 읽어본다',q2bH:'정체를 알아야 마음이 편함',
  q3L:'Q3. 친구가 새로 산 옷 보여주며 "어때?" 근데 솔직히 좀…🫠',
  q3aT:'"음… 솔직히 저번 스타일이 더 찰떡이었어"',q3aH:'솔직한 게 진짜 친구 아닌가',
  q3bT:'"오 이거 좋다! 어디서 샀어?"',q3bH:'기분 먼저 챙겨주고 싶음',
  q4L:'Q4. 최애 아이돌 콘서트 티켓팅 D-30! 🎤',
  q4aT:'알림 세팅 완료. 좌석 배치도 이미 외움',q4aH:'만반의 준비가 곧 성공',
  q4bT:'"그날 되면 어떻게든 되겠지~"',q4bH:'복은 걱정 안 하는 자에게 온다',
  err:'⚠️ 생년월일 6자리와 성별을 입력해 주세요',
  btnStart:'냥별이의 에너지 분석 시작 🔮',
  footP:'사주 원국에 담긴 타고난 기질 × MBTI 표현<br>환경이 만든 내가 아닌, <strong style="color:var(--g2)">태어날 때부터의 나</strong>를 만나봐 🌸',
  copyright:'© 2026.03 Released. solong97@gmail.com. All rights reserved. Unauthorized Use Prohibited.',
  // 로딩
  ldTitle:'냥별이가 분석 중이다냥 ✨',ld1:'🪐 사주 패턴 계산 중',ld2:'🔮 월주 십성 분석 중',ld3:'✨ 일주 기질 매칭 중',
  // 결과
  share:'🔗 공유',shareApp:'🔗 친구에게 앱 공유',shareText:'생일MBTI로 내 타고난 MBTI 알아봤어! 너도 해봐 🌙✨',saveImg:'📷 이미지 저장',imgSaved:'이미지 저장 완료 📷',
  pcTitle:'📷 퍼스널 포토카드',pcSub:'SNS 인증샷용 감성 카드 ✨',pcNick:'영문 닉네임',pcNickPh:'e.g. LUNA · STAR · MISO',pcMsg:'감성 메시지',pcMsgLimit:'20자 이내',pcMsgPh:'e.g. Born to shine ✨',pcDate:'날짜',pcColor:'퍼스널 컬러',pcElem:'{0} 기운 퍼스널컬러',pcCancel:'취소',pcGen:'✨ 카드 생성 + 링크 복사',pcGenerating:'생성 중...',pcToast:'📷 카드 저장 + 🔗 링크 복사 완료!',
  tagBorn:'🌙 타고난 기질',tagPre:'🌙 태어날 때부터 품고 온 기질 — ',
  sipBadge:'월주 십성',sipRank:'MBTI 산출 1순위',sipWhy:'💡 MBTI 영향: ',
  flowDw:'🌊 지금 내 흐름',flowSw:'☀️ {0} 올해 에너지',flowSwSub:'{0}년 {1}년',
  swStemL:'{0}',swBranchL:'{1}',
  secIlju:'내 일주 기질',secIljuDiffNote:'💡 <strong style="color:var(--lav)">일반 MBTI와 다를 수 있어요!</strong><br>일반 MBTI는 환경·경험·기분에 따라 달라지지만, 생일MBTI는 태어난 날 사주 원국에 담긴 <strong>타고난 기질</strong>이에요. 환경이 입힌 옷이 아니라 내 성격의 뼈대를 보여줘요.',
  secIljuL:'60갑자 일주론',secStem:'천간',secBranch:'지지',
  secCorrNote:'🎲 냥별이 순간 테스트가 {0} 축 판별에 힌트를 줬어요',
  secMe:'나는 이런 사람',secMeSub:'핵심 성격 + 지금의 나',secBase:'기본 성격',secNow:'지금의 나',
  secMap:'성격 지도',secMapSub:'MBTI 4축 에너지 비중',
  secStr:'나의 강점',secStrSub:'일주 천간 기반 핵심 강점',
  secKw:'성격 키워드',secKwSub:'나를 표현하는 단어들',
  secCompat:'나랑 잘 맞는 유형',secCompatSub:'궁합 유형 분석',compatGood:'💚 잘 맞는 유형',compatCare:'🔥 주의가 필요한 유형',
  compatGoodR:'서로의 에너지를 완벽하게 채워주는 최강 드림팀! ✨',
  compatCareR:'다른 에너지가 만나 더 강해질 수 있어! 서로 이해하고 맞춰가면 최고의 케미가 탄생해 💪',
  secFig:'나와 비슷한 사람들',secFigSub:'에너지가 닮은 유명인',
  secCareer:'나에게 잘 맞는 일',secCareerSub:'AGI 시대를 위한 진로 가이드',
  secDist:'세상의 성격 지도',secDistSub:'16유형 분포',
  secSaju:'내 생일 에너지 코드',secSajuSub:'사주 원국 (년·월·일주)',
  sajuInfo:'내 생일의 글자들은 내가 태어난 순간의 우주 기운을 담고 있어요. 이 기운들이 서로 섞이며 당신만의 독특한 에너지 지도를 만든답니다! 🗺️',
  sajuNote:'태어난 해·달·날의 에너지 패턴 · 동양 역술 전통 기반',
  yrP:'년주',moP:'월주',dyP:'일주',
  secSynTitle:'✨ 생일 에너지 시너지',
  disc1:'🌙 생일MBTI는 태어난 날의 사주 원국에서 읽히는 <strong style="color:var(--g1)">타고난 기질</strong>을 MBTI로 표현한 거예요',
  disc2:'일반 MBTI와 다를 수 있어요 — 환경이 아닌 태어날 때부터의 나를 보여주거든요!',
  disc3:'이건 재미와 자기 탐색 목적이에요 🌟 운명은 정해진 게 아니에요!',
  btnAgain:'← 다시 분석하기',btnGunghap:'💑 궁합 보기',copied:'🔗 링크가 복사됐어요!',
  pwaTitle:'홈 화면에 추가하기',pwaSub:'앱처럼 빠르게 열어봐요!',pwaBtn:'추가',
  flAbout:'서비스 소개',flTerms:'이용약관',flPrivacy:'개인정보처리방침',flContact:'문의',
  settingsTitle:'⚙️ 설정',settingsApiDesc:'키를 입력하면 AI 분석이 추가돼요! 🌙 (Gemini 1.5 Flash)',settingsSave:'저장',settingsClose:'닫기',
  privacyNotice:'🔒 입력하신 생년월일·성별은 서버에 저장되지 않습니다. 모든 분석은 기기 내에서만 처리됩니다. AI 분석 기능 사용 시 Google Gemini API로 데이터가 전송됩니다.',
  segYY:'YY 년',segMM:'MM 월',segDD:'DD 일',
  exDesc1:'남 01.01.12',exDesc2:'여 03.02.15',exDesc3:'여 99.12.25',
  age:'세',male:'♂ 남성',female:'♀ 여성',
  // 십성 이름
  ss_비견:'독립 전사(비견)',ss_겁재:'도전하는 승부사(겁재)',ss_식신:'감성 크리에이터(식신)',ss_상관:'규칙을 깨는 천재(상관)',
  ss_편재:'만능 엔터테이너(편재)',ss_정재:'꾸준한 성장러(정재)',ss_편관:'카리스마 리더(편관)',ss_정관:'원칙의 수호자(정관)',
  ss_편인:'신비로운 탐구자(편인)',ss_정인:'지혜로운 감싸안기(정인)',
  // 결과 텍스트 템플릿 ({0}~{9} = 동적 변수)
  stemMeta:['큰 나무','유연한 풀','태양','촛불','큰 산','부드러운 땅','단단한 쇠','빛나는 보석','넓은 강','고요한 빗물'],
  elemMeta:{'木':'나무의 성장','火':'불의 열정','土':'대지의 안정','金':'쇠의 단단함','水':'물의 흐름'},
  rDimTpl:'{mg}의 {dir} 에너지 + {stem} 기질의 {ilju} 일주 + {dom} 에너지의 결합',
  rDimOut:'외향적',rDimIn:'내향적',
  rStory:'{desc} {mg} 에너지가 더해져, {title}의 기질로 세상과 만나고 있어. 지금 {age}세, 가장 빛나는 시간을 보내고 있어 ✨',
  rDesc1:'{title}의 기질을 타고났어. {desc} 여기에 {mg} 에너지가 더해지고, {dom} 기운이 행동 무기로 작용해 독특한 매력을 만들어.',
  rDesc2:'지금 {stem} 같은 흐름 속에서 {elemM} 에너지가 활성화되고 있어. {nowYear}년 {swHan}의 에너지와 만나 새로운 변화의 기회가 찾아오고 있어.',
  rDw:'현재 {stem} 같은 흐름이 {myStem} 기질의 너를 새로운 방향으로 이끌어주고 있어. ',rDwLate:'후반부에 접어들면서 결실을 맺을 시기야.',rDwEarly:'아직 초반이라 씨앗을 뿌리는 시기야.',
  rSw:'{nowYear}년은 {swHan}의 에너지가 가득한 해야. {stem} 기질의 너에게 이 에너지는 ',
  rSwFire:'같은 불의 기운으로 더욱 강력하게 작용해.',rSwWater:'물과 불이 만나 균형을 맞추는 흥미로운 해가 될 거야.',rSwOther:'새로운 자극과 변화를 가져와 줄 거야.',
  rSeasonSkew:{'木':'🌡️ 봄 에너지가 매우 강해서 성장과 확장의 기운이 넘쳐.','火':'🌡️ 여름 에너지가 매우 강해서 열정과 표현의 기운이 뜨거워.','土':'🌡️ 환절기 에너지가 강해서 안정과 중심을 잡는 힘이 있어.','金':'🌡️ 가을 에너지가 강해서 정리와 결단의 기운이 날카로워.','水':'🌡️ 겨울 에너지가 강해서 지혜와 직관의 깊이가 남달라.'},
  rNoGwan:'🕊️ 통제 에너지가 없어서 자유롭고 감성적인 면이 더 강해. ',rNoSik:'🔒 표현 에너지가 적어서 내면에서 논리와 체계로 힘을 발휘해. ',
  rCharJoin:' + ',rCharSuffix:' 에너지로 세상과 만나는 사람',
  structTitle:'🧬 MBTI 산출 구조',structIlju:'일주 (타고난 본질)',structMonth:'월지 격국 (환경)',structDom:'최강 에너지 (행동 무기)',
  disc4:'이 결과는 자기 이해를 위한 참고 자료이며, 과학적 진단이 아닙니다. 운명은 정해져 있지 않으며, 모든 선택은 여러분의 것입니다.',
},
ja:{
  title:'誕生日MBTI',heroH:'誕生日に隠された<br><em>本当の自分</em>を見つけよう',
  heroP:'環境が作ったMBTIではなく、<br>生まれた日から決まっている<strong style="color:var(--lav)">あなたの気質</strong>を読み取るよ 🌙',
  infoTitle:'🌙 誕生日MBTIって何？',
  infoP1:'MBTI検査で毎回結果が変わったことない？<br>それは<strong style="color:var(--lav)">環境や気分</strong>で変わるのが当然だから。',
  infoP2:'誕生日MBTIは違うよ。生まれた日の<strong style="color:var(--lav)">四柱命式</strong>に刻まれた生まれつきの気質をMBTIで表現したもの。環境ではなく、<em style="font-style:normal;color:var(--rose)">本来持って生まれた性格の骨格</em>を見せてくれるよ。',
  diffNormal:'一般MBTI',diffBirth:'誕生日MBTI',
  diffNormalT:'環境・経験・気分で変わることがある',diffBirthT:'生まれた日に決まった気質 — 変わらない！',
  diffNote:'💡 どちらも本当の自分。生まれつきの骨格の上に環境が肉付けしたんだよ！',
  lblBirth:'🎂 生年月日6桁',lblGender:'🌟 性別',
  btnM:'♂ 男性',btnF:'♀ 女性',
  qTitle:'🎲 にゃんぼしの瞬間テスト！',qSub:'直感で選んでね！選ばなくても分析OK 🐱',
  q1L:'Q1. デリバリーチキン1羽到着！嬉しいのは？',
  q1aT:'友達とワイワイ食べる！',q1aH:'分けて食べるのが最高！',
  q1bT:'一人で独り占め＋Netflix',q1bH:'これこそ本当の癒し...',
  q2L:'Q2. 怪しい自販機を発見！何が出るか不明 👀',
  q2aT:'とりあえずコイン入れる！人生は冒険！',q2aH:'何が出ても楽しそう',
  q2bT:'裏の説明をまず読む',q2bH:'正体を知らないと落ち着かない',
  q3L:'Q3. 友達の新しい服「どう？」…正直微妙 🫠',
  q3aT:'「うーん…前のスタイルの方が似合ってたかも」',q3aH:'正直に言うのが本当の友達',
  q3bT:'「いいね！どこで買ったの？」',q3bH:'まず気持ちを大切にしたい',
  q4L:'Q4. 推しのコンサートチケット発売D-30！🎤',
  q4aT:'アラーム設定完了。座席配置も暗記済み',q4aH:'万全の準備が成功の鍵',
  q4bT:'「その日になったらなんとかなるでしょ〜」',q4bH:'心配しない人に福が来る',
  err:'⚠️ 生年月日6桁と性別を入力してください',
  btnStart:'にゃんぼしのエネルギー分析開始 🔮',
  footP:'生まれた日に刻まれた「素の自分」× MBTI<br>環境に染まる前の、<strong style="color:var(--g2)">ずっとそこにいた本当の私</strong>に会いに行こう 🌸',
  ldTitle:'にゃんぼしが分析中だにゃん ✨',ld1:'🪐 四柱パターン計算中',ld2:'🔮 月柱十神分析中',ld3:'✨ 日柱気質マッチング中',
  share:'🔗 共有',shareApp:'🔗 友達にシェア',shareText:'誕生日MBTIで生まれながらの自分がわかった！当たりすぎてちょっと怖い…👁️ あなたも試してみて ✨ #誕生日MBTI #MBTI診断',saveImg:'📷 画像を保存',imgSaved:'画像を保存しました 📷',
  pcTitle:'📷 パーソナルフォトカード',pcSub:'SNSシェア用の感性カード ✨',pcNick:'英語ニックネーム',pcNickPh:'e.g. LUNA · STAR · MISO',pcMsg:'感性メッセージ',pcMsgLimit:'20文字以内',pcMsgPh:'e.g. Born to shine ✨',pcDate:'日付',pcColor:'パーソナルカラー',pcElem:'{0} エネルギーカラー',pcCancel:'キャンセル',pcGen:'✨ カード生成 + リンクコピー',pcGenerating:'生成中...',pcToast:'📷 カード保存 + 🔗 リンクコピー完了！',
  tagBorn:'🌙 生まれつきの気質',tagPre:'🌙 生まれた時から持っている気質 — ',
  sipBadge:'月柱十神',sipRank:'MBTI算出第1優先',sipWhy:'💡 MBTIへの影響: ',
  flowDw:'🌊 今の流れ',flowSw:'☀️ 2026年のエネルギー',flowSwSub:'丙午年',
  swStemL:'丙(火)',swBranchL:'午(馬)',
  secIlju:'私の日柱気質',secIljuDiffNote:'💡 <strong style="color:var(--lav)">一般MBTIと異なる場合があります！</strong><br>一般MBTIは環境で変わりますが、誕生日MBTIは四柱命式に刻まれた<strong>生まれつきの気質</strong>です。',
  secIljuL:'六十甲子日柱論',secStem:'天干',secBranch:'地支',
  secCorrNote:'🎲 にゃんぼし瞬間テストが {0} 軸の判定にヒントを与えました',
  secMe:'私はこんな人',secMeSub:'核心性格＋今の私',secBase:'基本性格',secNow:'今の私',
  secMap:'性格マップ',secMapSub:'MBTI 4軸分析',
  secStr:'私の強み',secStrSub:'日柱天干ベース核心強み',
  secKw:'性格キーワード',secKwSub:'私を表す言葉',
  secCompat:'相性タイプ',secCompatSub:'相性分析',compatGood:'💚 ドリームチーム',compatCare:'🔥 成長コンビ',
  compatGoodR:'お互いのエネルギーを完璧に補い合う最強のパートナー！ ✨',
  compatCareR:'違うエネルギーだからこそ最高のケミが生まれる！理解し合えば最強コンビになれるよ 💪',
  secFig:'あなたに似た有名人',secFigSub:'エネルギーが似ている人',
  secCareer:'あなたに向いている仕事',secCareerSub:'AGI時代のキャリアガイド',
  secSynTitle:'✨ 誕生日エネルギーシナジー',
  secDist:'世界の性格マップ',secDistSub:'16タイプ分布',
  secSaju:'誕生日エネルギーコード',secSajuSub:'四柱命式（年・月・日柱）',
  sajuInfo:'誕生日の漢字には、あなたが生まれた瞬間の宇宙のエネルギーが込められています。これらの気が混ざり合い、あなただけの特別なエネルギーマップを作ります！ 🗺️',
  sajuNote:'生まれた年・月・日のエネルギーパターン（東洋占術伝統）',
  yrP:'年柱',moP:'月柱',dyP:'日柱',
  disc1:'🌙 誕生日MBTIは四柱命式から読み取った<strong style="color:var(--g1)">生まれつきの気質</strong>をMBTIで表現したものです',
  disc2:'一般MBTIと異なる場合があります — 環境ではなく生まれた時からの自分を見せます！',
  disc3:'これはエンターテイメントと自己探索の目的です 🌟 運命は決まっていません！',
  btnAgain:'← もう一度分析する',btnGunghap:'💑 相性を見る',copied:'🔗 リンクがコピーされました！',
  pwaTitle:'ホーム画面に追加する',pwaSub:'アプリみたいにすぐ開ける！',pwaBtn:'追加',
  flAbout:'サービス紹介',flTerms:'利用規約',flPrivacy:'プライバシーポリシー',flContact:'お問い合わせ',
  settingsTitle:'⚙️ 設定',settingsApiDesc:'キーを入力するとAI分析が追加されます！🌙 (Gemini 1.5 Flash)',settingsSave:'保存',settingsClose:'閉じる',
  privacyNotice:'🔒 入力した生年月日・性別はサーバーに保存されません。すべての分析はデバイス内でのみ処理されます。AI分析機能使用時はGoogle Gemini APIにデータが送信されます。',
  segYY:'YY 年',segMM:'MM 月',segDD:'DD 日',
  exDesc1:'男 01.01.12',exDesc2:'女 03.02.15',exDesc3:'女 99.12.25',
  age:'歳',male:'♂ 男性',female:'♀ 女性',
  ss_비견:'独立戦士',ss_겁재:'挑戦する勝負師',ss_식신:'感性クリエイター',ss_상관:'ルールを破る天才',
  ss_편재:'万能エンターテイナー',ss_정재:'着実な成長者',ss_편관:'カリスマリーダー',ss_정관:'原則の守護者',
  ss_편인:'神秘的な探究者',ss_정인:'知恵深い包容者',
  stemMeta:['大きな木','しなやかな草','太陽','ろうそく','大きな山','やわらかい大地','硬い鉄','輝く宝石','広い川','静かな雨'],
  elemMeta:{'木':'木の成長','火':'火の情熱','土':'大地の安定','金':'鉄の強さ','水':'水の流れ'},
  rDimTpl:'① {mg}({mgT})の{dir}エネルギー(50%) + ② {stem}の気質を持つ{ilju}日柱(30%) + ③ {dom}エネルギー(20%)が合わさって形成されたよ。',
  rDimOut:'外に広がる',rDimIn:'内に集める',
  rStory:'{desc} {mg}のエネルギーが加わり、{title}の気質で世界と出会っているよ。今{age}歳、最も輝く時間を過ごしているよ ✨',
  rDesc1:'{title}の気質を持って生まれたよ。{desc} さらに{mg}({mgT})のエネルギーが加わり、{dom}({domT})の力が行動の武器として働いて、ユニークな魅力を作っているよ。',
  rDesc2:'今は{stem}のような流れの中で{elemM}のエネルギーが活性化しているよ。2026年の燃える太陽と走る馬のエネルギーと出会い、新しい変化のチャンスが訪れているよ。',
  rDw:'現在{stem}のような流れが{myStem}の気質のあなたを新しい方向に導いているよ。',rDwLate:'後半に入り、実りを迎える時期だよ。',rDwEarly:'まだ序盤で、種をまく時期だよ。',
  rSw:'2026年は燃える太陽＋走る馬のエネルギーが満ちた年だよ。{stem}の気質のあなたにこのエネルギーは',
  rSwFire:'同じ火の力でさらに強力に作用するよ。',rSwWater:'水と火が出会いバランスを取る面白い年になるよ。',rSwOther:'新しい刺激と変化をもたらしてくれるよ。',
  rSeasonSkew:{'木':'🌡️ 春のエネルギーがとても強く、成長と拡大の気運に溢れている。','火':'🌡️ 夏のエネルギーがとても強く、情熱と表現の気運が熱い。','土':'🌡️ 季節の変わり目のエネルギーが強く、安定と軸を保つ力がある。','金':'🌡️ 秋のエネルギーが強く、整理と決断の気運が鋭い。','水':'🌡️ 冬のエネルギーが強く、知恵と直感の深さが格別。'},
  rNoGwan:'🕊️ コントロールのエネルギーがないため、自由で感性的な面がより強い。',rNoSik:'🔒 表現のエネルギーが少ないため、内面で論理と体系の力を発揮する。',
  rCharJoin:' + ',rCharSuffix:'のエネルギーで世界と出会う人',
  structTitle:'🧬 MBTI算出ロジック',structIlju:'日柱（生まれつきの本質）',structMonth:'月柱格局（環境）',structDom:'最強エネルギー（行動の武器）',
  disc4:'この結果は自己理解のための参考資料であり、科学的な診断ではありません。運命は決まっておらず、すべての選択はあなた自身のものです。楽しみながら自分をもっと知るきっかけにしてね。',
},
en:{
  title:'Birth MBTI',heroH:'Discover the<br><em>Real You</em> Hidden in Your Birthday',
  heroP:'Not the MBTI shaped by environment, but<br>your <strong style="color:var(--lav)">innate temperament</strong> written in the stars 🌙',
  infoTitle:'🌙 What is Birth MBTI?',
  infoP1:'Ever gotten different MBTI results each time?<br>That\'s because <strong style="color:var(--lav)">environment and mood</strong> naturally affect the outcome.',
  infoP2:'Birth MBTI is different. It reads the innate temperament encoded in your <strong style="color:var(--lav)">Four Pillars birth chart</strong> and expresses it as MBTI. Not the mask shaped by environment, but <em style="font-style:normal;color:var(--rose)">the core personality you were born with</em>.',
  diffNormal:'Regular MBTI',diffBirth:'Birth MBTI',
  diffNormalT:'Can change based on environment, experience & mood',diffBirthT:'Innate temperament set at birth — stays the same!',
  diffNote:'💡 Both are the real you. Born framework + environment-added layers!',
  lblBirth:'🎂 Birth Date (6 digits: YYMMDD)',lblGender:'🌟 Gender',
  btnM:'♂ Male',btnF:'♀ Female',
  qTitle:'🎲 Quick Vibe Check by Nyangbyeol!',qSub:'Go with your gut! Skipping is totally fine 🐱',
  q1L:'Q1. A whole fried chicken just arrived! What makes you happier?',
  q1aT:'Sharing it with friends, loud & fun!',q1aH:'Food tastes better together!',
  q1bT:'All mine + Netflix binge solo',q1bH:'This is true healing...',
  q2L:'Q2. You spot a mysterious vending machine! No idea what comes out 👀',
  q2aT:'Insert coins immediately. Life is an adventure!',q2aH:'Whatever comes out will be fun',
  q2bT:'Read the instructions on the back first',q2bH:'Need to know before I commit',
  q3L:'Q3. Friend shows new outfit: "How is it?" …honestly, not great 🫠',
  q3aT:'"Hmm, your last style suited you better honestly"',q3aH:'Honesty is true friendship',
  q3bT:'"Oh nice! Where did you get it?"',q3bH:'Their feelings come first',
  q4L:'Q4. Fave idol\'s concert tickets go on sale in 30 days! 🎤',
  q4aT:'Alarms set. Seat map memorized already',q4aH:'Preparation is the key to success',
  q4bT:'"I\'ll figure it out when the day comes~"',q4bH:'Fortune favors the carefree',
  err:'⚠️ Please enter 6-digit birth date and gender',
  btnStart:'Start Nyangbyeol\'s Energy Reading 🔮',
  footP:'your birth chart × MBTI — forget who life made you,<br>meet <strong style="color:var(--g2)">the you that was always there from the start</strong> 🌸',
  ldTitle:'Nyangbyeol is analyzing meow ✨',ld1:'🪐 Calculating birth patterns',ld2:'🔮 Analyzing month pillar energy',ld3:'✨ Matching day pillar temperament',
  share:'🔗 Share',shareApp:'🔗 Share this app',shareText:'i took a birth chart MBTI test and it\'s actually scary accurate 😭 you have to try this 🌙✨ #BirthMBTI',saveImg:'📷 Save Image',imgSaved:'Image saved! 📷',
  pcTitle:'📷 Personal Photo Card',pcSub:'Create your vibe card for SNS ✨',pcNick:'Your Nickname',pcNickPh:'e.g. LUNA · STAR · MISO',pcMsg:'Vibe Message',pcMsgLimit:'max 20 chars',pcMsgPh:'e.g. Born to shine ✨',pcDate:'Date',pcColor:'Personal Color',pcElem:'{0} Energy Color',pcCancel:'Cancel',pcGen:'✨ Create Card + Copy Link',pcGenerating:'Creating...',pcToast:'📷 Card saved + 🔗 Link copied!',
  tagBorn:'🌙 Innate Type',tagPre:'🌙 The temperament you were born with — ',
  sipBadge:'Month Pillar Star',sipRank:'MBTI Factor #1',sipWhy:'💡 MBTI Impact: ',
  flowDw:'🌊 Current Life Phase',flowSw:'☀️ 2026 Energy',flowSwSub:'Fire-Horse Year',
  swStemL:'Bing (Fire)',swBranchL:'Wu (Horse)',
  secIlju:'My Day Pillar Temperament',secIljuDiffNote:'💡 <strong style="color:var(--lav)">May differ from regular MBTI!</strong><br>Regular MBTI changes with environment, but Birth MBTI shows your <strong>innate temperament</strong> from your birth chart.',
  secIljuL:'60 Jiazi Day Pillar Theory',secStem:'Heavenly Stem',secBranch:'Earthly Branch',
  secCorrNote:'🎲 Vibe check helped determine the {0} axis',
  secMe:'Who I Am',secMeSub:'Core personality + Current self',secBase:'Core Personality',secNow:'Current Self',
  secMap:'Personality Map',secMapSub:'MBTI 4-Axis Analysis',
  secStr:'My Strengths',secStrSub:'Day stem-based core strengths',
  secKw:'Personality Keywords',secKwSub:'Words that describe me',
  secCompat:'Compatible Types',secCompatSub:'Compatibility analysis',compatGood:'💚 Dream Team',compatCare:'🔥 Growth Duo',
  compatGoodR:'Your energies perfectly complement each other — the ultimate power team! ✨',
  compatCareR:'Different energies create exciting chemistry — understanding each other makes you both unstoppable! 💪',
  secFig:'People Like You',secFigSub:'Famous souls with similar energy',
  secCareer:'Best Career Fits',secCareerSub:'Your guide to thriving in the AGI era',
  secSynTitle:'✨ Birthday Energy Synergy',
  secDist:'World Personality Map',secDistSub:'16-type distribution',
  secSaju:'Birth Energy Code',secSajuSub:'Four Pillars (Year·Month·Day)',
  sajuInfo:'The characters of your birthday capture the cosmic energy of the moment you were born. These energies blend to create your own unique energy map! 🗺️',
  sajuNote:'Energy patterns of birth year, month & day · Eastern tradition',
  yrP:'Year',moP:'Month',dyP:'Day',
  disc1:'🌙 Birth MBTI expresses your <strong style="color:var(--g1)">innate temperament</strong> from your Four Pillars birth chart as MBTI',
  disc2:'It may differ from regular MBTI — it shows the you from birth, not from environment!',
  disc3:'This is for fun and self-discovery 🌟 Destiny is not fixed!',
  btnAgain:'← Analyze Again',btnGunghap:'💑 Check Compatibility',copied:'🔗 Link copied!',
  pwaTitle:'Add to Home Screen',pwaSub:'Open it like an app, instantly!',pwaBtn:'Add',
  flAbout:'About',flTerms:'Terms of Service',flPrivacy:'Privacy Policy',flContact:'Contact',
  settingsTitle:'⚙️ Settings',settingsApiDesc:'Enter your key to enable AI analysis! 🌙 (Gemini 1.5 Flash)',settingsSave:'Save',settingsClose:'Close',
  privacyNotice:'🔒 Your date of birth and gender are never stored on any server. All analysis runs locally on your device. If you use the AI feature, data is sent to Google Gemini API.',
  segYY:'YY',segMM:'MM',segDD:'DD',
  exDesc1:'M 01.01.12',exDesc2:'F 03.02.15',exDesc3:'F 99.12.25',
  age:'yrs',male:'♂ Male',female:'♀ Female',
  ss_비견:'Independent Warrior',ss_겁재:'Bold Challenger',ss_식신:'Sensory Creator',ss_상관:'Rule-Breaking Genius',
  ss_편재:'Versatile Entertainer',ss_정재:'Steady Grower',ss_편관:'Charismatic Leader',ss_정관:'Guardian of Principles',
  ss_편인:'Mystical Explorer',ss_정인:'Wise Embracer',
  stemMeta:['tall tree','flexible vine','bright sun','gentle candle','great mountain','soft earth','solid iron','shining gem','wide river','quiet rain'],
  elemMeta:{'木':'growth of wood','火':'passion of fire','土':'stability of earth','金':'strength of metal','水':'flow of water'},
  rDimTpl:'① {mg} ({mgT}) {dir} energy (50%) + ② {stem}-natured {ilju} day pillar (30%) + ③ {dom} energy (20%) combined to shape this.',
  rDimOut:'outward-expanding',rDimIn:'inward-gathering',
  rStory:'{desc} With {mg} energy added, you meet the world as a {title}. At {age}, you\'re in one of your most radiant chapters ✨',
  rDesc1:'You were born with the temperament of a {title}. {desc} The energy of {mg} ({mgT}) layers on top, and {dom} ({domT}) acts as your action superpower, creating a uniquely charming personality.',
  rDesc2:'Right now, a {stem}-like current is activating {elemM} energy around you. In 2026, the blazing sun and galloping horse energy brings fresh winds of change and opportunity.',
  rDw:'The current {stem}-like flow is guiding your {myStem} temperament toward new horizons. ',rDwLate:'You\'re in the second half — time to harvest results.',rDwEarly:'Still early — time to plant seeds for the future.',
  rSw:'2026 is a year brimming with blazing sun + galloping horse energy. For your {stem} temperament, this energy ',
  rSwFire:'amplifies your natural fire — expect powerful momentum.',rSwWater:'creates an intriguing balance of water and fire.',rSwOther:'brings fresh stimulation and exciting change.',
  rSeasonSkew:{'木':'🌡️ Your spring energy is very strong — growth and expansion vibes are overflowing.','火':'🌡️ Your summer energy is intense — passion and expression are on fire.','土':'🌡️ Your transitional energy is strong — stability and centering power is your anchor.','金':'🌡️ Your autumn energy is sharp — clarity and decisive action come naturally.','水':'🌡️ Your winter energy runs deep — wisdom and intuition are exceptionally strong.'},
  rNoGwan:'🕊️ Without controlling energy, your free-spirited and emotional side shines even brighter. ',rNoSik:'🔒 With less expressive energy, your inner logic and systematic thinking become your power. ',
  rCharJoin:' + ',rCharSuffix:' energy meeting the world',
  structTitle:'🧬 MBTI Calculation',structIlju:'Day Pillar (Innate Core)',structMonth:'Month Energy (Environment)',structDom:'Strongest Energy (Action Style)',
  disc4:'This is a reference tool for self-understanding, not a scientific diagnosis. Your destiny is not fixed — every choice is yours. Use this as a fun way to learn a bit more about yourself!',
},
'zh-TW':{
  title:'生日MBTI',heroH:'發現生日裡隱藏的<br><em>真正的你</em>',
  heroP:'不是環境塑造的MBTI，<br>而是出生那天就註定的<strong style="color:var(--lav)">你的天生氣質</strong> 🌙',
  infoTitle:'🌙 什麼是生日MBTI？',
  infoP1:'你是否每次MBTI測試結果都不同？<br>那是因為<strong style="color:var(--lav)">環境和心情</strong>自然會影響結果。',
  infoP2:'生日MBTI不同。它讀取的是你<strong style="color:var(--lav)">四柱命盤</strong>中的先天氣質，並以MBTI表達。不是環境給的外衣，而是<em style="font-style:normal;color:var(--rose)">你與生俱來的性格骨架</em>。',
  diffNormal:'一般MBTI',diffBirth:'生日MBTI',
  diffNormalT:'會隨環境、經驗和心情改變',diffBirthT:'出生那天就決定的氣質 — 不會變！',
  diffNote:'💡 兩個都是真正的你。天生骨架 + 環境長出的血肉！',
  lblBirth:'🎂 出生日期6位數',lblGender:'🌟 性別',
  btnM:'♂ 男',btnF:'♀ 女',
  qTitle:'🎲 喵星的直覺測試！',qSub:'憑直覺選吧！不選也能分析 🐱',
  q1L:'Q1. 外送炸雞到了！什麼更開心？',
  q1aT:'跟朋友一起吃的熱鬧感！',q1aH:'分享才好吃！',
  q1bT:'自己獨享 + Netflix',q1bH:'這才是真正的療癒...',
  q2L:'Q2. 路邊發現神秘販賣機！不知道會出什麼 👀',
  q2aT:'先投幣再說！人生就是冒險！',q2aH:'出什麼都會很好玩',
  q2bT:'先看看後面的說明',q2bH:'不知道是什麼會不安',
  q3L:'Q3. 朋友穿新衣問「好看嗎？」…老實說有點 🫠',
  q3aT:'「嗯…上次那套比較適合你耶」',q3aH:'誠實才是真朋友',
  q3bT:'「不錯耶！在哪買的？」',q3bH:'先照顧對方的心情',
  q4L:'Q4. 最愛偶像演唱會搶票倒數30天！🎤',
  q4aT:'鬧鐘設好了，座位圖已經背好',q4aH:'充分準備才能成功',
  q4bT:'「到時候再說吧～」',q4bH:'好運屬於不擔心的人',
  err:'⚠️ 請輸入6位出生日期和性別',
  btnStart:'喵星的能量分析開始 🔮',
  footP:'四柱命盤×MBTI — 看的不是後天的你，<br>而是<strong style="color:var(--g2)">那個從出生就一直在的你</strong> 🌸',
  ldTitle:'喵星正在分析喵 ✨',ld1:'🪐 計算四柱',ld2:'🔮 分析月柱十神',ld3:'✨ 匹配日柱氣質',
  share:'🔗 分享',shareApp:'🔗 分享給朋友',shareText:'用生日算出天生MBTI超準啦！看到結果當場愣住😳 快來測測你的 🌙✨ #生日MBTI #MBTI測驗',saveImg:'📷 儲存圖片',imgSaved:'圖片已儲存 📷',
  pcTitle:'📷 個人照片卡',pcSub:'為SNS分享創建感性卡片 ✨',pcNick:'英文暱稱',pcNickPh:'e.g. LUNA · STAR · MISO',pcMsg:'感性留言',pcMsgLimit:'20字以內',pcMsgPh:'e.g. Born to shine ✨',pcDate:'日期',pcColor:'個人色彩',pcElem:'{0} 能量色彩',pcCancel:'取消',pcGen:'✨ 生成卡片 + 複製連結',pcGenerating:'生成中...',pcToast:'📷 卡片已儲存 + 🔗 連結已複製！',
  tagBorn:'🌙 天生氣質',tagPre:'🌙 與生俱來的氣質 — ',
  sipBadge:'月柱十神',sipRank:'MBTI算出第1優先',sipWhy:'💡 MBTI影響：',
  flowDw:'🌊 目前的運勢',flowSw:'☀️ 2026年能量',flowSwSub:'丙午年',
  swStemL:'丙（火）',swBranchL:'午（馬）',
  secIlju:'我的日柱氣質',secIljuDiffNote:'💡 <strong style="color:var(--lav)">可能與一般MBTI不同！</strong><br>一般MBTI會隨環境改變，但生日MBTI是四柱命盤中的<strong>先天氣質</strong>。',
  secIljuL:'六十甲子日柱論',secStem:'天干',secBranch:'地支',
  secCorrNote:'🎲 直覺測試幫助判定了 {0} 軸',
  secMe:'我是這樣的人',secMeSub:'核心性格 + 現在的我',secBase:'基本性格',secNow:'現在的我',
  secMap:'性格地圖',secMapSub:'MBTI 4軸分析',
  secStr:'我的優勢',secStrSub:'日柱天干核心優勢',
  secKw:'性格關鍵字',secKwSub:'描述我的詞語',
  secCompat:'相合類型',secCompatSub:'相性分析',compatGood:'💚 夢幻搭檔',compatCare:'🔥 成長拍檔',
  compatGoodR:'彼此能量完美互補——最強力的夢幻團隊！ ✨',
  compatCareR:'不同能量碰撞出最精彩的火花！相互理解就能成為無敵組合 💪',
  secFig:'和你相似的名人',secFigSub:'能量相似的名人',
  secCareer:'最適合的工作',secCareerSub:'AGI時代職涯探索指南',
  secSynTitle:'✨ 生日能量協同效應',
  secDist:'世界性格地圖',secDistSub:'16類型分布',
  secSaju:'出生能量密碼',secSajuSub:'四柱命盤（年·月·日柱）',
  sajuInfo:'你的生日漢字捕捉了你出生那一刻的宇宙能量。這些能量交織在一起，創造了你獨特的能量圖譜！ 🗺️',
  sajuNote:'出生年、月、日的能量模式 · 東方命理傳統',
  yrP:'年柱',moP:'月柱',dyP:'日柱',
  disc1:'🌙 生日MBTI是將四柱命盤中的<strong style="color:var(--g1)">先天氣質</strong>以MBTI表達',
  disc2:'可能與一般MBTI不同 — 顯示的是從出生就有的你！',
  disc3:'這是為了趣味和自我探索 🌟 命運不是注定的！',
  btnAgain:'← 重新分析',btnGunghap:'💑 查看合盤',copied:'🔗 連結已複製！',
  pwaTitle:'加到主畫面',pwaSub:'像App一樣快速開啟！',pwaBtn:'加入',
  flAbout:'服務介紹',flTerms:'使用條款',flPrivacy:'隱私權政策',flContact:'聯絡我們',
  settingsTitle:'⚙️ 設定',settingsApiDesc:'輸入金鑰即可啟用AI分析！🌙 (Gemini 1.5 Flash)',settingsSave:'儲存',settingsClose:'關閉',
  privacyNotice:'🔒 您輸入的出生日期及性別不會儲存於任何伺服器。所有分析僅在您的裝置上進行。使用AI分析功能時，資料將傳送至Google Gemini API。',
  segYY:'YY 年',segMM:'MM 月',segDD:'DD 日',
  exDesc1:'男 01.01.12',exDesc2:'女 03.02.15',exDesc3:'女 99.12.25',
  age:'歲',male:'♂ 男',female:'♀ 女',
  ss_비견:'獨立戰士',ss_겁재:'挑戰勝負師',ss_식신:'感性創作者',ss_상관:'打破規則的天才',
  ss_편재:'萬能娛樂家',ss_정재:'穩健成長者',ss_편관:'魅力領袖',ss_정관:'原則守護者',
  ss_편인:'神秘探索者',ss_정인:'智慧包容者',
  stemMeta:['大樹','柔韌的藤蔓','太陽','燭光','大山','溫潤的土地','堅硬的鐵','閃亮的寶石','遼闊的河','寧靜的雨'],
  elemMeta:{'木':'木的生長','火':'火的熱情','土':'大地的穩定','金':'金屬的堅韌','水':'水的流動'},
  rDimTpl:'① {mg}({mgT})的{dir}能量(50%) + ② 具有{stem}氣質的{ilju}日柱(30%) + ③ {dom}能量(20%)融合而成。',
  rDimOut:'向外擴展的',rDimIn:'向內收斂的',
  rStory:'{desc} 加上{mg}的能量，以{title}的氣質與世界相遇。現在{age}歲，正在度過最閃耀的時光 ✨',
  rDesc1:'你天生擁有{title}的氣質。{desc} 再加上{mg}({mgT})的能量，以及{dom}({domT})作為行動武器，造就了獨特的魅力。',
  rDesc2:'現在在{stem}般的潮流中，{elemM}的能量正在被激活。2026年熾熱太陽與奔馬的能量交匯，為你帶來新的轉變機會。',
  rDw:'目前{stem}般的潮流正引導著具有{myStem}氣質的你走向新的方向。',rDwLate:'已進入後半段，正是收穫成果的時期。',rDwEarly:'還在起步階段，正是播種的時期。',
  rSw:'2026年充滿了熾熱太陽＋奔馬的能量。對於{stem}氣質的你，這股能量',
  rSwFire:'以同樣的火之力量更加強烈地發揮作用。',rSwWater:'讓水與火相遇，在平衡中創造驚喜。',rSwOther:'會帶來全新的刺激與變化。',
  rSeasonSkew:{'木':'🌡️ 春天的能量非常強大，成長與擴展的氣勢滿溢。','火':'🌡️ 夏天的能量非常強烈，熱情與表達的火焰正旺。','土':'🌡️ 轉換期的能量很強，穩定與重心的力量是你的錨。','金':'🌡️ 秋天的能量很銳利，整理與決斷的氣場特別鮮明。','水':'🌡️ 冬天的能量很深沉，智慧與直覺的深度格外出眾。'},
  rNoGwan:'🕊️ 沒有管控能量，自由感性的一面更加突出。',rNoSik:'🔒 表達能量較少，內在的邏輯與體系成為你的力量。',
  rCharJoin:' + ',rCharSuffix:'的能量與世界相遇的人',
  structTitle:'🧬 MBTI算出結構',structIlju:'日柱（天生本質）',structMonth:'月柱格局（環境）',structDom:'最強能量（行動武器）',
  disc4:'本結果僅供自我了解參考，並非科學診斷。命運並未註定，每個選擇都掌握在你手中。把它當作更了解自己的有趣工具吧！',
},
'zh-CN':{
  title:'生日MBTI',heroH:'发现生日里隐藏的<br><em>真正的你</em>',
  heroP:'不是环境塑造的MBTI，<br>而是出生那天就注定的<strong style="color:var(--lav)">你的天生气质</strong> 🌙',
  infoTitle:'🌙 什么是生日MBTI？',
  infoP1:'你是否每次MBTI测试结果都不同？<br>那是因为<strong style="color:var(--lav)">环境和心情</strong>自然会影响结果。',
  infoP2:'生日MBTI不同。它读取的是你<strong style="color:var(--lav)">四柱命盘</strong>中的先天气质，并以MBTI表达。不是环境给的外衣，而是<em style="font-style:normal;color:var(--rose)">你与生俱来的性格骨架</em>。',
  diffNormal:'一般MBTI',diffBirth:'生日MBTI',
  diffNormalT:'会随环境、经验和心情改变',diffBirthT:'出生那天就决定的气质 — 不会变！',
  diffNote:'💡 两个都是真正的你。天生骨架 + 环境长出的血肉！',
  lblBirth:'🎂 出生日期6位数',lblGender:'🌟 性别',
  btnM:'♂ 男',btnF:'♀ 女',
  qTitle:'🎲 喵星的直觉测试！',qSub:'凭直觉选吧！不选也能分析 🐱',
  q1L:'Q1. 外卖炸鸡到了！什么更开心？',
  q1aT:'跟朋友一起吃的热闹感！',q1aH:'分享才好吃！',
  q1bT:'自己独享 + Netflix',q1bH:'这才是真正的治愈...',
  q2L:'Q2. 路边发现神秘贩卖机！不知道会出什么 👀',
  q2aT:'先投币再说！人生就是冒险！',q2aH:'出什么都会很好玩',
  q2bT:'先看看后面的说明',q2bH:'不知道是什么会不安',
  q3L:'Q3. 朋友穿新衣问"好看吗？"…老实说有点 🫠',
  q3aT:'"嗯…上次那套比较适合你耶"',q3aH:'诚实才是真朋友',
  q3bT:'"不错耶！在哪买的？"',q3bH:'先照顾对方的心情',
  q4L:'Q4. 最爱偶像演唱会抢票倒数30天！🎤',
  q4aT:'闹钟设好了，座位图已经背好',q4aH:'充分准备才能成功',
  q4bT:'"到时候再说吧～"',q4bH:'好运属于不担心的人',
  err:'⚠️ 请输入6位出生日期和性别',
  btnStart:'喵星的能量分析开始 🔮',
  footP:'四柱命盘×MBTI — 不是后天造就的你，<br>而是<strong style="color:var(--g2)">那个从一出生就存在的你</strong> 🌸',
  ldTitle:'喵星正在分析喵 ✨',ld1:'🪐 计算四柱',ld2:'🔮 分析月柱十神',ld3:'✨ 匹配日柱气质',
  share:'🔗 分享',shareApp:'🔗 分享给朋友',shareText:'用生日测出了天生MBTI，准到让我震惊了😱 快来测测你的！🌙✨ #生日MBTI #MBTI测试',saveImg:'📷 保存图片',imgSaved:'图片已保存 📷',
  pcTitle:'📷 个人照片卡',pcSub:'为SNS分享创建感性卡片 ✨',pcNick:'英文昵称',pcNickPh:'e.g. LUNA · STAR · MISO',pcMsg:'感性留言',pcMsgLimit:'20字以内',pcMsgPh:'e.g. Born to shine ✨',pcDate:'日期',pcColor:'个人色彩',pcElem:'{0} 能量色彩',pcCancel:'取消',pcGen:'✨ 生成卡片 + 复制链接',pcGenerating:'生成中...',pcToast:'📷 卡片已保存 + 🔗 链接已复制！',
  tagBorn:'🌙 天生气质',tagPre:'🌙 与生俱来的气质 — ',
  sipBadge:'月柱十神',sipRank:'MBTI算出第1优先',sipWhy:'💡 MBTI影响：',
  flowDw:'🌊 目前的运势',flowSw:'☀️ 2026年能量',flowSwSub:'丙午年',
  swStemL:'丙（火）',swBranchL:'午（马）',
  secIlju:'我的日柱气质',secIljuDiffNote:'💡 <strong style="color:var(--lav)">可能与一般MBTI不同！</strong><br>一般MBTI会随环境改变，但生日MBTI是四柱命盘中的<strong>先天气质</strong>。',
  secIljuL:'六十甲子日柱论',secStem:'天干',secBranch:'地支',
  secCorrNote:'🎲 直觉测试帮助判定了 {0} 轴',
  secMe:'我是这样的人',secMeSub:'核心性格 + 现在的我',secBase:'基本性格',secNow:'现在的我',
  secMap:'性格地图',secMapSub:'MBTI 4轴分析',
  secStr:'我的优势',secStrSub:'日柱天干核心优势',
  secKw:'性格关键字',secKwSub:'描述我的词语',
  secCompat:'相合类型',secCompatSub:'相性分析',compatGood:'💚 梦幻搭档',compatCare:'🔥 成长拍档',
  compatGoodR:'彼此能量完美互补——最强力的梦幻团队！ ✨',
  compatCareR:'不同能量碰撞出最精彩的火花！相互理解就能成为无敌组合 💪',
  secFig:'和你相似的名人',secFigSub:'能量相似的名人',
  secCareer:'最适合的工作',secCareerSub:'AGI时代职涯探索指南',
  secDist:'世界性格地图',secDistSub:'16类型分布',
  secSaju:'出生能量密码',secSajuSub:'四柱命盘（年·月·日柱）',sajuNote:'出生年、月、日的能量模式 · 东方命理传统',
  yrP:'年柱',moP:'月柱',dyP:'日柱',
  sajuInfo:'你生日的汉字捕捉了你出生那一刻的宇宙能量。这些能量交织在一起，创造了你独特的能量图谱！ 🗺️',
  secSynTitle:'✨ 生日能量协同效应',
  disc1:'🌙 生日MBTI是将四柱命盘中的<strong style="color:var(--g1)">先天气质</strong>以MBTI表达',
  disc2:'可能与一般MBTI不同 — 显示的是从出生就有的你！',
  disc3:'这是为了趣味和自我探索 🌟 命运不是注定的！',
  btnAgain:'← 重新分析',btnGunghap:'💑 查看合盘',copied:'🔗 链接已复制！',
  pwaTitle:'添加到主屏幕',pwaSub:'像App一样快速打开！',pwaBtn:'添加',
  flAbout:'服务介绍',flTerms:'使用条款',flPrivacy:'隐私政策',flContact:'联系我们',
  settingsTitle:'⚙️ 设置',settingsApiDesc:'输入密钥即可启用AI分析！🌙 (Gemini 1.5 Flash)',settingsSave:'保存',settingsClose:'关闭',
  privacyNotice:'🔒 您输入的出生日期及性别不会存储于任何服务器。所有分析仅在您的设备上进行。使用AI分析功能时，数据将发送至Google Gemini API。',
  segYY:'YY 年',segMM:'MM 月',segDD:'DD 日',
  exDesc1:'男 01.01.12',exDesc2:'女 03.02.15',exDesc3:'女 99.12.25',
  age:'岁',male:'♂ 男',female:'♀ 女',
  ss_비견:'独立战士',ss_겁재:'挑战胜负师',ss_식신:'感性创作者',ss_상관:'打破规则的天才',
  ss_편재:'万能娱乐家',ss_정재:'稳健成长者',ss_편관:'魅力领袖',ss_정관:'原则守护者',
  ss_편인:'神秘探索者',ss_정인:'智慧包容者',
  stemMeta:['大树','柔韧的藤蔓','太阳','烛光','大山','温润的土地','坚硬的铁','闪亮的宝石','辽阔的河','宁静的雨'],
  elemMeta:{'木':'木的生长','火':'火的热情','土':'大地的稳定','金':'金属的坚韧','水':'水的流动'},
  rDimTpl:'① {mg}({mgT})的{dir}能量(50%) + ② 具有{stem}气质的{ilju}日柱(30%) + ③ {dom}能量(20%)融合而成。',
  rDimOut:'向外扩展的',rDimIn:'向内收敛的',
  rStory:'{desc} 加上{mg}的能量，以{title}的气质与世界相遇。现在{age}岁，正在度过最闪耀的时光 ✨',
  rDesc1:'你天生拥有{title}的气质。{desc} 再加上{mg}({mgT})的能量，以及{dom}({domT})作为行动武器，造就了独特的魅力。',
  rDesc2:'现在在{stem}般的潮流中，{elemM}的能量正在被激活。2026年炽热太阳与奔马的能量交汇，为你带来新的转变机会。',
  rDw:'目前{stem}般的潮流正引导着具有{myStem}气质的你走向新的方向。',rDwLate:'已进入后半段，正是收获成果的时期。',rDwEarly:'还在起步阶段，正是播种的时期。',
  rSw:'2026年充满了炽热太阳＋奔马的能量。对于{stem}气质的你，这股能量',
  rSwFire:'以同样的火之力量更加强烈地发挥作用。',rSwWater:'让水与火相遇，在平衡中创造惊喜。',rSwOther:'会带来全新的刺激与变化。',
  rSeasonSkew:{'木':'🌡️ 春天的能量非常强大，成长与扩展的气势满溢。','火':'🌡️ 夏天的能量非常强烈，热情与表达的火焰正旺。','土':'🌡️ 转换期的能量很强，稳定与重心的力量是你的锚。','金':'🌡️ 秋天的能量很锐利，整理与决断的气场特别鲜明。','水':'🌡️ 冬天的能量很深沉，智慧与直觉的深度格外出众。'},
  rNoGwan:'🕊️ 没有管控能量，自由感性的一面更加突出。',rNoSik:'🔒 表达能量较少，内在的逻辑与体系成为你的力量。',
  rCharJoin:' + ',rCharSuffix:'的能量与世界相遇的人',
  structTitle:'🧬 MBTI算出结构',structIlju:'日柱（天生本质）',structMonth:'月柱格局（环境）',structDom:'最强能量（行动武器）',
  disc4:'本结果仅供自我了解参考，并非科学诊断。命运并未注定，每个选择都掌握在你手中。把它当作更了解自己的有趣工具吧！',
},
vi:{
  title:'Birth MBTI',heroH:'Khám Phá<br><em>Con Người Thật</em> Ẩn Trong Ngày Sinh',
  heroP:'Không phải MBTI do môi trường tạo ra,<br>mà là <strong style="color:var(--lav)">khí chất bẩm sinh</strong> được ghi từ khi bạn chào đời 🌙',
  infoTitle:'🌙 Birth MBTI là gì?',
  infoP1:'Bạn có từng nhận kết quả MBTI khác nhau mỗi lần test?<br>Đó là vì <strong style="color:var(--lav)">môi trường và tâm trạng</strong> tự nhiên ảnh hưởng đến kết quả.',
  infoP2:'Birth MBTI khác biệt. Nó đọc khí chất bẩm sinh được mã hóa trong <strong style="color:var(--lav)">Tứ Trụ bát tự</strong> và biểu đạt dưới dạng MBTI. Không phải mặt nạ do môi trường tạo ra, mà là <em style="font-style:normal;color:var(--rose)">tính cách cốt lõi bạn sinh ra đã có</em>.',
  diffNormal:'MBTI Thông Thường',diffBirth:'Birth MBTI',
  diffNormalT:'Có thể thay đổi theo môi trường, kinh nghiệm & tâm trạng',diffBirthT:'Khí chất bẩm sinh từ khi sinh — không thay đổi!',
  diffNote:'💡 Cả hai đều là bạn thật sự. Khung bẩm sinh + các lớp môi trường bồi đắp!',
  lblBirth:'🎂 Ngày sinh (6 số: YYMMDD)',lblGender:'🌟 Giới tính',
  btnM:'♂ Nam',btnF:'♀ Nữ',
  qTitle:'🎲 Kiểm Tra Nhanh Của Nyangbyeol!',qSub:'Hãy theo bản năng! Bỏ qua cũng không sao 🐱',
  q1L:'Q1. Một con gà rán vừa giao đến! Điều gì khiến bạn vui hơn?',
  q1aT:'Chia sẻ với bạn bè, ồn ào vui vẻ!',q1aH:'Ăn cùng nhau mới ngon!',
  q1bT:'Một mình độc chiếm + xem Netflix',q1bH:'Đây mới là healing thực sự...',
  q2L:'Q2. Bạn phát hiện một máy bán hàng tự động bí ẩn! Không biết sẽ ra gì 👀',
  q2aT:'Bỏ xu vào ngay. Cuộc đời là phiêu lưu!',q2aH:'Dù ra gì cũng sẽ vui',
  q2bT:'Đọc hướng dẫn ở phía sau trước đã',q2bH:'Cần biết trước mới yên tâm',
  q3L:'Q3. Bạn bè khoe quần áo mới: "Trông thế nào?" …thật ra không đẹp lắm 🫠',
  q3aT:'"Ừm, kiểu trước của bạn hợp hơn thật"',q3aH:'Thành thật mới là bạn bè tốt',
  q3bT:'"Ồ đẹp nhỉ! Mua ở đâu vậy?"',q3bH:'Cảm xúc của họ quan trọng hơn',
  q4L:'Q4. Vé concert idol yêu thích mở bán sau 30 ngày! 🎤',
  q4aT:'Đã đặt báo thức. Đã thuộc sơ đồ ghế',q4aH:'Chuẩn bị kỹ là chìa khóa thành công',
  q4bT:'"Đến lúc đó tính sau~"',q4bH:'May mắn thuộc về người không lo lắng',
  err:'⚠️ Vui lòng nhập ngày sinh 6 số và giới tính',
  btnStart:'Bắt đầu đọc năng lượng của Nyangbyeol 🔮',
  footP:'Bát tự của bạn × MBTI — quên đi người mà cuộc đời tạo ra,<br>gặp gỡ <strong style="color:var(--g2)">con người luôn ở đó ngay từ đầu</strong> 🌸',
  ldTitle:'Nyangbyeol đang phân tích meow ✨',ld1:'🪐 Tính toán mẫu bát tự',ld2:'🔮 Phân tích năng lượng Nguyệt Trụ',ld3:'✨ Đối chiếu khí chất Nhật Trụ',
  share:'🔗 Chia sẻ',shareApp:'🔗 Chia sẻ ứng dụng',shareText:'Tôi vừa thử MBTI theo ngày sinh và nó chính xác đến đáng sợ 😭 Bạn phải thử cái này! 🌙✨ #BirthMBTI',saveImg:'📷 Lưu ảnh',imgSaved:'Đã lưu ảnh! 📷',
  pcTitle:'📷 Thẻ Ảnh Cá Nhân',pcSub:'Tạo thẻ vibe của bạn cho MXH ✨',pcNick:'Biệt danh',pcNickPh:'e.g. LUNA · STAR · MISO',pcMsg:'Lời nhắn',pcMsgLimit:'tối đa 20 ký tự',pcMsgPh:'e.g. Born to shine ✨',pcDate:'Ngày',pcColor:'Màu Cá Nhân',pcElem:'Màu năng lượng {0}',pcCancel:'Hủy',pcGen:'✨ Tạo thẻ + Sao chép link',pcGenerating:'Đang tạo...',pcToast:'📷 Đã lưu thẻ + 🔗 Đã sao chép link!',
  tagBorn:'🌙 Khí Chất Bẩm Sinh',tagPre:'🌙 Khí chất bạn sinh ra đã có — ',
  sipBadge:'Thập Thần Nguyệt Trụ',sipRank:'Yếu tố MBTI #1',sipWhy:'💡 Ảnh hưởng MBTI: ',
  flowDw:'🌊 Giai Đoạn Hiện Tại',flowSw:'☀️ Năng Lượng 2026',flowSwSub:'Năm Bính Ngọ',
  swStemL:'Bính (Hỏa)',swBranchL:'Ngọ (Ngựa)',
  secIlju:'Khí Chất Nhật Trụ Của Tôi',secIljuDiffNote:'💡 <strong style="color:var(--lav)">Có thể khác với MBTI thông thường!</strong><br>MBTI thông thường thay đổi theo môi trường, nhưng Birth MBTI cho thấy <strong>khí chất bẩm sinh</strong> từ bát tự của bạn.',
  secIljuL:'Lý Thuyết Nhật Trụ Lục Thập Hoa Giáp',secStem:'Thiên Can',secBranch:'Địa Chi',
  secCorrNote:'🎲 Kiểm tra vibe đã giúp xác định trục {0}',
  secMe:'Tôi Là Ai',secMeSub:'Tính cách cốt lõi + Bản thân hiện tại',secBase:'Tính Cách Cốt Lõi',secNow:'Bản Thân Hiện Tại',
  secMap:'Bản Đồ Tính Cách',secMapSub:'Phân tích 4 trục MBTI',
  secStr:'Điểm Mạnh Của Tôi',secStrSub:'Điểm mạnh cốt lõi từ Thiên Can',
  secKw:'Từ Khóa Tính Cách',secKwSub:'Những từ mô tả tôi',
  secCompat:'Kiểu Tương Thích',secCompatSub:'Phân tích tương hợp',compatGood:'💚 Cặp Đôi Hoàn Hảo',compatCare:'🔥 Cặp Đôi Phát Triển',
  compatGoodR:'Năng lượng của hai bạn bổ sung cho nhau hoàn hảo — đội mạnh nhất! ✨',
  compatCareR:'Năng lượng khác nhau tạo ra hóa học thú vị — hiểu nhau giúp cả hai trở nên bất khả chiến bại! 💪',
  secFig:'Người Giống Bạn',secFigSub:'Những người nổi tiếng có năng lượng tương tự',
  secCareer:'Nghề Nghiệp Phù Hợp Nhất',secCareerSub:'Hướng dẫn phát triển trong kỷ nguyên AGI',
  secSynTitle:'✨ Sức Mạnh Tổng Hợp Năng Lượng Sinh Nhật',
  secDist:'Bản Đồ Tính Cách Thế Giới',secDistSub:'Phân phối 16 kiểu',
  secSaju:'Mã Năng Lượng Sinh',secSajuSub:'Tứ Trụ (Năm·Tháng·Ngày)',
  sajuInfo:'Các ký tự ngày sinh ghi lại năng lượng vũ trụ lúc bạn chào đời. Những năng lượng này hòa quyện tạo ra bản đồ năng lượng độc đáo của bạn! 🗺️',
  sajuNote:'Mẫu năng lượng năm, tháng & ngày sinh · Truyền thống phương Đông',
  yrP:'Năm',moP:'Tháng',dyP:'Ngày',
  disc1:'🌙 Birth MBTI biểu đạt <strong style="color:var(--g1)">khí chất bẩm sinh</strong> của bạn từ Tứ Trụ bát tự dưới dạng MBTI',
  disc2:'Có thể khác với MBTI thông thường — nó cho thấy bạn từ khi sinh ra, không phải từ môi trường!',
  disc3:'Đây là để vui và khám phá bản thân 🌟 Số phận không cố định!',
  btnAgain:'← Phân Tích Lại',btnGunghap:'💑 Kiểm Tra Hợp Tuổi',copied:'🔗 Đã sao chép link!',
  pwaTitle:'Thêm Vào Màn Hình Chính',pwaSub:'Mở nhanh như ứng dụng!',pwaBtn:'Thêm',
  flAbout:'Giới Thiệu',flTerms:'Điều Khoản Dịch Vụ',flPrivacy:'Chính Sách Bảo Mật',flContact:'Liên Hệ',
  settingsTitle:'⚙️ Cài Đặt',settingsApiDesc:'Nhập key để bật phân tích AI! 🌙 (Gemini 1.5 Flash)',settingsSave:'Lưu',settingsClose:'Đóng',
  privacyNotice:'🔒 Ngày sinh và giới tính của bạn không bao giờ được lưu trên bất kỳ máy chủ nào. Tất cả phân tích chạy cục bộ trên thiết bị của bạn. Nếu bạn sử dụng tính năng AI, dữ liệu được gửi đến Google Gemini API.',
  segYY:'YY',segMM:'MM',segDD:'DD',
  exDesc1:'Nam 01.01.12',exDesc2:'Nữ 03.02.15',exDesc3:'Nữ 99.12.25',
  age:'tuổi',male:'♂ Nam',female:'♀ Nữ',
  ss_비견:'Chiến Binh Độc Lập',ss_겁재:'Thách Thức Can Đảm',ss_식신:'Người Sáng Tạo Cảm Xúc',ss_상관:'Thiên Tài Phá Cách',
  ss_편재:'Nghệ Sĩ Đa Năng',ss_정재:'Người Phát Triển Bền Vững',ss_편관:'Lãnh Đạo Cuốn Hút',ss_정관:'Người Gìn Giữ Nguyên Tắc',
  ss_편인:'Nhà Thám Hiểm Huyền Bí',ss_정인:'Người Ôm Trọn Thông Thái',
  stemMeta:['cây lớn','dây leo linh hoạt','mặt trời rực rỡ','ngọn nến dịu nhẹ','núi lớn','đất mềm','sắt vững chắc','ngọc sáng bóng','sông rộng','mưa nhẹ êm'],
  elemMeta:{'木':'sự phát triển của mộc','火':'đam mê của hỏa','土':'sự ổn định của thổ','金':'sức mạnh của kim','水':'dòng chảy của thủy'},
  rDimTpl:'① Năng lượng {dir} {mg} ({mgT}) (50%) + ② Nhật trụ {ilju} bản chất {stem} (30%) + ③ Năng lượng {dom} (20%) kết hợp tạo nên điều này.',
  rDimOut:'hướng ngoại',rDimIn:'hướng nội',
  rStory:'{desc} Với năng lượng {mg}, bạn gặp gỡ thế giới như một {title}. Ở tuổi {age}, bạn đang trong một trong những chương rực rỡ nhất ✨',
  rDesc1:'Bạn sinh ra với khí chất của một {title}. {desc} Năng lượng {mg} ({mgT}) xếp chồng lên trên, và {dom} ({domT}) là siêu năng lực hành động của bạn, tạo nên tính cách đặc biệt cuốn hút.',
  rDesc2:'Ngay lúc này, dòng chảy {stem} đang kích hoạt năng lượng {elemM} xung quanh bạn. Năm 2026, năng lượng Bính Hỏa và Ngọ Mã mang đến những cơn gió thay đổi và cơ hội mới.',
  rDw:'Dòng chảy {stem} hiện tại đang hướng dẫn khí chất {myStem} của bạn đến những chân trời mới. ',rDwLate:'Bạn đang ở nửa sau — thời gian thu hoạch kết quả.',rDwEarly:'Vẫn còn sớm — thời gian gieo hạt cho tương lai.',
  rSw:'Năm 2026 tràn đầy năng lượng Bính Hỏa + Ngọ Mã. Với khí chất {stem} của bạn, năng lượng này ',
  rSwFire:'khuếch đại ngọn lửa tự nhiên của bạn — mong đợi động lực mạnh mẽ.',rSwWater:'tạo ra sự cân bằng thú vị giữa thủy và hỏa.',rSwOther:'mang đến kích thích mới và sự thay đổi thú vị.',
  rSeasonSkew:{'木':'🌡️ Năng lượng mùa xuân của bạn rất mạnh — tràn đầy cảm giác phát triển và mở rộng.','火':'🌡️ Năng lượng mùa hè của bạn rất mãnh liệt — đam mê và biểu đạt đang bùng cháy.','土':'🌡️ Năng lượng chuyển tiếp của bạn mạnh mẽ — sức mạnh ổn định và tập trung là neo đậu của bạn.','金':'🌡️ Năng lượng mùa thu của bạn sắc bén — sự rõ ràng và hành động quyết đoán đến tự nhiên.','水':'🌡️ Năng lượng mùa đông của bạn chạy sâu — trí tuệ và trực giác đặc biệt mạnh.'},
  rNoGwan:'🕊️ Không có năng lượng kiểm soát, mặt tự do và cảm xúc của bạn tỏa sáng rực rỡ hơn. ',rNoSik:'🔒 Với ít năng lượng biểu đạt hơn, logic nội tâm và tư duy có hệ thống trở thành sức mạnh của bạn. ',
  rCharJoin:' + ',rCharSuffix:' năng lượng gặp gỡ thế giới',
  structTitle:'🧬 Tính Toán MBTI',structIlju:'Nhật Trụ (Cốt Lõi Bẩm Sinh)',structMonth:'Năng Lượng Tháng (Môi Trường)',structDom:'Năng Lượng Mạnh Nhất (Phong Cách Hành Động)',
  disc4:'Đây là công cụ tham khảo để tự hiểu bản thân, không phải chẩn đoán khoa học. Số phận của bạn không cố định — mọi lựa chọn đều là của bạn. Hãy dùng điều này như một cách vui để hiểu thêm về bản thân!',
}
};
function t(k){return (I[LANG]&&I[LANG][k])||I.ko[k]||k}
/* ── SIPSUNG/ILJU 다국어 텍스트 (상세) ── */
const SIP_I18N={
ja:{
  비견:{sub:'自分と同じエネルギー — 主体的で自信に満ちた気質',why:'自己主張が明確で独立的 → やや外向的、論理的判断の傾向'},
  겁재:{sub:'競争と社交のエネルギー — 積極的で人懐っこい気質',why:'社交的で活動的 → 強い外向性、即興的な行動を好む'},
  식신:{sub:'創造と余裕のエネルギー — 芸術的センスに溢れる気質',why:'創造的な感性と直感 → 感情中心の温かい判断、自由な流れを好む'},
  상관:{sub:'表現と反骨のエネルギー — 独創的で破格的な気質',why:'破格的な思考と強い表現力 → 直感優位、即興的な認識が極大化'},
  편재:{sub:'活動と多才のエネルギー — 社交的で現実感覚に優れた気質',why:'高い社交性と現実把握力 → 強い外向性、感覚的・現実的な判断'},
  정재:{sub:'安定と計画のエネルギー — 誠実で信頼感のある気質',why:'緻密な計画性と安定志向 → 感覚的・データ重視、体系的な判断'},
  편관:{sub:'挑戦と決断のエネルギー — 強い推進力のリーダー気質',why:'強い決断力と原則 → 論理中心の冷静な判断、体系的な実行'},
  정관:{sub:'責任と体系のエネルギー — 信頼感があり正統派の気質',why:'強い責任感と規律 → 論理・体系中心の判断、計画的な実行'},
  편인:{sub:'直感と独創のエネルギー — 独自の視点を持つ気質',why:'強い直感と独創性 → 内面探求型エネルギー、閃きによる柔軟な行動'},
  정인:{sub:'学習と包容のエネルギー — 知的で温かい気質',why:'学問的で包容的 → 内面集中型エネルギー、直感と判断のバランス'},
},
en:{
  비견:{sub:'Same energy as you — independent and self-assured temperament',why:'Clear self-assertion & independence → slightly extraverted, logical judgment'},
  겁재:{sub:'Competition & social energy — proactive and personable temperament',why:'Social and active → strong extraversion, spontaneous action preference'},
  식신:{sub:'Creative & relaxed energy — overflowing artistic sensibility',why:'Creative sensitivity & intuition → warm, feeling-based judgment, free flow'},
  상관:{sub:'Expression & rebellion energy — original and unconventional temperament',why:'Unconventional thinking & strong expression → intuition-dominant, maximized spontaneity'},
  편재:{sub:'Activity & versatility energy — sociable with strong practical sense',why:'High sociability & reality awareness → strong extraversion, sensory-practical judgment'},
  정재:{sub:'Stability & planning energy — diligent and reliable temperament',why:'Meticulous planning & stability-seeking → data-driven, systematic judgment'},
  편관:{sub:'Challenge & decisiveness energy — powerful leader temperament',why:'Strong decisiveness & principles → cool logic-centered judgment, systematic execution'},
  정관:{sub:'Responsibility & structure energy — trustworthy, principled temperament',why:'Strong responsibility & discipline → logic-system centered judgment, planned execution'},
  편인:{sub:'Intuition & originality energy — unique perspective temperament',why:'Strong intuition & originality → inner-exploration energy, flexible inspiration-based action'},
  정인:{sub:'Learning & embracing energy — intellectual and warm temperament',why:'Scholarly and embracing → inner-focused energy, balanced intuition & judgment'},
},
'zh-TW':{
  비견:{sub:'與自己相同的能量 — 主體性強且充滿自信的氣質',why:'自我主張明確且獨立 → 略偏外向，邏輯判斷傾向'},
  겁재:{sub:'競爭與社交的能量 — 積極主動且有親和力的氣質',why:'社交活躍 → 強外向性，偏好即興行動'},
  식신:{sub:'創意與從容的能量 — 藝術感十足的氣質',why:'創意感性與直覺 → 溫暖的情感判斷，偏好自由流動'},
  상관:{sub:'表達與叛逆的能量 — 獨創且破格的氣質',why:'破格思維與強表達力 → 直覺主導，即興認知極大化'},
  편재:{sub:'活動與多才的能量 — 社交力強且現實感覺敏銳的氣質',why:'高度社交性與現實感 → 強外向，感覺型判斷'},
  정재:{sub:'安定與計劃的能量 — 誠實可靠的氣質',why:'縝密計劃性與穩定追求 → 數據導向，體系化判斷'},
  편관:{sub:'挑戰與決斷的能量 — 強大推動力的領袖氣質',why:'強決斷力與原則 → 冷靜邏輯判斷，體系化執行'},
  정관:{sub:'責任與體系的能量 — 值得信賴、遵循正道的氣質',why:'強責任感與紀律 → 邏輯體系中心判斷，計劃性執行'},
  편인:{sub:'直覺與獨創的能量 — 擁有獨特視角的氣質',why:'強直覺與獨創性 → 內在探索型能量，靈感驅動的靈活行動'},
  정인:{sub:'學習與包容的能量 — 知性且溫暖的氣質',why:'學術性且包容 → 內在專注型能量，直覺與判斷的平衡'},
},
'zh-CN':{
  비견:{sub:'与自己相同的能量 — 主体性强且充满自信的气质',why:'自我主张明确且独立 → 略偏外向，逻辑判断倾向'},
  겁재:{sub:'竞争与社交的能量 — 积极主动且有亲和力的气质',why:'社交活跃 → 强外向性，偏好即兴行动'},
  식신:{sub:'创意与从容的能量 — 艺术感十足的气质',why:'创意感性与直觉 → 温暖的情感判断，偏好自由流动'},
  상관:{sub:'表达与叛逆的能量 — 独创且破格的气质',why:'破格思维与强表达力 → 直觉主导，即兴认知极大化'},
  편재:{sub:'活动与多才的能量 — 社交力强且现实感觉敏锐的气质',why:'高度社交性与现实感 → 强外向，感觉型判断'},
  정재:{sub:'安定与计划的能量 — 诚实可靠的气质',why:'缜密计划性与稳定追求 → 数据导向，体系化判断'},
  편관:{sub:'挑战与决断的能量 — 强大推动力的领袖气质',why:'强决断力与原则 → 冷静逻辑判断，体系化执行'},
  정관:{sub:'责任与体系的能量 — 值得信赖、遵循正道的气质',why:'强责任感与纪律 → 逻辑体系中心判断，计划性执行'},
  편인:{sub:'直觉与独创的能量 — 拥有独特视角的气质',why:'强直觉与独创性 → 内在探索型能量，灵感驱动的灵活行动'},
  정인:{sub:'学习与包容的能量 — 知性且温暖的气质',why:'学术性且包容 → 内在专注型能量，直觉与判断的平衡'},
},
vi:{
  비견:{sub:'Năng lượng giống bạn — khí chất độc lập và tự tin',why:'Tự khẳng định rõ ràng & độc lập → hơi hướng ngoại, thiên về phán đoán logic'},
  겁재:{sub:'Năng lượng cạnh tranh & xã hội — khí chất chủ động và thân thiện',why:'Xã hội và năng động → hướng ngoại mạnh, thích hành động ngẫu hứng'},
  식신:{sub:'Năng lượng sáng tạo & thư thái — đầy cảm thụ nghệ thuật',why:'Cảm xúc sáng tạo & trực giác → phán đoán ấm áp dựa trên cảm xúc, thích dòng chảy tự do'},
  상관:{sub:'Năng lượng biểu đạt & nổi loạn — khí chất độc đáo và phi thường',why:'Tư duy phi thường & biểu đạt mạnh → trực giác chiếm ưu thế, tính ngẫu hứng tối đa'},
  편재:{sub:'Năng lượng hoạt động & đa năng — xã hội tốt với cảm quan thực tế mạnh',why:'Xã hội cao & nhận thức thực tế → hướng ngoại mạnh, phán đoán cảm giác-thực tế'},
  정재:{sub:'Năng lượng ổn định & lập kế hoạch — khí chất cần cù và đáng tin cậy',why:'Lập kế hoạch tỉ mỉ & hướng đến ổn định → dựa trên dữ liệu, phán đoán có hệ thống'},
  편관:{sub:'Năng lượng thách thức & quyết đoán — khí chất lãnh đạo mạnh mẽ',why:'Quyết đoán mạnh & nguyên tắc → phán đoán logic lạnh lùng, thực thi có hệ thống'},
  정관:{sub:'Năng lượng trách nhiệm & cấu trúc — khí chất đáng tin cậy, chính trực',why:'Trách nhiệm mạnh & kỷ luật → phán đoán trung tâm logic-hệ thống, thực thi có kế hoạch'},
  편인:{sub:'Năng lượng trực giác & độc đáo — khí chất có quan điểm riêng',why:'Trực giác mạnh & độc đáo → năng lượng khám phá nội tâm, hành động linh hoạt dựa trên cảm hứng'},
  정인:{sub:'Năng lượng học hỏi & bao dung — khí chất trí tuệ và ấm áp',why:'Học thuật và bao dung → năng lượng tập trung nội tâm, cân bằng trực giác & phán đoán'},
}};
/* ── 본질 × 계절 분석 다국어 ── */
const ESSENCE_SEASON_I18N = {
  ko: {
    0: ["무한 성장기: 호기심 대장, 시작하는 에너지가 강력함", "꽃피운 워커홀릭: 능력 발휘 최고조, 단 번아웃 주의", "단단한 재목: 시련을 견디고 완성된 실력파, 결과 중심", "뿌리 내린 거목: 인내심의 끝판왕, 봄을 기다리는 기획자"],
    1: ["만발한 들꽃: 인기쟁이, 사교성 최고, 매력 발산", "화려한 정원: 표현력 폭발, 감정 기복 주의", "가을의 국화: 환경 적응력 최고, 외유내강의 생존 전문가", "온실 속 화초: 보호본능 자극, 따뜻한 조력자가 필요함"],
    2: ["따스한 봄 햇살: 친절함, 생명을 키우는 따뜻한 오지랖", "작열하는 한여름: 열정 폭발, 리더십 최강, 불같은 성격", "풍요를 비추는 빛: 결실을 맺는 능력, 미적 감각이 뛰어남", "반가운 난로: 어디서나 환영받는 존재, 희생정신"],
    3: ["봄바람 속 불씨: 통찰력, 아이디어가 번뜩이는 브레인", "치열한 용광로: 경쟁심 강함, 목표를 향해 무섭게 집중함", "어둠 속의 등대: 가치를 감별하는 눈, 외로운 리더", "언 몸을 녹이는 불: 다정다감, 사람의 마음을 치유하는 카운슬러"],
    4: ["새싹을 품은 산: 포용력, 후배나 사람을 키워내는 멘토", "메마른 화산: 스케일이 큼, 고집이 세고 마이웨이 성향", "단풍 든 풍요로운 산: 여유로움, 결실을 거두는 재물복의 아이콘", "눈 덮인 겨울 산: 속을 알 수 없는 신비로움, 깊은 철학적 사고"],
    5: ["파릇파릇한 텃밭: 실속파, 부지런히 내 것을 가꾸는 성실함", "생명력 넘치는 땅: 오지랖과 정이 넘침, 주변을 풍요롭게 함", "수확을 앞둔 대지: 이해타산이 빠름, 실용주의적이고 알뜰함", "쉬고 있는 언 땅: 때를 기다리는 지혜, 저장하고 모으는 능력"],
    6: ["다듬어지는 바위: 변화를 겪으며 성장 중, 잠재력 폭발 직전", "제련되는 강철: 혹독한 훈련을 거쳐 단단해진 진정한 전문가", "가을의 서리/칼: 맺고 끊음의 달인, 카리스마와 결단력 최강", "얼음 속의 바위: 냉철한 이성, 흔들리지 않는 굳건한 신념"],
    7: ["반짝이는 원석: 자기애 충만, 예민하지만 빛나는 아이디어", "불 속의 보석: 스트레스에 취약함, 완벽주의적이고 예민함", "쇼윈도의 다이아: 최고의 가치, 프라이드가 높고 세련된 미적 감각", "물에 씻긴 보석: 차갑지만 맑은 지성, 뛰어난 말솜씨와 두뇌"],
    8: ["생명을 키우는 물: 창의력 폭발, 만물을 돕는 유연한 사고방식", "여름의 오아시스: 인기 폭발, 문제 해결사, 시원시원한 성격", "깊고 맑은 호수: 속을 알 수 없는 깊이, 뛰어난 정보 수집력", "얼어붙은 바다: 생각이 너무 많음, 철학적이고 깊은 지혜"],
    9: ["봄날의 단비: 센스쟁이, 어디서든 꼭 필요한 감초 역할", "가뭄의 소나기: 폭발적인 아이디어, 타이밍을 아는 승부사", "가을의 이슬: 촉촉한 감수성, 조용하지만 강한 파급력", "겨울의 눈보라: 비밀스러움, 아이디어는 많으나 실행력 필요"]
  },
  ja: {
    0: ["無限成長期：好奇心旺盛、新しいことを始めるエネルギーが強力", "咲き誇るワーカーホリック：能力発揮が最高潮、バーンアウトに注意", "頑丈な材목：試練を乗り越え完成された実力派、結果重視", "深く根を張る巨木：忍耐力の達人, 春を待つ企画者"],
    1: ["満開の野花：人気者、最高の社交性、魅力の発散", "華やかな庭園：表現力の爆発、情緒不安定に注意", "秋の菊：環境適応力が最高、外柔内剛の生存専門家", "温室の草花：保護本能を刺激、温かい協力者が必要"],
    2: ["温かな春の日差し：親切、生命を育む温かな情熱", "灼熱の真夏：情熱の爆発、最強のリーダーシップ, 火のような性格", "豊かさを照らす光：結実を結ぶ能力、優れた美的センス", "歓迎される暖炉：どこでも歓迎される存在, 自己犠牲精神"],
    3: ["春風の中の種火：洞察力、アイデアが光るブレイン", "熾烈な溶鉱炉：競争心が強い, 目標に向かって恐ろしいほど集中", "暗闇の中の灯台：価値を見抜く目、孤独なリーダー", "凍えた体を溶かす火：多情多感、人の心を癒やすカウンセラー"],
    4: ["新芽を抱く山：包容力、後輩や人を育てるメンター", "乾いた火山：スケールが大きい、頑固でマイウェイな傾向", "紅葉した豊かな山：余裕、実りをもたらす財運のアイコン", "雪に覆われた冬の山：底知れぬ神秘性、深い哲学的思考"],
    5: ["青々とした菜園：実利派、勤勉に自分のものを育てる誠実さ", "生命力溢れる土地：情に厚く、周囲を豊かにする", "収穫を控えた大地：損得勘定が速い、実用主義的で節約家", "休息中の凍土：時を待つ知恵、蓄えて集める能力"],
    6: ["磨かれる岩：変化を経て成長中, 潜在能力の爆発直前", "鍛えられる鋼鉄：過酷な訓練を経て強くなった真の専門家", "秋の霜/刀：けじめの達人, 最強のカリスマと決断力", "氷の中の岩岩：冷静な理性、揺らぐことのない堅固な信念"],
    7: ["輝く原石：自己愛に満ち、鋭敏だが輝くアイデア", "火の中の宝石：ストレスに弱く、完璧主義的で過敏", "ショーウィンドーのダイヤ：最高の価値、プライドが高く洗練された美的センス", "水で洗われた宝石：冷たいが澄んだ知性、優れた弁舌と頭脳"],
    8: ["生命を育む水：創造力の爆発、万物を助ける柔軟な思考", "夏のオアシス：人気爆発、問題解決者、さっぱりした性格", "深く澄んだ湖：底知れぬ深さ, 優れた情報収集力", "凍りついた海：考えすぎ、哲学的で深い知恵"],
    9: ["春の恵みの雨：センス抜群、どこにでも必要な隠し味のような役割", "干ばつの夕立：爆発的なアイデア、タイミングを知る勝負師", "秋の露：しっとりとした感性、静かだが強い波及力", "冬の吹雪：秘密主義、アイデアは多いが実行力が必要"]
  },
  en: {
    0: ["Infinite Growth: Curiosity master, powerful starting energy", "Blooming Workaholic: Peak performance, beware of burnout", "Solid Timber: Skilled expert who endured trials, result-oriented", "Rooted Giant Tree: Ultimate patience, planner waiting for spring"],
    1: ["Wildflowers in Bloom: Popular, top social skills, radiating charm", "Flamboyant Garden: Exploding expression, beware of mood swings", "Autumn Chrysanthemum: Best adaptability, inner strength survivalist", "Greenhouse Plant: Stimulates protection instinct, needs a warm helper"],
    2: ["Warm Spring Sunshine: Kindness, warm nurturing spirit", "Scorching Midsummer: Exploding passion, strongest leadership, fiery nature", "Light Illuminating Abundance: Ability to bear fruit, great aesthetic sense", "Welcomed Fireplace: Welcomed everywhere, spirit of self-sacrifice"],
    3: ["Spark in Spring Breeze: Insight, brilliant idea brain", "Intense Furnace: Strong competitiveness, fearsome focus on goals", "Lighthouse in Darkness: Eye for value, lonely leader", "Fire Melting Frozen Bodies: Warm-hearted, counselor healing minds"],
    4: ["Mountain Embracing Sprouts: Inclusivity, mentor who nurtures people", "Arid Volcano: Large scale, stubborn and independent", "Abundant Autumn Mountain: Leisurely, icon of wealth and harvest", "Snow-covered Winter Mountain: Mysterious depth, deep philosophical thinking"],
    5: ["Lush Vegetable Garden: Practical, diligent in self-cultivation", "Vital Land: Nurturing and affectionate, enriches surroundings", "Harvest-ready Earth: Quick calculating, pragmatic and thrifty", "Resting Frozen Ground: Wisdom of waiting, ability to save and collect"],
    6: ["Shaping Rock: Growing through change, potential about to explode", "Forged Steel: True expert hardened through harsh training", "Autumn Frost/Blade: Master of boundaries, top charisma and decisiveness", "Rock in Ice: Cool reason, unwavering steadfast belief"],
    7: ["Shining Raw Stone: Full of self-love, sensitive but brilliant ideas", "Jewel in Fire: Vulnerable to stress, perfectionist and sensitive", "Diamond in Showcase: Ultimate value, high pride and sophisticated taste", "Water-washed Jewel: Cool but clear intellect, excellent speech and brain"],
    8: ["Life-giving Water: Exploding creativity, flexible thinking helping all", "Summer Oasis: Bursting popularity, problem solver, refreshing personality", "Deep Clear Lake: Mysterious depth, excellent information gathering", "Frozen Sea: Overthinking, philosophical and deep wisdom"],
    9: ["Spring Refreshing Rain: Sense master, essential presence everywhere", "Drought Shower: Exploding ideas, competitor who knows timing", "Autumn Dew: Moist sensitivity, quiet but powerful influence", "Winter Blizzard: Secretive, many ideas but needs execution power"]
  },
  'zh-TW': {
    0: ["無限成長期：好奇心大王，啟動能量強大", "盛開的工作狂：能力發揮至巔峰，注意過勞", "堅固的材木：經受考驗而完成的實力派，結果導向", "紮根的巨木：忍耐力的極致，等待春天的企劃者"],
    1: ["盛開的野花：人氣王，社交力極佳，散發魅力", "華麗的花園：表達力爆發，注意情緒波動", "秋天的菊花：環境適應力最強，外柔內剛的生存專家", "溫室裡的花朵：激發保護欲，需要溫暖的助手"],
    2: ["溫暖的春陽：親切，育化萬物的溫暖情懷", "熾熱的盛夏：熱情爆發，領導力最強，火爆性格", "照亮豐饒的光：結出果實的能力，美感卓越", "受歡迎的暖爐：處處受歡迎的存在，犧牲精神"],
    3: ["春風中的火種：洞察力，靈感閃現的大腦", "激烈的熔爐：競爭心強，對目標有驚人的專注力", "黑暗中的燈塔：辨別價值的眼光，孤獨的領袖", "融化冰冷的火：多情善感，治癒人心的諮商師"],
    4: ["孕育新芽的山：包容力, 培養後輩或他人的導師", "乾涸的火山：格局大，固執且自我的傾向", "楓紅的豐饒之山：悠閒, 收穫成果的財富圖騰", "被雪覆蓋的冬山：深不可測的神秘感, 深刻的哲學思考"],
    5: ["翠綠的菜園：實務派, 勤奮耕耘自我的誠實感", "充滿生命力的土地：熱情且有情有義, 豐富周圍環境", "即將收穫的大地：計算快, 實用主義且精打細算", "休息中的凍土：等待時機的智慧, 儲蓄和收集的能力"],
    6: ["雕琢中的岩石：在變化中成長, 潛力即將爆發", "煉就的鋼鐵：歷經嚴酷訓練而變強的真正專家", "秋天的霜/劍：斷捨離的大師, 領袖魅力與決斷力最強", "冰中的岩石：冷靜的理性, 動搖不了的堅定信念"],
    7: ["閃耀的原石：自愛滿滿, 敏感但有閃耀的點子", "火中的寶石：對壓力脆弱, 完美主義且敏感", "櫥窗裡的鑽石：最高價值, 自尊心高且審美洗鍊", "水洗的寶石：冰冷但清晰的智慧, 優秀的口才與頭腦"],
    8: ["孕育生命的生命之水：創意爆發, 幫助萬物的靈活思維", "夏日的綠洲：人氣爆發, 問題解決者, 性格豪爽", "深邃清澈的湖泊：深不可測的深度, 卓越的信息收集力", "冰封的大海：想法太多, 哲學且深邃的智慧"],
    9: ["春日的甘霖：靈活敏捷, 在任何地方都是不可或缺的角色", "旱地的陣雨：爆發性的創意, 懂得時機的勝負師", "秋天的露水：濕潤的感性, 安靜但有強大的影響力", "冬日的暴風雪：神秘, 點子多但需要執行力"]
  },
  'zh-CN': {
    0: ["无限生长期：好奇心大王，启动能量强大", "盛开的工作狂：能力发挥至巅峰，注意过劳", "坚固的材木：经受考验而完成的实力派，结果导向", "扎根的巨木：忍耐力的极致，等待春天的策划者"],
    1: ["盛开的野花：人气王，社交力极佳，散发魅力", "华丽的花园：表达力爆发，注意情绪波动", "秋天的菊花：环境适应力最强，外柔内刚的生存专家", "温室里的花朵：激发保护欲，需要温暖的助手"],
    2: ["温暖的春阳：亲切，育化万物的温暖情怀", "炽热的盛夏：热情爆发，领导力最强，火爆性格", "照亮丰饶的光：结出果实的能力，美感卓越", "受欢迎的暖炉：处处受欢迎的存在，牺牲精神"],
    3: ["春风中的火种：洞察力，灵感闪现的大脑", "激烈的熔炉：竞争心强，对目标有惊人的专注力", "黑暗中的灯塔：辨别价值的眼光，孤独的领袖", "融化冰冷的火：多情善感，治愈人心的咨询师"],
    4: ["孕育新芽的山：包容力, 培养后辈或他人的导师", "干涸的火山：格局大，固执且自我的倾向", "枫红的丰饶之山：悠闲, 收获成果的财富图腾", "被雪覆盖的冬山：深不可测的神秘感, 深刻的哲学思考"],
    5: ["翠绿的菜园：实务派, 勤奋耕耘自我的诚实感", "充满生命力的土地：热情且有情有义, 丰富周围环境", "即将收获的大地：计算快, 实用主义且精打细算", "休息中的冻土：等待时机的智慧, 储蓄和收集的能力"],
    6: ["雕琢中的岩石：在变化中成长, 潜力即将爆发", "炼就的钢铁：历经严酷训练而变强的真正专家", "秋天的霜/剑：断舍离的大师, 领袖魅力与决断力最强", "冰中的岩石：冷静的理性, 动摇不了的坚定信念"],
    7: ["闪耀的原石：自爱满满, 敏感但有闪耀的点子", "火中的宝石：对压力脆弱, 完美主义且敏感", "橱窗里的钻石：最高价值, 自尊心高且审美洗练", "水洗的宝石：冰冷但清晰的智慧, 优秀的口才与头脑"],
    8: ["孕育生命的生命之水：创意爆发, 帮助万物的灵活思维", "夏日的绿洲：人气爆发, 问题解决者, 性格豪爽", "深邃清澈的湖泊：深不可测的深度, 卓越的信息收集力", "冰封的大海：想法太多, 哲学且深邃的智慧"],
    9: ["春日的甘霖：灵活敏捷, 在任何地方都是不可或缺的角色", "旱地的阵雨：爆发性的创意, 懂得时机的胜负师", "秋天的露水：湿润的感性, 安静但有强大的影响力", "冬日的暴风雪：神秘, 点子多但需要执行力"]
  },
  vi: {
    0: ["Tăng Trưởng Vô Hạn: Chủ nhân tò mò, năng lượng bắt đầu mạnh mẽ", "Người Làm Việc Bùng Nổ: Hiệu suất đỉnh cao, cẩn thận kiệt sức", "Gỗ Vững Chắc: Chuyên gia lành nghề vượt qua thử thách, hướng kết quả", "Cây Đại Thụ Bén Rễ: Kiên nhẫn tối thượng, người lập kế hoạch chờ đợi mùa xuân"],
    1: ["Hoa Dại Nở Rộ: Nổi tiếng, kỹ năng xã hội đỉnh cao, tỏa sáng", "Khu Vườn Rực Rỡ: Biểu đạt bùng nổ, cẩn thận thay đổi tâm trạng", "Cúc Mùa Thu: Thích nghi tốt nhất, người sống sót bền bỉ bên trong", "Cây Trong Nhà Kính: Kích thích bản năng bảo vệ, cần người hỗ trợ ấm áp"],
    2: ["Ánh Nắng Mùa Xuân Ấm Áp: Tốt bụng, tinh thần nuôi dưỡng ấm áp", "Mùa Hè Nóng Bỏng: Đam mê bùng nổ, lãnh đạo mạnh nhất, bản tính bốc lửa", "Ánh Sáng Chiếu Rọi Sự Phong Phú: Khả năng kết trái, cảm quan thẩm mỹ tuyệt vời", "Lò Sưởi Được Chào Đón: Được chào đón ở khắp nơi, tinh thần hy sinh"],
    3: ["Tia Lửa Trong Gió Xuân: Trực giác, bộ não sáng ý tưởng", "Lò Nung Dữ Dội: Cạnh tranh mạnh, tập trung đáng sợ vào mục tiêu", "Ngọn Hải Đăng Trong Bóng Tối: Mắt nhìn thấy giá trị, lãnh đạo cô đơn", "Lửa Làm Tan Băng Giá: Ấm áp, chuyên gia tư vấn chữa lành tâm hồn"],
    4: ["Núi Ôm Ấp Mầm Non: Bao dung, người cố vấn nuôi dưỡng người khác", "Núi Lửa Khô Cạn: Quy mô lớn, bướng bỉnh và độc lập", "Núi Mùa Thu Phong Phú: Thư thái, biểu tượng của sự giàu có và thu hoạch", "Núi Đông Tuyết Phủ: Chiều sâu huyền bí, tư duy triết học sâu sắc"],
    5: ["Vườn Rau Xanh Tươi: Thực tế, cần cù tự trồng trọt", "Đất Đai Sống Động: Nuôi dưỡng và đầy tình cảm, làm phong phú môi trường xung quanh", "Đất Sẵn Sàng Thu Hoạch: Tính toán nhanh, thực dụng và tiết kiệm", "Đất Đóng Băng Nghỉ Ngơi: Trí tuệ chờ đợi, khả năng tiết kiệm và tích lũy"],
    6: ["Đá Đang Được Mài Giũa: Phát triển qua thay đổi, tiềm năng sắp bùng nổ", "Thép Được Rèn Luyện: Chuyên gia thực sự được tôi rèn qua huấn luyện khắc nghiệt", "Sương Mùa Thu/Lưỡi Dao: Bậc thầy ranh giới, sức cuốn hút và quyết đoán hàng đầu", "Đá Trong Băng: Lý trí lạnh lùng, niềm tin vững chắc không lay chuyển"],
    7: ["Đá Thô Sáng Bóng: Tràn đầy tự yêu, nhạy cảm nhưng ý tưởng rực rỡ", "Đá Quý Trong Lửa: Dễ bị căng thẳng, hoàn hảo chủ nghĩa và nhạy cảm", "Kim Cương Trong Tủ Kính: Giá trị tối thượng, tự hào cao và gu thẩm mỹ tinh tế", "Đá Quý Rửa Bằng Nước: Trí tuệ lạnh nhưng trong sáng, lời nói và bộ não xuất sắc"],
    8: ["Nước Nuôi Sống: Sáng tạo bùng nổ, tư duy linh hoạt giúp đỡ tất cả", "Ốc Đảo Mùa Hè: Nổi tiếng bùng nổ, người giải quyết vấn đề, tính cách sảng khoái", "Hồ Sâu Trong Xanh: Chiều sâu huyền bí, thu thập thông tin xuất sắc", "Biển Đóng Băng: Suy nghĩ quá nhiều, triết học và trí tuệ sâu sắc"],
    9: ["Mưa Xuân Mát Lành: Bậc thầy cảm nhận, hiện diện thiết yếu ở mọi nơi", "Mưa Rào Trong Hạn Hán: Ý tưởng bùng nổ, đối thủ biết thời cơ", "Sương Thu: Cảm xúc ẩm ướt, yên lặng nhưng ảnh hưởng mạnh mẽ", "Bão Tuyết Mùa Đông: Bí ẩn, nhiều ý tưởng nhưng cần sức mạnh thực thi"]
  }
};

/* ── 오행 개수 분석 다국어 ── */
const ELEM_QUANT_I18N = {
  ko: {
    '木': { key: '기획 & 추진', best: '추진력 좋은 행동파', too: '작심삼일 주의! 벌려놓고 수습 안 됨', need: '시작이 너무 어려워, 의욕 부족' },
    '火': { key: '열정 & 표현', best: '솔직 당당 매력쟁이', too: '버럭 주의! 감정 기복이 롤러코스터', need: '리액션 실종, 존재감이 좀 약할지도?' },
    '土': { key: '안정 & 신뢰', best: '든든한 중심 잡기', too: '답답함 주의! 변화를 극도로 거부함', need: '정착이 힘들어, 멘탈이 잘 흔들림' },
    '金': { key: '결단 & 원칙', best: '깔끔한 마무리 투수', too: '팩폭 주의! 칼 같은 말로 상처 줌', need: '거절 못 하는 예스맨, 마무리가 흐릿' },
    '水': { key: '지혜 & 적응', best: '눈치 빠르고 유연함', too: '생각 감옥 주의! 고민만 하다가 우울행', need: '융통성 제로, F 감성 충전이 시급함' }
  },
  ja: {
    '木': { key: '企画 & 推進', best: '推進力の良い行動派', too: '三日坊主に注意！広げすぎて収拾がつかない', need: '始めるのが難しすぎる、意欲不足' },
    '火': { key: '情熱 & 表現', best: '素直で堂々とした魅力者', too: '怒りに注意！感情の起伏が激しすぎる', need: 'リアクション不足、存在感が薄いかも？' },
    '土': { key: '安定 & 信頼', best: '頼もしい中心軸', too: 'もどかしさに注意！変化を極端に拒否する', need: '定着が難しい、メンタルが揺らぎやすい' },
    '金': { key: '決断 & 原則', best: '完璧な仕上げ役', too: '言葉의 刃에注意！鋭い言葉で傷つける', need: '断れないイエスマン、仕上げが曖昧' },
    '水': { key: '知恵 & 適応', best: '機転が利き柔軟', too: '考えすぎに注意！悩みすぎて落ち込みやすい', need: '融通が利かない、共感力が必要' }
  },
  en: {
    '木': { key: 'Planning & Drive', best: 'Action-taker with strong drive', too: 'Beware of giving up! Starting too much without finishing', need: 'Difficulty starting, lack of motivation' },
    '火': { key: 'Passion & Expression', best: 'Honest and confident charmer', too: 'Beware of temper! Emotional roller coaster', need: 'Missing reactions, presence might be weak' },
    '土': { key: 'Stability & Trust', best: 'Reliable anchor', too: 'Beware of being stuck! Extreme refusal to change', need: 'Hard to settle down, fragile mentality' },
    '金': { key: 'Decision & Principles', best: 'Clean finisher', too: 'Beware of sharp words! Hurting others with harsh facts', need: 'Yes-man who can\'t say no, blurry finishing' },
    '水': { key: 'Wisdom & Adaptability', best: 'Quick-witted and flexible', too: 'Beware of overthinking! Falling into depression from worry', need: 'Zero flexibility, needs emotional recharge' }
  },
  'zh-TW': {
    '木': { key: '企劃 & 推進', best: '推動力強的行動派', too: '注意三分鐘熱度！開了頭卻無法收尾', need: '起步太難，缺乏意欲' },
    '火': { key: '熱情 & 表達', best: '率真自信的魅力者', too: '注意暴躁！情緒起伏如雲霄飛車', need: '缺乏反應，存在感可能較弱' },
    '土': { key: '安定 & 信任', best: '可靠的定海神針', too: '注意固執！極度拒絕改變', need: '難以安頓，心態容易動搖' },
    '金': { key: '決斷 & 原則', best: '乾淨俐落的收尾者', too: '注意毒舌！用銳利的話語傷人', need: '不懂拒絕的便利貼女孩/男孩，收尾模糊' },
    '水': { key: '智慧 & 適應', best: '機敏且靈活', too: '注意胡思亂想！過度憂慮導致情緒低落', need: '缺乏彈性，急需補感情感能量' }
  },
  'zh-CN': {
    '木': { key: '策划 & 推进', best: '推动力强的行动派', too: '注意三分钟热度！开了头却无法收尾', need: '起步太难，缺乏意欲' },
    '火': { key: '热情 & 表达', best: '率真自信的魅力者', too: '注意暴躁！情绪起伏如云霄飞车', need: '缺乏反应，存在感可能较弱' },
    '土': { key: '安定 & 信任', best: '可靠的定海神针', too: '注意固执！极度拒绝改变', need: '难以安顿，心态容易动摇' },
    '金': { key: '决断 & 原则', best: '干净利落的收尾者', too: '注意毒舌！用锐利的话语伤人', need: '不懂拒绝的便利贴女孩/男孩，收尾模糊' },
    '水': { key: '智慧 & 适应', best: '机敏且灵活', too: '注意胡思乱想！过度忧虑导致情绪低落', need: '缺乏弹性，急需补充情感能量' }
  },
  vi: {
    '木': { key: 'Kế Hoạch & Thúc Đẩy', best: 'Người hành động với động lực mạnh', too: 'Cẩn thận bỏ cuộc! Bắt đầu quá nhiều mà không hoàn thành', need: 'Khó khởi đầu, thiếu động lực' },
    '火': { key: 'Đam Mê & Biểu Đạt', best: 'Người cuốn hút thành thật và tự tin', too: 'Cẩn thận nóng tính! Cảm xúc lên xuống như tàu lượn', need: 'Thiếu phản ứng, sức hiện diện có thể yếu' },
    '土': { key: 'Ổn Định & Tin Cậy', best: 'Điểm tựa đáng tin cậy', too: 'Cẩn thận bị mắc kẹt! Từ chối thay đổi cực đoan', need: 'Khó ổn định, tinh thần dễ lung lay' },
    '金': { key: 'Quyết Đoán & Nguyên Tắc', best: 'Người hoàn thành sạch sẽ', too: 'Cẩn thận lời nói sắc bén! Làm tổn thương người khác bằng sự thật', need: 'Không thể từ chối, kết thúc mờ nhạt' },
    '水': { key: 'Trí Tuệ & Thích Nghi', best: 'Nhanh nhạy và linh hoạt', too: 'Cẩn thận suy nghĩ quá nhiều! Lo lắng quá dẫn đến u sầu', need: 'Thiếu linh hoạt, cần nạp lại năng lượng cảm xúc' }
  }
};

function tSip(god,field){
  const d=SIP_I18N[LANG];
  if(d&&d[god]&&d[god][field]) return d[god][field];
  const base=SIPSUNG_DATA[god];
  return base?base[field==='why'?'mbti_why':field]:'';
}

/* ── 일주/십성 동적 번역 ── */
function locIlju(ijd, dS, dB, gender){
  if(LANG==='ko') return {title:(gender==='f'?(ijd.title_f||ijd.title):ijd.title), desc:ijd.desc};
  const sm=t('stemMeta')||I.ko.stemMeta;
  // 지지 의미 다국어
  const brDesc={
    ja:['冬の静かな水','堅い大地','春の新芽','春風','霧と変化','夏の知恵','真夏の太陽','柔らかな大地','秋の鋭さ','秋の霜','夕暮れの土','冬の深い水'],
    en:['quiet winter water','enduring earth','spring dawn','spring breeze','mist of change','summer wisdom','midsummer sun','gentle meadow','autumn edge','autumn frost','twilight earth','deep winter water'],
    'zh-TW':['冬夜靜水','堅韌大地','春天新芽','春風花園','霧中變化','夏日智慧','盛夏豔陽','溫柔草地','秋日銳利','秋霜凝結','黃昏大地','冬日深水'],
    'zh-CN':['冬夜静水','坚韧大地','春天新芽','春风花园','雾中变化','夏日智慧','盛夏艳阳','温柔草地','秋日锐利','秋霜凝结','黄昏大地','冬日深水'],
  };
  const bd=(brDesc[LANG]||brDesc.en)[dB]||'';
  const desc=sm[dS]+' + '+bd;
  // 타이틀: 기존 한국어 타이틀의 핵심 의미를 stemMeta로 대체
  const title=sm[dS];
  return {title, desc};
}
function locGod(god){
  return t('ss_'+god)||(SIPSUNG_DATA[god]?SIPSUNG_DATA[god].title:god);
}

/* ── 언어 전환 ── */
function toggleLang(){document.getElementById('lang-drop').classList.toggle('open')}
function setLang(code){
  LANG=code;
  document.getElementById('lang-drop').classList.remove('open');
  document.getElementById('lang-btn').textContent=LANG_FLAG[code];
  document.querySelectorAll('.lang-opt').forEach(el=>el.classList.remove('active'));
  document.querySelector('.lang-opt[onclick*="\''+code+'\'"]')?.classList.add('active');
  document.documentElement.lang=code==='zh-TW'?'zh-Hant':code==='zh-CN'?'zh-Hans':code;
  try{localStorage.setItem('saju_lang',code)}catch(e){}
  applyLang();
}
function applyLang(){
  // 입력 페이지 정적 텍스트 갱신
  const s=sel=>document.querySelector(sel);
  const si=id=>document.getElementById(id);
  // 로고 번역
  const logoTitle=t('title');
  if(si('logo-welcome')) si('logo-welcome').innerHTML=logoTitle+'<span class="ver-tag">v3.2.0</span>';
  if(si('logo-input'))   si('logo-input').innerHTML=logoTitle+'<span class="ver-tag">v3.2.0</span>';
  if(si('logo-result'))  si('logo-result').textContent=logoTitle;
  if(s('.hero h1')) s('.hero h1').innerHTML=t('heroH');
  if(s('.hero p')) s('.hero p').innerHTML=t('heroP');
  if(s('.info-card-title')) s('.info-card-title').textContent=t('infoTitle');
  const ips=document.querySelectorAll('.info-card > p');
  if(ips[0]) ips[0].innerHTML=t('infoP1');
  if(ips[1]) ips[1].innerHTML=t('infoP2');
  if(ips[2]) ips[2].innerHTML=t('diffNote');
  const dls=document.querySelectorAll('.diff-label');
  if(dls[0]) dls[0].textContent=t('diffNormal');
  if(dls[1]) dls[1].textContent=t('diffBirth');
  const drs=document.querySelectorAll('.diff-row span:last-child');
  if(drs[0]) drs[0].textContent=t('diffNormalT');
  if(drs[1]) drs[1].textContent=t('diffBirthT');
  // 라벨
  const labels=document.querySelectorAll('.inp-label');
  if(labels[0]) labels[0].innerHTML=t('lblBirth');
  if(labels[1]) labels[1].innerHTML=t('lblGender');
  if(si('btn-m')) si('btn-m').textContent=t('btnM');
  if(si('btn-f')) si('btn-f').textContent=t('btnF');
  // 보정질문
  if(s('.q-title')) s('.q-title').textContent=t('qTitle');
  if(s('.q-sub')) s('.q-sub').textContent=t('qSub');
  const qls=document.querySelectorAll('.q-section .inp-label');
  const qkeys=['q1L','q2L','q3L','q4L'];
  qls.forEach((el,i)=>{if(qkeys[i]) el.textContent=t(qkeys[i])});
  // 질문 카드 텍스트
  const qmap=[['q1-a','q1aT','q1aH'],['q1-b','q1bT','q1bH'],['q2-a','q2aT','q2aH'],['q2-b','q2bT','q2bH'],['q3-a','q3aT','q3aH'],['q3-b','q3bT','q3bH'],['q4-a','q4aT','q4aH'],['q4-b','q4bT','q4bH']];
  qmap.forEach(([id,tk,hk])=>{
    const el=si(id);
    if(el){const txt=el.querySelector('.q-txt');const hint=el.querySelector('.q-hint');if(txt)txt.textContent=t(tk);if(hint)hint.textContent=t(hk);}
  });
  if(si('err-msg')) si('err-msg').textContent=t('err');
  if(s('.btn-primary span:first-child')) s('.btn-primary span:first-child').textContent=t('btnStart').replace(' 🔮','');
  if(si('footer-copy')) si('footer-copy').textContent=t('copyright');
  // foot
  const fp=s('#pg-input > div:last-of-type p');
  if(fp) fp.innerHTML=t('footP');
  // 로딩
  if(s('.ld-title')) s('.ld-title').textContent=t('ldTitle');
  // 결과 면책
  const discPs=document.querySelectorAll('.disclaimer p');
  if(discPs[0]) discPs[0].innerHTML=t('disc1');
  if(discPs[1]) discPs[1].textContent=t('disc2');
  if(discPs[2]) discPs[2].textContent=t('disc3');
  if(discPs[3]) discPs[3].textContent=t('disc4');
  document.querySelectorAll('.btn-secondary[onclick="reset()"]').forEach(el=>el.textContent=t('btnAgain'));
  if(si('btn-gunghap')) si('btn-gunghap').textContent=t('btnGunghap');
  // PWA 설치 배너
  if(si('pwa-title')) si('pwa-title').textContent=t('pwaTitle');
  if(si('pwa-sub')) si('pwa-sub').textContent=t('pwaSub');
  if(si('pwa-install-btn')) si('pwa-install-btn').textContent=t('pwaBtn');
  // 결과 상단
  if(s('#pg-result .btn-share')) s('#pg-result .btn-share').textContent=t('share');
  if(s('#btn-save-img')) s('#btn-save-img').textContent=t('saveImg');
  if(s('#btn-share-app')) s('#btn-share-app').textContent=t('shareApp');
  // 푸터 링크 번역
  if(si('fl-about')) si('fl-about').textContent=t('flAbout');
  if(si('fl-terms')) si('fl-terms').textContent=t('flTerms');
  if(si('fl-privacy')) si('fl-privacy').textContent=t('flPrivacy');
  if(si('fl-contact')) si('fl-contact').textContent=t('flContact');
  // 개인정보 고지문 번역
  if(si('privacy-notice')) si('privacy-notice').textContent=t('privacyNotice');
  // 생년월일 세그먼트 레이블
  if(si('seg-yy')) si('seg-yy').textContent=t('segYY');
  if(si('seg-mm')) si('seg-mm').textContent=t('segMM');
  if(si('seg-dd')) si('seg-dd').textContent=t('segDD');
  // 예시 칩 성별 표기
  if(si('ex-desc-1')) si('ex-desc-1').textContent=t('exDesc1');
  if(si('ex-desc-2')) si('ex-desc-2').textContent=t('exDesc2');
  if(si('ex-desc-3')) si('ex-desc-3').textContent=t('exDesc3');
  // 설정 모달 번역
  if(si('settings-title')) si('settings-title').textContent=t('settingsTitle');
  if(si('settings-api-desc')) si('settings-api-desc').textContent=t('settingsApiDesc');
  if(si('settings-save-btn')) si('settings-save-btn').textContent=t('settingsSave');
  if(si('settings-close-btn')) si('settings-close-btn').textContent=t('settingsClose');
  // 서비스 특징 섹션 번역
  const featEl=si('feat-section');
  if(featEl){
    const F={
      ko:{h:'🌟 생일MBTI는 이렇게 달라요',
        f:[{e:'🔮',t:'사주 원국 기반 타고난 기질',d:'일주(日柱)·월주(月柱)·년주(年柱)의 에너지를 분석해 타고난 성격의 뼈대를 찾아드려요'},
           {e:'🧬',t:'MBTI 4축 과학적 매핑',d:'십성(十星)·오행(五行)을 E/I·S/N·T/F·J/P 4축으로 변환해 현대 심리학 언어로 표현해요'},
           {e:'🔒',t:'완전 로컬 처리 · 개인정보 안전',d:'입력한 생년월일은 서버에 저장되지 않아요. 모든 분석은 기기 안에서만 이루어집니다'},
           {e:'🌏',t:'6개 언어 지원',d:'한국어·日本語·English·繁體中文·简体中文·Tiếng Việt — 전 세계 누구나 자신의 언어로 이용할 수 있어요'}]},
      ja:{h:'🌟 誕生日MBTIだからわかること',
        f:[{e:'🔮',t:'四柱推命で読む、生まれながらの気質',d:'日柱・月柱・年柱のエネルギーを読み解き、あなたが生まれながらに持つ性格の芯を明らかにします'},
           {e:'🧬',t:'十星×五行をMBTI 4軸へ科学的に変換',d:'東洋の叡智である十神・五行を、E/I・S/N・T/F・J/Pの4軸に変換。現代の心理学言語で表現します'},
           {e:'🔒',t:'完全ローカル処理・プライバシー完全保護',d:'入力した生年月日はサーバーに一切保存されません。分析はすべてあなたのデバイス内だけで完結します'},
           {e:'🌏',t:'6言語に対応',d:'日本語・한국어・English・繁體中文・简体中文・Tiếng Việt — 世界中の方が母国語でご利用いただけます'}]},
      en:{h:'🌟 Why Birthday MBTI Is Different',
        f:[{e:'🔮',t:'Your Personality Blueprint, Written at Birth',d:'Reads the Day, Month & Year Pillar energies to uncover the core personality you were born with — not shaped by environment'},
           {e:'🧬',t:'Ancient Wisdom, Mapped to Modern MBTI',d:'Translates Ten Gods & Five Elements from Eastern astrology into the E/I · S/N · T/F · J/P axes of modern psychology'},
           {e:'🔒',t:'100% Private — Runs on Your Device',d:'Your birthdate never leaves your device. All analysis runs locally with no accounts, no servers, no tracking'},
           {e:'🌏',t:'Available in 6 Languages',d:'Korean · Japanese · English · Traditional Chinese · Simplified Chinese · Vietnamese — everyone can experience it in their own language'}]},
      'zh-TW':{h:'🌟 生日MBTI有什麼不同？',
        f:[{e:'🔮',t:'從四柱原局讀出你的天生氣質',d:'解析日柱、月柱、年柱蘊藏的能量，揭示你與生俱來的性格骨架——而非後天環境塑造的那個你'},
           {e:'🧬',t:'十神×五行，精準轉化為MBTI四軸',d:'將東方命理的十神、五行轉化為E/I·S/N·T/F·J/P四個維度，以現代心理學語言精準呈現'},
           {e:'🔒',t:'完全本地運算，隱私零外洩',d:'您輸入的生日完全不會上傳至伺服器，所有分析皆在您的裝置本地完成，安全無虞'},
           {e:'🌏',t:'支援6種語言',d:'繁體中文・简体中文・韓語・日語・English・Tiếng Việt — 全球用戶皆可用母語體驗'}]},
      'zh-CN':{h:'🌟 生日MBTI有什么不同？',
        f:[{e:'🔮',t:'从四柱原局读出你的天生气质',d:'解析日柱、月柱、年柱蕴含的能量，揭示你与生俱来的性格骨架——而非后天环境塑造的那个你'},
           {e:'🧬',t:'十神×五行，精准转化为MBTI四轴',d:'将东方命理的十神、五行转化为E/I·S/N·T/F·J/P四个维度，以现代心理学语言精准呈现'},
           {e:'🔒',t:'本地运算，隐私零泄露',d:'您输入的生日不会上传至服务器，所有分析均在您的设备本地完成，安全无忧'},
           {e:'🌏',t:'支持6种语言',d:'简体中文・繁體中文・韩语・日语・English・Tiếng Việt — 全球用户均可用母语体验'}]},
      vi:{h:'🌟 Birth MBTI Khác Biệt Như Thế Nào?',
        f:[{e:'🔮',t:'Khí Chất Bẩm Sinh Từ Tứ Trụ',d:'Phân tích năng lượng Nhật Trụ, Nguyệt Trụ, Niên Trụ để tìm ra bộ khung tính cách bạn sinh ra đã có — không phải do môi trường tạo nên'},
           {e:'🧬',t:'Thập Thần × Ngũ Hành → 4 Trục MBTI',d:'Chuyển đổi Thập Thần và Ngũ Hành từ tử vi phương Đông thành 4 trục E/I · S/N · T/F · J/P của tâm lý học hiện đại'},
           {e:'🔒',t:'Xử Lý Cục Bộ · Bảo Mật Tuyệt Đối',d:'Ngày sinh bạn nhập không bao giờ được lưu trên máy chủ. Toàn bộ phân tích chỉ diễn ra trên thiết bị của bạn'},
           {e:'🌏',t:'Hỗ Trợ 6 Ngôn Ngữ',d:'Tiếng Việt · 한국어 · 日本語 · English · 繁體中文 · 简体中文 — Ai cũng có thể trải nghiệm bằng ngôn ngữ của mình'}]}
    };
    const fd=F[LANG]||F['ko'];
    featEl.innerHTML=`<p style="font-size:13px;font-weight:700;color:var(--g1);margin-bottom:14px;text-align:center">${fd.h}</p><div style="display:grid;gap:10px">${fd.f.map(r=>`<div style="display:flex;gap:10px;align-items:flex-start"><span style="font-size:18px;flex-shrink:0">${r.e}</span><div><p style="font-size:12px;font-weight:700;color:var(--ink);margin:0 0 2px">${r.t}</p><p style="font-size:11px;color:var(--g2);margin:0;line-height:1.6">${r.d}</p></div></div>`).join('')}</div>`;
  }
}
// 초기 언어 로드 (URL ?lang= > localStorage > 브라우저 언어 자동 감지 순)
try{
  const urlLang=new URLSearchParams(location.search).get('lang');
  if(urlLang&&LANG_FLAG[urlLang]){
    LANG=urlLang;try{localStorage.setItem('saju_lang',urlLang)}catch(e){}
  } else {
    const saved=localStorage.getItem('saju_lang');
    if(saved&&LANG_FLAG[saved]){
      LANG=saved;
    } else {
      // 저장된 설정이 없을 때만 브라우저 언어 감지
      const bl=(navigator.language||navigator.userLanguage||'').toLowerCase();
      if(bl.startsWith('vi')){LANG='vi';}
      else if(bl.startsWith('ja')){LANG='ja';}
      else if(bl.startsWith('zh-tw')||bl==='zh-hant'){LANG='zh-TW';}
      else if(bl.startsWith('zh')){LANG='zh-CN';}
      else if(bl.startsWith('en')){LANG='en';}
    }
  }
}catch(e){}
const _initApp=()=>{
  if(LANG!=='ko')setLang(LANG);
  document.addEventListener('click',e=>{if(!e.target.closest('.lang-sel'))document.getElementById('lang-drop')?.classList.remove('open')});
  checkReturningUser();
};
// module 스크립트는 deferred라 DOMContentLoaded 이후에 실행될 수 있으므로 readyState로 분기
if(document.readyState==='loading'){
  document.addEventListener('DOMContentLoaded',_initApp);
}else{
  _initApp();
}

/* ╔══════════════════════════════════════════╗
   ║  사주 계산 엔진 (천간·지지·절기)         ║
   ╚══════════════════════════════════════════╝ */
const SE=['甲','乙','丙','丁','戊','己','庚','辛','壬','癸'];
const BE=['子','丑','寅','卯','辰','巳','午','未','申','酉','戌','亥'];
const SH=['갑','을','병','정','무','기','경','신','임','계'];
const BH=['자','축','인','묘','진','사','오','미','신','유','술','해'];
const SE_ELEM=[0,0,1,1,2,2,3,3,4,4]; // 木0 火1 土2 金3 水4
const BE_ELEM=[4,2,0,0,2,1,1,2,3,3,2,4];
const ELEM_NAME=['木','火','土','金','水'];
const BRANCH_BONGI=[9,5,0,1,4,2,3,5,6,7,4,8];
/* ── 사주 에너지 코드 다국어 텍스트 ── */
const SMS_I18N = {
  ko: ['큰 나무 / 우뚝 선 거목의 성장 에너지','화초·넝쿨 / 부드럽게 뻗는 유연함','태양 / 세상을 비추는 강렬한 빛','촛불·별빛 / 꺼지지 않는 내면의 불꽃','큰 산·바위 / 흔들리지 않는 묵직한 대지','논밭·대지 / 만물을 품어 키우는 땅','원석·도끼 / 단단하고 예리한 금 기운','보석·칼날 / 정제된 빛의 섬세함','큰 강·바다 / 깊고 넓은 물의 힘','빗물·이슬 / 고요히 스미는 지혜의 물'],
  ja: ['大樹 / 高くそびえる巨木の成長エネルギー','草花・蔦 / しなやかに伸びる柔軟性','太陽 / 世界を照らす強烈な光','ろうそく・星明かり / 消えることのない内面の炎','大きな山・岩 / 揺らぐことのない重厚な大地','田畑・大地 / 万物を包み育てる土','原석・斧 / 硬く鋭い金の気運','宝石・刃 / 精製された光の繊細さ','大河・海 / 深く広い水の力','雨水・露 / 静かに染み込む知恵の水'],
  en: ['Tall Tree / Growth energy of a towering tree','Flowers & Vines / Flexibility that spreads softly','Sun / Intense light illuminating the world','Candle & Starlight / Inner flame that never goes out','Great Mountain & Rock / Solid earth that never wavers','Fields & Earth / Land that embraces and nurtures all things','Raw Stone & Axe / Hard and sharp metal energy','Gem & Blade / Meticulous brilliance of refined light','Great River & Sea / Power of deep and wide water','Rain & Dew / Water of wisdom that quietly permeates'],
  'zh-TW': ['大樹 / 頂天立地的巨木成長能量','花草·藤蔓 / 柔韌延伸的生命力','太陽 / 照亮世界的強烈光芒','燭光·星光 / 永不熄滅的內在火花','大山·岩石 / 穩重而不動搖的大地','田野·大地 / 孕育萬物的土壤','原石·斧頭 / 堅硬銳利的金之氣','寶石·刃 / 精煉之光的細膩','大江·大海 / 深邃寬廣的水之力','雨水·露水 / 靜靜滲透的智慧之水'],
  'zh-CN': ['大树 / 顶天立地的巨木成长能量','花草·藤蔓 / 柔韧延伸的生命力','太阳 / 照亮世界的强烈光芒','烛光·星光 / 永不熄灭的内在火花','大山·岩石 / 稳重而不动摇的大地','田野·大地 / 孕育万物的土壤','原石·斧头 / 坚硬锐利的金之气','宝石·刃 / 精炼之光的细腻','大江·大海 / 深邃宽广的水之力','雨水·露水 / 静静渗透的智慧之水'],
  vi: ['Cây Lớn / Năng lượng tăng trưởng của cây vươn cao','Hoa & Dây Leo / Sự linh hoạt lan tỏa nhẹ nhàng','Mặt Trời / Ánh sáng mãnh liệt soi sáng thế giới','Nến & Ánh Sao / Ngọn lửa nội tâm không bao giờ tắt','Núi Lớn & Đá / Đất đai vững chắc không bao giờ lung lay','Ruộng Đồng & Đất / Đất ôm ấp và nuôi dưỡng vạn vật','Đá Thô & Rìu / Năng lượng kim loại cứng rắn và sắc bén','Ngọc Quý & Lưỡi Dao / Sự tinh tế rực rỡ của ánh sáng tinh luyện','Sông Lớn & Biển / Sức mạnh của nước sâu và rộng','Mưa & Sương / Nước trí tuệ thấm vào êm đềm']
};
const BMS_I18N = {
  ko: ['겨울 밤물 / 깊은 고요','얼어붙은 대지 / 인내','봄 새벽 숲 / 힘찬 시작','봄바람·꽃밭 / 개화','봄 안개·용 / 변화무쌍','여름 불씨 / 지혜','여름 태양 / 활활','여름 대지 / 따뜻한 들판','가을 쇠 / 결단','가을 서리 / 정제','황혼 황토 / 충직','겨울 깊은 물 / 풍요'],
  ja: ['冬の夜の水 / 深い静寂','凍てついた大地 / 忍耐','春の暁の森 / 力強い始まり','春風・花畑 / 開花','春の霧・龍 / 変幻自在','夏の火種 / 知恵','夏の太陽 / 燃え上がる','夏の土地 / 温かい野原','秋の鉄 / 決断','秋の霜 / 精製','黄昏の黄土 / 忠実','冬の深い水 / 豊かさ'],
  en: ['Winter night water / Deep silence','Frozen earth / Patience','Spring dawn forest / Powerful start','Spring breeze & Flower field / Blooming','Spring mist & Dragon / Ever-changing','Summer spark / Wisdom','Summer sun / Blazing','Summer earth / Warm field','Autumn metal / Decision','Autumn frost / Refinement','Twilight loess / Loyalty','Deep winter water / Abundance'],
  'zh-TW': ['冬夜之水 / 深邃靜謐','凍結的大地 / 忍耐','春曉之森 / 充滿力量的開始','春風·花田 / 開花','春霧·龍 / 變化萬千','夏日火種 / 智慧','夏日太陽 / 烈火燃燒','夏日大地 / 溫暖的田野','秋日之金 / 決斷','秋霜 / 精煉','黃昏之土 / 忠誠','冬日深水 / 豐饒'],
  'zh-CN': ['冬夜之水 / 深邃静谧','冻结的大地 / 忍耐','春晓之森 / 充满力量的开始','春风·田 / 开花','春雾·龙 / 变化万千','夏日火种 / 智慧','夏日太阳 / 烈火燃烧','夏日大地 / 温暖的田野','秋日之金 / 决断','秋霜 / 精炼','黄昏之土 / 忠诚','冬日深水 / 丰饶'],
  vi: ['Nước đêm đông / Tĩnh lặng sâu thẳm','Đất đóng băng / Kiên nhẫn','Rừng bình minh xuân / Khởi đầu mạnh mẽ','Gió xuân & Đồng hoa / Nở rộ','Sương xuân & Rồng / Biến đổi vô thường','Tia lửa hạ / Trí tuệ','Mặt trời hạ / Rực lửa','Đất hạ / Đồng cỏ ấm áp','Kim thu / Quyết đoán','Sương thu / Tinh luyện','Hoàng thổ hoàng hôn / Trung thành','Nước đông sâu / Phong phú']
};

const JG=[[1,6],[2,4],[3,6],[4,5],[5,6],[6,6],[7,7],[8,7],[9,8],[10,8],[11,7],[12,7]];
const JG_BI=[11,0,1,2,3,4,5,6,7,8,9,10];
const JG_BR=[1,2,3,4,5,6,7,8,9,10,11,0];

function parseYear(yy){return yy<=26?2000+yy:1900+yy}
function getSajuYear(y,m,d){return(m<2||(m===2&&d<4))?y-1:y}

function getMonthPillar(m,d){
  let bi=10,br=0;
  for(let i=0;i<JG.length;i++){
    const[jm,jd]=JG[i];
    if(m>jm||(m===jm&&d>=jd)){bi=JG_BI[i];br=JG_BR[i]}
  }
  return{bi,br};
}

function getNatal(year,month,day){
  const sy=getSajuYear(year,month,day);
  const yS=((sy-4)%10+10)%10, yB=((sy-4)%12+12)%12;
  const jm=getMonthPillar(month,day);
  const mBase=[2,4,6,8,0,2,4,6,8,0];
  const mS=(mBase[yS]+jm.bi)%10, mB=jm.br;
  const ref=new Date(1900,0,1);
  const days=Math.round((new Date(year,month-1,day)-ref)/86400000);
  const dS=((days%10)+10)%10, dB=((10+(days%12))%12+12)%12;
  return{yS,yB,mS,mB,dS,dB,sy};
}

function computeDaewoon(year,month,day,gender){
  const{yS,mS,mB}=getNatal(year,month,day);
  const forward=((yS%2===0)&&(gender==='m'))||(!(yS%2===0)&&(gender==='f'));
  const birthDate=new Date(year,month-1,day);
  let startAge=2;
  try{
    if(forward){
      let nj=null;
      for(let i=0;i<JG.length;i++){const[jm,jd]=JG[i];const jD=new Date(year,jm-1,jd);if(jD>birthDate){nj=jD;break;}}
      if(!nj)nj=new Date(year+1,1,4);
      startAge=Math.max(1,Math.round(Math.round((nj-birthDate)/86400000)/3));
    }else{
      let pj=null;
      for(let i=JG.length-1;i>=0;i--){const[jm,jd]=JG[i];const jD=new Date(year,jm-1,jd);if(jD<birthDate){pj=jD;break;}}
      if(!pj)pj=new Date(year-1,11,7);
      startAge=Math.max(1,Math.round(Math.round((birthDate-pj)/86400000)/3));
    }
  }catch(e){startAge=2;}
  const CY=new Date().getFullYear();
  const currentAge=CY-year;
  const dwIdx=Math.max(0,Math.floor((currentAge-startAge)/10));
  const dwStartAge=startAge+dwIdx*10,dwEndAge=dwStartAge+9;
  const dir=forward?1:-1;
  const dwS=((mS+dir*(dwIdx+1))%10+10)%10;
  const dwB=((mB+dir*(dwIdx+1))%12+12)%12;
  const progress=Math.min(100,Math.max(0,Math.round((currentAge-dwStartAge)/10*100)));
  return{stemIdx:dwS,branchIdx:dwB,stemCh:SE[dwS],branchCh:BE[dwB],stemHan:SH[dwS],branchHan:BH[dwB],
    stemElem:ELEM_NAME[SE_ELEM[dwS]],branchElem:ELEM_NAME[BE_ELEM[dwB]],
    startAge:dwStartAge,endAge:dwEndAge,currentAge,progress,forward,nowYear:CY};
}

/* ╔══════════════════════════════════════════╗
   ║  십성(十神) 계산 엔진                     ║
   ╚══════════════════════════════════════════╝ */
function getTenGod(dayStemIdx,targetStemIdx){
  const me=Math.floor(dayStemIdx/2), tgt=Math.floor(targetStemIdx/2);
  const sameYY=(dayStemIdx%2)===(targetStemIdx%2);
  if(me===tgt) return sameYY?'비견':'겁재';
  if((me+1)%5===tgt) return sameYY?'식신':'상관';
  if((me+2)%5===tgt) return sameYY?'편재':'정재';
  if((me+3)%5===tgt) return sameYY?'편관':'정관';
  if((me+4)%5===tgt) return sameYY?'편인':'정인';
  return '비견';
}

// 월지 본기의 십성 = 월주 격국의 핵심
function getMonthTenGod(natal){
  const bongi=BRANCH_BONGI[natal.mB];
  return getTenGod(natal.dS, bongi);
}

// 월간의 십성
function getMonthStemTenGod(natal){
  return getTenGod(natal.dS, natal.mS);
}

/* 십성 상세 정보 + MBTI 기여도 */
const SIPSUNG_DATA={
  '비견':{emoji:'⚡',title:'독립 전사',sub:'나와 같은 에너지 — 주체적이고 자기 확신이 강한 기질',
    E:6,N:0,T:4,J:-2,
    detail:'"또 다른 나"가 에너지로 존재하는 거야. 독립심이 강하고 남의 간섭을 안 좋아해. 내 방식대로 하고 싶어하는 편이고, 자존심도 세. 하지만 그만큼 <strong>스스로를 믿는 힘</strong>이 있어서 어디서든 자기 자리를 만들어내.',
    mbti_why:'자기주장이 명확하고 독립적 → 약간의 외향성, 논리적 판단 경향'},
  '겁재':{emoji:'🔥',title:'도전하는 승부사',sub:'경쟁과 사교의 에너지 — 적극적이고 붙임성 있는 기질',
    E:10,N:-2,T:2,J:-5,
    detail:'사교적이고 적극적이지만 속에 경쟁심이 숨어있어. 친구도 많고 활발한데, "내가 더 잘할 수 있는데" 하는 마음이 올라올 때가 있어. <strong>도전정신과 승부욕</strong>이 강해서 뭐든 일단 부딪혀보는 타입.',
    mbti_why:'사교적이고 활동적 → 강한 외향성, 즉흥적 변칙 행동 선호'},
  '식신':{emoji:'🌸',title:'감성 크리에이터',sub:'창의와 여유의 에너지 — 예술적 감각이 넘치는 기질',
    E:2,N:8,T:-8,J:-6,
    detail:'창의적이고 여유로운 에너지. 먹는 거 좋아하고, 예술적 감각도 있어. 사람들한테 <strong>편안한 느낌</strong>을 주고, 뭔가를 표현하는 데 재능이 있어. 삶을 즐기면서도 깊이 있는 사고를 하는 매력적인 기질.',
    mbti_why:'창의적 감성과 직관 → 감정 중심의 따뜻한 판단, 자유로운 흐름 선호'},
  '상관':{emoji:'🎨',title:'규칙을 깨는 천재',sub:'표현과 반항의 에너지 — 독창적이고 파격적인 기질',
    E:8,N:12,T:-4,J:-12,
    detail:'"규칙? 나한테는 별로~" 이런 느낌의 에너지. 창의적이고 표현력이 뛰어나서 예술이나 글쓰기에 재능이 있어. <strong>기존의 틀을 깨는 걸 좋아하고</strong>, 남들이 못 보는 것을 포착하는 눈이 있어. 자유로운 영혼!',
    mbti_why:'파격적 사고와 강한 표현력 → 직관 우세, 즉흥적 인식 극대화'},
  '편재':{emoji:'🌍',title:'만능 엔터테이너',sub:'활동과 다재의 에너지 — 사교적이고 현실 감각이 뛰어난 기질',
    E:12,N:-6,T:4,J:-4,
    detail:'사교적이고 활발해. 새로운 사람 만나는 거 좋아하고, 여러 가지를 동시에 잘하는 멀티태스커. <strong>사업 감각도 있고 적응력도 뛰어나</strong>. 어디서든 분위기 메이커 역할을 자연스럽게 해.',
    mbti_why:'높은 사교성과 현실 파악력 → 강한 외향성, 감각적·현실적 판단'},
  '정재':{emoji:'💎',title:'꾸준한 성장러',sub:'안정과 계획의 에너지 — 성실하고 믿음직한 기질',
    E:-4,N:-8,T:4,J:12,
    detail:'꼼꼼하고 계획적인 에너지. 안정적인 걸 좋아하고, 한 분야에서 꾸준히 실력을 쌓아가는 타입. <strong>성실하고 믿음직해서</strong> "이 사람한테 맡기면 확실하다" 이런 평가를 받아.',
    mbti_why:'꼼꼼한 계획성과 안정 추구 → 감각적·데이터 기반, 체계적 판단'},
  '편관':{emoji:'⚔️',title:'카리스마 리더',sub:'도전과 결단의 에너지 — 강한 추진력의 리더 기질',
    E:6,N:-2,T:12,J:8,
    detail:'이름은 무섭지만 실은 <strong>도전정신과 결단력</strong>의 에너지야. 리더십이 있고, 어려운 상황에서 빛을 발해. 압박감 속에서도 의연하게 버티는 강한 정신력의 소유자. 위기에 강한 타입.',
    mbti_why:'강한 결단력과 원칙 → 논리 중심의 냉철한 판단, 체계적 실행'},
  '정관':{emoji:'🏛️',title:'원칙의 수호자',sub:'책임과 체계의 에너지 — 신뢰감 있고 정석을 따르는 기질',
    E:-2,N:-4,T:8,J:12,
    detail:'책임감이 강하고 규칙을 잘 지켜. 조직에서 인정받는 타입. <strong>체계적이고 원칙적</strong>이어서 어떤 일이든 정석대로 잘 해내. "든든한 사람" 하면 딱 이 에너지야.',
    mbti_why:'강한 책임감과 규율 → 논리·체계 중심의 판단, 계획적 실행'},
  '편인':{emoji:'🔮',title:'신비로운 탐구자',sub:'직관과 독창의 에너지 — 남다른 시각을 가진 기질',
    E:-8,N:12,T:4,J:-6,
    detail:'직관력이 뛰어나고 독창적인 생각을 하는 에너지. <strong>남들이 안 가는 길을 가는 타입</strong>. 관심사가 깊고 독특해. 학문이나 예술, 철학 같은 분야에서 빛을 발하는 기질.',
    mbti_why:'강한 직관과 독창성 → 내면 탐구형 에너지, 영감에 따른 유연한 행동'},
  '정인':{emoji:'📚',title:'지혜로운 감싸안기',sub:'학습과 포용의 에너지 — 지적이고 따뜻한 기질',
    E:-6,N:8,T:2,J:6,
    detail:'학습능력이 뛰어나고 지적 호기심이 강한 에너지. <strong>사람들을 이해하고 감싸주는 따뜻함</strong>도 있어. 교육이나 연구 분야에 재능이 있고, 깊이 있는 사고를 하는 편.',
    mbti_why:'학구적이고 포용적 → 내면 집중형 에너지, 직관과 판단의 균형'}
};

/* ╔══════════════════════════════════════════╗
   ║  60갑자 일주론 테이블 (성별 차이 포함)    ║
   ╚══════════════════════════════════════════╝ */
const ILJU_60={
  // ── 甲 (양목: 큰 나무, 리더, 직진) ──
  '甲子':{E:52,N:65,T:60,J:62,title:'지혜로운 선구자',title_f:'통찰의 전략가',desc:'겨울 강물 위 큰 나무. 깊은 통찰과 조용한 리더십.'},
  '甲寅':{E:70,N:62,T:65,J:58,title:'불굴의 개척자',title_f:'당당한 선봉장',desc:'숲속 가장 큰 나무. 강한 추진력으로 길을 만들어가.'},
  '甲辰':{E:48,N:68,T:62,J:48,title:'탐구하는 전략가',title_f:'꿈꾸는 기획자',desc:'봄 땅을 뚫는 새싹. 독창적 아이디어로 깊이 파고들어.'},
  '甲午':{E:68,N:58,T:45,J:52,title:'따뜻한 리더',title_f:'감성 리더',desc:'여름 햇살 아래 나무. 열정과 공감으로 사람을 이끌어.'},
  '甲申':{E:62,N:55,T:65,J:65,title:'전략적 실행가',title_f:'날카로운 기획자',desc:'서릿발 맞은 단단한 나무. 체계적 실행이 강점.'},
  '甲戌':{E:50,N:65,T:62,J:60,title:'깊은 탐험가',title_f:'본질을 꿰뚫는 눈',desc:'가을 산의 고목. 신중하고 깊이 있는 통찰.'},
  // ── 乙 (음목: 화초, 유연, 공감) ──
  '乙丑':{E:38,N:45,T:40,J:65,title:'성실한 조력자',title_f:'묵묵한 케어러',desc:'겨울 땅의 풀. 신뢰를 쌓고 사람을 돌봐.'},
  '乙卯':{E:42,N:60,T:35,J:38,title:'감성적 예술가',title_f:'감성 표현의 달인',desc:'봄 숲의 넝쿨. 섬세한 감수성으로 아름다움을 표현.'},
  '乙巳':{E:45,N:58,T:42,J:45,title:'직관적 탐색자',title_f:'숨겨진 걸 찾는 눈',desc:'여름 덩굴. 날카로운 직관으로 숨겨진 것을 발견.'},
  '乙未':{E:48,N:52,T:38,J:45,title:'따뜻한 공감자',title_f:'다정한 감싸안기',desc:'초여름 부드러운 풀. 따뜻한 마음으로 주변을 감싸.'},
  '乙酉':{E:40,N:42,T:45,J:60,title:'완벽한 예술가',title_f:'섬세한 심미안',desc:'가을 이슬 맺힌 잎새. 섬세하고 완벽한 미적 감각.'},
  '乙亥':{E:35,N:65,T:38,J:42,title:'깊은 이상주의자',title_f:'꿈꾸는 감성인',desc:'겨울 샘물가의 풀. 깊은 공감과 비전.'},
  // ── 丙 (양화: 태양, 열정, 외향) ──
  '丙子':{E:65,N:62,T:45,J:42,title:'창의적 탐험가',title_f:'번뜩이는 아이디어꾼',desc:'겨울밤 횃불. 번뜩이는 아이디어와 유쾌한 에너지.'},
  '丙寅':{E:72,N:58,T:42,J:55,title:'열정적 리더',title_f:'따뜻한 카리스마',desc:'봄 숲의 태양. 따뜻한 카리스마로 사람을 모아.'},
  '丙辰':{E:65,N:68,T:52,J:42,title:'혁신적 아이디어맨',title_f:'새로운 가능성의 눈',desc:'봄비 내리는 밝은 날. 창의적 발상의 가능성.'},
  '丙午':{E:75,N:55,T:42,J:50,title:'불꽃 같은 표현자',title_f:'열정의 아이콘',desc:'한여름 정오의 태양. 강렬한 열정과 존재감.'},
  '丙申':{E:68,N:65,T:55,J:40,title:'재치 있는 혁신가',title_f:'스마트 엔터테이너',desc:'가을 하늘의 빛. 빠른 두뇌와 넘치는 에너지.'},
  '丙戌':{E:65,N:60,T:48,J:45,title:'따뜻한 모험가',title_f:'호기심 가득한 탐험가',desc:'가을 저녁놀. 따뜻함과 호기심으로 새 길을 개척.'},
  // ── 丁 (음화: 촛불, 감성, 직관) ──
  '丁丑':{E:38,N:60,T:38,J:62,title:'깊은 공감자',title_f:'조용한 빛의 위로',desc:'겨울밤 촛불. 깊은 공감으로 조용히 빛을 발해.'},
  '丁卯':{E:42,N:65,T:32,J:38,title:'예술적 몽상가',title_f:'상상의 세계를 그리는',desc:'봄밤의 따뜻한 불빛. 섬세한 감성과 창의적 상상력.'},
  '丁巳':{E:44,N:62,T:48,J:44,title:'통찰력 있는 관찰자',title_f:'본질을 읽는 눈',desc:'여름 등불. 사람과 상황의 본질을 파악하는 직관.'},
  '丁未':{E:46,N:55,T:35,J:44,title:'따뜻한 감성인',title_f:'마음을 움직이는',desc:'여름 저녁의 작은 불꽃. 사람 마음을 움직이는 감성.'},
  '丁酉':{E:40,N:48,T:42,J:58,title:'섬세한 완벽주의자',title_f:'빛나는 디테일러',desc:'가을밤 촛불. 예리한 감각과 완벽주의.'},
  '丁亥':{E:35,N:68,T:36,J:40,title:'신비로운 이상가',title_f:'깊은 직관의 소유자',desc:'겨울 밤바다의 등대불. 깊은 직관과 이상.'},
  // ── 戊 (양토: 큰 산, 안정, 신뢰) ──
  '戊子':{E:42,N:45,T:60,J:68,title:'신뢰받는 관리자',title_f:'든든한 울타리',desc:'겨울 산. 깊은 신뢰와 체계로 안정감을 줘.'},
  '戊寅':{E:65,N:50,T:65,J:62,title:'책임감 있는 리더',title_f:'묵직한 리더십',desc:'봄 산의 기상. 강한 책임감과 추진력.'},
  '戊辰':{E:48,N:52,T:60,J:62,title:'꼼꼼한 전략가',title_f:'치밀한 플래너',desc:'봄비 먹은 산. 치밀한 계획과 안정적 실행.'},
  '戊午':{E:68,N:48,T:55,J:48,title:'활동적인 현실주의자',title_f:'에너지 넘치는 행동파',desc:'여름 산. 강한 에너지와 현실 감각.'},
  '戊申':{E:62,N:55,T:62,J:45,title:'영리한 행동파',title_f:'스마트 실행가',desc:'가을 산 바위. 현실적 판단과 빠른 행동력.'},
  '戊戌':{E:48,N:48,T:62,J:65,title:'원칙 있는 수호자',title_f:'흔들리지 않는 신뢰',desc:'늦가을 산. 강한 원칙과 묵묵한 수호.'},
  // ── 己 (음토: 논밭, 배려, 수용) ──
  '己丑':{E:38,N:40,T:38,J:65,title:'성실한 보호자',title_f:'조용한 돌봄의 달인',desc:'겨울 논밭. 묵묵한 성실함으로 주변을 돌봐.'},
  '己卯':{E:44,N:55,T:35,J:40,title:'섬세한 중재자',title_f:'갈등을 녹이는 부드러움',desc:'봄 정원. 공감으로 갈등을 녹여내.'},
  '己巳':{E:46,N:52,T:42,J:46,title:'따뜻한 조력자',title_f:'직관적 케어러',desc:'여름 들판. 직관적 따뜻함으로 편안함을 줘.'},
  '己未':{E:44,N:44,T:36,J:50,title:'온화한 공감자',title_f:'넉넉한 포용력',desc:'여름 풀밭. 넉넉한 수용력으로 누구든 편안하게 품어.'},
  '己酉':{E:40,N:42,T:48,J:60,title:'꼼꼼한 배려가',title_f:'세심한 관찰의 눈',desc:'가을 정원. 섬세한 관찰력으로 사람을 챙겨.'},
  '己亥':{E:36,N:62,T:38,J:44,title:'깊은 이타주의자',title_f:'헌신의 아이콘',desc:'겨울 샘터. 깊은 공감과 헌신으로 의지가 돼.'},
  // ── 庚 (양금: 원석, 결단, 원칙) ──
  '庚子':{E:62,N:50,T:68,J:65,title:'단호한 실행가',title_f:'냉정한 판단의 달인',desc:'겨울 칼날. 명확한 판단과 강한 실행력.'},
  '庚寅':{E:72,N:55,T:68,J:58,title:'카리스마 리더',title_f:'강한 개척자',desc:'봄의 단단한 도끼. 강한 의지로 앞길을 개척.'},
  '庚辰':{E:50,N:60,T:68,J:62,title:'전략적 완벽주의자',title_f:'치밀한 전략가',desc:'봄 암반. 치밀한 전략과 높은 기준.'},
  '庚午':{E:68,N:50,T:62,J:55,title:'열정적 행동가',title_f:'불꽃 같은 추진력',desc:'여름 쇠. 달아오른 열정과 강한 의지.'},
  '庚申':{E:65,N:52,T:68,J:45,title:'직선적 승부사',title_f:'빠른 결단의 달인',desc:'가을 서릿발. 직선적이고 빠른 판단.'},
  '庚戌':{E:48,N:50,T:65,J:65,title:'신중한 원칙가',title_f:'묵직한 원칙의 힘',desc:'가을 산의 바위. 신중한 판단과 강한 원칙.'},
  // ── 辛 (음금: 보석, 완벽, 섬세) ──
  '辛丑':{E:36,N:42,T:48,J:68,title:'완벽한 전문가',title_f:'꼼꼼한 프로페셔널',desc:'겨울 보석. 꼼꼼한 완벽주의와 높은 전문성.'},
  '辛卯':{E:42,N:52,T:38,J:42,title:'예술적 감각파',title_f:'미적 감각의 달인',desc:'봄 이슬. 섬세한 미적 감각과 창의성.'},
  '辛巳':{E:44,N:58,T:50,J:44,title:'날카로운 분석가',title_f:'예리한 통찰가',desc:'여름 보석의 빛. 예리한 분석력과 직관.'},
  '辛未':{E:55,N:48,T:38,J:46,title:'따뜻한 완벽주의자',title_f:'감성과 기준을 겸비한',desc:'여름 끝의 보석. 따뜻한 배려와 높은 기준.'},
  '辛酉':{E:38,N:42,T:55,J:68,title:'정밀한 완성가',title_f:'완벽한 마무리의 힘',desc:'가을 순금. 완벽한 정밀함과 날카로운 기준.'},
  '辛亥':{E:38,N:65,T:40,J:38,title:'자유로운 감성가',title_f:'자유영혼 아티스트',desc:'겨울 샘의 보석. 자유로운 영혼과 깊은 감성.'},
  // ── 壬 (양수: 큰 강, 지혜, 포용) ──
  '壬子':{E:42,N:68,T:65,J:62,title:'깊은 전략가',title_f:'광대한 지혜의 소유자',desc:'깊은 겨울 강. 광대한 지혜와 큰 그림.'},
  '壬寅':{E:68,N:65,T:58,J:40,title:'자유로운 혁신가',title_f:'창의적 선봉장',desc:'봄 강의 급류. 넘치는 에너지와 창의성.'},
  '壬辰':{E:48,N:68,T:60,J:46,title:'논리적 탐구자',title_f:'깊이 파고드는 연구자',desc:'봄비 가득한 강. 논리적 사고와 탐구 정신.'},
  '壬午':{E:65,N:58,T:42,J:50,title:'감성적 지도자',title_f:'따뜻한 카리스마',desc:'여름 강물. 포용력으로 사람들 마음을 얻어.'},
  '壬申':{E:65,N:68,T:60,J:38,title:'재기발랄한 천재',title_f:'스마트 크리에이터',desc:'가을 강. 빠른 두뇌와 번뜩이는 아이디어.'},
  '壬戌':{E:46,N:62,T:65,J:62,title:'조용한 전략가',title_f:'치밀한 큰 그림',desc:'가을 깊은 강. 조용하지만 치밀한 전략.'},
  // ── 癸 (음수: 빗물, 감성, 직관) ──
  '癸丑':{E:36,N:45,T:40,J:65,title:'신중한 보호자',title_f:'섬세한 감성 수호자',desc:'겨울 빗물이 만든 얼음. 감성과 깊은 신뢰.'},
  '癸卯':{E:44,N:62,T:35,J:38,title:'감성적 창작자',title_f:'감성 표현의 천재',desc:'봄비. 풍부한 감성과 창의성.'},
  '癸巳':{E:42,N:62,T:58,J:44,title:'분석적 직관가',title_f:'날카로운 진실 탐구자',desc:'여름 소나기. 날카로운 분석과 깊은 직관.'},
  '癸未':{E:40,N:58,T:36,J:46,title:'공감하는 이상가',title_f:'따뜻한 비전의 소유자',desc:'여름 끝 단비. 깊은 공감과 이상주의.'},
  '癸酉':{E:36,N:55,T:58,J:62,title:'예리한 분석가',title_f:'정밀한 패턴 파악자',desc:'가을 이슬. 정밀한 분석력과 깊은 통찰.'},
  '癸亥':{E:34,N:68,T:38,J:40,title:'깊은 자유인',title_f:'무한한 상상의 바다',desc:'겨울 깊은 샘. 자유로운 영혼과 무한한 상상력.'},
};

/* 성별 보정 — 일간 음양 × 성별 기본 보정 */
const GENDER_ADJ={
  yang_m:{E:3,N:0,T:3,J:2}, yang_f:{E:-2,N:3,T:0,J:0},
  yin_m:{E:2,N:0,T:2,J:0}, yin_f:{E:0,N:2,T:-3,J:0}
};

/* 성별 × 십성 상호작용 보정 (명리학 근거)
   - 여성 상관: 표현·자유가 더 극대화 → N↑ P↑
   - 여성 편관: 카리스마보다 내면 긴장 → I↑ J↑
   - 여성 식신: 감성·돌봄이 강화 → F↑
   - 남성 편재: 사교·활동이 더 직접적 → E↑
   - 남성 정관: 책임감·체계가 더 강화 → T↑ J↑
   - 남성 편인: 독립적 탐구가 강화 → I↑ N↑
*/
const GENDER_SIP_ADJ={
  m:{상관:{E:2,N:0,T:0,J:0},편재:{E:4,N:0,T:0,J:0},정관:{E:0,N:0,T:3,J:3},편인:{E:-3,N:3,T:0,J:0},편관:{E:2,N:0,T:2,J:0}},
  f:{상관:{E:0,N:4,T:-2,J:-4},편관:{E:-3,N:0,T:2,J:3},식신:{E:0,N:2,T:-4,J:0},정재:{E:-2,N:0,T:0,J:3},편인:{E:-2,N:4,T:0,J:-2}}
};

function getIljuKey(natal){ return SE[natal.dS]+BE[natal.dB]; }

/* ╔══════════════════════════════════════════╗
   ║  V5 MBTI 산출 엔진                       ║
   ║  ① 월지 격국  (사회적 환경)     50%       ║
   ║  ② 일주 60갑자 (개인의 본질)    30%       ║
   ║  ③ 원국 최강 십성 (행동 무기)   20%       ║
   ║  + 성별×십성 상호작용 보정                 ║
   ║  + 순간테스트 (비례 반영 or 미응답시 무시)  ║
   ╚══════════════════════════════════════════╝ */

/* ── 원국 내 모든 십성 계산 → 최강 십성 도출 ── */
function getDominantTenGod(natal){
  const dS=natal.dS;
  const targets=[
    {idx:natal.yS, pos:'년간', w:1},
    {idx:natal.mS, pos:'월간', w:1.2},
    {idx:BRANCH_BONGI[natal.yB], pos:'년지', w:0.8},
    {idx:BRANCH_BONGI[natal.mB], pos:'월지', w:1.5},
    {idx:BRANCH_BONGI[natal.dB], pos:'일지', w:1.0},
  ];
  const count={};
  targets.forEach(t=>{
    if(t.idx===dS) return;
    const god=getTenGod(dS, t.idx);
    if(!count[god]) count[god]={total:0,positions:[]};
    count[god].total += t.w;
    count[god].positions.push(t.pos);
  });
  let best='비견', bestW=0;
  for(const[god,data] of Object.entries(count)){
    if(data.total>bestW){bestW=data.total;best=god;}
  }
  return{god:best, weight:bestW, positions:count[best]?.positions||[], allGods:count};
}

/* ── 십성 오프셋 → 축 점수 변환 (50 기준) ── */
function sipToScore(sipData){
  const scale=2.0;
  return{
    E:50+(sipData.E||0)*scale,
    N:50+(sipData.N||0)*scale,
    T:50+(sipData.T||0)*scale,
    J:50+(sipData.J||0)*scale
  };
}

function computeMBTI_V3(natal, gender, q1, q2, q3, q4){
  const iljuKey=getIljuKey(natal);
  const iljuBase=ILJU_60[iljuKey]||{E:50,N:50,T:50,J:50};
  const hasAnyQ=!!(q1||q2||q3||q4);

  // ═══ ① 월지 격국 점수 (50%) ═══
  const monthGod=getMonthTenGod(natal);
  const monthStemGod=getMonthStemTenGod(natal);
  const mgData=SIPSUNG_DATA[monthGod]||{E:0,N:0,T:0,J:0};
  const msData=SIPSUNG_DATA[monthStemGod]||{E:0,N:0,T:0,J:0};
  const mgScore=sipToScore(mgData);
  const msScore=sipToScore(msData);
  const monthScore={
    E: mgScore.E*0.8 + msScore.E*0.2,
    N: mgScore.N*0.8 + msScore.N*0.2,
    T: mgScore.T*0.8 + msScore.T*0.2,
    J: mgScore.J*0.8 + msScore.J*0.2,
  };

  // ═══ ② 일주 점수 (30%) — 성별 기본 보정 포함 ═══
  const isYang=(natal.dS%2===0);
  const gAdj=isYang?(gender==='m'?GENDER_ADJ.yang_m:GENDER_ADJ.yang_f):(gender==='m'?GENDER_ADJ.yin_m:GENDER_ADJ.yin_f);
  const dayScore={
    E: iljuBase.E + gAdj.E,
    N: iljuBase.N + gAdj.N,
    T: iljuBase.T + gAdj.T,
    J: iljuBase.J + gAdj.J,
  };

  // ═══ ③ 원국 최강 십성 점수 (20%) ═══
  const dominant=getDominantTenGod(natal);
  const domData=SIPSUNG_DATA[dominant.god]||{E:0,N:0,T:0,J:0};
  const domScore=sipToScore(domData);

  // ═══ 가중 평균: 50% + 30% + 20% ═══
  const W1=0.50, W2=0.30, W3=0.20;
  const clamp=(v)=>Math.min(95,Math.max(5,Math.round(v)));
  const s={
    E: clamp(monthScore.E*W1 + dayScore.E*W2 + domScore.E*W3),
    N: clamp(monthScore.N*W1 + dayScore.N*W2 + domScore.N*W3),
    T: clamp(monthScore.T*W1 + dayScore.T*W2 + domScore.T*W3),
    J: clamp(monthScore.J*W1 + dayScore.J*W2 + domScore.J*W3),
  };

  // ═══ ④ 성별×십성 상호작용 보정 ═══
  // 월지 격국 십성 + 최강 십성에 대해 성별 보정 적용
  const gSip=GENDER_SIP_ADJ[gender]||{};
  [monthGod, dominant.god].forEach(god=>{
    const adj=gSip[god];
    if(adj){
      // 월지 격국이면 가중 0.7, 최강 십성이면 0.5
      const w=(god===monthGod)?0.7:0.5;
      s.E=clamp(s.E+(adj.E||0)*w);
      s.N=clamp(s.N+(adj.N||0)*w);
      s.T=clamp(s.T+(adj.T||0)*w);
      s.J=clamp(s.J+(adj.J||0)*w);
    }
  });

  // ═══ ⑤ 순간테스트 반영 (비례적 — 50에 가까울수록 영향력 ↑) ═══
  const corrections=[];
  if(hasAnyQ){
    // 각 축별: 50과의 거리에 반비례하여 보정 강도 결정
    // |s-50|=0 → 최대 15pt 반영, |s-50|=20 → 5pt, |s-50|≥30 → 0pt
    const qBoost=(score, answer, isADir)=>{
      if(!answer) return score;
      const dist=Math.abs(score-50);
      if(dist>=30) return score; // 사주가 확실하면 무시
      const maxBoost=15;
      const boost=Math.round(maxBoost * (1 - dist/30));
      if(boost<=0) return score;
      const dir=(answer===isADir)?1:-1;
      return clamp(score + boost*dir);
    };
    const prevE=s.E, prevN=s.N, prevT=s.T, prevJ=s.J;
    s.E=qBoost(s.E, q1, 'a'); // Q1: a=E방향
    s.N=qBoost(s.N, q2, 'a'); // Q2: a=N방향
    s.T=qBoost(s.T, q3, 'a'); // Q3: a=T방향
    s.J=qBoost(s.J, q4, 'a'); // Q4: a=J방향
    if(s.E!==prevE) corrections.push('E/I');
    if(s.N!==prevN) corrections.push('N/S');
    if(s.T!==prevT) corrections.push('T/F');
    if(s.J!==prevJ) corrections.push('J/P');
  }

  // ═══ ⑥ 경계 처리 ═══
  // 테스트 미응답 시: 부드러운 넛지 (±4만)
  // 테스트 응답 시: 이미 ⑤에서 처리했으므로 최소 넛지만
  ['E','N','T','J'].forEach(k=>{
    if(Math.abs(s[k]-50)<4){
      const nudge=hasAnyQ?3:5;
      s[k]=clamp(s[k]+(s[k]>=50?nudge:-nudge));
    }
  });

  const mbti=(s.E>=50?'E':'I')+(s.N>=50?'N':'S')+(s.T>=50?'T':'F')+(s.J>=50?'J':'P');
  const pct=(v)=>Math.min(88,Math.max(52,Math.round(v>=50?v:100-v)));
  const dims=[
    {left:'E',right:'I',chosen:mbti[0],pct:pct(s.E)},
    {left:'N',right:'S',chosen:mbti[1],pct:pct(s.N)},
    {left:'T',right:'F',chosen:mbti[2],pct:pct(s.T)},
    {left:'J',right:'P',chosen:mbti[3],pct:pct(s.J)}
  ];

  // 오행 분포 계산
  const ec={'木':0,'火':0,'土':0,'金':0,'水':0};
  [natal.yS,natal.mS,natal.dS].forEach(si=>ec[ELEM_NAME[SE_ELEM[si]]]++);
  [natal.yB,natal.mB,natal.dB].forEach(bi=>ec[ELEM_NAME[BE_ELEM[bi]]]++);

  return{mbti, dims, scores:s, iljuKey, iljuData:iljuBase,
    monthGod, monthStemGod, dominant, corrections, elements:ec,
    _weights:{monthScore, dayScore, domScore}};
}

/* ── 캐릭터 한줄 설명 생성 (i18n) ── */
function generateCharacterLine(mbtiType, iljuData, monthGod, gender, natal){
  const dS=natal?natal.dS:0, dB=natal?natal.dB:0;
  const locI=locIlju(iljuData, dS, dB, gender);
  const KW={
    ko:{INTJ:'조용한 전략가',INTP:'탐구하는 사색가',ENTJ:'판을 짜는 리더',ENTP:'아이디어 폭격기',INFJ:'깊은 공감의 이상가',INFP:'감성의 몽상가',ENFJ:'영감을 주는 멘토',ENFP:'에너지 넘치는 자유인',ISTJ:'믿음직한 실행가',ISFJ:'따뜻한 수호자',ESTJ:'원칙의 추진자',ESFJ:'사람을 잇는 허브',ISTP:'침착한 문제해결사',ISFP:'감각적 아티스트',ESTP:'지금에 올인하는 행동가',ESFP:'분위기를 만드는 주인공'},
    ja:{INTJ:'静かな戦略家',INTP:'探究する思索家',ENTJ:'全体を動かすリーダー',ENTP:'アイデアの爆撃機',INFJ:'深い共感の理想家',INFP:'感性の夢想家',ENFJ:'インスピレーションメンター',ENFP:'エネルギー溢れる自由人',ISTJ:'頼れる実行家',ISFJ:'温かい守護者',ESTJ:'原則の推進者',ESFJ:'人をつなぐハブ',ISTP:'冷静な問題解決者',ISFP:'感覚のアーティスト',ESTP:'今に全力の行動家',ESFP:'雰囲気を作る主人公'},
    en:{INTJ:'Silent Strategist',INTP:'Curious Thinker',ENTJ:'Visionary Leader',ENTP:'Idea Bomber',INFJ:'Deep Empathic Idealist',INFP:'Dreamy Romantic',ENFJ:'Inspiring Mentor',ENFP:'Free-Spirited Energizer',ISTJ:'Reliable Executor',ISFJ:'Warm Guardian',ESTJ:'Principled Driver',ESFJ:'Social Connector',ISTP:'Cool Problem Solver',ISFP:'Sensory Artist',ESTP:'All-In Action Hero',ESFP:'Life of the Party'},
    'zh-TW':{INTJ:'安靜策略家',INTP:'探索思考者',ENTJ:'全局領導者',ENTP:'點子轟炸機',INFJ:'深度共感理想家',INFP:'感性夢想家',ENFJ:'啟發導師',ENFP:'活力自由人',ISTJ:'可靠執行者',ISFJ:'溫暖守護者',ESTJ:'原則推動者',ESFJ:'社交連結者',ISTP:'冷靜問題解決者',ISFP:'感覺藝術家',ESTP:'全力行動家',ESFP:'氣氛製造者'},
    'zh-CN':{INTJ:'安静策略家',INTP:'探索思考者',ENTJ:'全局领导者',ENTP:'点子轰炸机',INFJ:'深度共感理想家',INFP:'感性梦想家',ENFJ:'启发导师',ENFP:'活力自由人',ISTJ:'可靠执行者',ISFJ:'温暖守护者',ESTJ:'原则推动者',ESFJ:'社交连结者',ISTP:'冷静问题解决者',ISFP:'感觉艺术家',ESTP:'全力行动家',ESFP:'气氛制造者'},
  };
  const kwMap=KW[LANG]||KW.ko;
  const mbtiKw=kwMap[mbtiType]||mbtiType;
  const ssTitle=locGod(monthGod);
  return locI.title+(t('rCharJoin')||' + ')+mbtiKw+' 🌙 '+ssTitle+(t('rCharSuffix')||'');
}

/* ╔══════════════════════════════════════════╗
   ║  16유형 META DATA                        ║
   ╚══════════════════════════════════════════╝ */
/* ── 한자 독음 유틸리티 ── */
function hRead(hStr){
  const d2={'甲':'갑','乙':'을','丙':'병','丁':'정','戊':'무','己':'기','庚':'경','辛':'신','壬':'임','癸':'계',
    '子':'자','丑':'축','寅':'인','卯':'묘','辰':'진','巳':'사','午':'오','未':'미','申':'신','酉':'유','戌':'술','亥':'해'};
  let han='', rd=''; for(let c of hStr){ han+=c; rd+=d2[c]||''; }
  return han+`(${rd})`;
}

/* ╔══════════════════════════════════════════╗
   ║  16유형 META DATA (Localized Figures)    ║
   ╚══════════════════════════════════════════╝ */
const META={
  INTJ:{emoji:'🔭',good:['ENFP','ENTP'],care:['ESFP','ESTP'],
    name:{ko:'전략가형',ja:'戦略家型',en:'Architect',zh:'戰略家型'},
    tag:{ko:'독립적 비전의 완벽주의 전략가',ja:'独立的ビジョンの完璧主義戦略家',en:'Perfectionist strategist with independent vision',zh:'擁有獨立願景的完美主義戰略家'},
    figs:{
      ko:[{e:'🤖',n:'일론 머스크',r:'테슬라'},{e:'📖',n:'정도전',r:'조선의 설계자'},{e:'🎮',n:'페이커',r:'T1'}],
      en:[{e:'🤖',n:'Elon Musk',r:'Tesla'},{e:'🧠',n:'Sam Altman',r:'OpenAI'},{e:'🔭',n:'Isaac Newton',r:'Scientist'}],
      ja:[{e:'🎮',n:'小島秀夫',r:'ゲーム監督'},{e:'🏯',n:'織田信長',r:'戦国武将'},{e:'♟️',n:'藤井聡太',r:'将棋棋士'}],
      zh:[{e:'🏯',n:'諸葛亮',r:'蜀漢丞相'},{e:'🎥',n:'周星馳',r:'導演·演員'},{e:'💻',n:'張一鳴',r:'字節跳動創始인'}]
    },
    figNote:{ko:'시스템으로 세상을 바꾸는 전략가들과 에너지가 닮았어.',ja:'システムで世界を変える戦略家たちとエネルギーが似ているよ。',en:'Your energy resembles strategists who change the world through systems.',zh:'你的能量與那些透過系統改變世界的戰略家們相似。'},
    careers:{
      ko:[{e:'🤖',n:'AI AGI 시스템 아키텍트',t:1,d:'전체 시스템의 논리 구조를 설계하는 마스터'},{e:'🚀',n:'우주 항공 전략가',t:1,d:'미래 인류의 거주지를 설계하는 역할'},{e:'📊',n:'프롬프트 엔지니어링 리더',t:0,d:'AI의 한계를 넘는 최적의 지시 설계'},{e:'🎮',n:'가상 세계 경제 설계자',t:0,d:'메타버스 내의 경제 생태계 구축'},{e:'🎓',n:'미래학 연구원',t:0,d:'데이터 기반으로 인류의 미래를 예측'}],
      ja:[{e:'🤖',n:'AI AGIシステムアーキテクト',t:1,d:'システム全体の論理構造を設計するマスター'},{e:'🚀',n:'宇宙航空戦略家',t:1,d:'未来の人類の居住地を設計する役割'},{e:'📊',n:'プロンプトエンジニアリングリーダー',t:0,d:'AIの限界を超える最適の指示設計'},{e:'🎮',n:'仮想世界経済設計者',t:0,d:'メタバース内の経済生態系の構築'},{e:'🎓',n:'未来学研究員',t:0,d:'データに基づいて人類の未来を予測'}],
      en:[{e:'🤖',n:'AI AGI System Architect',t:1,d:'Master designing the logical structure of entire systems'},{e:'🚀',n:'Aerospace Strategist',t:1,d:'Role designing future human habitats'},{e:'📊',n:'Prompt Engineering Leader',t:0,d:'Optimal instruction design beyond AI limits'},{e:'🎮',n:'Virtual World Economy Designer',t:0,d:'Building economic ecosystems within the metaverse'},{e:'🎓',n:'Futurology Researcher',t:0,d:'Predicting human future based on data'}],
      zh:[{e:'🤖',n:'AI AGI 系統架構師',t:1,d:'設計整個系統邏輯結構的大師'},{e:'🚀',n:'航太戰略家',t:1,d:'負責設計未來人類棲息地的角色'},{e:'📊',n:'提示工程領導者',t:0,d:'設計超越 AI 極限的最佳指令'},{e:'🎮',n:'虛擬世界經濟設計師',t:0,d:'在元宇宙內構建經濟生態系統'},{e:'🎓',n:'未來學研究員',t:0,d:'基於數據預測人類未來'}]
    },
    careerDesc:{ko:'논리와 비전으로 세상을 재설계하는 빌더 타입이야.',ja:'論理とビジョンで世界を再設計するビルダータイプだよ. ',en:'You are a builder type who redesigns the world with logic and vision.',zh:'你是一個用邏輯和願景重新設計世界的構建者類型。'}},
  INTP:{emoji:'🧬',good:['ENTJ','ESTJ'],care:['ESFJ','ENFJ'],
    name:{ko:'논리술사형',ja:'論理学者型',en:'Logician',zh:'邏輯學家型'},
    tag:{ko:'탐구를 즐기는 논리적 지식 탐험가',ja:'探究を楽しむ論理的な知識探検家',en:'Logical knowledge explorer who enjoys exploration',zh:'享受探索的邏輯知識探險家'},
    figs:{
      ko:[{e:'⚛️',n:'알버트 아인슈타인',r:'물리학자'},{e:'💻',n:'이찬진',r:'한글과컴퓨터'},{e:'🎲',n:'이세돌',r:'바둑 기사'}],
      en:[{e:'⚛️',n:'Albert Einstein',r:'Physicist'},{e:'💻',n:'Linus Torvalds',r:'Linux Creator'},{e:'♟️',n:'Bobby Fischer',r:'Chess Grandmaster'}],
      ja:[{e:'🧪',n:'野口英世',r:'医学者'},{e:'🔬',n:'山中伸弥',r:'ノーベル賞'},{e:'🎮',n:'宮本茂',r:'任天堂'}],
      zh:[{e:'🧪',n:'屠呦呦',r:'諾貝爾獎'},{e:'📖',n:'老子',r:'哲學家'},{e:'🌐',n:'馬化騰',r:'騰訊創始人'}]
    },
    figNote:{ko:'끝없는 지적 탐구로 패러다임을 바꾼 사색가들과 닮았어.',ja:'絶え間ない知的探究でパラダイムを変えた思索家たちに似ているよ。',en:'You resemble thinkers who changed paradigms through endless intellectual pursuit.',zh:'你與那些透過無止境的智力追求改變範式的思想家們相似。'},
    careers:{
      ko:[{e:'🧠',n:'AGI 연구 과학자',t:1,d:'AI의 자의식과 논리 구조를 탐구'},{e:'🔢',n:'양자 컴퓨팅 프로그래머',t:1,d:'차세대 연산 알고리즘 개발'},{e:'💻',n:'탈중앙화 앱(DApp) 개발자',t:0,d:'웹3.0 시대의 새로운 규칙 설계'},{e:'🧪',n:'바이오 정보학자',t:0,d:'유전자 데이터와 IT의 융합 분석'},{e:'🎨',n:'생성형 AI 아트 디렉터',t:0,d:'AI 알고리즘으로 새로운 예술 장르 개척'}],
      ja:[{e:'🧠',n:'AGI研究科学者',t:1,d:'AIの自意識と論理構造を探究'},{e:'🔢',n:'量子コンピューティングプログラマー',t:1,d:'次世代演算アルゴリズムの開発'},{e:'💻',n:'分散型アプリ(DApp)デベロッパー',t:0,d:'Web3.0時代の新しいルール設計'},{e:'🧪',n:'バイオ情報学者',t:0,d:'遺伝子データとITの融合分析'},{e:'🎨',n:'生成型AIアートディレクター',t:0,d:'AI算法で新しい芸術ジャンルを開拓'}],
      en:[{e:'🧠',n:'AGI Research Scientist',t:1,d:'Exploring AI self-awareness and logical structures'},{e:'🔢',n:'Quantum Computing Programmer',t:1,d:'Developing next-generation computing algorithms'},{e:'💻',n:'Decentralized App (DApp) Developer',t:0,d:'Designing new rules for the Web 3.0 era'},{e:'🧪',n:'Bioinformatics Scientist',t:0,d:'Fused analysis of genetic data and IT'},{e:'🎨',n:'Generative AI Art Director',t:0,d:'Opening new art genres with AI algorithms'}],
      zh:[{e:'🧠',n:'AGI 研究科學家',t:1,d:'探索 AI 的自我意識和邏輯結構'},{e:'🔢',n:'量子計算程式設計師',t:1,d:'開發下一代運算算法'},{e:'💻',n:'去中心化應用 (DApp) 開發者',t:0,d:'設計 Web 3.0 時代的新規則'},{e:'🧪',n:'生物資訊學家',t:0,d:'基因數據與 IT 的融合分析'},{e:'🎨',n:'生成式 AI 藝術總監',t:0,d:'利用 AI 算法開闢新的藝術流派'}]
    },
    careerDesc:{ko:'이론+분석+시스템 설계에서 대체 불가능한 힘을 발휘해.',ja:'理論＋分析＋システム設計で代替不可能な力を発揮するよ。',en:'You exert irreplaceable power in theory, analysis, and system design.',zh:'你在理論、分析和系統設計方面發揮著不可替代的力量。'}},

  ENTJ:{emoji:'⚡',
    name:{ko:'통솔자형',ja:'指揮官型',en:'Commander',zh:'統帥型'},
    tag:{ko:'강한 의지로 목표를 이끄는 타고난 리더',ja:'強い意志で目標へと導く天性のリーダー',en:'Born leader who drives goals with unstoppable will',zh:'以強大意志引領目標的天生領袖'},
    good:['INTP','ISTP'],care:['INFP','ISFP'],
    figs:{
      ko:[{e:'🚀',n:'이재용',r:'삼성전자'},{e:'⚔️',n:'이순신',r:'조선 제독'},{e:'🎤',n:'방시혁',r:'HYBE'}],
      en:[{e:'🚀',n:'Steve Jobs',r:'Apple'},{e:'💼',n:'Sheryl Sandberg',r:'Meta'},{e:'🎬',n:'James Cameron',r:'Director'}],
      ja:[{e:'💼',n:'孫正義',r:'ソフトバンク'},{e:'🏯',n:'豊臣秀吉',r:'戦国武将'},{e:'⚾',n:'栗山英樹',r:'WBC監督'}],
      zh:[{e:'🏯',n:'曹操',r:'魏武帝'},{e:'💼',n:'董明珠',r:'格力電器'},{e:'🎥',n:'張藝謀',r:'導演'}]
    },
    figNote:{ko:'판 자체를 새로 짜는 빌더형 리더들과 에너지가 닮았어.',ja:'판を새로작るビルダー型リーダーたちとエネルギーが似ているよ。',en:'Your energy mirrors builder-leaders who create entirely new playing fields.',zh:'你的能量與那些重新構建舞台的構建者型領袖相似。'},
    careers:{
      ko:[{e:'🏢',n:'글로벌 AGI 거버넌스 이사',t:1,d:'전 세계 AI 규칙과 표준을 결정하는 리더'},{e:'📈',n:'뉴 프론티어 VC',t:1,d:'화성 식민지 등 미래 산업에 투자'},{e:'🌐',n:'글로벌 PM',t:0,d:'인간과 AI 팀을 통합 관리하는 팀장'},{e:'🎙️',n:'비즈니스 인플루언서',t:0,d:'강력한 비전으로 시장 트렌드를 주도'},{e:'🤝',n:'미래 산업 전략 파트너십',t:0,d:'기업 간 초연결을 설계하는 협상가'}],
      ja:[{e:'🏢',n:'グローバルAGIガバナンス理事',t:1,d:'世界のAIルールと標準を決めるリーダー'},{e:'📈',n:'ニューフロンティアVC',t:1,d:'火星植民地など未来産業に投資するトップ投資家'},{e:'🌐',n:'グローバルPM',t:0,d:'人間とAIチームを統合管理するリーダー'},{e:'🎙️',n:'ビジネスインフルエンサー',t:0,d:'強力なビジョンで市場トレンドを主導する人'},{e:'🤝',n:'未来産業戦略パートナーシップ',t:0,d:'企業間の超連結を設計する交渉のプロ'}],
      en:[{e:'🏢',n:'Global AGI Governance Director',t:1,d:'Leader defining global AI rules and standards'},{e:'📈',n:'New Frontier VC',t:1,d:'Investing in future industries like Mars colonization'},{e:'🌐',n:'Global Product Manager',t:0,d:'Leading integrated human + AI teams'},{e:'🎙️',n:'Business Influencer',t:0,d:'Driving market trends with visionary leadership'},{e:'🤝',n:'Future Industry Strategy Partner',t:0,d:'Negotiator designing hyper-connectivity between organizations'}],
      zh:[{e:'🏢',n:'全球AGI治理總監',t:1,d:'制定全球AI規則與標準的領導者'},{e:'📈',n:'新邊疆風投',t:1,d:'投資火星殖民地等未來產業的頂級投資人'},{e:'🌐',n:'全球產品經理',t:0,d:'整合管理人類與AI團隊的隊長'},{e:'🎙️',n:'商業影響者',t:0,d:'以強大願景引領市場趨勢'},{e:'🤝',n:'未來產業戰略合夥人',t:0,d:'設計企業間超連結的談判高手'}]
    },
    careerDesc:{ko:'조직을 이끌고 거대한 판을 짜는 포지션에서 빛나.',ja:'組織をリードし、大きな場を作るポジションで輝くよ。',en:'You shine in positions where you lead teams and build massive structures.',zh:'你在引領組織、構建宏大格局的崗位上大放異彩。'}},
  ENTP:{emoji:'💡',
    name:{ko:'변론가형',ja:'討論者型',en:'Debater',zh:'辯論家型'},
    tag:{ko:'창의적 도전으로 세상을 뒤집는 아이디어맨',ja:'創意ある挑戦で世界をひっくり返すアイデアの天才',en:'Idea genius who flips the world with creative challenges',zh:'以創意挑戰顛覆世界的點子狂人'},
    good:['INFJ','INTJ'],care:['ISFJ','ISTJ'],
    figs:{
      ko:[{e:'🎬',n:'봉준호',r:'영화감독'},{e:'🎙️',n:'유시민',r:'작가'},{e:'⚡',n:'정약용',r:'조선 실학자'}],
      en:[{e:'🎬',n:'Quentin Tarantino',r:'Director'},{e:'⚡',n:'Thomas Edison',r:'Inventor'},{e:'🎙️',n:'Ryan Reynolds',r:'Actor'}],
      ja:[{e:'🏯',n:'坂本龍馬',r:'幕末志士'},{e:'📺',n:'西野亮廣',r:'クリエイター'},{e:'🎬',n:'北野武',r:'映画監督'}],
      zh:[{e:'📖',n:'莊子',r:'哲學家'},{e:'🎥',n:'姜文',r:'導演'},{e:'🌐',n:'周鴻禕',r:'奇虎360創始人'}]
    },
    figNote:{ko:'반짝이는 재치와 도전 정신으로 통념을 깬 혁신가들.',ja:'輝く機智と挑戦精神で常識を打ち破った革新家たち。',en:'Innovators who shattered norms with brilliant wit and relentless curiosity.',zh:'以閃耀的機智和挑戰精神打破常規的創新者們。'},
    careers:{
      ko:[{e:'🎙️',n:'AGI 프롬프트 컨설턴트',t:1,d:'AI의 창의성을 극한으로 끌어내는 조언가'},{e:'🚀',n:'그로스 해커',t:1,d:'전혀 새로운 성장 공식을 찾아내는 눈'},{e:'🤝',n:'스타트업 인큐베이터',t:0,d:'아이디어를 사업화하는 최고의 기획자'},{e:'📱',n:'메타버스 월드 빌더',t:0,d:'새로운 가상 세계의 규칙을 발명'},{e:'🎓',n:'에듀테크 이노베이터',t:0,d:'학습의 개념 자체를 바꾸는 혁신가'}],
      ja:[{e:'🎙️',n:'AGIプロンプトコンサルタント',t:1,d:'AIの創造性を極限まで引き出すアドバイザー'},{e:'🚀',n:'グロースハッカー',t:1,d:'全く新しい成長公式を見つける天才的な目'},{e:'🤝',n:'スタートアップインキュベーター',t:0,d:'アイデアを事業化する最高のプランナー'},{e:'📱',n:'メタバースワールドビルダー',t:0,d:'新しい仮想世界のルールを発明する人'},{e:'🎓',n:'エドテックイノベーター',t:0,d:'学びの概念そのものを変える革新家'}],
      en:[{e:'🎙️',n:'AGI Prompt Consultant',t:1,d:'Advisor who pushes AI creativity to its limits'},{e:'🚀',n:'Growth Hacker',t:1,d:'Eye for finding entirely new growth formulas'},{e:'🤝',n:'Startup Incubator',t:0,d:'Master planner who turns ideas into businesses'},{e:'📱',n:'Metaverse World Builder',t:0,d:'Inventor of rules for brand-new virtual worlds'},{e:'🎓',n:'EdTech Innovator',t:0,d:'Visionary who redefines what learning even means'}],
      zh:[{e:'🎙️',n:'AGI提示詞顧問',t:1,d:'將AI創造力發揮到極限的諮詢專家'},{e:'🚀',n:'增長駭客',t:1,d:'發現全新成長公式的獨到眼光'},{e:'🤝',n:'新創孵化器',t:0,d:'將想法轉化為事業的頂尖策劃人'},{e:'📱',n:'元宇宙世界構建者',t:0,d:'發明全新虛擬世界規則的創造者'},{e:'🎓',n:'教育科技創新者',t:0,d:'重新定義學習概念的變革者'}]
    },
    careerDesc:{ko:'아이디어+설득+혁신적 문제해결이 너의 최강 무기야.',ja:'アイデア＋説得＋革新的な問題解決があなたの最強武器だよ。',en:'Ideas + persuasion + innovative problem-solving are your ultimate superpowers.',zh:'點子＋說服力＋創新解題是你的終極武器。'}},
  INFJ:{emoji:'🌙',
    name:{ko:'옹호자형',ja:'提唱者型',en:'Advocate',zh:'倡導者型'},
    tag:{ko:'깊은 공감과 비전의 조용한 이상주의자',ja:'深い共感とビジョンを持つ静かな理想主義者',en:'Quiet idealist with deep empathy and world-changing vision',zh:'擁有深刻共情與願景的安靜理想主義者'},
    good:['ENFP','ENTP'],care:['ESTP','ESFP'],
    figs:{
      ko:[{e:'🎵',n:'아이유',r:'가수'},{e:'📖',n:'한강',r:'소설가'},{e:'🌱',n:'윤동주',r:'시인'}],
      en:[{e:'🎵',n:'Taylor Swift',r:'Singer'},{e:'📖',n:'J.K. Rowling',r:'Author'},{e:'🕊️',n:'Nelson Mandela',r:'Leader'}],
      ja:[{e:'📖',n:'夏目漱石',r:'小説家'},{e:'🎵',n:'坂本龍一',r:'音楽家'},{e:'🎬',n:'新海誠',r:'アニメ監督'}],
      zh:[{e:'📖',n:'魯迅',r:'作家'},{e:'🎥',n:'李安',r:'導演'},{e:'🎨',n:'顧城',r:'詩人'}]
    },
    figNote:{ko:'감성 글쓰기와 깊은 공감으로 마음을 움직인 아티스트들.',ja:'感性あふれる表現と深い共感で心を動かしたアーティストたち。',en:'Artists who moved hearts through emotional expression and deep empathy.',zh:'以感性書寫與深刻共情打動人心的藝術家們。'},
    careers:{
      ko:[{e:'✍️',n:'AI 윤리 관리자',t:1,d:'AI가 인간의 가치를 훼손하지 않도록 가이드 설계'},{e:'🎨',n:'디지털 힐링 테라피스트',t:1,d:'가상 공간에서 사람의 마음을 치유하는 콘텐츠 제작'},{e:'🧘',n:'정신 건강 코치',t:0,d:'깊은 통찰로 개인의 성장을 돕는 가이드'},{e:'🌱',n:'소셜 임팩트 전략가',t:0,d:'세상을 더 나은 곳으로 만드는 의미 있는 일'},{e:'🎬',n:'다큐멘터리 스토리텔러',t:0,d:'인류의 본질적인 이야기를 전달'}],
      ja:[{e:'✍️',n:'AI倫理マネージャー',t:1,d:'AIが人間の価値を損なわないようガイドを設計'},{e:'🎨',n:'デジタルヒーリングセラピスト',t:1,d:'仮想空間で人の心を癒すコンテンツを制作'},{e:'🧘',n:'メンタルヘルスコーチ',t:0,d:'深い洞察で個人の成長を助けるガイド'},{e:'🌱',n:'ソーシャルインパクトストラテジスト',t:0,d:'世界をより良くするために意味のある仕事'},{e:'🎬',n:'ドキュメンタリーストーリーテラー',t:0,d:'人類の本質的な物語を伝える'}],
      en:[{e:'✍️',n:'AI Ethics Manager',t:1,d:'Designing guidelines so AI never undermines human values'},{e:'🎨',n:'Digital Healing Therapist',t:1,d:'Creating content that heals hearts in virtual spaces'},{e:'🧘',n:'Mental Health Coach',t:0,d:'Guide who helps individuals grow through deep insight'},{e:'🌱',n:'Social Impact Strategist',t:0,d:'Doing meaningful work that makes the world better'},{e:'🎬',n:'Documentary Storyteller',t:0,d:'Conveying the essential stories of humanity'}],
      zh:[{e:'✍️',n:'AI倫理管理者',t:1,d:'設計指南確保AI不損害人類價值'},{e:'🎨',n:'數位療癒治療師',t:1,d:'在虛擬空間創作療癒人心的內容'},{e:'🧘',n:'心理健康教練',t:0,d:'以深刻洞察幫助個人成長的嚮導'},{e:'🌱',n:'社會影響力戰略家',t:0,d:'從事讓世界變得更美好的有意義工作'},{e:'🎬',n:'紀錄片說書人',t:0,d:'傳遞人類最本質的故事'}]
    },
    careerDesc:{ko:'감성+공감+의미 있는 일에서 최고의 몰입을 느껴.',ja:'感性＋共感＋意義ある仕事に最高の没入感を感じるよ。',en:'You reach your deepest flow state in work that is emotional, empathetic, and meaningful.',zh:'你在充滿感性、共情與意義的工作中感受到最深的心流狀態。'}},
  INFP:{emoji:'🌸',
    name:{ko:'중재자형',ja:'仲介者型',en:'Mediator',zh:'調停者型'},
    tag:{ko:'진정성과 감성으로 세상을 바라보는 몽상가',ja:'真心と感性で世界を見つめる夢想家',en:'Dreamer who sees the world through authenticity and pure emotion',zh:'以真誠與感性看待世界的夢想家'},
    good:['ENFJ','ENTJ'],care:['ESTJ','ISTJ'],
    figs:{
      ko:[{e:'🎵',n:'BTS 뷔',r:'가수'},{e:'🎨',n:'백석',r:'시인'},{e:'✍️',n:'정세랑',r:'소설가'}],
      en:[{e:'🎵',n:'Lana Del Rey',r:'Singer'},{e:'🎨',n:'Vincent van Gogh',r:'Painter'},{e:'📖',n:'William Shakespeare',r:'Author'}],
      ja:[{e:'📖',n:'太宰治',r:'小説家'},{e:'🎬',n:'岩井俊二',r:'映画監督'},{e:'🎵',n:'米津玄師',r:'音楽家'}],
      zh:[{e:'📖',n:'三毛',r:'作家'},{e:'🎥',n:'王家衛',r:'導演'},{e:'🎵',n:'華晨宇',r:'歌手'}]
    },
    figNote:{ko:'자기만의 세계관으로 조용히 팬덤을 만들어가는 아티스트들.',ja:'自分だけの世界観で静かにファンダムを作り上げているアーティストたち。',en:'Artists who quietly built devoted fandoms through their unique, authentic worldview.',zh:'以獨特世界觀默默建立忠實粉絲群的藝術家們。'},
    careers:{
      ko:[{e:'✍️',n:'AI 협업 웹툰/웹소설 작가',t:1,d:'AI 툴을 활용해 자신만의 거대한 세계관을 시각화'},{e:'🎨',n:'메타버스 아바타 디자이너',t:1,d:'디지털 자아의 개성을 창조'},{e:'🎵',n:'버추얼 인디 뮤지션',t:0,d:'진정성 있는 음악으로 소통하는 아티스트'},{e:'📸',n:'감성 라이프스타일 큐레이터',t:0,d:'일상의 소중한 순간을 포착하는 기획자'},{e:'🎮',n:'게임 서사 디자이너',t:0,d:'사용자의 감정을 자극하는 스토리 설계'}],
      ja:[{e:'✍️',n:'AI協業ウェブトゥーン/ウェブ小説作家',t:1,d:'AIツールを活用して自分だけの巨大な世界観を視覚化'},{e:'🎨',n:'メタバースアバターデザイナー',t:1,d:'デジタルアイデンティティの個性を創造'},{e:'🎵',n:'バーチャルインディーミュージシャン',t:0,d:'真心のある音楽で繋がるアーティスト'},{e:'📸',n:'感性ライフスタイルキュレーター',t:0,d:'日常の大切な瞬間を切り取るプランナー'},{e:'🎮',n:'ゲームナラティブデザイナー',t:0,d:'ユーザーの感情を刺激するストーリーを設計'}],
      en:[{e:'✍️',n:'AI-Collab Webtoon / Web Novel Creator',t:1,d:'Visualizing your massive worldview using AI tools'},{e:'🎨',n:'Metaverse Avatar Designer',t:1,d:'Creating the personality of digital selves'},{e:'🎵',n:'Virtual Indie Musician',t:0,d:'Artist connecting through deeply authentic music'},{e:'📸',n:'Emotional Lifestyle Curator',t:0,d:'Planner capturing precious moments of everyday life'},{e:'🎮',n:'Game Narrative Designer',t:0,d:'Crafting stories that stir the player\'s emotions'}],
      zh:[{e:'✍️',n:'AI協作漫畫/網路小說作家',t:1,d:'利用AI工具將自己的龐大世界觀視覺化'},{e:'🎨',n:'元宇宙虛擬形象設計師',t:1,d:'創造數位自我的個性與獨特魅力'},{e:'🎵',n:'虛擬獨立音樂人',t:0,d:'以真誠音樂連結聽眾的藝術家'},{e:'📸',n:'感性生活方式策展人',t:0,d:'捕捉日常珍貴瞬間的企劃人'},{e:'🎮',n:'遊戲敘事設計師',t:0,d:'設計觸動玩家情感的故事體驗'}]
    },
    careerDesc:{ko:'창작+감성+자기만의 독창적인 세계관에서 가장 빛나.',ja:'創作＋感性＋自分だけの独自の世界観で最も輝くよ。',en:'You glow brightest in creation, emotion, and your own one-of-a-kind worldview.',zh:'你在創作、感性與自己獨特世界觀的交匯處最為閃耀。'}},
  ENFJ:{emoji:'🌟',
    name:{ko:'선도자형',ja:'主人公型',en:'Protagonist',zh:'主角型'},
    tag:{ko:'사람들에게 영감을 주는 따뜻한 멘토',ja:'人々にインスピレーションを与える温かいメンター',en:'Warm mentor who inspires everyone around them',zh:'給予周圍人無限啟發的溫暖導師'},
    good:['INFP','ISFP'],care:['ISTP','INTP'],
    figs:{
      ko:[{e:'🎙️',n:'유재석',r:'MC'},{e:'🌟',n:'BTS RM',r:'가수'},{e:'📣',n:'김구',r:'독립운동가'}],
      en:[{e:'🎙️',n:'Oprah Winfrey',r:'Presenter'},{e:'🌟',n:'Barack Obama',r:'Leader'},{e:'📣',n:'Malala Yousafzai',r:'Activist'}],
      ja:[{e:'🎾',n:'松岡修造',r:'元テニス選手'},{e:'🏯',n:'聖徳太子',r:'政治家'},{e:'🎬',n:'是枝裕和',r:'映画監督'}],
      zh:[{e:'🏯',n:'周恩來',r:'政治家'},{e:'🎥',n:'成龍',r:'演員'},{e:'🎙️',n:'何炅',r:'主持人'}]
    },
    figNote:{ko:'사람 에너지를 모으고 커뮤니티를 만드는 능력이 압도적.',ja:'人のエネルギーを集め、コミュニティを作る力が圧倒的。',en:'Their ability to gather people\'s energy and build communities is absolutely unmatched.',zh:'聚集人心、建立社群的能力令人歎為觀止。'},
    careers:{
      ko:[{e:'🎙️',n:'커뮤니티 빌더',t:1,d:'AI 시대에 인간 소외를 해결하는 커뮤니티 전문가'},{e:'📱',n:'휴먼-AI 커뮤니케이션 매니저',t:1,d:'인간과 AI의 원활한 소통을 중재'},{e:'🎓',n:'미래 라이프 코치',t:0,d:'변화하는 시대에 개인의 비전을 찾아주는 가이드'},{e:'🌱',n:'글로벌 사회 혁신가',t:0,d:'좋은 영향력을 전 세계로 전파'},{e:'🎬',n:'몰입형 토크쇼 호스트',t:0,d:'대화로 사람의 가치를 찾아내는 전문가'}],
      ja:[{e:'🎙️',n:'コミュニティビルダー',t:1,d:'AI時代の人間疎外を解決するコミュニティ専門家'},{e:'📱',n:'ヒューマンAIコミュニケーションマネージャー',t:1,d:'人間とAIのスムーズなコミュニケーションを調停'},{e:'🎓',n:'未来ライフコーチ',t:0,d:'変化する時代に個人のビジョンを見つけるガイド'},{e:'🌱',n:'グローバル社会イノベーター',t:0,d:'良い影響を全世界に広める人'},{e:'🎬',n:'没入型トークショーホスト',t:0,d:'会話で人の価値を引き出す専門家'}],
      en:[{e:'🎙️',n:'Community Builder',t:1,d:'Community expert solving human loneliness in the AI age'},{e:'📱',n:'Human-AI Communication Manager',t:1,d:'Bridging smooth communication between humans and AI'},{e:'🎓',n:'Future Life Coach',t:0,d:'Guide who helps find personal vision in a changing world'},{e:'🌱',n:'Global Social Innovator',t:0,d:'Spreading positive impact across the entire world'},{e:'🎬',n:'Immersive Talk Show Host',t:0,d:'Expert at uncovering a person\'s value through conversation'}],
      zh:[{e:'🎙️',n:'社群建設者',t:1,d:'解決AI時代人際疏離問題的社群專家'},{e:'📱',n:'人機溝通管理者',t:1,d:'調解人類與AI之間順暢溝通的橋樑'},{e:'🎓',n:'未來生活教練',t:0,d:'在變化時代幫助個人找到願景的嚮導'},{e:'🌱',n:'全球社會創新家',t:0,d:'將正面影響力傳播到全世界'},{e:'🎬',n:'沉浸式脫口秀主持人',t:0,d:'透過對話挖掘他人價值的專家'}]
    },
    careerDesc:{ko:'사람을 모으고 성장시키는 일에서 천부적인 재능을 발휘해.',ja:'人を集めて成長させる仕事で天賦の才能を発揮するよ。',en:'Your natural genius shines in work that brings people together and helps them grow.',zh:'你在聚集人心並助人成長的工作中展現出天賦才能。'}},
  ENFP:{emoji:'🎉',
    name:{ko:'활동가형',ja:'広報運動家型',en:'Campaigner',zh:'競選者型'},
    tag:{ko:'열정과 상상력이 넘치는 자유로운 영혼',ja:'情熱と想像力あふれる自由な魂',en:'Free spirit overflowing with passion and boundless imagination',zh:'充滿熱情與無限想像力的自由靈魂'},
    good:['INTJ','INFJ'],care:['ISTJ','ISFJ'],
    figs:{
      ko:[{e:'🎬',n:'박재범',r:'가수'},{e:'🎤',n:'로제',r:'가수'},{e:'🌈',n:'노홍철',r:'방송인'}],
      en:[{e:'🎬',n:'Robert Downey Jr.',r:'Actor'},{e:'🎤',n:'Harry Styles',r:'Singer'},{e:'🌈',n:'Emma Chamberlain',r:'YouTuber'}],
      ja:[{e:'🏯',n:'織田信長',r:'戦国武将'},{e:'📺',n:'明石家さんま',r:'芸人'},{e:'🎭',n:'ムロツヨシ',r:'俳優'}],
      zh:[{e:'🎥',n:'賈玲',r:'演員·導演'},{e:'🎵',n:'大張偉',r:'歌手'},{e:'🎨',n:'徐悲鴻',r:'畫家'}]
    },
    figNote:{ko:'숏폼 한 편으로 세상을 흔드는 에너지의 소유자들.',ja:'ショートフォーム一本で世界を揺らすエネルギーの持ち主たち。',en:'Energy powerhouses who can shake the world with a single short-form post.',zh:'一條短影音就能撼動世界的能量擁有者們。'},
    careers:{
      ko:[{e:'📱',n:'버추얼 인플루언서 기획자',t:1,d:'AI 가상 인물에 생명력과 매력을 불어넣는 창조자'},{e:'🎨',n:'AI 아트 퍼포먼스 기획',t:1,d:'기술과 예술을 결합한 새로운 경험 창조'},{e:'🚀',n:'미래 엔터테이너 창업',t:0,d:'에너지를 비즈니스로 연결하는 리더'},{e:'🎤',n:'글로벌 트렌드 큐레이터',t:0,d:'세상의 모든 힙한 것을 찾아 연결'},{e:'🌐',n:'가상 세계 여행 가이드',t:0,d:'메타버스 내의 독특한 경험을 설계'}],
      ja:[{e:'📱',n:'バーチャルインフルエンサー企画者',t:1,d:'AI仮想人物に命と魅力を吹き込むクリエイター'},{e:'🎨',n:'AIアートパフォーマンス企画',t:1,d:'テクノロジーと芸術を融合した新体験を創造'},{e:'🚀',n:'未来エンターテイナー起業',t:0,d:'エネルギーをビジネスに繋げるリーダー'},{e:'🎤',n:'グローバルトレンドキュレーター',t:0,d:'世界のすべてのクールなものを見つけて繋げる'},{e:'🌐',n:'仮想世界旅行ガイド',t:0,d:'メタバース内のユニークな体験を設計'}],
      en:[{e:'📱',n:'Virtual Influencer Creator',t:1,d:'Creator breathing life and charm into AI virtual personas'},{e:'🎨',n:'AI Art Performance Planner',t:1,d:'Creating new experiences that fuse technology and art'},{e:'🚀',n:'Future Entertainer Founder',t:0,d:'Leader connecting pure energy to a real business'},{e:'🎤',n:'Global Trend Curator',t:0,d:'Finding and connecting everything cool in the world'},{e:'🌐',n:'Virtual World Travel Guide',t:0,d:'Designing unique experiences inside the metaverse'}],
      zh:[{e:'📱',n:'虛擬網紅企劃者',t:1,d:'為AI虛擬人物注入生命力與魅力的創造者'},{e:'🎨',n:'AI藝術表演策劃',t:1,d:'創造融合科技與藝術的全新體驗'},{e:'🚀',n:'未來藝人創業者',t:0,d:'將能量轉化為商業的領導者'},{e:'🎤',n:'全球潮流策展人',t:0,d:'找到並連結世界上所有酷炫事物'},{e:'🌐',n:'虛擬世界旅遊嚮導',t:0,d:'在元宇宙內設計獨特體驗'}]
    },
    careerDesc:{ko:'창의성+사람 에너지가 합쳐지는 곳에서 너의 천직을 찾을 수 있어.',ja:'創造性＋人のエネルギーが合わさる場所に天職があるよ。',en:'Find your calling where creativity and people energy collide — that\'s your stage.',zh:'在創造力與人際能量交匯之處，你的天職正等著你。'}},
  ISTJ:{emoji:'🏛️',good:['ESFP','ESTP'],care:['ENFP','ENTP'],
    name:{ko:'현실주의자형',ja:'管理者형',en:'Logistician',zh:'物流師型'},
    tag:{ko:'신뢰와 책임감으로 묵묵히 완수하는 기둥',ja:'信頼と責任感で黙々とやり遂げる大黒柱',en:'Anchor who completes tasks with reliability and responsibility',zh:'以信賴與責任感默默完成任務的支柱'},
    figs:{
      ko:[{e:'⚽',n:'손흥민',r:'축구 선수'},{e:'🏅',n:'김연아',r:'피겨 스타'},{e:'💼',n:'정도전',r:'조선의 학자'}],
      en:[{e:'⚽',n:'Cristiano Ronaldo',r:'Athlete'},{e:'💼',n:'Warren Buffett',r:'Investor'},{e:'⚖️',n:'Queen Elizabeth II',r:'Monarch'}],
      ja:[{e:'⚾',n:'イチロー',r:'元野球選手'},{e:'🏯',n:'徳川家康',r:'戦国武将'},{e:'💼',n:'渋沢栄一',r:'実業家'}],
      zh:[{e:'🏯',n:'諸葛亮',r:'蜀漢丞相'},{e:'💼',n:'王健林',r:'萬達集團'},{e:'⚖️',n:'包拯',r:'北宋名臣'}]
    },
    figNote:{ko:'꾸준함과 기본기로 정상에 오른 사람들.',ja:'地道な努力と基本に忠実な姿勢で頂点に立った人々。',en:'People who reached the top through consistency and solid basics.',zh:'憑藉持之以恆的努力與紮實的基本功登上巔峰的人們。'},
    careers:{
      ko:[{e:'💻',n:'데이터 무결성 관리자',t:1,d:'AI 시대 데이터의 정확성과 신뢰성을 수호'},{e:'🔐',n:'블록체인 보안 전문가',t:1,d:'원칙과 체계로 시스템의 구멍을 차단'},{e:'📊',n:'미래 재무 알고리즘 분석가',t:0,d:'숫자로 미래의 진실을 찾는 역할'},{e:'⚖️',n:'리걸테크 컴플라이언스',t:0,d:'법률과 기술의 교차점을 정밀하게 관리'},{e:'🏗️',n:'스마트시티 인프라 아키텍트',t:0,d:'견고하고 효율적인 도시 시스템 설계'}],
      ja:[{e:'💻',n:'データ整合性管理者',t:1,d:'AI時代のデータの正確性と信頼性を守る'},{e:'🔐',n:'ブロックチェーンセキュリティ専門家',t:1,d:'原則と体系でシステムの穴を遮断'},{e:'📊',n:'未来財務アルゴリズム分析者',t:0,d:'数字で未来の真実を見つけ出す役割'},{e:'⚖️',n:'リーガルテックコンプライアンス',t:0,d:'法律と技術の交差点を精密に管理'},{e:'🏗️',n:'スマートシティインフラアーキテクト',t:0,d:'堅牢で効率的な都市システムを設計'}],
      en:[{e:'💻',n:'Data Integrity Manager',t:1,d:'Guarding the accuracy and reliability of data in the AI era'},{e:'🔐',n:'Blockchain Security Expert',t:1,d:'Blocking system vulnerabilities with principles and structure'},{e:'📊',n:'Future Financial Algorithm Analyst',t:0,d:'Role finding the truth of the future through numbers'},{e:'⚖️',n:'LegalTech Compliance',t:0,d:'Precisely managing the intersection of law and technology'},{e:'🏗️',n:'Smart City Infrastructure Architect',t:0,d:'Designing robust and efficient urban systems'}],
      zh:[{e:'💻',n:'數據完整性管理員',t:1,d:'在 AI 時代守護數據的準確性與可靠性'},{e:'🔐',n:'區塊鏈安全專家',t:1,d:'以原則與體系封堵系統漏洞'},{e:'📊',n:'未來財務演算法分析師',t:0,d:'透過數字尋找未來真相的角色'},{e:'⚖️',n:'法律科技合規專員',t:0,d:'精確管理法律與技術的交匯點'},{e:'🏗️',n:'智慧城市基礎設施架構師',t:0,d:'設計穩固且高效的城市系統'}]
    },
    careerDesc:{ko:'안정과 신뢰를 기반으로 하는 전문 분야에서 독보적이야.',ja:'安定と信頼を基盤とする専門分野で独歩的だよ。',en:'You are unrivaled in specialized fields based on stability and trust.',zh:'你在基於穩定與信賴的專業領域中出類拔萃。'}},
  ISFJ:{emoji:'🛡️',good:['ESFP','ESTP'],care:['ENTJ','ENTP'],
    name:{ko:'수호자형',ja:'擁護者型',en:'Defender',zh:'守護者型'},
    tag:{ko:'조용히 헌신하며 곁에 있어주는 따뜻한 보호자',ja:'静かに献身し、寄り添ってくれる温かな保護者',en:'Warm protector who quietly devotes and stays by your side',zh:'默默奉獻、守候在旁的溫暖守護者'},
    figs:{
      ko:[{e:'🌸',n:'아이유',r:'가수'},{e:'🍳',n:'백종원',r:'사업가'},{e:'🌿',n:'허준',r:'조선 의학자'}],
      en:[{e:'🌸',n:'Selena Gomez',r:'Singer'},{e:'👸',n:'Princess Diana',r:'Royal'},{e:'🎬',n:'Anne Hathaway',r:'Actor'}],
      ja:[{e:'🌸',n:'綾瀬はるか',r:'俳優'},{e:'🍱',n:'タモリ',r:'タレント'},{e:'🏯',n:'上杉謙信',r:'戦国武将'}],
      zh:[{e:'🎥',n:'周迅',r:'演員'},{e:'🎵',n:'鄧麗君',r:'歌手'},{e:'🏯',n:'岳飛',r:'南宋名將'}]
    },
    figNote:{ko:'따뜻한 일상 콘텐츠로 팬덤이 자연스럽게 생긴 사람들.',ja:'温かい日常のコンテンツで自然とファンダムができた人々。',en:'People whose fandoms grew naturally through warm daily content.',zh:'透過溫馨的日常內容自然吸引粉絲的人們。'},
    careers:{
      ko:[{e:'🍳',n:'AI 맞춤형 영양 솔루션 전문가',t:1,d:'데이터를 활용해 개인에게 최적화된 돌봄 제공'},{e:'🌿',n:'디지털 헤리티지 보존가',t:1,d:'소중한 문화와 기억을 기록하고 수호'},{e:'🧘',n:'버추얼 테라피스트',t:0,d:'가상 공간에서 따뜻한 위로를 전달'},{e:'📸',n:'아카이브 브이로그 크리에이터',t:0,d:'평범한 일상을 가치 있는 기록으로 승화'},{e:'💊',n:'미래 통합 헬스 코치',t:0,d:'신체와 정신의 건강을 동시에 케어'}],
      ja:[{e:'🍳',n:'AIパーソナライズ栄養ソリューション専門家',t:1,d:'データを活用して個人に最適化されたケアを提供'},{e:'🌿',n:'デジタルヘリテージ保存家',t:1,d:'大切な文化と記憶を記録し守る'},{e:'🧘',n:'バーチャルセラピスト',t:0,d:'仮想空間で温かい慰めを伝える'},{e:'📸',n:'アーカイブVlogクリエイター',t:0,d:'平凡な日常を価値ある記録へと昇華'},{e:'💊',n:'未来統合ヘルスコーチ',t:0,d:'身体と精神の健康を同時にケア'}],
      en:[{e:'🍳',n:'AI-Tailored Nutrition Specialist',t:1,d:'Providing optimized care for individuals using data'},{e:'🌿',n:'Digital Heritage Preservationist',t:1,d:'Recording and guarding precious cultures and memories'},{e:'🧘',n:'Virtual Therapist',t:0,d:'Delivering warm comfort in virtual spaces'},{e:'📸',n:'Archive Vlog Creator',t:0,d:'Sublimating ordinary life into valuable records'},{e:'💊',n:'Future Integrated Health Coach',t:0,d:'Caring for both physical and mental health'}],
      zh:[{e:'🍳',n:'AI 定製營養方案專家',t:1,d:'利用數據為個人提供優化的照護'},{e:'🌿',n:'數位遺產保存者',t:1,d:'記錄並守護珍貴的文化與記憶'},{e:'🧘',n:'虛擬治療師',t:0,d:'在虛擬空間傳遞溫暖的慰藉'},{e:'📸',n:'檔案式 Vlog 創作者',t:0,d:'將平凡日常昇華為有價值的記錄'},{e:'💊',n:'未來綜合健康教練',t:0,d:'同時關注生理與心理健康'}]
    },
    careerDesc:{ko:'따뜻한 케어와 세심한 관찰이 필요한 일에서 가장 큰 보람을 느껴.',ja:'温かいケアと細やかな観察が必要な仕事で最大のやりがいを感じるよ。',en:'You feel the greatest fulfillment in work that requires warm care and meticulous observation.',zh:'你在需要溫暖照護與細緻觀察的工作中感受到最大的成就感。'}},
  ESTJ:{emoji:'👑',good:['ISFP','ISTP'],care:['INFP','INFJ'],
    name:{ko:'경영자형',ja:'幹部型',en:'Executive',zh:'總經理型'},
    tag:{ko:'원칙과 추진력으로 목표를 완수하는 실행가',ja:'原則と推進力で目標を完遂する実行家',en:'Executor who completes goals with principles and drive',zh:'以原則與推動力完成目標的執行者'},
    figs:{
      ko:[{e:'🏀',n:'서장훈',r:'방송인'},{e:'💼',n:'이재용',r:'삼성전자'},{e:'⚔️',n:'김유신',r:'신라 장군'}],
      en:[{e:'🏀',n:'LeBron James',r:'Athlete'},{e:'💼',n:'Tim Cook',r:'Apple CEO'},{e:'🎬',n:'Judge Judy',r:'Personality'}],
      ja:[{e:'💼',n:'柳井正',r:'ファーストリテイリング'},{e:'🏰',n:'北条時宗',r:'鎌倉幕府執権'},{e:'⚾',n:'野村克也',r:'元プロ野球監督'}],
      zh:[{e:'🏯',n:'秦始皇',r:'秦朝皇帝'},{e:'💼',n:'雷軍',r:'小米創始人'},{e:'🎥',n:'陳凱歌',r:'導演'}]
    },
    figNote:{ko:'목표 설정+팀 리드에서 탁월한 리더십의 소유자들.',ja:'目標設定＋チームリードにおいて卓越したリーダーシップの持ち主たち。',en:'Possessors of excellent leadership in goal setting and team leading.',zh:'在設定目標與帶領團隊方面擁有卓越領導力的人。'},
    careers:{
      ko:[{e:'🏢',n:'AI 프로젝트 오너(PO)',t:1,d:'AI 기술을 비즈니스 성과로 연결하는 리더'},{e:'📊',n:'운영 자동화 시스템(COO)',t:1,d:'전체 공정을 효율적으로 최적화하는 달인'},{e:'🎯',n:'미래 도시 운영 본부장',t:0,d:'현실의 문제를 데이터로 신속하게 해결'},{e:'💰',n:'퀀트 데이터 뱅커',t:0,d:'수치와 원칙으로 자산을 운용'},{e:'🏗️',n:'AGI 물류 망 설계자',t:0,d:'가장 효율적인 유통 시스템 구축'}],
      ja:[{e:'🏢',n:'AIプロジェクトオーナー(PO)',t:1,d:'AI技術をビジネス成果につなげるリーダー'},{e:'📊',n:'運営自動化システム(COO)',t:1,d:'全工程を効率的に最適化する達人'},{e:'🎯',n:'未来都市運営本部長',t:0,d:'現実の問題をデータで迅速に解決'},{e:'💰',n:'クオンツデータバンカー',t:0,d:'数値と原則で資産を運用'},{e:'🏗️',n:'AGI物流網設計者',t:0,d:'最も効率的な流通システムを構築'}],
      en:[{e:'🏢',n:'AI Project Owner (PO)',t:1,d:'Leader connecting AI technology to business results'},{e:'📊',n:'Operations Automation Expert (COO)',t:1,d:'Master of efficiently optimizing entire processes'},{e:'🎯',n:'Future City Operations Chief',t:0,d:'Solving real-world problems rapidly with data'},{e:'💰',n:'Quant Data Banker',t:0,d:'Managing assets with numbers and principles'},{e:'🏗️',n:'AGI Logistics Network Designer',t:0,d:'Building the most efficient distribution systems'}],
      zh:[{e:'🏢',n:'AI 專案負責人 (PO)',t:1,d:'將 AI 技術轉化為商業成果的領導者'},{e:'📊',n:'營運自動化專家 (COO)',t:1,d:'高效優化整個流程的大師'},{e:'🎯',n:'未來城市營運總監',t:0,d:'利用數據快速解決現實問題'},{e:'💰',n:'量化數據銀行家',t:0,d:'以數字與原則進行資產運作'},{e:'🏗️',n:'AGI 物流網絡設計師',t:0,d:'構建最高效的流通系統'}]
    },
    careerDesc:{ko:'현실적인 목표를 달성하고 효율을 극대화하는 일에 최적화되어 있어.',ja:'現実的な目標を達成し効率を最大化する仕事に最適化されているよ。',en:'Optimized for achieving realistic goals and maximizing efficiency.',zh:'最適合達成現實目標並將效率發揮到極致的工作。'}},
  ESFJ:{emoji:'🤝',good:['ISFP','ISTP'],care:['INTP','INFP'],
    name:{ko:'집정관형',ja:'領事官型',en:'Consul',zh:'執政官型'},
    tag:{ko:'관계의 중심에서 모두를 연결하는 사교적 돌보미',ja:'関係の中心で皆をつなげる社交的なケアラー',en:'Social caregiver who connects everyone at the center of relationships',zh:'在關係中心連結眾人的社交型照顧者'},
    figs:{
      ko:[{e:'🐰',n:'카리나',r:'에스파'},{e:'📸',n:'김나영',r:'방송인'},{e:'🎊',n:'황희',r:'조선 재상'}],
      en:[{e:'🐰',n:'Taylor Swift',r:'Singer'},{e:'📸',n:'Jennifer Aniston',r:'Actor'},{e:'🎊',n:'Hugh Jackman',r:'Actor'}],
      ja:[{e:'🌸',n:'石原さとみ',r:'俳優'},{e:'📺',n:'中居正広',r:'タレント'},{e:'🏯',n:'藤原道長',r:'平安貴族'}],
      zh:[{e:'🎥',n:'楊冪',r:'演員'},{e:'🎵',n:'王菲',r:'歌手'},{e:'🎙️',n:'謝娜',r:'主持人'}]
    },
    figNote:{ko:'SNS에서 자연스럽게 팬이 모이는 퍼스널 브랜딩의 달인들.',ja:'SNSで自然とファンが集まるパーソナルブランディングの達人たち。',en:'Masters of personal branding who naturally gather fans on social media.',zh:'在社群媒體上自然吸引粉絲的個人品牌大師。'},
    careers:{
      ko:[{e:'📣',n:'글로벌 팬덤 매니저',t:1,d:'AI 아티스트와 인간 팬 사이를 연결하는 허브'},{e:'🎉',n:'체험형 이벤트 디자이너',t:1,d:'사람과 사람이 만나는 행복한 순간을 설계'},{e:'🛎️',n:'AI 맞춤 호스피탈리티 디렉터',t:0,d:'최첨단 기술에 따뜻한 환대를 결합'},{e:'📱',n:'사회적 가치 연결 플랫폼 기획',t:0,d:'모두가 상생하는 네트워크 구축'},{e:'💄',n:'미래 뷰티 테크 크리에이터',t:0,d:'기술로 아름다움의 정의를 확장'}],
      ja:[{e:'📣',n:'グローバルファンダムマネージャー',t:1,d:'AIアーティストと人間のファンの間をつなぐハブ'},{e:'🎉',n:'体験型イベントデザイナー',t:1,d:'人と人が出会う幸せな瞬間을設計'},{e:'🛎️',n:'AIパーソナライズホスピタリティディレクター',t:0,d:'最先端技術に温かいおもてなしを結合'},{e:'📱',n:'社会的価値連結プラットフォーム企画',t:0,d:'皆が相生するネットワークの構築'},{e:'💄',n:'未来のビューティーテッククリエイター',t:0,d:'技術で美の定義を拡張'}],
      en:[{e:'📣',n:'Global Fandom Manager',t:1,d:'Hub connecting AI artists and human fans'},{e:'🎉',n:'Experiential Event Designer',t:1,d:'Designing happy moments where people meet'},{e:'🛎️',n:'AI-Tailored Hospitality Director',t:0,d:'Combining cutting-edge tech with warm hospitality'},{e:'📱',n:'Social Value Connection Platform Planner',t:0,d:'Building networks where everyone prospers'},{e:'💄',n:'Future BeautyTech Creator',t:0,d:'Expanding the definition of beauty through technology'}],
      zh:[{e:'📣',n:'全球粉絲經理',t:1,d:'連結 AI 藝人與人類粉絲的中樞'},{e:'🎉',n:'體驗型活動設計師',t:1,d:'設計人與人相遇的幸福瞬間'},{e:'🛎️',n:'AI 定製款待總監',t:0,d:'將尖端技術與溫暖款待相結合'},{e:'📱',n:'社會價值連結平台企劃',t:0,d:'構建人人共贏的網絡'},{e:'💄',n:'未來美妝科技創作者',t:0,d:'利用技術擴展美的定義'}]
    },
    careerDesc:{ko:'사람 사이의 연결을 강화하고 모두를 행복하게 만드는 일에서 빛나.',ja:'人とのつながりを強め、皆を幸せにする仕事で輝くよ。',en:'You shine in work that strengthens connections and makes everyone happy.',zh:'你在強化人際連結並讓大眾感到幸福的工作中發光發熱。'}},
  ISTP:{emoji:'🔧',good:['ESTJ','ENTJ'],care:['ENFJ','INFJ'],
    name:{ko:'장인형',ja:'巨匠型',en:'Virtuoso',zh:'鑒賞家型'},
    tag:{ko:'침착하게 문제를 해결하는 실용적 문제해결사',ja:'冷静に問題を解決する実用的な問題解決者',en:'Practical problem solver who solves problems calmly',zh:'冷靜解決問題的務實問題解決者'},
    figs:{
      ko:[{e:'🎮',n:'페이커',r:'T1'},{e:'🏎️',n:'임권택',r:'영화감독'},{e:'🛹',n:'김유신',r:'신라 장군'}],
      en:[{e:'🏎️',n:'Lewis Hamilton',r:'F1'},{e:'🛹',n:'Nyjah Huston',r:'Skateboarder'},{e:'🛠️',n:'Bear Grylls',r:'Survivalist'}],
      ja:[{e:'⚾',n:'大谷翔平',r:'ドジャース'},{e:'🏯',n:'宮本武蔵',r:'剣豪'},{e:'🚗',n:'本田宗一郎',r:'ホンダ創業者'}],
      zh:[{e:'🏯',n:'魯班',r:'發明家'},{e:'🎥',n:'甄子丹',r:'演員'},{e:'🏸',n:'林丹',r:'運動員'}]
    },
    figNote:{ko:'손으로 직접 만들고 극한 도전을 즐기는 메이커 DNA.',ja:'手で直接作り、極限の挑戦を楽しむメーカーDNA。',en:'Maker DNA that enjoys hands-on creation and extreme challenges.',zh:'喜歡親手製作並享受極限挑戰的「創作者」基因。'},
    careers:{
      ko:[{e:'🔧',n:'하드웨어 해킹 마스터',t:1,d:'미래의 로봇과 기계를 뜯고 고치며 개선'},{e:'🎮',n:'e스포츠 데이터 분석 코치',t:1,d:'순간적인 상황 판단을 데이터로 지원'},{e:'💻',n:'임베디드 AI 개발자',t:0,d:'기계에 지능을 불어넣는 핵심 엔지니어'},{e:'🛹',n:'미래형 익스트림 스포츠 기획',t:0,d:'한계를 뛰어넘는 물리적 도전을 설계'},{e:'🎛️',n:'AGI 음향/시각 엔지니어',t:0,d:'기술적 완성도로 감각을 자극'}],
      ja:[{e:'🔧',n:'ハードウェアハッキングマスター',t:1,d:'未来のロボットや機械を分解・修理して改善'},{e:'🎮',n:'eスポーツデータ分析コーチ',t:1,d:'瞬間的な状況判断をデータで支援'},{e:'💻',n:'組み込みAI開発者',t:0,d:'機械に知能を吹き込む核心エンジニア'},{e:'🛹',n:'未来型エクストリームスポーツ企画',t:0,d:'限界を超える物理的な挑戦を設計'},{e:'🎛️',n:'AGI音響/視覚エンジニア',t:0,d:'技術的な完成度で感覚を刺激'}],
      en:[{e:'🔧',n:'Hardware Hacking Master',t:1,d:'Improving future robots and machines by taking them apart'},{e:'🎮',n:'eSports Data Analyst Coach',t:1,d:'Supporting split-second decisions with data'},{e:'💻',n:'Embedded AI Developer',t:0,d:'Core engineer breathing intelligence into machines'},{e:'🛹',n:'Future Extreme Sports Planner',t:0,d:'Designing physical challenges that push limits'},{e:'🎛️',n:'AGI Audio/Visual Engineer',t:0,d:'Stimulating senses with technical perfection'}],
      zh:[{e:'🔧',n:'硬體駭客大師',t:1,d:'拆解並改良未來的機器人與機械'},{e:'🎮',n:'電競數據分析教練',t:1,d:'以數據支援瞬間的狀況判斷'},{e:'💻',n:'嵌入式 AI 開發者',t:0,d:'為機器注入智慧的核心工程師'},{e:'🛹',n:'未來極한運動企劃',t:0,d:'設計超越極限的物理挑戰'},{e:'🎛️',n:'AGI 音效/視覺工程師',t:0,d:'以技術完成度刺激感官'}]
    },
    careerDesc:{ko:'기술적 난제를 해결하고 무언가를 직접 다루는 일에서 탁월한 실력을 발휘해.',ja:'技術的な難題を解決し、何かを直接扱う仕事で卓越した実力を発揮するよ。',en:'You exhibit outstanding skill in solving technical puzzles and hands-on work.',zh:'你在解決技術難題和親手操作方面發揮出卓越的能力。'}},
  ISFP:{emoji:'🎨',good:['ESTJ','ESFJ'],care:['INTJ','ENTJ'],
    name:{ko:'모험가형',ja:'冒険家型',en:'Adventurer',zh:'探險家型'},
    tag:{ko:'감각과 감성으로 지금을 사는 자유로운 예술가',ja:'感覚と感性で今を生きる自由な芸術家',en:'Free artist who lives in the moment with sense and emotion',zh:'以感官與感性活在當下的自由藝術家'},
    figs:{
      ko:[{e:'🎨',n:'제니',r:'블랙핑크'},{e:'📸',n:'백남준',r:'예술가'},{e:'🎵',n:'김광석',r:'가수'}],
      en:[{e:'🎵',n:'Billie Eilish',r:'Singer'},{e:'🎨',n:'Banksy',r:'Artist'},{e:'📸',n:'Zendaya',r:'Actor'}],
      ja:[{e:'🎨',n:'草間彌生',r:'芸術家'},{e:'🎵',n:'宇多田ヒカル',r:'音楽家'},{e:'🎭',n:'佐藤健',r:'俳優'}],
      zh:[{e:'🎥',n:'劉亦菲',r:'演員'},{e:'🎵',n:'周杰倫',r:'歌手'},{e:'🎨',n:'齊白石',r:'畫家'}]
    },
    figNote:{ko:'미적 감각이 독보적인 비주얼 크리에이터들.',ja:'美的センスが独歩的なビジュアルクリエイターたち。',en:'Visual creators with unrivaled aesthetic sense.',zh:'美感出眾的視覺創作者。'},
    careers:{
      ko:[{e:'🎨',n:'AI-휴먼 협업 미디어 아티스트',t:1,d:'AI를 붓 삼아 새로운 시각 언어를 창조'},{e:'📸',n:'실감형 메타버스 디자이너',t:1,d:'눈부시게 아름다운 가상 세계를 시각화'},{e:'🎵',n:'사운드스케이프 작곡가',t:0,d:'공간의 분위기를 소리로 창조하는 감성가'},{e:'👗',n:'디지털 패션 스타일리스트',t:0,d:'아바타의 개성을 완성하는 패션 전문가'},{e:'🌿',n:'가상 공간 조경가',t:0,d:'디지털 숲과 자연을 설계하는 힐러'}],
      ja:[{e:'🎨',n:'AI-人間協業メディアアーティスト',t:1,d:'AIを筆にして新しい視覚言語を創造'},{e:'📸',n:'没入型メタバースデザイナー',t:1,d:'目も眩むほど美しい仮想世界を視覚化'},{e:'🎵',n:'サウンドスケープ作曲家',t:0,d:'空間の雰囲気を音で創造する感性豊かな人'},{e:'👗',n:'デジタルファッションスタイリスト',t:0,d:'アバターの個性を完成させるファッション専門家'},{e:'🌿',n:'仮想空間造園家',t:0,d:'デジタルの森と自然を設計するヒーラー'}],
      en:[{e:'🎨',n:'AI-Human Collaborative Media Artist',t:1,d:'Creating new visual languages using AI as a brush'},{e:'📸',n:'Immersive Metaverse Designer',t:1,d:'Visualizing stunningly beautiful virtual worlds'},{e:'🎵',n:'Soundscape Composer',t:0,d:'Creating space atmospheres through sound'},{e:'👗',n:'Digital Fashion Stylist',t:0,d:'Fashion expert finalizing avatar personalities'},{e:'🌿',n:'Virtual Landscape Architect',t:0,d:'Healer designing digital forests and nature'}],
      zh:[{e:'🎨',n:'人機協作多媒體藝術家',t:1,d:'以 AI 為畫筆創造新的視覺語言'},{e:'📸',n:'沉浸式元宇宙設計師',t:1,d:'將璀璨奪目的虛擬世界視覺化'},{e:'🎵',n:'聲景作曲家',t:0,d:'透過聲音創造空間氛圍的感性創作者'},{e:'👗',n:'數位時尚造型師',t:0,d:'完善虛擬化身個性的時尚專家'},{e:'🌿',n:'虛擬空間造景師',t:0,d:'設計數位森林與自然的療癒者'}]
    },
    careerDesc:{ko:'자신의 미적 감수성을 자유롭게 발산할 수 있는 일에서 존재감을 드러내.',ja:'自身の美的感性を自由に発散できる仕事で存在感を表すよ。',en:'You reveal your presence in work where you can freely express your aesthetic sensibility.',zh:'你在能自由揮灑美學感性的工作中展現存在感。'}},
  ESTP:{emoji:'🚀',good:['ISFJ','ISTJ'],care:['INFJ','INTJ'],
    name:{ko:'사업가형',ja:'起業家型',en:'Entrepreneur',zh:'企業家型'},
    tag:{ko:'순발력과 담대함으로 기회를 낚아채는 행동가',ja:'瞬発力と大胆さでチャンスを掴み取る行動家',en:'Action-oriented individual who grabs opportunities with wit and boldness',zh:'以爆發力與大膽抓住機會的行動家'},
    figs:{
      ko:[{e:'🎤',n:'지드래곤',r:'가수'},{e:'⚽',n:'음바페',r:'축구 선수'},{e:'🎮',n:'허준',r:'방송인'}],
      en:[{e:'🥊',n:'Conor McGregor',r:'Fighter'},{e:'🎤',n:'Justin Bieber',r:'Singer'},{e:'🎮',n:'Ninja',r:'Streamer'}],
      ja:[{e:'🏯',n:'真田幸村',r:'戦国武将'},{e:'📺',n:'中田英寿',r:'元サッカー選手'},{e:'🎬',n:'窪塚洋介',r:'俳優'}],
      zh:[{e:'🏯',n:'項羽',r:'西楚霸王'},{e:'💼',n:'王思聰',r:'企業家'},{e:'🎥',n:'謝霆鋒',r:'演員'}],
    },
    figNote:{ko:'지금 이 순간에 올인하는 에너지로 판을 흔드는 사람들.',ja:'今この瞬間に全力を注ぐエネルギーで局面を動かす人々。',en:'People who shake the game with energy that goes all-in on the present moment.',zh:'以全身心投入當下的能量震撼全局的人。'},
    careers:{
      ko:[{e:'💸',n:'미래 자산 트레이더',t:1,d:'순간적인 변화를 감지해 기회를 낚아채는 타격가'},{e:'🎤',n:'버추얼 라이브 액션 리더',t:1,d:'실시간 소통과 에너지로 관중을 압도'},{e:'🎮',n:'AGI 게임 스트리머',t:0,d:'순발력과 엔터테인먼트 감각의 정점'},{e:'🏄',n:'프로 우주 스포츠 선수',t:0,d:'물리적 한계를 넘는 도전의 주인공'},{e:'🤝',n:'현장 중심 미래 세일즈',t:0,d:'사람의 마음을 즉각적으로 움직이는 설득가'}],
      ja:[{e:'💸',n:'未来資産トレーダー',t:1,d:'瞬間的な変化を察知してチャンスを掴む打撃手'},{e:'🎤',n:'バーチャルライブアクションリーダー',t:1,d:'リアルタイムの疎通とエネルギーで観衆を圧倒'},{e:'🎮',n:'AGIゲームストリーマー',t:0,d:'瞬発力とエンターテインメント感覚の頂点'},{e:'🏄',n:'プロ宇宙スポーツ選手',t:0,d:'物理的限界を超える挑戦の主人公'},{e:'🤝',n:'現場中心の未来セールス',t:0,d:'人の心を即座に動かす説得の達人'}],
      en:[{e:'💸',n:'Future Asset Trader',t:1,d:'Striker grabbing opportunities by sensing instant changes'},{e:'🎤',n:'Virtual Live Action Leader',t:1,d:'Overwhelming audiences with real-time communication and energy'},{e:'🎮',n:'AGI Game Streamer',t:0,d:'Peak of wit and entertainment sense'},{e:'🏄',n:'Pro Space Athlete',t:0,d:'Hero of challenges pushing physical limits'},{e:'🤝',n:'Field-Oriented Future Sales',t:0,d:'Persuader moving hearts instantly'}],
      zh:[{e:'💸',n:'未來資產交易員',t:1,d:'察覺瞬間變化並抓住機會的打擊手'},{e:'🎤',n:'虛擬直播活動領袖',t:1,d:'以即時溝通與能量壓倒觀眾'},{e:'🎮',n:'AGI 遊戲實況主',t:0,d:'反應能力與娛樂感的巔峰'},{e:'🏄',n:'職業太空運動員',t:0,d:'超越物理極限的挑戰主角'},{e:'🤝',n:'現場導向的未來銷售',t:0,d:'能立即打動人心的說服者'}]
    },
    careerDesc:{ko:'속도감 있는 변화 속에서 직접 부딪치며 성과를 내는 일에 탁월해.',ja:'スピード感のある変化の中で、直接ぶつかりながら成果を出す仕事に長けているよ。',en:'Outstanding in work that involves direct confrontation and achieving results amid rapid change.',zh:'擅長在節奏快速的變化中親自衝鋒陷陣並取得成果的工作。'}},
  ESFP:{emoji:'🎊',good:['ISFJ','ISTJ'],care:['INTJ','INFJ'],
    name:{ko:'연예인형',ja:'エンターテイナー型',en:'Entertainer',zh:'表演者型'},
    tag:{ko:'모든 순간을 축제로 만드는 에너지 넘치는 주인공',ja:'すべての瞬間を祭りにするエネルギー溢れる主人公',en:'Energetic hero who turns every moment into a festival',zh:'讓每個瞬間都變成慶典、充滿能量的主角'},
    figs:{
      ko:[{e:'🎤',n:'리사',r:'블랙핑크'},{e:'🎉',n:'제이홉',r:'BTS'},{e:'💃',n:'이효리',r:'가수'}],
      en:[{e:'🎤',n:'Cardi B',r:'Rapper'},{e:'🎉',n:'Katy Perry',r:'Singer'},{e:'💃',n:'Shakira',r:'Singer'}],
      ja:[{e:'📺',n:'渡辺直美',r:'タレント'},{e:'🎤',n:'きゃりーぱみゅぱみゅ',r:'歌手'},{e:'💃',n:'ローラ',r:'モデル'}],
      zh:[{e:'🎥',n:'迪麗熱巴',r:'演員'},{e:'🎵',n:'鄧紫棋',r:'歌手'},{e:'🎙️',n:'小S',r:'主持人'}]
    },
    figNote:{ko:'카메라·무대·군중 앞에서 자동으로 ON되는 퍼포머들.',ja:'カメラ・舞台・群衆の前で自動的にONになるパフォーマーたち。',en:'Performers who automatically turn "ON" in front of cameras, stages, and crowds.',zh:'在鏡頭、舞台和人群面前自動啟動「表演模式」的演出者。'},
    careers:{
      ko:[{e:'🎤',n:'글로벌 AI 퍼포먼스 스타',t:1,d:'AI와 융합된 화려한 무대로 전 세계를 사로잡는 주인공'},{e:'📱',n:'몰입형 숏폼 콘텐츠 디렉터',t:1,d:'보는 순간 빠져들게 만드는 매력의 창조자'},{e:'💃',n:'버추얼 댄스 아카데미 리더',t:0,d:'춤과 몸짓으로 긍정적인 에너지를 전파'},{e:'🎉',n:'메타버스 페스티벌 기획자',t:0,d:'가상 세계에서도 잊지 못할 축제를 설계'},{e:'🏋️',n:'미래형 피트니스 인플루언서',t:0,d:'즐거움과 건강을 동시에 전달하는 아이콘'}],
      ja:[{e:'🎤',n:'グローバルAIパフォーマンススター',t:1,d:'AIと融合した華やかな舞台で世界を魅了する主人公'},{e:'📱',n:'没入型短尺動画コンテンツディレクター',t:1,d:'見た瞬間に引き込まれる魅力の創造者'},{e:'💃',n:'バーチャルダンスアカデミーリーダー',t:0,d:'ダンスと身振りでポジティブなエネルギーを広める'},{e:'🎉',n:'メタバースフェスティバルプランナー',t:0,d:'仮想世界でも忘れられない祭りを設計'},{e:'🏋️',n:'未来型フィットネスインフルエンサー',t:0,d:'楽しさと健康を同時に伝えるアイコン'}],
      en:[{e:'🎤',n:'Global AI Performance Star',t:1,d:'Hero captivating the world with spectacular stages fused with AI'},{e:'📱',n:'Immersive Short-form Content Director',t:1,d:'Creator of charm that draws you in instantly'},{e:'💃',n:'Virtual Dance Academy Leader',t:0,d:'Spreading positive energy through dance and gesture'},{e:'🎉',n:'Metaverse Festival Planner',t:0,d:'Designing unforgettable festivals in virtual worlds'},{e:'🏋️',n:'Future Fitness Influencer',t:0,d:'Icon delivering fun and health simultaneously'}],
      zh:[{e:'🎤',n:'全球 AI 表演明星',t:1,d:'以結合 AI 的華麗舞台擄獲全世界的主角'},{e:'📱',n:'沉浸式短影音內容總監',t:1,d:'創造讓人一見傾心的魅力創作者'},{e:'💃',n:'虛擬舞蹈學院領袖',t:0,d:'透過舞蹈與肢體散播正面能量'},{e:'🎉',n:'元宇宙慶典企劃者',t:0,d:'在虛擬世界設計令人難忘的慶典'},{e:'🏋️',n:'未來型健身網紅',t:0,d:'同時傳遞樂趣與健康的偶像'}]
    },
    careerDesc:{ko:'사람들의 시선 중심에서 에너지를 폭발시킬 수 있는 환경이 너의 무대야.',ja:'人々の視線の中心でエネルギーを爆発させられる環境が君の舞台だよ。',en:'An environment where you can explode your energy at the center of attention is your stage.',zh:'能讓你在眾人目光焦點中爆發能量的環境，就是你的舞台。'}}

};

const DIST={INFP:8.3,ENFP:7.6,INFJ:5.1,ENFJ:4.2,INTJ:3.8,ENTJ:4.1,INTP:6.4,ENTP:5.3,ISFJ:11.2,ESFJ:9.3,ISTJ:10.2,ESTJ:7.1,ISFP:7.5,ESFP:6.1,ISTP:6.7,ESTP:5.7};
const DIST_ORDER=['INTJ','INTP','ENTJ','ENTP','INFJ','INFP','ENFJ','ENFP','ISTJ','ISFJ','ESTJ','ESFJ','ISTP','ISFP','ESTP','ESFP'];
const ELEM_ICON={'木':'🌿','火':'🔥','土':'🌍','金':'⚡','水':'💧'};
const ELEM_COLOR={'木':'#5DBB63','火':'#E05050','土':'#C98A30','金':'#7AAFD4','水':'#4090D4'};
function typeColor(t){
  if(['INTJ','ENTJ','INTP','ENTP'].includes(t)) return['#9B6FFF','rgba(155,111,255,.1)'];
  if(['INFJ','ENFJ','INFP','ENFP'].includes(t)) return['#FF6B55','rgba(255,107,85,.1)'];
  if(['ISTJ','ESTJ','ISFJ','ESFJ'].includes(t)) return['#3B9EFF','rgba(59,158,255,.1)'];
  return['#00C9A7','rgba(0,201,167,.1)'];
}

/* ╔══════════════════════════════════════════╗
   ║  로컬 텍스트 생성 엔진                    ║
   ╚══════════════════════════════════════════╝ */
const STEM_STR_I18N={
ko:{0:[{icon:'🌲',title:'강한 추진력',desc:'한번 목표를 정하면 끝까지 밀고 나가는 힘이 있어. 그 뚝심이 가장 큰 무기야.'},{icon:'👑',title:'리더십',desc:'자연스럽게 앞에 서는 카리스마. 방향을 정하고 이끄는 것이 잘 맞아.'},{icon:'💡',title:'독창적 발상',desc:'남들이 생각 못한 방식으로 문제를 풀어. 틀에 갇히지 않는 자유로운 시각.'}],1:[{icon:'🌿',title:'유연한 적응력',desc:'어떤 상황에서도 부드럽게 적응하는 힘. 변화가 두렵지 않아.'},{icon:'💚',title:'섬세한 공감',desc:'상대방의 마음을 잘 읽어. 그 감수성이 관계를 풍부하게 만들어.'},{icon:'🎨',title:'창의적 감각',desc:'아름다운 것을 만들고 표현하는 재능. 예술적 감각이 남달라.'}],2:[{icon:'☀️',title:'강한 에너지',desc:'어디서든 존재감이 있어. 열정과 밝은 에너지로 주변을 환하게.'},{icon:'🔥',title:'뜨거운 추진력',desc:'일단 시작하면 끝까지 달리는 불같은 열정.'},{icon:'🤝',title:'사람을 끄는 힘',desc:'자연스러운 따뜻함으로 사람들이 주변에 모여들어.'}],3:[{icon:'🕯️',title:'깊은 통찰',desc:'표면 아래를 꿰뚫는 예리한 직관. 남들이 보지 못하는 것을 먼저 느껴.'},{icon:'🎭',title:'감성 표현',desc:'풍부한 내면을 섬세하게 표현해. 사람 마음을 움직이는 힘.'},{icon:'✨',title:'예술적 감성',desc:'아름다움과 의미에 민감해. 평범한 것에서 특별함을 발견해.'}],4:[{icon:'🏔️',title:'믿음직한 안정감',desc:'어떤 상황에서도 흔들리지 않는 든든함. 사람들이 믿고 의지해.'},{icon:'📋',title:'체계적 실행',desc:'계획을 세우고 꼼꼼하게 실행하는 능력이 탁월해.'},{icon:'🛡️',title:'강한 책임감',desc:'맡은 일은 끝까지 해내는 강한 책임감.'}],5:[{icon:'🌱',title:'따뜻한 배려',desc:'주변 사람을 세심하게 챙기는 따뜻함. 관계를 깊게 만드는 힘.'},{icon:'🤲',title:'넉넉한 수용력',desc:'다양한 사람과 상황을 넉넉하게 받아들이는 포용력.'},{icon:'🌸',title:'섬세한 관찰',desc:'작은 것도 놓치지 않는 세심한 눈.'}],6:[{icon:'⚔️',title:'결단력',desc:'필요한 순간에 망설임 없이 결정하는 힘. 그 명확함이 신뢰를 만들어.'},{icon:'🎯',title:'목표 집중력',desc:'목표를 향해 흔들리지 않고 집중하는 힘이 강해.'},{icon:'💎',title:'높은 기준',desc:'높은 기준을 유지하는 완벽주의. 탁월한 결과를 만들어.'}],7:[{icon:'💫',title:'완벽한 심미안',desc:'아름다움을 만들고 알아보는 섬세한 감각. 디테일에서 진가가 드러나.'},{icon:'🔍',title:'정밀한 분석',desc:'세밀하게 분석하고 완성도를 높이는 능력.'},{icon:'🌙',title:'깊은 내면',desc:'풍부한 내면과 독자적인 관점.'}],8:[{icon:'🌊',title:'넓은 시야',desc:'큰 그림을 보는 안목. 멀리 내다보는 통찰력이 강점.'},{icon:'💡',title:'창의적 발상',desc:'남들이 생각 못한 아이디어를 내는 창의성.'},{icon:'🚀',title:'자유로운 도전',desc:'새로운 것에 두려움 없이 뛰어드는 용기.'}],9:[{icon:'💧',title:'깊은 감성',desc:'내면이 풍부하고 감수성이 높아. 특별한 통찰을 만들어.'},{icon:'🔮',title:'예리한 직관',desc:'보이지 않는 것을 느끼는 강한 직관.'},{icon:'🌌',title:'자유로운 상상',desc:'무한한 상상력으로 새로운 세계를 그려내.'}]},
ja:{0:[{icon:'🌲',title:'強い推進力',desc:'一度目標を定めると最後までやり遂げる力があります。その粘り強さが最大の武器です。'},{icon:'👑',title:'リーダーシップ',desc:'自然と人の前に立つカリスマ。方向を定め、導くことが得意です。'},{icon:'💡',title:'独創的な発想',desc:'他人が思いつかない方法で問題を解決します。枠にとらわれない自由な視点。'}],1:[{icon:'🌿',title:'柔軟な適応力',desc:'どんな状況でもしなやかに適応する力。変化を恐れません。'},{icon:'💚',title:'繊細な共感',desc:'相手の心をよく読み取ります。その感受性が関係を豊かにします。'},{icon:'🎨',title:'創造的な感覚',desc:'美しいものを作り表現する才能。芸術的なセンスが抜群です。'}],2:[{icon:'☀️',title:'強いエネルギー',desc:'どこにいても存在感があります。情熱と明るいエネルギーで周囲を照らします。'},{icon:'🔥',title:'熱い推進力',desc:'一度始めると最後まで走り抜ける、炎のような情熱。'},{icon:'🤝',title:'人を惹きつける力',desc:'自然な温かさで、人々が周囲に集まってきます。'}],3:[{icon:'🕯️',title:'深い洞察',desc:'表面下を見抜く鋭い直感。他人が気づかないことを先に感じ取ります。'},{icon:'🎭',title:'感性の表現',desc:'豊かな内面を繊細に表現します。人の心を動かす力。'},{icon:'✨',title:'芸術的感性',desc:'美しさと意味に敏感です。平凡なものから特別さを発見します。'}],4:[{icon:'🏔️',title:'頼もしい安定感',desc:'どんな状況でも揺るがない安心感。人々から信頼され、頼りにされます。'},{icon:'📋',title:'体系的な実行',desc:'計画を立て、きっちりと実行する能力に長けています。'},{icon:'🛡️',title:'強い責任感',desc:'引き受けた仕事は最後までやり遂げる強い責任感。'}],5:[{icon:'🌱',title:'温かい配慮',desc:'周囲の人を細やかに気遣う温かさ。関係を深める力。'},{icon:'🤲',title:'寛容な受容力',desc:'多様な人々や状況を寛大に受け入れる包容力。'},{icon:'🌸',title:'繊細な観察',desc:'些細なことも見逃さない、細やかな目。'}],6:[{icon:'⚔️',title:'決断力',desc:'必要な瞬間に迷いなく決断する力。その明確さが信頼を生みます。'},{icon:'🎯',title:'目標集中力',desc:'目標に向かって揺るがずに集中する力が強いです。'},{icon:'💎',title:'高い基準',desc:'高い基準を維持する完璧主義。卓越した結果を生み出します。'}],7:[{icon:'💫',title:'完璧な審美眼',desc:'美しさを作り、見極める繊細な感覚。ディテールで真価を発揮します。'},{icon:'🔍',title:'精密な分析',desc:'細部まで分析し、完成度を高める能力。'},{icon:'🌙',title:'深い内面',desc:'豊かな内면と独自の視点。'}],8:[{icon:'🌊',title:'広い視野',desc:'大局を見る目。遠くを見通す洞察力が強みです。'},{icon:'💡',title:'独創的な発想',desc:'他人が思いつかないアイデアを出す創造性。'},{icon:'🚀',title:'自由な挑戦',desc:'新しいことに恐れず飛び込む勇気。'}],9:[{icon:'💧',title:'深い感性',desc:'内面が豊かで感受性が高いです。特別な洞察を生み出します。'},{icon:'🔮',title:'鋭い直感',desc:'見えないものを感じる強い直感。'},{icon:'🌌',title:'自由な想像',desc:'無限の想像力で新しい世界を描き出します。'}]},
en:{0:[{icon:'🌲',title:'Strong Drive',desc:'Power to push to the end once a goal is set. Persistence is your weapon.'},{icon:'👑',title:'Leadership',desc:'Natural charisma. Fits well with setting direction and leading.'},{icon:'💡',title:'Original Thinking',desc:'Solving problems in ways others haven\'t thought of. Free perspective.'}],1:[{icon:'🌿',title:'Flexible Adaptability',desc:'Power to adapt smoothly to any situation. Not afraid of change.'},{icon:'💚',title:'Delicate Empathy',desc:'Good at reading others\' minds. Sensitivity enriches relationships.'},{icon:'🎨',title:'Creative Sense',desc:'Talent for creating and expressing beauty. Extraordinary artistic sense.'}],2:[{icon:'☀️',title:'Strong Energy',desc:'Presence everywhere. Brightens surroundings with passion and energy.'},{icon:'🔥',title:'Fiery Momentum',desc:'Blazing passion that runs to the end once started.'},{icon:'🤝',title:'People Magnet',desc:'People gather around due to your natural warmth.'}],3:[{icon:'🕯️',title:'Deep Insight',desc:'Sharp intuition piercing below the surface. Sensing things early.'},{icon:'🎭',title:'Emotional Expression',desc:'Delicately expressing a rich inner world. Power to move hearts.'},{icon:'✨',title:'Artistic Sensibility',desc:'Sensitive to beauty and meaning. Finding special in the ordinary.'}],4:[{icon:'🏔️',title:'Reliable Stability',desc:'Reliability that doesn\'t waver. People trust and rely on you.'},{icon:'📋',title:'Systematic Execution',desc:'Excellent at planning and meticulous execution.'},{icon:'🛡️',title:'Strong Responsibility',desc:'Strong sense of responsibility to complete assigned tasks.'}],5:[{icon:'🌱',title:'Warm Consideration',desc:'Caring for people meticulously. Power to deepen relationships.'},{icon:'🤲',title:'Generous Acceptance',desc:'Broad-mindedness to accept various people and situations.'},{icon:'🌸',title:'Delicate Observation',desc:'Attentive eye that doesn\'t miss small details.'}],6:[{icon:'⚔️',title:'Decisiveness',desc:'Deciding without hesitation when needed. Clarity builds trust.'},{icon:'🎯',title:'Goal Focus',desc:'Strong ability to focus on goals without wavering.'},{icon:'💎',title:'High Standards',desc:'Perfectionism maintaining high standards. Creating excellent results.'}],7:[{icon:'💫',title:'Perfect Aesthetics',desc:'Delicate sense for recognizing beauty. Value revealed in details.'},{icon:'🔍',title:'Precise Analysis',desc:'Ability to analyze in detail and improve completeness.'},{icon:'🌙',title:'Deep Inner Self',desc:'Rich inner world and unique perspective.'}],8:[{icon:'🌊',title:'Wide Vision',desc:'Eye for the big picture. Far-sighted insight is your strength.'},{icon:'💡',title:'Creative Ideas',desc:'Creativity to produce ideas others haven\'t thought of.'},{icon:'🚀',title:'Free Challenge',desc:'Courage to dive into new things without fear.'}],9:[{icon:'💧',title:'Deep Sensitivity',desc:'Rich inner world and high sensitivity. Creating special insights.'},{icon:'🔮',title:'Sharp Intuition',desc:'Strong intuition for sensing what isn\'t visible.'},{icon:'🌌',title:'Free Imagination',desc:'Drawing new worlds with infinite imagination.'}]},
'zh-TW':{0:[{icon:'🌲',title:'強大的推動力',desc:'一旦設定目標就有堅持到底的力量。那份韌性是你最強大的武器。'},{icon:'👑',title:'領導力',desc:'自然而然站在前面的領袖魅力。擅長確定方向並帶領團隊。'},{icon:'💡',title:'獨創發想',desc:'以他人想不到的方式解決問題。不被框架束縛的自由視角。'}],1:[{icon:'🌿',title:'柔韌的適應力',desc:'在任何情況下都能溫柔適應的力量。無懼變化。'},{icon:'💚',title:'細膩的共感',desc:'擅長察覺對方的內心。那份感性讓關係變得豐富。'},{icon:'🎨',title:'創意感官',desc:'創造並表達美感的天賦。藝術觸覺過人。'}],2:[{icon:'☀️',title:'強大的能量',desc:'無論在哪裡都極具存在感。用熱情和開朗的能量照亮周圍。'},{icon:'🔥',title:'熾熱的推動力',desc:'一旦開始就奔向終點的火焰熱情。'},{icon:'🤝',title:'吸引人的力量',desc:'自然的溫暖讓身邊總是聚集著人群。'}],3:[{icon:'🕯️',title:'深邃的洞察',desc:'看穿表象下的銳利直覺。先於他人感受到隱藏的事物。'},{icon:'🎭',title:'感性表達',desc:'細膩地表達豐富的內心。觸動人心的力量。'},{icon:'✨',title:'藝術感性',desc:'對美和意義非常敏感。能從平凡中發現不凡。'}],4:[{icon:'🏔️',title:'可靠的安定感',desc:'在任何情況下都不動搖的穩重。讓人信賴與依靠。'},{icon:'📋',title:'體系化執行',desc:'制定計劃並縝密執行的能力非常卓越。'},{icon:'🛡️',title:'強大的責任感',desc:'堅持完成任務的強大責任心。'}],5:[{icon:'🌱',title:'溫暖的體貼',desc:'細心照顧周圍人的溫暖。加深關係的力量。'},{icon:'🤲',title:'寬大的包容力',desc:'能廣泛接受各種人和情況的包容心。'},{icon:'🌸',title:'細膩的觀察',desc:'連小細節也不放過的細心雙眼。'}],6:[{icon:'⚔️',title:'決斷力',desc:'在必要時刻毫不猶豫做出決定的力量。那份果斷建立信賴。'},{icon:'🎯',title:'目標專注力',desc:'向著目標堅定不移專注的力量很強。'},{icon:'💎',title:'高標準',desc:'維持高標準的完美主義。創造卓越的成果。'}],7:[{icon:'💫',title:'完美的審美眼',desc:'創造並辨別美感的細膩觸覺。在細節中顯現真價值。'},{icon:'🔍',title:'精密分析',desc:'詳細分析並提升完成度的能力。'},{icon:'🌙',title:'深沉的內心',desc:'豐富的內心世界與獨特觀點。'}],8:[{icon:'🌊',title:'廣闊的視野',desc:'看大局的眼光。遠見卓識是你的優勢。'},{icon:'💡',title:'獨創發想',desc:'提出他人想不到的點子的創造力。'},{icon:'🚀',title:'自由挑戰',desc:'無懼投入新事物的勇氣。'}],9:[{icon:'💧',title:'深沉的感性',desc:'內心豐富且感性強。創造特別的洞見。'},{icon:'🔮',title:'銳利直覺',desc:'能感受到肉眼不可見之物的強大直覺。'},{icon:'🌌',title:'自由想像',desc:'用無限的想像力描繪新的世界。'}]},
'zh-CN':{0:[{icon:'🌲',title:'强大的推动力',desc:'一旦设定目标就有坚持到底的力量。那份韧性是你最强大的武器。'},{icon:'👑',title:'领导力',desc:'自然而然站在前面的领袖魅力。擅长确定方向并带领团队。'},{icon:'💡',title:'独创发想',desc:'以他人想不到的方式解决问题。不被框架束缚的自由视角。'}],1:[{icon:'🌿',title:'柔韧的适应力',desc:'在任何情况下都能温柔适应的力量。无惧变化。'},{icon:'💚',title:'细腻的共感',desc:'擅长察觉对方内心。那份感性让关系变得丰富。'},{icon:'🎨',title:'创意感官',desc:'创造并表达美感的天赋。艺术触觉过人。'}],2:[{icon:'☀️',title:'强大的能量',desc:'无论在哪里都极具存在感。用热情和开朗的能量照亮周围。'},{icon:'🔥',title:'炽热的推动力',desc:'一旦开始就奔向终点的火焰热情。'},{icon:'🤝',title:'吸引人的力量',desc:'自然的温暖让身边总是聚集着人群。'}],3:[{icon:'🕯️',title:'深邃的洞察',desc:'看穿表象下的锐利直觉。先于他人感受到隐藏的事物。'},{icon:'🎭',title:'感性表达',desc:'细腻地表达丰富的内心。触动人心的力量。'},{icon:'✨',title:'艺术感性',desc:'对美和意义非常敏感。能从平凡中发现不凡。'}],4:[{icon:'🏔️',title:'可靠的安定感',desc:'在任何情况下都不动摇的稳重。让人信赖与依靠。'},{icon:'📋',title:'体系化执行',desc:'制定计划并缜密执行的能力非常卓越。'},{icon:'🛡️',title:'强大的责任感',desc:'坚持完成任务的强大责任心。'}],5:[{icon:'🌱',title:'温暖的体贴',desc:'细心照顾周围人的温暖。加深关系的力量。'},{icon:'🤲',title:'宽大的包容力',desc:'能广泛接受各种人和情况的包容心。'},{icon:'🌸',title:'细腻的观察',desc:'连小细节也不放过的细心双眼。'}],6:[{icon:'⚔️',title:'决断力',desc:'在必要时刻毫不犹豫做出决定的力量。那份果断建立信赖。'},{icon:'🎯',title:'目标专注力',desc:'向着目标坚定不移专注的力量很强。'},{icon:'💎',title:'高标准',desc:'维持高标准的完美主义。创造卓越的成果。'}],7:[{icon:'💫',title:'完美的审美眼',desc:'创造并辨别美感的细腻触觉。在细节中显现真价值。'},{icon:'🔍',title:'精密分析',desc:'详细分析并提升完成度的能力。'},{icon:'🌙',title:'深沉的内心',desc:'丰富内心世界与独特观点。'}],8:[{icon:'🌊',title:'广阔的视野',desc:'看大局的眼光。远见卓识是你的优势。'},{icon:'💡',title:'独创发想',desc:'提出他人想不到的点子的创造力。'},{icon:'🚀',title:'自由挑战',desc:'无惧投入新事物的勇气。'}],9:[{icon:'💧',title:'深沉的感性',desc:'内心丰富且感性强。创造特别的洞见。'},{icon:'🔮',title:'锐利直觉',desc:'能感受到肉眼不可见之物的强大直觉。'},{icon:'🌌',title:'自由想象',desc:'用无限的想象力描绘新的世界。'}]},
vi:{0:[{icon:'🌲',title:'Động Lực Mạnh Mẽ',desc:'Sức mạnh đẩy đến cùng một khi đã đặt mục tiêu. Sự bền bỉ là vũ khí lớn nhất của bạn.'},{icon:'👑',title:'Lãnh Đạo',desc:'Sức cuốn hút tự nhiên đứng trước mọi người. Phù hợp với việc định hướng và dẫn dắt.'},{icon:'💡',title:'Tư Duy Độc Đáo',desc:'Giải quyết vấn đề theo cách người khác chưa nghĩ tới. Góc nhìn tự do không bị ràng buộc.'}],1:[{icon:'🌿',title:'Thích Nghi Linh Hoạt',desc:'Sức mạnh thích nghi mượt mà với mọi tình huống. Không sợ sự thay đổi.'},{icon:'💚',title:'Đồng Cảm Tinh Tế',desc:'Giỏi đọc tâm trí người khác. Sự nhạy cảm làm phong phú các mối quan hệ.'},{icon:'🎨',title:'Cảm Quan Sáng Tạo',desc:'Tài năng tạo ra và biểu đạt cái đẹp. Cảm quan nghệ thuật phi thường.'}],2:[{icon:'☀️',title:'Năng Lượng Mạnh Mẽ',desc:'Có sức hiện diện ở khắp nơi. Làm sáng bừng xung quanh bằng đam mê và năng lượng.'},{icon:'🔥',title:'Động Lực Bốc Lửa',desc:'Đam mê bùng cháy chạy đến cùng một khi đã bắt đầu.'},{icon:'🤝',title:'Thu Hút Mọi Người',desc:'Mọi người tụ hội xung quanh do sự ấm áp tự nhiên của bạn.'}],3:[{icon:'🕯️',title:'Trực Giác Sâu Sắc',desc:'Trực giác sắc bén xuyên thấu bề mặt. Cảm nhận mọi thứ sớm hơn người khác.'},{icon:'🎭',title:'Biểu Đạt Cảm Xúc',desc:'Biểu đạt tinh tế thế giới nội tâm phong phú. Sức mạnh chạm đến trái tim.'},{icon:'✨',title:'Cảm Nhận Nghệ Thuật',desc:'Nhạy cảm với cái đẹp và ý nghĩa. Tìm thấy điều đặc biệt trong điều bình thường.'}],4:[{icon:'🏔️',title:'Sự Ổn Định Đáng Tin',desc:'Sự đáng tin cậy không lung lay. Mọi người tin tưởng và dựa vào bạn.'},{icon:'📋',title:'Thực Thi Có Hệ Thống',desc:'Xuất sắc trong lập kế hoạch và thực thi tỉ mỉ.'},{icon:'🛡️',title:'Trách Nhiệm Mạnh Mẽ',desc:'Tinh thần trách nhiệm mạnh mẽ để hoàn thành nhiệm vụ được giao.'}],5:[{icon:'🌱',title:'Quan Tâm Ấm Áp',desc:'Chăm sóc mọi người tỉ mỉ. Sức mạnh làm sâu sắc các mối quan hệ.'},{icon:'🤲',title:'Bao Dung Rộng Lượng',desc:'Tấm lòng rộng lớn chấp nhận nhiều người và hoàn cảnh khác nhau.'},{icon:'🌸',title:'Quan Sát Tinh Tế',desc:'Đôi mắt chú ý không bỏ qua những chi tiết nhỏ.'}],6:[{icon:'⚔️',title:'Quyết Đoán',desc:'Quyết định không do dự khi cần thiết. Sự rõ ràng đó tạo nên sự tin tưởng.'},{icon:'🎯',title:'Tập Trung Mục Tiêu',desc:'Khả năng tập trung mạnh mẽ vào mục tiêu không lung lay.'},{icon:'💎',title:'Tiêu Chuẩn Cao',desc:'Chủ nghĩa hoàn hảo duy trì tiêu chuẩn cao. Tạo ra kết quả xuất sắc.'}],7:[{icon:'💫',title:'Thẩm Mỹ Hoàn Hảo',desc:'Cảm nhận tinh tế nhận biết cái đẹp. Giá trị được thể hiện trong từng chi tiết.'},{icon:'🔍',title:'Phân Tích Chính Xác',desc:'Khả năng phân tích chi tiết và nâng cao độ hoàn thiện.'},{icon:'🌙',title:'Nội Tâm Sâu Sắc',desc:'Thế giới nội tâm phong phú và góc nhìn độc đáo.'}],8:[{icon:'🌊',title:'Tầm Nhìn Rộng',desc:'Nhãn quan nhìn bức tranh lớn. Trực giác nhìn xa là điểm mạnh của bạn.'},{icon:'💡',title:'Ý Tưởng Sáng Tạo',desc:'Sự sáng tạo đưa ra những ý tưởng mà người khác chưa nghĩ tới.'},{icon:'🚀',title:'Thách Thức Tự Do',desc:'Dũng cảm lao vào những điều mới mẻ không sợ hãi.'}],9:[{icon:'💧',title:'Cảm Xúc Sâu Sắc',desc:'Thế giới nội tâm phong phú và độ nhạy cảm cao. Tạo ra những trực giác đặc biệt.'},{icon:'🔮',title:'Trực Giác Sắc Bén',desc:'Trực giác mạnh mẽ cảm nhận những điều không nhìn thấy được.'},{icon:'🌌',title:'Trí Tưởng Tượng Tự Do',desc:'Vẽ nên những thế giới mới bằng trí tưởng tượng vô hạn.'}]}
};

function generateLocal(year,month,day,gender,dw,natal,mbtiData){
  const{yS,yB,mS,mB,dS,dB}=natal;
  const ec={'木':0,'火':0,'土':0,'金':0,'水':0};
  [yS,mS,dS].forEach(s=>ec[ELEM_NAME[SE_ELEM[s]]]++);
  [yB,mB,dB].forEach(b=>ec[ELEM_NAME[BE_ELEM[b]]]++);

  const ijk=mbtiData.iljuKey;
  const ijd=mbtiData.iljuData;
  const mg=mbtiData.monthGod;
  const mgd=SIPSUNG_DATA[mg]||{};
  
  // 다국어 일주 타이틀/설명
  const locI=locIlju(ijd, dS, dB, gender);
  const title=locI.title;
  const ijDesc=locI.desc;
  // 다국어 십성 이름
  const mgTitle=locGod(mg);
  const domGodName=locGod((mbtiData.dominant||{}).god||'비견');

  // 천간별 강점 (다국어)
  const strengths = (STEM_STR_I18N[LANG] || STEM_STR_I18N.ko)[dS] || STEM_STR_I18N.ko[0];

  // 계절 분석 (MZ 감성)
  const seasonIdx = [2,3,4].includes(mB) ? 0 : [5,6,7].includes(mB) ? 1 : [8,9,10].includes(mB) ? 2 : 3;
  const seasonDesc = (ESSENCE_SEASON_I18N[LANG] || ESSENCE_SEASON_I18N.ko)[dS]?.[seasonIdx] || "";

  // 오행 개수 분석
  const elemAnalysis = {};
  ['木','火','土','金','水'].forEach(e => {
    const count = ec[e] || 0;
    const data = (ELEM_QUANT_I18N[LANG] || ELEM_QUANT_I18N.ko)[e];
    let desc = count === 0 ? data.need : count >= 3 ? data.too : data.best;
    elemAnalysis[e] = { key: data.key, desc: desc, count: count };
  });

  // 최강 십성 정보
  const dom=mbtiData.dominant||{god:'비견',positions:[]};
  const domData=SIPSUNG_DATA[dom.god]||{};

  // 가중치 구조 기반 dim 이유 (MZ 타겟: 간단 명료)
  const dimReasons={};
  const _dimTpl=t('rDimTpl');
  ['E','I','N','S','T','F','J','P'].forEach(k=>{
    const axK=k==='E'||k==='I'?'E':k==='N'||k==='S'?'N':k==='T'||k==='F'?'T':'J';
    const mgVal=(mgd[axK]||0);
    const mgDir=mgVal>0?t('rDimOut'):t('rDimIn');
    const _stemMeta=t('stemMeta')||[];
    dimReasons[k]=_dimTpl.replace('{mg}',mgTitle).replace('{dir}',mgDir).replace('{stem}',_stemMeta[dS]).replace('{ilju}',ijk).replace('{dom}',domGodName);
  });

  // 캐릭터 한줄 설명
  const characterLine=generateCharacterLine(mbtiData.mbti, ijd, mg, gender, natal);

  // 올해 에너지 (세운) 계산
  const nowYear=dw.nowYear;
  const swS=((nowYear-4)%10+10)%10, swB=((nowYear-4)%12+12)%12;
  const swHan=hRead(SE[swS]+BE[swB]);

  // 동적 텍스트 생성 (i18n) — 번역된 변수 사용
  const _rStory=(t('rStory')||'').replace('{desc}',ijDesc).replace('{mg}',mgTitle).replace('{title}',title).replace('{age}',dw.currentAge);
  const _rDesc1=(t('rDesc1')||'').replace('{title}',title).replace('{desc}',ijDesc).replace('{mg}',mgTitle).replace('{dom}',domGodName);
  const _rDesc2=(t('rDesc2')||'').replace('{stem}',(t('stemMeta')||[])[dw.stemIdx]).replace('{elemM}',(t('elemMeta')||{})[dw.stemElem]||'').replace('{nowYear}',nowYear).replace('{swHan}',swHan);
  const _rDw=(t('rDw')||'').replace('{stem}',(t('stemMeta')||[])[dw.stemIdx]).replace('{myStem}',(t('stemMeta')||[])[dS])+(dw.progress>50?(t('rDwLate')||''):(t('rDwEarly')||''));
  const _rSw=(t('rSw')||'').replace('{nowYear}',nowYear).replace('{swHan}',swHan).replace('{stem}',(t('stemMeta')||[])[dS])+(SE_ELEM[dS]===1?(t('rSwFire')||''):SE_ELEM[dS]===4?(t('rSwWater')||''):(t('rSwOther')||''));

  return{
    mbti:mbtiData.mbti, dims:mbtiData.dims.map(d=>({...d,reason:dimReasons[d.chosen]||''})),
    monthGod:mg, monthStemGod:mbtiData.monthStemGod,
    dominant:dom, dominantData:domData,
    iljuKey:ijk, iljuData:ijd, iljuTitle:title, iljuDesc:ijDesc,
    characterLine,
    pillars:[
      {label:'년주',stemCh:SE[yS],branchCh:BE[yB],stemHan:SH[yS],branchHan:BH[yB]},
      {label:'월주',stemCh:SE[mS],branchCh:BE[mB],stemHan:SH[mS],branchHan:BH[mB]},
      {label:'일주',stemCh:SE[dS],branchCh:BE[dB],stemHan:SH[dS],branchHan:BH[dB]}
    ],
    elements:mbtiData.elements||ec,
    elemAnalysis,
    seasonDesc,
    story:_rStory, desc1:_rDesc1, desc2:_rDesc2, dwDesc:_rDw, swDesc:_rSw,
    swS, swB, swHan, nowYear,
    traits:[title.slice(0,4),mgTitle,domGodName],
    strengths:strengths,
    corrections:mbtiData.corrections,
  };
}

let curBirth='',curGender='',curQ={},GEMINI_KEY='';
let curElements={'木':0,'火':0,'土':0,'金':0,'水':0},curMType='',curCharLine='';

function toggleSettings(){
  const m=document.getElementById('modal-settings');
  m.style.display=(m.style.display==='none'?'flex':'none');
}
function saveApiKey(){
  const k=document.getElementById('api-key').value.trim();
  GEMINI_KEY=k;
  localStorage.setItem('saju_gemini_key',k);
  showToast('API 키가 저장되었습니다 🌙');
  toggleSettings();
}
// 초기 키 로드
(function(){
  const saved=localStorage.getItem('saju_gemini_key');
  if(saved){GEMINI_KEY=saved; document.getElementById('api-key').value=saved;}
})();

function setGender(g){
  curGender=g;
  document.getElementById('btn-m').className='gbtn'+(g==='m'?' sel-m':'');
  document.getElementById('btn-f').className='gbtn'+(g==='f'?' sel-f':'');
}
function setQ(n,v){
  curQ[n]=(curQ[n]===v?'':v);
  ['a','b'].forEach(x=>{
    const el=document.getElementById('q'+n+'-'+x);
    if(el){el.classList.remove('sel');if(curQ[n]===x)el.classList.add('sel');}
  });
}
function setEx(v,g){document.getElementById('bi').value=v;setGender(g);document.getElementById('err-msg').style.display='none';}
function showPage(id){document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));document.getElementById(id).classList.add('active');window.scrollTo(0,0);}
function showToast(msg){const t=document.getElementById('toast');t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2600);}
function reset(){window.location.hash='';showPage('pg-input');}

function validateInput(v){
  if(!/^\d{6}$/.test(v))return false;
  const mm=+v.slice(2,4),dd=+v.slice(4,6);
  if(mm<1||mm>12||dd<1||dd>31)return false;
  const d=new Date(parseYear(+v.slice(0,2)),mm-1,dd);
  return d.getMonth()===mm-1;
}

/* 접기/펼치기 토글 */
function toggleSection(btn){
  const detail=btn.nextElementSibling;
  const expanded=btn.getAttribute('aria-expanded')==='true';
  btn.setAttribute('aria-expanded', !expanded);
  detail.classList.toggle('open');
}

async function callGemini(prompt){
  if(!GEMINI_KEY) return null;
  try {
    const resp = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_KEY}`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        contents: [{parts: [{text: prompt}]}],
        generationConfig: {maxOutputTokens: 1000, temperature: 0.7}
      })
    });
    const json = await resp.json();
    return json.candidates?.[0]?.content?.parts?.[0]?.text || null;
  } catch(e) {
    console.error('Gemini Error:', e);
    return null;
  }
}

async function startAnalysis(){
  const val=document.getElementById('bi').value.trim();
  if(!validateInput(val)||!curGender){document.getElementById('err-msg').style.display='block';return;}
  document.getElementById('err-msg').style.display='none';
  curBirth=val;
  window.location.hash='birth='+val+'&g='+curGender;
  showPage('pg-loading');

  const stepEl=document.getElementById('ld-step');
  stepEl.innerHTML='<span class="ld-dots">'+t('ld1')+'</span>';
  await new Promise(r=>setTimeout(r,400));
  stepEl.innerHTML='<span class="ld-dots">'+t('ld2')+'</span>';
  await new Promise(r=>setTimeout(r,500));
  stepEl.innerHTML='<span class="ld-dots">'+t('ld3')+'</span>';
  
  try{
    const yy=+val.slice(0,2),mm=+val.slice(2,4),dd=+val.slice(4,6),yr=parseYear(yy);
    const natal=getNatal(yr,mm,dd);
    const dw=computeDaewoon(yr,mm,dd,curGender);
    const mbtiData=computeMBTI_V3(natal,curGender,curQ[1],curQ[2],curQ[3],curQ[4]);
    const result=generateLocal(yr,mm,dd,curGender,dw,natal,mbtiData);
    
    // AI 심층 분석 (비동기)
    let aiInsight = null;
    if(GEMINI_KEY){
      stepEl.innerHTML='<span class="ld-dots">AI 냥별이가 우주의 기운을 읽는 중</span>';
      const prompt = `생년월일: ${yr}년 ${mm}월 ${dd}일, 성별: ${curGender==='m'?'남성':'여성'}, 
      산출된 MBTI: ${result.mbti}, 일주: ${result.iljuKey}, 월주 십성: ${locGod(result.monthGod)}.
      위 정보를 바탕으로 이 사람의 타고난 기질과 2026년 운세에 대해 다정하고 귀여운 고양이 말투(~냥)로 아주 짧고 강렬한 한 문장으로 조언해줘.`;
      aiInsight = await callGemini(prompt);
    }
    
    await new Promise(r=>setTimeout(r,400));
    renderResult(val,curGender,dw,result,aiInsight);
  }catch(e){
    console.error(e);
    stepEl.innerHTML='<span style="color:var(--rose)">⚠️ 분석 실패. 잠시 후 다시 시도해 주세요.</span>';
    setTimeout(()=>showPage('pg-input'),2800);
  }
}

/* ╔══════════════════════════════════════════╗
   ║  결과 렌더링                              ║
   ╚══════════════════════════════════════════╝ */
function renderResult(val,gender,dw,ai,aiInsight){
  const yy=+val.slice(0,2),mm=+val.slice(2,4),dd=+val.slice(4,6),yr=parseYear(yy);
  
  const mType=ai.mbti;
  curMType=mType;curElements=ai.elements||{'木':0,'火':0,'土':0,'金':0,'水':0};
  saveLastResult();
  curCharLine=(ai.characterLine||'').replace(/<[^>]+>/g,'').replace(/✨\s*냥별이의 비밀 조언\s*/,'').trim();
  const metaBase=META[mType]||META['INFP'];
  const lKey = LANG.startsWith('ja')?'ja':LANG.startsWith('zh')?'zh':LANG.startsWith('ko')?'ko':'en';
  
  // Localized field helper
  const gm = (f) => {
    const val = metaBase[f];
    if (val && typeof val === 'object' && !Array.isArray(val)) return val[lKey] || val['ko'] || val['en'] || '';
    return val;
  };

  const gStr=gender==='m'?t('male'):t('female');
  const mgd=SIPSUNG_DATA[ai.monthGod]||{};
  const ssTitle=t('ss_'+ai.monthGod)||mgd.title;
  const _sh=SH_I18N[LANG]||SH, _bh=BH_I18N[LANG]||BH;

  // ── 히어로 ──
  document.getElementById('r-btags').innerHTML=
    '<span class="btag">📅 '+yr+'.'+String(mm).padStart(2,'0')+'.'+String(dd).padStart(2,'0')+'</span>'+
    '<span class="btag">'+gStr+' · '+dw.currentAge+t('age')+'</span>'+
    '<span class="btag">'+mgd.emoji+' '+ssTitle+'</span>'+
    '<span class="btag" style="background:rgba(255,255,255,.12)">'+t('tagBorn')+'</span>';
  document.getElementById('r-mbti').textContent=mType;
  document.getElementById('r-typename').innerHTML='<span style="margin-right:4px">'+metaBase.emoji+'</span>'+gm('name');
  document.getElementById('r-tagline').textContent=t('tagPre')+gm('tag');

  // ── AI Insight (냥별이의 비밀 조언) ──
  let charLineHtml = ai.characterLine||'';
  if(aiInsight){
    charLineHtml = `<div style="color:var(--gold);margin-bottom:4px">✨ 냥별이의 비밀 조언</div>${aiInsight}`;
  }
  document.getElementById('r-charline').innerHTML=charLineHtml;

  // ── 특이사항 (계절쏠림/결핍) ──
  const specEl=document.getElementById('r-special');
  if(ai.specialNote){
    specEl.style.display='block';
    specEl.innerHTML='<div style="padding:10px 14px;border-radius:14px;background:rgba(182,143,232,.06);border:1px solid rgba(182,143,232,.15);font-size:11px;color:var(--g1);line-height:1.6">'+ai.specialNote+'</div>';
  } else {
    specEl.style.display='none';
  }

  // ── MBTI 산출 구조 카드 (3요소 가중 평균) ──
  const domGod=ai.dominant||{god:'비견',positions:[]};
  const domGodData=SIPSUNG_DATA[domGod.god]||{};
  const domTitle=t('ss_'+domGod.god)||domGodData.title||domGod.god;

  document.getElementById('r-sipsung-hero').innerHTML=
    '<div style="display:flex;align-items:center;gap:8px;margin-bottom:14px">'+
    '<div class="sipsung-badge">'+t('structTitle')+'</div></div>'+
    // ① 월지 격국 50%
    '<div style="display:flex;align-items:center;gap:8px;margin-bottom:10px">'+
    '<span style="background:linear-gradient(135deg,var(--lav),#8B5CF6);border-radius:8px;padding:3px 8px;font-size:10px;font-weight:800;color:#fff">50%</span>'+
    '<span style="font-size:14px;font-weight:800;color:#E0D0FF">'+mgd.emoji+' '+ssTitle+'</span>'+
    '<span style="font-size:11px;color:rgba(255,255,255,.5)">'+t('structMonth')+'</span></div>'+
    '<div style="font-size:12px;color:rgba(255,255,255,.65);line-height:1.65;margin-bottom:12px">'+(t('ss_'+ai.monthGod)||mgd.title)+' — '+tSip(ai.monthGod,'sub')+'</div>'+
    // ② 일주 30%
    '<div style="display:flex;align-items:center;gap:8px;margin-bottom:10px">'+
    '<span style="background:rgba(126,212,188,.85);border-radius:8px;padding:3px 8px;font-size:10px;font-weight:800;color:#fff">30%</span>'+
    '<span style="font-size:14px;font-weight:800;color:#A8E8D0">'+hRead(ai.iljuKey)+'</span>'+
    '<span style="font-size:11px;color:rgba(255,255,255,.5)">'+t('structIlju')+'</span></div>'+
    '<div style="font-size:12px;color:rgba(255,255,255,.65);line-height:1.65;margin-bottom:12px">'+ai.iljuTitle+' — '+ai.iljuDesc+'</div>'+
    // ③ 최강 십성 20%
    '<div style="display:flex;align-items:center;gap:8px;margin-bottom:10px">'+
    '<span style="background:rgba(255,209,102,.85);border-radius:8px;padding:3px 8px;font-size:10px;font-weight:800;color:#2D1B4E">20%</span>'+
    '<span style="font-size:14px;font-weight:800;color:#FFE08A">'+(domGodData.emoji||'⚡')+' '+domTitle+'</span>'+
    '<span style="font-size:11px;color:rgba(255,255,255,.5)">'+t('structDom')+'</span></div>'+
    '<div style="font-size:12px;color:rgba(255,255,255,.65);line-height:1.65">'+domTitle+' — '+tSip(domGod.god,'sub')+'</div>'+
    '<div style="margin-top:12px;padding-top:10px;border-top:1px solid rgba(182,143,232,.2);font-size:11px;color:rgba(255,255,255,.5)">'+
    t('sipWhy')+tSip(ai.monthGod,'why')+'</div>';

  // ── 대운 카드 ──
  document.getElementById('r-dw-card').innerHTML=
    '<div style="display:flex;align-items:center;gap:8px;margin-bottom:10px">'+
    '<div class="flow-badge gold">'+t('flowDw')+'</div>'+
    '<span style="font-size:11px;color:rgba(255,255,255,.4)">'+dw.startAge+'~'+dw.endAge+t('age')+'</span></div>'+
    '<div class="flow-body">'+
    '<div class="flow-chars"><div class="flow-stem">'+dw.stemCh+'</div><div class="flow-branch">'+dw.branchCh+'</div>'+
    '<div style="font-size:10px;color:rgba(255,255,255,.4);margin-top:3px">'+_sh[dw.stemIdx]+_bh[dw.branchIdx]+'</div></div>'+
    '<div class="flow-desc">'+ai.dwDesc+'</div></div>'+
    '<div class="flow-bar-bg"><div class="flow-bar" id="r-dw-bar" style="width:0%"></div></div>';

  // ── 세운 카드 ──
  const swSname = _sh[ai.swS], swBname = _bh[ai.swB];
  document.getElementById('r-sw-card').innerHTML=
    '<div style="display:flex;align-items:center;gap:8px;margin-bottom:10px">'+
    '<div class="flow-badge blue">'+t('flowSw').replace('{0}', ai.nowYear)+'</div>'+
    '<span style="font-size:11px;color:rgba(255,255,255,.4)">'+t('flowSwSub').replace('{0}', ai.nowYear).replace('{1}', ai.swHan)+'</span></div>'+
    '<div class="flow-body">'+
    '<div class="flow-chars"><div class="flow-stem">'+SE[ai.swS]+'</div><div class="flow-branch">'+BE[ai.swB]+'</div>'+
    '<div style="font-size:10px;color:rgba(255,255,255,.4);margin-top:3px">'+swSname+' '+swBname+'</div></div>'+
    '<div class="flow-desc">'+ai.swDesc+'</div></div>';

  // ── 접기/펼치기 섹션들 ──
  let html='';
  const natal_=getNatal(yr,mm,dd);

  // 1) 일주 기질
  html+=makeSection('lav','🌙',t('secIlju')+' — '+hRead(ai.iljuKey),ai.iljuTitle,
    '<div style="padding:10px 12px;border-radius:10px;background:rgba(182,143,232,.06);border:1px solid rgba(182,143,232,.12);margin-bottom:12px;font-size:11px;color:var(--g1);line-height:1.65">'+
    t('secIljuDiffNote')+'</div>'+
    '<div class="detail-label">'+t('secIljuL')+'</div>'+
    '<div class="detail-txt"><strong>'+hRead(ai.iljuKey)+'</strong> — '+ai.iljuDesc+'</div>'+
    '<div class="detail-txt">'+t('secStem')+' <strong>'+hRead(SE[natal_.dS])+'</strong>: '+(SMS_I18N[LANG]||SMS_I18N.ko)[natal_.dS]+'</div>'+
    '<div class="detail-txt">'+t('secBranch')+' <strong>'+hRead(BE[natal_.dB])+'</strong>: '+(BMS_I18N[LANG]||BMS_I18N.ko)[natal_.dB]+'</div>'+
    (ai.corrections.length?'<div class="detail-txt" style="color:var(--g3);font-size:11px">'+t('secCorrNote').replace('{0}',ai.corrections.join(', '))+'</div>':''));

  // 2) 나는 이런 사람
  html+=makeSection('rose','💬',t('secMe'),t('secMeSub'),
    '<div class="detail-label">'+t('secBase')+'</div><div class="detail-txt">'+ai.desc1+'</div>'+
    '<div class="detail-label mt-10">'+t('secNow')+'</div><div class="detail-txt">'+ai.desc2+'</div>');

  // 3) 성격 지도 (4축)
  let dimHtml='';
  (ai.dims||[]).forEach(d=>{
    const pct=d.pct,isL=d.chosen===d.left;
    dimHtml+='<div class="dim-item"><div class="dim-top"><div class="dim-letters"><span style="color:'+(isL?'var(--ink)':'var(--g3)')+';font-weight:800">'+d.left+'</span><span style="color:var(--g3);margin:0 3px">/</span><span style="color:'+(!isL?'var(--ink)':'var(--g3)')+';font-weight:800">'+d.right+'</span></div><div class="dim-pct">'+d.chosen+' '+pct+'%</div></div><div class="dim-bar-bg"><div class="dim-bar-fill" data-w="'+pct+'" style="width:0%"></div></div></div>';
  });
  html+=makeSection('sky','📊',t('secMap'),t('secMapSub'),dimHtml);

  // 4) 강점
  let strHtml='';
  (ai.strengths||[]).forEach(s=>{
    strHtml+='<div class="str-item"><div class="str-icon">'+s.icon+'</div><div><div class="str-title">'+s.title+'</div><div class="str-desc">'+s.desc+'</div></div></div>';
  });
  html+=makeSection('gold','💎',t('secStr'),t('secStrSub'),strHtml);

  // 5) 성격 키워드
  let traitHtml='<div style="display:flex;flex-wrap:wrap;gap:5px">';
  (ai.traits||[]).forEach((k,i)=>traitHtml+='<span class="trait-chip'+(i<2?' hi':'')+'">'+k+'</span>');
  traitHtml+='</div>';
  html+=makeSection('lav','⚡',t('secKw'),t('secKwSub'),traitHtml);

  // 6) 궁합
  html+=makeSection('rose','💞',t('secCompat'),t('secCompatSub'),
    '<div class="compat-row"><div class="compat-card good"><div class="compat-head">'+t('compatGood')+'</div>'+metaBase.good.map(x=>'<span class="compat-type">'+x+'</span>').join('')+'<p style="font-size:10px;color:var(--g2);margin-top:8px;line-height:1.4">'+t('compatGoodR')+'</p></div>'+
    '<div class="compat-card care"><div class="compat-head">'+t('compatCare')+'</div>'+metaBase.care.map(x=>'<span class="compat-type">'+x+'</span>').join('')+'<p style="font-size:10px;color:var(--g2);margin-top:8px;line-height:1.4">'+t('compatCareR')+'</p></div></div>');

  // 7) 나와 비슷한 사람들 (Localized)
  let figHtml='';
  const localizedFigs = metaBase.figs[lKey] || metaBase.figs['en'] || [];
  localizedFigs.forEach(f=>{
    figHtml+='<div class="fig-card"><div class="fig-em">'+f.e+'</div><div><div class="fig-name">'+f.n+'</div><div class="fig-role">'+f.r+'</div></div></div>';
  });
  figHtml+='<div class="fig-note">'+gm('figNote')+'</div>';
  html+=makeSection('mint','🌟',t('secFig'),t('secFigSub'),figHtml);

  // 8) 잘 맞는 일
  let carHtml='<div class="detail-txt" style="margin-bottom:8px">'+gm('careerDesc')+'</div>';
  const localizedCareers = (metaBase.careers && typeof metaBase.careers === 'object' && !Array.isArray(metaBase.careers)) ? (metaBase.careers[lKey] || metaBase.careers['ko']) : metaBase.careers;
  (localizedCareers||[]).forEach(c=>{
    carHtml+='<div class="career-chip'+(c.t?' top':'')+'"><div class="career-main">'+c.e+' '+c.n+'</div>'+(c.d?'<div class="career-desc">'+c.d+'</div>':'')+'</div>';
  });
  html+=makeSection('mint','🚀',t('secCareer'),t('secCareerSub'),carHtml);

  // 9) 세상의 성격 지도
  let distHtml='<div class="dist-grid">';
  DIST_ORDER.forEach(tp=>{const pct=DIST[tp]||5;const[fg,bg]=typeColor(tp);const isMe=tp===mType;
    distHtml+='<div class="dist-cell'+(isMe?' me':'')+'" style="background:'+bg+'"><div class="dist-type" style="color:'+fg+';font-size:'+(isMe?'11px':'10px')+'">'+tp+'</div><div class="dist-pct" style="color:'+fg+'">'+pct+'%</div></div>';
  });
  distHtml+='</div>';
  html+=makeSection('sky','🌍',t('secDist'),t('secDistSub'),distHtml);

  // 10) 사주원국 + 에너지 분석
  let sajuHtml=`<div class="detail-txt" style="margin-bottom:16px;padding:12px;background:rgba(182,143,232,0.05);border-radius:12px;border:1px dashed var(--lav);font-size:12px">${t('sajuInfo')}</div>`;
  sajuHtml+='<div class="pillar-grid">';
  const cls=['yr','mo','dy'];const plbls=[t('yrP'),t('moP'),t('dyP')];
  (ai.pillars||[]).forEach((p,i)=>{
    const _han=hRead(p.stemCh+p.branchCh);
    sajuHtml+='<div class="pillar '+cls[i]+'"><div class="pillar-lbl">'+plbls[i]+'</div><div class="pillar-stem">'+p.stemCh+'</div><div class="pillar-branch">'+p.branchCh+'</div><div class="pillar-han">'+_han+'</div></div>';
  });
  sajuHtml+='</div>';
  
  // 계절 분석 추가
  if(ai.seasonDesc){
    sajuHtml += `<div style="margin-top:16px;padding:12px;background:rgba(255,209,102,0.1);border:1px solid rgba(255,209,102,0.3);border-radius:12px;font-size:12px;line-height:1.6;color:var(--ink)">
      <div style="font-weight:800;color:#E8960A;margin-bottom:4px;display:flex;align-items:center;gap:4px">${t('secSynTitle')}</div>
      ${ai.seasonDesc}
    </div>`;
  }

  sajuHtml+='<div class="elem-row">';
  ['木','火','土','金','水'].forEach(e=>{
    sajuHtml+='<div class="elem-cell" style="background:var(--surface);border:1px solid var(--border);flex:1">'+
      '<div class="elem-icon">'+ELEM_ICON[e]+'</div>'+
      '<div class="elem-name" style="font-weight:700;color:var(--ink)">'+e+'</div>'+
      '<div class="elem-cnt" style="color:'+ELEM_COLOR[e]+';font-size:18px">'+(ai.elements[e]||0)+'</div>'+
      '</div>';
  });
  sajuHtml+='</div>';
  
  // 오행 상세 분석 리스트
  sajuHtml += '<div style="margin-top:12px;display:grid;gap:8px">';
  ['木','火','土','金','水'].forEach(e => {
    const an = ai.elemAnalysis[e];
    const statusColor = an.count === 0 ? 'var(--g3)' : an.count >= 3 ? 'var(--rose)' : 'var(--mint)';
    const statusIcon = an.count === 0 ? '⚪' : an.count >= 3 ? '🔴' : '🟢';
    sajuHtml += `<div style="padding:10px;background:var(--g4);border-radius:10px;display:flex;align-items:center;gap:10px">
      <div style="font-size:18px">${ELEM_ICON[e]}</div>
      <div style="flex:1">
        <div style="display:flex;justify-content:space-between;align-items:center">
          <span style="font-size:12px;font-weight:800">${an.key}</span>
          <span style="font-size:10px;font-weight:700;color:${statusColor}">${statusIcon} ${an.count}개</span>
        </div>
        <div style="font-size:11px;color:var(--g2);margin-top:2px">${an.desc}</div>
      </div>
    </div>`;
  });
  sajuHtml += '</div>';

  sajuHtml+='<div style="text-align:center;font-size:10px;color:var(--g3);margin-top:12px">'+t('sajuNote')+'</div>';
  html+=makeSection('gold','🪐',t('secSaju'),t('secSajuSub'),sajuHtml);

  document.getElementById('r-sections').innerHTML=html;
  
  // Footer
  const footerHtml = `<div style="text-align:center;padding:20px 16px;font-size:9px;color:var(--g3);line-height:1.5">${t('copyright')}</div>`;
  document.getElementById('r-sections').innerHTML += footerHtml;

  const _natal=getNatal(yr,mm,dd);
  renderIlun(_natal);
  renderBookmark();
  showPage('pg-result');

  // 애니메이션
  setTimeout(()=>{
    document.getElementById('r-dw-bar').style.width=dw.progress+'%';
    document.querySelectorAll('.dim-bar-fill').forEach(b=>b.style.width=b.dataset.w+'%');
  },300);
}

function makeSection(color,icon,title,summary,content){
  return '<div class="sec"><div class="sec-card">'+
    '<button class="sec-toggle" onclick="toggleSection(this)" aria-expanded="false">'+
    '<div class="sec-icon si-'+color+'">'+icon+'</div>'+
    '<div style="flex:1"><div class="sec-title">'+title+'</div><div class="sec-summary">'+summary+'</div></div>'+
    '<span class="sec-chevron">▼</span></button>'+
    '<div class="sec-detail"><div class="sec-detail-inner">'+content+'</div></div>'+
    '</div></div>';
}

/* 이미지 저장 */
function _roundRect(ctx,x,y,w,h,r){ctx.beginPath();ctx.moveTo(x+r,y);ctx.lineTo(x+w-r,y);ctx.quadraticCurveTo(x+w,y,x+w,y+r);ctx.lineTo(x+w,y+h-r);ctx.quadraticCurveTo(x+w,y+h,x+w-r,y+h);ctx.lineTo(x+r,y+h);ctx.quadraticCurveTo(x,y+h,x,y+h-r);ctx.lineTo(x,y+r);ctx.quadraticCurveTo(x,y,x+r,y);ctx.closePath();}
function _wrapText(ctx,text,x,y,maxW,lineH,maxL,align){
  align=align||'left';ctx.textAlign=align;
  const words=text.split(/\s+/);let line='',lines=0;
  for(let i=0;i<words.length;i++){
    const test=line+words[i]+' ';
    if(ctx.measureText(test).width>maxW&&i>0){ctx.fillText(line.trim(),x,y);line=words[i]+' ';y+=lineH;lines++;if(maxL&&lines>=maxL-1)break;}
    else line=test;
  }
  if(line.trim())ctx.fillText(line.trim(),x,y);
}
function _drawMascot(ctx,x,y,size){
  return new Promise(r=>{
    const sym=document.getElementById('mascot');
    if(!sym){r();return;}
    const svgStr='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="'+size+'" height="'+size+'">'+sym.innerHTML+'</svg>';
    const blob=new Blob([svgStr],{type:'image/svg+xml'});
    const url=URL.createObjectURL(blob);
    const img=new Image();
    img.onload=()=>{ctx.drawImage(img,x,y,size,size);URL.revokeObjectURL(url);r();};
    img.onerror=()=>{URL.revokeObjectURL(url);r();};
    img.src=url;
  });
}
/* ── 포토카드: 상수 & 헬퍼 ── */
const ELEM_PAL={
  '木':{bg:['#0D2B1A','#1B5E35','#2E8B57'],accent:'#5DBB8A',text:'#C8F0D8',dots:['#2E8B57','#5DBB8A','#A8D8B8']},
  '火':{bg:['#2B0A0A','#7B1515','#C0392B'],accent:'#FF6B6B',text:'#FFE0D8',dots:['#C0392B','#FF6B6B','#FFB3A0']},
  '土':{bg:['#2B1800','#7A4000','#C07820'],accent:'#F4C05A',text:'#FFF3CD',dots:['#C07820','#F4C05A','#FFE08A']},
  '金':{bg:['#0C1520','#1E2E44','#344E6E'],accent:'#A8C4DC',text:'#E8F2FA',dots:['#4A6A8A','#8AAAC8','#C0D8EC']},
  '水':{bg:['#020E28','#0A2755','#0D47A1'],accent:'#42A5F5',text:'#BBDEFB',dots:['#0D47A1','#1976D2','#64B5F6']},
};
const CARD_TITLES={
  '木':['THE FOREST SOUL','THE GREEN DREAM','THE WILD SPIRIT','THE LEAF HEART'],
  '火':['THE SUMMER FLAME','THE BLAZING STAR','THE BRIGHT FORCE','THE FIRE DREAM'],
  '土':['THE GOLDEN OASIS','THE EARTH KEEPER','THE WARM GROUND','THE QUIET PEAK'],
  '金':['THE CRYSTAL MIND','THE SILVER SOUL','THE SHARP LIGHT','THE CLEAR SKY'],
  '水':['THE DEEP CURRENT','THE MOON TIDE','THE OCEAN HEART','THE WINTER FLOW'],
};
const MBTI16=['INTJ','INTP','ENTJ','ENTP','INFJ','INFP','ENFJ','ENFP','ISTJ','ISFJ','ESTJ','ESFJ','ISTP','ISFP','ESTP','ESFP'];
const ELEM_CHR={'木':'🌿','火':'🔥','土':'🌏','金':'✨','水':'💧'};

function _getDomElem(el){let mx=0,dom='土';Object.entries(el||{}).forEach(([k,v])=>{if(v>mx){mx=v;dom=k;}});return dom;}

function _loadQR(){
  return new Promise(res=>{
    if(window.QRCode){res();return;}
    const s=document.createElement('script');
    s.src='https://cdn.jsdelivr.net/npm/qrcode@1.5.3/build/qrcode.min.js';
    s.onload=res;s.onerror=res;
    document.head.appendChild(s);
  });
}

/* 모달 열기 */
function saveImage(){
  if(!curMType){showToast(t('pcTitle')||'결과를 먼저 확인해주세요');return;}
  const today=new Date();
  document.getElementById('card-date').value=today.toISOString().split('T')[0];
  document.getElementById('card-nick').value='';
  document.getElementById('card-msg').value='';
  document.getElementById('msg-cnt').textContent='0';
  // i18n 모달 텍스트
  document.getElementById('pc-title-el').textContent=t('pcTitle');
  document.getElementById('pc-sub-el').textContent=t('pcSub');
  document.getElementById('pc-nick-lbl').textContent=t('pcNick');
  document.getElementById('pc-msg-lbl').innerHTML=t('pcMsg')+' <span class="pc-limit">'+t('pcMsgLimit')+'</span>';
  document.getElementById('card-nick').placeholder=t('pcNickPh');
  document.getElementById('card-msg').placeholder=t('pcMsgPh');
  document.getElementById('pc-date-lbl').textContent=t('pcDate');
  document.getElementById('pc-color-lbl').textContent=t('pcColor');
  document.getElementById('pc-cancel-btn').textContent=t('pcCancel');
  document.getElementById('pc-gen-btn').textContent=t('pcGen');
  // 퍼스널 컬러 프리뷰
  const dom=_getDomElem(curElements);
  const pal=ELEM_PAL[dom]||ELEM_PAL['土'];
  document.getElementById('pc-dots').innerHTML=pal.dots.map(c=>'<div class="pc-dot" style="background:'+c+'"></div>').join('');
  document.getElementById('pc-elem-tag').textContent=t('pcElem').replace('{0}',ELEM_CHR[dom]+' '+dom);
  document.getElementById('photo-modal').classList.add('open');
  setTimeout(()=>document.getElementById('card-nick').focus(),300);
}
function closePhotoModal(){document.getElementById('photo-modal').classList.remove('open');}
function closeImgPreview(){
  document.getElementById('img-preview-modal').classList.remove('open');
  document.getElementById('img-preview').src='';
}

/* 포토카드 생성 */
async function generatePhotoCard(){
  const btn=document.getElementById('pc-gen-btn');
  btn.disabled=true;btn.textContent=t('pcGenerating');
  try{await _generatePhotoCard();}finally{btn.disabled=false;btn.textContent=t('pcGen');}
}
async function _generatePhotoCard(){
  const nick=(document.getElementById('card-nick').value.trim()||'MY STAR').toUpperCase();
  const msg=document.getElementById('card-msg').value.trim()||'Born under the stars ✨';
  const dateVal=document.getElementById('card-date').value;
  const dateDisp=dateVal?dateVal.replace(/-/g,'.'):'';
  closePhotoModal();

  await document.fonts.ready;

  const dom=_getDomElem(curElements);
  const pal=ELEM_PAL[dom]||ELEM_PAL['土'];
  const mIdx=Math.max(0,MBTI16.indexOf(curMType));
  const cardTitle=(CARD_TITLES[dom]||CARD_TITLES['土'])[mIdx%4];
  const charLine=curCharLine.trim();

  const S=600,dpr=Math.min(window.devicePixelRatio||1,2);
  const cv=document.createElement('canvas');
  cv.width=S*dpr;cv.height=S*dpr;
  const ctx=cv.getContext('2d');
  ctx.scale(dpr,dpr);

  // ── 배경 그라데이션 ──
  const bgG=ctx.createLinearGradient(0,0,S*.65,S);
  bgG.addColorStop(0,pal.bg[0]);bgG.addColorStop(.5,pal.bg[1]);bgG.addColorStop(1,pal.bg[2]);
  ctx.fillStyle=bgG;ctx.fillRect(0,0,S,S);

  // 상단 액센트 바 (4px)
  const topBar=ctx.createLinearGradient(0,0,S,0);
  topBar.addColorStop(0,pal.accent);topBar.addColorStop(.7,pal.accent);topBar.addColorStop(1,'rgba(255,255,255,0)');
  ctx.fillStyle=topBar;ctx.fillRect(0,0,S,5);

  // 배경 장식 원
  ctx.save();ctx.globalAlpha=.07;
  ctx.beginPath();ctx.arc(S+100,-100,280,0,Math.PI*2);ctx.fillStyle=pal.accent;ctx.fill();
  ctx.beginPath();ctx.arc(-80,S+80,220,0,Math.PI*2);ctx.fillStyle=pal.accent;ctx.fill();
  ctx.restore();

  // 미세 격자 패턴
  ctx.save();ctx.globalAlpha=.028;ctx.strokeStyle='#fff';ctx.lineWidth=.6;
  for(let i=0;i<S;i+=40){ctx.beginPath();ctx.moveTo(i,0);ctx.lineTo(i,S);ctx.stroke();ctx.beginPath();ctx.moveTo(0,i);ctx.lineTo(S,i);ctx.stroke();}
  ctx.restore();

  // ── 마스코트 (우상단 소형) ──
  await _drawMascot(ctx,S-115,10,105);

  // ── 브랜드 pill ──
  ctx.save();
  ctx.fillStyle='rgba(255,255,255,.1)';_roundRect(ctx,18,16,108,26,13);ctx.fill();
  ctx.fillStyle=pal.accent;ctx.font='bold 11px Nunito,sans-serif';ctx.textAlign='left';
  ctx.fillText('Birth MBTI 🌙',28,33);ctx.restore();

  // ══ MBTI HERO ZONE ══
  // 오행 에너지 뱃지 (가운데)
  const energyTxt=ELEM_CHR[dom]+'  '+dom+' ENERGY';
  ctx.save();ctx.font='700 11px Nunito,sans-serif';
  const etw=ctx.measureText(energyTxt).width+22;
  const etx=(S-etw)/2;
  ctx.fillStyle=pal.accent;ctx.globalAlpha=.18;_roundRect(ctx,etx,68,etw,22,11);ctx.fill();
  ctx.globalAlpha=1;ctx.fillStyle=pal.accent;ctx.textAlign='center';
  ctx.fillText(energyTxt,S/2,83);ctx.restore();

  // MBTI 큰 글자 — 중앙, 최대 강조
  ctx.save();ctx.textAlign='center';
  // 글로우 레이어 (뒤)
  ctx.font='900 90px Nunito,sans-serif';
  ctx.globalAlpha=.15;ctx.fillStyle=pal.accent;
  ctx.fillText(curMType,S/2+3,183);
  // 메인 흰 글자
  ctx.globalAlpha=1;ctx.fillStyle='#fff';
  ctx.shadowColor=pal.accent;ctx.shadowBlur=24;ctx.shadowOffsetX=0;ctx.shadowOffsetY=0;
  ctx.fillText(curMType,S/2,180);ctx.restore();

  // 타입명 (현지화) — MBTI 바로 아래
  const typename=(document.getElementById('r-typename')?.textContent||'').replace(/^\S+\s*/,'').trim();
  ctx.save();ctx.font='600 16px "Gowun Dodum",Nunito,sans-serif';ctx.textAlign='center';
  ctx.fillStyle='rgba(255,255,255,.88)';ctx.fillText(typename,S/2,204);ctx.restore();

  // 카드 타이틀 (THE SUMMER OASIS 스타일)
  ctx.save();ctx.font='600 12px Nunito,sans-serif';ctx.textAlign='center';
  ctx.fillStyle=pal.accent;ctx.globalAlpha=.72;ctx.fillText(cardTitle,S/2,222);ctx.restore();

  // ── 캐릭터 설명 박스 ─ 핵심: "나는 어떤 사람인지" ──
  if(charLine){
    ctx.save();
    // 유리 박스
    ctx.fillStyle='rgba(255,255,255,.06)';
    ctx.strokeStyle=pal.accent;ctx.globalAlpha=.2;ctx.lineWidth=1;
    _roundRect(ctx,18,234,S-36,82,14);ctx.fill();ctx.stroke();
    ctx.globalAlpha=1;
    ctx.font='13px "Gowun Dodum",Nunito,sans-serif';
    ctx.fillStyle='rgba(255,255,255,.9)';
    _wrapText(ctx,charLine,S/2,258,S-72,20,3,'center');
    ctx.restore();
  }

  // ── 오행 에너지 바 차트 (소형) ──
  const elems=['木','火','土','金','水'];
  const eColors={'木':'#5DBB8A','火':'#FF6B6B','土':'#F4C05A','金':'#A8C4DC','水':'#42A5F5'};
  const maxC=Math.max(...Object.values(curElements),1);
  const bY=333,bH=9,bW=(S-56)/5-6,bSpac=(S-56)/5;
  ctx.save();
  elems.forEach((e,i)=>{
    const bx=28+i*bSpac,cnt=curElements[e]||0,fw=bW*(cnt/maxC);
    ctx.fillStyle='rgba(255,255,255,.07)';_roundRect(ctx,bx,bY,bW,bH,4);ctx.fill();
    if(fw>0){ctx.fillStyle=eColors[e];_roundRect(ctx,bx,bY,fw,bH,4);ctx.fill();}
    ctx.font='bold 10px Nunito,sans-serif';ctx.textAlign='center';
    ctx.fillStyle=cnt>0?eColors[e]:'rgba(255,255,255,.22)';ctx.fillText(e,bx+bW/2,bY+bH+13);
    if(cnt>0){ctx.font='9px Nunito,sans-serif';ctx.fillStyle='rgba(255,255,255,.45)';ctx.fillText(cnt,bx+bW/2,bY+bH+24);}
  });
  ctx.restore();

  // ── 그라데이션 구분선 ──
  ctx.save();
  const divG=ctx.createLinearGradient(22,0,S-22,0);
  divG.addColorStop(0,'transparent');divG.addColorStop(.3,pal.accent);divG.addColorStop(.7,pal.accent);divG.addColorStop(1,'transparent');
  ctx.strokeStyle=divG;ctx.globalAlpha=.3;ctx.lineWidth=1;
  ctx.beginPath();ctx.moveTo(22,374);ctx.lineTo(S-22,374);ctx.stroke();ctx.restore();

  // ── 하단 좌: 닉네임 + 메시지 + 날짜 ──
  const siteUrl='https://sajumbti-app.web.app/';
  const rightEdge=S-22;
  // 닉네임
  ctx.save();ctx.font='900 24px Nunito,sans-serif';ctx.textAlign='left';
  ctx.fillStyle='#fff';ctx.shadowColor=pal.accent;ctx.shadowBlur=8;
  ctx.fillText(nick,22,416);ctx.restore();

  // 감성 메시지
  ctx.save();ctx.font='italic 15px "Gowun Dodum",Nunito,sans-serif';
  ctx.fillStyle=pal.text;ctx.globalAlpha=.92;
  _wrapText(ctx,'"'+msg+'"',22,443,rightEdge-22,21,2,'left');ctx.restore();

  // 날짜
  if(dateDisp){
    ctx.save();ctx.font='11px Nunito,sans-serif';ctx.textAlign='left';
    ctx.fillStyle='rgba(255,255,255,.4)';ctx.fillText(dateDisp,22,472);ctx.restore();
  }

  // ── 하단 브랜딩: 홈페이지 주소 + 저작권 ──
  ctx.save();
  ctx.font='bold 11px Nunito,sans-serif';ctx.textAlign='left';
  ctx.fillStyle='rgba(255,255,255,.55)';ctx.fillText(siteUrl,22,S-24);
  ctx.font='10px Nunito,sans-serif';
  ctx.fillStyle='rgba(255,255,255,.28)';ctx.fillText('© Birth MBTI  ·  All rights reserved',22,S-10);
  ctx.restore();

  // ── 저장 + 링크 자동 복사 ──
  const shareUrl=location.href.split('#')[0]+'#birth='+curBirth+'&g='+curGender;
  try{await navigator.clipboard.writeText(shareUrl);}catch(e){}

  // dataURL로 변환해 미리보기 모달에 표시 (인앱브라우저 팝업차단 우회)
  const dataUrl=cv.toDataURL('image/jpeg',0.93);
  const fname='birthmbi_'+curMType+'_'+nick+'.jpg';
  const isMobile=/Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  const previewImg=document.getElementById('img-preview');
  const guideEl=document.getElementById('img-preview-guide');
  const dlBtn=document.getElementById('img-download-btn');

  previewImg.src=dataUrl;
  if(isMobile){
    guideEl.textContent='이미지를 꾹 눌러서 저장하세요 📷';
    dlBtn.style.display='none';
  }else{
    guideEl.textContent='아래 다운로드 버튼을 누르거나 이미지를 우클릭해 저장하세요.';
    dlBtn.href=dataUrl;
    dlBtn.download=fname;
    dlBtn.style.display='block';
  }
  document.getElementById('img-preview-modal').classList.add('open');
  showToast(t('pcToast'));
}

/* 공유 */
function getSiteUrl(){
  const base='https://sajumbti-app.web.app';
  return LANG!=='ko'?base+'?lang='+LANG:base;
}
function shareApp(){
  const url=getSiteUrl();
  if(navigator.share){navigator.share({title:t('title'),text:t('shareText')||t('shareApp'),url}).catch(()=>copyUrl(url));}
  else{copyUrl(url);}
}
function share(){
  const base=location.href.split('#')[0].split('?')[0];
  const langParam=LANG!=='ko'?'?lang='+LANG:'';
  const url=base+langParam+'#birth='+curBirth+'&g='+curGender;
  const text=(t('shareText')||t('title')+' 🌙✨')+' '+url;
  if(navigator.share){navigator.share({title:t('title'),text,url}).catch(()=>copyUrl(url));}
  else{copyUrl(url);}
}
function copyUrl(url){
  if(navigator.clipboard){navigator.clipboard.writeText(url).then(()=>showToast(t('copied'))).catch(()=>showToast('Link: '+url));}
  else{showToast('Link: '+url);}
}

/* ── 전역 함수 노출 (ES 모듈에서 onclick 핸들러 사용을 위해) ── */
window.toggleLang=toggleLang;
window.setLang=setLang;
window.toggleSettings=toggleSettings;
window.saveApiKey=saveApiKey;
window.setGender=setGender;
window.setQ=setQ;
window.setEx=setEx;
window.startAnalysis=startAnalysis;
window.shareApp=shareApp;
window.share=share;
window.reset=reset;
window.saveImage=saveImage;
window.closePhotoModal=closePhotoModal;
window.closeImgPreview=closeImgPreview;
window.generatePhotoCard=generatePhotoCard;
window.toggleSection=toggleSection;

/* ╔══════════════════════════════════════════╗
   ║  재방문자 웰컴 화면                       ║
   ╚══════════════════════════════════════════╝ */
const WC_I18N={
  ko:{greet:'반가워, {t}야! 🌙',full:'✨ 오늘 전체 운세 보기',reset:'← 다른 생일 분석하기',
      ilunTitle:'오늘의 일운',dayOf:'일·월·화·수·목·금·토'},
  ja:{greet:'おかえり、{t}！ 🌙',full:'✨ 今日の運勢を全部見る',reset:'← 別の生年月日を分析',
      ilunTitle:'今日の日運',dayOf:'日·月·火·水·木·金·土'},
  en:{greet:'Welcome back, {t}! 🌙',full:'✨ See My Full Daily Fortune',reset:'← Analyze a different birthday',
      ilunTitle:"Today's Fortune",dayOf:'Sun·Mon·Tue·Wed·Thu·Fri·Sat'},
  'zh-TW':{greet:'歡迎回來，{t}！ 🌙',full:'✨ 查看今日完整運勢',reset:'← 分析其他生日',
      ilunTitle:'今日運勢',dayOf:'日·一·二·三·四·五·六'},
  'zh-CN':{greet:'欢迎回来，{t}！ 🌙',full:'✨ 查看今日完整运势',reset:'← 分析其他生日',
      ilunTitle:'今日运势',dayOf:'日·一·二·三·四·五·六'},
  vi:{greet:'Chào mừng trở lại, {t}! 🌙',full:'✨ Xem Toàn Bộ Vận May Hôm Nay',reset:'← Phân tích ngày sinh khác',
      ilunTitle:'Vận May Hôm Nay',dayOf:'CN·T2·T3·T4·T5·T6·T7'}
};

function saveLastResult(){
  try{
    localStorage.setItem('saju_last_birth',curBirth);
    localStorage.setItem('saju_last_gender',curGender);
    localStorage.setItem('saju_last_mbti',curMType);
    localStorage.setItem('saju_last_elements',JSON.stringify(curElements));
    localStorage.setItem('saju_last_saved',Date.now().toString());
  }catch(e){}
}

function checkReturningUser(){
  // URL hash로 직접 접근하면 기존 분석 흐름 유지
  if(location.hash.includes('birth=')) return false;
  try{
    const birth=localStorage.getItem('saju_last_birth');
    const gender=localStorage.getItem('saju_last_gender');
    const mbti=localStorage.getItem('saju_last_mbti');
    const elemStr=localStorage.getItem('saju_last_elements');
    if(!birth||!gender||!mbti||birth.length!==6) return false;
    curBirth=birth; curGender=gender; curMType=mbti;
    curElements=elemStr?JSON.parse(elemStr):{'木':0,'火':0,'土':0,'金':0,'水':0};
    showWelcomePage();
    return true;
  }catch(e){return false;}
}

function showWelcomePage(){
  const m=META[curMType]||META['INFP'];
  const lKey=LANG.startsWith('ja')?'ja':LANG.startsWith('zh')?'zh':LANG.startsWith('ko')?'ko':'en';
  const L=WC_I18N[LANG]||WC_I18N['ko'];
  const name=m.name?.[lKey]||m.name?.ko||curMType;
  const emoji=m.emoji||'🌙';
  const tag=m.tag?.[lKey]||m.tag?.ko||'';

  document.getElementById('wc-greeting').textContent=L.greet.replace('{t}',curMType);
  document.getElementById('wc-mbti').textContent=emoji+' '+curMType;
  document.getElementById('wc-typename').textContent=name;
  document.getElementById('wc-tag').textContent=tag;
  document.getElementById('wc-full-btn').textContent=L.full;
  document.getElementById('wc-reset-btn').textContent=L.reset;

  // 일운
  const yy=+curBirth.slice(0,2),mm2=+curBirth.slice(2,4),dd=+curBirth.slice(4,6),yr=parseYear(yy);
  const natal=getNatal(yr,mm2,dd);
  renderIlun(natal,'wc-ilun');
  showPage('pg-welcome');
}

function showFullResult(){
  showPage('pg-loading');
  const stepEl=document.getElementById('ld-step');
  if(stepEl) stepEl.innerHTML='<span class="ld-dots">'+(WC_I18N[LANG]||WC_I18N['ko']).ilunTitle+'...</span>';
  setTimeout(async()=>{
    try{
      const val=curBirth;
      const yy=+val.slice(0,2),mm2=+val.slice(2,4),dd=+val.slice(4,6),yr=parseYear(yy);
      const natal=getNatal(yr,mm2,dd);
      const dw=computeDaewoon(yr,mm2,dd,curGender);
      const mbtiData=computeMBTI_V3(natal,curGender,undefined,undefined,undefined,undefined);
      const result=generateLocal(yr,mm2,dd,curGender,dw,natal,mbtiData);
      renderResult(val,curGender,dw,result,null);
    }catch(e){console.error(e);showPage('pg-welcome');}
  },350);
}

function clearSaved(){
  try{
    ['saju_last_birth','saju_last_gender','saju_last_mbti','saju_last_elements','saju_last_saved']
      .forEach(k=>localStorage.removeItem(k));
  }catch(e){}
  curBirth='';curGender='';curMType='';curElements={'木':0,'火':0,'土':0,'金':0,'水':0};
  document.getElementById('bi').value='';
  setGender('');
  showPage('pg-input');
}
window.showFullResult=showFullResult;
window.clearSaved=clearSaved;

/* ╔══════════════════════════════════════════╗
   ║  궁합 (Compatibility) Feature            ║
   ╚══════════════════════════════════════════╝ */

/* ── 오늘의 일운 (日運) ── */
// 오행별 메시지 (천간 기준)
const ILUN_MSG = {
  ko:{
    rel:{
      same:'오늘은 나와 같은 기운의 날이에요. 나다운 것에 집중하면 막힘없이 흘러갈 거예요 🌿',
      saeng_give:'내 기운이 오늘의 에너지를 키워주는 날이에요. 베풀고 이끌수록 더 빛날 거예요 ✨',
      saeng_recv:'오늘의 에너지가 나를 북돋아 주는 날이에요. 도움을 받아들이고 충전하세요 💫',
      geuk_give:'내 기운이 오늘 에너지를 통제하려는 날이에요. 무리하지 않고 여유를 가지세요 🛡️',
      geuk_recv:'오늘 에너지가 나를 자극하는 날이에요. 집중력이 오르고 결단력이 생겨요 ⚡',
    },
    study:{
      same:'익숙한 과목을 복습하며 기본을 다지세요. 오늘 공부한 내용은 오래 기억됩니다 📖',
      saeng_give:'친구나 스터디에서 설명해주세요. 남에게 가르칠 때 실력이 완성되는 날이에요 📢',
      saeng_recv:'강의·선생님·참고서를 최대한 활용하세요. 무엇이든 빠르게 흡수되는 날이에요 🧲',
      geuk_give:'취약 과목·어려운 문제에 정면 도전하세요. 오늘 넘으면 진짜 실력이 됩니다 ⚔️',
      geuk_recv:'약간의 긴장감이 오히려 집중력을 높여줘요. 모의고사·타이머 학습으로 실전 감각을 키우세요 ⚡',
    },
    work:{
      same:'평소대로 차분히 일하세요. 억지로 변화를 줄 필요 없이 자연스럽게 인정받는 날이에요 🌿',
      saeng_give:'동료·후배를 돕고 아낌없이 나눠주세요. 베풀수록 신뢰가 쌓이고 팀에서 빛납니다 🌟',
      saeng_recv:'상사·선배의 조언을 열린 마음으로 받아들이세요. 오늘 받은 피드백이 성장의 발판이 돼요 💫',
      geuk_give:'주도적으로 의견을 내되 상대 반응도 살피세요. 강하게 밀되 여유를 잃지 마세요 🛡️',
      geuk_recv:'압박이 와도 흔들리지 마세요. 침착하게 대응하면 오히려 능력을 증명하는 기회가 돼요 💪',
    },
    studyTitle:'📚 오늘의 공부 전략',
    workTitle:'💼 오늘의 처세 전략',
    elem:{'木':'나무의 성장 에너지','火':'불의 열정 에너지','土':'대지의 안정 에너지','金':'쇠의 결단 에너지','水':'물의 지혜 에너지'},
    title:'🌙 오늘의 일운',
    today:'오늘',tip:'📌 이 페이지를 즐겨찾기하면 매일 확인할 수 있어요',
    myday:'내 일주',todayp:'오늘 기운'
  },
  ja:{
    rel:{
      same:'今日はあなたと同じ気の日です。自分らしさに集中すれば、流れが良くなります 🌿',
      saeng_give:'あなたの気が今日のエネルギーを育てる日です。与え導くほど輝きます ✨',
      saeng_recv:'今日のエネルギーがあなたを高める日です。サポートを受け入れ、充電しましょう 💫',
      geuk_give:'あなたの気が今日のエネルギーを制御しようとする日です。無理せず余裕を持って 🛡️',
      geuk_recv:'今日のエネルギーがあなたを刺激する日です。集中力と決断力が上がります ⚡',
    },
    study:{
      same:'得意科目を復習して基礎を固めましょう。今日学んだことは長く記憶に残ります 📖',
      saeng_give:'友達やグループに説明・指導してみましょう。教えることで実力が完成されます 📢',
      saeng_recv:'授業・先生・参考書をフル活用しましょう。吸収力が最高の日です 🧲',
      geuk_give:'苦手科目や難問に正面から挑戦しましょう。今日乗り越えれば本物の実力になります ⚔️',
      geuk_recv:'少しの緊張感が集中力を高めます。模試やタイマー学習で実戦感覚を磨きましょう ⚡',
    },
    work:{
      same:'いつも通りに落ち着いて取り組みましょう。自然体で輝ける日です 🌿',
      saeng_give:'同僚や後輩を助け、惜しみなく共有しましょう。与えるほど信頼が積まれます 🌟',
      saeng_recv:'上司や先輩のアドバイスを素直に受け取りましょう。今日のフィードバックが成長の糧になります 💫',
      geuk_give:'積極的に意見を出しつつ相手の反応も確認しましょう。力強く押しながらも余裕を忘れずに 🛡️',
      geuk_recv:'プレッシャーが来ても動じないで。冷静に対応すれば能力を証明するチャンスです 💪',
    },
    studyTitle:'📚 今日の学習戦略',
    workTitle:'💼 今日の仕事の処世術',
    elem:{'木':'木の成長エネルギー','火':'火の情熱エネルギー','土':'大地の安定エネルギー','金':'金の決断エネルギー','水':'水の知恵エネルギー'},
    title:'🌙 今日の日運',today:'今日',tip:'📌 このページをブックマークして毎日確認しよう',
    myday:'私の日柱',todayp:'今日の気'
  },
  en:{
    rel:{
      same:'Today shares your element. Stay true to yourself and things will flow naturally 🌿',
      saeng_give:'Your energy nourishes today\'s element. The more you give and lead, the brighter you shine ✨',
      saeng_recv:'Today\'s energy boosts and recharges you. Accept support and refuel 💫',
      geuk_give:'Your energy tends to control today\'s element. Take it easy and leave room to breathe 🛡️',
      geuk_recv:'Today\'s energy challenges and sharpens you. Focus and decisiveness are heightened ⚡',
    },
    study:{
      same:'Review familiar subjects and reinforce your foundations. What you study today will stick with you 📖',
      saeng_give:'Explain concepts to friends or your study group. Teaching others is the fastest path to mastery 📢',
      saeng_recv:'Make the most of classes, textbooks, and mentors. Your ability to absorb is at its peak today 🧲',
      geuk_give:'Take on your weak subjects and toughest problems head-on. Conquering them today builds real skill ⚔️',
      geuk_recv:'A little tension sharpens your focus. Try timed practice or a mock exam to build real-test confidence ⚡',
    },
    work:{
      same:'Work at your natural pace. You shine without forcing anything today 🌿',
      saeng_give:'Help colleagues and share freely. The more you give, the more trust and respect you earn 🌟',
      saeng_recv:'Welcome feedback from seniors with an open mind. Today\'s insights become tomorrow\'s growth 💫',
      geuk_give:'Take the lead and voice your ideas, but stay attuned to others\' reactions. Strength with grace 🛡️',
      geuk_recv:'Stay calm under pressure. Handling challenges with composure is your chance to prove yourself 💪',
    },
    studyTitle:'📚 Study Strategy for Today',
    workTitle:'💼 Workplace Strategy for Today',
    elem:{'木':'Wood growth energy','火':'Fire passion energy','土':'Earth stability energy','金':'Metal decisiveness energy','水':'Water wisdom energy'},
    title:'🌙 Today\'s Daily Fortune',today:'Today',tip:'📌 Bookmark this page to check your daily fortune every day',
    myday:'My Day Pillar',todayp:'Today\'s Energy'
  },
  'zh-TW':{
    rel:{
      same:'今天與您的氣場相同。專注於真實的自我，一切將順暢流動 🌿',
      saeng_give:'您的氣場滋養今日能量。越是給予引領，越是閃耀 ✨',
      saeng_recv:'今日能量助益您。接受支持，充電滿電 💫',
      geuk_give:'您的氣場傾向制約今日能量。放輕鬆，留有餘地 🛡️',
      geuk_recv:'今日能量激勵您。專注力與決斷力提升 ⚡',
    },
    study:{
      same:'複習熟悉的科目，鞏固基礎。今天學到的內容將長久留在記憶中 📖',
      saeng_give:'試著向朋友或讀書會說明、教導。教人的過程中，真正的實力才完整 📢',
      saeng_recv:'充分利用課堂、老師與教材。今天的吸收力達到最高峰 🧲',
      geuk_give:'正面迎戰弱點科目與難題。今天克服的，就是真正屬於你的實力 ⚔️',
      geuk_recv:'些許緊張感能提升專注力。用計時練習或模擬考來磨練實戰感覺 ⚡',
    },
    work:{
      same:'按照平時的節奏沉穩工作。不用刻意改變，自然地發光發熱 🌿',
      saeng_give:'協助同事與後輩，慷慨地分享。越是付出，信任就越深厚 🌟',
      saeng_recv:'以開放的心態接受上司或前輩的回饋。今天的建議將成為成長的基石 💫',
      geuk_give:'主動表達意見，同時觀察對方的反應。強勢推進，但不忘保持從容 🛡️',
      geuk_recv:'壓力來臨也不要動搖。沉著應對，反而是展現能力的絕佳時機 💪',
    },
    studyTitle:'📚 今日學習策略',
    workTitle:'💼 今日職場處世策略',
    elem:{'木':'木的成長能量','火':'火的熱情能量','土':'土的安定能量','金':'金的決斷能量','水':'水的智慧能量'},
    title:'🌙 今日運勢',today:'今天',tip:'📌 收藏此頁面，每天查看今日運勢',
    myday:'我的日柱',todayp:'今日能量'
  },
  'zh-CN':{
    rel:{
      same:'今天与您的气场相同。专注于真实的自我，一切将顺畅流动 🌿',
      saeng_give:'您的气场滋养今日能量。越是给予引领，越是闪耀 ✨',
      saeng_recv:'今日能量助益您。接受支持，充电满电 💫',
      geuk_give:'您的气场倾向制约今日能量。放轻松，留有余地 🛡️',
      geuk_recv:'今日能量激励您。专注力与决断力提升 ⚡',
    },
    study:{
      same:'复习熟悉的科目，巩固基础。今天学到的内容将长久留在记忆中 📖',
      saeng_give:'试着向朋友或学习小组说明、教导。在教人的过程中，真正的实力才完整 📢',
      saeng_recv:'充分利用课堂、老师与教材。今天的吸收力达到最高峰 🧲',
      geuk_give:'正面迎战弱点科目与难题。今天克服的，就是真正属于你的实力 ⚔️',
      geuk_recv:'些许紧张感能提升专注力。用计时练习或模拟考来磨练实战感觉 ⚡',
    },
    work:{
      same:'按照平时的节奏沉稳工作。不用刻意改变，自然地发光发热 🌿',
      saeng_give:'协助同事与下属，慷慨地分享。越是付出，信任就越深厚 🌟',
      saeng_recv:'以开放的心态接受上司或前辈的反馈。今天的建议将成为成长的基石 💫',
      geuk_give:'主动表达意见，同时观察对方的反应。强势推进，但不忘保持从容 🛡️',
      geuk_recv:'压力来临也不要动摇。沉着应对，反而是展现能力的绝佳时机 💪',
    },
    studyTitle:'📚 今日学习策略',
    workTitle:'💼 今日职场处世策略',
    elem:{'木':'木的成长能量','火':'火的热情能量','土':'土的安定能量','金':'金的决断能量','水':'水的智慧能量'},
    title:'🌙 今日运势',today:'今天',tip:'📌 收藏此页面，每天查看今日运势',
    myday:'我的日柱',todayp:'今日能量'
  },
  vi:{
    rel:{
      same:'Hôm nay có cùng năng lượng với bạn. Tập trung vào bản thân thật sự và mọi thứ sẽ trôi chảy 🌿',
      saeng_give:'Năng lượng của bạn nuôi dưỡng năng lượng hôm nay. Càng cho đi và dẫn dắt, bạn càng tỏa sáng ✨',
      saeng_recv:'Năng lượng hôm nay nâng đỡ và nạp lại cho bạn. Hãy đón nhận sự hỗ trợ và nạp đầy năng lượng 💫',
      geuk_give:'Năng lượng của bạn có xu hướng kiểm soát năng lượng hôm nay. Hãy thư thái và để lại không gian để thở 🛡️',
      geuk_recv:'Năng lượng hôm nay thách thức và mài sắc bạn. Sự tập trung và quyết đoán được nâng cao ⚡',
    },
    study:{
      same:'Ôn lại các môn quen thuộc và củng cố nền tảng. Những gì bạn học hôm nay sẽ gắn bó lâu dài 📖',
      saeng_give:'Giải thích kiến thức cho bạn bè hoặc nhóm học. Dạy người khác là con đường nhanh nhất đến sự thành thạo 📢',
      saeng_recv:'Tận dụng tối đa lớp học, sách giáo khoa và người hướng dẫn. Khả năng tiếp thu của bạn đang ở đỉnh cao hôm nay 🧲',
      geuk_give:'Tấn công trực diện các môn yếu và bài toán khó nhất. Vượt qua chúng hôm nay sẽ xây dựng kỹ năng thực sự ⚔️',
      geuk_recv:'Một chút căng thẳng mài sắc sự tập trung của bạn. Thử luyện tập có tính giờ hoặc thi thử để nâng cao phản xạ thực chiến ⚡',
    },
    work:{
      same:'Làm việc theo nhịp độ tự nhiên. Bạn tỏa sáng mà không cần gượng ép điều gì hôm nay 🌿',
      saeng_give:'Giúp đỡ đồng nghiệp và chia sẻ thoải mái. Càng cho đi, bạn càng nhận được sự tin tưởng và tôn trọng 🌟',
      saeng_recv:'Đón nhận phản hồi từ cấp trên với tâm thế cởi mở. Những hiểu biết hôm nay trở thành sự tăng trưởng ngày mai 💫',
      geuk_give:'Dẫn đầu và nêu ý kiến của bạn, nhưng hãy chú ý đến phản ứng của người khác. Mạnh mẽ nhưng duyên dáng 🛡️',
      geuk_recv:'Giữ bình tĩnh dưới áp lực. Xử lý thách thức với sự điềm tĩnh là cơ hội để chứng minh bản thân 💪',
    },
    studyTitle:'📚 Chiến Lược Học Tập Hôm Nay',
    workTitle:'💼 Chiến Lược Công Sở Hôm Nay',
    elem:{'木':'Năng lượng tăng trưởng Mộc','火':'Năng lượng đam mê Hỏa','土':'Năng lượng ổn định Thổ','金':'Năng lượng quyết đoán Kim','水':'Năng lượng trí tuệ Thủy'},
    title:'🌙 Vận May Hôm Nay',today:'Hôm nay',tip:'📌 Đánh dấu trang này để kiểm tra vận may mỗi ngày',
    myday:'Nhật Trụ Của Tôi',todayp:'Năng Lượng Hôm Nay'
  }
};

// 천간 → 오행 매핑
const STEM_ELEM={'甲':'木','乙':'木','丙':'火','丁':'火','戊':'土','己':'土','庚':'金','辛':'金','壬':'水','癸':'水'};
// 지지 → 오행
const BRANCH_ELEM={'子':'水','丑':'土','寅':'木','卯':'木','辰':'土','巳':'火','午':'火','未':'土','申':'金','酉':'金','戌':'土','亥':'水'};

function getTodayPillar(){
  // 갑자(甲子) 기준일: 1899-12-22 = JD 2415011 (getNatal 기준: 1900-01-01 = 甲戌 = position 10)
  const JD_BASE=2415011, STEM_BASE=0, BRANCH_BASE=0;
  const now=new Date();
  const y=now.getFullYear(),m=now.getMonth()+1,d=now.getDate();
  const a=Math.floor((14-m)/12), yr=y+4800-a, mn=m+12*a-3;
  const jd=d+Math.floor((153*mn+2)/5)+365*yr+Math.floor(yr/4)-Math.floor(yr/100)+Math.floor(yr/400)-32045;
  const diff=jd-JD_BASE;
  const sIdx=((diff%10)+10)%10;
  const bIdx=((diff%12)+12)%12;
  const elem=STEM_ELEM[SE[sIdx]]||'土';
  const bElem=BRANCH_ELEM[BE[bIdx]]||'土';
  return {stem:SE[sIdx],branch:BE[bIdx],stemIdx:sIdx,branchIdx:bIdx,elem,bElem};
}

function getRelation(myElem, todayElem){
  if(myElem===todayElem) return 'same';
  if(SANG_SAENG[myElem]===todayElem) return 'saeng_give';
  if(SANG_SAENG[todayElem]===myElem) return 'saeng_recv';
  if(SANG_GEUK[myElem]===todayElem) return 'geuk_give';
  if(SANG_GEUK[todayElem]===myElem) return 'geuk_recv';
  return 'same';
}

function renderIlun(natal,targetId='r-ilun'){
  const el=document.getElementById(targetId);
  if(!el||!natal)return;
  const today=getTodayPillar();
  const myDayStem=SE[natal.dS]||'甲';
  const myDayBranch=BE[natal.dB]||'子';
  const myElem=STEM_ELEM[myDayStem]||'土';
  const todayElem=today.elem;
  const rel=getRelation(myElem,todayElem);
  const L=ILUN_MSG[LANG]||ILUN_MSG['ko'];
  const msg=L.rel[rel]||L.rel['same'];
  const now=new Date();
  const wcL=WC_I18N[LANG]||WC_I18N['ko'];
  const dayNames=(wcL.dayOf||'일·월·화·수·목·금·토').split('·');
  const dateStr=`${now.getMonth()+1}/${now.getDate()} (${dayNames[now.getDay()]||''})`;
  const relColor={'same':'#B68FE8','saeng_give':'#7ED4BC','saeng_recv':'#FFD166','geuk_give':'#FF8FAB','geuk_recv':'#FF6B6B'};
  const c=relColor[rel]||'#B68FE8';
  el.style.display='block';
  const studyMsg=L.study?.[rel]||L.study?.same||'';
  const workMsg=L.work?.[rel]||L.work?.same||'';
  el.innerHTML=`<div class="ilun-card">
    <div class="ilun-date">${L.title} · ${L.today} ${dateStr}</div>
    <div class="ilun-stems">
      <div class="ilun-stem-box">
        <div class="ilun-stem-label">${L.myday}</div>
        <div class="ilun-stem-val">${myDayStem}${myDayBranch}</div>
        <div class="ilun-stem-elem">${ELEM_EMOJI[myElem]||'✨'} ${myElem}</div>
      </div>
      <div style="display:flex;align-items:center;color:rgba(255,255,255,.4);font-size:20px">↔</div>
      <div class="ilun-stem-box" style="border-color:${c}55;background:${c}22">
        <div class="ilun-stem-label">${L.todayp}</div>
        <div class="ilun-stem-val">${today.stem}${today.branch}</div>
        <div class="ilun-stem-elem">${ELEM_EMOJI[todayElem]||'✨'} ${todayElem}</div>
      </div>
    </div>
    <div class="ilun-msg">${msg}</div>
    <div class="ilun-strategies">
      <div class="ilun-strategy">
        <div class="ilun-strategy-title">${L.studyTitle}</div>
        <div class="ilun-strategy-msg">${studyMsg}</div>
      </div>
      <div class="ilun-strategy">
        <div class="ilun-strategy-title">${L.workTitle}</div>
        <div class="ilun-strategy-msg">${workMsg}</div>
      </div>
    </div>
    <div class="ilun-bookmark-tip">${L.tip}</div>
  </div>`;
}

/* ── 북마크 유도 ── */
const BOOKMARK_TXT={
  ko:{text:'🔖 이 링크를 저장하면 다음에 바로 결과를 볼 수 있어요!',btn:'링크 복사'},
  ja:{text:'🔖 このリンクを保存すれば、次回すぐに結果を見られます！',btn:'リンクをコピー'},
  en:{text:'🔖 Save this link to jump straight to your results next time!',btn:'Copy link'},
  'zh-TW':{text:'🔖 儲存此連結，下次可直接查看結果！',btn:'複製連結'},
  'zh-CN':{text:'🔖 保存此链接，下次可直接查看结果！',btn:'复制链接'},
  vi:{text:'🔖 Lưu link này để xem kết quả ngay lần sau!',btn:'Sao chép link'}
};

function renderBookmark(){
  const el=document.getElementById('r-bookmark');
  if(!el)return;
  const url=location.href.split('#')[0]+'#birth='+curBirth+'&g='+curGender;
  const L=BOOKMARK_TXT[LANG]||BOOKMARK_TXT['ko'];
  el.style.display='block';
  el.innerHTML=`<div class="bookmark-card">
    <span style="font-size:20px">🔖</span>
    <div class="bookmark-card-text">${L.text}<br><span style="font-size:10px;color:var(--g3);word-break:break-all">${url}</span></div>
    <button class="bookmark-copy-btn" onclick="navigator.clipboard.writeText('${url}').then(()=>showToast('🔗 링크 복사 완료!'))">${L.btn}</button>
  </div>`;
}

/* ── PWA 설치 ── */
let _deferredInstall=null;
window.addEventListener('beforeinstallprompt',e=>{
  e.preventDefault();_deferredInstall=e;
  const banner=document.getElementById('pwa-banner');
  if(banner) banner.style.display='block';
});
window.addEventListener('appinstalled',()=>{
  const banner=document.getElementById('pwa-banner');
  if(banner) banner.style.display='none';
  _deferredInstall=null;
});
function installPWA(){
  if(!_deferredInstall)return;
  _deferredInstall.prompt();
  _deferredInstall.userChoice.then(()=>{_deferredInstall=null;});
}
window.installPWA=installPWA;

const GG_TXT = {
  ko:{title:'생일 에너지 궁합',topTitle:'생일 궁합',sub:'두 사람의 사주 기운이 얼마나 맞을까? 🌟',aLabel:'나 (생일MBTI 분석 결과)',bLabel:'상대방 정보',bBirth:'🎂 생년월일 6자리',bGender:'🌟 성별',btnStart:'💑 궁합 분석하기',
    genderM:'♂ 남자',genderF:'♀ 여자',errMsg:'⚠️ 상대방 생년월일 6자리와 성별을 입력해 주세요',scoreLabel:'궁합',resetBtn:'🔄 다른 사람 분석',mbtiLabel:'MBTI 궁합',elemLabel:'오행 궁합',
    lvl:['천생연분 💕','최강 케미 💫','잘 맞는 궁합 ✨','무난한 궁합 🌟','도전적 궁합 💪','불꽃 케미 🔥'],
    mbti_good:'MBTI 에너지가 완벽하게 보완돼요',mbti_care:'MBTI 에너지 차이가 있지만 서로 배울 수 있어요',mbti_neutral:'MBTI 에너지가 무난하게 어울려요',
    elem_same:'같은 오행 기운으로 서로 깊이 이해해요',elem_saeng:'오행 상생으로 서로의 기운을 북돋아줘요',elem_geuk:'오행 상극이지만 강한 케미가 생겨요',elem_neutral:'서로 다른 오행이 균형을 이뤄요',
    intro_hi:'🐱 냥별이가 두 분의 기운을 분석했어요!\n\n',outro:'✨ 어떤 궁합도 서로를 이해하려는 마음이 가장 중요해요!'},
  ja:{title:'誕生日エネルギー相性',topTitle:'誕生日相性',sub:'二人の四柱の気はどれだけ合う？🌟',aLabel:'自分（誕生日MBTI結果）',bLabel:'相手の情報',bBirth:'🎂 生年月日 6桁',bGender:'🌟 性別',btnStart:'💑 相性を分析する',
    genderM:'♂ 男性',genderF:'♀ 女性',errMsg:'⚠️ 相手の生年月日6桁と性別を入力してください',scoreLabel:'相性',resetBtn:'🔄 別の人を分析',mbtiLabel:'MBTI 相性',elemLabel:'五行 相性',
    lvl:['天生縁分 💕','最強ケミ 💫','相性ピッタリ ✨','まあまあな相性 🌟','チャレンジな相性 💪','情熱ケミ 🔥'],
    mbti_good:'MBTIエネルギーが完璧に補い合います',mbti_care:'MBTIエネルギーに差がありますが互いに学べます',mbti_neutral:'MBTIエネルギーが無難に合います',
    elem_same:'同じ五行の気で深く理解し合えます',elem_saeng:'五行相生で互いの気を高め合います',elem_geuk:'五行相克ですが強いケミが生まれます',elem_neutral:'異なる五行がバランスを保ちます',
    intro_hi:'🐱 ニャンビョリが二人のエネルギーを分析しました！\n\n',outro:'✨ どんな相性も、理解しようとする心が一番大切です！'},
  en:{title:'Birthday Energy Compatibility',topTitle:'Compatibility',sub:'How well do your birth energies match? 🌟',aLabel:'Me (Birthday MBTI Result)',bLabel:"Partner's Info",bBirth:'🎂 Birthdate (6 digits)',bGender:'🌟 Gender',btnStart:'💑 Analyze Compatibility',
    genderM:'♂ Male',genderF:'♀ Female',errMsg:"⚠️ Please enter your partner's 6-digit birthdate and gender",scoreLabel:'Match',resetBtn:'🔄 Try Another Person',mbtiLabel:'MBTI Match',elemLabel:'Element Match',
    lvl:['Soulmates 💕','Ultimate Chemistry 💫','Great Match ✨','Compatible 🌟','Challenging Chemistry 💪','Electric Chemistry 🔥'],
    mbti_good:'Your MBTI energies perfectly complement each other',mbti_care:'Your MBTI energies differ but you can learn from each other',mbti_neutral:'Your MBTI energies blend together naturally',
    elem_same:'Sharing the same element means deep mutual understanding',elem_saeng:'Your elements nourish each other (Sang-saeng)',elem_geuk:'Your elements clash but create powerful chemistry',elem_neutral:'Different elements balance each other out',
    intro_hi:"🐱 Nyangbyeoli analyzed both of your energies!\n\n",outro:'✨ Understanding and effort matter more than any compatibility score!'},
  'zh-TW':{title:'生日能量合婚',topTitle:'生日合婚',sub:'兩人的命格氣場有多契合？🌟',aLabel:'我（生日MBTI分析結果）',bLabel:'對方資訊',bBirth:'🎂 出生日期（6位數）',bGender:'🌟 性別',btnStart:'💑 分析合婚',
    genderM:'♂ 男',genderF:'♀ 女',errMsg:'⚠️ 請輸入對方的6位出生日期及性別',scoreLabel:'合婚',resetBtn:'🔄 分析其他人',mbtiLabel:'MBTI 配對',elemLabel:'五行 合婚',
    lvl:['天生緣分 💕','最強契合 💫','相性絕佳 ✨','普通合婚 🌟','充滿挑戰 💪','電力十足 🔥'],
    mbti_good:'MBTI能量完美互補',mbti_care:'MBTI能量有差異，但可以互相學習',mbti_neutral:'MBTI能量自然融合',
    elem_same:'同一五行氣場，能深度理解彼此',elem_saeng:'五行相生，互相提升能量',elem_geuk:'五行相剋，但產生強烈化學反應',elem_neutral:'不同五行取得平衡',
    intro_hi:'🐱 冥星喵分析了兩位的能量！\n\n',outro:'✨ 無論何種合婚，理解對方的心最重要！'},
  'zh-CN':{title:'生日能量合婚',topTitle:'生日合婚',sub:'两人的命格气场有多契合？🌟',aLabel:'我（生日MBTI分析结果）',bLabel:'对方信息',bBirth:'🎂 出生日期（6位数）',bGender:'🌟 性别',btnStart:'💑 分析合婚',
    genderM:'♂ 男',genderF:'♀ 女',errMsg:'⚠️ 请输入对方的6位出生日期及性别',scoreLabel:'合婚',resetBtn:'🔄 分析其他人',mbtiLabel:'MBTI 匹配',elemLabel:'五行 合婚',
    lvl:['天生缘分 💕','最强契合 💫','相性绝佳 ✨','普通合婚 🌟','充满挑战 💪','电力十足 🔥'],
    mbti_good:'MBTI能量完美互补',mbti_care:'MBTI能量有差异，但可以互相学习',mbti_neutral:'MBTI能量自然融合',
    elem_same:'同一五行气场，能深度理解彼此',elem_saeng:'五行相生，互相提升能量',elem_geuk:'五行相克，但产生强烈化学反应',elem_neutral:'不同五行取得平衡',
    intro_hi:'🐱 冥星喵分析了两位的能量！\n\n',outro:'✨ 无论何种合婚，理解对方的心最重要！'},
  vi:{title:'Hợp Tuổi Năng Lượng Sinh Nhật',topTitle:'Xem Hợp Tuổi',sub:'Năng lượng sinh của hai người hòa hợp đến đâu? 🌟',aLabel:'Tôi (Kết quả Birth MBTI)',bLabel:'Thông tin đối phương',bBirth:'🎂 Ngày sinh (6 số)',bGender:'🌟 Giới tính',btnStart:'💑 Phân tích hợp tuổi',
    genderM:'♂ Nam',genderF:'♀ Nữ',errMsg:'⚠️ Vui lòng nhập ngày sinh 6 số và giới tính của đối phương',scoreLabel:'Hợp tuổi',resetBtn:'🔄 Phân tích người khác',mbtiLabel:'Hợp MBTI',elemLabel:'Hợp Ngũ Hành',
    lvl:['Thiên Duyên 💕','Kết Hợp Đỉnh Cao 💫','Hòa Hợp Tuyệt Vời ✨','Tương Hợp Tốt 🌟','Thử Thách Hóa Học 💪','Kết Hợp Điện Lực 🔥'],
    mbti_good:'Năng lượng MBTI của hai bạn bổ sung hoàn hảo cho nhau',mbti_care:'Năng lượng MBTI có sự khác biệt nhưng hai bạn có thể học hỏi từ nhau',mbti_neutral:'Năng lượng MBTI hòa hợp tự nhiên',
    elem_same:'Cùng ngũ hành giúp hai người hiểu nhau sâu sắc',elem_saeng:'Ngũ hành tương sinh nuôi dưỡng năng lượng cho nhau',elem_geuk:'Ngũ hành tương khắc nhưng tạo ra hóa học mạnh mẽ',elem_neutral:'Ngũ hành khác nhau tạo nên sự cân bằng',
    intro_hi:'🐱 Nyangbyeoli đã phân tích năng lượng của cả hai!\n\n',outro:'✨ Dù hợp tuổi như thế nào, tấm lòng muốn hiểu nhau mới là điều quan trọng nhất!'}
};

// 오행 색상: 기존 ELEM_COLOR 상수 재사용 (위에서 선언됨)
// 오행 이모지
const ELEM_EMOJI={'木':'🌿','火':'🔥','土':'🌍','金':'✨','水':'💧'};
const SANG_SAENG={'木':'火','火':'土','土':'金','金':'水','水':'木'};
const SANG_GEUK={'木':'土','火':'金','土':'水','金':'木','水':'火'};

let curGgGender='';

function ggTxt(key){const L=GG_TXT[LANG]||GG_TXT['ko'];return L[key]||GG_TXT['ko'][key]||'';}

function setGgGender(g){
  curGgGender=g;
  document.getElementById('gg-btn-m').className='gbtn'+(g==='m'?' sel-m':'');
  document.getElementById('gg-btn-f').className='gbtn'+(g==='f'?' sel-f':'');
}

function _renderPersonCard(el,type,birthStr,gender){
  const m=META[type]||META['INFP'];
  const lKey=LANG.startsWith('ja')?'ja':LANG.startsWith('zh')?'zh':LANG.startsWith('ko')?'ko':'en';
  const name=m.name?.[lKey]||m.name?.ko||type;
  const emoji=m.emoji||'🌟';
  const gStr=gender==='m'?'♂':'♀';
  const yy=+birthStr.slice(0,2),mm=+birthStr.slice(2,4),dd=+birthStr.slice(4,6);
  const yr=parseYear(yy);
  el.innerHTML=`<div class="gg-person-emoji">${emoji}</div><div><div class="gg-person-type">${type}</div><div class="gg-person-name">${name} · ${gStr} · ${yr}.${String(mm).padStart(2,'0')}.${String(dd).padStart(2,'0')}</div></div>`;
}

function _renderPersonCardFull(el,type,birthStr,gender,elements){
  const m=META[type]||META['INFP'];
  const lKey=LANG.startsWith('ja')?'ja':LANG.startsWith('zh')?'zh':LANG.startsWith('ko')?'ko':'en';
  const name=m.name?.[lKey]||m.name?.ko||type;
  const emoji=m.emoji||'🌟';
  const gStr=gender==='m'?'♂':'♀';
  const yy=+birthStr.slice(0,2),mm2=+birthStr.slice(2,4),dd=+birthStr.slice(4,6);
  const yr=parseYear(yy);
  const dom=_getDomElem(elements);
  const c=ELEM_COLOR[dom]||ELEM_COLOR['土']||'#B68FE8';
  const em=ELEM_EMOJI[dom]||'✨';
  el.innerHTML=`<div class="gg-person-emoji">${emoji}</div><div style="flex:1"><div class="gg-person-type">${type}</div><div class="gg-person-name">${name} · ${gStr} · ${yr}.${String(mm2).padStart(2,'0')}.${String(dd).padStart(2,'0')}</div><div class="gg-person-elem"><span class="gg-elem-badge" style="background:${c}22;color:${c};border:1px solid ${c}44">${em} ${dom}</span></div></div>`;
}

function calcGunghap(typeA, elemA, typeB, elemB){
  // MBTI 궁합 (0-60)
  let mbtiScore=30,mbtiKey='mbti_neutral';
  const aGood=META[typeA]?.good||[];const aCare=META[typeA]?.care||[];
  const bGood=META[typeB]?.good||[];const bCare=META[typeB]?.care||[];
  if(aGood.includes(typeB)){mbtiScore=60;mbtiKey='mbti_good';}
  else if(bGood.includes(typeA)){mbtiScore=55;mbtiKey='mbti_good';}
  else if(aCare.includes(typeB)||bCare.includes(typeA)){mbtiScore=15;mbtiKey='mbti_care';}

  // 오행 궁합 (0-40)
  const domA=_getDomElem(elemA),domB=_getDomElem(elemB);
  let elemScore=20,elemKey='elem_neutral';
  if(domA===domB){elemScore=25;elemKey='elem_same';}
  else if(SANG_SAENG[domA]===domB||SANG_SAENG[domB]===domA){elemScore=35;elemKey='elem_saeng';}
  else if(SANG_GEUK[domA]===domB||SANG_GEUK[domB]===domA){elemScore=10;elemKey='elem_geuk';}

  const raw=mbtiScore+elemScore; // 10~95
  const pct=Math.round(((raw-10)/85)*100);
  return {pct,mbtiKey,elemKey,domA,domB};
}

function showGunghap(){
  if(!curMType){return;}
  const lang=GG_TXT[LANG]||GG_TXT['ko'];
  document.getElementById('gg-topbar-title').textContent=lang.topTitle;
  document.getElementById('gg-title').textContent=lang.title;
  document.getElementById('gg-sub').textContent=lang.sub;
  document.getElementById('gg-a-label').textContent=lang.aLabel;
  document.getElementById('gg-b-label').textContent=lang.bLabel;
  document.getElementById('gg-b-birth-label').textContent=lang.bBirth;
  document.getElementById('gg-b-gender-label').textContent=lang.bGender;
  document.getElementById('gg-btn-m').textContent=lang.genderM;
  document.getElementById('gg-btn-f').textContent=lang.genderF;
  document.getElementById('gg-err').textContent=lang.errMsg;
  document.getElementById('gg-score-label').textContent=lang.scoreLabel;
  document.getElementById('gg-reset-btn').textContent=lang.resetBtn;
  document.getElementById('gg-btn-label').textContent=lang.btnStart;
  // Person A 미리보기
  _renderPersonCardFull(document.getElementById('gg-a-box'),curMType,curBirth,curGender,curElements);
  // 리셋
  document.getElementById('gg-result').style.display='none';
  document.getElementById('gg-bi').value='';
  document.getElementById('gg-err').style.display='none';
  setGgGender('');
  showPage('pg-gunghap');
}
window.showGunghap=showGunghap;
window.setGgGender=setGgGender;

function startGunghap(){
  const val=document.getElementById('gg-bi').value.replace(/\D/g,'').slice(0,6);
  if(!validateInput(val)||!curGgGender){
    document.getElementById('gg-err').style.display='block';return;
  }
  document.getElementById('gg-err').style.display='none';
  try{
    const yy=+val.slice(0,2),mm=+val.slice(2,4),dd=+val.slice(4,6),yr=parseYear(yy);
    const natal=getNatal(yr,mm,dd);
    const mbtiData=computeMBTI_V3(natal,curGgGender,undefined,undefined,undefined,undefined);
    renderGunghap(val,curGgGender,mbtiData.mbti,mbtiData.elements);
  }catch(e){console.error(e);}
}
window.startGunghap=startGunghap;

function renderGunghap(bBirth,bGender,bType,bElements){
  const {pct,mbtiKey,elemKey,domA,domB}=calcGunghap(curMType,curElements,bType,bElements);
  const lang=GG_TXT[LANG]||GG_TXT['ko'];

  // 레벨
  let lvlIdx=5;
  if(pct>=90)lvlIdx=0;else if(pct>=75)lvlIdx=1;else if(pct>=60)lvlIdx=2;else if(pct>=45)lvlIdx=3;else if(pct>=30)lvlIdx=4;
  const lvlEmoji=['💕','💫','✨','🌟','💪','🔥'][lvlIdx];
  const lvlColor=['#FF8FAB','#B68FE8','#7ED4BC','#FFD166','#FFB89A','#FF6B6B'][lvlIdx];

  // 점수 링
  const ring=document.getElementById('gg-ring');
  ring.style.setProperty('--pct',`${pct*3.6}deg`);
  ring.style.background=`conic-gradient(${lvlColor} ${pct*3.6}deg, var(--g4) 0%)`;
  document.getElementById('gg-score-num').textContent=pct+'%';
  document.getElementById('gg-score-tag').textContent=lang.lvl[lvlIdx];
  document.getElementById('gg-score-emoji').textContent=lvlEmoji;

  // 두 사람 카드
  _renderPersonCardFull(document.getElementById('gg-res-a'),curMType,curBirth,curGender,curElements);
  _renderPersonCardFull(document.getElementById('gg-res-b'),bType,bBirth,bGender,bElements);

  // 분석 텍스트
  const domAem=ELEM_EMOJI[domA]||'✨',domBem=ELEM_EMOJI[domB]||'✨';
  const mA=META[curMType]||{};const mB=META[bType]||{};
  const lKey=LANG.startsWith('ja')?'ja':LANG.startsWith('zh')?'zh':LANG.startsWith('ko')?'ko':'en';
  const nameA=mA.name?.[lKey]||mA.name?.ko||curMType;
  const nameB=mB.name?.[lKey]||mB.name?.ko||bType;
  const mbtiDesc=lang[mbtiKey];
  const elemDesc=lang[elemKey];
  document.getElementById('gg-analysis').innerHTML=
    `<p>${lang.intro_hi}<strong>${curMType} ${nameA}</strong> × <strong>${bType} ${nameB}</strong></p>`+
    `<p style="margin-top:10px">🔮 <strong>${lang.mbtiLabel}:</strong> ${mbtiDesc}</p>`+
    `<p style="margin-top:6px">${domAem}${domBem} <strong>${lang.elemLabel}:</strong> ${elemDesc}</p>`+
    `<p style="margin-top:10px;font-size:11px;color:var(--g2)">${lang.outro}</p>`;

  document.getElementById('gg-result').style.display='block';
  document.getElementById('gg-result').scrollIntoView({behavior:'smooth',block:'start'});
}

/* 입력 이벤트 */
document.getElementById('bi').addEventListener('input',function(){this.value=this.value.replace(/\D/g,'').slice(0,6);document.getElementById('err-msg').style.display='none';});
document.getElementById('bi').addEventListener('keydown',function(e){if(e.key==='Enter')startAnalysis();});
document.getElementById('gg-bi').addEventListener('input',function(){this.value=this.value.replace(/\D/g,'').slice(0,6);document.getElementById('gg-err').style.display='none';});
document.getElementById('gg-bi').addEventListener('keydown',function(e){if(e.key==='Enter')startGunghap();});

/* URL hash 자동 로드 */
(function(){
  const m=location.hash.match(/birth=(\d{6})(?:&g=([mf]))?/);
  if(m&&validateInput(m[1])){
    curBirth=m[1];document.getElementById('bi').value=m[1];
    if(m[2])setGender(m[2]);
    setTimeout(startAnalysis,600);
  }
})();
