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
                  <a href="tel:+2347068021016">+234 706 802 1016</a>
                  <a href="mailto:adekoyaprecious180@gmail.com">adekoyaprecious180@gmail.com</a>
              </div>
              <div id='six'>
                  <a href="https://github.com/adekoya1-1" target="_blank"><img src={vector} alt="" /></a>
                  <a href="https://x.com/adekoya1_2" target="_blank"><img src={tweet} alt="" /></a>
                  <a href="https://www.linkedin.com/in/adekoya-precious-7a9b71284/" target="_blank"><img src={int} alt="" /></a>
              </div>
          </div>
          <div className='wall'></div>
          <div className='prestige'>
              <div className='href'>
                  <a href="#home">Home</a>
                  <a href="#project">Project</a>
                  <a href="#about">About</a>
                  <a href="#techs">Technolgies</a>
              </div>
              <div>
                  <p className='hrefs'>Built by <a href="https://adekoyapreciousabdulfatai.vercel.app" target="_blank">prestige tech</a></p>
              </div>
          </div>
    </div>
  )
}

export default Footer