window.onload = function () {
    if (localStorage.getItem("hozon1")) {
        const jsonData = localStorage.getItem("hozon1") //ローカルストレージに保存されたkey = memo のデータを取得【jsonでさっき保存したやつ】
        const data1 = JSON.parse(jsonData) //そのデータをjs形式に再度変換
        //console.log(data) jsデータに戻っている
        const jsonData2 = localStorage.getItem("hozon2") //ローカルストレージに保存されたkey = memo のデータを取得【jsonでさっき保存したやつ】
        const data2 = JSON.parse(jsonData2)
        const jsonData3 = localStorage.getItem("hozon3") //ローカルストレージに保存されたkey = memo のデータを取得【jsonでさっき保存したやつ】
        const data3 = JSON.parse(jsonData3)
        const jsonData4 = localStorage.getItem("hozon4") //ローカルストレージに保存されたkey = memo のデータを取得【jsonでさっき保存したやつ】
        const data4 = JSON.parse(jsonData4)
        document.getElementById("seikaisuu").innerText = data1.total_seikai;
        total_seikai = data1.total_seikai

        document.getElementById("seikailog").innerHTML = data2.seikailog;
        // seikai_r = total_seikai / data3.totalcount * 100 + "%"

        document.getElementById("seikailog").innerHTML = data4.cyousen;
        cyousen = data4.cyousen
        totalcount = data3.totalcount
        seikai_r = Math.floor(total_seikai / totalcount * 100) + "%"
        document.getElementById("002").innerHTML = seikai_r;
        console.log(data3.totalcount)
        log = data2.seikailog
        array.push(log);
        log = array
        document.getElementById("seikailog").innerHTML = log

 


        // console.log(data1.total_seikai)
        // console.log(total_seikai)

    } else {
        total_seikai = 0;
        totalcount = 0;
    }
}

//問題と解答
qa = new Array();

