import Section from "components/Section";
import songs from "data/songs"

function Home() {

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
