import React from 'react'
import "./BackgroundVideo.css"
import globe from "./Video/globe.mp4"

const BackgroundVideo = () => {
    return (
        <>
          <div className="App">
            <video id="globe" autoPlay="autoplay" loop="loop" muted>
            <source src={globe} type="video/mp4"/>
            </video>
          </div>
        </>
    )
}
    
export default BackgroundVideo