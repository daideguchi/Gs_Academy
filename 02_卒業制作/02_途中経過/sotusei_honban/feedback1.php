<?php
session_start();
include("functions.php");
check_session_id();

// var_dump($_SESSION);
// exit();


$feedback =feedback_select();
$username = $_SESSION["username"];

// var_dump($feedback);
// exit();



?>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

<h1>画像を一つ選んでポジティブなコメントでフィードバックしてあげましょう！
</h1>
  <?php foreach($feedback as $feed): ?>
    <div class="d-flex bd-highlight">
    <figure class="figure"> 
    <img src="<?php echo "{$feed["file_path"]}" ?>" class="container img-thumbnail" style="width:300px" alt=""> 
    </figure>
    <div class="p-2 bd-highlight">
        <?php echo h("{$feed["description"]}") ?>
  </div>
  <div class="p-2 bd-highlight">

    <a href='feedback2.php?id=<?php echo "{$feed["id"]}" ?>' class="btn btn-primary">選択</a>

    </div>
  </div>
  <?php endforeach ?>



<br>
<br>
<a href="mypage.php">戻る</a>

