const CardItem = (props) => {

    return (
        <img
            src={props.src}
            width="500"
            height="500"
            alt={props.alt} />
    )
}

export default CardItem;
