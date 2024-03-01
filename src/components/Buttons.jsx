import React from 'react'
import './Button.css'
function Buttons({ heading, paragraph}) {
  return (
    <div className="buttons-container">
        <h2>{heading}</h2>
        <p>{paragraph}</p>
        <div className="buttons">
            <button>Download</button>
            <button className="version">Chose Your Version</button>
        </div>
    </div>
  )
}

export default Buttons