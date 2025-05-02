let isDarkMode = true;

function applyDarkMode() {
    const toggleDarkModeButton = document.getElementById("toggleDarkModeButton");

    if(isDarkMode)
        { /* parte dark mode */
        /* header.style.backgroundColor = "rgba(0, 0, 0, 0.7)"; */
        document.documentElement.style.setProperty('--clr', '#0f0');
        document.documentElement.style.setProperty('--degrade', 'rgba(0, 123, 123, 0.4)');
        document.documentElement.style.setProperty('--second-degrade', 'rgba(60, 0, 155, 0.8)');
        document.documentElement.style.setProperty('--main-color', 'rgb(0, 123, 123)');
        document.documentElement.style.setProperty('--bg-degrade', 'rgba(0, 0, 0, 0.5)');
        document.documentElement.style.setProperty('--bg-color', '#000000');
        document.documentElement.style.setProperty('--second-bg-color', '#161616');
        document.documentElement.style.setProperty('--text-color', 'snow');
        document.documentElement.style.setProperty('--border-color-one', '#00ffff');
        document.documentElement.style.setProperty('--border-color-two', '#005c5c6e');
        document.documentElement.style.setProperty('--silver', 'rgb(82, 82, 82)');
    } else
    { /* parte white mode */
        /* header.style.backgroundColor = "rgba(241, 250, 238, 0.5)"; */
        document.documentElement.style.setProperty('--clr', 'red');
        document.documentElement.style.setProperty('--degrade', 'rgba(29, 53, 87, 0.8)');
        document.documentElement.style.setProperty('--second-degrade', 'rgba(230, 57, 70, 1.0)');
        document.documentElement.style.setProperty('--main-color', '#1d3557');
        document.documentElement.style.setProperty('--bg-degrade', 'rgba(241, 250, 238, 0.05)');
        document.documentElement.style.setProperty('--bg-color', '#f1faee');
        document.documentElement.style.setProperty('--second-bg-color', '#457b9d');
        document.documentElement.style.setProperty('--text-color', 'black');
        document.documentElement.style.setProperty('--border-color-one', '#ff0000');
        document.documentElement.style.setProperty('--border-color-two', 'rgb(97, 0, 0)');
        document.documentElement.style.setProperty('--silver', 'rgb(255, 255, 0)');
    }
}

applyDarkMode();

function toggleDarkMode(){
    isDarkMode = !isDarkMode;
    applyDarkMode();
}
  