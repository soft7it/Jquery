$.getScript('components/map/Map.js', function(){
    var m = new Map(10,10);
    $('head').append(
        $('<link>', {rel:'stylesheet', href:'components/map/map.css'})
    );
    $.getScript('components/devil/MikiDuta.js', function(){
        $('head').append(
            $('<link>', {rel:'stylesheet', href:'components/devil/mike-dize.css'})
        );
        var d = new MikiDuta(1,1);
        d.render();
    });
    $.getScript('components/chain/Chain.js', function(){
        $('head').append(
            $('<link>', {rel:'stylesheet', href:'components/chain/chain.css'})
        );
        var c = new Chain(1,1);
        c.render();
    });

    m.render();
});