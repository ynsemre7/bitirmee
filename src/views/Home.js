import Section from "components/Section";

import db from "../+firebase/Firebase"
import React, { useEffect, useState } from "react"
import { collection, getDocs } from 'firebase/firestore/lite';
function Home() {
	const [songs, setSongs] = useState([]);

	useEffect(() => {
		getCities()
	}, [])


	async function getCities() {
		const citiesCol = collection(db, 'songs');
		const citySnapshot = await getDocs(citiesCol);
		const cityList = citySnapshot.docs.map(doc => doc.data());
		console.log(cityList)
		setSongs(cityList)
		return cityList;
	}
	return (
		<div className="grid gap-y-8">
			<Section
				title="Sık Çalınanlar"
				more="/blabla"
				items={songs}
				keywords="popular"
			/>
			<Section
				title="Denemeye Değer"
				more="/blabla"
				items={songs}
				keywords="worth-to-try"
			/>

			<Section
				title="Rap"
				more="/blabla"
				items={songs}
				keywords="rap"
			/>
			<Section
				title="Duygusal"
				more="/blabla"
				items={songs}
				keywords="emotional"
			/>
			<Section
				title="Slow"
				more="/blabla"
				items={songs}
				keywords="slow"
			/>
			<Section
				title="Karadeniz"
				more="/blabla"
				items={songs}
				keywords="local"
			/>
		</div>
	)
}

export default Home