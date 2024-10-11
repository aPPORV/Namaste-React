const RestaurantCard = (props) => {
    return (
      <div className="res-card" style={{ opacity: '1' }}>
        <img className="res-logo" alt={`${props.resName} logo`} src={props.image} />
        <h3>{props.resName}</h3>
        <h4>{props.cuisine}</h4>
        <h4>{props.rating} stars</h4>
        <h3>{props.deliveryTime}</h3>
      </div>
    );
  };

export default RestaurantCard;