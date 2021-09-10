function getCsvData()
{
    var req = new XMLHttpRequest();
    req.open("get","S_MST_SP.csv", true);
    req.send(null);
    req.onload = function(){
    convertCSVtoArray( req.responseText );
    }
}

function convertCSVtoArray(str){                  // 読み込んだCSVデータが文字列として渡される
    var result = [];                              // 最終的な二次元配列を入れるための配列
    var tmp = str.split("\n");                    // 改行を区切り文字として行を要素とした配列を生成

    for(var i=0;i<tmp.length;++i){
        result[i] = tmp[i].split(',');
    }
// ticket 1 tab 1 ~ 18 ///////////////////////////////////// 
for (var i = 0; i <= 18; i++){
        if (i == 8) {
            continue;
        } else {
        imgt11 = result[i][1] + "0" + result[i][2] + ".png";
    var ticket1_0 = "<img src=\"assets/ticket/" + imgt11 + "\">";
        ticket1_0 += "<div class=\"content-product-h3 none\">" + result[i][3] + " </div>";
        ticket1_0 += "<div class=\"type none\">"+ result[i][4] +"</div>";
        ticket1_0 += "<div class=\"price none\">"+ result[i][5] +"</div>";
        document.getElementById("ticket1__"+ i).innerHTML = ticket1_0
        }
}
    return result;
}
getCsvData();
