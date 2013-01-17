enchant();

var picNumber = 0;

window.onload = function() {
    var game = new Game(320, 480);
    
    game.preload('http://enchantjs.com/assets/images/chara3.gif');
    
    game.onload = function() {
        var bear = new Sprite(32, 32);
        bear.y = 100;
        bear.rotation = 60;
        bear.scaleX = 5;
        bear.scaleY = 5;
        bear.image = 
            game.assets['http://enchantjs.com/assets/images/chara3.gif'];
        bear.frame = 0;
        
        bear.addEventListener(Event.ENTER_FRAME, function() {
            picNumber++;
            if (picNumber > 3) {
                picNumber = 0;
            }
            bear.frame = picNumber;
            bear.x += 2;
        });
        game.rootScene.addChild(bear);
    };
    game.start();
};