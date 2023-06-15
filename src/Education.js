import "./Education.css";

export function Education({
  education
}) {
  return (
    education.length===0?null:
    <div id="education">
      <h2>EDUCATION</h2>
      <ul>
      {education.map((edu) => {
        return (
        <li key={edu.index}>
            <b>{edu.institute}</b> <br />
            {edu.grade} <br />
            {edu.time} <br />
        </li>
        );
      })}
      </ul>
    </div>
  );
}
