<?php
session_start();
include("functions.php");
check_session_id();

// var_dump($_POST);
// exit();
// var_dump($_SESSION["username"]);
// exit();

// $file = $_FILES["img"];


// var_dump($_FILES);
// exit();
$username = $_SESSION["username"];
// ファイル関連の取得
$file = $_FILES["img"];
$filename = basename($file["name"]);
$tmp_path = $file["tmp_name"];
$file_err = $file["error"];
$filesize = $file["size"];
// $caption = $_POST["comment"];
$upload_dir = "images/";
// $upload_dir = "/Applications/XAMPP/xamppfiles/htdocs/gs/sotusei_4/images/";

$save_filename = date("YmdHis") . $filename;
$save_path = $upload_dir . $save_filename;

// var_dump($save_filename);
// exit();

// キャプションの取得
$caption = filter_input(INPUT_POST, "caption", FILTER_SANITIZE_SPECIAL_CHARS);

//キャプションのバリデーション
//未入力
// if(empty($caption)){
//     echo "キャプションを入力してください";
//         echo"<br>";

// }

// if(strlen($caption)>140){
//     echo"キャプションは140文字以内で入力してください";
// }

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
    // echo $filename . "を". $upload_dir . "にアップしました";
    // $fileData = array($filename, $save_path,$caption);
    //DBに保存(ファイル名、ファイルパス、キャプション)
    $result = fileSave($filename, $save_path,$caption,$username);
    
    // if($result){
    //     // echo "データベースに保存しました";
    // }else{
    //     // echo "データベースへの保存が失敗しました";
    // }

    }else{
    echo "ファイルが保存できませんでした";
    }

}else{
    echo "ファイルが選択されていません";
}
    echo"<br>";

?>

  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">


<figure class="figure">
  <img src=./<?php echo "{$save_path}" ?> class="figure-img img-fluid rounded" alt="">
  </figure>

  <p>この画像を公開しますか？</p>
  <p>※公開すれば、誰かからフィードバックがもらえます</p>

  <br><br>
  <form action="koukai_act.php" method="POST">
<button type="submit" name="yes" value="1">公開する</button>
<button type="submit" name="no" value="0">公開しない</button>
<input type="hidden" name="save" value="<?php echo "{$save_path}" ?>">
  </form>
<a href="mypage.php">戻る</a>
<p><?php $_SESSION["username"]?></p>

