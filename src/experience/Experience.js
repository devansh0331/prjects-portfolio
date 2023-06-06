import React from 'react'

import "./Experience.css"

import ExpCard from "./expCard/ExpCard"
function Experience() {
  return (
    <div className="exp animate__animated animate__fadeInUp">
        <span id="section-title">myExperience() &#123;</span>
        <div className="row">
            <div className="col-md-4 animate__animated animate__fadeInBottomRight">
                
      <ExpCard/>
            </div>
            <div className="col-md-4 animate__animated animate__fadeInBottomRight">
                
      <ExpCard/>
            </div>
            <div className="col-md-4 animate__animated animate__fadeInBottomRight">
                
      <ExpCard/>
            </div>
        </div>
      <span id="section-title">&#125;</span>
    </div>
  )
}

export default Experience