qa[0] = ["abstract", "抽象的な", "具体的な", "根本的な", 1];
qa[1] = ["accept", "拒否する", "提出する", "受け入れる", 3];
qa[2] = ["access", "対応する", "提出する", "利用する", 3];
qa[3] = ["activate", "有効にする、アクティブにする", "追加する", "操作する", 1];
qa[4] = ["activity", "言論", "有効", "活動", 3];
qa[5] = ["add", "追加する", "除外する", "重ねる", 1];
qa[6] = ["adjust", "調整する", "利用する", "拒否する", 1];
qa[7] = ["administrator", "有権者", "責任者", "管理者", 3];
qa[8] = ["aggregate", "該当する", "集約する", "割り当てる", 2];
qa[9] = ["agree", "同意する", "集約する", "可能にする", 1];
qa[10] = ["alias", "代替", "管理", "別名", 3];
qa[11] = ["allocation", "許諾", "明らかにする", "割り当て", 3];
qa[12] = ["allow", "拒否する", "追加する", "許可する", 3];
qa[13] = ["alternative", "代替の", "無名の", "匿名の", 1];
qa[14] = ["annotation", "理解", "引数", "注釈", 3];
qa[15] = ["anonymous", "無名の", "脅威の", "有効の", 1];
qa[16] = ["append", "追加する", "削除する", "関連する", 1];
qa[17] = ["applicable", "添付された", "起動できる", "適用可能な", 3];
qa[18] = ["apply", "適用する", "供給する", "自動化する", 1];
qa[19] = ["area", "領域", "配列", "認証", 1];
qa[20] = ["argument", "関数", "変数", "引数", 3];
qa[21] = ["array", "配列", "属性", "作成", 1];
qa[22] = ["assert", "取り込む", "確認する", "表明する", 3];
qa[23] = ["assign", "無視する", "自動化する", "代入する", 3];
qa[24] = ["assignment", "無視", "自動化", "割り当て", 3];
qa[25] = ["associate", "認証する", "保護する", "関連づける", 3];
qa[26] = ["attach", "回避する", "接続する", "示す", 2];
qa[27] = ["attribute", "属性", "認証", "利用", 1];
qa[28] = ["authentication", "認証", "保護", "自動", 1];
qa[29] = ["author", "利用者", "作成者", "保護者", 2];
qa[30] = ["automatic", "手動の", "自動の", "空白の", 2];
qa[31] = ["availability", "分離性", "機能性", "可用性", 3];
qa[32] = ["available", "利用可能な", "回避可能な", "分岐可能な", 1];
qa[33] = ["avoid", "中断する", "参照する", "回避する", 3];
qa[34] = ["below", "上記に", "先に", "下記に", 3];
qa[35] = ["binary", "十進法の", "五進法の", "二進法の", 3];
qa[36] = ["blank", "ブールの", "経験の", "空白の", 3];
qa[37] = ["body", "本体", "頭", "足", 1];
qa[38] = ["boot", "落とす", "上げる", "起動する", 3];
qa[39] = ["brace", "波かっこ", "角かっこ", "丸かっこ", 1];
qa[40] = ["bracket", "波かっこ", "丸かっこ", "角かっこ", 3];
qa[41] = ["branch", "統合", "参照", "分岐", 3];
qa[42] = ["break", "中断する", "計算する", "呼び出す", 1];
qa[43] = ["browse", "構築する", "計算する", "閲覧する", 3];
qa[44] = ["build", "壊す", "構築する", "機能する", 2];
qa[45] = ["bump", "バージョンを下げる", "バージョンを維持する", "バージョンを上げる", 3];
qa[46] = ["calculate", "入力する", "呼び出す", "計算する", 3];
qa[47] = ["capability", "制御", "選択", "機能", 3];
qa[48] = ["capacity", "容量", "制御", "選択", 1];
qa[49] = ["capture", "変更する", "取り込む", "選択する", 2];
qa[50] = ["caret", "カーソル", "スペース", "現在の", 1];
qa[51] = ["certificate", "文字", "証明書", "整理", 2];
qa[52] = ["change", "変更する", "確認する", "選択する", 1];
qa[53] = ["character", "文字", "数字", "コード", 1];
qa[54] = ["choice", "文字", "選択", "比較", 2];
qa[55] = ["clarify", "明確にする", "正解する", "完了する", 1];
qa[56] = ["cleanup", "複製", "非表示", "整理", 3];
qa[57] = ["clone", "複製する", "統合する", "確定する", 1];
qa[58] = ["collapse", "確認する", "非表示にする", "比較する", 2];
qa[59] = ["column", "列", "行", "単位", 1];
qa[60] = ["commit", "確認する", "計算する", "確定する", 3];
qa[61] = ["compare", "比較する", "計算する", "確定する", 1];
qa[62] = ["compatibility", "視認性", "互換性", "機能性", 2];
qa[63] = ["complete", "保管する", "圧縮する", "完了する", 3];
qa[64] = ["completion", "完了", "部品", "圧縮", 1];
qa[65] = ["component", "条件", "構成", "部品", 3];
qa[66] = ["compress", "計算する", "競合する", "圧縮する", 3];
qa[67] = ["compute", "圧縮する", "競合する", "計算する", 3];
qa[68] = ["condition", "構成", "条件", "設定", 2];
qa[69] = ["conditional", "確認する", "条件つきの", "確定する", 2];
qa[70] = ["configuration", "接続", "構成", "制約", 2];
qa[71] = ["configure", "圧縮する", "設定する", "競合する", 2];
qa[72] = ["confirm", "一定の", "条件付きの", "確認する", 3];
qa[73] = ["conflict", "生成する", "連絡する", "競合する", 3];
qa[74] = ["connect", "排除する", "接続する", "連絡する", 2];
qa[75] = ["connection", "定数", "接続", "生成", 2];
qa[76] = ["constant", "定数", "変数", "制約", 1];
qa[77] = ["constraint", "連絡", "制約", "圧縮", 2];
qa[78] = ["construct", "続行する", "貢献する", "生成する", 3];
qa[79] = ["contact", "連絡する", "宣言する", "続行する", 1];
qa[80] = ["contain", "最重要の", "現在の", "含む", 3];
qa[81] = ["content", "内容", "文脈", "変換", 1];
qa[82] = ["context", "内容", "変換", "文脈", 3];
qa[83] = ["continue", "続行する", "中断する", "貢献する", 1];
qa[84] = ["contribute", "続行する", "貢献する", "中断する", 2];
qa[85] = ["control", "変換する", "制御する", "訂正する", 2];
qa[86] = ["convert", "変換する", "数える", "宣言する", 1];
qa[87] = ["coordinate", "宣言", "座標", "損害", 2];
qa[88] = ["copyright", "著作権", "商標権", "実用新案権", 1];
qa[89] = ["core", "正常な", "正確な", "最重要の", 3];
qa[90] = ["correct", "作成する", "訂正する", "十進法の", 2];
qa[91] = ["correctly", "間違い", "正しく", "あいまいな", 2];
qa[92] = ["count", "切り捨て", "回数、数", "切り上げ", 2];
qa[93] = ["create", "貢献する", "作成する", "連絡する", 2];
qa[94] = ["credential", "著作権", "認証情報", "座標", 2];
qa[95] = ["current", "過去の", "現在の", "未来の", 2];
qa[96] = ["decimal", "二進法の", "十進法の", "五進法の", 2];
qa[97] = ["declaration", "撤回", "宣言", "収集", 2];
qa[98] = ["declare", "撤回する", "宣言する", "収集する", 2];
qa[99] = ["dedicated", "全員の", "専用の", "現在の", 2];
qa[100] = ["default", "一般値", "合計値", "既定値", 3];
qa[101] = ["define", "定義する", "削除する", "連絡する", 1];
qa[102] = ["delay", "遅延", "早急", "超速", 1];
qa[103] = ["delete", "現れる", "削除する", "表す", 2];
qa[104] = ["dependency", "放任関係", "親子関係", "依存関係", 3];
qa[105] = ["deploy", "配備する", "削除する", "説明する", 1];
qa[106] = ["deployment", "配備", "削除", "説明", 1];
qa[107] = ["deprecated", "非推奨の", "推奨の", "専用の", 1];
qa[108] = ["deprecation", "非推奨", "推奨", "専用", 1];
qa[109] = ["describe", "連絡する", "説明する", "定義する", 2];
qa[110] = ["description", "連絡", "説明", "定義", 2];
qa[111] = ["descriptor", "案山子", "削除", "記述子", 3];
qa[112] = ["destination", "目的地", "現在地", "経由地", 1];
qa[113] = ["destroy", "破棄する", "修復する", "定義する", 1];
qa[114] = ["detail", "転出", "詳細", "開発", 2];
qa[115] = ["detect", "開発する", "検出する", "回避する", 2];
qa[116] = ["determine", "決定する", "否決する", "検出する", 1];
qa[117] = ["developer", "利用者", "責任者", "開発者", 3];
qa[118] = ["development", "機器", "配布", "開発", 3];
qa[119] = ["device", "表示", "期間", "機器", 3];
qa[120] = ["digit", "行", "桁", "列", 2];
qa[121] = ["disable", "無効にする", "有効にする", "重複する", 1];
qa[122] = ["display", "画面", "詳細", "桁", 1];
qa[123] = ["distribute", "配布する", "回収する", "定義する", 1];
qa[124] = ["documentation", "要素", "生成", "資料", 3];
qa[125] = ["duplicate", "修復する", "複製する", "定義する", 2];
qa[126] = ["duration", "配布", "開発", "期間", 3];
qa[127] = ["dynamic", "動的な", "静的な", "正常な", 1];
qa[128] = ["dynamically", "動的に", "静的に", "正常に", 1];
qa[129] = ["edit", "編集する", "消去する", "合体する", 1];
qa[130] = ["element", "要素", "生成", "定義", 1];
qa[131] = ["emit", "生成する", "消去する", "合体する", 1];
qa[132] = ["empty", "入力", "固定の", "空の", 3];
qa[133] = ["enable", "無効にする", "確実にする", "有効にする", 3];
qa[134] = ["encoding", "正常化", "無効化", "符号化", 3];
qa[135] = ["encounter", "遭遇する", "重複する", "定義する", 1];
qa[136] = ["encryption", "無効化", "有効化", "暗号化", 3];
qa[137] = ["endpoint", "起点", "読点", "端点", 3];
qa[138] = ["ensure", "修復する", "複製する", "確かめる", 3];
qa[139] = ["enter", "入力する", "配布する", "回収する", 1];
qa[140] = ["entity", "列挙", "環境", "実体", 3];
qa[141] = ["enumeration", "列挙", "環境", "実体", 1];
qa[142] = ["environment", "例外", "入力", "環境", 3];
qa[143] = ["equal", "等しい", "異なる", "例外", 1];
qa[144] = ["example", "例", "資料", "要素", 1];
qa[145] = ["except", "編集する", "生成する", "〜を除く", 3];
qa[146] = ["exception", "例外", "原則", "普及", 1];
qa[147] = ["exclude", "追加する", "除外する", "複製する", 2];
qa[148] = ["executable", "実行不能な", "実行可能な", "実行済みの", 2];
qa[149] = ["execution", "終了", "実行", "存在", 2];
qa[150] = ["exist", "存在する", "終了する", "生成する", 1];
qa[151] = ["existing", "新規の", "拡張の", "既存の", 3];
qa[152] = ["exit", "始める", "終了する", "拡大する", 2];
qa[153] = ["expand", "表現する", "明示する", "拡大する", 3];
qa[154] = ["expected", "表現された", "実行された", "期待された", 3];
qa[155] = ["express", "表現する", "削除する", "期待する", 1];
qa[156] = ["expression", "表現、式", "実行された", "期待された", 1];
qa[157] = ["extend", "縮小する", "終了する", "拡張する", 3];
qa[158] = ["extension", "修飾子", "識別子", "拡張子", 3];
qa[159] = ["external", "内部の", "追加の", "外部の", 3];
qa[160] = ["extra", "追加の", "内部の", "外部の", 1];
qa[161] = ["extract", "抽出する", "失敗する", "除外する", 1];
qa[162] = ["fail", "成功する", "失敗する", "絞り込む", 2];
qa[163] = ["failure", "成功", "失敗、故障", "機能、特徴", 2];
qa[164] = ["feature", "成功", "失敗、故障", "機能、特徴", 3];
qa[165] = ["fetch", "除外する", "取得する", "検索する", 2];
qa[166] = ["filter", "すべて表示", "並び替え", "絞り込む", 3];
qa[167] = ["final", "最初の", "最終の", "途中の", 2];
qa[168] = ["find", "置換する", "検索する", "完了する", 2];
qa[169] = ["finish", "始める", "終了する", "発火する", 2];
qa[170] = ["fire", "終了する", "始動する", "修正する", 2];
qa[171] = ["fix", "終了する", "修正する", "始める", 2];
qa[172] = ["follow", "逆らう", "従う", "強制する", 2];
qa[173] = ["following", "前の項目", "次の項目", "最初の項目", 2];
qa[174] = ["force", "緩和する", "修正する", "強制する", 3];
qa[175] = ["format", "機能、関数", "機能、特徴", "書式、形式", 3];
qa[176] = ["function", "失敗、故障", "機能、変数", "機能、関数", 3];
qa[177] = ["functionality", "世代", "処理", "機能", 3];
qa[178] = ["general", "特別な", "一般の", "取得する", 2];
qa[179] = ["generate", "削除する", "生成する", "関連する", 2];
qa[180] = ["generation", "処理", "生成", "獲得", 2];
qa[181] = ["handle", "生成する", "処理する", "関連する", 2];
qa[182] = ["handling", "生成", "処理", "関連", 2];
qa[183] = ["health", "異常性", "非常時", "正常性", 3];
qa[184] = ["height", "低さ", "高さ", "長さ", 2];
qa[185] = ["hide", "表す", "実装する", "隠す", 3];
qa[186] = ["hierarchy", "代替", "識別", "階層", 3];
qa[187] = ["highlight", "改善する", "実装する", "強調表示する", 3];
qa[188] = ["identifier", "修飾子", "識別子", "拡張子", 2];
qa[189] = ["ignore", "無視する", "実装する", "改良する", 1];
qa[190] = ["implement", "無視する", "実装する", "改良する", 2];
qa[191] = ["implementation", "無視", "実装", "改善", 2];
qa[192] = ["improve", "無視する", "実装する", "改良する、改善する", 3];
qa[193] = ["include", "除外する", "生成する", "含む", 3];
qa[194] = ["incompatible", "互換性がある", "互換性がない", "互換性を追加する", 2];
qa[195] = ["increment", "増分", "減分", "差分", 1];
qa[196] = ["indicate", "含む", "示す", "消す", 2];
qa[197] = ["information", "初期", "情報", "内部", 2];
qa[198] = ["initial", "最後の", "最初の", "途中の", 2];
qa[199] = ["initialization", "実装化", "初期化", "実用化", 2];
qa[200] = ["initialize", "実装化する", "初期化する", "実用化する", 2];
qa[201] = ["inner", "内側の", "外側の", "途中の", 1];
qa[202] = ["insert", "追加する", "挿入する", "消去する", 2];
qa[203] = ["inspect", "指示する", "対話する", "検査する", 3];
qa[204] = ["inspection", "指示", "対話", "検査", 3];
qa[205] = ["instruction", "整数", "指示", "対話", 2];
qa[206] = ["integer", "間隔", "整数", "指示", 2];
qa[207] = ["interact", "対話する", "指示する", "検査する", 1];
qa[208] = ["internal", "内部の", "外部の", "途中の", 1];
qa[209] = ["interval", "整数", "指示", "間隔", 3];
qa[210] = ["introduce", "導入する", "除外する", "改善する", 1];
qa[211] = ["invalid", "無効な", "有効な", "有用な", 1];
qa[212] = ["invoke", "指示する", "呼び出す", "対話する", 2];
qa[213] = ["issue", "問題点", "解決点", "終点", 1];
qa[214] = ["item", "対話", "項目", "検査", 2];
qa[215] = ["iterate", "結合する", "指示する", "繰り返す", 3];
qa[216] = ["join", "指示する", "繰り返す", "結合する", 3];
qa[217] = ["language", "項目", "言語", "検索", 2];
qa[218] = ["latency", "待ち時間", "実行時間", "終了時間", 1];
qa[219] = ["later", "先に", "後で", "途中で", 2];
qa[220] = ["latest", "昔の", "最近の", "外部の", 2];
qa[221] = ["launch", "終了する", "制限する", "開始する", 3];
qa[222] = ["length", "長さ", "深さ", "高さ", 1];
qa[223] = ["limit", "項目", "制限", "検索", 2];
qa[224] = ["line", "位置", "線", "結合", 2];
qa[225] = ["load", "読み込む", "管理する", "改善する", 1];
qa[226] = ["location", "制限", "言語", "位置", 3];
qa[227] = ["lookup", "管理", "作成", "検索", 3];
qa[228] = ["make", "管理する", "作成する", "検索する", 2];
qa[229] = ["manage", "作成する", "検索する", "管理する", 3];
qa[230] = ["manually", "自動で", "手動で", "改善する", 2];
qa[231] = ["match", "作成する", "検索する", "一致する", 3];
qa[232] = ["matching", "作成する", "検索する", "一致する", 3];
qa[233] = ["maximum", "最小の", "最大の", "模造の", 2];
qa[234] = ["merge", "分離する", "開発する", "統合する", 3];
qa[235] = ["method", "移行", "変更", "方法", 3];
qa[236] = ["migration", "変更", "方法", "移行", 3];
qa[237] = ["millisecond", "ミリ分", "ミリ時間", "ミリ秒", 3];
qa[238] = ["minimum", "最大の", "最小の", "模造の", 2];
qa[239] = ["minor", "大きな", "不便な", "小さな", 3];
qa[240] = ["mock", "最大の", "最小の", "模造の", 3];
qa[241] = ["modification", "制限", "変更", "位置", 2];
qa[242] = ["modifier", "識別子", "修飾子", "拡張子", 2];
qa[243] = ["modify", "検索する", "修正する", "管理する", 2];
qa[244] = ["monitor", "移動する", "検索する", "監視する", 3];
qa[245] = ["move", "検索する", "監視する", "移動する", 3];
qa[246] = ["multiple", "複数の", "単一の", "限定の", 1];
qa[247] = ["navigate", "改善する", "監視する", "移動する", 3];
qa[248] = ["navigation", "改善", "監視", "ナビゲーション、移動", 3];
qa[249] = ["nested", "入れ子の", "別々の", "複数の", 1];
qa[250] = ["none", "すべて表示", "部分的に表示", "一つもなし", 3];
qa[251] = ["normal", "標準の", "例外の", "限定の", 1];
qa[252] = ["normalize", "標準化する", "例外化する", "数値化する", 1];
qa[253] = ["note", "注意", "物体", "対象", 1];
qa[254] = ["notice", "通知", "変更", "位置", 1];
qa[255] = ["notification", "通知", "変更", "位置", 1];
qa[256] = ["notify", "通知する", "検索する", "監視する", 1];
qa[257] = ["null", "数値", "文字", "空の", 3];
qa[258] = ["numeric", "文字の", "数値の", "データの", 2];
qa[259] = ["object", "識別子", "開発", "物体、対象", 3];
qa[260] = ["obtain", "発生する", "取得する", "通知する", 2];
qa[261] = ["occur", "発生する", "例外化する", "数値化する", 1];
qa[262] = ["occurrence", "操作、処理", "出現、発生", "変更，改善", 2];
qa[263] = ["operation", "出現、発生", "操作、処理", "変更，改善", 2];
qa[264] = ["optimize", "具現化する", "最適化する", "数値化する", 2];
qa[265] = ["optional", "任意の", "例外の", "標準の", 1];
qa[266] = ["otherwise", "または", "および", "そうでなければ", 3];
qa[267] = ["override", "解析する", "発生する", "優先する", 3];
qa[268] = ["overview", "超えた分", "足りない分", "概要", 3];
qa[269] = ["overwrite", "下書きする", "上書きする", "改善する", 2];
qa[270] = ["parenthesis", "角かっこ", "並かっこ", "丸かっこ", 3];
qa[271] = ["parse", "修正する", "実行する", "解析する", 3];
qa[272] = ["pass", "渡す", "引き離す", "実行する", 1];
qa[273] = ["patch", "許可プログラム", "実行プログラム", "修正プログラム", 3];
qa[274] = ["perform", "中断する", "実行する", "改善する", 2];
qa[275] = ["performance", "通知", "性能", "操作", 2];
qa[276] = ["permission", "除外", "中断", "許可", 3];
qa[277] = ["permit", "中断する", "実行する", "許可する", 3];
qa[278] = ["persistence", "具現化", "数値化", "永続化", 3];
qa[279] = ["physical", "物理的な", "優先的な", "厳格に", 1];
qa[280] = ["populate", "手動入力する", "自動入力する", "音声入力する", 2];
qa[281] = ["position", "投稿", "準備", "位置", 3];
qa[282] = ["post", "更新", "投稿", "優先", 2];
qa[283] = ["preferred", "優先の", "標準の", "任意の", 1];
qa[284] = ["prefix", "接尾辞", "接頭辞", "接続詞", 2];
qa[285] = ["prepare", "実行する", "準備する", "許可する", 2];
qa[286] = ["press", "引く", "落とす", "押す", 3];
qa[287] = ["previous", "後の", "前の", "最後の", 2];
qa[288] = ["print", "入力する", "書き込む", "出力する", 3];
qa[289] = ["priority", "優先度", "数値化", "物理的な", 1];
qa[290] = ["problem", "問題", "投稿", "準備", 1];
qa[291] = ["process", "投稿", "準備", "処理", 3];
qa[292] = ["progress", "具現化", "進行状況", "接続詞", 2];
qa[293] = ["properly", "正常に", "保護する", "提供する", 1];
qa[294] = ["protect", "保護する", "提供する", "供給する", 1];
qa[295] = ["provide", "提供する", "保護する", "公開する", 1];
qa[296] = ["provision", "保護する", "公開する", "供給する", 3];
qa[297] = ["public", "非公開の", "公開の", "未公開の", 2];
qa[298] = ["publish", "非公開にする", "公開する", "削除する", 2];
qa[299] = ["pull", "問い合わせ", "待ち行列", "取得する", 3];
qa[300] = ["query", "待ち行列", "取得する", "問い合わせ", 3];
qa[301] = ["queue", "取得する", "問い合わせ", "待ち行列", 3];
qa[302] = ["range", "範囲", "問題", "投稿", 1];
qa[303] = ["raw", "非公開の", "生の", "公開の", 2];
qa[304] = ["read", "読み取る", "公開する", "供給する", 1];
qa[305] = ["receive", "発信する", "受信する", "推奨する", 2];
qa[306] = ["recommend", "受信する", "推奨する", "発信する", 2];
qa[307] = ["redirect", "受信する", "推奨する", "転送する", 3];
qa[308] = ["redundant", "端的な", "冗長な", "完全な", 2];
qa[309] = ["refer", "更新する", "参照する", "推奨する", 2];
qa[310] = ["refresh", "参照する", "更新する", "推奨する", 2];
qa[311] = ["registration", "登録", "範囲", "問題", 1];
qa[312] = ["reload", "遠隔操作する", "再読み込みする", "参照する", 2];
qa[313] = ["remote", "再読み込みする", "参照する", "遠隔の", 3];
qa[314] = ["removal", "保存", "削除", "移動する", 2];
qa[315] = ["remove", "保存する", "削除する", "移動する", 2];
qa[316] = ["rename", "名前を変更する", "名前を付ける", "名前を消す", 1];
qa[317] = ["render", "描画する", "置換する", "報告する", 1];
qa[318] = ["replace", "置換する", "描画する", "報告する", 1];
qa[319] = ["report", "報告する", "描画する", "置換する", 1];
qa[320] = ["represent", "表す", "消す", "求める", 1];
qa[321] = ["representation", "表現", "要求", "検索", 1];
qa[322] = ["request", "要求する", "反応する", "確保する", 1];
qa[323] = ["require", "必要とする", "供給する", "報告する", 1];
qa[324] = ["reserve", "予約する", "断る", "解決する", 1];
qa[325] = ["resolution", "表現", "要求", "解決", 3];
qa[326] = ["resolve", "表現する", "要求する", "解決する", 3];
qa[327] = ["resource", "応答", "起動", "資源", 3];
qa[328] = ["respond", "起動する", "検索する", "応答する", 3];
qa[329] = ["response", "起動する", "検索", "応答", 3];
qa[330] = ["restart", "復元する", "再起動する", "反応する", 2];
qa[331] = ["restore", "復元する", "再起動する", "反応する", 1];
qa[332] = ["restriction", "復元", "制限", "結果", 2];
qa[333] = ["result", "復元", "制限", "結果", 3];
qa[334] = ["retrieve", "復元する", "取得する", "反応する", 2];
qa[335] = ["return", "戻す、返す", "検索する", "応答する", 1];
qa[336] = ["revert", "進める", "確定する", "戻る、戻す", 3];
qa[337] = ["revision", "経路", "反応", "改訂", 3];
qa[338] = ["role", "役割", "理念", "制限", 1];
qa[339] = ["route", "理念", "制限", "経路", 3];
qa[340] = ["row", "列", "行", "低さ", 2];
qa[341] = ["run", "止める", "実行する", "確認する", 2];
qa[342] = ["runtime", "終了時", "実行時", "改善時", 2];
qa[343] = ["save", "保存する", "消去する", "変換する", 1];
qa[344] = ["scope", "画面", "検索", "範囲", 3];
qa[345] = ["screen", "検索", "範囲", "画面", 3];
qa[346] = ["search", "画面", "検索", "範囲", 2];
qa[347] = ["section", "画面", "検索", "部分", 3];
qa[348] = ["secure", "危険な", "正確な", "安全な", 3];
qa[349] = ["see", "選択する", "参照する", "送信する", 2];
qa[350] = ["select", "送信する", "選択する", "参照する", 2];
qa[351] = ["send", "選択する", "送信する", "参照する", 2];
qa[352] = ["separator", "設定", "形状", "区切り", 3];
qa[353] = ["set", "参照する", "設定する", "送信する", 2];
qa[354] = ["setting", "署名", "設定", "仕様", 2];
qa[355] = ["setup", "簡素化する", "設定する", "共有する", 2];
qa[356] = ["shape", "署名", "空白", "形状", 3];
qa[357] = ["share", "表示する", "設定する", "共有する", 3];
qa[358] = ["show", "表示する", "設定する", "共有する", 1];
qa[359] = ["signature", "空白", "署名", "匿名", 2];
qa[360] = ["simplify", "空白化する", "複雑化する", "簡素化する", 3];
qa[361] = ["sort", "並び替える", "置き換える", "更新する", 1];
qa[362] = ["specific", "特定の", "既定の", "動的の", 1];
qa[363] = ["specification", "署名", "仕様", "空白", 2];
qa[364] = ["specify", "署名する", "指定する", "分割する", 2];
qa[365] = ["split", "分割する", "署名する", "指定する", 1];
qa[366] = ["state", "形状", "状態", "設定", 2];
qa[367] = ["statement", "文字", "数値", "文", 3];
qa[368] = ["static", "動的な", "静的な", "決定的な", 2];
qa[369] = ["status", "設定", "状態", "強さ", 2];
qa[370] = ["store", "格納する", "送信する", "指定する", 1];
qa[371] = ["string", "文字列", "数値", "小数点", 1];
qa[372] = ["submit", "送信する", "成功する", "共有する", 1];
qa[373] = ["successful", "失敗した", "成功した", "表示した", 2];
qa[374] = ["successfully", "常に", "正常に", "異常に", 2];
qa[375] = ["suffix", "接頭辞", "接尾辞", "接続詞", 2];
qa[376] = ["supply", "提供する", "求める", "成功する", 1];
qa[377] = ["suppress", "表示しない", "表示する", "切り替える", 1];
qa[378] = ["switch", "表示する", "切り替える", "表示しない", 2];
qa[379] = ["synchronize", "同期する", "表示する", "成功する", 1];
qa[380] = ["syntax", "文字列", "構文", "数値", 2];
qa[381] = ["table", "表", "構文", "数値", 1];
qa[382] = ["temporary", "普遍的な", "決定的な", "一時的な", 3];
qa[383] = ["termination", "開始", "終了", "中断", 2];
qa[384] = ["terms", "利用条件", "遷移", "文字列", 1];
qa[385] = ["third party", "利害関係者", "三回目の宴会", "第三者", 3];
qa[386] = ["throw", "整える", "求める", "投げる", 3];
qa[387] = ["toggle", "維持する", "切り替える", "グループ化する", 2];
qa[388] = ["traffic", "通信データ", "通信の質", "通信の量", 3];
qa[389] = ["transfer", "転送する", "表示する", "入力する", 1];
qa[390] = ["transform", "変換する", "表示する", "入力する", 1];
qa[391] = ["transition", "開始", "遷移", "中断", 2];
qa[392] = ["translate", "変換する", "表示する", "入力する", 1];
qa[393] = ["tweak", "微調整する", "投げる", "切り替える", 1];
qa[394] = ["typo", "入力ミス", "確認", "出力ミス", 1];
qa[395] = ["unable", "不可能な", "可能な", "実現した", 1];
qa[396] = ["unauthorized", "権限のある", "権限のない", "権限が付された", 2];
qa[397] = ["unavailable", "利用できない", "利用できる", "利用可能な", 1];
qa[398] = ["undefined", "未定義の", "予期しない", "利用しない", 1];
qa[399] = ["undo", "先に進む", "元に戻す", "利用する", 2];
qa[400] = ["unexpected", "予期しない", "未定義の", "利用不可能な", 1];
qa[401] = ["unique", "一般的な", "複数の", "固有の", 3];
qa[402] = ["unknown", "不明の", "利用不可", "未定義の", 1];
qa[403] = ["unnecessary", "不要な", "未定義の", "利用不可", 1];
qa[404] = ["unresolved", "未解決の", "未定義の", "利用不可", 1];
qa[405] = ["unsupported", "非対応の", "未定義の", "不要な", 1];
qa[406] = ["unused", "未使用の", "未定義の", "不要な", 1];
qa[407] = ["update", "復元する", "更新する", "利用する", 2];
qa[408] = ["usage", "利用、使用", "復元する", "必要な", 1];
qa[409] = ["useful", "便利な", "有効な", "必要な", 1];
qa[410] = ["valid", "有効な", "便利な", "必要な", 1];
qa[411] = ["validate", "認識する", "承認する", "検証する", 3];
qa[412] = ["validation", "認証", "検証", "認識", 2];
qa[413] = ["value", "値", "数値", "データの", 1];
qa[414] = ["variable", "変数", "定数", "関数", 1];
qa[415] = ["verbose", "有効な", "詳細な", "便利な", 2];
qa[416] = ["verify", "認識する", "承認する", "確認する", 3];
qa[417] = ["virtual", "可視的な", "変数の", "仮想の", 3];
qa[418] = ["visibility", "可能な", "確認する", "可視性", 3];
qa[419] = ["visible", "非表示の", "削除する", "表示できる", 3];
qa[420] = ["visit", "訪問する", "離れる", "待機する", 1];
qa[421] = ["wait", "待機する", "訪問する", "離れる", 1];
qa[422] = ["warn", "申告する", "示す", "警告する", 3];
qa[423] = ["warning", "申告", "認識", "警告", 3];
qa[424] = ["whitespace", "決定する", "警告", "空白", 3];
qa[425] = ["width", "幅", "高さ", "奥行", 1];
qa[426] = ["wrap", "中央寄せ", "右寄せ", "折り返す", 3];
qa[427] = ["write", "決定する", "書き込む", "待機する", 2];
qa[428] = ["FALSE", "正しい、真の", "誤りの、偽の", "不要の", 2];
qa[429] = ["TRUE", "誤りの、偽の", "正しい、真の", "不要の", 2];




