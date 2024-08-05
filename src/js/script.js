// =============== loader =============== //

const win = $(window);
win.on("load", () => {
    $(document).ready(function () {
        $("#myLoader").fadeOut();
    });
});

// =============== side nav=============== //

let openMenu = document.querySelector(".navbar-toggle");
let sideMenu = document.querySelector(".menu");
let closeMenu = document.querySelector(".navbar-close");

openMenu.addEventListener("click", function () {
    sideMenu.style.left = "0px";
});

closeMenu.addEventListener("click", function () {
    sideMenu.style.left = "-275px";
});

// =============== counter =============== //

$(document).ready(function () {
    var counters = $(".count");
    var countersQuantity = counters.length;
    var counter = [];

    for (i = 0; i < countersQuantity; i++) {
        counter[i] = parseInt(counters[i].innerHTML);
    }

    var count = function (start, value, id) {
        var localStart = start;
        setInterval(function () {
            if (localStart < value) {
                localStart++;
                counters[id].innerHTML = localStart;
            }
        }, 0);
    };

    for (j = 0; j < countersQuantity; j++) {
        count(0, counter[j], j);
    }
});


// =============== Slider =============== //

$('.prt-slider').slick({
    dots: false,
    arrows: false,
    infinite: true,
    autoPlay: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,

            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

// ============================

$('.testimnl-slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    autoPlay: true,
    adaptiveHeight: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
});


// =============Other==============

new WOW().init();
