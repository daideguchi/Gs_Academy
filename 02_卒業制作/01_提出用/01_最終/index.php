
<!-- ログイン画面 -->

<!DOCTYPE html>
<html lang="ja">

<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <link rel="icon" href="images/favicon.ico">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
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


  <title>ログイン | Chalk up</title>
</head>

<body>

            <!-- ヘッダー ナビゲーションバー アイコンを入れ込む -->
            <div class="container">
              <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                <a href="index.php" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                  <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"/></svg>
                  <span class="fs-4"><img id="nav_l" src="images/IMG_5507.PNG" alt="アイコン" style="height:50px;">Chalk up</span>
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

          <!-- タイトル -->
        <div class="container col-xl-10 col-xxl-8 px-4 py-5">
            <div class="row align-items-center g-lg-5 py-5">

              <div class="col-lg-7 text-center text-lg-start">
                  <h1 class="display-4 fw-bold lh-1 mb-3"><img id="nav_l" src="images/IMG_5507.PNG" alt="アイコン" style="height:80px;">Chalk up</h1>
                  <p class="col-lg-10 fs-4">- チョークアップ -</p>
                  <br>
                

                  <p class="col-lg-10 fs-4">自治体で働く人のための</p>
                  <p class="col-lg-10 fs-4">ナレッジ共有SNS</p>
<br>
                  <p class="col-lg-10 fs-4">その知識と経験、活用しませんか？</p>
              </div>

            <!-- ログインフォーム -->

                <div class="col-md-10 mx-auto col-lg-5">
                  <form class="p-4 p-md-5 border rounded-3 bg-light" action="./background/todo_login_act.php" method="POST">

                    <!-- ユーザーネームテキストフィールド -->
                    <div class="form-floating mb-3">
                      <input type="text" class="form-control" id="floatingInput" placeholder="ユーザーネーム" name="username">
                      <label for="floatingInput">ユーザーネーム</label>
                    </div>

                    <!-- パスワードテキストフィールド -->
                    <div class="form-floating mb-3">
                      <input type="password" class="form-control" id="floatingPassword" placeholder="Password" name="password">
                      <label for="floatingPassword">パスワード</label>
                    </div>

                    <!-- 忘れた方はこちら -->
                    <!-- <div class="checkbox mb-3">
                      <label>
                        <input type="checkbox" value="remember-me"> Remember me
                      </label>
                    </div> -->

                    <!-- ログインボタン 色を＃9FD9F6に変える-->
                    <button class="w-100 btn btn-lg btn-primary" type="submit">ログイン</button>
                    <hr class="my-4">

                    <!-- 新規会員登録へ遷移 色を黒に変える-->
                    <small class="text-muted"><a href="./register/register1.php">新規会員登録はこちら</a></small>
                  </form>
                </div>
          </div>
        </div>
          
      </main>
    </body>
</html>

