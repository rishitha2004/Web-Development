// $("h1").css("color","red");
// $("h1.title").addClass("change");
// $("h1").text("Byee");
// $("h1.title").text("Rishi");
// $("button").text("<em>Submit</em>");
// $("button").html("<em>Submit</em>");
// $("h1").click(function(){
//     $("h1").css("color","purple");
// });

// In jS
// var selected=document.querySelectorAll("button");
// for(var i=0;i<selected.length;i++){
//     selected[i].addEventListener("click",function(){
//         document.querySelector("h1").style.color="purple";
//     });
// }

// $("button").click(function(){
//     $("h1").css("color","yellow");
// });


// $(document).keydown(function(event){
//     $("h1").text=event.key;
// });

// $("h1").on("mouseover",function(){
//     $("h1").css("color","purple");
// });


//Adding and removing elements
// $("h1").before("<button>Before</button>");
// $("h1").after("<button>After</button>");
// $("h1").prepend("<button>Prepend</button>");
// $("h1").append("<button>Append</button>");

// $("button").remove();

$("button").click(function(){
    // $("h1").hide();
    // $("h1").show();
    // $("h1").toggle();
    // $("h1").fadeOut();
    // $("h1").fadeIn();
    // $("h1").fadeToggle();
    // $("h1").slideUp();
    // $("h1").slideDown();
    // $("h1").slideToggle();
    // $("h1").animate({opacity:0.5});
    $("h1").slideUp().slideDown().animate({opacity:0.5});
});