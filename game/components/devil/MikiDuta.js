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
    }

    // va cauta obiectur vinat
    hunt( target /* obiectul vinat*/){
        console.log( 'HUNTING TARGET', target.x, target.y );
        var _self = this;
        setInterval(function(){
           // console.log(this);
            if(target.x>_self.x){
                _self.turnRight();
                _self.moveRight();

            }
            if(target.x<_self.x){
                _self.turnLeft();
                _self.moveLeft();
            }
            // if(_self.directions=='up'){
            //     _self.moveUp();
            // }
            // if(_self.directions=='down'){
            //     _self.moveDown();
            // }
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
        this.y++;
        this.$div.css('top', this.y * 50 + 'px');
    }
    moveDown(){
        this.y--;
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