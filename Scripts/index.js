/**
 * Created by dawn on 2017/8/14.
 */


$(document).ready(function(){







    var win_h=document.body.clientHeight;
    console.log(win_h);
    var win_w=document.body.clientWidth;


   var scroll_parallax=$('.scroll_parallax_gb');

     addEvent(window,'scroll',onScroll);
    onScroll();

    function onScroll(e){
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        console.log(scrollTop);
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
    $('.lunbo_z').css("height",win_h).css("width",win_w);
    $('.main').css("top",win_h);

    $('nav >li').mouseenter(function(){

        $(this).children().removeClass("bouncein bounceout");
        $(this).children().addClass("bouncein");
    });
    $("nav >li").mouseleave(function(){
        $(this).children().removeClass("bouncein bounceout");
        $(this ).children().addClass("bounceout");
    });
    $('#studio').mouseenter(function(){

        $('#studio >a').removeClass("jackout jackin");
        $('#studio >a').addClass("jackin");

    });
    $('#studio').mouseleave(function(){

        $('#studio >a').removeClass("jackout jackin");
        $('#studio >a').addClass("jackout");

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