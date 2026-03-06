import { initializeApp } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-auth-compat.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-firestore-compat.js";

const firebaseConfig = {
  apiKey: "AIzaSyD5VotnEcZ6hQduMoF5AjL0024x1VTkEu4",
  authDomain: "banhkietgithunbpoem.firebaseapp.com",
  projectId: "banhkietgithunbpoem",
  storageBucket: "banhkietgithunbpoem.firebasestorage.app",
  messagingSenderId: "429631951698",
  appId: "1:429631951698:web:8c5f6854de3ad22113a08b",
  measurementId: "G-S6V6YFZ4V9"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };