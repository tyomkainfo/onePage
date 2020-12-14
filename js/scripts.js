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

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
/* всплывающее окно для section service*/
$( function() {
    $( "#dialog" ).dialog({
        autoOpen: false,
        show: {
            effect: "blind",
            duration: 1000
        },
        hide: {
            effect: "explode",
            duration: 1000
        }
    });

    $( "#opener" ).on( "click", function() {
        $( "#dialog" ).dialog( "open" );
    });
    $( "#opener_1" ).on( "click", function() {
        $( "#dialog" ).dialog( "open" );
    });
    $( "#opener_2" ).on( "click", function() {
        $( "#dialog" ).dialog( "open" );
    });
    $( "#opener_3" ).on( "click", function() {
        $( "#dialog" ).dialog( "open" );
    });
    $( "#opener_4" ).on( "click", function() {
        $( "#dialog" ).dialog( "open" );
    });
    $( "#opener_5" ).on( "click", function() {
        $( "#dialog" ).dialog( "open" );
    });
    $( "#opener_6" ).on( "click", function() {
        $( "#dialog" ).dialog( "open" );
    });
    $( "#opener_7" ).on( "click", function() {
        $( "#dialog" ).dialog( "open" );
    });
} );
$(document).ready(function(){
    $('#nav-menu').click(function(){
        $('ul.nav-list').addClass('nav-open').slideToggle('300');
    });
});