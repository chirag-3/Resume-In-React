
import './Projects.css' 

export default function Projects({projects}){
    return(
        (
        projects.length===0?null:
        <div id="projects">
            <h2>Projects</h2>
        
            <ul>
                { projects.map(project=>
                        <li>
                            <h4>{project.title}</h4>
                            {project.skills.length===0?null:
                            <ul className='tech-used'>
                                {
                                    project.skills.map(tech=>
                                            <div><li>{tech.name}</li></div>
                                        )
                                }
                            </ul>}
                            <p>
                                {project.description}
                            </p>
                        </li>)
                }
            </ul>
        </div>
        )
    );
}