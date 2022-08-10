<!DOCTYPE html>
<html lang="ja">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>todoリストログイン画面</title>
</head>

<body>
<h1>ポジティブアルバム（仮）</h1>
  <form action="todo_login_act.php" method="POST">
    <fieldset>
      <legend>サービスへログインする</legend>
      <div>
        username: <input type="text" name="username">
      </div>
      <div>
        password: <input type="password" name="password">
      </div>
      <div>
        <button>Login</button>
      </div>
      <br>
      <a href="todo_register.php">新規会員登録</a>
    </fieldset>
  </form>
 
</body>
</html>

<style>
  body{
    background-image : url(design_image/topimg.jpeg);
    background-position: center;
    background-size: cover;
    width: 50%;
    height: 800px;
  }

  div{
    justify-content: center;
    text-align: center;
      align-items: center;


  }

  fieldset{
    text-align: center;
    align-items: center;
    background-color: #f5deb3;
        margin: 0 auto;  


        }

  form{
    padding-top: 300px;
    margin-left: 500px;
    margin-right: auto;
    width: 350px;
    text-align: center;
  }

  legend{
  text-shadow: 1px 1px 2px silver;
  font-weight: bold;
    font-size: 20px;
  }