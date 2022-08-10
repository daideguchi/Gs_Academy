<?php
session_start();
include("../functions.php");
check_session_id();

$id = $_SESSION["id"];

// var_dump($id);
// exit();

$introduction = $_POST["introduction"];
$prof_img = $_POST["prof_img"];
$screen_img = $_POST["screen_img"];

// var_dump($thumbnail);
// exit();
// var_dump($_FILES["prof_img"]);
// exit();


// ファイル関連の取得
$file_p = $_FILES["prof_img"];
$filename_prof = basename($file_p["name"]);
$tmp_path_prof = $file_p["tmp_name"];
$file_err_prof = $file_p["prof_img"]["error"];
$filesize_prof = $file_p["prof_img"]["size"];
$upload_dir_prof = "images/";
$save_filename_prof = date("YmdHis") . $filename_prof;
$save_path_prof = $upload_dir_prof . $save_filename_prof;

// var_dump($save_path_prof);
// exit();

//ファイルのバリデーション
//ファイルサイズが１MB以内か
if($filesize_prof > 1048576 || $file_err == 2){
    echo "ファイルは１MB未満にしてください";
        echo"<br>";
}

//拡張子は画像形式か
$allow_ext = array("jpg","jpeg","png");
$file_ext_prof = pathinfo($filename_prof, PATHINFO_EXTENSION);

if(!in_array(strtolower($file_ext_prof),$allow_ext)){
    echo "画像ファイルを添付してください";
    echo"<br>";
}

//ファイルはあるかどうか
if(is_uploaded_file($tmp_path_prof)){
    if(move_uploaded_file($tmp_path_prof, $upload_dir_prof . 
    $save_filename_prof)){

    //DBに保存(ファイル名、ファイルパス、キャプション)
    // $result = fileSave($filename, $save_path,$caption,$username);

    }else{
    echo "ファイルが保存できませんでした";
    }
}else{
    echo "ファイルが選択されていません";
}
    echo"<br>";



// ファイル関連の取得
$file_s = $_FILES["screen_img"];
$filename_screen = basename($file_s["name"]);
$tmp_path_screen = $file_s["tmp_name"];
$file_err_screen = $file_s["error"];
$filesize_screen = $file_s["size"];
$upload_dir_screen = "images/";
$save_filename_screen = date("YmdHis") . $filename_screen;
$save_path_screen = $upload_dir_screen . $save_filename_screen;



$pdo = connect_to_db();
$sql = "UPDATE users_table SET introduction=:introduction, prof_img=:prof_img,
 screen_img=:screen_img WHERE id=:id";

    $stmt = connect_to_db()->prepare($sql);
    $stmt->bindValue(':introduction', $introduction, PDO::PARAM_STR);
    $stmt->bindValue(':prof_img', $save_path_prof, PDO::PARAM_STR);
    $stmt->bindValue(':screen_img', $save_path_screen, PDO::PARAM_STR);
    $stmt->bindValue(':id', $id, PDO::PARAM_STR);


try {
  $status = $stmt->execute();
} catch (PDOException $e) {
  echo json_encode(["sql error" => "{$e->getMessage()}"]);
  exit();
}



//ファイルのバリデーション
//ファイルサイズが１MB以内か
if($filesize_screen > 1048576 || $file_err == 2){
    echo "ファイルは１MB未満にしてください";
        echo"<br>";
}

$file_ext_screen = pathinfo($filename_screen, PATHINFO_EXTENSION);

if(!in_array(strtolower($file_ext_screen),$allow_ext)){
    echo "画像ファイルを添付してください";
    echo"<br>";
}

//ファイルはあるかどうか
if(is_uploaded_file($tmp_path_screen)){
    if(move_uploaded_file($tmp_path_screen, $upload_dir_screen . 
    $save_filename_screen)){

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


<h1>編集が完了しました</h1>
<a href="../mypage.php">戻る</a>

