// tarotMeanings.js - 塔羅牌意義數據庫
const tarotMeanings = {
    // 大阿爾卡納牌 (Major Arcana)
    "愚者 (The Fool)": {
        upright: "新的開始、冒險、純真、自發性、自由",
        reversed: "魯莽、冒險、不負責任、不考慮後果"
    },
    "魔術師 (The Magician)": {
        upright: "創造力、技能、力量、行動、專注",
        reversed: "操縱、欺騙、失去專注、未發揮潛力"
    },
    "女祭司 (The High Priestess)": {
        upright: "直覺、潛意識、神秘、內在聲音、智慧",
        reversed: "隱藏的議程、未被聽到的直覺、秘密、未顯現的才能"
    },
    "皇后 (The Empress)": {
        upright: "豐饒、母性、創造、自然、滋養",
        reversed: "依賴、過度保護、創造力阻滯、缺乏成長"
    },
    "皇帝 (The Emperor)": {
        upright: "權威、結構、控制、父親形象、穩定",
        reversed: "控制慾過強、嚴酷、不靈活、過度支配"
    },
    "教皇 (The Hierophant)": {
        upright: "精神指導、傳統、遵循社會規範、宗教",
        reversed: "反叛、非傳統、不合常規、個人信仰系統"
    },
    "戀人 (The Lovers)": {
        upright: "愛、和諧、關係、價值觀調整、選擇",
        reversed: "失衡、誤導、價值觀不匹配、不和諧"
    },
    "戰車 (The Chariot)": {
        upright: "控制、意志力、勝利、果斷、自信",
        reversed: "缺乏控制和方向、侵略、多重方向"
    },
    "力量 (Strength)": {
        upright: "勇氣、說服力、影響、耐心、內在力量",
        reversed: "自我懷疑、弱點、缺乏自信、原始慾望"
    },
    "隱者 (The Hermit)": {
        upright: "反省、獨處、內在尋求、靈性探索、智慧",
        reversed: "孤獨、隔離、排斥、退縮、拒絕幫助"
    },
    "命運之輪 (Wheel of Fortune)": {
        upright: "好運、命運、轉折點、機會、變化",
        reversed: "惡運、外部阻力、失控、延誤、混亂"
    },
    "正義 (Justice)": {
        upright: "公正、真相、法律、因果、平衡",
        reversed: "不公正、不誠實、不負責任、不平衡"
    },
    "吊人 (The Hanged Man)": {
        upright: "犧牲、等待、放棄、新視角、放下",
        reversed: "停滯、拖延、抵抗、不必要的犧牲"
    },
    "死神 (Death)": {
        upright: "結束、改變、轉變、過渡、放下",
        reversed: "抗拒變化、無法前進、延遲的結束、恐懼變化"
    },
    "節制 (Temperance)": {
        upright: "平衡、適度、耐心、目的、和諧",
        reversed: "失衡、過度、失調、急躁、缺乏長遠眼光"
    },
    "惡魔 (The Devil)": {
        upright: "束縛、物質主義、誘惑、執著、性能量",
        reversed: "脫離束縛、獨立、擺脫依賴、重獲力量"
    },
    "高塔 (The Tower)": {
        upright: "突然改變、混亂、啟示、覺醒、真相",
        reversed: "避免災難、延遲改變、恐懼破壞"
    },
    "星星 (The Star)": {
        upright: "希望、信心、啟發、平靜、寧靜",
        reversed: "絕望、失去信心、沉悶、沮喪、冷漠"
    },
    "月亮 (The Moon)": {
        upright: "錯覺、夢境、潛意識、恐懼、直覺",
        reversed: "混亂減輕、恐懼減少、誤解、情緒解放"
    },
    "太陽 (The Sun)": {
        upright: "快樂、活力、樂觀、成功、真相",
        reversed: "低自信、不成功、低落情緒、挫折感"
    },
    "審判 (Judgement)": {
        upright: "反思、重生、內在喚醒、解放、絕對決定",
        reversed: "自我懷疑、未能總結教訓、恐懼改變"
    },
    "世界 (The World)": {
        upright: "完成、成就、旅行、和諧、圓滿",
        reversed: "未完成、匆忙、短視、無法結束"
    },
    
    // 小阿爾卡納牌 (Minor Arcana)
    // 聖杯牌 (Cups)
    "聖杯一 (Ace of Cups)": {
        upright: "愛的開始、直覺、情感上的滿足、創造力",
        reversed: "愛的缺失、情感倒空、創意受阻、感性受阻"
    },
    "聖杯二 (Two of Cups)": {
        upright: "結合、關係、愛情、合作、吸引力",
        reversed: "失衡關係、分離、碎裂的關係、張力"
    },
    "聖杯三 (Three of Cups)": {
        upright: "慶祝、友誼、社交生活、社區、合作",
        reversed: "過度縱慾、小集團排外、逃避性行為"
    },
    "聖杯四 (Four of Cups)": {
        upright: "沉思、評估、不滿、冥想、麻木",
        reversed: "新的希望、覺醒、四處探索、新機會"
    },
    "聖杯五 (Five of Cups)": {
        upright: "失落、遺憾、悲傷、憂慮、悔恨",
        reversed: "接受失去、向前邁進、尋找解決方案"
    },
    "聖杯六 (Six of Cups)": {
        upright: "懷舊、童年、天真、記憶、純真",
        reversed: "活在過去、無憂、幼稚、失去天真"
    },
    "聖杯七 (Seven of Cups)": {
        upright: "選擇、做夢、錯覺、幻想、誘惑",
        reversed: "意誌力、清晰、明確方向、克服誘惑"
    },
    "聖杯八 (Eight of Cups)": {
        upright: "放棄、向前走、尋求意義、離開",
        reversed: "害怕改變、恐懼未知、逃避責任"
    },
    "聖杯九 (Nine of Cups)": {
        upright: "滿足、願望實現、情感穩定、欣賞",
        reversed: "自滿、膚淺的滿足、物質主義、空虛"
    },
    "聖杯十 (Ten of Cups)": {
        upright: "家庭和諧、穩定關係、價值觀一致、和平",
        reversed: "不和諧、不健康的關係、失衡家庭"
    },
    "聖杯侍者 (Page of Cups)": {
        upright: "好奇心、新想法、夢幻、學習",
        reversed: "情感沉重、情緒不穩、壞消息、不成熟"
    },
    "聖杯騎士 (Knight of Cups)": {
        upright: "浪漫、魅力、想像力、信息提供者",
        reversed: "失望、不可靠、冷漠、情感操縱"
    },
    "聖杯皇后 (Queen of Cups)": {
        upright: "同情心、冷靜、深度、情感安全、療癒",
        reversed: "依賴、操縱、情緒化、不安全感"
    },
    "聖杯國王 (King of Cups)": {
        upright: "情感控制、平衡、冷靜、支持、同理心",
        reversed: "情緒不穩、冷漠、操縱、情緒波動"
    },
    
    // 寶劍牌 (Swords)
    "寶劍一 (Ace of Swords)": {
        upright: "清晰、真相揭示、新思想、突破、智力",
        reversed: "混亂思維、真理扭曲、殘酷言語"
    },
    "寶劍二 (Two of Swords)": {
        upright: "困難抉擇、平衡、猶豫、停滯、拒絕看",
        reversed: "混亂減輕、新選擇、走出僵局"
    },
    "寶劍三 (Three of Swords)": {
        upright: "心痛、悲傷、心碎、失望、創傷",
        reversed: "恢復、寬恕、放下、復原"
    },
    "寶劍四 (Four of Swords)": {
        upright: "休息、回顧、冥想、恢復、平靜",
        reversed: "重返生活、恢復活力、行動恢復"
    },
    "寶劍五 (Five of Swords)": {
        upright: "衝突、失敗、挫折、競爭、不誠實",
        reversed: "和解、放下、和平追求"
    },
    "寶劍六 (Six of Swords)": {
        upright: "過渡、變化、離開困境、逐漸癒合",
        reversed: "卡在過去、障礙、困難、延遲"
    },
    "寶劍七 (Seven of Swords)": {
        upright: "欺騙、逃避、詭計、策略、奸詐",
        reversed: "坦白、真相、承認、釋放"
    },
    "寶劍八 (Eight of Swords)": {
        upright: "限制、束縛、困境、受害者心態",
        reversed: "自由、自我釋放、新視角、勇氣"
    },
    "寶劍九 (Nine of Swords)": {
        upright: "焦慮、恐懼、噩夢、擔憂、負擔",
        reversed: "希望、重獲信心、釋放恐懼"
    },
    "寶劍十 (Ten of Swords)": {
        upright: "失敗、結束、痛苦、背叛、絕望",
        reversed: "恢復、轉機、緩慢改善、希望"
    },
    "寶劍侍者 (Page of Swords)": {
        upright: "好奇心、敏銳、警覺、熱情、探索",
        reversed: "分心、謊言、八卦、謠言、延遲"
    },
    "寶劍騎士 (Knight of Swords)": {
        upright: "雄心、行動、決心、勇敢、直接",
        reversed: "魯莽、衝動、好鬥、激進、不負責任"
    },
    "寶劍皇后 (Queen of Swords)": {
        upright: "獨立、直接、聰明、準確、清晰",
        reversed: "冷漠、苦澀、殘忍、自私"
    },
    "寶劍國王 (King of Swords)": {
        upright: "清晰思維、智力權威、真相、理性領導",
        reversed: "冷酷、殘忍、濫用權力、操控"
    },
    
    // 錢幣牌 (Pentacles)
    "錢幣一 (Ace of Pentacles)": {
        upright: "新財富、機會、繁榮、豐富、安全",
        reversed: "錯失機會、物質困難、貪婪"
    },
    "錢幣二 (Two of Pentacles)": {
        upright: "平衡、優先次序、適應性、時間管理",
        reversed: "失衡、過度消耗、無組織、不穩定"
    },
    "錢幣三 (Three of Pentacles)": {
        upright: "協作、技能發展、卓越、團隊合作",
        reversed: "平庸、工作質量低、缺乏團隊合作"
    },
    "錢幣四 (Four of Pentacles)": {
        upright: "保守、安全、蓄積、保護、掌控",
        reversed: "貪婪、物質主義、吝嗇、自私"
    },
    "錢幣五 (Five of Pentacles)": {
        upright: "貧困、困難、孤獨、擔憂、健康問題",
        reversed: "復甦、靈性富足、新資源、尋求幫助"
    },
    "錢幣六 (Six of Pentacles)": {
        upright: "慈善、慷慨、分享、贈予、接收",
        reversed: "自私、債務、不平等、給予目的不純"
    },
    "錢幣七 (Seven of Pentacles)": {
        upright: "耐心、等待回報、評估進度、投資",
        reversed: "缺乏長期規劃、漏財、不耐煩"
    },
    "錢幣八 (Eight of Pentacles)": {
        upright: "學徒期、努力工作、專注、技能提升",
        reversed: "缺乏努力、低品質、沒有雄心"
    },
    "錢幣九 (Nine of Pentacles)": {
        upright: "豪華、獨立、自給自足、財務安全",
        reversed: "物質損失、過度依賴、虛榮"
    },
    "錢幣十 (Ten of Pentacles)": {
        upright: "家庭財富、遺產、穩定、永久成功",
        reversed: "家庭紛爭、失去繼承、破產"
    },
    "錢幣侍者 (Page of Pentacles)": {
        upright: "學習、好學、勤奮、新計劃、熱情",
        reversed: "缺乏思考力、懶惰、不切實際"
    },
    "錢幣騎士 (Knight of Pentacles)": {
        upright: "勤奮、責任感、可靠、耐心、保守",
        reversed: "停滯、懶惰、無聊、固執、拖延"
    },
    "錢幣皇后 (Queen of Pentacles)": {
        upright: "實用、家庭關懷、財務獨立、豐盛",
        reversed: "過於依賴、自私、嫉妒、不安全"
    },
    "錢幣國王 (King of Pentacles)": {
        upright: "富裕、領導力、安全、實際、可靠",
        reversed: "物質主義、頑固、貪婪、過度控制"
    },
    
    // 權杖牌 (Wands)
    "權杖一 (Ace of Wands)": {
        upright: "創造力開始、靈感、源動力、新機會",
        reversed: "創造力受阻、拖延、激情減退"
    },
    "權杖二 (Two of Wands)": {
        upright: "未來計劃、決定、探索、進步、冒險",
        reversed: "恐懼變化、害怕未知、計劃失敗"
    },
    "權杖三 (Three of Wands)": {
        upright: "擴展、遠見、遠方的成功、準備、遠景",
        reversed: "延誤、失去耐心、3人關係問題"
    },
    "權杖四 (Four of Wands)": {
        upright: "慶祝、和諧、婚姻、家庭、團結",
        reversed: "不和諧、過渡、不穩定的基礎"
    },
    "權杖五 (Five of Wands)": {
        upright: "競爭、衝突、分歧、張力、辯論",
        reversed: "避免衝突、團結合作、和諧"
    },
    "權杖六 (Six of Wands)": {
        upright: "勝利、認可、驕傲、信心、成就",
        reversed: "自我懷疑、不安全、自豪感降低"
    },
    "權杖七 (Seven of Wands)": {
        upright: "挑戰、捍衛、堅持、勇氣、決心",
        reversed: "讓步、逃避、壓力過大、優柔寡斷"
    },
    "權杖八 (Eight of Wands)": {
        upright: "快速行動、進展、高效、訊息",
        reversed: "延遲、挫折、降低焦慮、等待"
    },
    "權杖九 (Nine of Wands)": {
        upright: "堅韌、毅力、勇氣、堅守陣地",
        reversed: "疲憊、放棄、無能為力、倦怠"
    },
    "權杖十 (Ten of Wands)": {
        upright: "負擔、責任、壓力、成就感",
        reversed: "壓力釋放、委派、放下負擔"
    },
    "權杖侍者 (Page of Wands)": {
        upright: "探索、激情、探索精神、發現",
        reversed: "非目的性活動、缺乏方向、拖延"
    },
    "權杖騎士 (Knight of Wands)": {
        upright: "能量、激情、行動、冒險、衝動",
        reversed: "延遲、挫折、脾氣暴躁、無方向"
    },
    "權杖皇后 (Queen of Wands)": {
        upright: "自信、決斷、社交、充滿熱情、溫暖",
        reversed: "苛求、嫉妒、不安全、控制慾強"
    },
    "權杖國王 (King of Wands)": {
        upright: "大膽領導、遠見、誠實、靈感",
        reversed: "專制、好鬥、不耐煩、魯莽"
    }
};

// 導出數據，使其可以在其他文件中使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = tarotMeanings;
}