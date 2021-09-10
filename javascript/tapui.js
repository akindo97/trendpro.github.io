const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$(".tab-item");
const panes = $$(".tab-pane");

const tabActive = $(".tab-item.active");
const line = $(".tabs .line");

line.style.left = tabActive.offsetLeft + "px";
line.style.width = tabActive.offsetWidth + "px";

tabs.forEach((tab, index) => {
  const pane = panes[index];

  tab.onclick = function () {
    $(".tab-item.active").classList.remove("active");
    $(".tab-pane.active").classList.remove("active");

    line.style.left = this.offsetLeft + "px";
    line.style.width = this.offsetWidth + "px";

    this.classList.add("active");
    pane.classList.add("active");
  };
});

// lấy class
var logo = document.getElementsByClassName("imglogo")[0];
var home = document.getElementsByClassName("ti-home")[0];
var his = document.getElementsByClassName("ti-list")[0];
var hisclass = document.getElementsByClassName("history")[0];
var infobtn = document.getElementsByClassName("ti-info-alt")[0];
var infoclass = document.getElementsByClassName("info")[0];
var menu = document.getElementsByClassName("navbar-toggler-icon")[0]
var menushow = document.getElementsByClassName("menu-show")[0];
//sự kiện
logo.onclick = function () {
  modal.style.display = "none";
  confirm.style.display = "none";
  hisclass.style.display = "none";
  infoclass.style.display = "none";
  gamenbtn.style.display = "flex";
  menushow.style.display = 'none';
  var getvalue = document.getElementsByClassName("cart-total-price")[0].innerHTML;
  //khi xóa hết vé trong giỏ hàng thì sẽ không hiện nữa
  if (getvalue == "¥"+"0") {
    hidemoney.style.display = "none";
  }else {
    hidemoney.style.display = "flex";
  }
  updateconfirm()
};
home.onclick = function () {
  modal.style.display = "none";
  confirm.style.display = "none";
  hisclass.style.display = "none";
  infoclass.style.display = "none";
  gamenbtn.style.display = "flex";
  menushow.style.display = 'none';
  var getvalue = document.getElementsByClassName("cart-total-price")[0].innerHTML;
  //khi xóa hết vé trong giỏ hàng thì sẽ không hiện nữa
  if (getvalue == "¥"+"0") {
    hidemoney.style.display = "none";
  }else {
    hidemoney.style.display = "flex";
  }
  updateconfirm()
};
his.onclick = function () {
  hisclass.style.display = "block";
  infoclass.style.display = "none";
  confirm.style.display = "none";
  modal.style.display = "none";
};
infobtn.onclick = function () {
  infoclass.style.display = "block";
  confirm.style.display = "none";
  modal.style.display = "none";
};
menu.onclick = function () {
  if (menushow.style.display == 'block') {
    menushow.style.display = 'none';
} else {
    menushow.style.display = 'block';    
}
modal.style.display = "none";
confirm.style.display = "none";
infoclass.style.display = "none";
};