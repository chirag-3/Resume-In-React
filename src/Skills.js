import './Skills.css';

export default function Skills({skill1,skill2,skill3,skill4,skill5,skill6,skill7,skill8}){
    return(
    <div id="skills">
        <h2>SKILLS</h2>
        <ul>
            <li>
                {skill1}
            </li>
            <li>
                {skill2}
            </li>
            <li>
                {skill3}
            </li>
            <li>
                {skill4}
            </li>
            <li>
                {skill5}
            </li>
            <li>
                {skill6}
            </li>
            <li>
                {skill7}
            </li>
            <li>
                {skill8}
            </li>
        </ul>
    </div>);
}