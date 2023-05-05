import './Education.css'

export function Education({tenthSchool,tenthGrade,tenthTime,twelfthSchool,twelfthGrade,twelfthTime,college,collegeGrade,collegeTime})
{
    return(
    <div id="education"> 
        <h2>EDUCATION</h2>
        <span> {college} &nbsp;&nbsp;&nbsp;&nbsp; {collegeGrade} &nbsp;&nbsp;&nbsp;&nbsp; {collegeTime}</span> <br />
        <span> {tenthSchool} &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {tenthGrade} &nbsp;&nbsp;&nbsp;&nbsp; {tenthTime}</span><br />  
        <span> {twelfthSchool} &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {twelfthGrade} &nbsp;&nbsp;&nbsp;&nbsp;  {twelfthTime}</span> <br />
    </div>);
}