import React from 'react'
import {Header} from './components/header.jsx'
import { Proyects } from './components/proyects.jsx'
import {Skills} from './components/skills.jsx'
import { Estudies } from './components/estudies.jsx'
import { Contact } from './components/contact.jsx'
import { Dinamyc_header } from './components/dinamyc_header.jsx'

export function App() {
  return (
    <>
      <Dinamyc_header/>
      <Header/>
      <Proyects/>
      <Skills/>
      <Estudies/>
      <Contact/>
    </>
  )
}
