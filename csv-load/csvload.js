/*----------------------------------------
*	csvload.js
*		Copyright (C) 2020 StraightApps.com, All Rights Reserved
*			October 29, 2020	初期版
*			November 6, 2020	リリース版
*-----------------------------------------*/


//----------------------------------------
//	データの出力先の用意

const outputElement = document.getElementById('output_data');


/*----------------------------------------
*	CSV ファイルを読み込む関数
*-----------------------------------------*/
function getCsvData( dataPath )
{

	//	HTTP でファイルを読み込むための XMLHttpRequest オブジェクトを生成します。
	var req = new XMLHttpRequest();

	//	ファイルを読み込みます。
	req.open("get", dataPath, true);	// アクセスするファイルを指定
	req.send(null);						// HTTP リクエストの発行（引数は省略できる模様）

	//	レスポンスが返ってきたら、データを処理します。
	//		無名関数を使わない場合 req.addEventListerner("load", onLoad);
	req.onload = function(){

		//	読み込んだ CSV データをそのまま見たい場合
		//outputElement.innerHTML = req.responseText;

		//	読み込んだ CSV データを２次元配列に変換します。
		let dat = convertCSVtoArray( req.responseText );

		//	好きなように処理します。
		procData(dat);
	}
}


//----------------------------------------
//	読み込みを実行します。

outputElement.innerHTML = "started";			// 動作状況を知るため
getCsvData( 'jsimg/csvload-attendance.csv' );	// 日本語を含む場合は Unicode 保存が必須


/*----------------------------------------
*	２次元配列になった CSV データを処理
*-----------------------------------------*/
function procData(dat)
{
	//	CSV １行目は年月情報
	let str = dat[0][0] + " の出欠情報<br/>";

	//	CSV ２行目以降は 番号,名前,１日からの出欠情報・・・
	for (let row = 1; row < dat.length; row++){

		//	１カラム目は出席番号
		str += ("No." + dat[row][0] + " : ");

		//	２カラム目は名前
		str += (dat[row][1] + "<br/>　　　");

		//	３カラム目以降は出欠状況
		//		"ok"	出席
		//		"ab"	欠席
		//		"lt"	遅刻
		//		"ea"	早退
		//		"le"	遅刻＆早退
		//		"ho"	休日
		for (let col = 2; col < dat[row].length; col++){

			switch (dat[row][col])
			{
				case 'ok':
					str += '<span class="mkPink">出席</span>';
					break;

				case 'ab':
					str += '<span class="red strong">欠席</span>';
					break;

				case 'lt':
					str += '<span class="blue">遅刻</span>';
					break;

				case 'ea':
					str += '<span class="blue">早退</span>';
					break;

				case 'le':
					str += '<span class="blue">遅刻＆早退</span>';
					break;

				case 'ho':
					str += '<span class="red sz80p">休日</span>';
					break;

				default:
					str += ('<span class="mkB">' + dat[row][col] + '</span>');
					break;
			}

			if (col < dat[row].length - 1){		// 最終項目でなければ
				str += ", ";
			}
		}
		str += "<br/>";
	}
	outputElement.innerHTML = str;
}


/*----------------------------------------
*	引数の CSV データを行単位の配列に変換
*-----------------------------------------*/
function convertCSVtoArray(csv)
{
	var result = [];						// 最終的な二次元配列を入れるための配列
	var tmp = csv.split("\r\n");			// 改行を区切り文字として行を要素とした配列を生成（Winの場合は\r必要）

	//	行ごとにカンマで区切った文字列を要素とした二次元配列を生成
	for (let i = 0; i < tmp.length; i++){
		if (tmp[i] != ""){					// 空行を除外（特にファイル末尾）
			//alert(tmp[i]);
			result[i] = tmp[i].split(',');
		}
	}

	return result;
}