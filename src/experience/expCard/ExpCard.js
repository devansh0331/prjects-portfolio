import React from 'react'

import HultPrize from "../imgExp/HultPrize.png"

import "./ExpCard.css"

function ExpCard() {
  return (
    <div className="expCard">
    <img src={HultPrize} alt=""/>
    <div>
    <span id="expPost">Marketing Associate</span>
    <br></br>
    <span id="expTitle">at HULT PRIZE BITD</span>
    {/* <p id="expDur"> Nov 2022 - Feb 2023 : <br></br><strong>Marketing Associate</strong> </p>
    <p id="expDur"> Nov 2022 - Feb 2023 : <br></br><strong>Marketing Associate</strong> </p> */}
    </div>
    <div className="projectCard-btns">
        <a href="/">Know More</a>
        
    </div>
    </div>
  )
}

export default ExpCard
