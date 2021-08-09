function Randomizer (min, max){

    return Math.floor(Math.random() * (max - min + 1)) + min;
};

function Random (props){

    return(

     <p>Random value between {props.min} and {props.max} => {Randomizer(props.min, props.max)}</p>

    );

}

export default Random; 