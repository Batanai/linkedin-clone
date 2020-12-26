import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyASO9tbsOZ57SMTz9uZ3JNdXuouli2ikRg",
  authDomain: "linkedin-clone-e2882.firebaseapp.com",
  projectId: "linkedin-clone-e2882",
  storageBucket: "linkedin-clone-e2882.appspot.com",
  messagingSenderId: "484223444094",
  appId: "1:484223444094:web:8ebc7aa6239d461b11242f",
  measurementId: "G-RM6GP6B8GC",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.EmailAuthProvider();

export { auth, provider };
export default db;
