import React, { Component, useEffect, useState } from "react";
import Anime, {anime} from "react-anime";
import userIcon from "../../../../assets/Facebook/userIcon.svg"
import "./loopAnimation.css"

const allAds = [
    ["💐", "⚽", "🍔", "🎷" ],
    ["💐", "🌼", "🌺", "🌹" ],
    ["⚽", "🏈", "🏀", "⚾" ],
    ["🍔", "🍟", "🍕", "🌭" ],
    ["🎷", "🎸", "🥁", "🎧" ]
]

const translations = {
    0: "buy flowers!",
    1: "play sports!",
    2: "eat food!",
    3: "enjoy music!",
}

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
        let translateX = 0
        let translateY = 0

        for(let i = 0; i < 4; i++) {
            let which = quad ? i : i;
            let icon = allAds[quad][which]
            let cap = translations[which]
            ads.push(Ad(icon, cap, setQuad, i+1))
        }

        switch(quad) {
            case 1: translateX = -120; translateY = -50; break;
            case 3: translateX = -120; translateY = 50; break;
            case 2: translateX =  120; translateY = -50; break;
            case 4: translateX =  120; translateY = 50; break;
            default: break;
        }

        return(
            <Anime 
                translateX={[0, translateX]} //quad ? quad % 2 ? -100: 100 : 0]} 
                translateY={[0, translateY]} //quad ? quad % 2 ? -50: 50 : 0]}
            >{console.log(translateX)}
                <div style={{alignItems:"center"}}> 
                    <div style={{display: "flex", flexDirection: "row"}}> 
                        {ads[0]}
                        {ads[1]} 
                    </div>
                    <div style={{display: "flex", justifyContent:"center"}}>
                        <img src={userIcon} height="50px"></img>
                    </div>
                    <div style={{display: "flex", flexDirection:"row"}}> 
                        {ads[2]}
                        {ads[3]}
                    </div>
                </div>
            </Anime>
            
        )
    }

export default function LoopAnimation () {
        return(
        <div className="ads-background">
            <div className="ad-plane" style={{display: "flex", flexWrap: "wrap"}}>
                <MovableUserIconComponent/>
            </div>
        </div>
    )
}


// const userIconComponent = (props) => {
//     return(
//         <Anime delay={Math.random()*100} >
//             <img src={userIcon} height="50px"></img>
//         </Anime>
//     )
// }
// const bunchUsers = () => {
//     let users = [];
//     for (let i = 0; i < 10; i++) {
//         users.push(userIconComponent())
//     }
//     return(
//     {users.map((user) => (
//         <div style={{padding: Math.random()*15+"px"/*, filter:"blur(0px) brightness:(100%)" , paddingLeft: Math.random()*10+"px", paddingRight: Math.random()*10+"px"*/ }}>
//             {user}
//         </div>
//         ))}
//     )
// }