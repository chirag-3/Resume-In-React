
import { Education } from "./Education";
import data from "./data/data";
import './LeftComponent.css';
import Skills from "./Skills";

export default function LeftComponent({education}){
    return (
        <div id="leftComponent">
        <Education
          education={education}
        />
        <Skills skills={data.skills} />
        </div>
    )
}