import { doc, updateDoc } from "firebase/firestore";

async function approvePoem(id) {

    await updateDoc(doc(db, "poems", id), {
        status: "approved"
    });

    alert("Đã duyệt bài thơ");

}