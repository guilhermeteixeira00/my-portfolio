let isDarkMode = true;

function applyDarkMode() {
    const toggleDarkModeButton = document.getElementById("toggleDarkModeButton");

    if(isDarkMode)
        { /* parte dark mode */
        header.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
        document.documentElement.style.setProperty('--degrade', 'rgba(0, 123, 123, 0.4)');
        document.documentElement.style.setProperty('--second-degrade', 'rgba(60, 0, 155, 0.8)');
        document.documentElement.style.setProperty('--main-color', 'rgb(0, 123, 123)');
        document.documentElement.style.setProperty('--bg-degrade', 'rgba(0, 0, 0, 0.9)');
        document.documentElement.style.setProperty('--bg-color', '#000000');
        document.documentElement.style.setProperty('--second-bg-color', '#161616');
        document.documentElement.style.setProperty('--text-color', 'snow');
        document.documentElement.style.setProperty('--silver', 'rgb(82, 82, 82)');
    } else
    { /* parte white mode */
        header.style.backgroundColor = "rgba(79, 79, 79, 0.9)";
        document.documentElement.style.setProperty('--degrade', 'rgba(255, 0, 0, 0.4)');
        document.documentElement.style.setProperty('--second-degrade', 'rgba(0, 255, 0, 0.8)');
        document.documentElement.style.setProperty('--main-color', 'rgba(123, 0, 0, 0.8)');
        document.documentElement.style.setProperty('--bg-degrade', 'rgba(79, 79, 79, 0.9)');
        document.documentElement.style.setProperty('--bg-color', '#cacaca');
        document.documentElement.style.setProperty('--second-bg-color', '#797979');
        document.documentElement.style.setProperty('--text-color', '#000000');
        document.documentElement.style.setProperty('--silver', 'rgb(255, 255, 0)');
    }
}

function toggleDarkMode(){
    isDarkMode = !isDarkMode;
    applyDarkMode();
}