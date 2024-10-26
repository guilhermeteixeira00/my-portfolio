let isDarkMode = true;

function applyDarkMode() {
    const toggleDarkModeButton = document.getElementById("toggleDarkModeButton");

    if(isDarkMode)
        { /* parte dark mode */
        header.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
        document.documentElement.style.setProperty('--bg-color', '#000000');
        document.documentElement.style.setProperty('--second-bg-color', '#161616');
        document.documentElement.style.setProperty('--text-color', 'snow');
    } else
    { /* parte white mode */
        header.style.backgroundColor = "rgba(79, 79, 79, 0.9)";
        document.documentElement.style.setProperty('--bg-color', '#cacaca');
        document.documentElement.style.setProperty('--second-bg-color', '#797979');
        document.documentElement.style.setProperty('--text-color', '#000000');
    }
}

applyDarkMode();

function toggleDarkMode(){
    isDarkMode = !isDarkMode;
    applyDarkMode();
}