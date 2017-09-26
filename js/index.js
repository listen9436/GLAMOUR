/**
 * Created by Administrator on 2017/3/6.
 */
$(function () {
    //加载头部、尾部页面
    //$(".header").load("header.html");
    //$(".footer").load("footer.html");
    //one-textShow
    $(".content_one .one_left").find("div").each(function (i) {
        var that = $(this);
        setTimeout(function () {
            that.show().addClass("animated fadeInLeftBig");
        }, 150 * (i + 1));
    });
    //one-imgShow
    setTimeout(function () {
        $(".one_right .right_img01").addClass("imgShow01");
    }, 300);
    setTimeout(function () {
        $(".one_right .right_img02").fadeIn().addClass("imgShow02")
    }, 500);
    setTimeout(function () {
        $(".one_right .right_img03").fadeIn().addClass("imgShow03")
    }, 600);
    setTimeout(function () {
        $(".one_right .right_img04").fadeIn().addClass("imgShow04")
    }, 700);
    setTimeout(function () {
        $(".one_right .right_img05").fadeIn().addClass("imgShow05")
    }, 500);
    setTimeout(function () {
        $(".one_right .right_img06").fadeIn().addClass("imgShow06")
    }, 600);
    setTimeout(function () {
        $(".one_right .right_img07").fadeIn().addClass("imgShow07")
    }, 700);
    //two_Show
    $(window).scroll(function () {
        if ($(window).scrollTop() >= $(".content_two").offset().top - 500) {
            $(".two_left,.two_right").show().addClass("animated rollIn");
        }
        $(".two_left").find(".two_left_join").hover(function () {
            $(this).addClass("animated jello");
        }, function () {
            $(this).removeClass("animated jello");
        })
    });
    //three_Show
    $(window).scroll(function () {
        if ($(window).scrollTop() >= $(".content_three").offset().top - 500) {
            //$(".three_left").fadeIn(500);
            //$(".three_right").fadeIn(500);
            $(".three_left").show().addClass("animated fadeInRight");
            $(".three_right").show().addClass("animated fadeInRightBig");
        }
    });
    //four_Show
    $(window).scroll(function () {
        if ($(window).scrollTop() >= $(".content_four").offset().top - 500) {
            $(".four_imgBox").find(".imgBox").each(function (i) {
                var that = $(this);
                setTimeout(function () {
                    that.show().addClass("animated bounceInLeft");
                }, 300 * (i + 1));
            });
        }
    });
    // 3D img
        $(".imgBox").hover3d({
            selector: ".box__card",
            shine: true,
        });
});
