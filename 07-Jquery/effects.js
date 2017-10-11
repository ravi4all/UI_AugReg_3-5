$(document).ready(function(){
    /*$("#btn_1").click(function(){
        $("#img_1").fadeOut(2000);
    });
    $("#btn_2").click(function(){
        $("#img_1").fadeIn(2000);
    });
    $("#btn_3").click(function(){
        $("#img_1").fadeToggle(2000);
    });*/
    
    $("#btn_1").click(function(){
        $("#img_1").slideUp(2000);
    });
    $("#btn_2").click(function(){
        $("#img_1").slideDown(2000);
    });
    $("#btn_3").click(function(){
        $("#img_1").slideToggle(2000);
    });
    
})