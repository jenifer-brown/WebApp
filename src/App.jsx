import Navbar from "./components/Navbar";
import "./App.css";
import Generator from "./components/generator/Generator";
import Results from "./components/results/Results";
import Tab from "./components/generator/Tab";
import About from "./components/About";

function App() {
	const [generatorType, setGeneratorType] = React.useState("");
	const [number, setNumber] = React.useState(0);
	const [update, setUpdate] = React.useState(false);
	const [decade, setDecade] = React.useState(undefined);
	const [genre, setGenre] = React.useState(undefined);
	const [runtime, setRuntime] = React.useState(180);
	const [shouldReport, setShouldReport] = React.useState(false);
	const [content, setContent] = React.useState("library");

	// Content types
	const contentType = ["library", "funFact", "about"];

	function handleNavClick(type) {
		setContent(type);
	}

	// Tab Functions
	function handleTabClick(type) {
		setGeneratorType(type);
		setDecade(undefined);
		setGenre(undefined);
		setShouldReport(false);
		if (number !== 0) {
			setSelectOption();
		}
		type === "movies" ? setRuntime(180) : setRuntime(undefined);
	}

	const tabs = [{ type: "books" }, { type: "movies" }, { type: "shows" }];
	const tabElements = tabs.map((tab) => (
		<Tab type={tab.type} handleClick={() => handleTabClick(tab.type)} />
	));

	// Generator Functions
	function handleSubmit(num) {
		setNumber(num);
		setUpdate((prev) => !prev);
		setShouldReport(true);
		console.log("submit");
	}

	function getFilters(e, selector) {
		switch (selector) {
			case "decade":
				typeof e.target.value === "string"
					? setDecade(e.target.value)
					: setDecade(undefined);
				console.log("set decade");
				break;
			case "genre":
				typeof e.target.value === "string"
					? setGenre(e.target.value)
					: setGenre(undefined);
				console.log(genre);
				break;
			case "runtime":
				setRuntime(e.target.value);
				console.log("Runtime change: " + e.target.value);
		}
	}

	function setSelectOption() {
		let elements = document.getElementsByTagName("select");
		for (let i = 0; i < elements.length; i++) {
			elements[i].selectedIndex = 0;
		}
	}

	return (
		<>
			<div className="App">
				<div>
					<Navbar handleNavClick={handleNavClick} />
				</div>
				{content === contentType[0] && (
					<div className="mainContainer">
						<>
							<div className="tabs">{tabElements}</div>
							<div className="placeholder"></div>
							<Generator
								className="generator"
								generatorType={generatorType}
								handleSubmit={handleSubmit}
								getFilters={getFilters}
								decade={decade}
								runtime={runtime}
								genre={genre}
							/>
							<div className="resultsBox">
								<Results
									type={generatorType}
									number={number}
									update={update}
									decade={decade}
									runtime={runtime}
									genre={genre}
									shouldReport={shouldReport}
								/>
							</div>
						</>
					</div>
				)}
				{content === contentType[2] && <About />}
			</div>
		</>
	);
}

export default App;
