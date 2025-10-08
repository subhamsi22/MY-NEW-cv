import { useEffect } from 'react';
import './App.css'
function Moveing(){

    useEffect(()=>{
const ball =  document.querySelector(".mo");
document.addEventListener("mousemove", function(dets){
gsap.to(ball,{
    y:dets.y
})
})
    },[]);
  return(
    <div>
<div className="mo">

</div>
    </div>
  );  
}
export default Moveing;