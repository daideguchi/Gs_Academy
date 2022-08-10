//section 1
//APIを利用する際のURLになります
let KEY = "AIzaSyBr0yaKqf3j9t0ryLmlA7ewoLY6qeDpWK4";
let url = "https://vision.googleapis.com/v1/images:annotate?key=";
let api_url = url + KEY;

score = 0;

//section 2
//ページを読み込む際に動的にラベル検出結果表示用のテーブルを作成
// $(function () {
//   for (var i = 0; i < 10; i++) {
//     $("#resultBox").append("<tr><td class='resultTableContent'></td></tr>");
//   }
// });

//section 3
//画面の表示内容をクリアする処理
// function clear() {
//   if ($("#textBox tr").length) {
//     $("#textBox tr").remove();
//   }
//   if ($("#chartArea div").length) {
//     $("#chartArea div").remove();
//   }
//   $("#resultBox tr td").text("");
// }

//section 4
//画像がアップロードされた時点で呼び出される処理
$("#uploader1").change(function (evt) {
  getImageInfo(evt);
  // clear();
  $(".resultArea").removeClass("hidden");
  $(".resultArea2").removeClass("hidden");
});

$("#commit").on("click", function () {
 $(".resultArea3").removeClass("hidden");
});

//section 5
//画像ファイルを読み込み、APIを利用するためのURLを組み立てる
function getImageInfo(evt) {
  let file = evt.target.files;
  let reader = new FileReader();
  let dataUrl = "";
  reader.readAsDataURL(file[0]);
  reader.onload = function () {
    dataUrl = reader.result;
    $("#showPic").html("<img src='" + dataUrl + "'>");
    makeRequest(dataUrl, getAPIInfo);
  };
}

//section 6
//APIへのリクエストに組み込むJsonの組み立て
function makeRequest(dataUrl, callback) {
  let end = dataUrl.indexOf(",");
  let request =
    "{'requests': [{'image': {'content': '" +
    dataUrl.slice(end + 1) +
    "'},'features': [{'type': 'LABEL_DETECTION','maxResults': 10,},{'type': 'FACE_DETECTION',},{'type':'TEXT_DETECTION','maxResults': 20,}]}]}";
  callback(request);
}

//section 7
//通信を行う
function getAPIInfo(request) {
  $.ajax({
    url: api_url,
    type: "POST",
    async: true,
    cashe: false,
    data: request,
    dataType: "json",
    contentType: "application/json",
  })
    .done(function (result) {
      showResult(result);
    })
    .fail(function (result) {
      alert("failed to load the info");
    });
}

//section 8
//得られた結果を画面に表示する
function showResult(result) {
  //ラベル検出結果の表示
  for (let i = 0; i < result.responses[0].labelAnnotations.length; i++) {
    $("#resultBox tr:eq(" + i + ") td").text(
      result.responses[0].labelAnnotations[i].description
    );
  }
  //表情分析の結果の表示
  if (result.responses[0].faceAnnotations) {
    //この変数に、表情のlikelihoodの値を配列として保持する
    let facialExpression = [];
    facialExpression.push(result.responses[0].faceAnnotations[0].joyLikelihood);
    facialExpression.push(
      result.responses[0].faceAnnotations[0].sorrowLikelihood
    );
    facialExpression.push(
      result.responses[0].faceAnnotations[0].angerLikelihood
    );
    facialExpression.push(
      result.responses[0].faceAnnotations[0].surpriseLikelihood
    );
    facialExpression.push(
      result.responses[0].faceAnnotations[0].headwearLikelihood
    );
    for (let k = 0; k < facialExpression.length; k++) {
      if (facialExpression[k] == "UNKNOWN") {
        facialExpression[k] = 0;
      } else if (facialExpression[k] == "VERY_UNLIKELY") {
        facialExpression[k] = 1;
      } else if (facialExpression[k] == "UNLIKELY") {
        facialExpression[k] = 4;
      } else if (facialExpression[k] == "POSSIBLE") {
        facialExpression[k] = 6;
      } else if (facialExpression[k] == "LIKELY") {
        facialExpression[k] = 8;
      } else if (facialExpression[k] == "VERY_LIKELY") {
        facialExpression[k] = 10;
      }
    }
    // console.log(facialExpression);
    // score = facialExpression[0];
    // let element = document.getElementById("score");
    // element.innerHTML = `${score}/10`;
    // postForm(score);

    //チャート描画の処理
    $("#chartArea").highcharts({
      chart: {
        polar: true,
        type: "line",
      },
      title: {
        text: "感情スコアチャート",
      },
      pane: {
        size: "80%",
      },
      xAxis: {
        categories: ["楽しい", "悲しい", "怒り", "驚き", "不明"],
        tickmarkPlacement: "on",
        lineWidth: 0,
      },
      yAxis: {
        gridLineInterpolation: "polygon",
        lineWidth: 0,
        max: 10,
        min: 0,
      },
      tooltip: {
        shared: true,
        pointFormat:
          '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>',
      },
      series: [
        {
          name: "感情スコア",
          data: facialExpression,
          pointPlacement: "on",
        },
      ],
    });
  } else {
    //表情に関する結果が得られなかった場合、表示欄にはその旨を記す文字列を表示
    $("#chartArea").append(
      "<div><b>人間の写真の場合は感情分析ができます</b></div>"
    );
  }

  //テキスト解読の結果を表示
  // if (result.responses[0].textAnnotations) {
  //   for (var j = 1; j < result.responses[0].textAnnotations.length; j++) {
  //     if (j < 16) {
  //       $("#textBox").append(
  //         "<tr><td class='resultTableContent'>" +
  //           result.responses[0].textAnnotations[j].description +
  //           "</td></tr>"
  //       );
  //     }
  //   }
  // } else {
  //   //テキストに関する結果が得られなかった場合、表示欄にはその旨を記す文字列を表示
  //   $("#textBox").append(
  //     "<tr><td class='resultTableContent'><b>No text can be found in the picture</b></td></tr>"
  //   );
  // }
}

// $("#commit").on("click", function postForm(score) {
//     var form = document.createElement("form");
//     var request = document.createElement("input");

//     form.method = "POST";
//     form.action = "list.php";

//     request.type = "hidden"; //入力フォームが表示されないように
//     request.name = "score";
//     request.value = score;

//     form.appendChild(request);
//     document.body.appendChild(form);

//     form.submit();
// })


function postForm(score) {
  var form = document.createElement("form");
  var request = document.createElement("input");

  // form.method = "POST";
  // form.action = "list.php";

  // request.type = "hidden"; //入力フォームが表示されないように
  request.name = "text";
  request.value = score;

  // form.appendChild(request);
  // document.body.appendChild(form);

  // form.submit();
}
