import React from 'react'
import Navbar from '../components/Navbar'
import EncPricing from '../components/EncPricing'
import Logo from '/logo/logo.png'
import "./Encryption.css"
import Footer from '../components/Footer'
import googleLogo from '/logo/google.svg'
import facebookLogo from '/logo/fb.svg'
import appleLogo from '/logo/ios.svg'

function Encryption() {
  return (
    <>
    <Navbar logo={Logo}/>
      <div className="encryption">
        <section className="enc-hero">
        <div className="wrapper-enc">
          <div className="left-enc">
            <h1>Get Top Level Cloud Encryption with pCloud</h1>
            <p>Protect Your Important Files in Just a Simple Action With pCloud Encryption you encrypt your sensitive files on any device and make them invisible to others!</p>
          </div>
          <div className="right-enc">
            <EncPricing/>
      </div>
          </div>
        </section>
        <Footer fbLogo={facebookLogo} xLogo={appleLogo} instaLogo={googleLogo}/>
      </div>
    </>
  )
}

export default Encryption