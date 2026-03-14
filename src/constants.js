
/* ╔══════════════════════════════════════════╗
   ║  Global State & Constants                 ║
   ╚══════════════════════════════════════════╝ */

export let LANG = 'ko';
export const LANG_FLAG = { ko: '🇰🇷 한국어', ja: '🇯🇵 日本語', en: '🇺🇸 English', 'zh-TW': '🇹🇼 繁體中文', 'zh-CN': '🇨🇳 简体中文' };

export const SH_I18N = { ko: ['갑', '을', '병', '정', '무', '기', '경', '신', '임', '계'], ja: ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'], en: ['Jia', 'Yi', 'Bing', 'Ding', 'Wu', 'Ji', 'Geng', 'Xin', 'Ren', 'Gui'], 'zh-TW': ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'], 'zh-CN': ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'] };
export const BH_I18N = { ko: ['자', '축', '인', '묘', '진', '사', '오', '미', '신', '유', '술', '해'], ja: ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'], en: ['Zi', 'Chou', 'Yin', 'Mao', 'Chen', 'Si', 'Wu', 'Wei', 'Shen', 'You', 'Xu', 'Hai'], 'zh-TW': ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'], 'zh-CN': ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'] };

export const I = {
  ko: {
    title: '생일MBTI', heroH: '내 생일에 숨겨진<br><em>타고난 나</em>를 찾아볼까?',
    heroP: '환경이 만든 MBTI 말고,<br>태어날 때부터 정해진 <strong style="color:var(--lav)">나만의 기질</strong>을 읽어줄게 🌙',
    infoTitle: '🌙 생일MBTI가 뭔가요?',
    infoP1: '혹시 MBTI 검사할 때마다 결과가 달라진 적 있어?<br>그건 <strong style="color:var(--lav)">환경과 기분</strong>에 따라 달라지는 게 당연하거든.',
    infoP2: '생일MBTI는 달라. 태어난 날의 <strong style="color:var(--lav)">사주 원국</strong>에 담긴 타고난 기질을 MBTI로 표현한 거야. 환경이 아니라 <em style="font-style:normal;color:var(--rose)">내가 원래 가지고 태어난 성격의 뼈대</em>를 보여줘.',
    diffNormal: '일반 MBTI', diffBirth: '생일 MBTI',
    diffNormalT: '환경·경험·기분에 따라 바뀔 수 있어', diffBirthT: '태어난 날 정해진 타고난 기질 — 안 바뀌어!',
    diffNote: '💡 둘 다 진짜 나야. 타고난 뼈대 위에 환경이 살을 붙인 거지!',
    lblBirth: '🎂 생년월일 6자리', lblGender: '🌟 성별',
    btnM: '♂ 남자', btnF: '♀ 여자',
    qTitle: '🎲 냥별이의 순간 테스트!', qSub: '직감으로 골라봐! 안 골라도 분석엔 문제 없어 🐱',
    q1L: 'Q1. 배달 온 치킨 한 마리! 이 순간 더 행복한 건?',
    q1aT: '친구들이랑 쪼개 먹는 그 왁자지껄', q1aH: '나눠 먹어야 맛있지!',
    q1bT: '혼자 한 마리 독점 + 넷플릭스', q1bH: '이것이 진정한 힐링이지...',
    q2L: 'Q2. 길 가다가 수상한 자판기 발견! 뭐가 나올지 모름 👀',
    q2aT: '일단 동전 넣는다. 인생은 모험이니까!', q2aH: '뭐가 나오든 재밌을 듯',
    q2bT: '뒤에 써있는 설명부터 읽어본다', q2bH: '정체를 알아야 마음이 편함',
    q3L: 'Q3. 친구가 새로 산 옷 보여주며 "어때?" 근데 솔직히 좀…🫠',
    q3aT: '"음… 솔직히 저번 스타일이 더 찰떡이었어"', q3aH: '솔직한 게 진짜 친구 아닌가',
    q3bT: '"오 이거 좋다! 어디서 샀어?"', q3bH: '기분 먼저 챙겨주고 싶음',
    q4L: 'Q4. 최애 아이돌 콘서트 티켓팅 D-30! 🎤',
    q4aT: '알림 세팅 완료. 좌석 배치도 이미 외움', q4aH: '만반의 준비가 곧 성공',
    q4bT: '"그날 되면 어떻게든 되겠지~"', q4bH: '복은 걱정 안 하는 자에게 온다',
    err: '⚠️ 생년월일 6자리와 성별을 입력해 주세요',
    btnStart: '냥별이의 에너지 분석 시작 🔮',
    footP: '사주 원국에 담긴 타고난 기질 × MBTI 표현<br>환경이 만든 내가 아닌, <strong style="color:var(--g2)">태어날 때부터의 나</strong>를 만나봐 🌸',
    copyright: '© 2026.03 Released. solong97@gmail.com. All rights reserved. Unauthorized Use Prohibited.',
    ldTitle: '냥별이가 분석 중이다냥 ✨', ld1: '🪐 사주 패턴 계산 중', ld2: '🔮 월주 십성 분석 중', ld3: '✨ 일주 기질 매칭 중',
    share: '🔗 공유', shareApp: '🔗 친구에게 앱 공유', saveImg: '📷 이미지 저장', imgSaved: '이미지 저장 완료 📷',
    pcTitle: '📷 퍼스널 포토카드', pcSub: 'SNS 인증샷용 감성 카드 ✨', pcNick: '영문 닉네임', pcNickPh: 'e.g. LUNA · STAR · MISO', pcMsg: '감성 메시지', pcMsgLimit: '20자 이내', pcMsgPh: 'e.g. Born to shine ✨', pcDate: '날짜', pcColor: '퍼스널 컬러', pcElem: '{0} 기운 퍼스널컬러', pcCancel: '취소', pcGen: '✨ 카드 생성 + 링크 복사', pcGenerating: '생성 중...', pcToast: '📷 카드 저장 + 🔗 링크 복사 완료!',
    tagBorn: '🌙 타고난 기질', tagPre: '🌙 태어날 때부터 품고 온 기질 — ',
    sipBadge: '월주 십성', sipRank: 'MBTI 산출 1순위', sipWhy: '💡 MBTI 영향: ',
    flowDw: '🌊 지금 내 흐름', flowSw: '☀️ {0} 올해 에너지', flowSwSub: '{0}년 {1}년',
    swStemL: '{0}', swBranchL: '{1}',
    secIlju: '내 일주 기질', secIljuDiffNote: '💡 <strong style="color:var(--lav)">일반 MBTI와 다를 수 있어요!</strong><br>일반 MBTI는 환경·경험·기분에 따라 달라지지만, 생일MBTI는 태어난 날 사주 원국에 담긴 <strong>타고난 기질</strong>이에요. 환경이 입힌 옷이 아니라 내 성격의 뼈대를 보여줘요.',
    secIljuL: '60갑자 일주론', secStem: '천간', secBranch: '지지',
    secCorrNote: '🎲 냥별이 순간 테스트가 {0} 축 판별에 힌트를 줬어요',
    secMe: '나는 이런 사람', secMeSub: '핵심 성격 + 지금의 나', secBase: '기본 성격', secNow: '지금의 나',
    secMap: '성격 지도', secMapSub: 'MBTI 4축 에너지 비중',
    secStr: '나의 강점', secStrSub: '일주 천간 기반 핵심 강점',
    secKw: '성격 키워드', secKwSub: '나를 표현하는 단어들',
    secCompat: '나랑 잘 맞는 유형', secCompatSub: '궁합 유형 분석', compatGood: '💚 잘 맞는 유형', compatCare: '🔥 주의가 필요한 유형',
    compatGoodR: '서로의 에너지를 완벽하게 채워주는 최강 드림팀! ✨',
    compatCareR: '다른 에너지가 만나 더 강해질 수 있어! 서로 이해하고 맞춰가면 최고의 케미가 탄생해 💪',
    secFig: '나와 비슷한 사람들', secFigSub: '에너지가 닮은 유명인',
    secCareer: '나에게 잘 맞는 일', secCareerSub: 'AGI 시대를 위한 진로 가이드',
    secDist: '세상의 성격 지도', secDistSub: '16유형 분포',
    secSaju: '내 생일 에너지 코드', secSajuSub: '사주 원국 (년·월·일주)',
    sajuInfo: '내 생일의 글자들은 내가 태어난 순간의 우주 기운을 담고 있어요. 이 기운들이 서로 섞이며 당신만의 독특한 에너지 지도를 만든답니다! 🗺️',
    sajuNote: '태어난 해·달·날의 에너지 패턴 · 동양 역술 전통 기반',
    yrP: '년주', moP: '월주', dyP: '일주',
    secSynTitle: '✨ 생일 에너지 시너지',
    disc1: '🌙 생일MBTI는 태어난 날의 사주 원국에서 읽히는 <strong style="color:var(--g1)">타고난 기질</strong>을 MBTI로 표현한 거예요',
    disc2: '일반 MBTI와 다를 수 있어요 — 환경이 아닌 태어날 때부터의 나를 보여주거든요!',
    disc3: '이건 재미와 자기 탐색 목적이에요 🌟 운명은 정해진 게 아니에요!',
    btnAgain: '← 다시 분석하기', copied: '🔗 링크가 복사됐어요!',
    age: '세', male: '♂ 남성', female: '♀ 여성',
    ss_비견: '독립 전사(비견)', ss_겁재: '도전하는 승부사(겁재)', ss_식신: '감성 크리에이터(식신)', ss_상관: '규칙을 깨는 천재(상관)',
    ss_편재: '만능 엔터테이너(편재)', ss_정재: '꾸준한 성장러(정재)', ss_편관: '카리스마 리더(편관)', ss_정관: '원칙의 수호자(정관)',
    ss_편인: '신비로운 탐구자(편인)', ss_정인: '지혜로운 감싸안기(정인)',
    stemMeta: ['큰 나무', '유연한 풀', '태양', '촛불', '큰 산', '부드러운 땅', '단단한 쇠', '빛나는 보석', '넓은 강', '고요한 빗물'],
    elemMeta: { '木': '나무의 성장', '火': '불의 열정', '土': '대지의 안정', '金': '쇠의 단단함', '水': '물의 흐름' },
    rDimTpl: '{mg}의 {dir} 에너지 + {stem} 기질의 {ilju} 일주 + {dom} 에너지의 결합',
    rDimOut: '외향적', rDimIn: '내향적',
    rStory: '{desc} {mg} 에너지가 더해져, {title}의 기질로 세상과 만나고 있어. 지금 {age}세, 가장 빛나는 시간을 보내고 있어 ✨',
    rDesc1: '{title}의 기질을 타고났어. {desc} 여기에 {mg} 에너지가 더해지고, {dom} 기운이 행동 무기로 작용해 독특한 매력을 만들어.',
    rDesc2: '{nowYear}년 {swHan}의 에너지와 만나 새로운 변화의 기회가 찾아오고 있어.',
    rDw: '현재 {stem} 같은 흐름이 {myStem} 기질의 너를 새로운 방향으로 이끌어주고 있어. ', rDwLate: '후반부에 접어들면서 결실을 맺을 시기야.', rDwEarly: '아직 초반이라 씨앗을 뿌리는 시기야.',
    rSw: '{nowYear}년은 {swHan}의 에너지가 가득한 해야. {stem} 기질의 너에게 이 에너지는 ',
    rSwFire: '같은 불의 기운으로 더욱 강력하게 작용해.', rSwWater: '물과 불이 만나 균형을 맞추는 흥미로운 해가 될 거야.', rSwOther: '새로운 자극과 변화를 가져와 줄 거야.',
    rSeasonSkew: { '木': '🌡️ 봄 에너지가 매우 강해서 성장과 확장의 기운이 넘쳐.', '火': '🌡️ 여름 에너지가 매우 강해서 열정과 표현의 기운이 뜨거워.', '土': '🌡️ 환절기 에너지가 강해서 안정과 중심을 잡는 힘이 있어.', '金': '🌡️ 가을 에너지가 강해서 정리와 결단의 기운이 날카로워.', '水': '🌡️ 겨울 에너지가 강해서 지혜와 직관의 깊이가 남달라.' },
    rNoGwan: '🕊️ 통제 에너지가 없어서 자유롭고 감성적인 면이 더 강해. ', rNoSik: '🔒 표현 에너지가 적어서 내면에서 논리와 체계로 힘을 발휘해. ',
    rCharJoin: ' + ', rCharSuffix: ' 에너지로 세상과 만나는 사람',
    structTitle: '🧬 MBTI 산출 구조', structIlju: '일주 (타고난 본질)', structMonth: '월지 격국 (환경)', structDom: '최강 에너지 (행동 무기)',
    disc4: '이 결과는 자기 이해를 위한 참고 자료이며, 과학적 진단이 아닙니다. 운명은 정해 있지 않으며, 모든 선택은 여러분의 것입니다.',
  },
  ja: {
    title: '誕生日MBTI', heroH: '誕生日に隠された<br><em>本当の自分</em>を見つけよう',
    heroP: '環境が作ったMBTIではなく、<br>生まれた日から決まっている<strong style="color:var(--lav)">あなたの気質</strong>を読み取るよ 🌙',
    infoTitle: '🌙 誕生日MBTIって何？',
    infoP1: 'MBTI検査で毎回結果が変わったことない？<br>それは<strong style="color:var(--lav)">環境や気分</strong>で変わるのが当然だから。',
    infoP2: '誕生日MBTIは違うよ。生まれた日の<strong style="color:var(--lav)">四柱命式</strong>에刻まれた生まれつきの気質をMBTIで表現したもの。環境ではなく、<em style="font-style:normal;color:var(--rose)">本来持って生まれた性格の骨格</em>を見せてくれるよ。',
    diffNormal: '一般MBTI', diffBirth: '誕生日MBTI',
    diffNormalT: '環境・経験・気分で変わることがある', diffBirthT: '生まれた日に決まった気質 — 変わらない！',
    diffNote: '💡 どちらも本当の自分。生まれつきの骨格の上に環境が肉付けしたんだよ！',
    lblBirth: '🎂 生年月日6桁', lblGender: '🌟 性別',
    btnM: '♂ 男性', btnF: '♀ 女性',
    qTitle: '🎲 にゃんぼしの瞬間テスト！', qSub: '直感で選んでね！選ばなくても分析OK 🐱',
    q1L: 'Q1. デリバリーチキン1羽到着！嬉しいのは？',
    q1aT: '友達とワイワイ食べる！', q1aH: '分けて食べるのが最高！',
    q1bT: '一人で独り占め＋Netflix', q1bH: 'これこそ本当の癒し...',
    q2L: 'Q2. 怪しい自販機を発見！何が出るか不明 👀',
    q2aT: 'とりあえずコイン入れる！人生は冒険！', q2aH: '何が出ても楽しそう',
    q2bT: '裏の説明をまず読む', q2bH: '正体を知らないと落ち着かない',
    q3L: 'Q3. 友達の新しい服「どう？」…正直微妙 🫠',
    q3aT: '「うーん…前のスタイルの方が似合ってたかも」', q3aH: '正直に言うのが本当の友達',
    q3bT: '「いいね！どこで買ったの？」', q3bH: 'まず気持ちを大切にしたい',
    q4L: 'Q4. 推しのコンサートチケット発売D-30！🎤',
    q4aT: 'アラーム設定完了。座席配置も暗記済み', q4aH: '万全の準備が成功の鍵',
    q4bT: '「その日になったらなんとかなるでしょ〜」', q4bH: '心配しない人に福が来る',
    err: '⚠️ 生年月日6桁と性別を入力してください',
    btnStart: 'にゃんぼしのエネルギー分析開始 🔮',
    footP: '四柱命式に刻まれた生まれつきの気질 × MBTI表現<br>環境が作った自分ではなく、<strong style="color:var(--g2)">生まれた時からの自分</strong>に出会おう 🌸',
    ldTitle: 'にゃんぼしが分析中だにゃん ✨', ld1: '🪐 四柱パターン計算中', ld2: '🔮 月柱十神分析中', ld3: '✨ 日柱気質マッチング中',
    share: '🔗 共有', shareApp: '🔗 友達にシェア', saveImg: '📷 画像を保存', imgSaved: '画像を保存しました 📷',
    pcTitle: '📷 パーソナルフォトカード', pcSub: 'SNSシェア用の感性カード ✨', pcNick: '英語ニックネーム', pcNickPh: 'e.g. LUNA · STAR · MISO', pcMsg: '感性メッセージ', pcMsgLimit: '20文字以内', pcMsgPh: 'e.g. Born to shine ✨', pcDate: '日付', pcColor: 'パーソナルカラー', pcElem: '{0} エネルギーカラー', pcCancel: 'キャンセル', pcGen: '✨ カード生成 + リンクコピー', pcGenerating: '生成中...', pcToast: '📷 カード保存 + 🔗 リンクコピー完了！',
    tagBorn: '🌙 生まれつきの気質', tagPre: '🌙 生まれた時から持っている気質 — ',
    sipBadge: '月柱十神', sipRank: 'MBTI算出第1優先', sipWhy: '💡 MBTIへの影響: ',
    flowDw: '🌊 今の流れ', flowSw: '☀️ 2026年のエネルギー', flowSwSub: '丙午年',
    swStemL: '丙(火)', swBranchL: '午(馬)',
    secIlju: '私の日柱気質', secIljuDiffNote: '💡 <strong style="color:var(--lav)">一般MBTIと異なる場合があります！</strong><br>一般MBTIは環境で変わりますが、誕生日MBTIは四柱命式に刻まれた<strong>生まれつきの気質</strong>です。',
    secIljuL: '六十甲子日柱論', secStem: '天干', secBranch: '地支',
    secCorrNote: '🎲 にゃんぼし瞬間テストが {0} 軸の判定にヒントを与えました',
    secMe: '私はこんな人', secMeSub: '核心性格＋今の私', secBase: '基本性格', secNow: '今の私',
    secMap: '性格マップ', secMapSub: 'MBTI 4軸分析',
    secStr: '私の強み', secStrSub: '日柱天干ベース核心強み',
    secKw: '性格キーワード', secKwSub: '私を表す言葉',
    secCompat: '相性タイプ', secCompatSub: '相性分析', compatGood: '💚 ドリームチーム', compatCare: '🔥 成長コンビ',
    compatGoodR: 'お互いのエネルギーを完璧に補い合う最強のパートナー！ ✨',
    compatCareR: '違うエネルギーだからこそ最高のケミが生まれる！理解し合えば最強コンビになれるよ 💪',
    secFig: 'あなたに似た有名人', secFigSub: 'エネルギーが似ている人',
    secCareer: 'あなたに向いている仕事', secCareerSub: 'AGI時代のキャリアガイド',
    secSynTitle: '✨ 誕生日エネルギーシナジー',
    secDist: '世界の性格マップ', secDistSub: '16タイプ分布',
    secSaju: '誕生日エネルギーコード', secSajuSub: '四柱命式（年・月・日柱）',
    sajuInfo: '誕生日の漢字には、あなたが生まれた瞬間の宇宙のエネルギーが込められています。これらの気が混ざり合い、あなただけの特別なエネルギーマップを作ります！ 🗺️',
    sajuNote: '生まれた年・月・日のエネルギーパターン（東洋占術伝統）',
    yrP: '年柱', moP: '月柱', dyP: '日柱',
    disc1: '🌙 誕生日MBTIは四柱命式から読み取った<strong style="color:var(--g1)">生まれつきの気質</strong>をMBTIで表現したものです',
    disc2: '一般MBTIと異なる場合があります — 環境ではなく生まれた時からの自分を見せます！',
    disc3: 'これはエン터テインメントと自己探索の目的です 🌟 運命は決まっていません！',
    btnAgain: '← もう一度分析する', copied: '🔗 リンクがコピーされました！',
    age: '歳', male: '♂ 男性', female: '♀ 女性',
    ss_비견: '独立戦士', ss_겁재: '挑戦する勝負師', ss_식신: '感性クリエイター', ss_상관: 'ルールを破る天才',
    ss_편재: '万能エンターテイナー', ss_정재: '着実な成長者', ss_편관: 'カリスマリーダー', ss_정관: '原則の守護者',
    ss_편인: '神秘的な探究者', ss_정인: '知恵深い包容者',
    stemMeta: ['大きな木', 'しなやかな草', '太陽', 'ろうそく', '大きな山', 'やわらかい大地', '硬い鉄', '輝く宝石', '広い川', '静かな雨'],
    elemMeta: { '木': '木の成長', '火': '火の情熱', '土': '大地の安定', '金': '鉄の強さ', '水': '水の流れ' },
    rDimTpl: '① {mg}({mgT})の{dir}エネルギー(50%) + ② {stem}の気質を持つ{ilju}日柱(30%) + ③ {dom}エネルギー(20%)が合わさって形成されたよ。',
    rDimOut: '外に広がる', rDimIn: '内に集める',
    rStory: '{desc} {mg}のエネルギーが加わり、{title}の気質で世界と出会っているよ。今{age}歳、最も輝く時間を過ごしているよ ✨',
    rDesc1: '{title}の気質を持って生まれたよ。{desc} さらに{mg}({mgT})のエネルギー이加わり、{dom}({domT})の力が行動の武器として働いて、ユニークな魅力を作っているよ。',
    rDesc2: '2026年の燃える太陽と走る馬のエネルギーと出会い、新しい変化のチャンスが訪れているよ。',
    rDw: '現在{stem}のような流れが{myStem}の気質のあなたを新しい方向に導いているよ。', rDwLate: '後半に入り、実りを迎える時期だよ。', rDwEarly: 'まだ序盤で、種をまく時期だよ。',
    rSw: '2026年は燃える太陽＋走る馬のエネルギーが満ちた年だよ。{stem}の気質のあなたにこのエネルギーは',
    rSwFire: '同じ火の力でさらに強力に作用するよ。', rSwWater: '水と火が出会いバランスを取る面白い年になるよ。', rSwOther: '新しい刺激と変化をもたらしてくれるよ。',
    rSeasonSkew: { '木': '🌡️ 春のエネルギーがとても強く、成長と拡大の気運に溢れている。', '火': '🌡️ 夏のエネルギーがとても強く、情熱と表現の気運が熱い。', '土': '🌡️ 季節の変わり目のエネルギーが強く、安定と軸を保つ力がある。', '金': '🌡️ 秋のエネルギーが強く、整理と決断の気運が鋭い。', '水': '🌡️ 冬のエネルギーが強く、知恵と直感の深さが格別。' },
    rNoGwan: '🕊️ コントロールのエネルギーがないため、自由で感性的な面がより強い。', rNoSik: '🔒 表現のエネルギーが少ないため、内面で論理と体系の力を発揮する。',
    rCharJoin: ' + ', rCharSuffix: 'のエネルギーで世界と出会う人',
    structTitle: '🧬 MBTI算出ロジック', structIlju: '日柱（生まれつきの本質）', structMonth: '月柱格局（環境）', structDom: '最強エネルギー（行動の武器）',
    disc4: 'この結果は自己理解のための参考資料であり、科学的な診断ではありません。運命は決まっておらず、すべての選択はあなた自身のものです。楽しみながら自分をもっと知るきっかけにしてね。',
  },
  en: {
    title: 'Birth MBTI', heroH: 'Discover the<br><em>Real You</em> Hidden in Your Birthday',
    heroP: 'Not the MBTI shaped by environment, but<br>your <strong style="color:var(--lav)">innate temperament</strong> written in the stars 🌙',
    infoTitle: '🌙 What is Birth MBTI?',
    infoP1: 'Ever gotten different MBTI results each time?<br>That\'s because <strong style="color:var(--lav)">environment and mood</strong> naturally affect the outcome.',
    infoP2: 'Birth MBTI is different. It reads the innate temperament encoded in your <strong style="color:var(--lav)">Four Pillars birth chart</strong> and expresses it as MBTI. Not the mask shaped by environment, but <em style="font-style:normal;color:var(--rose)">the core personality you were born with</em>.',
    diffNormal: 'Regular MBTI', diffBirth: 'Birth MBTI',
    diffNormalT: 'Can change based on environment, experience & mood', diffBirthT: 'Innate temperament set at birth — stays the same!',
    diffNote: '💡 Both are the real you. Born framework + environment-added layers!',
    lblBirth: '🎂 Birth Date (6 digits: YYMMDD)', lblGender: '🌟 Gender',
    btnM: '♂ Male', btnF: '♀ Female',
    qTitle: '🎲 Quick Vibe Check by Nyangbyeol!', qSub: 'Go with your gut! Skipping is totally fine 🐱',
    q1L: 'Q1. A whole fried chicken just arrived! What makes you happier?',
    q1aT: 'Sharing it with friends, loud & fun!', q1aH: 'Food tastes better together!',
    q1bT: 'All mine + Netflix binge solo', q1bH: 'This is true healing...',
    q2L: 'Q2. You spot a mysterious vending machine! No idea what comes out 👀',
    q2aT: 'Insert coins immediately. Life is an adventure!', q2aH: 'Whatever comes out will be fun',
    q2bT: 'Read the instructions on the back first', q2bH: 'Need to know before I commit',
    q3L: 'Q3. Friend shows new outfit: "How is it?" …honestly, not great 🫠',
    q3aT: '"Hmm, your last style suited you better honestly"', q3aH: 'Honesty is true friendship',
    q3bT: '"Oh nice! Where did you get it?"', q3bH: 'Their feelings come first',
    q4L: 'Q4. Fave idol\'s concert tickets go on sale in 30 days! 🎤',
    q4aT: 'Alarms set. Seat map memorized already', q4aH: 'Preparation is the key to success',
    q4bT: '"I\'ll figure it out when the day comes~"', q4bH: 'Fortune favors the carefree',
    err: '⚠️ Please enter 6-digit birth date and gender',
    btnStart: 'Start Nyangbyeol\'s Energy Reading 🔮',
    footP: 'Innate temperament from your birth chart × MBTI expression<br>Meet the <strong style="color:var(--g2)">you that existed from day one</strong> 🌸',
    ldTitle: 'Nyangbyeol is analyzing meow ✨', ld1: '🪐 Calculating birth patterns', ld2: '🔮 Analyzing month pillar energy', ld3: '✨ Matching day pillar temperament',
    share: '🔗 Share', shareApp: '🔗 Share this app', saveImg: '📷 Save Image', imgSaved: 'Image saved! 📷',
    pcTitle: '📷 Personal Photo Card', pcSub: 'Create your vibe card for SNS ✨', pcNick: 'Your Nickname', pcNickPh: 'e.g. LUNA · STAR · MISO', pcMsg: 'Vibe Message', pcMsgLimit: 'max 20 chars', pcMsgPh: 'e.g. Born to shine ✨', pcDate: '날짜', pcColor: 'Personal Color', pcElem: '{0} Energy Color', pcCancel: 'Cancel', pcGen: '✨ Create Card + Copy Link', pcGenerating: 'Creating...', pcToast: '📷 Card saved + 🔗 Link copied!',
    tagBorn: '🌙 Innate Type', tagPre: '🌙 The temperament you were born with — ',
    sipBadge: 'Month Pillar Star', sipRank: 'MBTI Factor #1', sipWhy: '💡 MBTI Impact: ',
    flowDw: '🌊 Current Life Phase', flowSw: '☀️ 2026 Energy', flowSwSub: 'Fire-Horse Year',
    swStemL: 'Bing (Fire)', swBranchL: 'Wu (Horse)',
    secIlju: 'My Day Pillar Temperament', secIljuDiffNote: '💡 <strong style="color:var(--lav)">May differ from regular MBTI!</strong><br>Regular MBTI changes with environment, but Birth MBTI shows your <strong>innate temperament</strong> from your birth chart.',
    secIljuL: '60 Jiazi Day Pillar Theory', secStem: 'Heavenly Stem', secBranch: 'Earthly Branch',
    secCorrNote: '🎲 Vibe check helped determine the {0} axis',
    secMe: 'Who I Am', secMeSub: 'Core personality + Current self', secBase: 'Core Personality', secNow: 'Current Self',
    secMap: 'Personality Map', secMapSub: 'MBTI 4-Axis Analysis',
    secStr: 'My Strengths', secStrSub: 'Day stem-based core strengths',
    secKw: 'Personality Keywords', secKwSub: 'Words that describe me',
    secCompat: 'Compatible Types', secCompatSub: 'Compatibility analysis', compatGood: '💚 Dream Team', compatCare: '🔥 Growth Duo',
    compatGoodR: 'Your energies perfectly complement each other — the ultimate power team! ✨',
    compatCareR: 'Different energies create exciting chemistry — understanding each other makes you both unstoppable! 💪',
    secFig: 'People Like You', secFigSub: 'Famous souls with similar energy',
    secCareer: 'Best Career Fits', secCareerSub: 'Your guide to thriving in the AGI era',
    secSynTitle: '✨ Birthday Energy Synergy',
    secDist: 'World Personality Map', secDistSub: '16-type distribution',
    secSaju: 'Birth Energy Code', secSajuSub: 'Four Pillars (Year·Month·Day)',
    sajuInfo: 'The characters of your birthday capture the cosmic energy of the moment you were born. These energies blend to create your own unique energy map! 🗺️',
    sajuNote: 'Energy patterns of birth year, month & day · Eastern tradition',
    yrP: 'Year', moP: 'Month', dyP: 'Day',
    disc1: '🌙 Birth MBTI expresses your <strong style="color:var(--g1)">innate temperament</strong> from your Four Pillars birth chart as MBTI',
    disc2: 'It may differ from regular MBTI — it shows the you from birth, not from environment!',
    disc3: 'This is for fun and self-discovery 🌟 Destiny is not fixed!',
    btnAgain: '← Analyze Again', copied: '🔗 Link copied!',
    age: 'yrs', male: '♂ Male', female: '♀ Female',
    ss_비견: 'Independent Warrior', ss_겁재: 'Bold Challenger', ss_식신: 'Sensory Creator', ss_상관: 'Rule-Breaking Genius',
    ss_편재: 'Versatile Entertainer', ss_정재: 'Steady Grower', ss_편관: 'Charismatic Leader', ss_정관: 'Guardian of Principles',
    ss_편인: 'Mystical Explorer', ss_정인: 'Wise Embracer',
    stemMeta: ['tall tree', 'flexible vine', 'bright sun', 'gentle candle', 'great mountain', 'soft earth', 'solid iron', 'shining gem', 'wide river', 'quiet rain'],
    elemMeta: { '木': 'growth of wood', '火': 'passion of fire', '土': 'stability of earth', '金': 'strength of metal', '水': 'flow of water' },
    rDimTpl: '① {mg} ({mgT}) {dir} energy (50%) + ② {stem}-natured {ilju} day pillar (30%) + ③ {dom} energy (20%) combined to shape this.',
    rDimOut: 'outward-expanding', rDimIn: 'inward-gathering',
    rStory: '{desc} With {mg} energy added, you meet the world as a {title}. At {age}, you\'re in one of your most radiant chapters ✨',
    rDesc1: '{title} of a {title}. {desc} The energy of {mg} ({mgT}) layers on top, and {dom} ({domT}) acts as your action superpower, creating a uniquely charming personality.',
    rDesc2: 'In 2026, the blazing sun and galloping horse energy brings fresh winds of change and opportunity.',
    rDw: 'The current {stem}-like flow is guiding your {myStem} temperament toward new horizons. ', rDwLate: 'You\'re in the second half — time to harvest results.', rDwEarly: 'Still early — time to plant seeds for the future.',
    rSw: '2026 is a year brimming with blazing sun + galloping horse energy. For your {stem} temperament, this energy ',
    rSwFire: 'amplifies your natural fire — expect powerful momentum.', rSwWater: 'creates an intriguing balance of water and fire.', rSwOther: 'brings fresh stimulation and exciting change.',
    rSeasonSkew: { '木': '🌡️ Your spring energy is very strong — growth and expansion vibes are overflowing.', '火': '🌡️ Your summer energy is intense — passion and expression are on fire.', '土': '🌡️ Your transitional energy is strong — stability and centering power is your anchor.', '金': '🌡️ Your autumn energy is sharp — clarity and decisive action come naturally.', '水': '🌡️ Your winter energy runs deep — wisdom and intuition are exceptionally strong.' },
    rNoGwan: '🕊️ Without controlling energy, your free-spirited and emotional side shines even brighter. ', rNoSik: '🔒 With less expressive energy, your inner logic and systematic thinking become your power. ',
    rCharJoin: ' + ', rCharSuffix: ' energy meeting the world',
    structTitle: '🧬 MBTI Calculation', structIlju: 'Day Pillar (Innate Core)', structMonth: 'Month Energy (Environment)', structDom: 'Strongest Energy (Action Style)',
    disc4: 'This is a reference tool for self-understanding, not a scientific diagnosis. Your destiny is not fixed — every choice is yours. Use this as a fun way to learn a bit more about yourself!',
  }
};

