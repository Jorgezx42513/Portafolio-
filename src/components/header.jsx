import React from 'react'
import '../styles/style.css'
import '../styles/stars.css'
import cv from "../certificados/cv.pdf"

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
            My name is jorge benavides,im a junior programmer focused my studies in python and artificial intelligence and also specialize in windows app development and databases.
          </p>
          <a href={cv} download="cv_jorge_benavides.pdf" target="_blank">
            <button>CV</button>
          </a>
        </div>
        <div className='header_cont'>
          <img src="" alt="foto personal" />
        </div>
      </div>
    </header>
  )
}
