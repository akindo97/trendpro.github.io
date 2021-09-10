<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>めがひらスキー場</title>
    <link rel="shortcut icon" type="image/png" href="#"/>
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
          <div class="longin-btn"><?php
session_start();
//ユーザーがログインしているかどうかを確認します
if (!isset($_SESSION['username'])) {
	 header('chua dang nhap');
}
?>
<?php echo $_SESSION['username'];  ?></div>
          </a>
    
          <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
              <li class="nav-item">
                <a class="nav-link active" href="./register.PHP">新規登録 <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">登録情報修正</a>
              </li>
                </ul>
          </div>
        </nav>
        <script type="text/javascript" >
            include("header.html");
          </script>
<!-- メッセーエリア -->
<div class="mess">
    none
</div>
            <!-- Tab items -->
      <div class="tabs justify-content-center">
        <div class="tab-item active">時間券</div>
        <div class="tab-item">回数券</div>
        <div class="tab-item">入場券</div>
        <div class="line"></div>
      </div>      
    </header>
<div class="ttt">
<!-- Tab content -->
<div class="tab-content">
  <div class="tab-pane active">
    <div class="contindex">※入場料や消費税は含まれた金額になります。</div>
    <div class="contindex2">時間はゲートを通過してからスタートです。</div>
    <!--table 1-->
<div class="ken">
	<table border="0">        
        <tr>
            <td width="50%" height="120px">
                <a href="#"><img src="./assets/ticket/9huors.PNG" alt="ticket"></a>
</td>
            <td width="50%" height="120px">
                <a href="#"><img src="./assets/ticket/9chaild.PNG" alt="ticket"></a>        
            </td></tr>			       
	</table>
</div>
    <!--table 2-->
    <div class="ken">
        <table border="0">        
            <tr>
                <td width="50%" height="120px">
                    <a href="#"><img src="./assets/ticket/6huors.PNG" alt="ticket"></a>
    </td>
                <td width="50%" height="120px">
                    <a href="#"><img src="./assets/ticket/6chaild.PNG" alt="ticket"></a>        
                </td></tr>            	       
        </table>
    </div>
    <!--table 3-->
    <div class="ken">
        <table border="0">        
            <tr>
                <td width="50%" height="120px">
                    <a href="#"><img src="./assets/ticket/4huors.PNG" alt="ticket"></a>
    </td>
                <td width="50%" height="120px">
                    <a href="#"><img src="./assets/ticket/4chaild.PNG" alt="ticket"></a>        
                </td></tr>      
        </table>
    </div>
<!--table 4-->
    <div class="ken">
        <table border="0">        
            <tr>
                <td width="50%" height="120px">
                    <a href="#"><img src="./assets/ticket/3huors.PNG" alt="ticket"></a>
    </td>
                <td width="50%" height="120px">
                    <a href="#"><img src="./assets/ticket/none.PNG" alt="ticket"></a>        
                </td></tr>           	       
        </table>
    </div>
    <!--table 5-->
    <div class="ken">
        <table border="0">        
            <tr>
                <td width="50%" height="120px">
                        </td>
                <td width="50%" height="120px">
                    <a href="#"><img src="./assets/ticket/weekday.PNG" alt="ticket"></a>        
                </td></tr>           	       
        </table>
    </div>
  </div>
  <div class="tab-pane">
    <div class="cont">※入場料や消費税は含まれた金額になります。</div>
    <!--table 1-->
<div class="ken">
	<table border="0">        
        <tr>
            <td width="50%" height="120px">
                <a href="#"><img src="./assets/ticket/1coupons.PNG" alt="ticket"></a>
</td>
            <td width="50%" height="120px">
                <a href="#"><img src="./assets/ticket/3coupons.PNG" alt="ticket"></a>        
            </td></tr>     
	</table></div>
	<!--table 2--> 
<div class="ken">
	<table border="0">        
        <tr>
            <td width="50%" height="120px">
                <a href="#"><img src="./assets/ticket/4coupons.PNG" alt="ticket"></a>
</td>
            <td width="50%" height="120px">
                <a href="#"><img src="./assets/ticket/6coupons.PNG" alt="ticket"></a>        
            </td></tr>
			      
	</table></div>
<div class="contb">
    回数の追加をされる場合は、リフト券を購入後もしくは使用後にインフォメーションセンターまでお持ちください。

</div>
  </div>
  <div class="tab-pane">
    <div class="cont">※入場料や消費税は含まれた金額になります。</div>
    <!--table 1-->
<div class="ken">
	<table border="0">        
        <tr>
            <td width="50%" height="120px">
                <a href="#"><img src="./assets/ticket/inputcoupons.PNG" alt="ticket"></a>
</td>
            <td width="50%" height="120px">
                        
            </td></tr>
	</table>
 </div>
  <div class="contb">
    リフト券を購入している人は不要です。
</div>
  </div>
  </div></div>
      <script src="./javascript/tapui.js"></script>

<!------------------買い物鹿カゴ-------------------->

<div class="cart">
    none
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
