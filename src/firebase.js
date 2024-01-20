import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyCXMJmDgreEBsgeEPThRZ8H-A7E0JgK7vM",
	authDomain: "disneyplus-clone-69a15.firebaseapp.com",
	projectId: "disneyplus-clone-69a15",
	storageBucket: "disneyplus-clone-69a15.appspot.com",
	messagingSenderId: "282213579662",
	appId: "1:282213579662:web:5c09e60c6d3a98ddc102df",
	measurementId: "G-YDY3SXLK2V",
};

const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore(firebaseApp);
export const auth = getAuth(firebaseApp);
export const storage = getStorage(firebaseApp);
export const provider = new GoogleAuthProvider();
export default firebaseApp;
