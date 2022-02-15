import { useCallback, useState } from "react";
import { MilkdownEditor } from "./MilkdownEditor";
import styles from "./styles";
import "material-icons/css/material-icons.css";
import { QuillEditor } from "./Quill";

export const Home: React.FC = () => {
	const [markdown, setMarkdown] = useState(`
	default-value

test`);
	const { MarkdownEditorWrapper } = styles;

	const handleMarkdownChange = useCallback((markdown: string) => {
		setMarkdown(markdown);
	}, []);

	return (
		<div id="home">
			<QuillEditor
				markdown={markdown}
				onChange={(content) => setMarkdown(content)}
			/>
			<MarkdownEditorWrapper>
				<MilkdownEditor markdown={markdown} onChange={handleMarkdownChange} />
			</MarkdownEditorWrapper>
		</div>
	);
};
