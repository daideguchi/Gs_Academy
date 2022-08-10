s//第5章：グラフを表示

//円グラフの表示
function createPieChart(rows) {
    //円グラフ用データを格納する連想配列
    let pieChartData = {};

    //データベースから入手金一覧のデータをカテゴリ毎に取り出して集計。収入は除外する。
    let category = "";
    rows.forEach(function (data) {
        category = data.category;
        if (category != "買い") {
            //連想配列のキーにカテゴリが存在していれば金額を加算する
            if (pieChartData[category] === undefined) {
                pieChartData[category] = Number(data.amount);
            } else {
                pieChartData[category] += Number(data.amount);
            }
        }
    });

    //円グラフ用にカテゴリと合計金額を配列に入れる
    let keyArray = [];
    let valueArray = [];


    for (key in pieChartData) {
        keyArray.push(key);
        valueArray.push(pieChartData[key]);
    }

    let total = valueArray.reduce(function (sum, element) {
        return sum + element;
    }, 0);
    let element2 = document.getElementById("total")
    element2.innerHTML = `<p>資産総額：${total}円</p>`

    //Chart.jsの機能を使用して円グラフを表示
    let pieChart = document.getElementById("pieChart");
    new Chart(pieChart, {
        type: "pie",
        data: {
            labels: keyArray,
            datasets: [
                {
                    backgroundColor: [
                        "#EB5757",
                        "#6FCF97",
                        "#56CCF2",
                        "#F2994A",
                        "#F2C94C",
                        "#2F80ED",
                        "#9B51E0",
                        "#BB6BD9",
                    ],
                    data: valueArray,
                },
            ],
        },
        options: {
            title: {
                display: true,
                text: "ポートフォリオ",
            },
        },
    });

}