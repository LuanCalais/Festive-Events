// Conexion configuration file with db firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLI-NmDHRi9BgBaxsumJrnt4QLoT-dQgQ",
  authDomain: "eventos-4e296.firebaseapp.com",
  projectId: "eventos-4e296",
  storageBucket: "eventos-4e296.appspot.com",
  messagingSenderId: "185249565687",
  appId: "1:185249565687:web:7aa19ab5c3cd568e8abcf2"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export default firebase 