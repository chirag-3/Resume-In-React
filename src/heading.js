import './heading.css';

export default function Header({city,name,state})
{
    return(
        <div id="heading"> <span id="name">{name}</span>  <br /> <span id="place">{city===''?null:city+','} {state}</span> </div>
    );
}