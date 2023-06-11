import PersonalInformation from "./PersonalIformation";
import EducationDetails from "./EducationDetails";
import AddProfiles from "./AddProfiles";

export default function Editor({ setName, setCity, setState, setProfiles, profiles, education, setEducation }) {
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
      </form>
    </div>
  );
}
