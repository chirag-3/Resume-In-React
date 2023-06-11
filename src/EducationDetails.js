import React from "react";

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
    <div>
      <h1>Education</h1>
      <button onClick={addEducation}>add Education</button>
      <button onClick={removeEducation}>remove Education</button>
      {education.map((x) => {
        return (
          <React.Fragment key={x.index}>
            <br />
            <label htmlFor={"n"+x.index}> Institite and Degree : </label>
            <input type="text" id={"n"+x.index} name="institute" onChange={updateEducation}/> <br />
            <label htmlFor={"c"+x.index}> Grade : </label>
            <input type="text" id={"c"+x.index} name="grade" onChange={updateEducation}/> <br />
            <label htmlFor={"s"+x.index}> Time : </label>
            <input type="text" id={"s"+x.index} name="time" onChange={updateEducation}/> <br />
          </React.Fragment>
        );
      })}
    </div>
  );
}
