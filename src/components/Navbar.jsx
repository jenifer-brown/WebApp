import React from "react";

export default function Navbar(props) {
	const { handleNavClick } = props;

	return (
		<nav className="navbar">
			<img className="logo" src="src/assets/logo.jpg"></img>
			<button
				className="navbar-library"
				onClick={() => handleNavClick("library")}
			>
				The Library
			</button>
			<button
				className="navbar-funFact"
				onClick={() => handleNavClick("funFact")}
			>
				Fun Fact
			</button>
			<button className="navbar-about" onClick={() => handleNavClick("about")}>
				About
			</button>
		</nav>
	);
}