function run() { //randomの生成

    for (let i = qa.length - 1; i >= 0; i--) {
        let rand = Math.floor(Math.random() * (i + 1));
        let temp = qa[i];
        qa[i] = qa[rand]
        qa[rand] = temp;
        cyousen = i + 1

    // for (let i = 0; i >= 10; i++) {
    //     let rand = Math.floor(Math.random() * (qa.length - 1));
    //     let temp = qa[i];
    //     qa[i] = qa[rand]
    //     qa[rand] = temp;
    //     cyousen = i + 1

        // document.getElementById("001").innerHTML = cyousen + "回目の挑戦";
        data4 = {
            cyousen: cyousen,
        }
        const jsonData4 = JSON.stringify(data4) //jsオブジェクトをJSONデータに変換
        // console.log(jsonData) //json形式に変換された後のjsオブジェクト
        localStorage.setItem("hozon4", jsonData4) //json形式のデータをローカルストレージに保存

        quiz(qa);
    }
}


//初期設定
q_sel = 3; //選択肢の数
const array = [];
document.getElementById("syougou").innerText = "駆け出しのエンジニア"
document.getElementById("start").style.display = "none";


//ボタン押されてスタート
document.getElementById("startbutton")
    .addEventListener("click", function () {
    
        document.getElementById("start").style.display = "block";
        document.getElementById("startbutton").style.display = "none";

    });

