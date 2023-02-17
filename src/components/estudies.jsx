import React from 'react'
import $ from '../../node_modules/jquery/dist/jquery.min.js'
import tensorflow2 from '../certificados/tensorflow 2.pdf'
import electronica from '../certificados/ELECTRONICA.pdf'
import Nosql from '../certificados/NOSQL.pdf'
import cplus from '../certificados/C++.pdf'
import programacion from '../certificados/sistemas informaticos.pdf'
import download from '../img/download.png'
export function Estudies() {
  $(document).ready(() => {
      $('.btn_certificado').on('click', (e)=>{
        $(e.currentTarget)
        .children("span").html(" ")
        $(e.currentTarget)
        .children("img"). attr("src", download) 
      })
  })
  return (
    <section id='studies_sect'>
      <div id='Studies'>
        <h1>Studies</h1>
        <div className="cont_studies">
          <h2>Getting started with TensorFlow 2</h2>
          <p>Course in Coursera of the imperial college london approved and certified</p>
          <a href={tensorflow2} download="tensorflow 2.pdf" target="_blank">
            <button className='btn_certificado'>
              <span>Certificado</span>
              <img src="#" alt="" />
            </button>
          </a>
        </div>
        <div className="cont_studies">
          <h2>Implementacion de bases de datos NOSQL</h2>
          <p>Course at SENA on management and implementation of NOSQL databases approved and certified</p>
          <a href={Nosql} download="IMPLEMENTACION DE BASES DE DATOS NOSQL.pdf" target="_blank">
          <button className='btn_certificado'>
              <span>Certificado</span>
              <img src="#" alt="" />
            </button>
          </a>
        </div>
        <div className="cont_studies">
          <h2>Electronica : magnitudes, leyes y aplicaciones</h2>
          <p>Electronics course at SENA approved and certified</p>
          <a href={electronica} download="ELECTRONICA : MAGNITUDES, LEYES Y APLICACIONES.pdf" target="_blank">
            <button className='btn_certificado'>
              <span>Certificado</span>
              <img src="#" alt="" />
            </button>
          </a>
        </div>
        <div className="cont_studies">
          <h2>Metodologia de la programacion de sistemas informaticos</h2>
          <p>Course on methodologies and introduction to programming at SENA</p>
          <a href={programacion} download="METODOLOGIA DE LA PROGRAMACION DE SISTEMAS INFORMATICOS.pdf" target="_blank">
            <button className='btn_certificado'>
              <span>Certificado</span>
              <img src="#" alt="" />
            </button>
          </a>
        </div>
        <div className="cont_studies">
          <h2>Conceptualizacion del lenguaje de programacion c++</h2>
          <p>High-level C++ programming course at SENA</p>
          <a href={cplus} download="CONCEPTUALIZACION DEL LENGUAJE DE PROGRAMACION C++.pdf" target="_blank">
            <button className='btn_certificado'>
              <span>Certificado</span>
              <img src="#" alt="" />
            </button>
          </a>
        </div>
        <div className="cont_studies">
          <h2>Despliegue De Aplicaciones Y Servicios En Contenedores Docker</h2>
          <p>Docker course and application in development projects at SENA</p>
          <button className='btn_certificado'>
            <span>Certificado</span>
            <img src="#" alt="" />
          </button>
        </div>
      </div>
    </section>
  )
}
