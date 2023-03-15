import React from 'react'
// import Switch from '@mui/material/Switch';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormGroup from '@mui/material/FormGroup';
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='Navbar'>
      <div className="top">
        <img src="https://cdn-icons-png.flaticon.com/128/724/724664.png" alt="" height={16} />
        <a>0509418224</a>
        <span> |</span>
        <img src="https://cdn-icons-png.flaticon.com/128/732/732200.png" alt="" height={16}  />
        <a>enquiry@urbansciencemep.com</a>
      </div>

      <div className="buttom">
        <div className="lnav">
          <img src="https://www.urbansciencemep.com/_next/static/images/blackLogo-10fc2f582f155efcc2c792a97edc1f33.png" alt="" height={70} />
        </div>
        <div className="centerNav">
          <ul>
            <li><Link to= "/">Home</Link></li>
            <li><Link to= "/About">About</Link></li>
            <li><Link to= "/Contact">Contact</Link></li>
            <li><Link to= "/Services">Services</Link></li>
            <li><Link to= "/Project">Project</Link></li>
          </ul>
        </div>
        <div className="right">
          <button>Enquire Now</button>
        </div>
      </div>
 
 
    </div>
  )
}

export default Navbar
