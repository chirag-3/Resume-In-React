import PersonalInformation from "./PersonalIformation";
import EducationDetails from "./EducationDetails";
import AddProfiles from "./AddProfiles";
import EnterSkills from "./EnterSkills";

export default function Editor({ setName, setCity, setState, setProfiles, profiles, education, setEducation, skills, setSkills }) {
  return (
    <div>
      <form>
        <PersonalInformation
          setName={setName}
          setCity={setCity}
          setState={setState}
        />

        <AddProfiles setProfiles={setProfiles} profiles={profiles}/>

        <EducationDetails education={education} setEducation={setEducation}/>

        <EnterSkills skills={skills} setSkills={setSkills}/>
      </form>
    </div>
  );
}
