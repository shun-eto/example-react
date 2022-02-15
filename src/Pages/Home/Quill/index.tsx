import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import TurndownService from "turndown";
import { marked } from "marked";

Quill.register("modules/markdownShortcuts", () => {});

const modules = {
	toolbar: false,
	keyboard: { bindings: { tab: {} } },
};

interface QuillEditorProps {
	markdown: string;
	onChange: (markdown: string) => void;
}
export const QuillEditor: React.FC<QuillEditorProps> = (props) => {
	const turndownService = new TurndownService();

	return (
		<div>
			<button
				onClick={() => {
					console.log(props.markdown);
					const data = turndownService.turndown(props.markdown);
					console.log(data);
					console.log(marked(data));
				}}
			>
				test
			</button>
			<ReactQuill
				modules={modules}
				value={props.markdown}
				onChange={(content: string) => {
					props.onChange(content);
				}}
			/>
		</div>
	);
};
