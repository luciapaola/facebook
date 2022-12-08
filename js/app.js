// Initialize Firebase
// const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

//Obtener elementos de HTML

const  txtemail=document.getElementById("txtcorreo");
const  txtpass=document.getElementById("txtpass");
const  btnregistro=document.getElementById("btnregistro");
const  btnlogin=document.getElementById("btnlogin");
const  btnlogout=document.getElementById("btnlogout");

//Añadir evento de registro

   btnregistro.addEventListener('click',e=>{ 
    const email=txtemail.value;
    const pass=txt.pass.value;
    const auth=firebase.auth();

    const registro=auth.createUserWithEmailAndPassword(email,pass);
    console.log("Registro exitoso");

    registro.catch(e=>console.log(e.message));
 });
  
 //Añadir evento de ingreso

   btnlogin.addEventListener ('click',e=>{
     const email= txtemail.value;
     const pass= txtpass.value;
     const auth= firebase.auth();

  //ingreso

  const ingreso=auth.signInWithEmailAndPassword(email,pass);
  console.log("Registro exitoso");

  ingreso.catch(e=>console.log(e.message));

});

//Cerrar Sesion

    btnlogin.addEventListener ('click',e=>{
    firebase.auth().signOut();

    console.log("Gracias por su visita");

    ingreso.catch(e=>console.log(e.message));
  
  });
  

