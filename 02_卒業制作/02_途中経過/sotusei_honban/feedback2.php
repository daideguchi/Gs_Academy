<?php
session_start();
include("functions.php");
check_session_id();

// var_dump($_GET["id"]);
// exit();

$id = $_GET["id"];

$pdo = connect_to_db();
// var_dump($id);
// exit();

$sql = "SELECT * FROM file_table WHERE id=$id";
// $sql = 'UPDATE todo_table SET is_deleted = 1,cnt=0;updated_at =now() WHERE id=:id';

// var_dump($sql);
// exit();

$stmt = $pdo->prepare($sql);

// var_dump($stmt);
// exit();

try {
  $status = $stmt->execute();
} catch (PDOException $e) {
  echo json_encode(["sql error" => "{$e->getMessage()}"]);
  exit();
}
// var_dump($sql);
// exit();
foreach($stmt as $row): 
    $img = $row['file_path'];
    $d = $row['description'];
 endforeach;

//  var_dump($img);
//   var_dump($d);

// exit();

?>
 <?php 
    ?>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">


<img src=./<?php echo "{$img}"?> style="width:300px" alt="">
<img src=./<?php echo "{$save_path}" ?> alt="">
  <?php echo h("{$d}") ?>

<form action="feedback3.php" method="POST">
  <p>フィードバックコメントを入力：</p>
  <input type="text" name="feedback">
  <input type="hidden" name="id" value="<?php echo "{$id}" ?>">
<br><br><br>
<p>あなたの今の気持ちは？</p>
<input type="radio" name="sizeSelect" value="veryhappy" id="sizeSelectLarge2" checked><label for="sizeSelectLarge2"></label>
<input type="radio" name="sizeSelect" value="happy" id="sizeSelectLarge1"><label for="sizeSelectLarge1"></label>
<input type="radio" name="sizeSelect" value="medium" id="sizeSelectMedium"><label for="sizeSelectMedium"></label>
<input type="radio" name="sizeSelect" value="bad" id="sizeSelectSmall2" ><label for="sizeSelectSmall2"></label>
<input type="radio" name="sizeSelect" value="verybad" id="sizeSelectSmall1"><label for="sizeSelectSmall1"></label>

<br>
<br>

  <button>決定</button>

  </form>

  <style>
    input[type=radio]+label:before{
        content: "";
        display: inline-block;
        background-size: contain;
        width: 40px;
        height: 40px;
    }
    input[type=radio][value="veryhappy"]+label:before{
        background-image: url(./design_image/veryhappy.png);
    }
    input[type=radio][value="happy"]+label:before{
        background-image: url(./design_image/happy.png);
    }
    input[type=radio][value="medium"]+label:before{
        background-image: url(./design_image/medium.png);
    }

    input[type=radio][value="bad"]+label:before{
        background-image: url(./design_image/bad.png);
        
    }

    input[type=radio][value="verybad"]+label:before{
        background-image: url(./design_image/verybad.png);
    }

input[type=radio]:checked+label::before{
    border: 3px solid #000;
    box-sizing: border-box;
}
input[type=radio]{
    display: none;
} 

  </style>