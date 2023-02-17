import React from 'react'
import git from '../img/githube.png'
import mail from '../img/mail.png'
import wt from '../img/whatsapp.png'
import likedin from '../img/linkedin.png'
import $ from '../../node_modules/jquery/dist/jquery.min.js'

export function Contact() {
  $(document).ready(()=>{
       $('#email').on('click', ()=>{
          $('#text_contact').html('jbenavides1027@gmail.com')
       })
       $('#phone').on('click', ()=>{
        $('#text_contact').html('3223872768')
     })
  })
  return (
    <section id='contact_sect'>
        <h1>Contact</h1>
      <div id='cont_eltm_contact'>
        <div className="cont_contact">
          <a href='https://github.com/Jorgezx42513' target="_blank">
            <img src={git} alt="git" />
          </a>
        </div>
        <div className="cont_contact" id='email'>
            <img src={mail} alt="email" />
        </div>
        <div className="cont_contact" id='phone'>
            <img src={wt} alt="wt" />
        </div>
        <div className="cont_contact">
          <a href="https://www.linkedin.com/in/jorge-benavibes-95720b207" target="_blank">
              <img src={likedin} alt="in" />
          </a>
        </div>
      </div>
      <h2 id='text_contact'></h2>
    </section>
  )
}
