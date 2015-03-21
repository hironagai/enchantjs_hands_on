var x = 1;

//if文
if (x == 1) {
    console.log("xは1");
} else if (x == 2) {
    console.log("xは2");
} else {
    console.log("xは上記以外");
}

//switch文
switch (x) {
case 1:
    console.log("xは1");
    break;
case 2:
    console.log("xは2");
    break;
default:
    console.log("xは上記以外");
}


//for文
for (var i = 0; i < 11; i++){
    console.log("i="+i);
}

//loop文
var i = 0;
for (;;){
    console.log("i="+i);
    if(i++ > 10){
        break;
    }
}


