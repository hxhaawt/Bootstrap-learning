/**
 * Created by hxh on 2017/5/10.
 */

$(document).ready(function () {

    $(".carousel").carousel({
        interval: 5000
    });

    function initScroll() {

            // $(".side-nav ul.nav-side-nav a:eq(index)").addClass("my-scroll");
            // $(".side-nav ul.nav-side-nav a").not("a:eq(index)").removeClass("my-scroll");
            // $(".side-nav ul.nav-side-nav a:gt(0)").removeClass("my-scroll");
            // $(".side-nav ul.nav-side-nav a:lt(0)").removeClass("my-scroll");

        var firstPageHeight     = 820;
        var secondPageHeight    = 700;
        var threePageHeight     = 800;
        var fourPageHeight      = 700;
        var fivePageHeight      = 800;

        var scrollDiffVal = 5;

        var firstPageBottomHeight = firstPageHeight;
        var secondPageBottomHeight = firstPageBottomHeight + secondPageHeight;
        var threePageBottomHeight = secondPageBottomHeight + threePageHeight;
        var fourPageBottomHeight = threePageBottomHeight + fourPageHeight;
        var fivePageBottomHeight = fourPageBottomHeight + fivePageHeight;

        var t = document.documentElement.scrollTop || document.body.scrollTop;  //获取距离页面顶部的距离
        if ( t < firstPageBottomHeight-scrollDiffVal){

            $(".side-nav ul.nav-side-nav a:eq(0)").addClass("my-scroll");
            $(".side-nav ul.nav-side-nav a").not("a:eq(0)").removeClass("my-scroll");
        }
        // else if( t > firstPageBottomHeight-5 && t < secondPageBottomHeight-5) {
        else if(t < secondPageBottomHeight-scrollDiffVal) {

            $(".side-nav ul.nav-side-nav a:eq(1)").addClass("my-scroll");
            $(".side-nav ul.nav-side-nav a").not("a:eq(1)").removeClass("my-scroll");
        // } else if (t > secondPageBottomHeight-scrollDiffVal && t < threePageBottomHeight-scrollDiffVal){
        } else if (t < threePageBottomHeight-scrollDiffVal){

            $(".side-nav ul.nav-side-nav a:eq(2)").addClass("my-scroll");
            $(".side-nav ul.nav-side-nav a").not("a:eq(2)").removeClass("my-scroll");
        // }else if (t > threePageBottomHeight && t < fourPageBottomHeight){
        }else if (t < fourPageBottomHeight-scrollDiffVal){

            $(".side-nav ul.nav-side-nav a:eq(3)").addClass("my-scroll");
            $(".side-nav ul.nav-side-nav a:gt(3)").removeClass("my-scroll");
            $(".side-nav ul.nav-side-nav a:lt(3)").removeClass("my-scroll");
        // }else if ( t > fourPageBottomHeight){
        }else{

            $(".side-nav ul.nav-side-nav a:eq(4)").addClass("my-scroll");
            $(".side-nav ul.nav-side-nav a:gt(4)").removeClass("my-scroll");
            $(".side-nav ul.nav-side-nav a:lt(4)").removeClass("my-scroll");
        }

    }

    function myScroll() {

        initScroll();
        $(window).scroll( function() {
            initScroll();
        });
    }

    // 增加点击监听事件和屏幕滑动事件
    $(".side-nav ul.nav-side-nav a").on("click", initScroll);
    myScroll();


});