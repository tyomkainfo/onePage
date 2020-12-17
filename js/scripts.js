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


<!--Carousel-->
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        navText: [ '', ' ' ],

        responsive:{
            0:{
                items:1
            }
        }
    });
});

console.clear();

const nav = document.querySelector("nav");
const navLinksContainer = document.querySelector(".nav-links");
const navLinks = [...document.querySelectorAll(".link")];
const menuBtn = document.querySelector(".menu-btn");
const subMenuBtn = document.querySelector(".sub-menu-btn");

function createHoverEl() {
    let hoverEl = document.createElement("div");
    hoverEl.className = "hover-el";
    hoverEl.style.setProperty("--y", "0px");
    hoverEl.style.setProperty("--mousex", "0px");
    hoverEl.style.setProperty("--mousey", "0px");
    navLinksContainer.appendChild(hoverEl);
}
createHoverEl();

navLinks.forEach((link, index) => {
    let hoverEl = navLinksContainer.querySelector(".hover-el");
    link.style.setProperty("--delay", `${index * 50}ms`);
    link.addEventListener("mousemove", function(e) {
        hoverEl.style.setProperty("--y", `${index * 60}px`);
        hoverEl.style.setProperty("opacity", "1");
        hoverEl.style.setProperty("--mousex", `${e.pageX - hoverEl.offsetLeft}px`);
        hoverEl.style.setProperty("--mousey", `${e.pageY - hoverEl.offsetTop}px`);
    });
    navLinksContainer.addEventListener("mouseout", function() {
        hoverEl.style.setProperty("opacity", "0");
    });
    link.addEventListener("click", function() {
        let hoverEl = navLinksContainer.querySelector(".hover-el");
        hoverEl.style.opacity = '0';
        toggleSubmenu(link);
    });
});

menuBtn.addEventListener("click", function() {
    nav.classList.toggle("nav-open");
    menuBtn.classList.toggle("close");
});
subMenuBtn.addEventListener("click", function() {
    nav.classList.toggle("sub-menu-open");
    removeSubmenu();
});

function toggleSubmenu(el) {
    let subMenu = nav.querySelector(".sub-menu");
    if (el.children[1]) {
        createSubmenu(el);
    } else if (nav.contains(subMenu)) {
        removeSubmenu();
    } else {
        return;
    }
}

function createSubmenu(el) {
    let subMenuContainer = document.createElement("div");
    subMenuContainer.className = "sub-menu";
    let subMenuItem = el.children[1].cloneNode(true);
    let subMenuItemList = [...subMenuItem.children];
    subMenuItemList.forEach((item, index) => {
        item.classList.add("off-menu");
        item.style.setProperty("--delay", `${index * 40}ms`);
    });
    nav.classList.toggle("sub-menu-open");
    nav.appendChild(subMenuContainer);
    subMenuContainer.appendChild(subMenuItem);
    setTimeout(function() {
        subMenuItemList.forEach(item => {
            item.classList.remove("off-menu");
            item.classList.add("on-menu");
        });
    }, 200);
}
function removeSubmenu() {
    let subMenu = nav.querySelector(".sub-menu");
    let subMenuItemList = [...subMenu.children[0].children];
    if (nav.contains(subMenu)) {
        subMenuItemList.forEach(item => {
            item.classList.add("off-menu");
            item.classList.remove("on-menu");
        });
        setTimeout(function() {
            nav.removeChild(subMenu);
        }, 500);
    }
}

