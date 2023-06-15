
import './Projects.css' 

export default function Projects({projects}){
    return(
        (
        projects.length===0?null:
        <div id="projects">
            <h2>PROJECTS</h2>
        
            <ul>
                { projects.map(project=>
                        <li key={project.index}>
                            <h4>{project.title}{project.link===""?null:<a href={project.link}> link</a>}</h4>
                            
                            {project.skills.length===0?null:
                            <ul className='tech-used'>
                                {
                                    project.skills.map(tech=>
                                            <div key={project.skills.index}><li>{tech.name}</li></div>
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