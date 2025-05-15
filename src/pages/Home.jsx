import { Button } from "@mui/material";
import { logout } from "../auth/authService";
import { useNavigate } from "react-router-dom";

export default function Home() {
	const navigate = useNavigate();

	const handleLogout = async () => {
		await logout();
		navigate("/");
	};

	return (
		<div style={{ padding: 30 }}>
			<h1>Bienvenido</h1>
			<Button variant="contained" color="secondary" onClick={handleLogout}>
				Cerrar sesión
			</Button>
		</div>
	);
}
