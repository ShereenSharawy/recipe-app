import React from "react";
function ImproveSkills(){
    const list = [
        "Learn new recepies",
        "Experiment with food",
        "Write your own recepies",
        "Know nutrition facts",
        "Get cooking tips",
        "Get ranked"
    ]

    return (
        <div className="section improve-skills">
            <div className="col img">
                <img src={process.env.PUBLIC_URL +'/images/gallery/img_10.jpg'}  alt="" />
            </div>
            <div className="col typography">
                <h1 className="title border-start border-5 border-primary ps-4 mb-5">Improve Your Culinary Skills</h1>
                { list.map((item, index) => (
                    <p className="skill-item" key={index}>{item}</p>
                )) }
                <button className="btn">singup now</button>
            </div>
        </div>
    )
}
export default ImproveSkills;