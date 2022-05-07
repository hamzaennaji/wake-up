$(window).on("load",function() {
  $(window).scroll(function() {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    $(".header").each(function() {
		var objectheader = 1000;
		if (objectheader < windowBottom) {
			if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
		} else if (objectheader > windowBottom) {
			if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
		}
    });
	$(".footer").each(function() {
		var objectfooter = $(this).offset().top + $(this).outerHeight();
		if (objectfooter > windowBottom) {
			if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
		} else if (objectfooter < windowBottom) {
			if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
		}
    });
  }).scroll();
});

const fallpath = {
    curviness: 1.25,
    autoRotate: true,
    values: [
        {x: 100 , y: -20},
        {x: 300 , y: 10},
        {x: 500 , y: 100},
        {x: 75 , y: -60},
        {x: 900 , y: -90},
        {x: window.innerWidth , y: -250},
    ]
}
const pin = new ScrollMagic.Scene({

})
.setPin('')
const tween = new TimelineLite();
tween.add(
    TweenLite.to('.cutie',1,{
        bezier: fallpath,
        ease: Power1.easeInOut
    })
);
const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    triggerElement : ".animation",
    duration : 3000,
    triggerHook : 0
})
.setTween(tween)
.addIndicators()
.setPin('.animation')
.addTo(controller);
