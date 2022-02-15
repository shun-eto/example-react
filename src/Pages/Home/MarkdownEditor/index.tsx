import React, { createRef, useState } from "react";
import TurndownService from "turndown";
import ReactMarkdown from "react-markdown";

export const MarkdownEditor: React.FC = () => {
	const [md, setMd] = useState("default value");
	const turndownService = new TurndownService();
	// 	const html = document.getElementById("MarkdownEditor");

	// 	if (html) {
	// 		console.log("test");
	// 		console.log(turndownService.turndown(html));
	// 	}

	// 	const markdown = turndownService.turndown(`
	//     <h1>JavaScript for Beginners</h1>
	//     <p>Follow <a href="https://attacomsian.com/blog">Atta</a> to learn <b>JavaScript</b> from scratch!</p>
	// `);

	const ref = createRef<HTMLDivElement>();

	return (
		<div>
			<div
				ref={ref}
				contentEditable={true}
				suppressContentEditableWarning={true}
				onInput={() => {
					console.log("onInput");
					if (ref.current) {
						const markdown = turndownService
							.turndown(ref.current)
							.replaceAll("\\*", "*");
						setMd(markdown);
					}
				}}
			>
				<ReactMarkdown>{md}</ReactMarkdown>
			</div>
		</div>
	);
};
