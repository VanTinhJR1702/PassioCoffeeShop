$(document).ready(function () {
    $(".chat-btn").click(function () { // Bỏ qua biến event không sử dụng
        $(".chat-box").toggleClass('active');
    });
    $('.smooth-scroll').click(function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 700);
    });
    $('.mobile-nav-icon').click(function () {
        $('.main-nav').slideToggle(200);
        if ($('.mobile-nav-icon').hasClass('fa-bars')) {
            $('.mobile-nav-icon').addClass('fa-times');
            $('.mobile-nav-icon').removeClass('fa-bars')
        }
        else {
            $('.mobile-nav-icon').addClass('fa-bars');
            $('.mobile-nav-icon').removeClass('fa-times')
        }
    }
    )
});
