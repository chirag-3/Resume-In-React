import './Education.css'

export function Education({tenthSchool,tenthGrade,tenthTime,twelfthSchool,twelfthGrade,twelfthTime,college,collegeGrade,collegeTime})
{
    return(
    <div id="education"> 
        <h2>EDUCATION</h2>

        <p> 
            {college} <br /> 
            {collegeGrade} <br />
            {collegeTime}
        </p> 
        <p> 
            {tenthSchool} <br /> 
            {tenthGrade} <br /> 
            {tenthTime}
        </p>
        <p> 
            {twelfthSchool} <br /> 
            {twelfthGrade} <br />  
            {twelfthTime}
        </p> 
    </div>
    );
}