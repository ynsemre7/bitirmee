import db from "+firebase/Firebase";
import Section from "components/Section"

import { collection, getDocs } from 'firebase/firestore/lite';
import { useEffect, useState } from "react";

function Collection() {
	const [songs, setSongs] = useState([]);

	async function getCities() {
		const citiesCol = collection(db, 'songs');
		const citySnapshot = await getDocs(citiesCol);
		const cityList = citySnapshot.docs.map(doc => doc.data());
		setSongs(cityList)
		return cityList;
	}
	useEffect(() => {
		getCities()
	}, []);
	const [filteredSongs, setFilteredSongs] = useState(null);
	useEffect(() => {
		if (songs !== []) {
			let filter = []
			let arR = JSON.parse(sessionStorage.getItem("favs"))

			arR?.forEach(favID => {
				songs?.forEach(songItem => {
					if (favID === songItem?.id) {
						filter.push(songItem)
					}
				})
			})

			setFilteredSongs(filter)
		}
		return () => {
		};
	}, [songs]);

	if (filteredSongs !== null && songs !== []) {
		return (
			<div>
				<Section
					isFav
					title={"Favorilerin"}
					items={filteredSongs}
				/>
			</div>
		)
	}
	else return <p>boş</p>
}

export default Collection