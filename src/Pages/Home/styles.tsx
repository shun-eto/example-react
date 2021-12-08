import { styled, TextField, TextFieldProps } from "@mui/material";

const Wrapper = styled("div")(({ theme }) => {
	console.log("theme", theme);
	return {
		padding: theme.spacing(1),
	};
});

const StyledPaper = styled((props: TextFieldProps) => <TextField {...props} />)(
	({ theme }) => {
		return {
			"& .MuiFilledInput-input": {
				color: "red",
			},
		};
	}
);

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	Wrapper,
	StyledPaper,
};
