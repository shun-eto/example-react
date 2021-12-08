import styles from "./styles";

export const Home: React.FC = () => {
	const { Wrapper, StyledPaper } = styles;

	return (
		<Wrapper>
			<div>
				<StyledPaper variant="filled" />
			</div>
			Home
		</Wrapper>
	);
};
