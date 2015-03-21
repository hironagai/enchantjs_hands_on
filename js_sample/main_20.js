enchant();

window.onload = function() {

    var game = new Game(300,200);
    game.preload("chara1.png");
    game.onload = function() {
        var bear = new Sprite(32, 32);
        bear.image = game.assets["chara1.png"];
        game.rootScene.addChild(bear);
        game.rootScene.backgroundColor = 'black';
    };
    game.start();
};
