import React from "react";
import './EnterProjects.css'
export default function EnterProjects({ projects, setProjects }) {

  function addProject(e) {
    e.stopPropagation();
    e.preventDefault();

    setProjects([
      ...projects,
      { title: "", description: "", skills: [], index:projects.length,link:"" },
    ]);
  }


  function removeProject(e){
        e.stopPropagation();
        e.preventDefault();

        setProjects(projects.slice(0,projects.length-1));
  }

 function addSkill(e){
    e.stopPropagation();
    e.preventDefault();

    let idx = +(e.target.id.slice(9));

    let temp = structuredClone(projects);

    temp[idx].skills.push({index:temp[idx].skills.length,name:''});                                                                                                                                                                                               

    setProjects(temp);


 }

 function removeSkill(e){
    e.preventDefault();
    e.stopPropagation();


    let idx = +(e.target.id.slice(9));

    let temp = structuredClone(projects);

    temp[idx].skills.pop();                                                                                                                                                                                               

    setProjects(temp);



 }


 function updateProjectName(e){
    let idx = e.target.id.slice(5);

    let temp = structuredClone(projects);
    
    temp[idx].title = e.target.value;

    setProjects(temp);

 }

 function updateProjectLink(e){
  let idx = e.target.id.slice(5);

  let temp = structuredClone(projects);
  
  temp[idx].link = e.target.value;

  setProjects(temp);

}



 function updateProjectDescription(e){
    let idx = e.target.id.slice(5);

    let temp = structuredClone(projects);
    
    temp[idx].description = e.target.value;

    setProjects(temp);

 }

 function updateProjectSkill(e){
    let id = e.target.id;
    let projectIndex,skillIndex;

    if(id[6]==='-')
    {
        projectIndex = +(id.slice(5,6));
        skillIndex = +(id.slice(7));
    }
    else
    {
        projectIndex = +(id.slice(5,7));
        skillIndex = +(id.slice(8));
    }

    let temp = structuredClone(projects);

    temp[projectIndex].skills[skillIndex].name = e.target.value;

    setProjects(temp);

 }


  return (
    <div id="project-entries">
      <h2>Projects</h2>
      <button onClick={addProject} id="btn-1">Add Project</button>
      <button onClick={removeProject} id="btn-2">Remove Project</button>
      <br />
      {projects.map((project) => {
        return (
          <div key={project.index} className="project-entry">

            <div className="element">
            <label htmlFor={"-p-t-" + project.index}>Title : </label>
            <input id={"-p-t-" + project.index} onChange={updateProjectName}></input>
            </div>
            
            <div className="element">
            <label htmlFor={"-p-l-" + project.index}>Link : </label>
            <input id={"-p-l-" + project.index} onChange={updateProjectLink}></input>
            </div>
            
            <h4>Skills</h4>
            <button onClick={addSkill} id={"-p-s-a-b-"+project.index} className="btn-3">Add Skill</button>
            <button onClick={removeSkill} id={"-p-s-r-b-"+project.index} className="btn-4">Remove Skill</button>
            <br />
            {project.skills.map((skill) => {
              return (
                <div key={project.index+"-"+skill.index} className="element">
                  <label htmlFor={"-p-s-" + project.index+"-"+skill.index}>Skill : </label>
                  <input id={"-p-s-" + project.index+"-"+skill.index} onChange={updateProjectSkill}></input>
                </div>
              );
            })}
            <label htmlFor={"-p-d-" + project.index}>Description : </label>
            <textarea id={"-p-d-" + project.index} onChange={updateProjectDescription}></textarea>
            <br />
          </div>
        );
      })}
    </div>
  );
}
