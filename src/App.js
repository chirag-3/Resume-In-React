import "./App.css";
import Heading from "./heading.js";
import Profile from "./Profile.js";
import Editor from "./Editor.js";
import ReactToPrint from "react-to-print";
import React, { useRef, useState } from "react";
import LeftComponent from "./LeftComponent";
import RightComponent from "./RightComponent";
import data from './data/data.js';

function App() {
  let componentRef = useRef(null);
  const [name, setName] = useState(data.name);
  const [city, setCity] = useState(data.city);
  const [state, setState] = useState(data.state);
  const [profiles, setProfiles] = useState(data.profiles);
  const [education, setEducation] = useState(data.education);
  const [skills,setSkills] = useState(data.skills);
  const [projects,setProjects] = useState(data.projects);
  const [certificates,setCertificates] = useState(data.certificates);
  const [achievements,setAchievements] = useState(data.certificates);

  return (
    // <>
    <div id="page">
      {/* The Resume */}
      <div className="App" id="resume" ref={componentRef}>
        <Heading name={name} city={city} state={state} />
        
        <Profile profiles={profiles} />

        <div id="components">
          <LeftComponent id="leftComponent" education={education} skills={skills}/>
          <RightComponent id="rightComponent" projects={projects} certificates={certificates} achievements={achievements}/>
        </div>

      </div>

      
      
      
      {/* To print the resume */}
      <ReactToPrint
        trigger={() => (
          <button style={{ backgroundColor: "blue", color: "white" }}>
            Print
          </button>
        )}
        content={() => componentRef.current}
      />

      {/*To enter data into the resume*/}
      <Editor
        setName={setName}
        setCity={setCity}
        setState={setState}
        setProfiles={setProfiles}
        profiles={profiles}
        education={education}
        setEducation={setEducation}
        skills={skills}
        setSkills={setSkills}
        projects={projects}
        setProjects={setProjects}
        certificates={certificates}
        setCertificates={setCertificates}
        achievements={achievements}
        setAchievements={setAchievements}
      />
    </div>
    // </>
  );
}

export default App;
