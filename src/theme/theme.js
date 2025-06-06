import { createTheme } from "@mui/material/styles";

export const getTheme = (mode) =>
	createTheme({
		palette: {
			mode,
			primary: {
				main: "#1976d2",
			},
			secondary: {
				main: "#9c27b0",
			},
		},
		typography: {
			fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
			fontSize: 14,
		},
	});
