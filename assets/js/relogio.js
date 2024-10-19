/* Relogio */
function updateClock(){
  var novo = new Date()
  var Nome = "Hora: ";
  var horas = novo.getHours();
  var minutos = novo.getMinutes();
  var segundos = novo.getSeconds();

  horas = horas < 10 ? "0" + horas : horas;
  minutos = minutos < 10 ? "0" + minutos : minutos;
  segundos = segundos < 10 ? "0" + segundos : segundos;

  var timeString = Nome + horas + ":" + minutos + ":" + segundos;
  document.getElementById("Clock").innerHTML = timeString;

  /* var NomeD = "Data: ";
  var dia = novo.getDay();
  var mes = novo.getMonth()
  var ano = novo.getFullYear()

  dia = dia < 10 ? "0" + dia : dia;
  mes = mes < 10 ? "0" + mes : mes;
  ano = ano < 10 ? "0" + ano : ano;

  var dateString = NomeD + dia + "/" + mes + "/" + ano;
  document.getElementById("Date").innerHTML = dateString; */
}
setInterval(updateClock, 1000);
updateClock();

/* FEITO TODO PELO TEIXEIRA */