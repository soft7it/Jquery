var d;
$.getScript('components/map/Map.js', function(){
    var m = new Map(10,10);
    loadStyle( 'components/map/map.css' );

    $.getScript('components/devil/MikiDuta.js', function(){
        loadStyle( 'components/devil/mike-dize.css' );
        d = new MikiDuta( randCoord(), randCoord() );
      //  d.move();
      $.getScript('components/chain/Chain.js', function(){
        loadStyle( 'components/chain/chain.css' );
        var c = new Chain( randCoord(), randCoord() );
        d.hunt(c);
        
    });
        
    });

  

    
});