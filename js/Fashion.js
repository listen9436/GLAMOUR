/**
 * Created by Administrator on 2017/3/13.
 */
$(function () {
    //加载头部、尾部页面
    //$(".header").load("header.html");
    //$(".footer").load("footer.html");
    //one
    $(window).scroll(function () {
        if($(window).scrollTop()>=500){
            $(".fashion_one").find(".together").show().addClass("active_tge");
        }
    });
    //two
    $(window).scroll(function () {
        if($(window).scrollTop()>=800){
            $(".fashion_two").animate({opacity:1},1800);
        }
    });
    //shop_Show
    var i = 0;
    $(".fashion_four").find(".loading").click(function () {
        i++;
        if (i%10==1){
            $(".show_box1").fadeIn().siblings("div").fadeOut();
        }
        else if (i%10==2){
            $(".show_box2").fadeIn().siblings("div").fadeOut();
        }
        else if (i%10==3){
            $(".show_box3").fadeIn().siblings("div").fadeOut();
        }
        else if (i%10==4){
            $(".show_box4").fadeIn().siblings("div").fadeOut();
        }
        else if (i%10==5){
            $(".show_box5").fadeIn().siblings("div").fadeOut();
        }
        else if (i%10==6){
            $(".show_box6").fadeIn().siblings("div").fadeOut();
        }
        else if (i%10==7){
            $(".show_box7").fadeIn().siblings("div").fadeOut();
        }
        else if (i%10==8){
            $(".show_box8").fadeIn().siblings("div").fadeOut();
        }
        else if (i%10==9){
            $(".show_box9").fadeIn().siblings("div").fadeOut();
        }
        else if (i%10==0){
            $(".show_box10").fadeIn().siblings("div").fadeOut();
        }
    });
    var open = false;
    $(".loading").click(function () {
        if (open = true){
            $(".loading").find("a").css({"transform":"rotate(360deg)","transition":"1s"});
            setTimeout(function(){
                $(".loading").find("a").css({"transform":"rotate(0deg)","transition":"0s"});
                open = false;
            },800)
        }
    });
});
