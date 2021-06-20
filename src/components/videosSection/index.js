import React from 'react'
import './_index.scss'
import { AiFillEye } from 'react-icons/ai'

const VideosSection = () => {
  return (
    <div className='video'>
      <div className='video_top'>
        <img
          src='https://i.ytimg.com/an_webp/qpzbvjT8wBI/mqdefault_6s.webp?du=3000&sqp=CJDDuoYG&rs=AOn4CLAFovETRj-_uGzi1B6qD7OH4JyM3Q'
          alt=''
        />
        <span>05.43</span>
      </div>
      <div className='video_title'>Create app in 5 minutes #made by Chintu</div>
      <div className='video_details'>
        <span>
          <AiFillEye /> 5m Views •
        </span>
        <span>5 days ago</span>
      </div>
      <div className='video_channel'>
        <img
          src='https://yt3.ggpht.com/ytc/AAUvwnhwxVk97ElKYTd9_aOq7mbqoVCInZ11qPHhWaWR=s68-c-k-c0x00ffffff-no-rj'
          alt=''
        />
        <p>Rainbow Hat Jr</p>
      </div>
    </div>
  )
}

export default VideosSection
