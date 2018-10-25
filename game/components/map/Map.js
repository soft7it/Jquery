class Map{
    constructor(w,h){
        this.w = w;
        this.h = h;
        this.things = []; // liststa tuturor obiectelor adaugate
        var divs = [];
        for(var y = 0; y < this.h; y++ ){
            for(var x= 0; x < this.w; x++){
                // creaza 1 patrat (sector)
                divs.push( $('<div>')
                                .css('top', y * 50 + 'px')
                                .css('left', x * 50 + 'px')
                                 );
            }
        }
        $('#map').append( divs );
        this.$div = $('#map');  //pastram legatura cu div hartii
    }

    addThing( thing ){
        this.things.push( thing );
    }

    }
  

// var m = new Map();