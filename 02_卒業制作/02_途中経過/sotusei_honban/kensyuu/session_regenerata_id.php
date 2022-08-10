<?php
// sessionをスタートしてidを再生成しよう．
// 旧idと新idを表示しよう．
session_start();
$old_session_id = session_id();
session_regenerate_id(true); //５行目以前のidを無効にしつつ、新しいidを作成
$new_session_id = session_id(); //新しくなったidを吐き出す
echo"<p?>{$old_session_id}</p>";
echo"<p?>{$new_session_id}</p>";
exit();


