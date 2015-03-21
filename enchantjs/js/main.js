enchant();

window.onload = function() {
    var game = new Game(300,200);
    game.onload = function(){
        game.rootScene.backgroundColor = 'black';
    }
    game.start();
};
