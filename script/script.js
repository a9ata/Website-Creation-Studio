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


$(function(){
    var filterList = {
        init: function(){
            $('.workportfolio').mixitup({
                targetSelector: '.portfolio',
                filterSelector: '.filter',
                effects: ['fade'],
                easing: 'snap',
                onMixEnd: filterList.hoverEffect() 
            });
        },
        hoverEffect: function(){

        }
    };

    filterList.init();
});

$(document).ready(function(){
    var headerHeight = $(".topheader").height();
    $(window).on('scroll', {previousTop: 0},function(){
        var currentTop = $(window).scrollTop();
        if(currentTop < this.previousTop){//вверх прокрутка
            if (currentTop > 0 && $(".topheader").hasClass('is-fixed')) {
                
            }else{//когда пользователь находится в самом верху
                $(".topheader").removeClass('is-fixed')
            }
        }else{//крутит вниз
            if (currentTop > headerHeight && !$(".topheader").hasClass('is-fixed')){
                $(".topheader").addClass('is-fixed')
            }
        }
            this.previousTop = currentTop;
    });





    $("primary-nav").on("click", "a", function(event){
        event.preventDefault();
        var id = $(this).attr("href"),
            top = $(id).offset().top;
        $('body, html').animate({scrollTop: top}, 1000);
    });



    $('.primary-nav-trigger').on("click", function(){
    $(".menu-icon").toggleClass("is-clicked");
     
    if($(".primary-nav").hasClass("is-visible")){
        // убираем
        $(".primary-nav").removeClass("is-visible");
        $("body").removeClass("overflow-hidden");
    }else{
        // добавляем
     
        $(".primary-nav").addClass("is-visible");
        $("body").addClass("overflow-hidden");
        } 
    });
});

$(document).ready(function(){
    $(".submit").on("click", function(){
        if ($("#name").val() != '' && $("#email").val() != '') {
            fetch('send.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'aplicatio/x-www-from-urlencode'
                }.
                body: $("#send_form").serialize(),
            }).then((response) => response.json())
            .then((data) => {
                if(data.status === 'ok'){
                    $("#dend_form").addClass("send_success");
                }
                if (data.status === 'error'){
                    $("#dend_form").addClass("send_fail");
                }
            });
        }else {
            alert("Поля не заполнены!");
        }
    });
});
