import React from "react";
import './EducationDetails.css';

export default function EducationDetails({ education, setEducation }) {
  function addEducation(e) {
    e.preventDefault();
    e.stopPropagation();

    let temp = education.length;

    setEducation([
      ...education,
      { institute: "", grade: "", time: "", index: temp },
    ]);
  }

  function removeEducation(e) {
    e.preventDefault();
    e.stopPropagation();

    let temp = education.length;

    setEducation(education.slice(0, temp - 1));
  }


  function updateEducation(e){
    let index = +(e.target.id.slice(1));

    let newEducation = [];
    let l = education.length;

    for(let i=0;i<l;i++)
    {
      if(education[i].index!==index)
      {
        newEducation.push(education[i]);
      }
      else
      {
        let temp = education[i];
        temp[e.target.name] = e.target.value;
        newEducation.push(temp);
      }
    }

    setEducation(newEducation);

  }


  return (
    <div id="educationDetails">
      <h1>Education</h1>
      <button onClick={addEducation} id="btn-1">add Education</button>
      <button onClick={removeEducation} id="btn-2">remove Education</button>
      {education.map((x) => {
        return (
          <div key={x.index} className="education-entry">
            <div className="element">
            <label htmlFor={"n"+x.index}> Institite and Degree : </label>
            <input type="text" id={"n"+x.index} name="institute" onChange={updateEducation}/>
            </div>

            <div className="element"> 
            <label htmlFor={"c"+x.index}> Grade : </label>
            <input type="text" id={"c"+x.index} name="grade" onChange={updateEducation}/>
            </div>

            <div className="element">
            <label htmlFor={"s"+x.index}> Time : </label>
            <input type="text" id={"s"+x.index} name="time" onChange={updateEducation}/>
            </div>
          </div>
        );
      })}
    </div>
  );
}
