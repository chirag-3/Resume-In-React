import React from 'react';
import './EnterSkills.css';


export default function EnterSkills({skills,setSkills}){


    function addSkill(e){
        
        e.stopPropagation();
        e.preventDefault();
        let temp = skills.length;

        setSkills([...skills,{index:temp,skill:''}]);

    }

    function removeSkill(e){
        e.stopPropagation();
        e.preventDefault();

        setSkills(skills.splice(0,skills.length-1));
    }


    function updateSkill(e){
        let idx = +(e.target.id.slice(3));

        let temp = structuredClone(skills);

        temp[idx].skill = e.target.value;

        setSkills(temp);


    }




    return(
        <div id="skills-entry">
            <h2>Skills</h2>
            <button onClick={addSkill} id="btn-1">Add Skill</button>
            <button onClick={removeSkill} id="bth-2">Remove Skill</button>
            <br />
            {
                skills.map(skill => {
                    return(
                        <React.Fragment key={skill.index}>
                           <div className="element">
                           <label htmlFor={"-s-"+skill.index}> Skill: </label>
                           <input id={"-s-"+skill.index} onChange={updateSkill}></input>
                           </div>
                        </React.Fragment>
                    )
                })
            }
        </div>
    );
}