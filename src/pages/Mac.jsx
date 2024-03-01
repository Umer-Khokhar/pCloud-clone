import React from 'react'
import Buttons from '../components/Buttons'
import Dowith from '../components/Dowith'
import fisrtMacIMG from "/download/first-mac.png"
import secondMacIMG from "/download/second-mac.png"
import Download from './Download'
import './Mac.css'

function Mac({mainIMG}) {
  return (
    <div className="mac-wrap">
    <Download/>
    <section className="macs-section">
      <div className="mac-hero">
      <h1>pCloud for Mac</h1>
      <p className='hero-p'>Extend the available space on your Mac with up to 10 TB. Use your files in the cloud as if they are saved locally, but without taking hard disk space</p>
      <Buttons heading={""} paragraph={"Requires macOS 10.13 or later"}/>
      </div>
      <div className="images-mac">
        <div className="main-img">
          <img src={mainIMG} alt="my Main Image!" />
          <Dowith img1={fisrtMacIMG} img2={secondMacIMG}/>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Mac