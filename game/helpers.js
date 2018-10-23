//functii ajutatoare
function loadStyle(url){
    $('head').append(
        $('<link>', {rel:'stylesheet', href:url})
    );
}

// cordonate aliatorii

function randCoord(){
    return parseInt( Math.random() * 9.9 );
}