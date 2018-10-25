
var game_map;
$.getScript('components/map/Map.js', function(){
    game_map = new Map(10,10);
    loadStyle( 'components/map/map.css' );

    $.getScript('components/devil/MikiDuta.js', function(){
        loadStyle( 'components/devil/mike-dize.css' );
        
        game_map.addThing( new MikiDuta( randCoord(), randCoord() ) );
      //  d.move();

      $.getScript('components/chain/Chain.js', function(){
        loadStyle( 'components/chain/chain.css' );
        
        game_map.addThing( new Chain( randCoord(), randCoord() ) );
      

        console.log( game_map.things[1] instanceof Chain );
    });
        
    });

  

    
});