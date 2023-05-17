var key= document.querySelectorAll("button.drum");
console.log(key);

function action(pressed)
{
    switch (pressed) {
        case "w":
            c1_Src= "C:/Users/dell/c,c++/.vscode/.vscode/web development/Drum Kit Starting Files/Drum Kit Starting Files/sounds/c1.mp3";
            var music = new Audio(c1_Src);
            music.play();
            break;
        case "a":
            c2_Src= "C:/Users/dell/c,c++/.vscode/.vscode/web development/Drum Kit Starting Files/Drum Kit Starting Files/sounds/c2.mp3";
            var music = new Audio(c2_Src);
            music.play();
            break;
        case "s":
            c3_Src= "C:/Users/dell/c,c++/.vscode/.vscode/web development/Drum Kit Starting Files/Drum Kit Starting Files/sounds/c3.mp3";
            var music = new Audio(c3_Src);
            music.play();
            break;
        case "d":
            c4_Src= "C:/Users/dell/c,c++/.vscode/.vscode/web development/Drum Kit Starting Files/Drum Kit Starting Files/sounds/c4.mp3";
            var music = new Audio(c4_Src);
            music.play();
            break;
        case "j":
            c5_Src= "C:/Users/dell/c,c++/.vscode/.vscode/web development/Drum Kit Starting Files/Drum Kit Starting Files/sounds/c5.mp3";
            var music = new Audio(c5_Src);
            music.play();
            break;
        case "k":
            c6_Src= "C:/Users/dell/c,c++/.vscode/.vscode/web development/Drum Kit Starting Files/Drum Kit Starting Files/sounds/c6.mp3";
            var music = new Audio(c6_Src);
            music.play();
            break;
        case "l":
            c7_Src= "C:/Users/dell/c,c++/.vscode/.vscode/web development/Drum Kit Starting Files/Drum Kit Starting Files/sounds/c7.mp3";
            var music = new Audio(c7_Src);
            music.play();
            break;            
        default:
            console.log(this.innerHTML);
            break;
    }
}
for(var i=0; i<key.length; i++){
    key[i].addEventListener("click",function(e)
    {
        action(this.innerHTML);
        animation(this.innerHTML);
    } 
    )
}

// I can use button key press for teh whole document but for click i know the region where i am clicking 
document.addEventListener("keydown",function(event)
{
    action(event.key);
    animation(event.key);
})

function animation(event)
{
    var press  = document.querySelector("." + event);
    press.classList.add("pressed");

    // setTimeout function works as to call the next function after the delay of second parameter 
    setTimeout(function()
    {
        removeAnimation(event);
    },100) // Remove animation after a delay of 100 ms 
}
function removeAnimation(event)
{
    var press = document.querySelector("." + event);
    press.classList.remove("pressed");
}
