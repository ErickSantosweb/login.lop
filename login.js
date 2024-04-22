function acesso(){
    var nome = document.getElementById ('nome').value;
    var email = document.getElementById ('email').value;
    var senha = document.getElementById ('senha').value;
    var conf = document.getElementById ('senha_conf').value;

    if(nome == "Erick" && email == "es3671745@gmail.com" && senha == "Erick123" && conf == "Erick123"){
        alert("senha válida");
    }else{
        alert("tente novamente");
    }
}