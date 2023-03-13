import React from 'react'
import '../styles/style.css'
import '../styles/stars.css'
import cv from "../certificados/cv.pdf"
import foto from "../img/foto.png"

export function Header() {
  return (
    <header>
      <div id='stars'></div>
      <div id="stars2"></div>
      <div id='content'>
        <div className='header_cont'>
          <h1>
            Hi, my name is jorge 👋
          </h1>
          <p>
          Hello my name is jorge benavides
mechatronics student and junior
programmer focusing mainly on
artificial intelligence with python and
application development with c# and
web development.
          </p>
          <a href={cv} download="cv_jorge_benavides.pdf" target="_blank">
            <button>CV</button>
          </a>
        </div>
        <div className='header_cont'>
          <img id='img_logo_personal' src={foto} alt="foto personal" />
        </div>
      </div>
    </header>
  )
}
