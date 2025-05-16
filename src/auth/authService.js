import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "./firebase";

export const login = async (email, password) => {
	try {
		const userCredential = await signInWithEmailAndPassword(auth, email, password);
		return { user: userCredential.user };
	} catch (error) {
		console.error("Firebase auth error:", error.code, error.message);
		return { error: error.message };
	}
};

export const logout = async () => {
	await signOut(auth);
};

export const listenAuth = (callback) => {
	return onAuthStateChanged(auth, callback);
};
