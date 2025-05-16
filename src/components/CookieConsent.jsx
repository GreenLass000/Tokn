import { Snackbar, Alert, Button } from "@mui/material";
import { useState, useEffect } from "react";

export default function CookieConsent() {
	const [open, setOpen] = useState(false);

	useEffect(() => {
		const consent = localStorage.getItem("cookieConsent");
		if (!consent) setOpen(true);
	}, []);

	const handleAccept = () => {
		localStorage.setItem("cookieConsent", "true");
		setOpen(false);
	};

	return (
		<Snackbar open={open} anchorOrigin={{ vertical: "bottom", horizontal: "center" }}>
			<Alert
				severity="info"
				action={
					<Button color="inherit" size="small" onClick={handleAccept}>
						Aceptar
					</Button>
				}
			>
				Usamos cookies para mejorar tu experiencia. ¿Aceptas?
			</Alert>
		</Snackbar>
	);
}
