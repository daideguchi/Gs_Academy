<?php

/*-------------------------------
	データベース
-------------------------------*/
// DB接続関数

function connect_to_db()
{
//   localhost
//   $dbn = 'mysql:dbname=gsacf_d10_05;charset=utf8mb4;port=3306;host=localhost';
//   $user = 'root';
//   $pwd = '';

  //lolipop
  // $dbn = 'mysql:dbname=LAA1351624-3m2sih;charset=utf8mb4;port=3306;host=mysql153.phy.lolipop.lan';
  // $user = 'LAA1351624';
  // $pwd = 'kdJayFzX';

//   heroku
  $dbn = 'mysql:dbname=heroku_216b601f26418e8;charset=utf8mb4;port=3306;host=us-cdbr-east-05.cleardb.net';
  $user = 'b5184191d44d54';
  $pwd = 'cd70a3e5';
  	$options = array(
		// SQL実行失敗時にはエラーコードのみ設定
		PDO::ATTR_ERRMODE => PDO::ERRMODE_SILENT,
		// デフォルトフェッチモードを連想配列形式に設定
		PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
		// バッファードクエリを使う(一度に結果セットをすべて取得し、サーバー負荷を軽減)
		// SELECTで得た結果に対してもrowCountメソッドを使えるようにする
		PDO::MYSQL_ATTR_USE_BUFFERED_QUERY => true,
	);
	// PDOオブジェクト生成（DBへ接続）
	$dbh = new PDO($dbn, $user, $pwd, $options);
	return $dbh;

  try {
    return new PDO($dbn, $user, $pwd);
  } catch (PDOException $e) {
    echo json_encode(["db error" => "{$e->getMessage()}"]);
    exit();
  }
}



// ログイン状態のチェック関数
function check_session_id()
{
  if (!isset($_SESSION["session_id"]) ||$_SESSION["session_id"] != session_id()) {
    header('Location:../index.php');
    exit();
  } else {

   //ログインがちゃんとされていれば一時idを更新する
    // session_regenerate_id(true);
    // $_SESSION["session_id"] = session_id();
  }
}


/*-------------------------------
	デバッグ関数
-------------------------------*/
// デバッグフラグ
$debug_flg = true;
// デバッグログ関数
function debug($str){
	global $debug_flg;
	if(!empty($debug_flg)){
		error_log('デバッグ：'.$str);
	}
}

/*-------------------------------
	定数
-------------------------------*/
// エラーメッセージ
define('MSG01', '入力必須です');
define('MSG02', '半角英数字で入力してください');
define('MSG03', 'パスワード(再入力)が合っていません');
define('MSG04', '文字以上で入力してください');
define('MSG05', 'E-mailの形式で入力してください');
define('MSG06', '文字以内で入力してください');
define('MSG07', 'エラーが発生しました。しばらく経ってからやり直してください');
define('MSG08', 'ユーザー名またはパスワードが違います');
define('MSG09', 'そのEmailは既に登録されています');
define('MSG10', '現在のパスワードが間違っています');
define('MSG11', '現在のパスワードと同じです');
define('MSG12', '文字で入力してください');
define('MSG13', '正しくありません');
define('MSG14', '有効期限が切れています');
// 成功時メッセージ
define('SUC01', '投稿しました');
define('SUC02', 'プロフィールを変更しました');
define('SUC03', 'パスワードを変更しました');
define('SUC04', 'メールを送信しました、ご確認ください');
define('SUC05', '削除しました');
define('SUC06', '新しいパスワードでログインしてください');

/*-------------------------------
	バリデーションチェック
-------------------------------*/
// 未入力チェック
function validRequired($str, $key){
	if($str === ''){
		global $err_msg;
		$err_msg[$key] = MSG01;
	}
}
// 最大文字数チェック
function validMaxLen($str, $key, $max = 200){
	$str = str_replace("\r\n", "", $str); //改行を削除
	if(mb_strlen($str) > $max){
		global $err_msg;
		$err_msg[$key] = $max.MSG06;
	}
}
// 最小文字数チェック
function validMinLen($str, $key, $min = 6){
	if(mb_strlen($str) < $min){
		global $err_msg;
		$err_msg[$key] = $min.MSG04;
	}
}
// email形式チェック
function validEmail($str, $key){
	if(!preg_match("/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/", $str)){
		global $err_msg;
		$err_msg[$key] = MSG05;
	}
}


// 半角英数字チェック
function validHalf($str, $key){
	if(!preg_match("/^[a-zA-Z0-9]+$/", $str)){
		global $err_msg;
		$err_msg[$key] = MSG02;
	}
}
// 同値チェック
function validMatch($str1, $str2, $key){
	if($str1 !== $str2){
		global $err_msg;
		$err_msg[$key] = MSG03;
	}
}
// 固定長チェック
function validLength($str, $key, $len = 8){
	if(mb_strlen($str) !== $len){
		global $err_msg;
		$err_msg[$key] = $len . MSG12;
	}
}
// パスワードチェック
function validPass($str, $key){
	// 半角英数字チェック
	validHalf($str, $key);
	// 最小文字数チェック
	validMinLen($str, $key);
	// 最大文字数チェック
	validMaxLen($str, $key);
}
// エラーメッセージ表示
function getErrMsg($key){
	global $err_msg;
	if(!empty($err_msg[$key])){
		echo $err_msg[$key];
	}
}



// ファイルデータの保存
// @param string $filename ファイル名
// @param string $save_path 保存先のパス
// @param string $caption 投稿の説明
// @return bool $result

