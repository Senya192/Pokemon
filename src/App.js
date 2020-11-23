import React, { Component } from 'react';
import './App.css';
import Pokemon from './Pokemon/Pokemon'

class App extends Component {
	render() {
		return (
			<div className="App">

				<h1>Pokemon</h1>
				<Pokemon />
			</div>
		);
	}

}

export default App;
