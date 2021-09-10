<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>register</title>
    <!-- import bootstrap -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
	<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    <!-- custom css -->
	<link rel="stylesheet" type="text/css" href="assets/css/style.css">
    <link rel="stylesheet" type="text/css" href="assets/css/grid.css">
    <link rel="stylesheet" href="./themify-icons/themify-icons.css">
</head>
<body>
    <header class="header">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div>
            <div class="imglogo"><a href="./index.html"><img src="./assets/images/logo.PNG" alt="anh logo"></a></div>
          </div>
    
         
          <a class="navbar-brand" href="./login.html">
            <img src="assets/images/user.PNG" alt="anh customer">
          <div class="longin-btn">ログイン</div>
          </a>
    
          <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
              <li class="nav-item">
                <a class="nav-link active" href="./register.html">新規登録 <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">登録情報修正</a>
              </li>
                </ul>
          </div>
        </nav>
    <div class="title">新規登録</div>    
    </header>
<!--  end header  -->

<div class="ttt">
<?php
		require_once("lib/connection.php");
		if (isset($_POST["btn_submit"])) {
  			//lPOSTメソッドを使用してフォームから情報を取得する
  			$username = $_POST["username"];
  			$password = $_POST["pass"];
 			 $name = $_POST["name"];
  			$email = $_POST["email"];
  			//空白のままにできないフィールドの必須条件を確認してください
			  if ($username == "" || $password == "" || $name == "" || $email == "") {
				   echo "すべての情報を入力してください";
  			}else{
  					// アカウントがすでに存在するかどうかを確認します
  					$sql="select * from users where username='$username'";
					$kt=mysqli_query($conn, $sql);

					if(mysqli_num_rows($kt)  > 0){
						echo "Tài khoản đã tồn tại";
					}else{
						//データストレージを実行する
	    				$sql = "INSERT INTO users(
	    					username,
	    					password,
	    					name,
						    email
	    					) VALUES (
	    					'$username',
	    					'$password',
						    '$name',
	    					'$email'
	    					)";
					    // tconnection.php.fileから取得した子変数を使用して$ sqlステートメントを実行します。
   						mysqli_query($conn,$sql);
				   		echo "おめでとうございます、登録に成功しました";
					}
									    
					
			  }
	}
	?>
	<form action="register.php" method="post">
		<table>
			<tr>
				<td colspan="2">Form dang ky</td>
			</tr>	
			<tr>
				<td>Username :</td>
				<td><input type="text" id="username" name="username"></td>
			</tr>
			<tr>
				<td>Password :</td>
				<td><input type="password" id="pass" name="pass"></td>
			</tr>
			<tr>
				<td>Ho Ten :</td>
				<td><input type="text" id="name" name="name"></td>
			</tr>
			<tr>
				<td>Email :</td>
				<td><input type="text" id="email" name="email"></td>
			</tr>
			<tr>
				<td colspan="2" align="center"><input type="submit" name="btn_submit" value="Dang ky"></td>
			</tr>

		</table>

    
</div>
<footer class="fooder">
    <div class="k-grid wide">
        <div class="k-row">
            <div class="k-col foo f-left"><div class="ti-home"><div class="letter">ホーム</div></div></div>
            <div class="k-col foo f-center"><div class="ti-list"><div class="letter">履歴</div></div></div>
            <div class="k-col foo f-right"><div class="ti-info-alt"><div class="letter">ガイド</div></div></div>
        </div>
    </div>
</footer>
</body>
</html>