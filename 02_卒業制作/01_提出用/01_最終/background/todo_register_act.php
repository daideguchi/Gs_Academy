<?php

include("../functions.php");

// var_dump($_POST);
// exit();

// 空欄だった時のバリデーション。後で考える3/31
// if (
//   !isset($_POST['username']) || $_POST['username'] == '' ||
//   !isset($_POST['email']) || $_POST['email'] == '' ||
//   !isset($_POST['password']) || $_POST['password'] == ''
// ) {
//   exit('paramError');
// }

$username = $_POST["username"];
$email = $_POST["email"];
$password = $_POST["password"];
$pref = $_POST["pref"];
$city = $_POST["city"];
$department = $_POST["department"];


$pdo = connect_to_db();

// var_dump($pdo);
// exit();

$sql = 'INSERT INTO users_table(id, username, email, password, is_admin, pref, city, department, is_deleted, created_at, updated_at) VALUES(NULL, :username, :email, :password, 0, :pref, :city, :department, 0, now(), now())';

$stmt = $pdo->prepare($sql);
$stmt->bindValue(':username', $username, PDO::PARAM_STR);
$stmt->bindValue(':email', $email, PDO::PARAM_STR);
$stmt->bindValue(':password', $password, PDO::PARAM_STR);
$stmt->bindValue(':pref', $pref, PDO::PARAM_STR);
$stmt->bindValue(':city', $city, PDO::PARAM_STR);
$stmt->bindValue(':department', $department, PDO::PARAM_STR);

try {
  $status = $stmt->execute();
} catch (PDOException $e) {
  echo json_encode(["sql error" => "{$e->getMessage()}"]);
  exit();
}

// header("Location:../index.php");
// exit();
?>

<!DOCTYPE html>
<html>
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>file_upload</title>
      <!-- <link rel="stylesheet" href="https://unpkg.com/sakura.css/css/sakura-earthly.css" type="text/css"> -->
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
  <link rel="canonical" href="https://getbootstrap.com/docs/5.0/examples/heroes/">
  <link rel="canonical" href="https://getbootstrap.com/docs/5.0/examples/headers/">
   <!-- Bootstrap core CSS -->
<link href="../assets/dist/css/bootstrap.min.css" rel="stylesheet">
<style>
  .bd-placeholder-img {
    font-size: 1.125rem;
    text-anchor: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
  }

  @media (min-width: 768px) {
    .bd-placeholder-img-lg {
      font-size: 3.5rem;
    }
  }
</style>

<!-- Custom styles for this template -->
<link href="heroes.css" rel="stylesheet">
<link href="headers.css" rel="stylesheet">
</head>
<body>
      <!-- ヘッダー ナビゲーションバー アイコンを入れ込む -->
      <div class="container">
              <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                <a href="index.php" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                  <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"/></svg>
                  <span class="fs-4"><img id="nav_l" src="../images/IMG_5507.PNG" alt="アイコン" style="height:50px;">Chalk up</span>
                </a>

                <!-- <ul class="nav nav-pills">
                  <li class="nav-item"><a href="#" class="nav-link active" aria-current="page">Home</a></li>
                  <li class="nav-item"><a href="#" class="nav-link">Features</a></li>
                  <li class="nav-item"><a href="#" class="nav-link">Pricing</a></li>
                  <li class="nav-item"><a href="#" class="nav-link">FAQs</a></li>
                  <li class="nav-item"><a href="#" class="nav-link">About</a></li>
                </ul> -->
              </header>
            </div>
<main>
<h1 class="acount">登録が完了しました</h1>
  <form action="todo_login_act.php" method="POST">
<input type="hidden" name="username" value="<?php echo "{$username}" ?>">
<input type="hidden" name="password" value="<?php echo "{$password}" ?>">

<br><br>

    <button type="submit" class="w-100 btn btn-lg btn-primary">トップページへ</button>
  </form>


  
  </main>
</body>
</html>

<style>
  main{

    display: flex;
            /* justify-content: center;
            text-align: center; */
            align-items: center;
            flex-direction: column;
            padding-left: 350px;
            padding-right: 350px;
  }

  .account{
    font-size: 30px;
    display: flex;
    text-align: center;
  }

  .back{
    display: flex;
    align-items: center;
  }

</style>
