import './Skills.css';
export default function Skills({skills}){
    return(
    (skills.length===0?null:<div id="skills">
        <h2>SKILLS</h2>
        <ul>
        {
        skills.map(
            skill=> <li key={skill.index}>{skill.skill}</li>
        )
        }
        </ul>       
    </div>));
}