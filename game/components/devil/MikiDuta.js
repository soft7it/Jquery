class MikiDuta{
    constructor(x,y){
        this.y = y;
        this.x = x;
        this.directions = 'right';
        var position = 'top:' + this.y * 50 + 'px' + '; left: ' + this.x * 50 + 'px';
        var div = $('<div>',{
            class: "mike-dize " + this.directions,
            style: position
    });
        $('#map').append( div );
        this.$div = div;  // legatura din personaj nr.5
        this.hunt();
    }

    // va cauta obiectur vinat
    hunt(){



        var _self = this;
        setInterval(function(){
            var target = null;
        // cautam calaboku pe harta
            for (var t=0; t<game_map.things.length; t++){
              if(game_map.things[t] instanceof Chain ){
                target = game_map.things[t];
              }

        }
            if(!target) return;

        console.log( 'HUNTING TARGET', target.x, target.y );
           // console.log(this);
            if(target.x>_self.x){
                _self.turnRight();
                _self.moveRight();

            }
            if(target.x<_self.x){
                _self.turnLeft();
                _self.moveLeft();
            }
            if(target.y<_self.y){
                _self.turnUp();
                _self.moveUp();
            }
            if(target.y>_self.y){
                _self.turnDown();
                _self.moveDown();
            }
            if( target.y ==_self.y && target.x==_self.y )   {
                target.hp-=10;
            }

        },1000);
    }

    //movement
    moveRight(){
        this.x++;
        this.$div.css('left', this.x * 50 + 'px');
    }
    moveLeft(){
        this.x--;
        this.$div.css('left', this.x * 50 + 'px');
    }
    moveUp(){
        this.y--;
        this.$div.css('top', this.y * 50 + 'px');
    }
    moveDown(){
        this.y++;
        this.$div.css('top', this.y * 50 + 'px');
    }

    move(){
        var _self = this;
        setInterval(function(){
           // console.log(this);
            if(_self.directions=='right'){
                _self.moveRight();
            }
            if(_self.directions=='left'){
                _self.moveLeft();
            }
            if(_self.directions=='up'){
                _self.moveUp();
            }
            if(_self.directions=='down'){
                _self.moveDown();
            }
        },1000);
    }

    turnRight(){
        this.directions = 'right';
        this.$div.attr('class','mike-dize right');
    }

    turnLeft(){
        this.directions = 'left';
        this.$div.attr('class','mike-dize left');
    }

    turnUp(){
        this.directions = 'up';
        this.$div.attr('class','mike-dize up');
    }

    turnDown(){
        this.directions = 'down';
        this.$div.attr('class','mike-dize down');
    }

    }
    


    

// var m = new Map();