import './App.css'
import {gsap} from 'gsap'
import { useEffect, useRef } from "react";


function Skills(){
    return(
        <div>
            <h1 id="myskls">my skills</h1>
        </div>
    );
}
export function Deta(){
return(
    <div id="deta">
      <table>
        <tr>
            <th>frontend</th>
            <th>design</th>
            <th>backend</th>
        </tr>
        <tr>
            <td>html</td>
            <td>css</td>
            <td>php</td>
        </tr>
        <tr>
            <td>javascript</td>
            <td>GSAP</td>
            <td>node js</td>
        </tr>
        <tr>
            <td>jquery</td>
            <td>fontawesome</td>
            <td>express</td>
        </tr>
        <tr>
            <td>react js</td>
            <td>canva</td>
            <td>mysql</td>
        </tr>
      </table>
    </div>
);
}
export default Skills;