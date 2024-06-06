// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-analytics.js";
import { getFirestore, addDoc, getDoc, collection } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAzzQQr_X8ZJWfrWcqa67kBeJ7tklx1c9E",
    authDomain: "venomkarting-72e96.firebaseapp.com",
    projectId: "venomkarting-72e96",
    storageBucket: "venomkarting-72e96.appspot.com",
    messagingSenderId: "970349874980",
    appId: "1:970349874980:web:a5404591899a6477296db1",
    measurementId: "G-BBV4NMJL1G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

butonSubmit.addEventListener('click', (e) => {
    var nume = document.getElementById("nume").value;
    var telefon = document.getElementById("telefon").value;
    var data = document.getElementById("data").value;

    addDoc(collection(db, "rezervari"), {
        Nume: nume,
        Telefon: telefon,
        Data: data,
    });
    alert("Rezervare efectuata cu succes!");
});