function confirmHobbies(){
    let guitar = document.getElementById("guitar");
    let youtube = document.getElementById("youtube");
    let music = document.getElementById("music");

    let body = document.getElementById("hobbiesBody");

    let selected= "<ul>";

    if(guitar.checked != 0){
        selected += "<li>Playing Guitar</li>";
    }
    if(youtube.checked != 0){
        selected += "<li>Watching Youtube</li>";
    }
    if(music.checked != 0){
        selected += "<li>Listening to Music</li>";
    }

    selected += "</ul>"

    body.innerHTML = selected;

}

function submitHobbies(){
    let guitar = document.getElementById("guitar");
    let youtube = document.getElementById("youtube");
    let music = document.getElementById("music");
    
    let guitarDiv = document.getElementById("guitarDiv");
    let youtubeDiv = document.getElementById("youtubeDiv");
    let musicDiv = document.getElementById("musicDiv");

    

    if(guitar.checked != 0){
        guitarDiv.className = "project-card d-md-flex flex-row justify-content-between align-items-center p-3";
    }
    else{
        guitarDiv.className = "d-none";
    }
    if(youtube.checked != 0){
        youtubeDiv.className = "project-card d-md-flex flex-row justify-content-between align-items-center p-3";
    }
    else{
        youtubeDiv.className = "d-none";
    }
    if(music.checked != 0){
        musicDiv.className = "project-card d-md-flex flex-row justify-content-between align-items-center p-3";
    }
    else{
        musicDiv.className = "d-none";
    }
}