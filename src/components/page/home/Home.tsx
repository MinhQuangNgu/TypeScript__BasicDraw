import React from "react";
import Canvas from "../canvas/Canvas";
import "./style.scss";
const Home: React.FC = () => {
	return (
		<div className="home">
			<Canvas width={window.innerWidth - 50} height={window.innerHeight - 80} />
		</div>
	);
};

export default Home;
