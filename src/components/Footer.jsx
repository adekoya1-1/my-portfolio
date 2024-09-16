import React from 'react'
import "../styles/footer.css"
import { Link } from 'react-router-dom'
import logo from "../assets/logo.png"
import vector from "../assets/Vector.png"
import int from "../assets/in.png"
import tweet from "../assets/twitter.png"
const Footer = () => {
  return (
      <div>
          <div id='wall'>
              <div><img src={logo} alt="" /></div>
              <div className='six'>
                  <Link>+234 706 802 1016</Link>
                  <Link>adekoyaprecious180@gmail.com</Link>
              </div>
              <div id='six'>
                  <a href="https://github.com/adekoya1-1" target="_blank"><img src={vector} alt="" /></a>
                  <a href="https://twitter.com/AdekoyaPre3073" target="_blank"><img src={tweet} alt="" /></a>
                  <a href="https://www.linkedin.com/in/adekoya-precious-7a9b71284/" target="_blank"><img src={int} alt="" /></a>
              </div>
          </div>
          <div className='wall'></div>
          <div className='prestige'>
              <div className='href'>
                  <a href="">Home</a>
                  <a href="">Project</a>
                  <a href="">About</a>
                  <a href="">Technolgies</a>
              </div>
              <div>
                  <p>Built by <a href="">prestige tech</a></p>
              </div>
          </div>
    </div>
  )
}

export default Footer