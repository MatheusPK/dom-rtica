var config = {
    apiKey: "AIzaSyBkPN5Uzu_TnRlXCxnO1Ac0YTz2JkicGPA",
    authDomain: "casa-automatica-86bff.firebaseapp.com",
    databaseURL: "https://casa-automatica-86bff.firebaseio.com",
    projectId: "casa-automatica-86bff",
    storageBucket: "casa-automatica-86bff.appspot.com",
    messagingSenderId: "552042836113"
  };
  firebase.initializeApp(config);

  function sair(){
    firebase.auth().signOut().then(e => location.href = "viewCasaLogin.html").catch(e => console.log("catch login", e.message));
  }

const Led1 = firebase.database().ref('Led1');
const Led2 = firebase.database().ref('Led2');
const Temperatura = firebase.database().ref('Temperatura');

Led1.on('value', valor => {
    $("#Led1").text(valor.val());
});

Led2.on('value', valor => {
    $("#Led2").text(valor.val());
});

Temperatura.on('value', valor => {
    $("#Temperatura").text(valor.val());
});

function ligarLed1() {
    firebase.database().ref("Led1").set("ligada");
}

function desligarLed1() {
    firebase.database().ref("Led1").set("desligada");
}

function ligarLed2() {
    firebase.database().ref("Led2").set("ligada");
}

function desligarLed2() {
    firebase.database().ref("Led2").set("desligada");
}



$(function(){
    $("#userName").text(firebase.auth().currentUser.displayName);
});
 