function fileSave($filename, $save_path,$caption,$username){
  $result = False;

  $sql = "INSERT INTO file_table (file_name, file_path, description ,username) VALUE(?,?,?,?)";

  try{
    $stmt = connect_to_db()->prepare($sql);
    $stmt->bindValue(1,$filename);
    $stmt->bindValue(2,$save_path);
    $stmt->bindValue(3,$caption);
    $stmt->bindValue(4,$username);

    $result = $stmt->execute();
    return $result;
  }catch(\Exception $e){
    echo ($e->getMessage());
    return $result;
  }

}



/**
 * ファイルデータの取得
* @return array $fileData
*/
// var_dump($_SESSION["username"]);
// exit();

//お気に入り登録かついいねの多い順に表示させる３・２８未実装
function getAllpost(){

$sql = "SELECT * FROM `users_table` JOIN `posts_table` 
ON users_table.id = posts_table.user_id";

 $allpostData = connect_to_db()->query($sql);
// var_dump($fileData);
// exit();

 return $allpostData;

}


//idをキーにした方が良い
function getpost(){
$id = $_SESSION["id"];

 $sql = "SELECT * FROM `posts_table` WHERE `user_id`= '$id'";


 $postData = connect_to_db()->query($sql);


 return $postData;


}

function userinfo(){
  $id = $_SESSION["id"];

 $sql = "SELECT * FROM `users_table` WHERE `id`= '$id'";

 $userdata = connect_to_db()->query($sql);

 return $userdata;

}


function feedback_select(){

    $username = $_SESSION["username"];
//  var_dump($username);
//  exit();


  $sql = "SELECT * FROM `file_table` WHERE username <> '$username' AND feedback IS NULL AND koukai = 1";

//  var_dump($sql);
//  exit();
 $feedback_select = connect_to_db()->query($sql);

 return $feedback_select;

//  var_dump($feedback_select);
//  exit();

}


// function kanjou(){
//   $username = $_SESSION["username"];

//  $sql = "SELECT * FROM `like_table` WHERE `username`= '$username'";


//  $kanjoudata = connect_to_db()->query($sql);
// // var_dump($fileData);
// // exit();

//  return $kanjoudata;

// }


function h($s){
   return htmlspecialchars($s, ENT_QUOTES, "UTF-8");
}


function post(){
  $sql = "SELECT * FROM `like_table`";
  $posts = connect_to_db()->query($sql);
  return $posts;
}


function question_all(){

$sql = "SELECT * FROM `question_table` JOIN `users_table` 
ON question_table.user_id = users_table.id";

 $question_all = connect_to_db()->query($sql);
// var_dump($fileData);
// exit();

 return $question_all;

}

// SQL実行関数
function queryPost($dbh, $sql, $data){
	// クエリ作成
	$stmt = $dbh->prepare($sql);
	// SQL文を実行
	if(!$stmt->execute($data)){
		debug('クエリ失敗しました。');
		debug('失敗したSQL：'.print_r($stmt,true));
		$err_msg['common'] = MSG07;
		return 0;
	}
	debug('クエリ成功');
	return $stmt;
}

function getGood($p_id){
	debug(' いいねを取得します');
	try {
		$dbh = connect_to_db();
		$sql = 'SELECT * FROM good WHERE post_id = :p_id';
		$data = array(':p_id' => $p_id);
		// クエリ実行
		$stmt = queryPost($dbh, $sql, $data);

		if($stmt){
			return $stmt->fetchAll();
		}else{
			return false;
		}
	} catch (Exception $e) {
		error_log('エラー発生：'.$e->getMessage());
	}
}
function isGood($u_id, $p_id){
	debug('いいねした情報があるか確認');
	debug('ユーザーID'.$u_id);
	debug('投稿ID：'.$p_id);

	try {
		$dbh = connect_to_db();
		$sql = 'SELECT * FROM good WHERE post_id = :p_id AND user_id = :u_id';
		$data = array(':u_id' => $u_id, ':p_id' => $p_id);
		// クエリ実行
		$stmt = queryPost($dbh, $sql, $data);

		if($stmt->rowCount()){
			debug('お気に入りです');
			return true;
		}else{
			debug('特に気に入ってません');
			return false;
		}

	} catch (Exception $e) {
		error_log('エラー発生:' . $e->getMessage());
	}
}

function sanitize($str){
	return htmlspecialchars($str,ENT_QUOTES);
}

function topgood(){
$id = $_SESSION["id"];

$sql = "SELECT COUNT(*) FROM good WHERE `user_id`='$id'";

 $topgood = connect_to_db()->query($sql);
// var_dump($fileData);
// exit();

 return $topgood;
}


function good_total(){
$id = $_SESSION["id"];

$sql = "SELECT SUM((good)) FROM (posts_table) WHERE `user_id`=$id";
$good_total = connect_to_db()->query($sql);
return $good_total;

}

function comment_total(){
$id = $_SESSION["id"];

$sql = "SELECT SUM((comment)) FROM (posts_table) WHERE `user_id`=$id";
$comment_total = connect_to_db()->query($sql);
return $comment_total;

}

//質問したトータル数
function question_total(){
$id = $_SESSION["id"];

$sql = "SELECT COUNT(*) FROM question_table WHERE `user_id`='$id'";

 $question_total = connect_to_db()->query($sql);
// var_dump($fileData);
// exit();

 return $question_total;
}

