/**
 * Created by hxh on 2017/5/10.
 */

$(document).ready(function () {

    $(".carousel").carousel({
        interval: 5000
    });

    function initScroll() {

        function scrollAddClass(n) {

            $(".side-nav ul.nav-side-nav a:eq(" + n + ")").addClass("my-scroll");
            $(".side-nav ul.nav-side-nav a").not("a:eq(" + n + ")").removeClass("my-scroll");
        }

        var firstPageHeight, secondPageHeight, threePageHeight, fourPageHeight, fivePageHeight;
        firstPageHeight = 820;
        secondPageHeight = 700;
        threePageHeight = 800;
        fourPageHeight = 700;
        fivePageHeight = 800;

        var scrollDiffVal = 10;

        var firstPageBottomHeight = firstPageHeight;
        var secondPageBottomHeight = firstPageBottomHeight + secondPageHeight;
        var threePageBottomHeight = secondPageBottomHeight + threePageHeight;
        var fourPageBottomHeight = threePageBottomHeight + fourPageHeight;
        var fivePageBottomHeight = fourPageBottomHeight + fivePageHeight;

        var t;
        t = document.documentElement.scrollTop || document.body.scrollTop;  //获取距离页面顶部的距离
        if ( t < firstPageBottomHeight-scrollDiffVal){

            scrollAddClass(0);
        }
        // else if( t > firstPageBottomHeight-5 && t < secondPageBottomHeight-5) {
        else if(t < secondPageBottomHeight-scrollDiffVal) {

            scrollAddClass(1);
        // } else if (t > secondPageBottomHeight-scrollDiffVal && t < threePageBottomHeight-scrollDiffVal){
        } else if (t < threePageBottomHeight-scrollDiffVal){

            scrollAddClass(2);
        // }else if (t > threePageBottomHeight && t < fourPageBottomHeight){
        }else if (t < fourPageBottomHeight-scrollDiffVal){

            scrollAddClass(3);
        // }else if ( t > fourPageBottomHeight){
        }else{

            scrollAddClass(4);
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