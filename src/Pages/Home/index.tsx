import { useCallback, useState } from "react";
import { MilkdownEditor } from "./MilkdownEditor";
import styles from "./styles";
import "material-icons/css/material-icons.css";
import { QuillEditor } from "./Quill";
import { TinyMceEditor } from "./TinyMce";
import { EditorJS } from "./EditorJS";

export const Home: React.FC = () => {
	const [markdown, setMarkdown] = useState(`
	default-value

test`);
	const { EditorWrapper } = styles;

	const handleMarkdownChange = useCallback((markdown: string) => {
		setMarkdown(markdown);
	}, []);

	return (
		<div id="home">
			<EditorWrapper>
				EditorJS
				<EditorJS />
			</EditorWrapper>

			<EditorWrapper>
				TinyMceEditor
				<TinyMceEditor />
			</EditorWrapper>

			<EditorWrapper>
				QuillEditor
				<QuillEditor
					markdown={markdown}
					onChange={(content) => setMarkdown(content)}
				/>
			</EditorWrapper>
			<EditorWrapper>
				MilkdownEditor
				<MilkdownEditor markdown={markdown} onChange={handleMarkdownChange} />
			</EditorWrapper>
		</div>
	);
};
