import './App.css';
 import {gsap} from 'gsap'
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

  export  function Banner(){
useEffect(()=>{

    gsap.to("#pfora",{
        scale:1.5,
        duration:2,
        repeat:-1,
        ease:"linear"
    });

   gsap.to("#datap", {
      y: 30,
      opacity:1,
      duration: 2,
      delay: 1,
      scrollTrigger: {
        trigger: "#subhamdet",  
        start: "top 900",
        // markers:true,        
        end: "bottom 120",       
                     
    }

  
});



},[]);
    return(
        <div>
            <h1 id="subhamdet"> Shubh<p id="pfora">a</p>m Sing<p>h</p></h1>
        </div>
    );
}

export function Det(){
    return(
        <div>
            <p id="datap">is a BCA student at RIIT College with a passion for full-stack web development and computer science. Skilled in PHP, MySQL, JavaScript, jQuery, GSAP, DBMS, OS, C, C++, and Java, and innovative tech solutions.
</p>
        </div>
    );
}

export function Box(){
    return(
    <div id="newani">
        <div id="box1">
<img src="/pic/g.png"></img>
 <div class="box1shaddow">
            <h1>tubeviews</h1>
            <button> <a href="https://tubeviews.netlify.app/"> click hear</a>  </button>
        </div>
        </div>
       
        <div id="box2">
<img src="/pic/h.png"></img>
 <div class="box1shaddow">
            <h1>myntra</h1>
            <button> <a href="https://github.com/subhamsi22/myntra-clone2"> click hear</a>  </button>
        </div>
        </div>
        <div id="box3">
<img src="/pic/j.png"></img>
 <div class="box1shaddow">
            <h1>hotstar</h1>
            <button> <a href="https://hotstar-clone-sepia.vercel.app/"> click hear</a>  </button>
        </div>
        </div>


            
        </div>
    
    );
}