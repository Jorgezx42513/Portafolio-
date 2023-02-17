import React from 'react'
import $ from '../../node_modules/jquery/dist/jquery.min.js'
import home from '../img/home.png'
import post from '../img/post.png'
import profile from '../img/profile.png'
import cofe from '../img/cofe.png'
import studies from '../img/studies.png'

export function Dinamyc_header() {
        let prev = window.scrollY
        $(window).scroll(()=>{
            if(prev > window.scrollY){
                $( "#dinamyc_header" ).removeClass( "off" )
            }
            else{
                $( "#dinamyc_header" ).addClass( "off" )
            }
            prev = window.scrollY
        })
  return (
    <div className='' id='dinamyc_header'>
        <div id='cont_dyn'>
            <div>
                <a href=".header_cont">
                    <img src={home} alt="" />
                </a>
            </div>
            <div>
            <a href="#proyect_sect">
                    <img src={cofe} alt="" />
                </a>
            </div>
            <div>
            <a href="#skills_section">
                    <img src={profile} alt="" />
                </a>
            </div>
            <div>
            <a href="#studies_sect">
                    <img src={studies} alt="" />
                </a>
            </div>
            <div>
            <a href="#contact_sect">
                    <img src={post} alt="" />
                </a>
            </div>
        </div>
    </div>
  )
}
