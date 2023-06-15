import Projects from "./Projects";
import './RightComponent.css';
import Certificates from "./Certificates";

export default function RightComponent({projects,certificates,achievements}){
    return(
        <div id="rightComponent">
            <Projects projects={projects} />
            <Certificates certificates={certificates} title={"CERTIFICATES"}/>
            <Certificates certificates={certificates} title={"ACHIEVEMENTS"}/>
        </div>
    )
}