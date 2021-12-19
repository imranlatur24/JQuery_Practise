// console.log($);
// console.log(jQuery);

// $("button").click(function(){
//     alert("button clicked");
// });

// jQuery("button").click(function(){
//     alert("button clicked");
// });

//run safe when document load then execute function note:::above function is not secured
// $(document).ready(function(){
//     $("button").click(function(){
//         alert("button clicked");
//     });
// });

// //more secure than above function using selector and p tag
// jQuery.noConflict();
// jQuery(document).ready(function($){
//     $("#btn-id").click(function(){
//         alert("button clicked by id");
//     }); 
//     $("#class-id").click(function(){
//         alert("button clicked by class id");
//     }); 
//     $("p").click(function(){
//         alert("button clicked by paragraph tag there is no id");
//     }); 
// });


//more secure than above function using selector and p tag
jQuery.noConflict();
jQuery(document).ready(function($){
    $("p").click(function(){
        console.log("button clicked by paragraph tag there is no id");
    }); 
    $("p").click(function(){
        console.log("single click");
    }); 
    $("p").dblclick(function(){
        console.log("button bouble clicked");
    }); 
    $("p").mouseenter(function () { 
        console.log("mouse enter");
    });
    $("p").mouseleave(function () { 
        console.log("mouse leave");
    });
    $("p").mousedown(function () { 
        console.log("mouse down"); 
    });
    $("#name").keydown(function (e) { 
        console.log("key down");  
    });
    $("#name").keypress(function (e) { 
        console.log("key press");  
    });
    $("#name").keyup(function (e) { 
        console.log("key up");  
    });
    // form example
    $("#fname").focus(function () { 
        console.log("focus field");  
    });
    $("#fname").blur(function () { 
        console.log("blur field");  
    });
    $("#submitform").submit(function (e) { 
        console.log("form submitted");  
        e.preventDefault();
    });
    // window events
    $(window).resize(function(){
       console.log('window resized'); 
    });
    //hide
    $("#btn-hide").click(function(){
        $("#image1").hide(3000,function(){
            console.log('image hide successfully')
        });
    });
    //show
    $("#btn-show").click(function(){
        $("#image1").show(2000,function(){
            console.log('image show successfully')
        });
    });
    //hide and show using single toggle button
    $("#btn-toggle").click(function(){
        $("#image1").toggle(1000,function(){
            console.log('image show successfully')
        });
    });
    $("#fade-in").click(function(){
        $("#image1").fadeTo(1000,0.5,function(){
            console.log('image fade-To successfully')
        });
    });
    $("#fade-out").click(function(){
        $("#image1").fadeOut(1000,function(){
            console.log('image fade-out successfully')
        });
    });
    $("#fade-toggle").click(function(){
        $("#image1").fadeToggle(1000,function(){
            console.log('image fade-toggle successfully')
        });
    });
    $("#btn-slide-up").click(function(){
        $("#image1").slideUp(1000,function(){
            console.log('image slide up')
        });
    });
    $("#btn-slide-down").click(function(){
        $("#image1").slideDown(1000,function(){
            console.log('image btn-slide-down')
        });
    });
    $("#btn-slide-toggle").click(function(){
        $("#image1").fadeToggle(1000,function(){
            console.log('image btn-slide-toggle')
        });
    });
    // custom animation is going on using animate function
    $("#btn-animate").click(function(){
        $("#demo_img").animate({left:"+=1180"},1000,function(){
            console.log('image animation started')
        });
    });
});