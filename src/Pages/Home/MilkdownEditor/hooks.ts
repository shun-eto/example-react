import { defaultValueCtx, Editor, rootCtx } from "@milkdown/core";
import { useEditor } from "@milkdown/react";
// import { nordLight } from "@milkdown/theme-nord";
import { listener, listenerCtx } from "@milkdown/plugin-listener";
import { history } from "@milkdown/plugin-history";
import { MilkdownEditorProps } from ".";
import { emoji } from "@milkdown/plugin-emoji";
import { indent } from "@milkdown/plugin-indent";
import { menu } from "@milkdown/plugin-menu";
import {
	commonmark,
	bulletList,
	heading,
	paragraph,
	SupportedKeys,
} from "@milkdown/preset-gfm";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props: MilkdownEditorProps) => {
	const editor = useEditor((root, renderReact) => {
		// const nodes = commonmark
		// 	.configure(paragraph, {
		// 		className: () => "my-custom-paragraph",
		// 	})
		// 	.configure(heading, {
		// 		className: (attrs) => `my-custom-heading my-h${attrs.level}`,
		// 	})
		// 	.configure(bulletList, {
		// 		className: () => `my-custom-bullet-list`,
		// 		// keymap: {
		// 		// 	[SupportedKeys.BulletList]: "Mod-]",
		// 		// },
		// 	});
		return (
			Editor.make()
				.config((ctx) => {
					ctx.set(rootCtx, root);
					ctx.set(defaultValueCtx, props.markdown);
					// ctx.get(listenerCtx).markdownUpdated((_, markdown) => {
					// 	props.onChange?.(markdown);
					// });
				})
				// .use(nordLight)
				// .use(nodes)
				.use(history)
				.use(emoji)
				.use(indent)
				.use(menu())
				.use(listener)
		);
	});

	return { editor };
};
