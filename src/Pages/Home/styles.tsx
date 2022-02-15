import { styled, TextField, TextFieldProps } from "@mui/material";

const Wrapper = styled("div")(() => {
	return {
		// padding: theme.spacing(1),
	};
});

const StyledPaper = styled((props: TextFieldProps) => <TextField {...props} />)(
	() => {
		return {
			"& .MuiFilledInput-input": {
				color: "red",
			},
		};
	}
);

const EditorWrapper = styled("div")(({ theme }) => ({
	padding: 32,
}));

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	Wrapper,
	StyledPaper,
	EditorWrapper,
};
