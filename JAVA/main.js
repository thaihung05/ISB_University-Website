$(document).ready(function() {
    $("#mood").click(function() {
         $("html, body").animate({
             scrollTop: 800
         }, 1000)
    })
    $(".btn-to-top").hide()
    $(window).scroll(function() {
        if ($(window).scrollTop() >=300)
            $(".btn-to-top").show()
        else 
            $(".btn-to-top").hide()
        if ($(window).scrollTop() >=126){
            $(".home__button").addClass('sticky')
            $(".button-nav__menu-the").addClass('theo')
            // $(".home__button").css('animation','moveInleft  ease .5s')
        }
        else {
            $(".home__button").removeClass('sticky')
            $(".button-nav__menu-the").removeClass('theo')
        }
    })
    $('.menu-icon').click(function() {
        $('.button-nav').slideToggle('slow');
        $('.button-nav').show();
    });
    $(window).resize(function() {
        if ($(window).width() <= 786) {
            $(window).scroll(function() {
                if ($(window).scrollTop()){
                    $('.button-nav').show('slow');
                }
            })
        }
        else {
            $('.button-nav').show();
        }
    });
    $(".btn-to-top").click(function(){
        $("html, body").animate({
            scrollTop: 0
        }, 1000)
    })
    

 })

 window.onload = function() {
    let main=document.getElementById("main");
    let images = document.querySelectorAll(".icon img");
    for (let im of images)
        im.onmouseenter = function (){
            main.src = this.src;
    }
 }