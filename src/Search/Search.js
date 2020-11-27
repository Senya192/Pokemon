import React, { useState } from 'react'



export const Search = () => {

	const [value, Setvalue] = useState('')

	const onPokemon = event => {
		if (event.key !== 'Enter') {
			return
		}

		if (value.trim()) {
			console.log('Enter');
		}

	}

	return (
		<div >
			<input
				type="text"
				className="form-control"
				placeholder="Введите ник пользователя..."
				value={value}
				onChange={event => Setvalue(event.target.value)}
				onKeyPress={onPokemon}
			/>
		</div>
	)
}