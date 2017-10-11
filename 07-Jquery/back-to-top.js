$(document).ready(function(){
    $(window).scroll(function(){
        var scrollPos = window.scrollY;
        /*console.log(scrollPos);*/
        if (scrollPos >= 900){
            $("#back-to-top").css('display','block');
        }
        else {
            $("#back-to-top").css('display','none');
        }
    })
});