import PersonalInformation from "./PersonalIformation";
import EducationDetails from "./EducationDetails";
import AddProfiles from "./AddProfiles";
import EnterSkills from "./EnterSkills";
import EnterProjects from "./EnterProjects";
import EnterCertificates from "./EnterCertificates";
import './Editor.css';

export default function Editor({
  setName,
  setCity,
  setState,
  setProfiles,
  profiles,
  education,
  setEducation,
  skills,
  setSkills,
  projects,
  setProjects,
  certificates,
  setCertificates,
  achievements,
  setAchievements
}) {
  return (
    <div id="editor">
      <form>
        <PersonalInformation
          setName={setName}
          setCity={setCity}
          setState={setState}
        />

        <AddProfiles setProfiles={setProfiles} profiles={profiles} />

        <EducationDetails education={education} setEducation={setEducation} />

        <EnterSkills skills={skills} setSkills={setSkills} />

        <EnterProjects projects={projects} setProjects={setProjects} />

        <EnterCertificates certificates={certificates} setCertificates={setCertificates} isCertificate={true}/>

        <EnterCertificates certificates={achievements} setCertificates={setAchievements} isCertificate={false}/>
      </form>
    </div>
  );
}
