import React, { Fragment } from "react";
import "./App.css";
import Pokemon from "./Pokemon/Pokemon";
import { pokemons } from "./StaticContent/StaticContent";
import { Search } from './Search/Search'

export default function App() {
	return (


		<div className="App">
			<h1>Pokemons</h1>
			<Search />
			<div className='App-Pokemon'>
				{pokemons.map(({ id, img, name }) => {
					return <Pokemon key={id} img={img} name={name} />;
				})}
			</div>

		</div>
	);
}

