$( function() {
    $( ".design" ).progressbar({
        value: 75
    });
    $( ".development" ).progressbar({
        value: 90
    });
    $( ".marketing" ).progressbar({
        value: 65
    });
} );

$(document).ready(function(){
    $('#nav-menu').click(function(){
        $('ul.nav-list').addClass('nav-open').slideToggle('300');
    });
});