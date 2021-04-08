var buttoncolor=["red","blue","green","yellow"];

var gamepattern=[];

var userclickedpattern=[];

var level=0;

$("body").keypress(function(){
    if(level===0)
    {
      nextsequence();
    }
})

$(".btn").click(function(){
      var userchosencolor=$(this).attr("id");
      userclickedpattern.push(userchosencolor);
      animatepress(userchosencolor);
      playsound(userchosencolor);
      checkanswer(userclickedpattern.length-1);

});


function nextsequence()
{
    userclickedpattern=[];
    level=level+1;
    $("h1").text("Level "+ level);
    var randomnumber=Math.random();
    randomnumber=randomnumber * 4;
    randomnumber=Math.floor(randomnumber);

    var randomchoosencolor=buttoncolor[randomnumber];
    gamepattern.push(randomchoosencolor);
    $("#"+randomchoosencolor).fadeOut(100).fadeIn(100);
    playsound(randomchoosencolor);
}

function checkanswer(currentlevel)
{
    if(userclickedpattern[currentlevel]===gamepattern[currentlevel])
    {
      if(userclickedpattern.length === gamepattern.length)
     {
        setTimeout(function () {
          nextsequence();
        }, 1000);

      }
    }
     else
     {
        $("body").addClass("game-over");
        $("h1").text("game over");
        playsound("wrong");
        setTimeout(function(){
          $("h1").text("press any key to start");
          startover();
          $("body").removeClass("game-over");
        },800);

     }
}



function playsound(name)
{
  var plays=new Audio("sounds/"+ name + ".mp3");
  plays.play();
}

function animatepress(currentcolor)
{
  $("." + currentcolor).addClass("pressed");
  setTimeout(function(){
    $(".btn").removeClass("pressed");
  },100);
  // $("."+currentcolor).fadeOut(300).fadeIn(300);
}

function startover()
{
  userclickedpattern=[];
  gamepattern=[];
  level=0;
}









//////////////////////////////////////////////////////////////////////////////////////////////////

// var buttonColours = ["red", "blue", "green", "yellow"];
//
// var gamePattern = [];
//
// //3. At the top of the game.js file, create a new empty array with the name userClickedPattern.
// var userClickedPattern = [];
//
// //1. Use jQuery to detect when any of the buttons are clicked and trigger a handler function.
// $(".btn").click(function() {
//
//   //2. Inside the handler, create a new variable called userChosenColour to store the id of the button that got clicked.
//   var userChosenColour = $(this).attr("id");
//
//   //4. Add the contents of the variable userChosenColour created in step 2 to the end of this new userClickedPattern
//   userClickedPattern.push(userChosenColour);
//
//   //console.log(userClickedPattern);
//
// });
//
// function nextSequence() {
//
//   var randomNumber = Math.floor(Math.random() * 4);
//   var randomChosenColour = buttonColours[randomNumber];
//   gamePattern.push(randomChosenColour);
//
//   $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
//
//   var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
//   audio.play();
// }
