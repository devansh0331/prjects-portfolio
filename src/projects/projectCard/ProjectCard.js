import React from 'react'

import "./ProjectCard.css"

import AntiDote from "../img/AntiDote.png"

function ProjectCard(props) {
  return (
    <div className="projectCard">
    <div className="projectCard-content">
        <span>{props.title}</span>
        <br></br>
        <p>{props.desc}</p>
        <p><strong>Tools: </strong>{props.tools}</p>        
    </div>  
    <div className="projectCard-img">
        <img src={props.imgUrl} alt="Project Image"/>
    </div>
    <div className="projectCard-btns">
        {props.github && <a href={props.github}>GitHub</a>}
        <a href={props.demo}>View Live</a>
        
    </div>
    
    </div>
  )
}

export default ProjectCard
