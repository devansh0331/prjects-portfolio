import React from 'react'

import "./Project.css"
import ProjectCard from "./projectCard/ProjectCard"
import AntiDote from "./img/AntiDote.png"
import ChatRoom from "./img/ChatRoom.png"
import Dishes from "./img/Dishes.png"
import TicTacToe from "./img/TicTacToe.png"
import UserMessages from "./img/UserMessages.png"
import WeatherNOW from "./img/WeatherNOW.png"
import Tedx from "./img/Tedx.png"

import MyWork from "./MyWork.json"
import MyContribution from "./MyContribution.json"


function Project() {
    const imgsWork = [AntiDote , ChatRoom , WeatherNOW , UserMessages , Dishes , TicTacToe]
    const imgsContribution = [Tedx]
  return (
    <div className="project animate__animated animate animate__fadeInUp">
        <span id="section-title">myProjects() 	&#123; </span>
        <div className="row project-container">

            {MyWork.map((item , key) => {
                
                return <div key={key} className="col-md-4 my-2">
      <ProjectCard imgUrl={imgsWork[item.imgUrl]} title={item.title} desc={item.desc} tools={item.tools} github={item.gitHub} demo={item.demo}/>
                
            </div>
            })}
           
        </div>
      
        <span id="section-title"> &#125; </span>
        <br></br>
        <br></br>
        <br></br>
        <span id="section-title">myContributions() 	&#123; </span>
        <div className="row project-container">

            {MyContribution.map((item , key) => {
                
                return <div key={key} className="col-md-4 my-2">
      <ProjectCard imgUrl={imgsContribution[item.imgUrl]} title={item.title} desc={item.desc} tools={item.tools} demo={item.demo}/>
                
            </div>
            })}
            </div>
            <span id="section-title"> &#125; </span>
    </div>
  )
}

export default Project
