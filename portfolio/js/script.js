

/* saying when the document is ready do this and a webpage is a document. */
$(document).ready(function() {
    $('#slides').superslides( {
        animation: "fade", 
        play: 5000 // in mill seconds
        
    });

    /* this is JS  */

    var typed = new Typed(".typed", {
        strings: ["Software Engineer.", "Web Developer.", "Fullstack Developer.", "Software Engineer.", "Google Adword Certified.", "Google Analytics Certified.", "S.E.O. MasterMind."],
            typeSpeed: 70, 
            loop: true, 
            startDelay: 1000,
            showCursor: false
    });

    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items: 4,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true
    });
    $('.play').on('click', function () {
        owl.trigger('play.owl.autoplay', [1000])
    })
    $('.stop').on('click', function () {
        owl.trigger('stop.owl.autoplay')
    })

});