export const SIP_I18N = {
  ja: {
    비견: { sub: '自分と同じエネルギー — 主体的で自信に満ちた気質', why: '自己主張が明確で独立的 → やや外向的、論理的判断の傾向' },
    겁재: { sub: '競争と社交のエネルギー — 積極的で人懐っこい気質', why: '社交的で活動的 → 強い外向性、即興的な行動を好む' },
    식신: { sub: '創造と余裕のエネルギー — 芸術的センスに溢れる気質', why: '創造的な感性と直感 → 感情中心の温かい判断、自由な流れを好む' },
    상관: { sub: '表現と反骨のエネルギー — 独創的で破格的な気質', why: '破格的な思考と強い表現力 → 直感優位、即興的な認識が極大化' },
    편재: { sub: '活動と多才のエネルギー — 社交적で現実感覚に優れた気質', why: '高い社交性と現実把握力 → 強い外向性、感覚的・現実的な判断' },
    정재: { sub: '安定と計画のエネルギー — 誠実で信頼感のある気質', why: '緻密な計画性と安定志向 → 感覚的・データ重視、体系的な判断' },
    편관: { sub: '挑戦と決断のエネルギー — 強い推進力のリーダー気質', why: '強い決断力と原則 → 論理中心の冷静な判断、体系的な実行' },
    정관: { sub: '責任と体系のエネルギー — 信頼感があり正統派の気質', why: '強い責任感と規律 → 論理・体系中心の判断、計画的な実行' },
    편인: { sub: '直感と独創のエネルギー — 独自の視点を持つ気質', why: '強い直感と独創性 → 内面探求型エネルギー、閃きによる柔軟な行動' },
    정인: { sub: '学習と包容のエネルギー — 知的で温かい気質', why: '学問的で包容的 → 内面集中型エネルギー、直感と判断のバランス' },
  },
  en: {
    비견: { sub: 'Same energy as you — independent and self-assured temperament', why: 'Clear self-assertion & independence → slightly extraverted, logical judgment' },
    겁재: { sub: 'Competition & social energy — proactive and personable temperament', why: 'Social and active → strong extraversion, spontaneous action preference' },
    식신: { sub: 'Creative & relaxed energy — overflowing artistic sensibility', why: 'Creative sensitivity & intuition → warm, feeling-based judgment, free flow' },
    상관: { sub: 'Expression & rebellion energy — original and unconventional temperament', why: 'Unconventional thinking & strong expression → intuition-dominant, maximized spontaneity' },
    편재: { sub: 'Activity & versatility energy — sociable with strong practical sense', why: 'High sociability & reality awareness → strong extraversion, sensory-practical judgment' },
    정재: { sub: 'Stability & planning energy — diligent and reliable temperament', why: 'Meticulous planning & stability-seeking → data-driven, systematic judgment' },
    편관: { sub: 'Challenge & decisiveness energy — powerful leader temperament', why: 'Strong decisiveness & principles → cool logic-centered judgment, systematic execution' },
    정관: { sub: 'Responsibility & structure energy — trustworthy, principled temperament', why: 'Strong responsibility & discipline → logic-system centered judgment, planned execution' },
    편인: { sub: 'Intuition & originality energy — unique perspective temperament', why: 'Strong intuition & originality → inner-exploration energy, flexible inspiration-based action' },
    정인: { sub: 'Learning & embracing energy — intellectual and warm temperament', why: 'Scholarly and embracing → inner-focused energy, balanced intuition & judgment' },
  }
};

