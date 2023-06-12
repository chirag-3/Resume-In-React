import Projects from "./Projects";
import data from "./data/data";
import './RightComponent.css';

export default function RightComponent({projects}){
    return(
        <div id="rightComponent">
            <Projects projects={projects} />
        </div>
    )
}