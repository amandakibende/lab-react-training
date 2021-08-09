import "../style/BoxColor.css";

function BoxColor(props) {

    return <div>
        <div  style={{backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`}} className="box-color">rgb({props.r}, {props.g}, {props.b})</div>
       
    </div>
    
}


export default BoxColor; 