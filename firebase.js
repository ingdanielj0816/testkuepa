import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseApp = {
  apiKey: "AIzaSyCzHiyND1BpTtMIf99GQT8MTRf1f7unAAs",
  authDomain: "kuepatech.firebaseapp.com",
  projectId: "kuepatech",
  storageBucket: "kuepatech.appspot.com",
  messagingSenderId: "993861599881",
  appId: "1:993861599881:web:c3d70ee2493bb0bc407c58",
  measurementId: "G-6SR9Z1B1PV",
};
const app = initializeApp(firebaseApp);

const auth = getAuth(app);

const db = getFirestore(app);

export { app, auth, db };
