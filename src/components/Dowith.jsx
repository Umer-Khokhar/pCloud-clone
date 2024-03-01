import React from 'react'
import './Dowith.css'
import shareLogo from '/logo/share.svg'
import backupLogo from '/logo/backup.svg'
function Dowith({img1, img2, name}) {
  return (
    <div className='dowith'>
      <h1>What Can I Do With pCloud App?</h1>
      <div className="img-one flex">
        <img src={img1} alt="This is PC Image" />
        <div className="info-img-1 info-img">
          <img src={backupLogo} alt="Backup Logo" width={45}/>
          <h1>Make your {name} backup simple</h1>
          <p>Back up folders from your computer to pCloud, securely. Keep and recover old versions in up to 1 year.</p>
        </div>
      </div>
      <div className="img-two flex">
        <div className="info-img-2 info-img">
        <img src={shareLogo} alt="Share Logo" width={45}/>
        <h1>Share and collaborate</h1>
        <p>With pCloud's multiple file sharing options you can send and receive large files to and from anyone you like.</p>
        </div>
        <img src={img2} alt="This is PC Image"/>
      </div>
    </div>
  )
}

export default Dowith