import React from "react";
import './Certificates.css';

export default function Certificates({certificates,title}){
    return(
       certificates.length===0?null:
       <div id="certificates">
           <h2> {title} </h2>
           <ul>
           {
            certificates.map(certificate=>{
                return(
                    <li key={certificate.index}>
                        {certificate.name} {certificate.link===''?null:<a href={certificate.link}>link</a>}
                    </li>    
                );
            })
           }
           </ul>
       </div>
    );
}