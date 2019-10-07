

/* saying when the document is ready do this and a webpage is a document. */
$(document).ready(function() {
    $('#slides').superslides( {
        animation: "fade", 
        play: 5000 // in mill seconds
        
    });

    /* this is for the letter to be typed out with JS reference  */

    var typed = new Typed(".typed", {
        strings: ["Software Engineer.", "Web Developer.", "Fullstack Developer.", "Software Engineer.", "Google Adword Certified.", "Google Analytics Certified.", "S.E.O. MasterMind."],
            typeSpeed: 70, 
            loop: true, 
            startDelay: 1000,
            showCursor: false
    });


    /* automated carousel using jQuery */
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items: 4,
        loop: true,
        margin: 40, 
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
       /*  responsiveClass:true, */
        responsive: {
            0:{
                items:1
            },
            480:{
                items:2
            },
            768:{
                items:3
            },
            938: {
                items:4
            }

        }


    });
    $('.play').on('click', function () {
        owl.trigger('play.owl.autoplay', [1000])
    })
    $('.stop').on('click', function () {
        owl.trigger('stop.owl.autoplay')
    })

        /* jQuery easyPieChart controls */
    $('.chart').easyPieChart({
     easing: 'easeInOut',
     barColor: 'red',
     trackColor: '#F5F5DC', 
     scaleColor: 'black',
     lineWidth: 5, 
     size: 152,
     onStep: function(from, to, percent){
         $(this.el).find('.percent').text(Math.round(percent)); 
     }
    });


});
