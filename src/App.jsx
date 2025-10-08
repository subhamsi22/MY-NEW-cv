import './App.css'
 import {gsap} from 'gsap'
import { useEffect, useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";





function App() {
  
useEffect(() =>{
gsap.to("#myname", {
  duration: 2,
   y: -30, 
 
    ease: "bounce",
   yoyo:true,
   repeat:-1 
  });





},[]);


useEffect(() =>{ 

gsap.to("#animationofo", {
duration: 2,
rotate: 360,
y:30,
delay:2,
ease:"bounce",
yoyo:true,
repeat:-1

});

 },[]);


  return(
    <div>
      <h1 id="myname">MY </h1>
      <h1 id="myportfolio">portf<p id="animationofo">o</p>lio</h1>
    </div>
  );
}

export function Tittle(){
  return (
    <div id="design-credit">
      <p>this site design by me </p>
    </div>
  );
}

export function Tittlee() {
  return (
    <div id="design-creditq">
      <p>this site is develop by use of react </p>
    </div>
  );
}
export function Tittlew() {
  return (
    <div id="design-credity">
      <p>contact me for great design </p>
    </div>
  );
}


export function Button(){
   var handleClick = () => {
    const ball = document.getElementById("mychangeball");
    ball.style.left = "20px";
    ball.style.backgroundColor = "#fff";
    var mybuttonforchange = document.getElementById("mybuttonforchange");
  mybuttonforchange.style.backgroundColor = "#000"

var body = document.getElementById("body");
body.style.filter = "brightness(1)";
alert("lights are on now and cant be off again ");
};


  return(
<div>
<div id="mybuttonforchange">
<div id="mychangeball" onClick={handleClick}>

</div>
</div>
</div>

  );
}
export function Lights (){
  return(
    <div>
      <h1 id="newtext"> turn on the Lights</h1>
    </div>
  );
}

export function Details() {
  return(
    <div>
      <h1 id="debe"> <span id="idf">  developer </span>  <br />front-end / back-end</h1>
    </div>
  );
}

export default App;