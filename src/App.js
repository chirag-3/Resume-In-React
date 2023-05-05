import './App.css';
import Name from './heading.js';
import Profile from './Profile.js';
import {Education} from './Education';
import Skills from './Skills';
import Projects from './Projects'

function App() {
  let school = "Atomic Energy Central School RRCAT Indore";
  let tenG = '91.2%';
  let tfG = "92.6%";
  let cG = "8.48"; 
  let college = "Chandigarh University BE CSE IBM Big Data Analytics";
  let tTime = '2015-2016';
  let tfTime = '2017-2018';
  let cTime = '2020-2024';
  return (
    <div className="App"  id='resume'>
        <Name name="Chirag Lala" city="Indore" state="Madhya Pradesh" />
        <br />
        <Profile ln1="LinkedIn" l1="https://www.linkedin.com/in/chirag-lala-830463190/"
                 ln2="Github" l2="https://github.com/chirag-3"
                 ln3="Leetcode" l3="https://leetcode.com/chiragvs/"
                 ln4="InterviewBit" l4="https://www.interviewbit.com/profile/chirag-lala/daily-activity"  />
        <Education tenthGrade={tenG} twelfthGrade={tfG} collegeGrade={cG} tenthSchool={school} twelfthSchool={school} college={college} 
                   tenthTime={tTime} twelfthTime={tfTime} collegeTime={cTime}/>
        <Skills skill1={"Python"} skill2={"JavaScript"} skill3={"HTML"} skill4={"CSS"} skill5={"Excel"} skill6={"SQL"} skill7={"C++"} 
                skill8="Problem Solving"/>
        <Projects />
    </div>
  );
}

export default App;
