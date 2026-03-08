import { auth, db } from "./firebase-config.js";

import {
createUserWithEmailAndPassword,
signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.10.0/firebase-auth.js";

import {
setDoc,
doc
} from "https://www.gstatic.com/firebasejs/12.10.0/firebase-firestore.js";


const teacher=document.getElementById("teacher");
const friend=document.getElementById("friend");


teacher.addEventListener("change",()=>{
if(teacher.checked) friend.checked=false;
});

friend.addEventListener("change",()=>{
if(friend.checked) teacher.checked=false;
});


window.showRegister=function(){

document.getElementById("loginForm").style.display="none";
document.getElementById("registerForm").style.display="block";

}

window.showLogin=function(){

document.getElementById("loginForm").style.display="block";
document.getElementById("registerForm").style.display="none";

}


/* REGISTER */

window.register=async function(){

const fullname=document.getElementById("fullname").value;
const username=document.getElementById("username").value;
const email=document.getElementById("email").value;
const password=document.getElementById("password").value;

const role=teacher.checked?"teacher":friend.checked?"friend":"";

const msg=document.getElementById("registerMsg");

try{

const userCredential=await createUserWithEmailAndPassword(auth,email,password);

await setDoc(doc(db,"users",userCredential.user.uid),{
fullname,
username,
email,
role,
admin:false,
created:Date.now()
});

msg.className="message success";
msg.innerText="Đăng ký thành công";
msg.style.display="block";

setTimeout(showLogin,1500);

}catch(err){

msg.className="message error";
msg.innerText=err.code;
msg.style.display="block";

}

}


/* LOGIN */

window.login=async function(){

const email=document.getElementById("loginEmail").value;
const password=document.getElementById("loginPassword").value;

const msg=document.getElementById("loginMsg");

try{

await signInWithEmailAndPassword(auth,email,password);

msg.className="message success";
msg.innerText="Đăng nhập thành công";
msg.style.display="block";

}catch(err){

msg.className="message error";
msg.innerText=err.code;
msg.style.display="block";

}

}