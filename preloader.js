Game.Preloader = function(game) {
    
    this.preloadBar = null;
};

Game.Preloader.prototype = {
    
    preload:function() {
        
        
        this.preloadBar = this.add.sprite(this.world.centerX,this.world.centerY,'preloadBar');
        
        this.preloadBar.anchor.setTo(0.5,0.5);
        
        this.time.advancedTiming = true;
        
        this.load.setPreloadSprite(this.preloadBar);
        
        this.load.tilemap('map','assets/level1.csv?xyz');
        
        this.load.image('tileset','assets/tileset.png');
        
        this.load.spritesheet('player','assets/player.png',24,26);
        
        this.load.spritesheet('buttons','assets/buttons.png',193,71)
        
    },
    
    
    create:function () {
    
    
        this.state.start('Level1');
    
}
    
}