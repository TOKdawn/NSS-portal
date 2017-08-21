/**
 * Created by dawn on 2017/8/14.
 */



$(document).ready(function(){

    var wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: true,
        live: true
    });
    wow.init();



    var win_h=document.body.clientHeight;
   // console.log(win_h);
    var win_w=document.body.clientWidth;

   $('.lunbo_z').css("height",win_h).css("width",win_w);
    $('.main').css("top",win_h);
    $('.article').css("height",win_h-60).css("width",win_w);
    //$('.lunbo_img').css("height",win_h).css("width",win_w);



    $(window).resize(function () {          //当浏览器大小变化时
        var win_h=document.body.clientHeight;
       // console.log(win_h);
        var win_w=document.body.clientWidth;
        if(win_w<=1330){
            console.log("aaaaa");
            win_w=1330;
        }
        $('.lunbo_z').css("height",win_h).css("width",win_w);
        $('.main').css("top",win_h);
        $('.article').css("height",win_h-60).css("width",win_w);
        $('.lunbo_img').css("height",win_h).css("width",win_w);

    });



    var scroll_parallax=$('.scroll_parallax_gb');

     addEvent(window,'scroll',onScroll);
    onScroll();

    function onScroll(e){

        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
         if(scrollTop==0){
             scrollTop=-1666;
             //垃圾火狐!!!!!
         }

        //console.log(scrollTop);
       //  var Orz="0px "+400+scrollTop*.3;
       //  console.log(Orz);
       // scroll_parallax.css("background-position",Orz);
    //    垃圾火狐QAQ
        scroll_parallax.css("background-position-y",400+scrollTop*.3);
    }

    function addEvent(eventTarget, eventType, eventHandler) {
        if (eventTarget.addEventListener) {
            eventTarget.addEventListener(eventType, eventHandler, false);
        } else {
            if (eventTarget.attachEvent) {
                eventType = "on" + eventType;
                eventTarget.attachEvent(eventType, eventHandler);
            } else {
                eventTarget["on" + eventType] = eventHandler;
            }
        }
    }



    $(window).scroll(function () {
        if($(window).scrollTop()>0){
            $('header').addClass("mini");
        }else {
            $('header').removeClass("mini");
        }



    })

    $('nav >li').mouseenter(function(){

        $(this).children().removeClass("zbouncein zbounceout");
        $(this).children().addClass("zbouncein");
    });
    $("nav >li").mouseleave(function(){
        $(this).children().removeClass("zbouncein zbounceout");
        $(this ).children().addClass("zbounceout");
    });
    $('#studio').mouseenter(function(){

        $('#studio >a').removeClass("zjackout zjackin");
        $('#studio >a').addClass("zjackin");

    });
    $('#studio').mouseleave(function(){

        $('#studio >a').removeClass("zjackout zjackin");
        $('#studio >a').addClass("zjackout");

    });
    $('#studio').mouseover(function(){
        $('#header_childnav_stdio').removeClass("header_childnav")

        $('#header_childnav_stdio').addClass("header_childnavhid")
    });
    $('#studio').mouseout(function(){
        $('#header_childnav_stdio').removeClass("header_childnavhid")

        $('#header_childnav_stdio').addClass("header_childnav")
    });


});