import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {

  const {resData} = props;

  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    sla
  }= resData?.info;

    return (
      <div className="res-card">
        <img className="res-logo" alt="res-logo" src={CDN_URL + cloudinaryImageId} />
        <h3>{name}</h3>
        <h4 className="cuisines">{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h3>{costForTwo}</h3>
        <h3>{sla?.slaString}</h3>

      </div>
    );
  };

export default RestaurantCard;