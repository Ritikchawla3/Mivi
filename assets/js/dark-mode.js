


let darkMode = localStorage.getItem(toggle());

const darkModeToggle = document.getElementById("switch");


const enableDarkMode = () => {
  // 1. Add the class to the body
  toggleBack();
  // 2. Update darkMode in localStorage
  localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
  // 1. Remove the class from the body
   toggle();
  // 2. Update darkMode in localStorage 
  localStorage.setItem('darkMode', null);
}
 
// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === 'enabled') {
  disableDarkMode();
}

// When someone clicks the button
darkModeToggle.addEventListener('click', () => {
  // get their darkMode setting
  darkMode = localStorage.getItem('darkMode'); 
  
  // if it not current enabled, enable it
  if (darkMode !== 'enabled') {
    enableDarkMode();
  // if it has been enabled, turn it off  
  } else {  
    disableDarkMode(); 
  }
});





function toggle(){
    var body = document.getElementById("body").style.background = "#161616";
    var body = document.getElementById("body").style.color = "white";
    var canvas = document.getElementById("canvas1").style.background = "#161616";
    var name = document.getElementById("name").style.color = "white";
    var present = document.getElementById("present").style.color = "white";
    var socialOne = document.getElementById("social").style.color = "white";
    var socialTwo = document.getElementById("social-two").style.color = "white";
    var socialThree = document.getElementById("social-three").style.color = "white";
    var socialFour = document.getElementById("social-four").style.color = "white";
    var socialFive = document.getElementById("social-five").style.color = "white";
    var title = document.getElementById("title").style.color = "white";
    var titleTwo = document.getElementById("title-two").style.color = "white";
    var titleThree = document.getElementById("title-three").style.color = "white";
    var titleFour = document.getElementById("title-four").style.color = "white";
    var titleFive = document.getElementById("title-five").style.color = "white";
    var titleSix = document.getElementById("title-six").style.color = "white";
    var titleSeven = document.getElementById("title-seven").style.color = "white";
    var titleSeven = document.getElementById("title-eight").style.color = "white";
    var resumeTitleOne = document.getElementById("resume-title-one").style.color = "white";
    var resumeTitleTwo = document.getElementById("resume-title-two").style.color = "white";
    var resumeTitleThree = document.getElementById("resume-title-three").style.color = "white";
    var yearOne = document.getElementById("yearOne").style.background = "#161616";
    var yearTwo = document.getElementById("yearTwo").style.background = "#161616";
    var yearThree = document.getElementById("yearThree").style.background = "#161616";
    var yearFour = document.getElementById("yearFour").style.background = "#161616";
    var explain = document.getElementById("explain-profile").style.color = "#ffc107";
    var contentBoxOne = document.getElementById("CB-1").style.background = "#161616";
    var contentBoxOne = document.getElementById("CB-2").style.background = "#161616";
    var contentBoxOne = document.getElementById("CB-3").style.background = "#161616";
    var contentBoxOne = document.getElementById("CB-4").style.background = "#161616";
    var boxOne = document.getElementById("box-1").style.color = "white";
    var boxTwo = document.getElementById("box-2").style.color = "white";
    var boxThree = document.getElementById("box-3").style.color = "white";
    var boxFour = document.getElementById("box-4").style.color = "white";
    var info = document.getElementById("extra").style.background = "#161616";
    var form = document.getElementById("mail").style.background = "#161616";
    var location = document.getElementById("location").style.color = "white";
    var address = document.getElementById("address").style.color = "white";
    var email = document.getElementById("email").style.color = "white";
    var detail = document.getElementById("detail").style.color = "white";
    var call = document.getElementById("call").style.color = "white";
    var number = document.getElementById("number").style.color = "white";
    var skillOne = document.getElementById("skillOne").style.color = "white";
    var skillTwo = document.getElementById("skillTwo").style.color = "white";
    var skillThree = document.getElementById("skillThree").style.color = "white";
    var skillFour = document.getElementById("skillFour").style.color = "white";
    var skillFive = document.getElementById("skillFive").style.color = "white";
    var skillSix = document.getElementById("skillSix").style.color = "white";
    var fotter = document.getElementById("footer").style.color = "white";
    var fotter = document.getElementById("footer").style.background = "black"
}

function toggleBack(){
    var body = document.getElementById("body").style.background = "white";
    var body = document.getElementById("body").style.color = "black";
    var canvas = document.getElementById("canvas1").style.background = "white";
    var name = document.getElementById("name").style.color = "black";
    var present = document.getElementById("present").style.color = "black";
    var socialOne = document.getElementById("social").style.color = "black";
    var socialTwo = document.getElementById("social-two").style.color = "black";
    var socialThree = document.getElementById("social-three").style.color = "black";
    var socialFour = document.getElementById("social-four").style.color = "black";
    var socialFive = document.getElementById("social-five").style.color = "black";
    var title = document.getElementById("title").style.color = "#45505b";
    var titleTwo = document.getElementById("title-two").style.color = "#45505b";
    var titleThree = document.getElementById("title-three").style.color = "#45505b";
    var titleFour = document.getElementById("title-four").style.color = "#45505b";
    var titleFive = document.getElementById("title-five").style.color = "#45505b";
    var titleSix = document.getElementById("title-six").style.color = "#45505b";
    var titleSeven = document.getElementById("title-seven").style.color = "#45505b";
    var titleSeven = document.getElementById("title-eight").style.color = "#45505b";
    var resumeTitleOne = document.getElementById("resume-title-one").style.color = "black";
    var resumeTitleTwo = document.getElementById("resume-title-two").style.color = "black";
    var resumeTitleThree = document.getElementById("resume-title-three").style.color = "black";
    var yearOne = document.getElementById("yearOne").style.background = "#f7f8f9";
    var yearTwo = document.getElementById("yearTwo").style.background = "#f7f8f9";
    var yearThree = document.getElementById("yearThree").style.background = "#f7f8f9";
    var yearFour = document.getElementById("yearFour").style.background = "#f7f8f9";
    var explain = document.getElementById("explain-profile").style.color = "#728394";
    var contentBoxOne = document.getElementById("CB-1").style.background = "white";
    var contentBoxOne = document.getElementById("CB-2").style.background = "white";
    var contentBoxOne = document.getElementById("CB-3").style.background = "white";
    var contentBoxOne = document.getElementById("CB-4").style.background = "white";
    var boxOne = document.getElementById("box-1").style.color = "#011426";
    var boxTwo = document.getElementById("box-2").style.color = "#011426";
    var boxThree = document.getElementById("box-3").style.color = "#011426";
    var boxFour = document.getElementById("box-4").style.color = "#011426";
    var info = document.getElementById("extra").style.background = "white";
    var form = document.getElementById("mail").style.background = "white";
    var location = document.getElementById("location").style.color = "#45505b";
    var address = document.getElementById("address").style.color = "#728394";
    var email = document.getElementById("email").style.color = "#45505b";
    var detail = document.getElementById("detail").style.color = "#728394";
    var call = document.getElementById("call").style.color = "#45505b";
    var number = document.getElementById("number").style.color = "#728394";
    
    
}

