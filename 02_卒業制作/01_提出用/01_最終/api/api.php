<?php
require_once __DIR__ . '/config.php';
// include("../functions.php");
class API {
    function Select(){
        $db = new Connect;
        $users = array();
        $data = $db->prepare('SELECT * FROM users_table ORDER BY id');
        $data->execute();
        while($OutputData = $data->fetch(PDO::FETCH_ASSOC)){
            $users = array(
                 'id' => $OutputData['id'],
                 'username' => $OutputData['username'],
                 'email' => $OutputData['email'],
                 'password' => $OutputData['password'],

            );
        }
        return json_encode($users);
    }
}

$API = new API;
header('Conetent-Type: application/json');
echo $API ->Select();
?>