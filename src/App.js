import React, { Component } from "react";
import "./App.css";
import Pokemon from "./Pokemon/Pokemon";
import imgs from "./img";
import NamePokemon from "./NamePokemon/NamePokemon";
import StaticContent from "./StaticContent/StaticContent";


function App() {
	return (
		<div className="App">

			{/* {imgs.map((img) => {
				// console.log(img.default);
				return <Pokemon img={img.default} />;
			})} */}

			<StaticContent />


		</div>


	);
};

export default App;
