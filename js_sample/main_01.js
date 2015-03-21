//代入演算子
var x = 0;
var flg = false;
//算術演算子
x = x + 500;
x++;
x--;

//比較演算子
if (x < 200) {
    console.log("xは200より小さい");
} else if (x == 300) {
    console.log("xは300");
} else {
    console.log("xは上記以外");
}

//論理演算子
if ((x < 200) && (flg === true)) {
    console.log("xは200より小さい、かつ、flgは真");
} else if ((x == 300) || (flg === false)) {
    console.log("xは300、もしくは、flgは偽");
}
