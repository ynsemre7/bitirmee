import Section from 'components/Section'
import Subtitle from 'components/Subtitle'
import Title from 'components/Title'
import songs from 'data/songs'
import { Icon } from 'Icons'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { setCurrent } from 'stores/player'


const SongDetail = () => {
  const { pathname } = useLocation()
  const song = songs[pathname.split("/")[2] - 1]
  const dispatch = useDispatch()
  const { current, playing, controls } = useSelector(state => state.player)
  const isCurrentItem = (current?.id === song.id && playing)
  const [arr, setArr] = useState(JSON.parse(sessionStorage.getItem("favs")));


  const updateCurrent = () => {
    if (current?.id === song?.id) {
      if (playing) {
        controls.pause()
      } else {
        controls.play()
      }
    } else {
      dispatch(setCurrent(song))
    }
  }

  const updateFav = () => {
    let arR = []
    arR = JSON.parse(sessionStorage.getItem("favs"))
    if (arR?.includes(song?.id)) {
      arR = arR?.filter(item => item !== song?.id)

    } else {
      arR?.push(song?.id)
    }
    sessionStorage.setItem("favs", JSON.stringify(arR))
    setArr(arR)

  }
  return (
    <div className={"flex flex-row bg-footer p-4 rounded relative"} >
      <div >
        <img src={song?.image} style={{ width: "500px", height: "500px", objectFit: "fill" }} />
      </div>
      <div className='ml-4'>
        <Title title={song?.title} />
        <Subtitle subtitle={song?.description} />
        <div>
          <p style={{ color: "rgb(100 ,116 ,139)" }}>{song.longText}</p>
        </div>

      </div>
      <div className='relative '>
        <button
          onClick={updateFav}
          className={`flex align-items-center justify-content-center w-10 h-10 z-10 rounded-full bg-primary absolute group-hover:flex group-focus:flex bottom-2 right-5 items-center justify-center '}`}>
          {!arr?.includes(song.id) ? <i class="far fa-bookmark"></i> : <i class="fas fa-bookmark"></i>}
        </button>
        <button
          onClick={updateCurrent}
          className={`flex align-items-center justify-content-center w-10 h-10 z-10 rounded-full bg-primary absolute group-hover:flex group-focus:flex bottom-2 right-0 items-center justify-center '}`}>
          <Icon name={isCurrentItem ? 'pause' : 'play'} size={16} />
        </button>
      </div>
    </div>
  )
}

export default SongDetail