export const ESSENCE_SEASON_I18N = {
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
  }
};

export const ELEM_QUANT_I18N = {
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
  }
};

export const SMS_I18N = {
  ko: ['큰 나무 / 우뚝 선 거목의 성장 에너지', '화초·넝쿨 / 부드럽게 뻗는 유연함', '태양 / 세상을 비추는 강렬한 빛', '촛불·별빛 / 꺼지지 않는 내면의 불꽃', '큰 산·바위 / 흔들리지 않는 묵직한 대지', '논밭·대지 / 만물을 품어 키우는 땅', '원석·도끼 / 단단하고 예리한 금 기운', '보석·칼날 / 정제된 빛의 섬세함', '큰 강·바다 / 깊고 넓은 물의 힘', '빗물·이슬 / 고요히 스미는 지혜의 물'],
  ja: ['大樹 / 高くそびえる巨木の成長エネルギー', '草花・蔦 / しなやかに伸びる柔軟性', '太陽 / 世界を照らす強烈な光', 'ろうそく・星明かり / 消えることのない内面の炎', '大きな山・岩 / 揺らぐことのない重厚な大地', '田畑・大地 / 万物を包み育てる土', '原석・斧 / 硬く鋭い金の気運', '宝石・刃 / 精製された光の繊細さ', '大河・海 / 深く広い水の力', '雨水・露 / 静かに染み込む知恵の水'],
  en: ['Tall Tree / Growth energy of a towering tree', 'Flowers & Vines / Flexibility that spreads softly', 'Sun / Intense light illuminating the world', 'Candle & Starlight / Inner flame that never goes out', 'Great Mountain & Rock / Solid earth that never wavers', 'Fields & Earth / Land that embraces and nurtures all things', 'Raw Stone & Axe / Hard and sharp metal energy', 'Gem & Blade / Meticulous brilliance of refined light', 'Great River & Sea / Power of deep and wide water', 'Rain & Dew / Water of wisdom that quietly permeates']
};

export const BMS_I18N = {
  ko: ['겨울 밤물 / 깊은 고요', '얼어붙은 대지 / 인내', '봄 새벽 숲 / 힘찬 시작', '봄바람·꽃밭 / 개화', '봄 안개·용 / 변화무쌍', '여름 불씨 / 지혜', '여름 태양 / 활활', '여름 대지 / 따뜻한 들판', '가을 쇠 / 결단', '가을 서리 / 정제', '황혼 황토 / 충직', '겨울 깊은 물 / 풍요'],
  ja: ['冬の夜の水 / 深い静寂', '凍てついた大地 / 忍耐', '春の暁の森 / 力強い始まり', '春風・花畑 / 開花', '春の霧・龍 / 変幻自在', '夏の火種 / 知恵', '夏の太陽 / 燃え上がる', '夏の土地 / 温かい野原', '秋の鉄 / 決断', '秋の霜 / 精製', '黄昏の黄土 / 忠実', '冬の深い水 / 豊かさ'],
  en: ['Winter night water / Deep silence', 'Frozen earth / Patience', 'Spring dawn forest / Powerful start', 'Spring breeze & Flower field / Blooming', 'Spring mist & Dragon / Ever-changing', 'Summer spark / Wisdom', 'Summer sun / Blazing', 'Summer earth / Warm field', 'Autumn metal / Decision', 'Autumn frost / Refinement', 'Twilight loess / Loyalty', 'Deep winter water / Abundance']
};

export const SE = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
export const BE = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];
export const SH = ['갑', '을', '병', '정', '무', '기', '경', '신', '임', '계'];
export const BH = ['자', '축', '인', '묘', '진', '사', '오', '미', '신', '유', '술', '해'];
export const SE_ELEM = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4]; // 木0 火1 土2 金3 水4
export const BE_ELEM = [4, 2, 0, 0, 2, 1, 1, 2, 3, 3, 2, 4];
export const ELEM_NAME = ['木', '火', '土', '金', '水'];
export const BRANCH_BONGI = [9, 5, 0, 1, 4, 2, 3, 5, 6, 7, 4, 8];

export const JG = [[1, 6], [2, 4], [3, 6], [4, 5], [5, 6], [6, 6], [7, 7], [8, 7], [9, 8], [10, 8], [11, 7], [12, 7]];
export const JG_BI = [11, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
export const JG_BR = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 0];

