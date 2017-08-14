/**
 * Created by dawn on 2017/8/14.
 */


$(document).ready(function(){



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