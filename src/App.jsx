import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login";
import Home from "./pages/Home";
import ProtectedRoute from "./auth/ProtectedRoute";
import { listenAuth } from "./auth/authService";

export default function App() {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const unsubscribe = listenAuth((user) => {
			setUser(user);
			setLoading(false);
		});
		return () => unsubscribe();
	}, []);

	if (loading) return <p>Cargando...</p>;

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<LoginPage setUser={setUser} />} />
				<Route
					path="/home"
					element={
						<ProtectedRoute user={user}>
							<Home />
						</ProtectedRoute>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
}
