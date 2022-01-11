// owl carousel
$('.owl-carousel').owlCarousel({
    loop:true,
    items:1,
    merge:true,
    video:true,
    lazyLoad:true,
    center:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:1,
            nav:true,
            loop:false
        }
    }
})

// typed js
var typed3 = new Typed('#type1', {
    strings: ['UI&UX DESIGNER.', 'FREELANCER.', 'HOBBY RUNNER.'],
    typeSpeed: 90,
    backSpeed: 90,
    smartBackspace: true, // this is a default
    loop: true,
    startDelay: 1000
  });

//   owl-dots number
$('.owl-dot').each(function(){
$(this).children('span').text($(this).index()+1);
});

// wow js
new WOW().init();