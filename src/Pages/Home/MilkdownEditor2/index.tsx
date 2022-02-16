import { defaultValueCtx, Editor, rootCtx } from "@milkdown/core";
import { gfm } from "@milkdown/preset-gfm";
import { emoji } from "@milkdown/plugin-emoji";
import { prism } from "@milkdown/plugin-prism";
import { tooltip } from "@milkdown/plugin-tooltip";
import { slash } from "@milkdown/plugin-slash";
import { useState } from "react";
import { ReactEditor, useEditor } from "@milkdown/react";
import { nes } from "./nes";

const defaultValue = `
# :checkered_flag: Milkdown NES

![paper](https://images.hdqwalls.com/wallpapers/8-bit-pixel-art-city-2o.jpg)

\`\`\`typescript
const milkdown = "magic";
\`\`\`

* The [lunatic](https://github.com/Saul-Mirone/milkdown) is on the grass
* The lunatic is in the hall

| Theme | Keywords |
| -------- | ----- |
| Nes | Cyberpunk |
| Nord | Elegant |
`;

export const MilkdownEditor2: React.FC = () => {
	const [markdown, setMarkdown] = useState("");

	const editor = useEditor((root, renderReact) => {
		return (
			Editor.make()
				.config((ctx) => {
					ctx.set(rootCtx, root);
					ctx.set(defaultValueCtx, defaultValue);
					// ctx.get(listenerCtx).markdownUpdated((_, markdown) => {
					// 	setMarkdown(markdown);
					// });
				})
				// .use(nord)
				// .use(commonmark)
				.use(nes)
				.use(gfm)
				.use(emoji)
				.use(tooltip)
				.use(slash)
				.use(prism)
		);
	});

	return (
		<div>
			MilkdownEditor2
			<ReactEditor editor={editor} />
		</div>
	);
};