export const SIPSUNG_DATA = {
  '비견': { emoji: '⚡', title: '독립 전사', sub: '나와 같은 에너지 — 주체적이고 자기 확신이 강한 기질', E: 6, N: 0, T: 4, J: -2, detail: '"또 다른 나"가 에너지로 존재하는 거야. 독립심이 강하고 남의 간섭을 안 좋아해. 내 방식대로 하고 싶어하는 편이고, 자존심도 세. 하지만 그만큼 <strong>스스로를 믿는 힘</strong>이 있어서 어디서든 자기 자리를 만들어내.', mbti_why: '자기주장이 명확하고 독립적 → 약간의 외향성, 논리적 판단 경향' },
  '겁재': { emoji: '🔥', title: '도전하는 승부사', sub: '경쟁과 사교의 에너지 — 적극적이고 붙임성 있는 기질', E: 10, N: -2, T: 2, J: -5, detail: '사교적이고 적극적이지만 속에 경쟁심이 숨어있어. 친구도 많고 활발한데, "내가 더 잘할 수 있는데" 하는 마음이 올라올 때가 있어. <strong>도전정신과 승부욕</strong>이 강해서 뭐든 일단 부딪혀보는 타입.', mbti_why: '사교적이고 활동적 → 강한 외향성, 즉흥적 변칙 행동 선호' },
  '식신': { emoji: '🌸', title: '감성 크리에이터', sub: '창의와 여유의 에너지 — 예술적 감각이 넘치는 기질', E: 2, N: 8, T: -8, J: -6, detail: '창의적이고 여유로운 에너지. 먹는 거 좋아하고, 예술적 감각도 있어. 사람들한테 <strong>편안한 느낌</strong>을 주고, 뭔가를 표현하는 데 재능이 있어. 삶을 즐기면서도 깊이 있는 사고를 하는 매력적인 기질.', mbti_why: '창의적 감성과 직관 → 감정 중심의 따뜻한 판단, 자유로운 흐름 선호' },
  '상관': { emoji: '🎨', title: '규칙을 깨는 천재', sub: '표현과 반항의 에너지 — 독창적이고 파격적인 기질', E: 8, N: 12, T: -4, J: -12, detail: '"규칙? 나한테는 별로~" 이런 느낌의 에너지. 창의적이고 표현력이 뛰어나서 예술이나 글쓰기에 재능이 있어. <strong>기존의 틀을 깨는 걸 좋아하고</strong>, 남들이 못 보는 것을 포착하는 눈이 있어. 자유로운 영혼!', mbti_why: '파격적 사고와 강한 표현력 → 직관 우세, 즉흥적 인식 극대화' },
  '편재': { emoji: '🌍', title: '만능 엔터테이너', sub: '활동과 다재의 에너지 — 사교적이고 현실 감각이 뛰어난 기질', E: 12, N: -6, T: 4, J: -4, detail: '사교적이고 활발해. 새로운 사람 만나는 거 좋아하고, 여러 가지를 동시에 잘하는 멀티태스커. <strong>사업 감각도 있고 적응력도 뛰어나</strong>. 어디서든 분위기 메이커 역할을 자연스럽게 해.', mbti_why: '높은 사교성과 현실 파악력 → 강한 외향성, 감각적·현실적 판단' },
  '정재': { emoji: '💎', title: '꾸준한 성장러', sub: '안정과 계획의 에너지 — 성실하고 믿음직한 기질', E: -4, N: -8, T: 4, J: 12, detail: '꼼꼼하고 계획적인 에너지. 안정적인 걸 좋아하고, 한 분야에서 꾸준히 실력을 쌓아가는 타입. <strong>성실하고 믿음직해서</strong> "이 사람한테 맡기면 확실하다" 이런 평가를 받아.', mbti_why: '꼼꼼한 계획성과 안정 추구 → 감각적·데이터 기반, 체계적 판단' },
  '편관': { emoji: '⚔️', title: '카리스마 리더', sub: '도전과 결단의 에너지 — 강한 추진력의 리더 기질', E: 6, N: -2, T: 12, J: 8, detail: '이름은 무섭지만 실은 <strong>도전정신과 결단력</strong>의 에너지야. 리더십이 있고, 어려운 상황에서 빛을 발해. 압박감 속에서도 의연하게 버티는 강한 정신력의 소유자. 위기에 강한 타입.', mbti_why: '강한 결단력과 원칙 → 논리 중심의 냉철한 판단, 체계적 실행' },
  '정관': { emoji: '🏛️', title: '원칙의 수호자', sub: '책임과 체계의 에너지 — 신뢰감 있고 정석을 따르는 기질', E: -2, N: -4, T: 8, J: 12, detail: '책임감이 강하고 규칙을 잘 지켜. 조직에서 인정받는 타입. <strong>체계적이고 원칙적</strong>이어서 어떤 일이든 정석대로 잘 해내. "든든한 사람" 하면 딱 이 에너지야.', mbti_why: '강한 책임감과 규율 → 논리·체계 중심의 판단, 계획적 실행' },
  '편인': { emoji: '🔮', title: '신비로운 탐구자', sub: '직관과 독창의 에너지 — 남다른 시각을 가진 기질', E: -8, N: 12, T: 4, J: -6, detail: '직관력이 뛰어나고 독창적인 생각을 하는 에너지. <strong>남들이 안 가는 길을 가는 타입</strong>. 관심사가 깊고 독특해. 학문이나 예술, 철학 같은 분야에서 빛을 발하는 기질.', mbti_why: '강한 직관과 독창성 → 내면 탐구형 에너지, 영감에 따른 유연한 행동' },
  '정인': { emoji: '📚', title: '지혜로운 감싸안기', sub: '학습과 포용의 에너지 — 지적이고 따뜻한 기질', E: -6, N: 8, T: 2, J: 6, detail: '학습능력이 뛰어나고 지적 호기심이 강한 에너지. <strong>사람들을 이해하고 감싸주는 따뜻함</strong>도 있어. 교육이나 연구 분야에 재능이 있고, 깊이 있는 사고를 하는 편.', mbti_why: '학구적이고 포용적 → 내면 집중형 에너지, 직관과 판단의 균형' }
};

export const ILJU_60 = {
  '甲子': { E: 52, N: 65, T: 60, J: 62, title: '지혜로운 선구자', title_f: '통찰의 전략가', desc: '겨울 강물 위 큰 나무. 깊은 통찰과 조용한 리더십.' },
  '甲寅': { E: 70, N: 62, T: 65, J: 58, title: '불굴의 개척자', title_f: '당당한 선봉장', desc: '숲속 가장 큰 나무. 강한 추진력으로 길을 만들어가.' },
  '甲辰': { E: 48, N: 68, T: 62, J: 48, title: '탐구하는 전략가', title_f: '꿈꾸는 기획자', desc: '봄 땅을 뚫는 새싹. 독창적 아이디어로 깊이 파고들어.' },
  '甲午': { E: 68, N: 58, T: 45, J: 52, title: '따뜻한 리더', title_f: '감성 리더', desc: '여름 햇살 아래 나무. 열정과 공감으로 사람을 이끌어.' },
  '甲申': { E: 62, N: 55, T: 65, J: 65, title: '전략적 실행가', title_f: '날카로운 기획자', desc: '서릿발 맞은 단단한 나무. 체계적 실행이 강점.' },
  '甲戌': { E: 50, N: 65, T: 62, J: 60, title: '깊은 탐험가', title_f: '본질을 꿰뚫는 눈', desc: '가을 산의 고목. 신중하고 깊이 있는 통찰.' },
  '乙丑': { E: 38, N: 45, T: 40, J: 65, title: '성실한 조력자', title_f: '묵묵한 케어러', desc: '겨울 땅의 풀. 신뢰를 쌓고 사람을 돌봐.' },
  '乙卯': { E: 42, N: 60, T: 35, J: 38, title: '감성적 예술가', title_f: '감성 표현의 달인', desc: '봄 숲의 넝쿨. 섬세한 감수성으로 아름다움을 표현.' },
  '乙巳': { E: 45, N: 58, T: 42, J: 45, title: '직관적 탐색자', title_f: '숨겨진 걸 찾는 눈', desc: '여름 덩굴. 날카로운 직관으로 숨겨진 것을 발견.' },
  '乙未': { E: 48, N: 52, T: 38, J: 45, title: '따뜻한 공감자', title_f: '다정한 감싸안기', desc: '초여름 부드러운 풀. 따뜻한 마음으로 주변을 감싸.' },
  '乙酉': { E: 40, N: 42, T: 45, J: 60, title: '완벽한 예술가', title_f: '섬세한 심미안', desc: '가을 이슬 맺힌 잎새. 섬세하고 완벽한 미적 감각.' },
  '乙亥': { E: 35, N: 65, T: 38, J: 42, title: '깊은 이상주의자', title_f: '꿈꾸는 감성인', desc: '겨울 샘물가의 풀. 깊은 공감과 비전.' },
  '丙子': { E: 65, N: 62, T: 45, J: 42, title: '창의적 탐험가', title_f: '번뜩이는 아이디어꾼', desc: '겨울밤 횃불. 번뜩이는 아이디어와 유쾌한 에너지.' },
  '丙寅': { E: 72, N: 58, T: 42, J: 55, title: '열정적 리더', title_f: '따뜻한 카리스마', desc: '봄 숲의 태양. 따뜻한 카리스마로 사람을 모아.' },
  '丙辰': { E: 65, N: 68, T: 52, J: 42, title: '혁신적 아이디어맨', title_f: '새로운 가능성의 눈', desc: '봄비 내리는 밝은 날. 창의적 발상의 가능성.' },
  '丙午': { E: 75, N: 55, T: 42, J: 50, title: '불꽃 같은 표현자', title_f: '열정의 아이콘', desc: '한여름 정오의 태양. 강렬한 열정과 존재감.' },
  '丙申': { E: 68, N: 65, T: 55, J: 40, title: '재치 있는 혁신가', title_f: '스마트 엔터테이너', desc: '가을 하늘의 빛. 빠른 두뇌와 넘치는 에너지.' },
  '丙戌': { E: 65, N: 60, T: 48, J: 45, title: '따뜻한 모험가', title_f: '호기심 가득한 탐험가', desc: '가을 저녁놀. 따뜻함과 호기심으로 새 길을 개척.' },
  '丁丑': { E: 38, N: 60, T: 38, J: 62, title: '깊은 공감자', title_f: '조용한 빛의 위로', desc: '겨울밤 촛불. 깊은 공감으로 조용히 빛을 발해.' },
  '丁卯': { E: 42, N: 65, T: 32, J: 38, title: '예술적 몽상가', title_f: '상상의 세계를 그리는', desc: '봄밤의 따뜻한 불빛. 섬세한 감성과 창의적 상상력.' },
  '丁巳': { E: 44, N: 62, T: 48, J: 44, title: '통찰력 있는 관찰자', title_f: '본질을 읽는 눈', desc: '여름 등불. 사람과 상황의 본질을 파악하는 직관.' },
  '丁미': { E: 46, N: 55, T: 35, J: 44, title: '따뜻한 감성인', title_f: '마음을 움직이는', desc: '여름 저녁의 작은 불꽃. 사람 마음을 움직이는 감성.' },
  '丁酉': { E: 40, N: 48, T: 42, J: 58, title: '섬세한 완벽주의자', title_f: '빛나는 디테일러', desc: '가을밤 촛불. 예리한 감각과 완벽주의.' },
  '丁亥': { E: 35, N: 68, T: 36, J: 40, title: '신비로운 이상가', title_f: '깊은 직관의 소유자', desc: '겨울 밤바다의 등대불. 깊은 직관과 이상.' },
  '戊子': { E: 42, N: 45, T: 60, J: 68, title: '신뢰받는 관리자', title_f: '든든한 울타리', desc: '겨울 산. 깊은 신뢰와 체계로 안정감을 줘.' },
  '戊寅': { E: 65, N: 50, T: 65, J: 62, title: '책임감 있는 리더', title_f: '묵직한 리더십', desc: '봄 산의 기상. 강한 책임감과 추진력.' },
  '戊辰': { E: 48, N: 52, T: 60, J: 62, title: '꼼꼼한 전략가', title_f: '치밀한 플래너', desc: '봄비 먹은 산. 치밀한 계획과 안정적 실행.' },
  '戊午': { E: 68, N: 48, T: 55, J: 48, title: '활동적인 현실주의자', title_f: '에너지 넘치는 행동파', desc: '여름 산. 강한 에너지와 현실 감각.' },
  '戊申': { E: 62, N: 55, T: 62, J: 45, title: '영리한 행동파', title_f: '스마트 실행가', desc: '가을 산 바위. 현실적 판단과 빠른 행동력.' },
  '戊戌': { E: 48, N: 48, T: 62, J: 65, title: '원칙 있는 수호자', title_f: '흔들리지 않는 신뢰', desc: '늦가을 산. 강한 원칙과 묵묵한 수호.' },
  '己丑': { E: 38, N: 40, T: 38, J: 65, title: '성실한 보호자', title_f: '조용한 돌봄의 달인', desc: '겨울 논밭. 묵묵한 성실함으로 주변을 돌봐.' },
  '己卯': { E: 44, N: 55, T: 35, J: 40, title: '섬세한 중재자', title_f: '갈등을 녹이는 부드러움', desc: '봄 정원. 공감으로 갈등을 녹여내.' },
  '己巳': { E: 46, N: 52, T: 42, J: 46, title: '따뜻한 조력자', title_f: '직관적 케어러', desc: '여름 들판. 직관적 따뜻함으로 편안함을 줘.' },
  '己未': { E: 44, N: 44, T: 36, J: 50, title: '온화한 공감자', title_f: '넉넉한 포용력', desc: '여름 풀밭. 넉넉한 수용력으로 누구든 편안하게 품어.' },
  '己酉': { E: 40, N: 42, T: 48, J: 60, title: '꼼꼼한 배려가', title_f: '세심한 관찰의 눈', desc: '가을 정원. 섬세한 관찰력으로 사람을 챙겨.' },
  '己亥': { E: 36, N: 62, T: 38, J: 44, title: '깊은 이타주의자', title_f: '헌신의 아이콘', desc: '겨울 샘터. 깊은 공감과 헌신으로 의지가 돼.' },
  '庚子': { E: 62, N: 50, T: 68, J: 65, title: '단호한 실행가', title_f: '냉정한 판단의 달인', desc: '겨울 칼날. 명확한 판단과 강한 실행력.' },
  '庚寅': { E: 72, N: 55, T: 68, J: 58, title: '카리스마 리더', title_f: '강한 개척자', desc: '봄의 단단한 도끼. 강한 의지로 앞길을 개척.' },
  '庚辰': { E: 50, N: 60, T: 68, J: 62, title: '전략적 완벽주의자', title_f: '치밀한 전략가', desc: '봄 암반. 치밀한 전략과 높은 기준.' },
  '庚午': { E: 68, N: 50, T: 62, J: 55, title: '열정적 행동가', title_f: '불꽃 같은 추진력', desc: '여름 쇠. 달아오른 열정과 강한 의지.' },
  '庚申': { E: 65, N: 52, T: 68, J: 45, title: '직선적 승부사', title_f: '빠른 결단의 달인', desc: '가을 서릿발. 직선적이고 빠른 판단.' },
  '庚戌': { E: 48, N: 50, T: 65, J: 65, title: '신중한 원칙가', title_f: '묵직한 원칙의 힘', desc: '가을 산의 바위. 신중한 판단과 강한 원칙.' },
  '辛丑': { E: 36, N: 42, T: 48, J: 68, title: '완벽한 전문가', title_f: '꼼꼼한 프로페셔널', desc: '겨울 보석. 꼼꼼한 완벽주의와 높은 전문성.' },
  '辛卯': { E: 42, N: 52, T: 38, J: 42, title: '예술적 감각파', title_f: '미적 감각의 달인', desc: '봄 이슬. 섬세한 미적 감각과 창의성.' },
  '辛巳': { E: 44, N: 58, T: 50, J: 44, title: '날카로운 분석가', title_f: '예리한 통찰가', desc: '여름 보석의 빛. 예리한 분석력과 직관.' },
  '辛未': { E: 55, N: 48, T: 38, J: 46, title: '따뜻한 완벽주의자', title_f: '감성과 기준을 겸비한', desc: '여름 끝의 보석. 따뜻한 배려와 높은 기준.' },
  '辛酉': { E: 38, N: 42, T: 55, J: 68, title: '정밀한 완성가', title_f: '완벽한 마무리의 힘', desc: '가을 순금. 완벽한 정밀함과 날카로운 기준.' },
  '辛亥': { E: 38, N: 65, T: 40, J: 38, title: '자유로운 감성가', title_f: '자유영혼 아티스트', desc: '겨울 샘의 보석. 자유로운 영혼과 깊은 감성.' },
  '壬子': { E: 42, N: 68, T: 65, J: 62, title: '깊은 전략가', title_f: '광대한 지혜의 소유자', desc: '깊은 겨울 강. 광대한 지혜와 큰 그림.' },
  '壬寅': { E: 68, N: 65, T: 58, J: 40, title: '자유로운 혁신가', title_f: '창의적 선봉장', desc: '봄 강의 급류. 넘치는 에너지와 창의성.' },
  '壬辰': { E: 48, N: 68, T: 60, J: 46, title: '논리적 탐구자', title_f: '깊이 파고드는 연구자', desc: '봄비 가득한 강. 논리적 사고와 탐구 정신.' },
  '壬午': { E: 65, N: 58, T: 42, J: 50, title: '감성적 지도자', title_f: '따뜻한 카리스마', desc: '여름 강물. 포용력으로 사람들 마음을 얻어.' },
  '壬申': { E: 65, N: 68, T: 60, J: 38, title: '재기발랄한 천재', title_f: '스마트 크리에이터', desc: '가을 강. 빠른 두뇌와 번뜩이는 아이디어.' },
  '壬戌': { E: 46, N: 62, T: 65, J: 62, title: '조용한 전략가', title_f: '치밀한 큰 그림', desc: '가을 깊은 강. 조용하지만 치밀한 전략.' },
  '癸丑': { E: 36, N: 45, T: 40, J: 65, title: '신중한 보호자', title_f: '섬세한 감성 수호자', desc: '겨울 빗물이 만든 얼음. 감성과 깊은 신뢰.' },
  '癸卯': { E: 44, N: 62, T: 35, J: 38, title: '감성적 창작자', title_f: '감성 표현의 천재', desc: '봄비. 풍부한 감성과 창의성.' },
  '癸巳': { E: 42, N: 62, T: 58, J: 44, title: '분석적 직관가', title_f: '날카로운 진실 탐구자', desc: '여름 소나기. 날카로운 분석과 깊은 직관.' },
  '癸未': { E: 40, N: 58, T: 36, J: 46, title: '공감하는 이상가', title_f: '따뜻한 비전의 소유자', desc: '여름 끝 단비. 깊은 공감과 이상주의.' },
  '癸酉': { E: 36, N: 55, T: 58, J: 62, title: '예리한 분석가', title_f: '정밀한 패턴 파악자', desc: '가을 이슬. 정밀한 분석력과 깊은 통찰.' },
  '癸亥': { E: 34, N: 68, T: 38, J: 40, title: '깊은 자유인', title_f: '무한한 상상의 바다', desc: '겨울 깊은 샘. 자유로운 영혼과 무한한 상상력.' },
};

