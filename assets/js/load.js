window.addEventListener('load', function () {
    setTimeout(function () {
      document.getElementById('loader').style.display = 'none';
      document.getElementById('conteudo').style.display = 'block';
    }, 5000);
  });