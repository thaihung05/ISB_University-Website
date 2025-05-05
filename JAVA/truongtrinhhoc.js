window.onload = function() {
    let list = document.querySelector('.slider .list');
    let items = document.querySelectorAll('.slider .list .item');
    let prev = document.getElementById('pre');
    let next = document.getElementById('next');
    let dots = document.querySelectorAll('.slider .dots li');
    let active = 0;
    let refreshSlider = setInterval(()=>{next.click()},3000);
    if (next) {
        next.onclick = function() {
            active += 1;
            if (active >= items.length) {
                active = 0;
            }
            reloadSlider();
        };
    }
    if (prev) {
        prev.onclick = function() {
            active -= 1;
            if (active < 0) {
                active = items.length - 1;
            }
            reloadSlider();
        };
    }
    function reloadSlider() {
        let checkLeft = items[active].offsetLeft;
        if (!isNaN(checkLeft)) {
            list.style.left = -checkLeft + 'px';
        }
        let checkActive = document.querySelector('.slider .dots li.active');
        checkActive.classList.remove('active');
        dots[active].classList.add('active');
    }
    dots.forEach((li,key)=>{
        li.addEventListener('click',function(){
            active=key-1;
            refreshSlider();
        })
    })
    document.querySelector('.load-more .load-btn').onclick = () => {
        document.querySelectorAll('.blog-boxs .hide').forEach(show=>{
            show.style.display = 'flex';
        });
        document.querySelector('.load-more .load-btn').style.display = 'none';
    }
};

$(document).ready(function() {
    $(".btn-to-top").hide()
    $(window).scroll(function() {
        if ($(window).scrollTop() >=300)
            $(".btn-to-top").show()
        else 
            $(".btn-to-top").hide()
        if ($(window).scrollTop()){
            $(".header").addClass('sticky')
        }
        else {
            $(".header").removeClass('sticky')
        }
    })
    $(".btn-to-top, .box-btn").click(function(){
        $("html, body").animate({
            scrollTop: 0
        }, 1000)
    });
    $('.menu-icon').click(function() {
        $('.button-nav').slideToggle('slow');
    });
 })