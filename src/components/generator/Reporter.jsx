export default function Reporter(props) {
	const { numResults } = props;

	return (
		<>
			<p className="reporter">{`${numResults} ${
				numResults === 1 ? "result" : "results"
			} found`}</p>
		</>
	);
}
