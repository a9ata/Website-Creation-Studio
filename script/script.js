$(document).ready(function(){
    $('.bxslider').bxSlider({
        pager: false,
    });
});

$(document).ready(function(){
    $('.bxslider_team').bxSlider({
        controls: false,
    });
});

$(window).load(function() {
    $('.flexslider').flexslider({
      animation: "slide",
      animationLoop: false,
      itemWidth: 280,
      itemMargin: 5
    });
});

$(document).ready(function(){
    $('.accordion').accordion({
        defaultOpen:''
    });
});