import Section from "components/Section";
import songs from "data/songs"

function Home() {

	return (
		<div className="grid gap-y-8">
			<Section
				title="Sık Çalınanlar"
				more="/blabla"
				items={songs}
			/>
			<Section
				title="Denemeye Değer"
				more="/blabla"
				items={songs}
			/>
			<Section
				title="Senin için önerilenler"
				more="/blabla"
				items={songs}
			/>
		</div>
	)
}

export default Home
