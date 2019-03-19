
$(document).ready(function(){
    //when click need to 1.change arrow and 2.show the answer
    $(".card-header").on("click",function(){
        $(this).next().slideToggle(500);
        $(this).children().toggle();
        //$("#arrow-down1").toggle();
    });
})