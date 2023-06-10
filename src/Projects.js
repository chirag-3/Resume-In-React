
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
                            <h4>{project.name}</h4>
                            {project.technologies.length===0?null:
                            <ul className='tech-used'>
                                {
                                    project.technologies.map(tech=>
                                            <div><li>{tech}</li></div>
                                        )
                                }
                            </ul>}
                        </li>)
                }
            </ul>
        </div>
        )
    );
}