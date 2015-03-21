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
