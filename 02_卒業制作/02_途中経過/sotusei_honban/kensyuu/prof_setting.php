

<!-- 制作途中 -->



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
  <canvas id='canvas' width='300' height='300'></canvas>  <!-- 絵を描くcanvas要素 -->
<br><br>
<form enctype="multipart/form-data" action="prof.php" method="POST">
  <label>
    <input type="hidden" name="max" value="1048576" />
    <input name="img" id="chooser" type="file" accept="image/*">画像を選択する

    <input type="submit" value="決定">
  </label>   <!-- ファイル選択ダイアログ（カメラも使える） -->
  </form>
  <a href="prof.php">php</a>
  <a href="upload_form.php">upload</a>
  <a href="prof.php">prof</a>
  <a href="todo_read.php">戻る</a>
  <script>
 
// canvas要素に描画するためのお決まりの2行
var canvas  = document.getElementById("canvas");        // canvas 要素の取得
var context = canvas.getContext("2d");                  // 描画用部品を取得
 
// ファイルを読む（カメラを使う）準備
var chooser = document.getElementById("chooser");       // ファイル選択用 input 要素の取得
var reader  = new FileReader();                         // ファイルを読む FileReader オブジェクトを作成
var image   = new Image();                              // 画像を入れておく Image オブジェクトを作成
// ファイルを読み込む処理
chooser.addEventListener("change", () => {              // ファイル選択ダイアログの値が変わったら
    var file = chooser.files[0];                        // ファイル名取得
    reader.readAsDataURL(file);                         // FileReader でファイルを読み込む
});
reader.addEventListener("load", () => {                 // FileReader がファイルの読み込みを完了したら
    image.src = reader.result;                          // Image オブジェクトに読み込み結果を入れる
});
image.addEventListener("load", () => {                  // Image オブジェクトに画像が入ったら
    context.drawImage(image, 0, 0, 300, 300);           // 画像を canvas に描く（Image, Left, Top, Width, Height）
});
 
</script>


</body>
</html>

<style>
  img{
    width: 30%;
    height: 30%;
  }

  body{
    background-color: #f5deb3;
  }

  #canvas{
    border: 3px solid #01751a;
  }

label {
    padding: 10px 40px;
    color: #ffffff;
    background-color: #384878;
    cursor: pointer;
}

input[type="file"] {
    display: none;
}
  
#prof{
      border: 3px solid #01751a;
}