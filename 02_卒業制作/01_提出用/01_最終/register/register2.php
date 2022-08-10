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
//   exit('全て必須項目です');
//     echo '<a href="../register1.php">新規登録画面へ</a>';

// }
// 次のPOSTで値を渡すため、一旦変数に入れる
$username = $_POST["username"];
$email = $_POST["email"];
$password = $_POST["password"];


$pdo = connect_to_db();

// var_dump($pdo);
// exit();

$sql = 'SELECT COUNT(*) FROM users_table WHERE email=:email';



$stmt = $pdo->prepare($sql);
$stmt->bindValue(':email', $email, PDO::PARAM_STR);

try {
  $status = $stmt->execute();
} catch (PDOException $e) {
  echo json_encode(["sql error" => "{$e->getMessage()}"]);
  exit();
}

if ($stmt->fetchColumn() > 0) {
  echo '<p>このメールアドレスは既に登録されています．</p>';
  echo '<a href="register1.php">戻る</a>';
  exit();
}

?>


<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <!-- <link rel="stylesheet" href="https://unpkg.com/sakura.css/css/sakura-earthly.css" type="text/css"> -->
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

  <title>アカウント作成</title>
</head>
<body>

  <!-- ヘッダー ナビゲーションバー アイコンを入れ込む -->
  <div class="container">
              <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                <a href="../index.php" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
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


          <h1 class="acount">所属情報を入力</h1>
            <br>

    <div class="col-md-10 mx-auto col-lg-5">
        <form class="p-4 p-md-5 border rounded-3 bg-light" action="../background/todo_register_act.php" method="POST">
                
            <!-- 都道府県 -->
            <div class="control">
                <label for="pref">都道府県</label>
                <select name="pref">
                    <option value="">選択してください</option>
                    <option value="北海道">北海道</option>
                    <option value="青森県">青森県</option>
                    <option value="岩手県">岩手県</option>
                    <option value="宮城県">宮城県</option>
                    <option value="秋田県">秋田県</option>
                    <option value="山形県">山形県</option>
                    <option value="福島県">福島県</option>
                    <option value="茨城県">茨城県</option>
                    <option value="栃木県">栃木県</option>
                    <option value="群馬県">群馬県</option>
                    <option value="埼玉県">埼玉県</option>
                    <option value="千葉県">千葉県</option>
                    <option value="東京都" selected>東京都</option>
                    <option value="神奈川県">神奈川県</option>
                    <option value="新潟県">新潟県</option>
                    <option value="富山県">富山県</option>
                    <option value="石川県">石川県</option>
                    <option value="福井県">福井県</option>
                    <option value="山梨県">山梨県</option>
                    <option value="長野県">長野県</option>
                    <option value="岐阜県">岐阜県</option>
                    <option value="静岡県">静岡県</option>
                    <option value="愛知県">愛知県</option>
                    <option value="三重県">三重県</option>
                    <option value="滋賀県">滋賀県</option>
                    <option value="京都府">京都府</option>
                    <option value="大阪府">大阪府</option>
                    <option value="兵庫県">兵庫県</option>
                    <option value="奈良県">奈良県</option>
                    <option value="和歌山県">和歌山県</option>
                    <option value="鳥取県">鳥取県</option>
                    <option value="島根県">島根県</option>
                    <option value="岡山県">岡山県</option>
                    <option value="広島県">広島県</option>
                    <option value="山口県">山口県</option>
                    <option value="徳島県">徳島県</option>
                    <option value="香川県">香川県</option>
                    <option value="愛媛県">愛媛県</option>
                    <option value="高知県">高知県</option>
                    <option value="福岡県">福岡県</option>
                    <option value="佐賀県">佐賀県</option>
                    <option value="長崎県">長崎県</option>
                    <option value="熊本県">熊本県</option>
                    <option value="大分県">大分県</option>
                    <option value="宮崎県">宮崎県</option>
                    <option value="鹿児島県">鹿児島県</option>
                    <option value="沖縄県">沖縄県</option>
                    </select>
            </div>

                <br>

            <!-- 市町村 -->
            <div class="form-floating mb-3">
                
                <input class="form-control"  id="floatingInput" placeholder="市町村" name="city">
                <label for="floatingInput">市町村</label>
            </div>

                <br>

            <!-- 部署 -->
            <div class="form-floating mb-3">
                <input class="form-control" id="floatingInput" placeholder="部署" name="department">
                <label for="floatingInput">部署</label>
            </div>

                <br>
                <!-- POSTされたユーザーネーム・メールアドレス・パスワードをさらにPOSTするために設置 -->
                <input type="hidden" name="username" value="<?php echo "{$username}" ?>">
                <input type="hidden" name="email" value="<?php echo "{$email}" ?>">
                <input type="hidden" name="password" value="<?php echo "{$password}" ?>">


            <div class="control">
                <button type="submit" class="w-100 btn btn-lg btn-primary">登録</button>
            </div>
        </form>

        <small class="text-muted"><a href="register1.php">戻る</a></small>

    </div>

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