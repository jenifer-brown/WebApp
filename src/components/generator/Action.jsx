export default function Action(props) {
	const { handleSubmit } = props;

	const [numResults, setNumResults] = React.useState(0);
	const actionType = props.generatorType;
	return (
		<div className="action">
			<button className="filterButton" onClick={() => setNumResults(1)}>
				Single Suggestion
			</button>
			<button className="filterButton" onClick={() => setNumResults(10)}>
				Choose 10
			</button>
			<br />
			<button className="filterButton" onClick={() => handleSubmit(numResults)}>
				Submit
			</button>
		</div>
	);
}
