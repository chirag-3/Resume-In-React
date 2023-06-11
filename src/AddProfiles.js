import React from 'react';

export default function AddProfiles({ setProfiles, profiles }) {
//   const [profiles, setProfiles] = useState([0]);

  function addProfile(e) {
    e.preventDefault();
    e.stopPropagation();



    let temp = profiles.length;

    setProfiles([...profiles, { link: "", name: "" ,index:temp}]);
  }

  function removeProfile(e) {
    e.preventDefault();
    e.stopPropagation();

    let temp = profiles.length;

    setProfiles(profiles.slice(0, temp - 1));
  }

  function updateProfiles(e){
        let id = +(e.target.id.slice(5));
        
        let newProfiles = []

        for(let i=0;i<profiles.length;i++)
        {
            if(profiles[i].index!==id)
            {
                newProfiles.push(profiles[i]);
                // console.log("pink");
            }
            else
            {
                // console.log("yellow");
                let temp = profiles[i];
                // console.log(e.target.name);
                temp[e.target.name] = e.target.value;
                newProfiles.push(temp);
            }
        }

        setProfiles(newProfiles);
  }

  return (
    <div>
      <h1> Add Profiles </h1>
      <button onClick={addProfile}> add profile </button>
      <button onClick={removeProfile}> remove profile </button>
      {
      profiles.map((x) => {
        return (
          <React.Fragment key={x.index}>
            <br />
            <label htmlFor={"pro-l" + x.index}>link : </label>
            <input id={"pro-l" + x.index} onChange={updateProfiles} name="link"></input>
            <br />
            <label htmlFor={"pro-n" + x.index}>name : </label>
            <input
              id={"pro-n" + x.index}
              onChange={updateProfiles}
              name = "name"
            ></input>
            <br />
          </React.Fragment>
        );
      })
      }
    </div>
  );
}
