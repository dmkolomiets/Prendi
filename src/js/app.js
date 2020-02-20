/* Plugins */

//= ../../node_modules/jquery/dist/jquery.min.js
////= ../../node_modules/popper.js/dist/umd/popper.min.js
////= ../../node_modules/bootstrap/dist/js/bootstrap.min.js
////= ../../node_modules/owl.carousel/dist/owl.carousel.min.js
//= ../../node_modules/slick-slider/slick/slick.min.js
//code.jquery.com/jquery-1.11.0.min.js
//code.jquery.com/jquery-migrate-1.2.1.min.js

$(function(){
    
    $('.js-hero-slider').slick({
        dots: true,
        dotsClass: "slick-dots",
        autoplay: true,
        autoplaySpeed: 5000,
        nextArrow: '<button type="button" class="slick-next"><img src="images/icons/next.png"></button>',
        prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/prev.png"></button>',
        
    });

    $('.js-slider-laptop').slick({      
         
        dots: true,
        dotsClass: "slick-dots",
        autoplay: true,
        autoplaySpeed: 100000,
        nextArrow: '<button type="button" class="slick-next"><img src="images/icons/decision-arrow-next.png"></button>',
        prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/decision-arrow-prev.png"></button>',
        customPaging : function(slider, i) {
            var title = $(slider.$slides[i]).find('[data-title]').data('title');
            return '<a class="pager__item"> '+title+' </a>';
        }
      });

    

    
    
});
