<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
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

            <!-- アカウント作成フォーム -->
  <main>

    <h1 class="acount">アカウント作成</h1>
            <br>

    <div class="col-md-10 mx-auto col-lg-5">
        <form class="p-4 p-md-5 border rounded-3 bg-light" action="register2.php" method="POST">

            <!-- ユーザーネーム登録 -->
            <div class="form-floating mb-3">              
                <input class="form-control" id="floatingInput" placeholder="ユーザーネーム" name="username">
                <label for="floatingInput">ユーザーネーム</label>
                <?php if (!empty($error["username"]) && $error['username'] === 'blank'): ?>
                <p class="error">＊ユーザーネームを入力してください</p>
                <?php endif ?>
            </div>

            <br>

            <!-- メールアドレス登録 -->
            <div class="form-floating mb-3">
                
                <input class="form-control"  id="floatingInput" placeholder="メールアドレス" name="email">
                <label for="floatingInput">メールアドレス</label>
                <?php if (!empty($error["email"]) && $error['email'] === 'blank'): ?>
                <p class="error">＊メールアドレスを入力してください</p>
                <?php endif ?>
            </div>

            <br>

            <!-- パスワード登録 -->
            <div class="form-floating mb-3">
               
                <input class="form-control" id="floatingInput" placeholder="パスワード" name="password">
                <label for="floatingInput">パスワード</label>
                <?php if (!empty($error["password"]) && $error['password'] === 'blank'): ?>
                    <p class="error">＊パスワードを入力してください</p>
                <?php endif ?>
            </div>
 
            <br>
            <div class="control">
                <button type="submit" class="w-100 btn btn-lg btn-primary">次へ</button>
            </div>
        </form>
        <br>
        <br>
        
        
          <small class="text-muted"><a href="../index.php">ログイン画面へ戻る</a></small>
        
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

<!-- <style>
  body{
    background-image : url(design_image/topimg.jpeg);
    background-position: center;
    background-size: cover;
    width: 50%;
    height: 800px;
  }

  div{
    justify-content: center;
    /* text-align: center; */
    align-items: center;


  }

  fieldset{
    text-align: center;
    align-items: center;
    background-color: #f5deb3;
        margin: 0 auto;  
        }

  form{

    margin-right: auto;
    width: 350px;
    text-align: center;
  }

  legend{
  text-shadow: 1px 1px 2px silver;
  font-weight: bold;
    font-size: 20px;
  } -->