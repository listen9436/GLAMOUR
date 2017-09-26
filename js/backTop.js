/**
 * Created by Administrator on 2017/3/30.
 */
$(function () {
    //nav
    $(".nav").find("li").click(function () {
        $(this).addClass("active").siblings("li").removeClass("active");
    });
    //backTop\
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 600) {
            $("#backTop").fadeIn(300);
        } else {
            $("#backTop").fadeOut(0);
        }
    });
    $("#backTop").click(function () {
        $("html,body").animate({scrollTop: 0}, 300, "");
        $("#backTop").animate({bottom: 2000, opacity: 0}, 800, "", function () {
            $("#backTop").css({bottom: 280, opacity: 1});
        });
    });
});
