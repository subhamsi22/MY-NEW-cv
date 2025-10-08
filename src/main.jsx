import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'

import {Banner,Det,Box} from './banner2.jsx'

import App, {Tittle , Tittlee,Tittlew,Button,Lights,Details}from './App.jsx'
import { Pic } from './Pic.jsx'
 
  import {gsap} from 'gsap'
  import { useEffect, useRef } from "react";
import Svg from './svg.jsx'
import Hireme from './button.jsx'
import Hireeme from './hireme.jsx'
import Skills,{Deta} from './skills.jsx'
import Newsvg  from './newsvg.jsx'
import { Footer   } from './fotter.jsx'
import Moveing from './moveing_curser.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
   
    <Tittle />
    <Lights />
     <Button />
    <Tittlee />
    <Pic />
    <Tittlew />
    <Details />
     <Banner />
     <Svg />
      <Det />
      <Box />
      <Hireme />
      <Hireeme />
      <Skills />
      <Newsvg/>
      <Deta />
      <Moveing/>
      <Footer/>
 
  </StrictMode>,
)

