// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { productos } from "../data/asyncMock";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDVQNPH03LwXBfQESqtIYYHdDeGnDopG0",
  authDomain: "supersecretstore-419b9.firebaseapp.com",
  projectId: "supersecretstore-419b9",
  storageBucket: "supersecretstore-419b9.appspot.com",
  messagingSenderId: "42928898959",
  appId: "1:42928898959:web:a9699fc45bdb56166b01fa",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app);

/*productos.forEach((prod) => {
  addDoc(collection(dataBase, "productos"), prod)
    .then((data) => console.log(`Se subio ${data.name} correctamente`))
    .catch((err) => console.log(err));
});*/
