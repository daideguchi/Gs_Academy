<?php
session_start();
include("functions.php");
check_session_id();

$files = getAllFile();
$userdata = userinfo();
$kanjoudata = kanjou();



// var_dump($kanjoudata);
// exit();


// var_dump($file);
// exit();

?>

<!DOCTYPE html>
<html lang="ja">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
  <title>DB連携型todoリスト（一覧画面）</title>
</head>

<body>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">マイページ</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
    <h1>ようこそ、<?=  $_SESSION["username"]?>さん</h1>

</nav>


  <div class="container">
    
 <?php foreach($userdata as $user): ?>
  <div class="row row-cols-auto">
   <div class="col">なりたい自分 :</div>
   <div class="col"><?php echo h("{$user["naritai"]}") ?></div>
 </div>
 <div class="w-100"></div>
   
 <div class="row row-cols-auto">
  <div class="col">目先の目標 :</div>
  <div class="col"><?php echo h("{$user["mokuhyou"]}") ?></div>
  <?php endforeach ?>
 </div>
 </div>

 <a href="./setting/setting.php" class="btn btn-outline-info btn-sm">設定する</a>
  <a href="kanjou.php" class="btn btn-outline-info btn-sm">感情分析</a>

<br>

</script>


  <!-- <h2>あなたのトータルスコア</h2> -->

    <br>
        <a href="work.php" class="btn btn-success">ワークを開始する</a>
    <br>
    <a href="todo_logout.php">ログアウトする</a>
    <br>
    <br>

    <h2>登録されたアルバム</h2>
<div>
  <?php foreach($files as $file): ?>
    <div><img src="<?php echo "{$file["file_path"]}" ?>" class="img-thumbnail" alt=""> 
    <?php $output1 ?>
    <a href='todo_delete.php?id=<?php echo "{$file["id"]}" ?>'>delete</a>
    <div><p>画像の説明：<?php echo h("{$file["description"]}") ?></p></div>
    <p>フィードバック：<?php echo h("{$file["feedback"]}")?></p>
    </div>

  <?php endforeach ?>
     <? 
    // var_dump($file);
    // exit();?>

</div>

  <!-- <a href="./react_native/app/sotusei/web-build/index.html">test</a> -->

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
      width: 300px;
      height: 300px;
}

/* div1{
  display: flex;
} */