setReady(qa);

function setReady() {//初期設定
    count = 0; //問題番号
    ansers = new Array(); //解答記録
    run(); //再テストの場合のランダムの生成
    quiz(); //最初の問題
}
function quiz() { //問題表示
    let s, n;
    //問題
    document.getElementById("text_q").innerHTML = (count + 1) + "問目：" + qa[count][0];
    //選択肢
    s = "";
    for (n = 1; n <= q_sel; n++) {
        s += "【<a href='javascript:anser(" + n + ")'>" + n + "：" + qa[count][n] + "</a>】";
    }
    document.getElementById("text_s").innerHTML = s;

}
function anser(num) { //解答表示

    let s;
    s = (count + 1) + "問目：";
    totalcount += 1
    console.log(totalcount)
    //答え合わせ
    if (num == qa[count][q_sel + 1]) {
        //正解
        ansers[count] = "○";
        total_seikai += 1
        document.getElementById("seikaisuu").innerText = total_seikai;
        seikai_r = Math.floor(total_seikai / totalcount * 100) + "%"
        document.getElementById("002").innerHTML = seikai_r;

        array.push("<p>" + qa[count] + "</p>");
        log = array
        document.getElementById("seikailog").innerHTML = log
            ;

        data1 = {
            total_seikai: total_seikai,

        };
        data2 = {
            seikailog: log,
        };
        data3 = {
            totalcount: totalcount
        }

        const jsonData = JSON.stringify(data1) //jsオブジェクトをJSONデータに変換
        // console.log(jsonData) //json形式に変換された後のjsオブジェクト
        localStorage.setItem("hozon1", jsonData) //json形式のデータをローカルストレージに保存
        const jsonData2 = JSON.stringify(data2) //jsオブジェクトをJSONデータに変換
        // console.log(jsonData) //json形式に変換された後のjsオブジェクト
        localStorage.setItem("hozon2", jsonData2) //json形式のデータをローカルストレージに保存
        const jsonData3 = JSON.stringify(data3) //jsオブジェクトをJSONデータに変換
        // console.log(jsonData) //json形式に変換された後のjsオブジェクト
        localStorage.setItem("hozon3", jsonData3) //json形式のデータをローカルストレージに保存

        if (total_seikai <= 30) {
            document.getElementById("syougou").innerText = "駆け出しのエンジニア"

        } else if (30 <= total_seikai <= 60) {
            document.getElementById("syougou").innerText = "普通のエンジニア"

        } else if (61 <= total_seikai <= 100) {
            document.getElementById("syougou").innerText = "上級のエンジニア"
        } else if (101 <= total_seikai <= 200) {
            document.getElementById("syougou").innerText = "ベテランエンジニア"
        }
        else if (201 <= total_seikai <= 1000) {
            document.getElementById("syougou").innerText = "神"
        }
        else if (1001 <= total_seikai) {
            document.getElementById("syougou").innerText = "仙人"

        }

    } else {
        ansers[count] = "×";
        // s =  qa[count][num];
        // document.getElementById("text_a1").innerHTML = s;
    }
    s += ansers[count] + qa[count][num];
    document.getElementById("text_a").innerHTML = s;
    //次の問題を表示
    count++;
    if (count < 10) {
        quiz();
    } else {
        //終了
        s = "<table border='2'><caption>成績発表</caption>";
        //1行目
        s += "<tr><th>問題</th>";
        for (n = 0; n < 10; n++) {
            s += "<th>" + (n + 1) + "</th>";
        }
        s += "</tr>";
        //2行目
        s += "<tr><th>成績</th>";
        for (n = 0; n < 10; n++) {
            s += "<td>" + ansers[n] + "</td>";
        }
        s += "</tr>";
        s += "</table>";
        document.getElementById("text_q").innerHTML = s;
        //次の選択肢
        s = "【<a href=''>TOPへ戻る</a>】";
        // s += "【<a href='javascript:setReady()'>同じ問題を最初から</a>】";
        // s += "【<a href=''>TOPへ戻る</a>】";
        document.getElementById("text_s").innerHTML = s;
    }
}
