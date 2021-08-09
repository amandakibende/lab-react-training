function idCard(props) {

return (
<div className="Card-profile">
   <img className="Card-profile-picture" src={props.picture} alt=""/>
   <p>FirstName : {props.firstName}</p>
   <p>LasttName : {props.lasttName}</p>
   <p>Gender : {props.gender}</p>
   <p>Height : {props.height}</p>
   <p>Birth : {props.birth}</p> 
   
 </div>
      

      );

      
    
}

export default idCard; 