import "./App.css";
import Heading from "./heading.js";
import Profile from "./Profile.js";
import Editor from "./Editor.js";
import ReactToPrint from "react-to-print";
import React, { useRef, useState } from "react";
import LeftComponent from "./LeftComponent";
import RightComponent from "./RightComponent";

function App() {
  let componentRef = useRef(null);
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [profiles, setProfiles] = useState([]);
  const [education, setEducation] = useState([]);
  const [skills,setSkills] = useState([]);
  
  return (
    <>
      {/* The Resume */}
      <div className="App" id="resume" ref={componentRef}>
        <Heading name={name} city={city} state={state} />

        <Profile profiles={profiles} />

        <div id="components">
          <LeftComponent id="leftComponent" education={education} skills={skills}/>
          <RightComponent id="rightComponent" />
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
      />
    </>
  );
}

export default App;
