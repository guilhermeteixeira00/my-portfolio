const form = document.getElementById("form");
const username = document.getElementById("nome");
const email = document.getElementById("email");
/* const numero = document.getElementById("numero"); */
const assunto = document.getElementById("assunto");
const mensagem = document.getElementById("mensagem");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const usernameValue = username.value;
    const emailValue = email.value;
    /* const numeroValue = numero.value; */
    const assuntoValue = assunto.value;
    const mensagemValue = mensagem.value;

    const url = ('https://wa.me/+5561999647021/?text= Nome: ' + usernameValue + 
        ' Email: ' + emailValue + 
        ' Assunto: ' + assuntoValue +
        /* ' Numero: ' + numeroValue +  */
        ' Mensagem:' + mensagemValue);

    const win = window.open(url, '_blank')
    win.focus()
})

