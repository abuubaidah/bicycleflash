// pre-loader //
$(window).load(function(){
    var preLoder = $(".preloader");
    preLoder.fadeOut(1000);
});



// fixed top navbar & resize header top padding  //
$(window).scroll(function(){
    var headerSection = $('.header-bottom');
    var mainMenuTop = $('.header-section .header-top');

    if ($(window).scrollTop() > 100) {
        headerSection.addClass('fixed-navbar');
        mainMenuTop.addClass('resize-header-top-padding');
    } else {
        headerSection.removeClass('fixed-navbar');
        mainMenuTop.removeClass('resize-header-top-padding');
    }
    
});



// search-box option //
$(document).ready(function(){
  $('.support-bar > a:last-child').click(function(){
    $('.search-box').slideToggle(90);
  });
});



// menu responsive button //
$(document).ready(function(){
  $('.resp-bar > i').click(function(){
    $('.nav-bar').slideToggle(300);
  });
    
});



// team section //
$(document).ready(function(){
  $('.part-details .social').hide();
  $('.team-member .part-details').hover(function(){
    $(this).find('.social').slideToggle(200);
  });
});



// video section - fancybox //
$(".fancybox-video").click(function() {
	$.fancybox({
			'padding'		: 0,
			'autoScale'		: false,
			'transitionIn'	: 'none',
			'transitionOut'	: 'none',
			'title'			: this.title,
			'width'		: 680,
			'height'		: 495,
			'href'			: this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
			'type'			: 'swf',
			'swf'			: {
			   	 'wmode'		: 'transparent',
				'allowfullscreen'	: 'true'
			}
		});

	return false;
});
	
	

// carousel for process payment //
$(document).ready(function(){

  var testimonialCarousel = $('.team-slider');
      testimonialCarousel.owlCarousel({
      loop:true,
      dots:true,
      nav:false,
      autoplay:true,
      autoplayTimeout:3000,
      autoplayHoverPause:true,
      responsive : {
        0 : {
            items: 1
        },
        768 : {
            items: 2
        },
        960 : {
            items: 3
        },
        1200 : {
            items: 3
        },
        1920 : {
            items: 3
        }
      }
  }); 
  
});



// faq section //
$(document).ready(function(){
  
  $('.part-ques').click(function() {
        $(this)
            .next().slideDown()
              .siblings('.part-ans')
                .slideUp();
    }); 
});



// carousel for process payment //
$(document).ready(function(){
	
  var testimonialCarousel = $('.testimonial-slider');
      testimonialCarousel.owlCarousel({
       loop:true,
      dots:true,
      dotData:true,
      startPosition:2,
      nav:true,
      item: 1,
      navText: ['<i class="fas fa-long-arrow-alt-left"></i>','<i class="fas fa-long-arrow-alt-right"></i>'],
      autoplay:true,
      autoplayTimeout:3000,
      autoplayHoverPause:true,
      responsive : {
        0 : {
            items: 1
        },
        768 : {
            items: 1
        },
        960 : {
            items: 1
        },
        1200 : {
            items: 1
        },
        1920 : {
            items: 1
        }
      }
  }); 
  
});



// carousel for process payment //
$(document).ready(function(){

  var testimonialCarousel = $('.news-slider');
      testimonialCarousel.owlCarousel({
      loop:true,
      dots:true,
      startPosition:2,
      nav:false,
      item: 1,
      navText: ['<i class="fas fa-long-arrow-alt-left"></i>','<i class="fas fa-long-arrow-alt-right"></i>'],
      autoplay:true,
      autoplayTimeout:3000,
      autoplayHoverPause:true,
      responsive : {
        0 : {
            items: 1
        },
        768 : {
            items: 1
        },
        960 : {
            items: 1
        },
        1200 : {
            items: 1
        },
        1920 : {
            items: 1
        }
      }
  }); 
  
});


// back to top buttton //
$(document).ready(function(){
  $('.scroll-to-top a').click(function(){
    $("html,body").animate({
        scrollTop: 0}, 1000);
  });
});


// back to top button, show & hide function //
$(window).scroll(function(){

    var ScrollTop = $('.scroll-to-top');
    if ($(window).scrollTop() > 500) {
            ScrollTop.fadeIn(500);
    } else {
            ScrollTop.fadeOut(500);
   }  

});

// smooth scroll function //
$('.nav-bar li a').click(function (e) {
    e.preventDefault();
    var anchor = $(this).attr('href');
    var top = $(anchor).offset().top;
    $('html, body').animate({
        scrollTop: $(anchor).offset().top
    }, 1000);
});


// banner slider //
$(document).ready(function(){

  var testimonialCarousel = $('.banner-slider');
      testimonialCarousel.owlCarousel({
      loop:true,
      dots:true,
      startPosition:2,
      animateOut: 'fadeOut',
      nav:true,
      item: 1,
      navText: ['<i class="fas fa-long-arrow-alt-left"></i>','<i class="fas fa-long-arrow-alt-right"></i>'],
      autoplay:true,
      mouseDrag:false,
      autoplayTimeout:4000,
      autoplayHoverPause:false,
      responsive : {
        0 : {
            items: 1
        },
        768 : {
            items: 1
        },
        960 : {
            items: 1
        },
        1200 : {
            items: 1
        },
        1920 : {
            items: 1
        }
      }
  }); 
  
});

