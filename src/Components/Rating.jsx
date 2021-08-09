function Rating (props) {

   
        const rating = Math.round(Number(props.children))
    
    
    let stars = [];

    for (let i =0; i< 5; i++){

        if (i < rating) {
            stars.push(<span>★</span>)
        } else {
            stars.push(<span>☆</span>)
        }

    }

    return <div>{stars}</div>; 

    
}

export default Rating; 