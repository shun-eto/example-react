import { styled } from "@mui/material";

const Wrapper = styled("div")(() => ({
	".milkdown": {
		backgroundColor: "unset",
		boxShadow: "unset",

		"*": {
			fontFamily: `"Roboto","Helvetica","Arial",sans-serif`,
		},

		".editor": {
			padding: "0 !important",
			maxWidth: "unset",
		},

		".my-custom-paragraph": {
			margin: "12px 0",
			lineHeight: 1.75,
		},

		".my-h1": {
			fontSize: 50,
		},

		".my-custom-bullet-list": {
			margin: "12px 0",
		},
	},
}));

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	Wrapper,
};
