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