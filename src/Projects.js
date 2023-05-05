
import './Projects.css' 

export default function Projects({name1,name2,name3,p1t1,p1t2,p1t3,p1t4,p2t1,p2t2,p2t3,p3t1,p3t2,p3t3}){
    return(
        <div id="projects">
            <h2>Projects</h2>
        
            <ul>
                <li>
                    <h4>{name1}</h4>
                    <ul className='tech-used'> 
                        <div><li>{p1t1}</li></div>
                        <div><li>{p1t2}</li></div>
                        <div><li>{p1t3}</li></div>
                        <div><li>{p1t4}</li></div>
                    </ul>
                </li>

                <li>
                    <h4>{name2}</h4>
                    <ul className='tech-used'>
                        <div><li>{p2t1}</li></div>
                        <div><li>{p2t2}</li></div>
                        <div><li>{p2t3}</li></div>
                    </ul>
                </li>

                <li>
                    <h4>{name3}</h4>
                    <ul className='tech-used'>
                        <div><li>{p3t1}</li></div>
                        <div><li>{p3t2}</li></div>
                        <div><li>{p3t3}</li></div>
                    </ul>
                </li>

            </ul>
        </div>
    );
}