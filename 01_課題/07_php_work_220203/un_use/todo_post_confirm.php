<?php
// var_dump("$_POST");
// exit();

$todo = $_POST["todo"];
$deadline = $_POST["deadline"];

?>

<!DOCTYPE html>
<html lang="ja">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>todo表示画面（POST）</title>
</head>

<body>
  <fieldset>
    <legend>todo表示画面（POST）</legend>
    <table>
      <thead>
        <tr>
          <th>todo</th>
          <th>deadline</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><?=$todo ?></td>
          <td><?=$deadline ?></td>
        </tr>
      </tbody>
    </table>
  </fieldset>
</body>

</html>