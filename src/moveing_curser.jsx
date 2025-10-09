import './App.css'
import {  useEffect, useRef } from "react";
import {gsap} from 'gsap'



function Moveing(){
const starting_ofmoveing= useRef(null);
useEffect(()=>{
  const  handleMouseMove =(e)=>{
    gsap.to(starting_ofmoveing.current,{
      
      left:e.clientX -12,
      top:e.clientY -12,



    });
  };
window.addEventListener("mousemove",handleMouseMove);





},[])
 
  return(
    <div>
<div className="mo" ref={starting_ofmoveing}>

</div>
    </div>
  );  
}
export default Moveing;
