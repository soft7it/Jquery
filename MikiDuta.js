class MikiDuta{
    constructor(x,y){
        this.y = y;
        this.x = x;
        
    }
    render(){
        var div = $('<div>',{class: "mike-dize"});
        $('#map').append( div );
    }
}

// var m = new Map();