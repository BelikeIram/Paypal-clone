$('.item').hover(function () {
   $(this).children().children('i').addClass('rotate-180')
   $(this).siblings().children().children('i').removeClass('rotate-180')
   $(this).addClass('item-border')
   $(this).siblings().removeClass('item-border')
//    $(this).parent().parent().parent().parent().next().children().slideDown('2000')
   contentId = $(this).attr('data-id')
   $(contentId).slideDown()
   $(contentId).siblings().hide()
})


$('.hover-down').children().mouseleave(function(){
    $('.item').children().children('i').removeClass('rotate-180')
    $('.item').removeClass('item-border')
    $(this).slideUp('slow')
})
$('.btn_pay').click(function(){
    $(this).children('.right-item').children('.above').addClass('b-color')
    $(this).siblings().children('.right-item').children('.above').removeClass('b-color')
    $(this).children('.left-btn').addClass('active-color')
    $(this).siblings().children('.left-btn').removeClass('active-color')
    contentId = $(this).attr('data-id')
    $(contentId).s();
    $(contentId).siblings().slideUp()
})

function itemSlideUp (){
  contentId =  $('.item').attr('data-id')
  contentId.slideUp()
}
$('.menu-box').click(function(){
    $('body').toggleClass('menu-open')
    $('.side-nav-menu').addClass('visible-0')
    $('.bar-1').toggleClass('change-1')
    $('.bar-2').toggleClass('change-2')
    $('.bar-3').toggleClass('change-3')
    //$('.navbar').toggleClass('position-relative')
    $('.body').toggleClass('body-append')
    scrolled = $(window).scrollTop();
    $('.side-nav-menu').css("top", scrolled);
    if ($('body').hasClass('menu-open')) {
        $('.navbar').css("top", scrolled);
    }else{
        $('.navbar').css("top", '0');
    }
})


$('.cancel-box').click(function (){
    $(this).parent().slideUp()
})

$('.html-body').scroll(function(){
    $(this).$(':first-child').remove
})
