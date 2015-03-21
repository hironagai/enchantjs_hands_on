var WIDTH = 300;
var HEIGHT = 200;
var CHARA_IMAGE = "chara1.png";
var BEAR_S = 32;
var MOVE = 5;
var ITEM_IMAGE = "icon0.png";
var ITEM_S = 16;

var game;
var bear;

enchant();

window.onload = function() {

    game = new Game(WIDTH,HEIGHT);
    game.preload(CHARA_IMAGE);
    game.preload(ITEM_IMAGE);
    game.onload = function() {
        //背景色を黒にする
        game.rootScene.backgroundColor = 'black';

        //主人公作成
        bear = createBear();
        game.rootScene.addChild(bear);

        //コイン作成
        var coin = new Sprite(ITEM_S,ITEM_S);
        coin.image = game.assets[ITEM_IMAGE];
        coin.frame = 14;
        coin.x = randInt(5, WIDTH-5);
        coin.y = randInt(5, HEIGHT-5);
        reflection(coin,4,function(){});
        game.rootScene.addChild(coin);


    };
    game.start();
};

//*********************************************
// 主人公生成
//*********************************************
var createBear = function(){

    var bear = new Sprite(BEAR_S, BEAR_S);
    bear.image = game.assets[CHARA_IMAGE];
    //キャラクタの初期位置
    bear.moveTo((WIDTH - BEAR_S) / 2, (HEIGHT - BEAR_S) / 2);

    bear.onenterframe = function () {
        //キー入力
        if (game.input.left){
            bear.x = (bear.x - MOVE < 0) ? 0 : bear.x - MOVE;
        }
        if (game.input.right){
            bear.x = (bear.x + MOVE > WIDTH - BEAR_S) ? WIDTH-BEAR_S : bear.x + MOVE;
        }
        if (game.input.up){
            bear.y = (bear.y - MOVE < 0) ? 0 : bear.y - MOVE;
        }
        if (game.input.down){
            bear.y = (bear.y + MOVE > HEIGHT - BEAR_S) ? HEIGHT - BEAR_S : bear.y + MOVE;
        }
    }
    return bear;
}


//*********************************************
//ランダム数生成
//*********************************************
var randInt = function(a,b){
    var range = b - a;
    var rand = Math.floor(Math.random() * (range+1));
    return (a + rand);
};

//*********************************************
//反射アクション・当たり判定の追加
//*********************************************
var reflection = function(target,speed, hitFunc){
    //ターゲットの移動スピード
    target.vx = randInt(-speed,speed);
    target.vy = randInt(-speed,speed);
    target.onenterframe = function(){
        this.x += this.vx;
        this.y += this.vy;
        //反射アクション
        if ((this.x <= 0) || (this.x >= WIDTH - ITEM_S)){
            //左右にぶつかった時
            this.vx *= -1;
            this.vy = randInt(-speed, speed);
        }else if ((this.y <= 0) || (this.y >= HEIGHT - ITEM_S)) {
            //上下にぶつかった時
            this.vx = randInt(-speed, speed);
            this.vy *= -1;
        }
        //当たり判定
        if (this.within(bear,(bear.width + this.width) / 2)){
            hitFunc();
        }
    };
};
