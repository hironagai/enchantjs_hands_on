var WIDTH = 300;
var HEIGHT = 200;
var CHARA_IMAGE = "chara1.png";
var BEAR_S = 32;
var MOVE = 5;

var game;

enchant();

window.onload = function() {

    game = new Game(WIDTH,HEIGHT);
    game.preload(CHARA_IMAGE);
    game.onload = function() {

        game.rootScene.backgroundColor = 'black';
        var bear = createBear();
        game.rootScene.addChild(bear);

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
