import { createTheme, ThemeProvider } from "@mui/material";

const muiTheme = createTheme({});

const theme = {
	background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
};

export const Theme: React.FC = (props) => {
	return (
		<ThemeProvider theme={{ ...theme, ...muiTheme }}>
			{props.children}
		</ThemeProvider>
	);
};
