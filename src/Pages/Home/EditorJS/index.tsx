import { createReactEditorJS } from "react-editor-js";

const ReactEditorJS = createReactEditorJS();

export const EditorJS: React.FC = () => {
	return <ReactEditorJS defaultValue={{}} />;
};
