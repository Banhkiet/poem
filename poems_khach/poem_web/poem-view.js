import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = { /* config */ };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const params = new URLSearchParams(location.search);
const id = params.get("id");

async function loadPoem() {

    const docRef = doc(db, "poems", id);
    const snap = await getDoc(docRef);

    if (!snap.exists()) return;

    const data = snap.data();

    document.getElementById("poem-title").innerText = data.title;
    document.getElementById("poem-content").innerText = data.content;

    document.getElementById("poemImage").style.backgroundImage =
        `url(${data.image})`;

    document.getElementById("dynamicStyle").innerHTML = `
body{
background:url(${data.background}) center/cover no-repeat;
}

#poem-title{
font-family:'${data.fontTitle}';
}

#poem-content{
font-family:'${data.fontContent}';
}
`;

}

loadPoem();