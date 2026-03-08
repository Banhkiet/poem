
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-firestore.js";

const firebaseConfig = {
apiKey:"AIzaSyD5VotnEcZ6hQduMoF5AjL0024x1VTkEu4",
authDomain:"banhkietgithunbpoem.firebaseapp.com",
projectId:"banhkietgithunbpoem",
storageBucket:"banhkietgithunbpoem.firebasestorage.app",
messagingSenderId:"429631951698",
appId:"1:429631951698:web:8c5f6854de3ad22113a08b"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);