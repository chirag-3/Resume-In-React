export default function PersonalInformation({setName,setCity,setState}){
    return(
        <div>
            <h1>Personal Information</h1>
            <label htmlFor="name"> Name : </label>
            <input type="text" id="name" onChange={(e)=>setName(e.target.value)}/> <br />
            <label htmlFor="city" > City : </label>
            <input type="text" id="city" onChange={(e)=>setCity(e.target.value)} /> <br />
            <label htmlFor="state"> State : </label>
            <input type="text" id="state" onChange={(e)=>setState(e.target.value)}/> <br />
        </div>
    )
}