export const GENDER_ADJ = {
  yang_m: { E: 3, N: 0, T: 3, J: 2 }, yang_f: { E: -2, N: 3, T: 0, J: 0 },
  yin_m: { E: 2, N: 0, T: 2, J: 0 }, yin_f: { E: 0, N: 2, T: -3, J: 0 }
};

export const GENDER_SIP_ADJ = {
  m: { 상관: { E: 2, N: 0, T: 0, J: 0 }, 편재: { E: 4, N: 0, T: 0, J: 0 }, 정관: { E: 0, N: 0, T: 3, J: 3 }, 편인: { E: -3, N: 3, T: 0, J: 0 }, 편관: { E: 2, N: 0, T: 2, J: 0 } },
  f: { 상관: { E: 0, N: 4, T: -2, J: -4 }, 편관: { E: -3, N: 0, T: 2, J: 3 }, 식신: { E: 0, N: 2, T: -4, J: 0 }, 정재: { E: -2, N: 0, T: 0, J: 3 }, 편인: { E: -2, N: 4, T: 0, J: -2 } }
};

export const META = {
  INTJ: { emoji: '🔭', good: ['ENFP', 'ENTP'], care: ['ESFP', 'ESTP'], name: { ko: '전략가형', ja: '戦略家型', en: 'Architect' }, tag: { ko: '독립적 비전의 완벽주의 전략가', ja: '独立的ビジョンの完璧主義戦略家', en: 'Perfectionist strategist with independent vision' }, figs: { ko: [{ e: '🤖', n: '일론 머스크', r: '테슬라' }, { e: '📖', n: '정도전', r: '조선의 설계자' }, { e: '🎮', n: '페이커', r: 'T1' }], en: [{ e: '🤖', n: 'Elon Musk', r: 'Tesla' }, { e: '🧠', n: 'Sam Altman', r: 'OpenAI' }, { e: '🔭', n: 'Isaac Newton', r: 'Scientist' }], ja: [{ e: '🎮', n: '小島秀夫', r: 'ゲーム監督' }, { e: '🏯', n: '織田信長', r: '戦国武将' }, { e: '♟️', n: '藤井聡太', r: '将棋棋士' }] }, figNote: { ko: '시스템으로 세상을 바꾸는 전략가들과 에너지가 닮았어.', ja: 'システムで世界を変える戦略家たちとエネルギーが似ているよ。', en: 'Your energy resembles strategists who change the world through systems.' }, careers: { ko: [{ e: '🤖', n: 'AI AGI 시스템 아키텍트', t: 1, d: '전체 시스템의 논리 구조를 설계하는 마스터' }, { e: '🚀', n: '우주 항공 전략가', t: 1, d: '미래 인류의 거주지를 설계하는 역할' }, { e: '📊', n: '프롬프트 엔지니어링 리더', t: 0, d: 'AI의 한계를 넘는 최적의 지시 설계' }], en: [{ e: '🤖', n: 'AI AGI System Architect', t: 1, d: 'Master designing the logical structure of entire systems' }, { e: '🚀', n: 'Aerospace Strategist', t: 1, d: 'Role designing future human habitats' }, { e: '📊', n: 'Prompt Engineering Leader', t: 0, d: 'Optimal instruction design beyond AI limits' }] }, careerDesc: { ko: '논리와 비전으로 세상을 재설계하는 빌더 타입이야.', ja: '論理とビジョンで世界を再設計するビルダータイプだよ. ', en: 'You are a builder type who redesigns the world with logic and vision.' } },
  INTP: { emoji: '🧬', good: ['ENTJ', 'ESTJ'], care: ['ESFJ', 'ENFJ'], name: { ko: '논리술사형', ja: '論理学者型', en: 'Logician' }, tag: { ko: '탐구를 즐기는 논리적 지식 탐험가', ja: '探究を楽しむ論理的な知識探検家', en: 'Logical knowledge explorer who enjoys exploration' }, figs: { ko: [{ e: '⚛️', n: '알버트 아인슈타인', r: '물리학자' }, { e: '💻', n: '이찬진', r: '한글과컴퓨터' }, { e: '🎲', n: '이세돌', r: '바둑 기사' }], en: [{ e: '⚛️', n: 'Albert Einstein', r: 'Physicist' }, { e: '💻', n: 'Linus Torvalds', r: 'Linux Creator' }, { e: '♟️', n: 'Bobby Fischer', r: 'Chess Grandmaster' }], ja: [{ e: '🧪', n: '野口英世', r: '医学者' }, { e: '🔬', n: '山中伸弥', r: 'ノーベル賞' }, { e: '🎮', n: '宮本茂', r: '任天堂' }] }, figNote: { ko: '끝없는 지적 탐구로 패러다임을 바꾼 사색가들과 닮았어.', ja: '絶え間ない知的探究でパラダイムを変えた思索家たちに似ているよ。', en: 'You resemble thinkers who changed paradigms through endless intellectual pursuit.' }, careers: { ko: [{ e: '🧠', n: 'AGI 연구 과학자', t: 1, d: 'AI의 자의식과 논리 구조를 탐구' }, { e: '🔢', n: '양자 컴퓨팅 프로그래머', t: 1, d: '차세대 연산 알고리즘 개발' }, { e: '💻', n: '탈중앙화 앱(DApp) 개발자', t: 0, d: '웹3.0 시대의 새로운 규칙 설계' }], en: [{ e: '🧠', n: 'AGI Research Scientist', t: 1, d: 'Exploring AI self-awareness and logical structures' }, { e: '🔢', n: 'Quantum Computing Programmer', t: 1, d: 'Developing next-generation computing algorithms' }, { e: '💻', n: 'Decentralized App (DApp) Developer', t: 0, d: 'Designing new rules for the Web 3.0 era' }] }, careerDesc: { ko: '이론+분석+시스템 설계에서 대체 불가능한 힘을 발휘해.', ja: '理論＋分析＋システム設計で代替不可能な力を発揮するよ。', en: 'You exert irreplaceable power in theory, analysis, and system design.' } },
  ENTJ: { emoji: '⚡', name: { ko: '통솔자형', ja: '指揮官型', en: 'Commander' }, tag: { ko: '강한 의지로 목표를 이끄는 타고난 리더', ja: '強い意志で目標へと導く天性のリーダー', en: 'Born leader who drives goals with unstoppable will' }, good: ['INTP', 'ISTP'], care: ['INFP', 'ISFP'], figs: { ko: [{ e: '🚀', n: '이재용', r: '삼성전자' }, { e: '⚔️', n: '이순신', r: '조선 제독' }, { e: '🎤', n: '방시혁', r: 'HYBE' }], en: [{ e: '🚀', n: 'Steve Jobs', r: 'Apple' }, { e: '💼', n: 'Sheryl Sandberg', r: 'Meta' }, { e: '🎬', n: 'James Cameron', r: 'Director' }], ja: [{ e: '💼', n: '孫正義', r: 'ソフトバンク' }, { e: '🏯', n: '豊臣秀吉', r: '戦国武将' }, { e: '⚾', n: '栗山英樹', r: 'WBC監督' }] }, figNote: { ko: '판 자체를 새로 짜는 빌더형 리더들과 에너지가 닮았어.', ja: '판を새로작るビルダー型リーダーたちとエネルギー가似ているよ。', en: 'Your energy mirrors builder-leaders who create entirely new playing fields.' }, careers: { ko: [{ e: '🏢', n: '글로벌 AGI 거버넌스 이사', t: 1, d: '전 세계 AI 규칙과 표준을 결정하는 리더' }, { e: '📈', n: '뉴 프론티어 VC', t: 1, d: '화성 식민지 등 미래 산업에 투자' }, { e: '🌐', n: '글로벌 PM', t: 0, d: '인간과 AI 팀을 통합 관리하는 팀장' }], en: [{ e: '🏢', n: 'Global AGI Governance Director', t: 1, d: 'Leader defining global AI rules and standards' }, { e: '📈', n: 'New Frontier VC', t: 1, d: 'Investing in future industries like Mars colonization' }, { e: '🌐', n: 'Global Product Manager', t: 0, d: 'Leading integrated human + AI teams' }] }, careerDesc: { ko: '조직을 이끌고 거대한 판을 짜는 포지션에서 빛나.', ja: '組織をリードし、大きな場を作るポジションで輝くよ。', en: 'You shine in positions where you lead teams and build massive structures.' } },
  ENTP: { emoji: '💡', name: { ko: '변론가형', ja: '討論者型', en: 'Debater' }, tag: { ko: '창의적 도전으로 세상을 뒤집는 아이디어맨', ja: '創意ある挑戦で世界をひっくり返すアイデアの天才', en: 'Idea genius who flips the world with creative challenges' }, good: ['INFJ', 'INTJ'], care: ['ISFJ', 'ISTJ'], figs: { ko: [{ e: '🎬', n: '봉준호', r: '영화감독' }, { e: '🎙️', n: '유시민', r: '작가' }, { e: '⚡', n: '정약용', r: '조선 실학자' }], en: [{ e: '🎬', n: 'Quentin Tarantino', r: 'Director' }, { e: '⚡', n: 'Thomas Edison', r: 'Inventor' }, { e: '🎙️', n: 'Ryan Reynolds', r: 'Actor' }], ja: [{ e: '🏯', n: '坂本龍馬', r: '幕末志士' }, { e: '📺', n: '西野亮廣', r: 'クリエイター' }, { e: '🎬', n: '北野武', r: '映画監督' }] }, figNote: { ko: '반짝이는 재치와 도전 정신으로 통념을 깬 혁신가들.', ja: '輝く機智と挑戦精神で常識を打ち破った革新家たち。', en: 'Innovators who shattered norms with brilliant wit and relentless curiosity.' }, careers: { ko: [{ e: '🎙️', n: 'AGI 프롬프트 컨설턴트', t: 1, d: 'AI의 창의성을 극한으로 끌어내는 조언가' }, { e: '🚀', n: '그로스 해커', t: 1, d: '전혀 새로운 성장 공식을 찾아내는 눈' }, { e: '🤝', n: '스타트업 인큐베이터', t: 0, d: '아이디어를 사업화하는 최고의 기획자' }], en: [{ e: '🎙️', n: 'AGI Prompt Consultant', t: 1, d: 'Advisor who pushes AI creativity to its limits' }, { e: '🚀', n: 'Growth Hacker', t: 1, d: 'Eye for finding entirely new growth formulas' }, { e: '🤝', n: 'Startup Incubator', t: 0, d: 'Master planner who turns ideas into businesses' }] }, careerDesc: { ko: '아이디어+설득+혁신적 문제해결이 너의 최강 무기야.', ja: 'アイデア＋説得＋革新的な問題解決があなたの最強武器だよ。', en: 'Ideas + persuasion + innovative problem-solving are your ultimate superpowers.' } },
  INFJ: { emoji: '🌙', name: { ko: '옹호자형', ja: '提唱者型', en: 'Advocate' }, tag: { ko: '깊은 공감과 비전의 조용한 이상주의자', ja: '深い共感とビジョンを持つ静かな理想主義者', en: 'Quiet idealist with deep empathy and world-changing vision' }, good: ['ENFP', 'ENTP'], care: ['ESTP', 'ESFP'], figs: { ko: [{ e: '🎵', n: '아이유', r: '가수' }, { e: '📖', n: '한강', r: '소설가' }, { e: '🌱', n: '윤동주', r: '시인' }], en: [{ e: '🎵', n: 'Taylor Swift', r: 'Singer' }, { e: '📖', n: 'J.K. Rowling', r: 'Author' }, { e: '🕊️', n: 'Nelson Mandela', r: 'Leader' }], ja: [{ e: '📖', n: '夏目漱石', r: '小説家' }, { e: '🎵', n: '坂本龍一', r: '音楽家' }, { e: '🎬', n: '新海誠', r: 'アニメ監督' }] }, figNote: { ko: '감성 글쓰기와 깊은 공감으로 마음을 움직인 아티스트들.', ja: '感性あふれる表現と深い共感で心を動かしたアーティストたち。', en: 'Artists who moved hearts through emotional expression and deep empathy.' }, careers: { ko: [{ e: '✍️', n: 'AI 윤리 관리자', t: 1, d: 'AI가 인간의 가치를 훼손하지 않도록 가이드 설계' }, { e: '🎨', n: '디지털 힐링 테라피스트', t: 1, d: '가상 공간에서 사람의 마음을 치유하는 콘텐츠 제작' }, { e: '🧘', n: '정신 건강 코치', t: 0, d: '깊은 통찰로 개인의 성장을 돕는 가이드' }], en: [{ e: '✍️', n: 'AI Ethics Manager', t: 1, d: 'Designing guidelines so AI never undermines human values' }, { e: '🎨', n: 'Digital Healing Therapist', t: 1, d: 'Creating content that heals hearts in virtual spaces' }, { e: '🧘', n: 'Mental Health Coach', t: 0, d: 'Guide who helps individuals grow through deep insight' }] }, careerDesc: { ko: '감성+공감+의미 있는 일에서 최고의 몰입을 느껴.', ja: '感性＋共感＋意義ある仕事に最高の没入感を感じるよ。', en: 'You reach your deepest flow state in work that is emotional, empathetic, and meaningful.' } },
  INFP: { emoji: '🌸', name: { ko: '중재자형', ja: '仲介者型', en: 'Mediator' }, tag: { ko: '진정성과 감성으로 세상을 바라보는 몽상가', ja: '真心と感性で世界を見つめる夢想家', en: 'Dreamer who sees the world through authenticity and pure emotion' }, good: ['ENFJ', 'ENTJ'], care: ['ESTJ', 'ISTJ'], figs: { ko: [{ e: '🎵', n: 'BTS 뷔', r: '가수' }, { e: '🎨', n: '백석', r: '시인' }, { e: '✍️', n: '정세랑', r: '소설가' }], en: [{ e: '🎵', n: 'Lana Del Rey', r: 'Singer' }, { e: '🎨', n: 'Vincent van Gogh', r: 'Painter' }, { e: '📖', n: 'William Shakespeare', r: 'Author' }], ja: [{ e: '📖', n: '太宰治', r: '小説家' }, { e: '🎬', n: '岩井俊二', r: '映画監督' }, { e: '🎵', n: '米津玄師', r: '音楽家' }] }, figNote: { ko: '자기만의 세계관으로 조용히 팬덤을 만들어가는 아티스트들.', ja: '自分だけの世界観で静かにファンダムを作り上げているアーティストたち。', en: 'Artists who quietly built devoted fandoms through their unique, authentic worldview.' }, careers: { ko: [{ e: '✍️', n: 'AI 협업 웹툰/웹소설 작가', t: 1, d: 'AI 툴을 활용해 자신만의 거대한 세계관을 시각화' }, { e: '🎨', n: '메타버스 아바타 디자이너', t: 1, d: '디지털 자아의 개성을 창조' }, { e: '🎵', n: '버추얼 인디 뮤지션', t: 0, d: '진정성 있는 음악으로 소통하는 아티스트' }], en: [{ e: '✍️', n: 'AI-Collab Webtoon / Web Novel Creator', t: 1, d: 'Visualizing your massive worldview using AI tools' }, { e: '🎨', n: 'Metaverse Avatar Designer', t: 1, d: 'Creating the personality of digital selves' }, { e: '🎵', n: 'Virtual Indie Musician', t: 0, d: 'Artist connecting through deeply authentic music' }] }, careerDesc: { ko: '창작+감성+자기만의 독창적인 세계관에서 가장 빛나.', ja: '創作＋感性＋自分だけの独自の世界観で最も輝くよ。', en: 'You glow brightest in creation, emotion, and your own one-of-a-kind worldview.' } },
  ENFJ: { emoji: '🌟', name: { ko: '선도자형', ja: '主人公型', en: 'Protagonist' }, tag: { ko: '사람들에게 영감을 주는 따뜻한 멘토', ja: '人々にインスピレーションを与える温かいメンター', en: 'Warm mentor who inspires everyone around them' }, good: ['INFP', 'ISFP'], care: ['ISTP', 'INTP'], figs: { ko: [{ e: '🎙️', n: '유재석', r: 'MC' }, { e: '🌟', n: 'BTS RM', r: '가수' }, { e: '📣', n: '김구', r: '독립운동가' }], en: [{ e: '🎙️', n: 'Oprah Winfrey', r: 'Presenter' }, { e: '🌟', n: 'Barack Obama', r: 'Leader' }, { e: '📣', n: 'Malala Yousafzai', r: 'Activist' }], ja: [{ e: '🎾', n: '松岡修조', r: '元テニス選手' }, { e: '🏯', n: '聖徳太子', r: '政治家' }, { e: '🎬', n: '是枝裕和', r: '映画監督' }] }, figNote: { ko: '사람 에너지를 모으고 커뮤니티를 만드는 능력이 압도적.', ja: '人のエネルギーを集め、コミュニティを作る力が圧倒的。', en: 'Their ability to gather people\'s energy and build communities is absolutely unmatched.' }, careers: { ko: [{ e: '🎙️', n: '커뮤니티 빌더', t: 1, d: 'AI 시대에 인간 소외를 해결하는 커뮤니티 전문가' }, { e: '📱', n: '휴먼-AI 커뮤니케이션 매니저', t: 1, d: '인간과 AI의 원활한 소통을 중재' }, { e: '🎓', n: '미래 라이프 코치', t: 0, d: '변화하는 시대에 개인의 비전을 찾아주는 가이드' }], en: [{ e: '🎙️', n: 'Community Builder', t: 1, d: 'Community expert solving human loneliness in the AI age' }, { e: '📱', n: 'Human-AI Communication Manager', t: 1, d: 'Bridging smooth communication between humans and AI' }, { e: '🎓', n: 'Future Life Coach', t: 0, d: 'Guide who helps find personal vision in a changing world' }] }, careerDesc: { ko: '사람을 모으고 성장시키는 일에서 천부적인 재능을 발휘해.', ja: '人を集めて成長させる仕事で天賦の才能を発揮するよ。', en: 'Your natural genius shines in work that brings people together and helps them grow.' } },
  ENFP: { emoji: '🎉', name: { ko: '활동가형', ja: '広報運動家型', en: 'Campaigner' }, tag: { ko: '열정과 상상력이 넘치는 자유로운 영혼', ja: '情熱と想像力あふれる自由な魂', en: 'Free spirit overflowing with passion and boundless imagination' }, good: ['INTJ', 'INFJ'], care: ['ISTJ', 'ISFJ'], figs: { ko: [{ e: '🎬', n: '박재범', r: '가수' }, { e: '🎤', n: '로제', r: '가수' }, { e: '🌈', n: '노홍철', r: '방송인' }], en: [{ e: '🎬', n: 'Robert Downey Jr.', r: 'Actor' }, { e: '🎤', n: 'Harry Styles', r: 'Singer' }, { e: '🌈', n: 'Emma Chamberlain', r: 'YouTuber' }], ja: [{ e: '🏯', n: '織田信長', r: '戦国武将' }, { e: '📺', n: '明石家さんま', r: '芸人' }, { e: '🎭', n: 'ムロツヨシ', r: '俳優' }] }, figNote: { ko: '숏폼 한 편으로 세상을 흔드는 에너지의 소유자들.', ja: 'ショートフォーム一本で世界を揺らすエネルギーの持ち主たち。', en: 'Energy powerhouses who can shake the world with a single short-form post.' }, careers: { ko: [{ e: '📱', n: '버추얼 인플루언서 기획자', t: 1, d: 'AI 가상 인물에 생명력과 매력을 불어넣는 창조자' }, { e: '🎨', n: 'AI 아트 퍼포먼스 기획', t: 1, d: '기술과 예술을 결합한 새로운 경험 창조' }, { e: '🚀', n: '미래 엔터테이너 창업', t: 0, d: '에너지를 비즈니스로 연결하는 리더' }], en: [{ e: '📱', n: 'Virtual Influencer Creator', t: 1, d: 'Creator breathing life and charm into AI virtual personas' }, { e: '🎨', n: 'AI Art Performance Planner', t: 1, d: 'Creating new experiences that fuse technology and art' }, { e: '🚀', n: 'Future Entertainer Founder', t: 0, d: 'Leader connecting pure energy to a real business' }] }, careerDesc: { ko: '창의성+사람 에너지가 합쳐지는 곳에서 너의 천직을 찾을 수 있어.', ja: '創造性＋人のエネルギーが合わさる場所に天職があるよ。', en: 'Find your calling where creativity and people energy collide — that\'s your stage.' } },
  ISTJ: { emoji: '🏛️', good: ['ESFP', 'ESTP'], care: ['ENFP', 'ENTP'], name: { ko: '현실주의자형', ja: '管理者형', en: 'Logistician' }, tag: { ko: '신뢰와 책임감으로 묵묵히 완수하는 기둥', ja: '信頼と責任感で黙々とやり遂げる大黒柱', en: 'Anchor who completes tasks with reliability and responsibility' }, figs: { ko: [{ e: '⚽', n: '손흥민', r: '축구 선수' }, { e: '🏅', n: '김연아', r: '피겨 스타' }, { e: '💼', n: '정도전', r: '조선의 학자' }], en: [{ e: '⚽', n: 'Cristiano Ronaldo', r: 'Athlete' }, { e: '💼', n: 'Warren Buffett', r: 'Investor' }, { e: '⚖️', n: 'Queen Elizabeth II', r: 'Monarch' }], ja: [{ e: '⚾', n: 'イチロー', r: '元野球選手' }, { e: '🏯', n: '徳川家康', r: '戦国武将' }, { e: '💼', n: '渋沢栄一', r: '実業家' }] }, figNote: { ko: '꾸준함과 기본기로 정상에 오른 사람들.', ja: '地道な努力と基本に忠実な姿勢で頂点に立った人々。', en: 'People who reached the top through consistency and solid basics.' }, careers: { ko: [{ e: '💻', n: '데이터 무결성 관리자', t: 1, d: 'AI 시대 데이터의 정확성과 신뢰성을 수호' }, { e: '🔐', n: '블록체인 보안 전문가', t: 1, d: '원칙과 체계로 시스템의 구멍을 차단' }, { e: '📊', n: '미래 재무 알고리즘 분석가', t: 0, d: '숫자로 미래의 진실을 찾는 역할' }], en: [{ e: '💻', n: 'Data Integrity Manager', t: 1, d: 'Guarding the accuracy and reliability of data in the AI era' }, { e: '🔐', n: 'Blockchain Security Expert', t: 1, d: 'Blocking system vulnerabilities with principles and structure' }, { e: '📊', n: 'Future Financial Algorithm Analyst', t: 0, d: 'Role finding the truth of the future through numbers' }] }, careerDesc: { ko: '안정과 신뢰를 기반으로 하는 전문 분야에서 독보적이야.', ja: '安定と信頼を基盤とする専門分野で独歩的だよ。', en: 'You are unrivaled in specialized fields based on stability and trust.' } },
  ISFJ: { emoji: '🛡️', good: ['ESFP', 'ESTP'], care: ['ENTJ', 'ENTP'], name: { ko: '수호자형', ja: '擁護者型', en: 'Defender' }, tag: { ko: '조용히 헌신하며 곁에 있어주는 따뜻한 보호자', ja: '静かに献身し、寄り添ってくれる温かな保護者', en: 'Warm protector who quietly devotes and stays by your side' }, figs: { ko: [{ e: '🌸', n: '아이유', r: '가수' }, { e: '🍳', n: '백종원', r: '사업가' }, { e: '🌿', n: '허준', r: '조선 의학자' }], en: [{ e: '🌸', n: 'Selena Gomez', r: 'Singer' }, { e: '👸', n: 'Princess Diana', r: 'Royal' }, { e: '🎬', n: 'Anne Hathaway', r: 'Actor' }], ja: [{ e: '🌸', n: '綾瀬はるか', r: '俳優' }, { e: '🍱', n: 'タモリ', r: 'タレント' }, { e: '🏯', n: '上杉謙信', r: '戦国武将' }] }, figNote: { ko: '따뜻한 일상 콘텐츠로 팬덤이 자연스럽게 생긴 사람들.', ja: '温かい日常のコンテンツで自然とファンダムができた人々。', en: 'People whose fandoms grew naturally through warm daily content.' }, careers: { ko: [{ e: '🍳', n: 'AI 맞춤형 영양 솔루션 전문가', t: 1, d: '데이터를 활용해 개인에게 최적화된 돌봄 제공' }, { e: '🌿', n: '디지털 헤리티지 보존가', t: 1, d: '소중한 문화와 기억을 기록하고 수호' }, { e: '🧘', n: '버추얼 테라피스트', t: 0, d: '가상 공간에서 따뜻한 위로를 전달' }], en: [{ e: '🍳', n: 'AI-Tailored Nutrition Specialist', t: 1, d: 'Providing optimized care for individuals using data' }, { e: '🌿', n: 'Digital Heritage Preservationist', t: 1, d: 'Recording and guarding precious cultures and memories' }, { e: '🧘', n: 'Virtual Therapist', t: 0, d: 'Delivering warm comfort in virtual spaces' }] }, careerDesc: { ko: '따뜻한 케어와 세심한 관찰이 필요한 일에서 가장 큰 보람을 느껴.', ja: '温かいケアと細やかな観察が必要な仕事で最大のやりがいを感じるよ。', en: 'You feel the greatest fulfillment in work that requires warm care and meticulous observation.' } },
  ESTJ: { emoji: '👑', good: ['ISFP', 'ISTP'], care: ['INFP', 'INFJ'], name: { ko: '경영자형', ja: '幹部型', en: 'Executive' }, tag: { ko: '원칙과 추진력으로 목표를 완수하는 실행가', ja: '原則と推進力で目標を完遂する実行家', en: 'Executor who completes goals with principles and drive' }, figs: { ko: [{ e: '🏀', n: '서장훈', r: '방송인' }, { e: '💼', n: '이재용', r: '삼성전자' }, { e: '⚔️', n: '김유신', r: '신라 장군' }], en: [{ e: '🏀', n: 'LeBron James', r: 'Athlete' }, { e: '💼', n: 'Tim Cook', r: 'Apple CEO' }, { e: '🎬', n: 'Judge Judy', r: 'Personality' }], ja: [{ e: '💼', n: '柳井正', r: 'ファーストリテイリング' }, { e: '🏰', n: '北条時宗', r: '鎌倉幕府執権' }, { e: '⚾', n: '野村克也', r: '元プロ野球監督' }] }, figNote: { ko: '목표 설정+팀 리드에서 탁월한 리더십의 소유자들.', ja: '目標設定＋チームリードにおいて卓越したリーダーシップの持ち主たち。', en: 'Possessors of excellent leadership in goal setting and team leading.' }, careers: { ko: [{ e: '🏢', n: 'AI 프로젝트 오너(PO)', t: 1, d: 'AI 기술을 비즈니스 성과로 연결하는 리더' }, { e: '📊', n: '운영 자동화 시스템(COO)', t: 1, d: '전체 공정을 효율적으로 최적화하는 달인' }, { e: '🎯', n: '미래 도시 운영 본부장', t: 0, d: '현실의 문제를 데이터로 신속하게 해결' }], en: [{ e: '🏢', n: 'AI Project Owner (PO)', t: 1, d: 'Leader connecting AI technology to business results' }, { e: '📊', n: 'Operations Automation Expert (COO)', t: 1, d: 'Master of efficiently optimizing entire processes' }, { e: '🎯', n: 'Future City Operations Chief', t: 0, d: 'Solving real-world problems rapidly with data' }] }, careerDesc: { ko: '현실적인 목표를 달성하고 효율을 극대화하는 일에 최적화되어 있어.', ja: '現実的な目標を達成し効率を最大化する仕事に最適化されているよ。', en: 'Optimized for achieving realistic goals and maximizing efficiency.' } },
  ESFJ: { emoji: '🤝', good: ['ISFP', 'ISTP'], care: ['INTP', 'INFP'], name: { ko: '집정관형', ja: '領事官型', en: 'Consul' }, tag: { ko: '관계의 중심에서 모두를 연결하는 사교적 돌보미', ja: '関係の中心で皆をつなげる社交的なケアラー', en: 'Social caregiver who connects everyone at the center of relationships' }, figs: { ko: [{ e: '🐰', n: '카리나', r: '에스파' }, { e: '📸', n: '김나영', r: '방송인' }, { e: '🎊', n: '황희', r: '조선 재상' }], en: [{ e: '🐰', n: 'Taylor Swift', r: 'Singer' }, { e: '📸', n: 'Jennifer Aniston', r: 'Actor' }, { e: '🎊', n: 'Hugh Jackman', r: 'Actor' }], ja: [{ e: '🌸', n: '石原さとみ', r: '俳優' }, { e: '📺', n: '中居正広', r: 'タレント' }, { e: '🏯', n: '藤原道長', r: '平安貴族' }] }, figNote: { ko: 'SNS에서 자연스럽게 팬이 모이는 퍼스널 브랜딩의 달인들.', ja: 'SNSで自然とファンが集まるパーソナルブランディングの達人たち。', en: 'Masters of personal branding who naturally gather fans on social media.' }, careers: { ko: [{ e: '📣', n: '글로벌 팬덤 매니저', t: 1, d: 'AI 아티스트와 인간 팬 사이를 연결하는 허브' }, { e: '🎉', n: '체험형 이벤트 디자이너', t: 1, d: '사람과 사람이 만나는 행복한 순간을 설계' }, { e: '🛎️', n: 'AI 맞춤 호스피탈리티 디렉터', t: 0, d: '최첨단 기술에 따뜻한 환대를 결합' }], en: [{ e: '📣', n: 'Global Fandom Manager', t: 1, d: 'Hub connecting AI artists and human fans' }, { e: '🎉', n: 'Experiential Event Designer', t: 1, d: 'Designing happy moments where people meet' }, { e: '🛎️', n: 'AI-Tailored Hospitality Director', t: 0, d: 'Combining cutting-edge tech with warm hospitality' }] }, careerDesc: { ko: '사람 사이의 연결을 강화하고 모두를 행복하게 만드는 일에서 빛나.', ja: '人とのつながりを強め、皆を幸せにする仕事で輝くよ。', en: 'You shine in work that strengthens connections and makes everyone happy.' } },
  ISTP: { emoji: '🔧', good: ['ESTJ', 'ENTJ'], care: ['ENFJ', 'INFJ'], name: { ko: '장인형', ja: '巨匠型', en: 'Virtuoso' }, tag: { ko: '침착하게 문제를 해결하는 실용적 문제해결사', ja: '冷静に問題を解決する実用的な問題解決者', en: 'Practical problem solver who solves problems calmly' }, figs: { ko: [{ e: '🎮', n: '페이커', r: 'T1' }, { e: '🏎️', n: '임권택', r: '영화감독' }, { e: '🛹', n: '김유신', r: '신라 장군' }], en: [{ e: '🏎️', n: 'Lewis Hamilton', r: 'F1' }, { e: '🛹', n: 'Nyjah Huston', r: 'Skateboarder' }, { e: '🛠️', n: 'Bear Grylls', r: 'Survivalist' }], ja: [{ e: '⚾', n: '大谷翔平', r: 'ドジャース' }, { e: '🏯', n: '宮本武蔵', r: '剣豪' }, { e: '🚗', n: '本田宗一郎', r: 'ホンダ創業者' }] }, figNote: { ko: '손으로 직접 만들고 극한 도전을 즐기는 메이커 DNA.', ja: '手で直接作り、極限の挑戦を楽しむメーカーDNA。', en: 'Maker DNA that enjoys hands-on creation and extreme challenges.' }, careers: { ko: [{ e: '🔧', n: '하드웨어 해킹 마스터', t: 1, d: '미래의 로봇과 기계를 뜯고 고치며 개선' }, { e: '🎮', n: 'e스포츠 데이터 분석 코치', t: 1, d: '순간적인 상황 판단을 데이터로 지원' }, { e: '💻', n: '임베디드 AI 개발자', t: 0, d: '기계에 지능을 불어넣는 핵심 엔지니어' }], en: [{ e: '🔧', n: 'Hardware Hacking Master', t: 1, d: 'Improving future robots and machines by taking them apart' }, { e: '🎮', n: 'eSports Data Analyst Coach', t: 1, d: 'Supporting split-second decisions with data' }, { e: '💻', n: 'Embedded AI Developer', t: 0, d: 'Core engineer breathing intelligence into machines' }] }, careerDesc: { ko: '기술적 난제를 해결하고 무언가를 직접 다루는 일에서 탁월한 실력을 발휘해.', ja: '技術的な難題を解決し、何かを直接扱う仕事で卓越した実力を発揮するよ。', en: 'You exhibit outstanding skill in solving technical puzzles and hands-on work.' } },
  ISFP: { emoji: '🎨', good: ['ESTJ', 'ESFJ'], care: ['INTJ', 'ENTJ'], name: { ko: '모험가형', ja: '冒険家型', en: 'Adventurer' }, tag: { ko: '감각과 감성으로 지금을 사는 자유로운 예술가', ja: '感覚と感性で今を生きる自由な芸術家', en: 'Free artist who lives in the moment with sense and emotion' }, figs: { ko: [{ e: '🎨', n: '제니', r: '블랙핑크' }, { e: '📸', n: '백남준', r: '예술가' }, { e: '🎵', n: '김광석', r: '가수' }], en: [{ e: '🎵', n: 'Billie Eilish', r: 'Singer' }, { e: '🎨', n: 'Banksy', r: 'Artist' }, { e: '📸', n: 'Zendaya', r: 'Actor' }], ja: [{ e: '🎨', n: '草間彌生', r: '芸術家' }, { e: '🎵', n: '宇多田ヒカル', r: '音楽家' }, { e: '🎭', n: '佐藤健', r: '俳優' }] }, figNote: { ko: '미적 감각이 독보적인 비주얼 크리에이터들.', ja: '美的センスが独歩的なビジュアルクリエイターたち。', en: 'Visual creators with unrivaled aesthetic sense.' }, careers: { ko: [{ e: '🎨', n: 'AI-휴먼 협업 미디어 아티스트', t: 1, d: 'AI를 붓 삼아 새로운 시각 언어를 창조' }, { e: '📸', n: '실감형 메타버스 디자이너', t: 1, d: '눈부시게 아름다운 가상 세계를 시각화' }, { e: '🎵', n: '사운드스케이프 작곡가', t: 0, d: '공간의 분위기를 소리로 창조하는 감성가' }], en: [{ e: '🎨', n: 'AI-Human Collaborative Media Artist', t: 1, d: 'Creating new visual languages using AI as a brush' }, { e: '📸', n: 'Immersive Metaverse Designer', t: 1, d: 'Visualizing stunningly beautiful virtual worlds' }, { e: '🎵', n: 'Soundscape Composer', t: 0, d: 'Creating space atmospheres through sound' }] }, careerDesc: { ko: '자신의 미적 감수성을 자유롭게 발산할 수 있는 일에서 존재감을 드러내.', ja: '自身の美的感性を自由に発散できる仕事で存在感を表すよ。', en: 'You reveal your presence in work where you can freely express your aesthetic sensibility.' } },
  ESTP: { emoji: '🚀', good: ['ISFJ', 'ISTJ'], care: ['INFJ', 'INTJ'], name: { ko: '사업가형', ja: '起業家型', en: 'Entrepreneur' }, tag: { ko: '순발력과 담대함으로 기회를 낚아채는 행동가', ja: '瞬発力と大胆さでチャンスを掴み取る行動家', en: 'Action-oriented individual who grabs opportunities with wit and boldness' }, figs: { ko: [{ e: '🎤', n: '지드래곤', r: '가수' }, { e: '⚽', n: '음바페', r: '축구 선수' }, { e: '🎮', n: '허준', r: '방송인' }], en: [{ e: '🥊', n: 'Conor McGregor', r: 'Fighter' }, { e: '🎤', n: 'Justin Bieber', r: 'Singer' }, { e: '🎮', n: 'Ninja', r: 'Streamer' }], ja: [{ e: '🏯', n: '真田幸村', r: '戦国武将' }, { e: '📺', n: '中田英寿', r: '元サッカー選手' }, { e: '🎬', n: '窪塚洋介', r: '俳優' }] }, figNote: { ko: '지금 이 순간에 올인하는 에너지로 판을 흔드는 사람들.', ja: '今この瞬間に全力を注ぐエネルギーで局面を動かす人々。', en: 'People who shake the game with energy that goes all-in on the present moment.' }, careers: { ko: [{ e: '💸', n: '미래 자산 트레이더', t: 1, d: '순간적인 변화를 감지해 기회를 낚아채는 타격가' }, { e: '🎤', n: '버추얼 라이브 액션 리더', t: 1, d: '실시간 소통과 에너지로 관중을 압도' }, { e: '🎮', n: 'AGI 게임 스트리머', t: 0, d: '순발력과 엔터테인먼트 감각의 정점' }], en: [{ e: '💸', n: 'Future Asset Trader', t: 1, d: 'Striker grabbing opportunities by sensing instant changes' }, { e: '🎤', n: 'Virtual Live Action Leader', t: 1, d: 'Overwhelming audiences with real-time communication and energy' }, { e: '🎮', n: 'AGI Game Streamer', t: 0, d: 'Peak of wit and entertainment sense' }] }, careerDesc: { ko: '속도감 있는 변화 속에서 직접 부딪치며 성과를 내는 일에 탁월해.', ja: 'スピード感のある変化の中で、直接ぶつかりながら成果を出す仕事に長けているよ。', en: 'Outstanding in work that involves direct confrontation and achieving results amid rapid change.' } },
  ESFP: { emoji: '🎊', good: ['ISFJ', 'ISTJ'], care: ['INTJ', 'INFJ'], name: { ko: '연예인형', ja: 'エンターテイナー型', en: 'Entertainer' }, tag: { ko: '모든 순간을 축제로 만드는 에너지 넘치는 주인공', ja: 'すべての瞬間を祭りにするエネルギー溢れる主人公', en: 'Energetic hero who turns every moment into a festival' }, figs: { ko: [{ e: '🎤', n: '리사', r: '블랙핑크' }, { e: '🎉', n: '제이홉', r: 'BTS' }, { e: '💃', n: '이효리', r: '가수' }], en: [{ e: '🎤', n: 'Cardi B', r: 'Rapper' }, { e: '🎉', n: 'Katy Perry', r: 'Singer' }, { e: '💃', n: 'Shakira', r: 'Singer' }], ja: [{ e: '📺', n: '渡辺直美', r: 'タレント' }, { e: '🎤', n: 'きゃりーぱみゅぱみゅ', r: '歌手' }, { e: '💃', n: 'ローラ', r: 'モデル' }] }, figNote: { ko: '카메라·무대·군중 앞에서 자동으로 ON되는 퍼포머들.', ja: 'カメラ・舞台・群衆の前で自動的にONになるパフォーマーたち。', en: 'Performers who automatically turn "ON" in front of cameras, stages, and crowds.' }, careers: { ko: [{ e: '🎤', n: '글로벌 AI 퍼포먼스 스타', t: 1, d: 'AI와 융합된 화려한 무대로 전 세계를 사로잡는 주인공' }, { e: '📱', n: '몰입형 숏폼 콘텐츠 디렉터', t: 1, d: '보는 순간 빠져들게 만드는 매력의 창조자' }, { e: '💃', n: '버추얼 댄스 아카데미 리더', t: 0, d: '춤과 몸짓으로 긍정적인 에너지를 전파' }], en: [{ e: '🎤', n: 'Global AI Performance Star', t: 1, d: 'Hero captivating the world with spectacular stages fused with AI' }, { e: '📱', n: 'Immersive Short-form Content Director', t: 1, d: 'Creator of charm that draws you in instantly' }, { e: '💃', n: 'Virtual Dance Academy Leader', t: 0, d: 'Spreading positive energy through dance and gesture' }] }, careerDesc: { ko: '사람들의 시선 중심에서 에너지를 폭발시킬 수 있는 환경이 너의 무대야.', ja: '人々の視線の中心でエネルギーを爆発させられる環境が君の舞台だよ。', en: 'An environment where you can explode your energy at the center of attention is your stage.' } }
};

