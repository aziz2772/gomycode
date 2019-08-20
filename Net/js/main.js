
// loun l page active hasb e scroll
$(window).scroll(function(){
    let scroll = $(window).scrollTop();
    if(scroll>0 && (scroll<500 && $("body").hasClass("isScrolling")==false ||(scroll<1100 && $("body").hasClass("isScrolling")))){
        $(".active").removeClass("active");
        $("#first").addClass("active");
    }
    if(scroll>=510 && $("body").hasClass("isScrolling")==false ||$("body").hasClass("isScrolling")&&scroll >=1100 ){
        $(".active").removeClass("active");
        $("#second").addClass("active");
    }
    if(scroll>=1550 && $("body").hasClass("isScrolling")==false ||$("body").hasClass("isScrolling")&&scroll >=2200 ){
        $(".active").removeClass("active");
        $("#third").addClass("active");
    }
    if(scroll>=3500 && $("body").hasClass("isScrolling")==false ||$("body").hasClass("isScrolling")&&scroll >=4230 ){
        $(".active").removeClass("active");
        $("#forth").addClass("active");
    }
});
// shortcut scroll 1
$("#first").click(function(event){
    event.preventDefault();
    $(".active").removeClass("active");
    $("#first").addClass("active");
    $(window).scrollTop(100);

})
// shortcut scroll 2
$("#second").click(function(event){
    event.preventDefault();
    $(".active").removeClass("active");
    $("#second").addClass("active");
    if($("body").hasClass("isScrolling")==false){
    $(window).scrollTop(550);
    }else{
        $(window).scrollTop(1230);
    }

})
$("#third").click(function(event){
    event.preventDefault();
    $(".active").removeClass("active");
    $("#third").addClass("active");
    if($("body").hasClass("isScrolling")==false){
    $(window).scrollTop(1640);
    }else{
            $(window).scrollTop(2320);
    }

})
$("#forth").click(function(event){
    event.preventDefault();
    $(".active").removeClass("active");
    $("#forth").addClass("active");
    if($("body").hasClass("isScrolling")==false){
    $(window).scrollTop(3766);
    }else{
            $(window).scrollTop(4460);
    }

})
// Lena nkhabiw f kol chay wra l header when scroll 0
$(window).scroll(function(){
    let scroll = $(window).scrollTop();
    if (scroll > 0){
        $("header").addClass("scrolling");
        $(".under-logo").addClass("in-header");
        $(".under-logo").removeClass("out-header");
        $("section.right").show();
        $("hr").show();

    }else{
        $("header").removeClass("scrolling");
        $(".under-logo").removeClass("in-header");
        $(".under-logo").addClass("out-header");
        $("section.right").hide();
        $("hr").hide();
        }
    })
//modal shit
$('.modal').appendTo("body") 

$("#open-modal").click(function(){
    $(".modal").show();
})
$("#close-modal").click(function(){
    $(".modal").hide();
})
$(window).click(function(event){
    if(event.target==$(".modal")[0] && $(".modal").css("display")!="none"){
        $(".modal").hide();
    }
})
//toggle taa l click me
$(".skills").mouseenter(function(){
    $(this).children(".clickme:first").toggle(300);
})
$(".skills").mouseleave(function(){
    $(this).children(".clickme:first").hide(300);

})
// show of the logos
$(".langu").mouseover(function(){
    $(this).closest('td').next().children(":first").show(700);
})
// $(".langu").mouseleave(function(){
//     $(this).closest('td').next().children(":first").hide(700);
// })

//Click on the skills + adding class to body (nice save)
$(".skills").click(function(){
    $(this).css("backgroundColor","#97E9F4")
    $(this).next().slideToggle(1000);
    if($("body").hasClass("isScrolling")){
        $("body").removeClass("isScrolling");
    }
    else{$("body").addClass("isScrolling")}
})
$(document).ready(function(){
    $(".square").animate({
        opacity:"1",
    },1300)
})

// fade in of the paragraphs in education section depending on skills (opened or not: check conditions)
$(window).scroll(function(){
    let scroll = $(window).scrollTop();
    //thank you so much console.log <3
    console.log($(window).scrollTop())
    if(scroll>500 && $("body").hasClass("isScrolling")==false  || ($("body").hasClass("isScrolling")&&scroll>1100)){
        $(".borderC #first-par").fadeIn(300);
    }
    else{
        $(".borderC #first-par").fadeOut(300);

    }
    if(scroll>700 && $("body").hasClass("isScrolling")==false || ($("body").hasClass("isScrolling")&&scroll>1300)){
        $(".borderC #second-par").fadeIn(300);
    }
    else{
        $(".borderC #second-par").fadeOut(300);

    }
    if(scroll>900 && $("body").hasClass("isScrolling")==false || ($("body").hasClass("isScrolling")&&scroll>1480)){
        $(".borderC #third-par").fadeIn(300);
    }
    else{
        $(".borderC #third-par").fadeOut(300);

    }
    })
    $(window).scroll(function(){
        let scroll = $(window).scrollTop();
        if(scroll>=1900 && $("body").hasClass("isScrolling")==false  || ($("body").hasClass("isScrolling")&&scroll>2500)){
            $("#hidden1").fadeIn(300);
        }
        else{
            $("#hidden1").fadeOut(300);
    }
        if(scroll>=2300 && $("body").hasClass("isScrolling")==false  || ($("body").hasClass("isScrolling")&&scroll>3000)){
             $("#hidden2").fadeIn(300);
         }
        else{
             $("#hidden2").fadeOut(300);
    }
        if(scroll>=2740 && $("body").hasClass("isScrolling")==false  || ($("body").hasClass("isScrolling")&&scroll>3300)){
             $(".hidden-row-1 span").fadeIn(400);
        }
        else{
             $(".hidden-row-1 span").fadeOut(400);
        }
        if(scroll>=3060 && $("body").hasClass("isScrolling")==false  || ($("body").hasClass("isScrolling")&&scroll>3800)){
             $(".hidden-row-2 span").fadeIn(400);
        }
        else{
            $(".hidden-row-2 span").fadeOut(400);
         }
        if(scroll>=3700 && $("body").hasClass("isScrolling")==false  || ($("body").hasClass("isScrolling")&&scroll>4200)){
            $(".hidden-row-3 span").fadeIn(900);
        }   
        else{
            $(".hidden-row-3 span").fadeOut(900);
        }
    });
$(".under-logo.out-header").click(function(){
    if($(this).hasClass("out-header")){
    $(window).scrollTop(100);
    }
    else{
    $(window).scrollTop(0);
    }
})