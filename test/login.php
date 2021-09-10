<?php
session_start();
?>
<html>
<head>
	<title>login</title>
	<meta charset="utf-8">
</head>
<body>
<?php
	//ファイルconnection.phpを呼び出します
	require_once("lib/connection.php");
	// ユーザーがログインボタンを押したかどうかを確認すると、処理されます
	if (isset($_POST["btn_submit"])) {
		// ユーザー情報を取得する
		$username = $_POST["username"];
		$password = $_POST["password"];
		//クリーンな情報、htmlタグ、特殊文字の削除 
		//
		$username = strip_tags($username);
		$username = addslashes($username);
		$password = strip_tags($password);
		$password = addslashes($password);
		if ($username == "" || $password =="") {
			echo "ユーザー名またはパスワードを空白のままにすることはできません。";
		}else{
			$sql = "select * from users where username = '$username' and password = '$password' ";
			$query = mysqli_query($conn,$sql);
			$num_rows = mysqli_num_rows($query);
			if ($num_rows==0) {
				echo "ユーザーネームまたはパスワードが違います ！";
			}else{
				//セッションでのログイン名の保存に進みます
				$_SESSION['username'] = $username;
                // セッションに情報を保存した後、アクションを実行します
                // サイトをindex.phpにリダイレクトします
                header('Location: index.php');
			}
		}
	}
?>
	<form method="POST" action="login.php">
	<fieldset>
	    <legend>Đăng nhập</legend>
	    	<table>
	    		<tr>
	    			<td>Username</td>
	    			<td><input type="text" name="username" size="30"></td>
	    		</tr>
	    		<tr>
	    			<td>Password</td>
	    			<td><input type="password" name="password" size="30"></td>
	    		</tr>
	    		<tr>
	    			<td colspan="2" align="center"> <input name="btn_submit" type="submit" value="Đăng nhập"></td>
	    		</tr>
	    	</table>
  </fieldset>
  </form>
</body>
</html>