export const DIST = { INFP: 8.3, ENFP: 7.6, INFJ: 5.1, ENFJ: 4.2, INTJ: 3.8, ENTJ: 4.1, INTP: 6.4, ENTP: 5.3, ISFJ: 11.2, ESFJ: 9.3, ISTJ: 10.2, ESTJ: 7.1, ISFP: 7.5, ESFP: 6.1, ISTP: 6.7, ESTP: 5.7 };
export const DIST_ORDER = ['INTJ', 'INTP', 'ENTJ', 'ENTP', 'INFJ', 'INFP', 'ENFJ', 'ENFP', 'ISTJ', 'ISFJ', 'ESTJ', 'ESFJ', 'ISTP', 'ISFP', 'ESTP', 'ESFP'];
export const ELEM_ICON = { '木': '🌿', '火': '🔥', '土': '🌍', '金': '⚡', '水': '💧' };
export const ELEM_COLOR = { '木': '#5DBB63', '火': '#E05050', '土': '#C98A30', '金': '#7AAFD4', '水': '#4090D4' };

export const STEM_STR_I18N = {
  ko: {
    0: [{ icon: '🌲', title: '강한 추진력', desc: '한번 목표를 정하면 끝까지 밀고 나가는 힘이 있어. 그 뚝심이 가장 큰 무기야.' }, { icon: '👑', title: '리더십', desc: '자연스럽게 앞에 서는 카리스마. 방향을 정하고 이끄는 것이 잘 맞아.' }, { icon: '💡', title: '독창적 발상', desc: '남들이 생각 못한 방식으로 문제를 풀어. 틀에 갇히지 않는 자유로운 시각.' }],
    1: [{ icon: '🌿', title: '유연한 적응력', desc: '어떤 상황에서도 부드럽게 적응하는 힘. 변화가 두렵지 않아.' }, { icon: '💚', title: '섬세한 공감', desc: '상대방의 마음을 잘 읽어. 그 감수성이 관계를 풍부하게 만들어.' }, { icon: '🎨', title: '창의적 감각', desc: '아름다운 것을 만들고 표현하는 재능. 예술적 감각이 남달라.' }],
    2: [{ icon: '☀️', title: '강한 에너지', desc: '어디서든 존재감이 있어. 열정과 밝은 에너지로 주변을 환하게.' }, { icon: '🔥', title: '뜨거운 추진력', desc: '일단 시작하면 끝까지 달리는 불같은 열정.' }, { icon: '🤝', title: '사람을 끄는 힘', desc: '자연스러운 따뜻함으로 사람들이 주변에 모여들어.' }],
    3: [{ icon: '🕯️', title: '깊은 통찰', desc: '표면 아래를 꿰뚫는 예리한 직관. 남들이 보지 못하는 것을 먼저 느껴.' }, { icon: '🎭', title: '감성 표현', desc: '풍부한 내면을 섬세하게 표현해. 사람 마음을 움직이는 힘.' }, { icon: '✨', title: '예술적 감성', desc: '아름다움과 의미에 민감해. 평범한 것에서 특별함을 발견해.' }],
    4: [{ icon: '🏔️', title: '믿음직한 안정감', desc: '어떤 상황에서도 흔들리지 않는 든든함. 사람들이 믿고 의지해.' }, { icon: '📋', title: '체계적 실행', desc: '계획을 세우고 꼼꼼하게 실행하는 능력이 탁월해.' }, { icon: '🛡️', title: '강한 책임감', desc: '맡은 일은 끝까지 해내는 강한 책임감.' }],
    5: [{ icon: '🌱', title: '따뜻한 배려', desc: '주변 사람을 세심하게 챙기는 따뜻함. 관계를 깊게 만드는 힘.' }, { icon: '🤲', title: '넉넉한 수용력', desc: '다양한 사람과 상황을 넉넉하게 받아들이는 포용력.' }, { icon: '🌸', title: '섬세한 관찰', desc: '작은 것도 놓치지 않는 세심한 눈.' }],
    6: [{ icon: '⚔️', title: '결단력', desc: '필요한 순간에 망설임 없이 결정하는 힘. 그 명확함이 신뢰를 만들어.' }, { icon: '🎯', title: '목표 집중력', desc: '목표를 향해 흔들리지 않고 집중하는 힘이 강해.' }, { icon: '💎', title: '높은 기준', desc: '높은 기준을 유지하는 완벽주의. 탁월한 결과를 만들어.' }],
    7: [{ icon: '💫', title: '완벽한 심미안', desc: '아름다움을 만들고 알아보는 섬세한 감각. 디테일에서 진가가 드러나.' }, { icon: '🔍', title: '정밀한 분석', desc: '세밀하게 분석하고 완성도를 높이는 능력.' }, { icon: '🌙', title: '깊은 내면', desc: '풍부한 내면과 독자적인 관점.' }],
    8: [{ icon: '🌊', title: '넓은 시야', desc: '큰 그림을 보는 안목. 멀리 내다보는 통찰력이 강점.' }, { icon: '💡', title: '창의적 발상', desc: '남들이 생각 못한 아이디어를 내는 창의성.' }, { icon: '🚀', title: '자유로운 도전', desc: '새로운 것에 두려움 없이 뛰어드는 용기.' }],
    9: [{ icon: '💧', title: '깊은 감성', desc: '내면이 풍부하고 감수성이 높아. 특별한 통찰을 만들어.' }, { icon: '🔮', title: '예리한 직관', desc: '보이지 않는 것을 느끼는 강한 직관.' }, { icon: '🌌', title: '자유로운 상상', desc: '무한한 상상력으로 새로운 세계를 그려내.' }]
  },
  ja: {
    0: [{ icon: '🌲', title: '強い推進力', desc: '一度目標を定めると最後までやり遂げる力があります。その粘り強さが最大の武器です。' }, { icon: '👑', title: 'リーダーシップ', desc: '自然と人の前に立つカリスマ。方向を定め、導くことが得意です。' }, { icon: '💡', title: '独創的な発想', desc: '他人が思いつかない方法で問題を解決します。枠にとらわれない自由な視点。' }],
    1: [{ icon: '🌿', title: '柔軟な適応力', desc: 'どんな状況でもしなやかに適応する力。変化を恐れません。' }, { icon: '💚', title: '繊細な共感', desc: '相手の心をよく読み取ります。その感受性が関係を豊かにします。' }, { icon: '🎨', title: '創造的な感覚', desc: '美しいものを作り表現する才能。芸術的なセンスが抜群です。' }],
    2: [{ icon: '☀️', title: '強いエネルギー', desc: 'どこにいても存在感があります。情熱と明るいエネルギーで周囲を照らします。' }, { icon: '🔥', title: '熱い推進力', desc: '一度始めると最後まで走り抜ける、炎のような情熱。' }, { icon: '🤝', title: '人を惹きつける力', desc: '自然な温かさで、人々が周囲に集まってきます。' }],
    3: [{ icon: '🕯️', title: '深い洞察', desc: '表面下を見抜く鋭い直感。他人が気づかないことを先に感じ取ります。' }, { icon: '🎭', title: '感性の表現', desc: '豊かな内面を繊細に表現します。人の心を動かす力。' }, { icon: '✨', title: '芸術的感性', desc: '美しさと意味に敏感です。平凡なものから特別さを発見します。' }],
    4: [{ icon: '🏔️', title: '頼もしい安定感', desc: 'どんな状況でも揺るがない安心感。人々から信頼され、頼りにされます。' }, { icon: '📋', title: '体系的な実行', desc: '計画を立て、きっちりと実行する能力に長けています。' }, { icon: '🛡️', title: '強い責任感', desc: '引き受けた仕事は最後までやり遂げる強い責任感。' }],
    5: [{ icon: '🌱', title: '温かい配慮', desc: '周囲の人を細やかに気遣う温かさ。関係を深める力。' }, { icon: '🤲', title: '寛容な受容力', desc: '多様な人々や状況を寛大に受け入れる包容力。' }, { icon: '🌸', title: '繊細な観察', desc: '些細なことも見逃さない、細やかな目。' }],
    6: [{ icon: '⚔️', title: '決단力', desc: '必要な瞬間に迷いなく決断する力。その明確さが信頼を生みます。' }, { icon: '🎯', title: '目標集中力', desc: '目標に向かって揺るがずに集中する力が強いです。' }, { icon: '💎', title: '高い基準', desc: '高い基準を維持する完璧主義。卓越した結果を生み出します。' }],
    7: [{ icon: '💫', title: '完璧な審美眼', desc: '美しさを作り、見極める繊細な感覚。ディテールで真価を発揮します。' }, { icon: '🔍', title: '精密な分析', desc: '細部まで分析し、完成度を高める能力。' }, { icon: '🌙', title: '深い内面', desc: '豊かな内面と独自の視点。' }],
    8: [{ icon: '🌊', title: '広い視野', desc: '大局を見る目。遠くを見通す洞察力が強みです。' }, { icon: '💡', title: '独創的な発想', desc: '他人が思いつかないアイデアを出す創造性。' }, { icon: '🚀', title: '自由な挑戦', desc: '新しいことに恐れず飛び込む勇気。' }],
    9: [{ icon: '💧', title: '深い感性', desc: '内面が豊かで感受性が高いです。特別な洞察を生み出します。' }, { icon: '🔮', title: '鋭い直感', desc: '見えないものを感じる強い直感。' }, { icon: '🌌', title: '自由な想像', desc: '無限の想像力で新しい世界を描き出します。' }]
  },
  en: {
    0: [{ icon: '🌲', title: 'Strong Drive', desc: 'Power to push to the end once a goal is set. Persistence is your weapon.' }, { icon: '👑', title: 'Leadership', desc: 'Natural charisma. Fits well with setting direction and leading.' }, { icon: '💡', title: 'Original Thinking', desc: 'Solving problems in ways others haven\'t thought of. Free perspective.' }],
    1: [{ icon: '🌿', title: 'Flexible Adaptability', desc: 'Power to adapt smoothly to any situation. Not afraid of change.' }, { icon: '💚', title: 'Delicate Empathy', desc: 'Good at reading others\' minds. Sensitivity enriches relationships.' }, { icon: '🎨', title: 'Creative Sense', desc: 'Talent for creating and expressing beauty. Extraordinary artistic sense.' }],
    2: [{ icon: '☀️', title: 'Strong Energy', desc: 'Presence everywhere. Brightens surroundings with passion and energy.' }, { icon: '🔥', title: 'Fiery Momentum', desc: 'Blazing passion that runs to the end once started.' }, { icon: '🤝', title: 'People Magnet', desc: 'People gather around due to your natural warmth.' }],
    3: [{ icon: '🕯️', title: 'Deep Insight', desc: 'Sharp intuition piercing below the surface. Sensing things early.' }, { icon: '🎭', title: 'Emotional Expression', desc: 'Delicately expressing a rich inner world. Power to move hearts.' }, { icon: '✨', title: 'Artistic Sensibility', desc: 'Sensitive to beauty and meaning. Finding special in the ordinary.' }],
    4: [{ icon: '🏔️', title: 'Reliable Stability', desc: 'Reliability that doesn\'t waver. People trust and rely on you.' }, { icon: '📋', title: 'Systematic Execution', desc: 'Excellent at planning and meticulous execution.' }, { icon: '🛡️', title: 'Strong Responsibility', desc: 'Strong sense of responsibility to complete assigned tasks.' }],
    5: [{ icon: '🌱', title: 'Warm Consideration', desc: 'Caring for people meticulously. Power to deepen relationships.' }, { icon: '🤲', title: 'Generous Acceptance', desc: 'Broad-mindedness to accept various people and situations.' }, { icon: '🌸', title: 'Delicate Observation', desc: 'Attentive eye that doesn miss small details.' }],
    6: [{ icon: '⚔️', title: 'Decisiveness', desc: 'Deciding without hesitation when needed. Clarity builds trust.' }, { icon: '🎯', title: 'Goal Focus', desc: 'Strong power to focus on goals without wavering.' }, { icon: '💎', title: 'High Standards', desc: 'Perfectionism maintaining high standards. Creating outstanding results.' }],
    7: [{ icon: '💫', title: 'Perfect Aesthetic Eye', desc: 'Delicate sense for creating and recognizing beauty. True value shows in details.' }, { icon: '🔍', title: 'Precise Analysis', desc: 'Ability to analyze minutely and increase perfection.' }, { icon: '🌙', title: 'Deep Inner Self', desc: 'Rich inner world and unique perspective.' }],
    8: [{ icon: '🌊', title: 'Wide Vision', desc: 'Eye for the big picture. Insight to look far ahead is your strength.' }, { icon: '💡', title: 'Creative Thinking', desc: 'Creativity to come up with ideas others haven\'t thought of.' }, { icon: '🚀', title: 'Free Challenge', desc: 'Courage to dive into new things without fear.' }],
    9: [{ icon: '💧', title: 'Deep Emotion', desc: 'Rich inner world and high sensitivity. Creating special insights.' }, { icon: '🔮', title: 'Sharp Intuition', desc: 'Strong intuition to sense the invisible.' }, { icon: '🌌', title: 'Free Imagination', desc: 'Painting a new world with infinite imagination.' }]
  }
};

