import { useState } from 'react'
import logo from '/logo/logo.png'
import heroImg from '/home/docs.png'
import tourImg from '/logo/video-tour.png'
import googleLogo from '/logo/google.svg'
import facebookLogo from '/logo/fb.svg'
import appleLogo from '/logo/ios.svg'
import accessLogo from '/logo/all.png'
import shareLogo from '/logo/share.png'
import secureLogo from '/logo/security.png'
import './App.css'
import Navbar from './components/Navbar'
import Hero from "./components/Hero"
import Headline from './components/Headline'
import Advantages from './components/Advantages'
import Footer from './components/Footer'

function App() {

  return (
   <>
   <header className="header">
     <Navbar logo={logo}/>
   </header>
   <main className="main">
    <Hero heroImg={heroImg} tourImg={tourImg} appleLogo={appleLogo} fbLogo={facebookLogo} gLogo={googleLogo}/>
    <Headline/>
    <Advantages accessLogo={accessLogo} shareLogo={shareLogo} secureLogo={secureLogo}/>
   </main>
   <footer className='footer'>
    <Footer fbLogo={facebookLogo} xLogo={appleLogo} instaLogo={googleLogo}/>
   </footer>
   </>
  )
}

export default App
