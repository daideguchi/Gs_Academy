<?php
session_start();
include("../functions.php");
check_session_id();


$username = $_SESSION["username"];
$title = $_POST["title"];
$text = $_POST["text"];



// ファイル関連の取得
$file = $_FILES["thumbnail"];
$filename = basename($file["name"]);
$tmp_path = $file["tmp_name"];
$file_err = $file["error"];
$filesize = $file["size"];
$upload_dir = "images/";

$save_filename = date("YmdHis") . $filename;
$save_path = $upload_dir . $save_filename;


//ファイルのバリデーション
//ファイルサイズが１MB以内か
if($filesize > 1048576 || $file_err == 2){
    echo "ファイルは１MB未満にしてください";
        echo"<br>";

}

//拡張子は画像形式か
$allow_ext = array("jpg","jpeg","png");
$file_ext = pathinfo($filename, PATHINFO_EXTENSION);

if(!in_array(strtolower($file_ext),$allow_ext)){
    echo "画像ファイルを添付してください";
    echo"<br>";
}

//ファイルはあるかどうか
if(is_uploaded_file($tmp_path)){
    if(move_uploaded_file($tmp_path, $upload_dir . 
    $save_filename)){

    //DBに保存(ファイル名、ファイルパス、キャプション)
    // $result = fileSave($filename, $save_path,$caption,$username);
    


    }else{
    echo "ファイルが保存できませんでした";
    }

}else{
    echo "ファイルが選択されていません";
}
    echo"<br>";

?>

<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>file_upload</title>
      <link rel="stylesheet" href="https://unpkg.com/sakura.css/css/sakura-earthly.css" type="text/css">

</head>

<body>
    

  <h1>投稿内容の確認</h1>
    <br>


  <p>タイトル</p>
    <fieldset> 
        <?php echo "$title"?>
    </fieldset>
  <br><br>

  <p>本文</p>
    <fieldset>
        <?php echo "$text"?>
    </fieldset>
  <br><br>

  <p>サムネイル画像</p>
  <fieldset id="thumbnail">
    <img src=./<?php echo "{$save_path}" ?> style="width: 200px;" alt="">
  </fieldset>


  <form action="post_act.php" method="POST">
<input type="hidden" name="title" value="<?php echo "{$title}" ?>">
<input type="hidden" name="text" value="<?php echo "{$text}" ?>">
<input type="hidden" name="thumbnail" value="<?php echo "{$save_path}" ?>">

<button>投稿</button>

  </form>

<!-- <input type="button" value="修正" src="post.php"> -->
<a href="post.php">修正</a>


</body>

    <style>
        #thumbnail{
            width: 200px;
        }
    </style>