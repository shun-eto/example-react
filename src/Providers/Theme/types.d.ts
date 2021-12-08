import { Theme as OrigTheme } from "@mui/material";

declare module "@mui/material" {
	export interface Theme extends OrigTheme {
		background: string;
	}
}
