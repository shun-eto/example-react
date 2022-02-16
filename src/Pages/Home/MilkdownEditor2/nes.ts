import { css, injectGlobal } from "@emotion/css";
import { themeFactory } from "@milkdown/core";

const font =
	"Press Start 2P, cursive, HelveticaNeue-Light, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif";

const fontCode =
	"Press Start 2P, cursive, Consolas, Monaco, Andale Mono, Ubuntu Mono, monospace";

const Dracula = {
	background: "#282a36",
	currentLine: "#44475a",
	foreground: "#f8f8f2",
	comment: "#6272a4",
	cyan: "#8be9fd",
	green: "#50fa7b",
	orange: "#ffb86c",
	pink: "#ff79c6",
	purple: "#bd93f9",
	red: "#ff5555",
	yellow: "#f1fa8c",
};

const iconMapping: any = {
	h1: "looks_one",
	h2: "looks_two",
	h3: "looks_3",
	loading: "hourglass_empty",
	quote: "format_quote",
	code: "code",
	table: "table_chart",
	divider: "horizontal_rule",
	image: "image",
	brokenImage: "broken_image",
	bulletList: "format_list_bulleted",
	orderedList: "format_list_numbered",
	taskList: "checklist",
	bold: "format_bold",
	italic: "format_italic",
	inlineCode: "code",
	strikeThrough: "strikethrough_s",
	link: "link",
	leftArrow: "chevron_left",
	rightArrow: "chevron_right",
	upArrow: "expand_less",
	downArrow: "expand_more",
	alignLeft: "format_align_left",
	alignRight: "format_align_right",
	alignCenter: "format_align_center",
	delete: "delete",
	select: "select_all",
	unchecked: "check_box_outline_blank",
	checked: "check_box",
};

export const nes = themeFactory(() => ({
	font: {
		typography: font.split(", "),
		code: fontCode.split(", "),
	},
	size: {
		radius: "2px",
		lineWidth: "4px",
	},
	color: {
		shadow: Dracula.comment,
		primary: Dracula.purple,
		secondary: Dracula.pink,
		neutral: Dracula.foreground,
		solid: Dracula.yellow,
		line: Dracula.orange,
		background: Dracula.background,
		surface: Dracula.currentLine,
	},
	slots: () => ({
		icon: (id) => {
			const span = document.createElement("span");
			span.className = "icon material-icons material-icons-outlined";
			span.textContent = iconMapping[id];
			return span;
		},
	}),
	mixin: ({ palette, size }) => ({
		scrollbar: (direction = "y") => css`
			scrollbar-width: thin;
			scrollbar-color: ${palette("secondary", 0.38)}
				${palette("secondary", 0.12)};
			-webkit-overflow-scrolling: touch;
			&::-webkit-scrollbar {
				${direction === "y" ? "width" : "height"}: 4px;
				padding: 0 2px;
				background: ${palette("surface")};
			}
			&::-webkit-scrollbar-track {
				border-radius: 4px;
				background: ${palette("secondary", 0.12)};
			}
			&::-webkit-scrollbar-thumb {
				border-radius: 4px;
				background: ${palette("secondary", 0.38)};
			}
			&::-webkit-scrollbar-thumb:hover {
				background: ${palette("secondary")};
			}
		`,
		shadow: () => {
			const { lineWidth } = size;
			return css`
				box-shadow: 0px ${lineWidth} ${lineWidth} ${palette("shadow", 0.14)},
					0px 2px ${lineWidth} ${palette("shadow", 0.12)},
					0px ${lineWidth} 3px ${palette("shadow", 0.2)};
			`;
		},
		border: () => css`
			border-style: solid;
			border-width: 4px;
			border-image-slice: 3;
			border-image-width: 3;
			border-image-repeat: stretch;
			border-image-source: url('data:image/svg+xml;utf8,<?xml version="1.0" encoding="UTF-8" ?><svg version="1.1" width="8" height="8" xmlns="http://www.w3.org/2000/svg"><path d="M3 1 h1 v1 h-1 z M4 1 h1 v1 h-1 z M2 2 h1 v1 h-1 z M5 2 h1 v1 h-1 z M1 3 h1 v1 h-1 z M6 3 h1 v1 h-1 z M1 4 h1 v1 h-1 z M6 4 h1 v1 h-1 z M2 5 h1 v1 h-1 z M5 5 h1 v1 h-1 z M3 6 h1 v1 h-1 z M4 6 h1 v1 h-1 z" fill="rgb(255, 184, 108)" /></svg>');
			border-image-outset: 1;
			box-shadow: inset -6px -6px ${palette("shadow")};
			border-color: ${palette("line")};
		`,
	}),
	global: ({ palette, font, mixin, size }) => {
		const css = injectGlobal;
		return css`
			.milkdown {
				color: ${palette("neutral", 0.87)};
				background: ${palette("surface")};
				position: relative;
				font-family: ${font.typography};
				margin-left: auto;
				margin-right: auto;
				${mixin.shadow()};
				padding: 3.125rem 1.25rem;
				box-sizing: border-box;
				.editor {
					outline: none;
					& > * {
						margin: 1.875rem 0;
					}
				}
				.ProseMirror-selectednode {
					outline: ${size.lineWidth} solid ${palette("line")};
				}
				li.ProseMirror-selectednode {
					outline: none;
				}
				li.ProseMirror-selectednode::after {
					${mixin.border()}
				}
				@media only screen and (min-width: 72rem) {
					max-width: 57.375rem;
					padding: 3.125rem 7.25rem;
				}
				& ::selection {
					background: ${palette("secondary", 0.38)};
				}
			}
		`;
	},
}));
