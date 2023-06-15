import './PersonalInformation.css'


export default function PersonalInformation({setName,setCity,setState}){
    return(
        <>
        <h1>Personal Information</h1>
        <div id="personalInfo">

            <div className="element">
            <label htmlFor="name2"> Name : </label>
            <input type="text" id="name2" onChange={(e)=>setName(e.target.value)}/>
            </div>

            <div className="element">
            <label htmlFor="city" > City : </label>
            <input type="text" id="city" onChange={(e)=>setCity(e.target.value)} />
            </div>

            <div className="element">
            <label htmlFor="state"> State : </label>
            <input type="text" id="state" onChange={(e)=>setState(e.target.value)}/>
            </div>

        </div>
        </>
    )
}