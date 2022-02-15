import { ReactEditor } from "@milkdown/react";
import styles from "./styles";
import hooks from "./hooks";

export interface MilkdownEditorProps {
	markdown: string;
	onChange?: (markdown: string) => void;
}
export const MilkdownEditor: React.FC<MilkdownEditorProps> = (props) => {
	const { Wrapper } = styles;
	const { editor } = hooks(props);

	return (
		<Wrapper>
			<ReactEditor editor={editor} />
		</Wrapper>
	);
};
