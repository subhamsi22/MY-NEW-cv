import './App.css';
import { gsap } from 'gsap';
import { useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faJs } from "@fortawesome/free-brands-svg-icons";

export function Pic() {
  useEffect(() => {
    gsap.to("#myloo", {
      duration: 2,
      repeat: -1,
      yoyo: true,
      rotate: 30,
      scale: 1.5,
      y: 20,
      ease: "bounce"
    });
    gsap.to("#myjs", {
      duration: 4,
      repeat: -1,
      yoyo: true,
      scale: 1.5,
      y: 20,
      ease: "bounce"
    });
  }, []);

  return (
    <div>

      <video id="gima" src="/pic/jk.mp4" controls autoPlay loop muted></video>

      <FontAwesomeIcon id="myloo" icon={faHtml5} size="3x" />
      <FontAwesomeIcon id="myjs" icon={faJs} size="3x" />
    </div>
  );
}



