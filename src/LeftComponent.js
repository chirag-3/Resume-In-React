
import { Education } from "./Education";
import data from "./data/data";
import './LeftComponent.css';
import Skills from "./Skills";

export default function LeftComponent(){
    return (
        <div id="leftComponent">
        <Education
          tenthGrade={data.education.tenthGrade}
          twelfthGrade={data.education.twelfthGrade}
          collegeGrade={data.education.collegeGrade}
          tenthSchool={data.education.tenthSchool}
          twelfthSchool={data.education.twelfthSchool}
          college={data.education.college}
          tenthTime={data.education.tenthTime}
          twelfthTime={data.education.twelfthTime}
          collegeTime={data.education.collegeTime}
        />
        <Skills skills={data.skills} />
        </div>
    )
}