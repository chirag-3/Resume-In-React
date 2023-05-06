import './App.css';
import Name from './heading.js';
import Profile from './Profile.js';
import {Education} from './Education';
import Skills from './Skills';
import Projects from './Projects';
import data from "./data/data";

function App() {
  return (
    <div className="App"  id='resume'>
        <Name name={data.name} city={data.city} state={data.state} />
        <br />
        <Profile profiles={data.profiles}  />
        <Education tenthGrade={data.education.tenthGrade} twelfthGrade={data.education.twelfthGrade} collegeGrade={data.education.collegeGrade} 
                   tenthSchool={data.education.tenthSchool} twelfthSchool={data.education.twelfthSchool} college={data.education.college} 
                   tenthTime={data.education.tenthTime} twelfthTime={data.education.twelfthTime} collegeTime={data.education.collegeTime}/>
        <Skills skills={data.skills}/>
        <Projects projects={data.projects} />
    </div>
  );
}

export default App;
