import React from 'react'

import img from "../img/001.png"
import img1 from "../img/002.png"
import img2 from "../img/003.png"
import img3 from "../img/004.png"
import img4 from "../img/005.png"
import img5 from "../img/006.png"
import img6 from "../img/007.png"



export default function StaticContent(props) {

	const nicNamePokemon = (
		<div>

			{namePokemon.map((id, name, img) =>
				// console.log(img)

				<div div >
					<img className='Img-Pokemon' src={img} alt="" />
					<p >
						{name}

					</p>
				</div>

			)
			}
		</div >
	);
	return (
		<div>
			{nicNamePokemon}
		</div>
	)
}


const namePokemon = [
	{
		id: "1",
		name: "Pikachu",
		img: img,
	},
	{
		id: "2",
		name: "Baltazar",

		img: img1,
	},
	{
		id: "3",
		name: "Youri",

		img: img2,
	},
	{
		id: "4",
		name: "4",

		img: img3,
	},
	{
		id: "5",
		name: "5",

		img: img4,
	},
	{
		id: "6",
		name: "6",

		img: img5,
	},
	{
		id: "7",
		name: "7",

		img: img6,
	}
]