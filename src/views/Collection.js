import Section from "components/Section"
import songs from "data/songs"
import { useEffect, useState } from "react";

function Collection() {
	const [filteredSongs, setFilteredSongs] = useState(null);
	useEffect(() => {
		let filter = []
		let arR = JSON.parse(sessionStorage.getItem("favs"))
		arR.forEach(item => {
			filter.push(
				songs[item - 1]
			)
		})
		console.log(filter)
		setFilteredSongs(filter)
		return () => {
		};
	}, []);

	if (filteredSongs !== null)
		return (
			<div>
				<Section
					isFav
					title={"Favorilerin"}
					items={filteredSongs}
				/>
			</div>
		)
	else return <p>boş</p>
}

export default Collection