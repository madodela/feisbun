$(function(){
    $(".hidden-email").hide()
    $(".change-form").hide()
    $(".user-display").on("hover",function(){
        $(this).children(".hidden-email").fadeToggle("slow")
    })
    $(".user-display").on("click",function(){
        if(!right){
            $(".user-display").animate({
                right: '+=300'
            },500,function(){})
            right = true;
        }
        username = $(this).children(".user-name").html()
        email = $(this).children(".hidden-email").html()
        $(".user-form").html("")
        $(".user-form").append(username)
        if(!formvisible){
            $(".change-form").delay(500).fadeToggle("slow")
        }
        formvisible = true
        $("#username").val(username)
        $("#email").val(email)
        $("#reemail").val(email)
    })
    $(".signup-form").on("submit",function(){
        
    })
});

var formvisible = false
var right = false;
var username = ""
var email = ""