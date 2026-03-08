import { initializeApp } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js";

import {
  getAuth,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.10.0/firebase-auth.js";

import {
  getFirestore,
  doc,
  getDoc
} from "https://www.gstatic.com/firebasejs/12.10.0/firebase-firestore.js";



/* FIREBASE CONFIG */

const firebaseConfig = {
  apiKey: "AIzaSyD5VotnEcZ6hQduMoF5AjL0024x1VTkEu4",
  authDomain: "banhkietgithunbpoem.firebaseapp.com",
  projectId: "banhkietgithunbpoem",
  storageBucket: "banhkietgithunbpoem.firebasestorage.app",
  messagingSenderId: "429631951698",
  appId: "1:429631951698:web:8c5f6854de3ad22113a08b"
};



/* INIT FIREBASE */

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);



/* CHỜ TRANG LOAD */

window.addEventListener("DOMContentLoaded", () => {

  const userSpan = document.getElementById("usernameshow");

  if (!userSpan) {
    console.log("Không tìm thấy usernameshow");
    return;
  }


  onAuthStateChanged(auth, async (user) => {

    if (!user) {
      console.log("Chưa đăng nhập");
      userSpan.innerText = "bạn";
      return;
    }

    console.log("User UID:", user.uid);


    try {

      const ref = doc(db, "users", user.uid);

      const snap = await getDoc(ref);

      if (snap.exists()) {

        const data = snap.data();

        console.log("Firestore data:", data);

        userSpan.innerText = data.username || "user";

      } else {

        console.log("Không tìm thấy document");

        userSpan.innerText = "user";

      }

    } catch (err) {

      console.log("Lỗi Firestore:", err);

    }

  });

});