
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
// import img1 from "../img/001.png";
import imgs from "../img";
import "./Pokemon.css"
import NamePokemon from '../NamePokemon/NamePokemon'
import StaticContent from "../StaticContent/StaticContent";

const useStyles = makeStyles({
	root: {
		width: 345,
	},
});

export default function ImgMediaCard({ img }, props) {
	const classes = useStyles();
	// console.log(img);
	return (
		<div className="Pokemon-card">
			<Card className={classes.root}>
				<CardActionArea>
					<CardMedia
						component="img"
						alt="Contemplative Reptile"
						height="300"
						image={img}
						title="Contemplative Reptile"
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="h2">

						</Typography>

					</CardContent>
				</CardActionArea>
				<CardActions>
					<Button size="small" color="primary">

					</Button>

				</CardActions>
			</Card>



		</div>

	);
}
