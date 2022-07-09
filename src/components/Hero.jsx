import React from 'react';
import "./hero.css";


function Hero() {
    return (
        <>
            <div name='home' className='h-screen w-full flex justify-center items-center bg-gradient-to-b from-black to-gray-700'>
                <div className="homeCubeSkills ">
                    <div className="homeCubeSkillsFaces homeCubeSkillsFace1">
                        <img src={require("../assets/html.png")} alt="Face1" />

                    </div>
                    <div className="homeCubeSkillsFaces homeCubeSkillsFace2">
                        <img src={require("../assets/javascript.png")} alt="Face1" />

                    </div>
                    <div className="homeCubeSkillsFaces homeCubeSkillsFace3">
                        <img src={require("../assets/react.png")} alt="Face1" />

                    </div>
                    <div className="homeCubeSkillsFaces homeCubeSkillsFace4">
                        <img src={require("../assets/github.png")} alt="Face1" />

                    </div>
                    <div className="homeCubeSkillsFaces homeCubeSkillsFace5">
                        <img src={require("../assets/node.png")} alt="Face1" />

                    </div>
                    <div className="homeCubeSkillsFaces homeCubeSkillsFace6">
                        <img src={require("../assets/bootstrap.png")} alt="Face1" />

                    </div>
                </div>

            </div>
        </>
    )
}

export default Hero