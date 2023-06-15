import React from "react";
import './EnterCertificates.css'

export default function EnterCertificates({certificates,setCertificates,isCertificate}){


    function addCertificate(e){
        e.stopPropagation();
        e.preventDefault();

        setCertificates([...certificates,{index:certificates.length, link:"",name:""}]);
    }

    function removeCertificate(e){
        e.stopPropagation();
        e.preventDefault();

        setCertificates(certificates.slice(0,certificates.length-1));
    }

    function updateCertificate(e){
        let idx = +(e.target.id.slice(3));

        let temp = structuredClone(certificates);
        temp[idx].name = e.target.value;

        setCertificates(temp);
    }

    function updateLink(e){
        let idx = +(e.target.id.slice(5));

        let temp = structuredClone(certificates);
        temp[idx].link = e.target.value;

        setCertificates(temp);
    }


    return(
        <div id="certificate-entries">
            <h1>{isCertificate===true?"Certificates":"Achievements"}</h1>
            <button onClick={addCertificate} id="btn-1">{isCertificate===true?"Add Certitficate":"Add Achievement" }</button>
            <button onClick={removeCertificate} id="btn-2">{isCertificate===true?"Remove Certificate":"Remove Achievement"}</button>
            <br />

            {
                certificates.map(certificate=>{
                    return(
                        <div key={certificate.index} className="certificate-entry">
                            
                            <div className="element">
                            <label htmlFor={"-c-"+certificate.index}>Certificate : </label>
                            <input id={"-c-"+certificate.index} onChange={updateCertificate}></input>
                            </div>

                            <div className="element">
                            <label htmlFor={"-c-l-"+certificate.index}>Link : </label>
                            <input id={"-c-l-"+certificate.index} onChange={updateLink}></input>
                            </div>
                        
                        </div>    
                    )
                })
            }

        </div>
    )
}
