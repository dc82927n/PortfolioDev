

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
        /* margin: 40,  */
        autoplay: true,
        autoplayTimeout: 2500,
        autoplayHoverPause: true,
        responsiveClass:true, 
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

   

    var skillsTopOffset = $(".skillsSection").offset().top;
 /*    console.log(skillsTopOffset);  this will tell use where the skill section 
    is located from the top down. for this it's example it's 1594px down 
 */

// window scroll so the feature won't function until it window it a certain height for the stats section

    var statsTopOffset = $(".statsSection").offset().top;
    var countUpFinished = false; 



    $(window).scroll(function(){

        if(window.pageYOffset > skillsTopOffset - $(window).height()) {

            /* jQuery easyPieChart controls */
            $('.chart').easyPieChart({
                easing: 'easeInOut',
                barColor: 'red',
                trackColor: '#F5F5DC',
                scaleColor: 'black',
                lineWidth: 5,
                size: 152,
                onStep: function (from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });

        
        }

        if (!countUpFinished && window.pageYOffset > statsTopOffset - $(window).height() + 200) {

            /* counterUp hard coded of counter */
            /* $(".counter").countup(2000, options);  */

            countUpFinished = true
            
            var options = {
                useEasing: false,
                usingGrouping: false,
                separator: ""
            };

            var demo = new CountUp("counter", 0, 2000, 0, 2.5, options);
            demo.start();


            var options1 = {
                useEasing: false,
                usingGrouping: false,
                separator: ""

            }
            var demo = new CountUp("counter1", 0, 3000, 0, 2.5, options1);
            demo.start();

            var options2 = {
                useEasing: false,
                usingGrouping: false,
                separator: ""

            }
            var demo = new CountUp("counter2", 0, 300000, 0, 2.5, options2);
            demo.start();

            var options3 = {
                useEasing: false,
                usingGrouping: false,
                separator: ""

            }
            var demo = new CountUp("counter3", 0, 3000, 0, 1, options3);
            demo.start();

            /*   $(".counter").each(function() {
                    var element = $(this);
                    var endVal = parseInt(element.text()); 
                    element.countup(endVal); 
                
                }); 
    
                */
               
        }

    }); 

    /* fancybox call command */
    $("[data-fancybox]").fancybox(); 
  
    /* isotope call comand */
    $(".items").isotope({
        filter:'*',
        animationOptions:{
            duration: 1500, /* speed for the filtering */
            easing: 'linear',
            queue: false
        }
    });

    /* selectioning the id filter tag to use the filter tag */
    $("#filter a").click(function() {

        $("#filters .current").removeClass("current"); 
        $(this).addClass("current");

        var selector = $(this).attr("data-filter"); 

        $(".items").isotope({
            filter: selector, /* selecting the click handler */
            animationOptions: {
                duration: 1500, /* speed for the filtering */
                easing: 'linear',
                queue: false
            }
        });
        return false; 
    }); 

    /* creating a sticky event handler for the navbar*/

    const nav = $("#navigation"); 
    const navTop = nav.offset().top; 

    $(window).on("scroll", stickyNavigation); 

    function stickyNavigation() {
        var body = $("body"); 
        if($(window).scrollTop() >= navTop) {
            /* saying once it pass scroll pass this point add navbar else 
            remove nav bar */
            body.addClass ("fixedNav"); 
        } else {
            body.removeClass("fixedNav"); 
        }

    }


});



































































