import "./Education.css";

export function Education({
  education
}) {
  return (
    education.length===0?null:
    <div id="education">
      <h2>EDUCATION</h2>
      {education.map((edu) => {
        return (
        <p key={edu.index}>
            {edu.institute} <br />
            {edu.grade} <br />
            {edu.time} <br />
        </p>
        );
      })}
    </div>
  );
}
