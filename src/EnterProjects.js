import React from "react";

export default function EnterProjects({ projects, setProjects }) {

  function addProject(e) {
    e.stopPropagation();
    e.preventDefault();

    setProjects([
      ...projects,
      { title: "", description: "", skills: [], index:projects.length },
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

    // console.log("*********************");
    // console.log(projectIndex);
    // console.log(skillIndex);
    // console.log("*********************")

    temp[projectIndex].skills[skillIndex].name = e.target.value;

    setProjects(temp);

 }


  return (
    <div>
      <h2>Projects</h2>
      <button onClick={addProject}>Add Project</button>
      <button onClick={removeProject}>Remove Project</button>
      <br />
      {projects.map((project) => {
        return (
          <React.Fragment key={project.index}>
            <label>Title : </label>
            <input id={"-p-t-" + project.index} onChange={updateProjectName}></input>
            <br />
            <h4>Skills</h4> <br />
            <button onClick={addSkill} id={"-p-s-a-b-"+project.index}>Add Skill</button>
            <button onClick={removeSkill} id={"-p-s-r-b-"+project.index}>Remove Skill</button>
            <br />
            {project.skills.map((skill) => {
              return (
                <React.Fragment key={project.index+"-"+skill.index}>
                  <label htmlFor={"-p-s-" + project.index+"-"+skill.index}>Skill : </label>
                  <input id={"-p-s-" + project.index+"-"+skill.index} onChange={updateProjectSkill}></input>
                  <br />
                </React.Fragment>
              );
            })}
            <label htmlFor={"-p-d-" + project.index}>Description : </label>
            <textarea id={"-p-d-" + project.index} onChange={updateProjectDescription}></textarea>
            <br />
            <hr />
          </React.Fragment>
        );
      })}
    </div>
  );
}
