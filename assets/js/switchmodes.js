let isDarkMode = true;

function applyDarkMode() {
    const toggleDarkModeButton = document.getElementById("toggleDarkModeButton");

    if(isDarkMode){
        document.body.style.backgroundColor = "var(--bg-color)";
        document.body.style.color = "snow";  
        header.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
        servicos.style.backgroundColor = "var(--second-bg-color)";
        projetos.style.backgroundColor = "var(--bg-color)";
        skills.style.backgroundColor = "var(--second-bg-color)";
        aprendizado.style.backgroundColor = "var(--bg-color)";
    } else{
        document.body.style.backgroundColor = "rgb(225, 225, 225)";
        document.body.style.color = "#000000";
        header.style.backgroundColor = "rgba(79, 79, 79, 0.9)";
        servicos.style.backgroundColor = "rgb(79, 79, 79)";
        projetos.style.backgroundColor = "rgb(225, 225, 225)";
        skills.style.backgroundColor = "rgb(79, 79, 79)";
        aprendizado.style.backgroundColor = "rgb(225, 225, 225)";
    }
}

applyDarkMode();

function toggleDarkMode(){
    isDarkMode = !isDarkMode;
    applyDarkMode();
}