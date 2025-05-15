import { useState } from "react";
import { TextField, Button, Box, Typography, Alert } from "@mui/material";
import { login } from "../auth/authService";
import { useNavigate } from "react-router-dom";

export default function LoginForm({ setUser }) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(null);
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
	e.preventDefault();
	const { user, error } = await login(email, password);
	if (user) {
		setUser(user);
		navigate("/home");
	} else {
		setError(error);
	}
	};

	return (
	<Box component="form" onSubmit={handleSubmit} sx={{ width: 300, margin: "auto", mt: 10 }}>
		<Typography variant="h5" gutterBottom>Iniciar Sesión</Typography>
			{error && <Alert severity="error">{error}</Alert>}
		<TextField
			fullWidth margin="normal" label="Correo electrónico"
			value={email} onChange={(e) => setEmail(e.target.value)}
		/>
		<TextField
			fullWidth margin="normal" label="Contraseña" type="password"
			value={password} onChange={(e) => setPassword(e.target.value)}
		/>
		<Button variant="contained" fullWidth type="submit" sx={{ mt: 2 }}>
			Entrar
		</Button>
	</Box>
	);
}
