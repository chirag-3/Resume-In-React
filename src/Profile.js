import "./Profile.css";

export default function Profile({ profiles }) {
  return profiles.length === 0 ? null : (
    <div id="profiles">
      {profiles.map((profile) => (
        <a className="profile" href={profile.link} key={profile.index}>
          {profile.name}
        </a>
      ))}
    </div>
  );
}
