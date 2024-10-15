import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  return (
    <div className="menu">
      <h1 className="menu-title">{name}</h1>
      <p className="menu-info">
        <span className="menu-cuisines">{cuisines.join(", ")}</span>
        <span className="menu-cost">{costForTwoMessage}</span>
      </p>
      <h2 className="menu-items-title">Menu Items</h2>
      <ul className="menu-items">
        {itemCards.map((item) => (
          <li key={item.card.info.id} className="menu-item">
            <span className="item-name">{item?.card?.info?.name}</span>{" "}
            <span className="item-price">
              {item?.card?.info.price / 100 ||
                item?.card?.info?.variantsV2?.pricingModels[0]?.price}{" "}
              ₹
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
