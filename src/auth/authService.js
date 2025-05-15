import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

// Login
export const login = async (email, password) => {
	try {
		const userCredential = await signInWithEmailAndPassword(auth, email, password);
		return { user: userCredential.user };
	} catch (error) {
		return { error: error.message };
	}
};

// Logout
export const logout = () => signOut(auth);

// Escuchar cambios de sesión
export const listenAuth = (callback) => {
	return onAuthStateChanged(auth, callback);
};
