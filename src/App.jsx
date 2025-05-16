import { useEffect, useState, useMemo } from "react";
import { ThemeProvider, CssBaseline, IconButton } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getTheme } from "./theme/theme";
import LoginPage from "./pages/Login";
import Home from "./pages/Home";
import ProtectedRoute from "./auth/ProtectedRoute";
import { listenAuth } from "./auth/authService";
import CookieConsent from "./components/CookieConsent";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

export default function App() {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);
	const [mode, setMode] = useState(() =>
		window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
	);

	useEffect(() => {
		const unsubscribe = listenAuth((user) => {
			setUser(user);
			setLoading(false);
		});
		return () => unsubscribe();
	}, []);

	const theme = useMemo(() => getTheme(mode), [mode]);

	if (loading) return <p>Cargando...</p>;

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<CookieConsent />
			<BrowserRouter>
				<div style={{ position: "absolute", top: 10, right: 10 }}>
					<IconButton onClick={() => setMode((prev) => (prev === "light" ? "dark" : "light"))}>
						{mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
					</IconButton>
				</div>
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
		</ThemeProvider>
	);
}
