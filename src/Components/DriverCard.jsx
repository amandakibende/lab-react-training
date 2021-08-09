import "../style/DriverCard.css";
import Rating from "../Components/Rating";

function DriverCard(props){
    return (
        <div>
            <h1>{props.name}</h1>
            <p>{props.rating}</p>
            <h1><Rating>{props.rating}</Rating></h1>
             <img className="Drive-card-img" src={props.img} alt=""/>
            <div >
                <p>{props.car.model}</p>
                <p>{props.car.licensePlate}</p>
            </div>
            
        </div>
    );
}

export default DriverCard; 