import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

const firebaseConfig = {
	apiKey: "TU_API_KEY",
	authDomain: "TU_AUTH_DOMAIN",
	projectId: "TU_PROJECT_ID",
	storageBucket: "TU_BUCKET",
	messagingSenderId: "TU_SENDER_ID",
	appId: "TU_APP_ID",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const login = async (email, password) => {
	try {
		const userCredential = await signInWithEmailAndPassword(auth, email, password);
		return { user: userCredential.user };
	} catch (error) {
		return { error: "Correo o contraseña incorrectos." };
	}
};

export const logout = async () => {
	await signOut(auth);
};

export const listenAuth = (callback) => {
	return onAuthStateChanged(auth, callback);
};
