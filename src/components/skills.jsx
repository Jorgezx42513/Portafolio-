import React from 'react'
import $ from '../../node_modules/jquery/dist/jquery.min.js'
import csharp from '../img/skills/csharp.png' 
import python from '../img/skills/python.png'
import cplus from '../img/skills/c++.png' 
import java from '../img/skills/java.png'
import git from '../img/skills/git.png'
import docker from '../img/skills/docker.png'
import html from '../img/skills/html.png'
import css from '../img/skills/css.png'
import javas from '../img/skills/javascrip.png'

export function Skills() {
  let colors = [ '#ff006c', "#ffcd00", "#ae00ff", "#0023ff", "#ff7000","#00cdff","#ff9300","#00a2ff","#e8ff00"]
  $(document).ready(()=>{
    $('.card_skill').on('mouseenter mouseleave', (e)=>{
      if(e.type === "mouseenter"){
        $('#'+e.target.id)
          .css("background", colors[e.target.id - 1])
          .css("border" , "1px solid "+colors[e.target.id - 1])
      }
      else{
        $(".card_skill")
          .css("background", "transparent")
          .css("border" , "1px solid white")
      }
    })
  })
  return (
    <section id='skills_section'>
        <h1>Skills</h1>
        <div id='cot_card_skiils'>
            <div className="card_skill" id='1'>
                <img src={csharp} alt="c#" />
                <h4>CSharp higth level</h4>
            </div>
            <div className="card_skill" id='2'>
              <img src={python} alt="python" />
              <h4>python hight level</h4>
            </div>
            <div className="card_skill" id='3'>
              <img src={cplus} alt="c++" />
              <h4> c++ medium level</h4>
            </div>
            <div className="card_skill" id='4'>
              <img src={java} alt="java" />
              <h4>java medium level</h4>
            </div>
            <div className="card_skill" id='5'>
                <img src={git} alt="git" />
                <h4>git and github hight level</h4>
            </div>
            <div className="card_skill" id='6'>
              <img src={docker} alt="docker" />
              <h4>Docker medium level</h4>
            </div>
            <div className="card_skill" id='7'>
              <img src={html} alt="html" />
              <h4> html-5 hight level</h4>
            </div>
            <div className="card_skill" id='8'>
              <img src={css} alt="css" />
              <h4>css-3 hight level</h4>
            </div>
            <div className="card_skill" id='9'>
              <img src={javas} alt="javascript" />
              <h4>javaScript hight level</h4>
            </div>
        </div>
    </section>
  )
}
