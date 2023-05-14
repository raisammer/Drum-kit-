var key= document.querySelectorAll("button.drum");
console.log(key);
var file=['w','a','s','d','j','k','l'];
function w_pressed(index)
{
    var ind = file.indexOf(index)+1;
    if(ind==-1)
    {
        return ;
    }
    Music_src= "C:/Users/dell/c,c++/.vscode/.vscode/web development/Drum Kit Starting Files/Drum Kit Starting Files/sounds/c";
    Music_src+=ind+".mp3";
    console.log(Music_src)
    var music = new Audio(Music_src);
    music.play();
}   

for(var i=0; i<key.length; i++){
    key[i].addEventListener("click",function(e)
    {
        w_pressed(this.innerHTML);
    } )
    key[i].addEventListener("keydown",function(event)
    {
        w_pressed(event.key);
    })
}