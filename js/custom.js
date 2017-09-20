
                          
 $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('header').addClass("hdr_fix");
        } else {
            $('header').removeClass("hdr_fix");
        }
    });

$(document).ready(function() {
	$('.fancybox-media').attr('rel', 'media-gallery').fancybox({
		openEffect : 'none',
		closeEffect : 'none',
		prevEffect : 'none',
		nextEffect : 'none',
		arrows : false,
		helpers : {
			media : {},
			buttons : {}
		}
	});
});

 var faderIndex = 0,
        faders = $('.fadey');
    
    function nextFade() {
        $(faders[faderIndex]).fadeOut(3000, function() {
            faderIndex++;
            if (faderIndex >= faders.length)
                faderIndex = 0;
            $(faders[faderIndex]).fadeIn(3000, nextFade);
        });
    }
    nextFade();
    
    
// $(document).ready(function() {	
//  
    // $('.banner_slider').owlCarousel({
		    // loop:false,
		    // margin:0,
		    // dots:false,
            // nav:false,
            // items:1,
            // autoplay:true,
            // clone:false		
		// });    
// 		 
 // });    


// $(document).ready(function() {
             // $('.whitepaper_slider').owlCarousel({
		    // loop:true,
		    // margin:0,
		    // dots:false,
		    // nav: true,
		    // items:3,
		    // autoplay:true,
		    // responsive:{
	        // 0:{
	            // items:1
	        // },
	        // 568:{
	            // items:2
	        // },
	        // 640:{
	            // items:2
	        // },
	        // 667:{
	            // items:2
	        // },
	        // 768:{
	            // items:3
	        // },
	        // 1000:{
	            // items:3
	        // }
	       // }
		// });
            // });   
            
$(document).ready(function() {
             $('.partner_slider').owlCarousel({
		    loop:false,
		    margin:0,
		    dots:false,
		    nav: false,
		    items:5,
		    autoplay:true,
		    responsive:{
	        0:{
	            items:1
	        },
	        568:{
	            items:2
	        },
	        640:{
	            items:2
	        },
	        667:{
	            items:2
	        },
	        768:{
	            items:3
	        },
	        1000:{
	            items:5
	        }
	       }
		});
            }); 
            
$(document).ready(function() {
             $('.module_slider').owlCarousel({
		    loop:true,
		    margin:0,
		    dots:false,
		    nav: true,
		    items:1,
		    autoplay:false,
		    responsive:{
	        0:{
	            items:1
	        },
	        568:{
	            items:1
	        },
	        640:{
	            items:1
	        },
	        667:{
	            items:1
	        },
	        768:{
	            items:1
	        },
	        1000:{
	            items:1
	        }
	       }
		});
            });              
            
// $(document).ready(function() {
             // $('.team_slider').owlCarousel({
		    // loop: false,
		    // margin:0,
		    // dots:false,
		    // nav: false,
		    // items: 5,
		    // autoplay:true,
		    // responsive:{
	        // 0:{
	            // items:1
	        // },
	        // 568:{
	            // items:1
	        // },
	        // 640:{
	            // items:2
	        // },
	        // 667:{
	            // items:3
	        // },
	        // 768:{
	            // items:4
	        // },
	        // 1000:{
	            // items:5
	        // }
	       // }
		// });
            // });             
             
 $(document).ready(function() {	  
 
     $(".slider").slider().slider("pips").slider("float");
 		 
  });  



// $(document).on('touchstart.dropdown.data-api', '.dropdown-menu > a', function (event) { event.preventDefault(); });
            
$(window).scroll(function() {
var hT = $('.talkbubble').offset().top,
    hH = $('.talkbubble').outerHeight(),
    wH = $(window).height(),
    wS = $(this).scrollTop();
console.log((hT - wH), wS);
if (wS > (hT + hH - wH)) {
    $('.count').each(function() {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 900,
            easing: 'swing',
            step: function(now) {
                $(this).text(Math.ceil(now));
            }
        });
    }); {
        $('.count').removeClass('count').addClass('counted');
    };
}
});    


$(document).ready(function() {
        //Horizontal Tab
        $('#parentHorizontalTab').easyResponsiveTabs({
            type: 'default', //Types: default, vertical, accordion
            width: 'auto', //auto or any width like 600px
            fit: true, // 100% fit in a container
            tabidentify: 'hor_1', // The tab groups identifier
            activate: function(event) { // Callback function if tab is switched
                var $tab = $(this);
                var $info = $('#nested-tabInfo');
                var $name = $('span', $info);
                $name.text($tab.text());
                $info.show();
            }
        });
         });   
         
equalheight('.bg-post-text');
	
// !!window['addEventListener'] && new WOW().init();

 
