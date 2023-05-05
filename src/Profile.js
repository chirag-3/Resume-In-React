import './Profile.css'

export default function Profile({l1,ln1,l2,ln2,l3,ln3,l4,ln4}){
    return(
      <div id="profiles"> 
        <a className='profile' href={l1}>{ln1}</a>
        <a className='profile' href={l2}>{ln2}</a>
        <a className='profile' href={l3}>{ln3}</a>
        <a className='profile' href={l4}>{ln4}</a>
      </div>  
    );
}