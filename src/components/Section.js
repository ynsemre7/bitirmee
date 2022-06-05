import SongItem from "./SongItem";
import Title from "./Title";

function Section({ title, more = false, items, keywords, isFav = false }) {
    return (
        <section>
            <Title title={title} more={more} />
            <div className="grid grid-cols-5 gap-x-6">
                {items.map(item => {
                    if (item?.keywords === keywords || isFav) {
                        return <SongItem item={item} key={item.id} />
                    }
                    else return null
                })}
            </div>
        </section>
    )
}

export default Section
