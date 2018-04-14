// Initialize Firebase
var config = {
  apiKey: "AIzaSyBkPN5Uzu_TnRlXCxnO1Ac0YTz2JkicGPA",
  authDomain: "casa-automatica-86bff.firebaseapp.com",
  databaseURL: "https://casa-automatica-86bff.firebaseio.com",
  projectId: "casa-automatica-86bff",
  storageBucket: "casa-automatica-86bff.appspot.com",
  messagingSenderId: "552042836113"
};
firebase.initializeApp(config);

var alertaSucesso ="<button onclick='apagarAlertaSucesso()' class='close'>✖</button><strong>Sucesso!</strong>";
var alertaErro ="<button onclick='apagarAlertaErro()' class='close'>✖</button><strong>Erro!</strong>";

function login(){
  $("#txtUsuario").hide();
  $("#btnCriarConta").hide();
  $("#btnLogin").show();
}

function novaConta() {
  $("#txtUsuario").show();
  $("#btnCriarConta").show();
  $("#btnLogin").hide();
}

function logar(){
  escondeAlertas();
    const email = $("#txtEmail").val();
    const senha = $("#txtSenha").val();
    const auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword(email, senha);
    promise.then(e => location.href = "viewCasaLogado.html");
    promise.catch(e => $("#alertaErro").html(alertaErro).append(" " + e.message).show());
}

function criarConta(){
    escondeAlertas();
    const usuario = $("#txtUsuario").val();
    if(usuario === "") {
      $("#alertaErro").html(alertaErro).append(" Insira um nome").show();
      return;
    }
    const email = $("#txtEmail").val();
    const senha = $("#txtSenha").val();
    const auth = firebase.auth();
    const promise = auth.createUserWithEmailAndPassword(email, senha);
    promise.then(e => e.updateProfile({ displayName: usuario}));
    promise.then(e => $("#alertaSucesso").html(alertaSucesso).append(" Sua conta foi criada").show());
    promise.then(e => login());
    promise.catch(e => $("#alertaErro").html(alertaErro).append(" " + e.message).show());
}

function apagarAlertaSucesso(elemento) {
  $("#alertaSucesso").hide();
}

function apagarAlertaErro(elemento) {
  $("#alertaErro").hide();
}

function escondeAlertas() {
  $("#alertaErro").hide();
  $("#alertaSucesso").hide();
}