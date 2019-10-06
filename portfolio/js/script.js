

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
        margin: 10,
        autoplay: true,
        autoplayTimeout: 1500,
        autoplayHoverPause: true
    });
    $('.play').on('click', function () {
        owl.trigger('play.owl.autoplay', [1000])
    })
    $('.stop').on('click', function () {
        owl.trigger('stop.owl.autoplay')
    })

    $('.chart').easyPieChart({
        //your options goes here
    });


});
