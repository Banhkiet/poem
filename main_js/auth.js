import { auth, db } from "./firebase-config.js";

import {
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.10.0/firebase-auth.js";

import {
setDoc,
doc,
getDoc
} from "https://www.gstatic.com/firebasejs/12.10.0/firebase-firestore.js";


/* ================= ROLE SELECT ================= */

const teacher=document.getElementById("teacher");
const friend=document.getElementById("friend");

/* chỉ chạy nếu tồn tại (trang login_register) */

if(teacher && friend){

teacher.addEventListener("change",()=>{
if(teacher.checked) friend.checked=false;
});

friend.addEventListener("change",()=>{
if(friend.checked) teacher.checked=false;
});

}


/* ================= FORM SWITCH ================= */

window.showRegister=function(){

const login=document.getElementById("loginForm");
const register=document.getElementById("registerForm");

if(login) login.style.display="none";
if(register) register.style.display="block";

}

window.showLogin=function(){

const login=document.getElementById("loginForm");
const register=document.getElementById("registerForm");

if(login) login.style.display="block";
if(register) register.style.display="none";

}


/* ================= REGISTER ================= */

window.register=async function(){

const fullname=document.getElementById("fullname")?.value;
const username=document.getElementById("username")?.value;
const email=document.getElementById("email")?.value;
const password=document.getElementById("password")?.value;

const role=teacher?.checked?"teacher":friend?.checked?"friend":"";

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

if(msg){
msg.className="message success";
msg.innerText="Đăng ký thành công";
msg.style.display="block";
}

setTimeout(showLogin,1500);

}catch(err){

if(msg){
msg.className="message error";
msg.innerText=err.code;
msg.style.display="block";
}

}

}


/* ================= LOGIN ================= */

window.login=async function(){

const email=document.getElementById("loginEmail")?.value;
const password=document.getElementById("loginPassword")?.value;

const msg=document.getElementById("loginMsg");

try{

await signInWithEmailAndPassword(auth,email,password);

if(msg){
msg.className="message success";
msg.innerText="Đăng nhập thành công";
msg.style.display="block";
}

/* reload trang cha để navbar cập nhật username */

setTimeout(()=>{
if(window.parent){
window.parent.location.reload();
}
},1000);

}catch(err){

if(msg){
msg.className="message error";
msg.innerText=err.code;
msg.style.display="block";
}

}

}


/* ================= HIỂN THỊ USERNAME TRÊN NAVBAR ================= */

onAuthStateChanged(auth,async(user)=>{

const nameBox=document.getElementById("usernameshow");

if(!nameBox) return;

if(user){

try{

const snap=await getDoc(doc(db,"users",user.uid));

if(snap.exists()){

const data=snap.data();

nameBox.innerText=data.username || "bạn";

}else{

nameBox.innerText="bạn";

}

}catch(err){

console.error(err);
nameBox.innerText="bạn";

}

}else{

nameBox.innerText="bạn";

}

});