import { Icon } from "Icons";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCurrent } from "stores/player";
import { useState } from "react";
import classNames from "classnames";
function SongItem({ item }) {
    const [arr, setArr] = useState(JSON.parse(sessionStorage.getItem("favs")));
    const dispatch = useDispatch()
    const { current, playing, controls } = useSelector(state => state.player)
    const imageStyle = item => {
        switch (item.type) {
            case 'artist':
                return 'rounded-full'

            case 'podcast':
                return 'rounded-xl'

            default:
                return 'rounded'
        }
    }

    const updateCurrent = () => {
        if (current.id === item.id) {
            if (playing) {
                controls.pause()
            } else {
                controls.play()
            }
        } else {
            dispatch(setCurrent(item))
        }
    }

    const updateFav = () => {
        let arR = []
        arR = JSON.parse(sessionStorage.getItem("favs"))
        if (arR?.includes(item?.id)) {
            arR = arR?.filter(song => song !== item?.id)

        } else {
            arR?.push(item?.id)
        }
        sessionStorage.setItem("favs", JSON.stringify(arR))
        setArr(arR)

    }
    const isCurrentItem = (current?.id === item.id && playing)

    return (
        <div className={"bg-footer p-4 rounded hover:bg-active group relative"}>
            <NavLink
                key={item.id}
                to={"/song-detail/" + item.id}
            >
                <div className="pt-[100%] relative mb-4">
                    <img alt="" src={item.image}
                        className={`absolute inset-0 object-cover w-full h-full ${imageStyle(item)}`}
                    />

                </div>
                <h6 className="overflow-hidden overflow-ellipsis whitespace-nowrap text-base font-semibold">
                    {item.title}
                </h6>
                <p className="line-clamp-2 text-link text-sm mt-1">
                    {item.description}
                </p>
            </NavLink >
            <div className="flex flex-row w-100 absolute">
                <button
                    onClick={updateFav}
                    className={classNames("w-10 h-10 rounded-full bg-primary  group-hover:flex group-focus:flex items-center justify-center", {
                        "hidden": !isCurrentItem,
                        "flex": isCurrentItem
                    })}>
                    {!arr?.includes(item.id) ? <i class="far fa-bookmark"></i> : <i class="fas fa-bookmark"></i>}
                </button>
                <button
                    onClick={updateCurrent}
                    className={classNames("w-10 h-10 rounded-full bg-primary  group-hover:flex group-focus:flex items-center justify-center", {
                        "hidden": !isCurrentItem,
                        "flex": isCurrentItem
                    })}>
                    <Icon name={isCurrentItem ? 'pause' : 'play'} size={16} />
                </button>
            </div>
        </div>
    )
}

export default SongItem
