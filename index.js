function gravar(){

    let email = document.getElementById("email").value;

    if (typeof(Storage) !== "undefined") {

        localStorage.setItem('email', email);

      } else {
        console.log("Desculpe, mas o navegador nao possui suporte a Web Storage.");
      }

   

    console.log("gravado");



}