export const ELEM_PAL = {
  '木': { bg: ['#0D2B1A', '#1B5E35', '#2E8B57'], accent: '#5DBB8A', text: '#C8F0D8', dots: ['#2E8B57', '#5DBB8A', '#A8D8B8'] },
  '火': { bg: ['#2B0A0A', '#7B1515', '#C0392B'], accent: '#FF6B6B', text: '#FFE0D8', dots: ['#C0392B', '#FF6B6B', '#FFB3A0'] },
  '土': { bg: ['#2B1800', '#7A4000', '#C07820'], accent: '#F4C05A', text: '#FFF3CD', dots: ['#C07820', '#F4C05A', '#FFE08A'] },
  '金': { bg: ['#0C1520', '#1E2E44', '#344E6E'], accent: '#A8C4DC', text: '#E8F2FA', dots: ['#4A6A8A', '#8AAAC8', '#C0D8EC'] },
  '水': { bg: ['#020E28', '#0A2755', '#0D47A1'], accent: '#42A5F5', text: '#BBDEFB', dots: ['#0D47A1', '#1976D2', '#64B5F6'] },
};

export const CARD_TITLES = {
  '木': ['THE FOREST SOUL', 'THE GREEN DREAM', 'THE WILD SPIRIT', 'THE LEAF HEART'],
  '火': ['THE SUMMER FLAME', 'THE BLAZING STAR', 'THE BRIGHT FORCE', 'THE FIRE DREAM'],
  '土': ['THE GOLDEN OASIS', 'THE EARTH KEEPER', 'THE WARM GROUND', 'THE QUIET PEAK'],
  '金': ['THE CRYSTAL MIND', 'THE SILVER SOUL', 'THE SHARP LIGHT', 'THE CLEAR SKY'],
  '水': ['THE DEEP CURRENT', 'THE MOON TIDE', 'THE OCEAN HEART', 'THE WINTER FLOW'],
};

export const MBTI16 = ['INTJ', 'INTP', 'ENTJ', 'ENTP', 'INFJ', 'INFP', 'ENFJ', 'ENFP', 'ISTJ', 'ISFJ', 'ESTJ', 'ESFJ', 'ISTP', 'ISFP', 'ESTP', 'ESFP'];
export const ELEM_CHR = { '木': '🌿', '火': '🔥', '土': '🌏', '金': '✨', '水': '💧' };

export function updateLang(val) { LANG = val; }
export let curBirth = '';
export function updateCurBirth(val) { curBirth = val; }
export let curGender = '';
export function updateCurGender(val) { curGender = val; }
export let curQ = {};
export function updateCurQ(val) { curQ = val; }
export let GEMINI_KEY = '';
export function updateGeminiKey(val) { GEMINI_KEY = val; }
export let curElements = { '木': 0, '火': 0, '土': 0, '金': 0, '水': 0 };
export function updateCurElements(val) { curElements = val; }
export let curMType = '';
export function updateCurMType(val) { curMType = val; }
export let curCharLine = '';
export function updateCurCharLine(val) { curCharLine = val; }
