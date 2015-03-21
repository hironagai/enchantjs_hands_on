enchant();

window.onload = function() {

    var game = new Game(300,200);
    game.preload("chara1.png");
    game.onload = function() {
        var bear = new Sprite(32, 32);
        //bear.frame = 6;
        bear.image = game.assets["chara1.png"];
        game.rootScene.addChild(bear);
        game.rootScene.backgroundColor = 'black';
        bear.onenterframe = function () {
            //キー入力
            if (game.input.left){
                bear.x = bear.x - 5;
            }
            if (game.input.right){
                bear.x = bear.x + 5;
            }
            if (game.input.up){
                bear.y = bear.y - 5;
            }
            if (game.input.down){
                bear.y = bear.y + 5;
            }
        }
    };
    game.start();
};
