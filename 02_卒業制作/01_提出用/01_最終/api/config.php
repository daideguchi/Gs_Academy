<?php
class Connect extends PDO
{
    public function __construct()
    {
        // parent::__construct("mysql:host=localhost;dbname=gsacf_d10_05", 'root','',
        parent::__construct("mysql:dbname=heroku_216b601f26418e8;charset=utf8mb4;port=3306;host=us-cdbr-east-05.cleardb.net", 'b5184191d44d54','cd70a3e5',
        array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
        $this->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $this->setAttribute(PDO::ATTR_EMULATE_PREPARES,false);
    
    }


}
?>