$(document).ready(function () {
    new ScrollFlow();
});
$.fn.ScrollFlow = function (options) {
    new ScrollFlow(options);
}
ScrollFlow = function (options) {
    this.init(options);
}
$.extend(ScrollFlow.prototype, {
    init: function (options) {
        this.options = $.extend({
            useMobileTimeouts: true,
            mobileTimeout: 100,
            durationOnLoad: 0,
            durationOnResize: 250,
            durationOnScroll: 500
        }, options);
        this.lastScrollTop = 0;
        this.bindScroll();
        this.bindResize();
        this.update(this.options.durationOnLoad);
    }, bindScroll: function () {
        var $this = this;
        $(window).scroll(function () {
            $this.update();
        });
        $(window).bind("gesturechange", function () {
            $this.update();
        });
    }, bindResize: function () {
        var $this = this;
        $(window).resize(function () {
            $this.update($this.options.durationOnResize);
        });
    }, update: function (forcedDuration) {
        var $this = this;
        winHeight = $(window).height();
        scrollTop = $(window).scrollTop();
        $(".scrollflow").each(function (key, obj) {
            objOffset = $(obj).offset();
            objOffsetTop = parseInt(objOffset.top);
            effectDuration = $this.options.durationOnScroll;
            effectDuration = typeof(forcedDuration) != "undefined" ? forcedDuration : effectDuration;
            effectiveFromPercentage = (!isNaN(parseInt($(obj).attr("data-scrollflow-start") / 100)) ? parseInt($(obj).attr("data-scrollflow-start")) / 100 : -0.25);
            scrollDistancePercentage = (!isNaN(parseInt($(obj).attr("data-scrollflow-distance") / 100)) ? parseInt($(obj).attr("data-scrollflow-distance")) / 100 : 0.5);
            effectiveFrom = objOffsetTop - winHeight * (1 - effectiveFromPercentage);
            effectiveTo = objOffsetTop - winHeight * (1 - scrollDistancePercentage);
            parallaxScale = 0.8;
            parallaxOpacity = 0;
            parallaxOffset = -100;
            factor = 0;
            if (scrollTop > effectiveFrom) {
                factor = (scrollTop - effectiveFrom) / (effectiveTo - effectiveFrom);
                factor = (factor > 1 ? 1 : factor);
            }
            options = {opacity: 1, scale: 1, translateX: 0, translateY: 0};
            if ($(obj).hasClass("-opacity")) {
                options.opacity = 0 + factor;
            }
            if ($(obj).hasClass("-pop")) {
                options.scale = 0.8 + factor * 0.2;
            }
            if ($(obj).hasClass("-slide-left")) {
                options.translateX = (-100 + factor * 100) * -1;
            }
            if ($(obj).hasClass("-slide-right")) {
                options.translateX = (-100 + factor * 100);
            }
            if ($(obj).hasClass("-slide-top")) {
                options.translateY = (-100 + factor * 100) * -1;
            }
            if ($(obj).hasClass("-slide-bottom")) {
                options.translateY = (-100 + factor * 100);
            }
            $(obj).css({
                webkitFilter: "opacity(" + options.opacity + ")",
                mozFilter: "opacity(" + options.opacity + ")",
                oFilter: "opacity(" + options.opacity + ")",
                msFilter: "opacity(" + options.opacity + ")",
                filter: "opacity(" + options.opacity + ")",
                webkitTransform: "translate3d( " + parseInt(options.translateX) + "px, " + parseInt(options.translateY) + "px, 0px ) scale(" + options.scale + ")",
                mozTransform: "translate3d( " + parseInt(options.translateX) + "px, " + parseInt(options.translateY) + "px, 0px ) scale(" + options.scale + ")",
                oTransform: "translate3d( " + parseInt(options.translateX) + "px, " + parseInt(options.translateY) + "px, 0px ) scale(" + options.scale + ")",
                msTransform: "translate3d( " + parseInt(options.translateX) + "px, " + parseInt(options.translateY) + "px, 0px ) scale(" + options.scale + ")",
                transform: "translate3d( " + parseInt(options.translateX) + "px, " + parseInt(options.translateY) + "px, 0px ) scale(" + options.scale + ")",
                transition: "all " + effectDuration + "ms ease-out"
            });
        });
        return;
        if (this.options.useMobileTimeouts && this.lastScrollTop != scrollTop) {
            this.lastScrollTop = scrollTop;
            $("body").stop();
            $("body").animate({float: "none"}, this.options.mobileTimeout, function () {
                $this.update();
            });
        }
    }
});