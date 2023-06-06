import React from 'react'
import "./KnowMe.css"

import {Link} from 'react-router-dom'


import {BsFillRocketTakeoffFill} from "react-icons/bs"

function KnowMe() {
  return (
    <div className="knowMe ">
        <section className="header">
            
        
      {/* <div className="animation">
      </div> */}
      <div className="content">
        <span id="greeting" className="animate__animated animate__fadeInDown">Hello People</span>
        <span id="iAm" className="animate__animated animate__fadeInRight">I am <strong> Devansh Shrivastava</strong></span>
        <span id="note" className="animate__animated animate__fadeInLeft">Welcome to my <strong>Portfolio</strong></span>
      </div>
      <div className="object">
        
      <div className="cube">
        <div className="cube__face"></div>
        <div className="cube__face"></div>
        <div className="cube__face"></div>
        <div className="cube__face"></div>
        <div className="cube__face"></div>
        <div className="cube__face"></div>
      </div>
</div>
</section>
      <section className="myself">
        <span id="section-title">mySelf() &#0123; </span>
        <p>"Hey there! Myself Devansh Shrivastava, I am <b>Computer Science and Engineering</b> student persuing <b>B.Tech</b> from <a href=""><b> BIT,Durg</b></a>. I am a passionate <b>Web Developer</b> and <b>Designer</b> with a strong focus on creating engaging and user-friendly digital experiences. <br></br><br></br>Also I am actively engage in various <b>college clubs</b> and <b>communities</b>, recognizing the importance of collaborative learning and personal growth beyond the classroom. These experiences are not only enriching my college journey but also honed my <b>leadership</b>, <b>teamwork</b>, and <b>communication</b> skills..."</p>
        <span id="section-title">&#0125;</span>
        <br></br>
        <br></br>
 </section>

      <section className="getStarted">
        <Link to="/projects"><button type="">Let's Get Started &ensp;<BsFillRocketTakeoffFill/></button></Link>
        
      </section>
      
    </div>
  )
}

export default KnowMe
