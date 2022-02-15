import { defaultValueCtx, Editor, rootCtx } from "@milkdown/core";
import { listener, listenerCtx } from "@milkdown/plugin-listener";
import { commonmark } from "@milkdown/preset-gfm";
import { ReactEditor, useEditor } from "@milkdown/react";
import { nordLight, nord } from "@milkdown/theme-nord";
import { useState } from "react";
import { slash } from "@milkdown/plugin-slash";
import { table } from "@milkdown/plugin-table";
import { menu } from "@milkdown/plugin-menu";
import { prism } from "@milkdown/plugin-prism";
import { shiki } from "milkdown-plugin-shiki";

export const MilkdownEditor2: React.FC = () => {
	const [markdown, setMarkdown] = useState("");

	const editor = useEditor((root, renderReact) => {
		return Editor.make()
			.config((ctx) => {
				ctx.set(rootCtx, root);
				// ctx.set(defaultValueCtx, markdown);
				// ctx.get(listenerCtx).markdownUpdated((_, markdown) => {
				// 	setMarkdown(markdown);
				// });
			})
			.use(nord)
			.use(commonmark)
			.use(prism)
			.use(slash)
			.use(menu())
			.use(listener);
	});

	return (
		<div>
			MilkdownEditor2
			<ReactEditor editor={editor} />
		</div>
	);
};
