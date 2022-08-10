<?php

// 【記事欄】
// posts_table
//  .title　タイトル
//  .text　本文
//  .thumbnail　サムネイル画像
 
// .users_table
//   .username　ユーザーネーム
//   .pref　　都道府県
//   .city　　市区町村
//  .department　所属

// 【コメント欄】
// .users_table
//  .prof_img トップ画
//   .pref　　都道府県
//   .city　　市区町村
//  .department　所属

// .comment_table
//  .username　ユーザーネーム（コメントした人）
//  .comment　コメント本文


require_once __DIR__ . '/config.php';
// include("../functions.php");
class API {
    function Select(){
        $db = new Connect;
        $users = array();
        $data = $db->prepare('SELECT * FROM `users_table` JOIN `posts_table` 
        ON users_table.id = posts_table.user_id ');
        $data->execute();
        while($OutputData = $data->fetch(PDO::FETCH_ASSOC)){
            $users["投稿記事"] = array(
                 'username' => $OutputData['username'],                 
                 'pref' => $OutputData['pref'],                 
                 'city' => $OutputData['city'],                 
                 'department' => $OutputData['department'],
                 'title' => $OutputData['title'],                 
                 'text' => $OutputData['text'],                 
                 'thumbnail' => $OutputData['thumbnail'],  
            );
        }
        return json_encode($users);
    }
}

class API2 {
    function Select2(){
        $db = new Connect;
        $users2 = array();
        $data2 = $db->prepare('SELECT * FROM `users_table` JOIN `comment_table` 
        ON users_table.id = comment_table.user_id ');
        $data2->execute();
        while($OutputData = $data2->fetch(PDO::FETCH_ASSOC)){
            $users2["コメント"] = array(
                 'prof_img' => $OutputData['prof_img'],                                   
                 'username' => $OutputData['username'],
                 'pref' => $OutputData['pref'],                 
                 'city' => $OutputData['city'],                 
                 'department' => $OutputData['department'],
                 'comment' => $OutputData['comment'],
            );
        }
        return json_encode($users2);
    }
}

$API = new API;
header('Conetent-Type: application/json');
echo $API ->Select();

$API2 = new API2;
header('Conetent-Type: application/json');
echo $API2 ->Select2();
?>