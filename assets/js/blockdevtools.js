document.addEventListener('keydown', function(event) {
    if (event.key === "F12" || (event.ctrlKey && event.shiftKey && event.key === "I")) {
        event.preventDefault(); // Impede o menu de contexto de aparecer
    }
});
  
document.addEventListener('contextmenu', function(event) {
    event.preventDefault(); // Impede o menu de contexto de aparecer
});