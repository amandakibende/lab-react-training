import "../style/CreditCard.css"
function CreditCard (props){
    return  (<div className="Credit-Card" style={{backgroundColor : props.bgColor, color:props.color}} >

    <p>{props.type}</p>
    <p>{props.number.slice(12, 16).padStart(16, " *")}</p>
    <p>{props.expirationMonth}</p>
    <p>{props.expirationYear}</p>
    <p>{props.bank}</p>
    <p>{props.owner}</p>
    
    
          
</div>);
}




export default CreditCard; 