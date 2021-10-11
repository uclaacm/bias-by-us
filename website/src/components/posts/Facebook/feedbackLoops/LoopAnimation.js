import React, { useState } from "react";
import userIcon from "../../../../assets/Facebook/userIcon.svg"
import "./loopAnimation.css"

// quadruplets showing the top left, top right, bottom left, bottom right "ads"
// first is a variety, the rest are possible homogenous ad groups post-feedback loop
const allAds = [
    ["💐", "⚽", "🍔", "🎷" ],
    ["💐", "🌼", "🌺", "🌹" ],
    ["⚽", "🏈", "🏀", "⚾" ],
    ["🍔", "🍟", "🍕", "🌭" ],
    ["🎷", "🎸", "🥁", "🎧" ]
]

// text for the ads
const translations = {
    0: "buy flowers!",
    1: "play sports!",
    2: "eat food!",
    3: "live music!",
}

// set of x,y coordinates relative to origin (0,0) to place the ads on corners of the gradient background
const quads = [
    [0,0],
    [-120,-50],
    [120,-50],
    [-120,50],
    [120,50]
]

const Ad = (icon, quad, click, i) =>
(
    <div style={{backgroundColor:"white", margin:"0 40px", borderRadius:"3px", height: "80px", width: "60px"}} onClick={() => click(i)}>
        <h1 style={{lineHeight:"35%", textAlign:"center"}}>{icon}</h1>
        <p style={{fontSize:"x-small", textAlign:"center"}}>{quad}</p>
    </div>
)

function MovableUserIconComponent() {
        let ads = []
        let [quad, setQuad] = useState(0)

        for(let i = 0; i < 4; i++) {
            let which = quad ? quad-1 : i;
            let icon = allAds[quad][i]
            let cap = translations[which]
            ads.push(Ad(icon, cap, setQuad, i+1))
        }

        return(
            <div style={{
                transform: "translate("+quads[quad][0]+"px,"+quads[quad][1]+"px", 
                transition:"transform 0.2s"
            }}>
                <div style={{display: "flex", flexDirection: "row"}}> 
                    {ads[0]}
                    {ads[1]} 
                </div>
                <div style={{display: "flex", justifyContent:"center"}}>
                    <img src={userIcon} height="50px" alt="user"></img>
                </div>
                <div style={{display: "flex", flexDirection:"row"}}> 
                    {ads[2]}
                    {ads[3]}
                </div>
            </div>
    )
    }

export default function LoopAnimation () {
        return(
        <div className="ads-background">
            <div className="ad-plane" >
                <MovableUserIconComponent/>
                {/** TODO: make a reset button that restarts the user/ad at the origin, so can see diff ad biases */}
            </div>
        </div>
    )
}