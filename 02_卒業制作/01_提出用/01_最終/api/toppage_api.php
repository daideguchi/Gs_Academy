<?php

// .posts_table
//    .title　タイトル
//    .text　本文
//    .thumbnail　サムネイル画像

// .users_table
//   .username　ユーザーネーム
//   .pref　都道府県
//   .city　市町村
//  .department　所属


require_once __DIR__ . '/config.php';
// include("../functions.php");
class API {
    function Select(){
        $db = new Connect;
        $users = array();
        $data = $db->prepare('SELECT * FROM `users_table` JOIN `posts_table` 
ON users_table.id = posts_table.user_id');
        $data->execute();

        while($OutputData = $data->fetch(PDO::FETCH_ASSOC)){

            // $users = array(
            $users[$OutputData['post_id']] = array(
                 'user_id' => $OutputData['id'],
                 'username' => $OutputData['username'],
                 'pref' => $OutputData['pref'],                 
                 'city' => $OutputData['city'],                 
                 'department' => $OutputData['department'],   
                 'title' => $OutputData['title'],                 
                 'text' => $OutputData['text'],                 
                 'thumbnail' => $OutputData['thumbnail'], 
                 'prof_img' => $OutputData['prof_img'],   
                 'created_at' => $OutputData['created_at'],  
                 'good' => $OutputData['good'],   
                 'comment' => $OutputData['comment']                          
            );
        }
        return json_encode($users);
    }
}

// class API2 {
//     function Select2(){
//         $db = new Connect;
//         $users2 = array();
//         $sql_comment = "SELECT * FROM comment_table WHERE post_id=$post_id";
//         $comment_count = $db->query($sql_comment);
//         $count = $comment_count->fetchColumn();
//         while($OutputData = $data2->fetch(PDO::FETCH_ASSOC)){
//             $users2["コメント件数"] = array(
//                  'comment_count' => $OutputData['title'],                 
//             );
//         }
//         return json_encode($users2);
//     }
// }


// $sql_comment = "SELECT * FROM comment_table WHERE post_id=$post_id";
// $comment_count = $pdo->query($sql_comment);
// $count = $comment_count->fetchColumn();

// var_dump($stmt_comment);
// exit();


$API = new API;
header('Conetent-Type: application/json');
echo $API ->Select();

// $API2 = new API2;
// header('Conetent-Type: application/json');
// echo $API2 ->Select2();
// ?>