class Chain{
    constructor(x,y){
        this.y = y;
        this.x = x;
        
    }
    render(){
        var div = $('<div>',{class: "chain"});
        $('#map').append( div );
    }
}

// var m = new Map();