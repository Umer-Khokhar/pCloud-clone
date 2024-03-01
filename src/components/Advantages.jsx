import React from 'react'
import './Advantages.css'

function Advantages({accessLogo, shareLogo, secureLogo}) {
  return (
    <div className='advangates'>
        <div className="access">
            <div className="log">
                <img src={accessLogo} alt="Access Logo" />
            </div>
            <div className="info">
              <h2>Access on all devices</h2>
              <p>Save your files and have them on your laptop with pCloud Drive, phone or the web</p>
            </div>
        </div>
        <div className="access">
            <div className="log">
                <img src={shareLogo} alt="Share Logo" />
            </div>
            <div className="info">
              <h2>Share and collaborate</h2>
              <p>Send, receive and work together with your friends on every file</p>
            </div>
        </div>
        <div className="access">
            <div className="log">
                <img src={secureLogo} alt="Security logo" />
            </div>
            <div className="info">
              <h2>Unbreakable security</h2>
              <p>Keep your private files confidential with the highest level of encryption with pCloud Encryption</p>
            </div>
        </div>
    </div>
  )
}

export default Advantages