import Projects from "./Projects";
import data from "./data/data";
import './RightComponent.css';

export default function RightComponent(){
    return(
        <div id="rightComponent">
            <Projects projects={data.projects} />
        </div>
    )
}