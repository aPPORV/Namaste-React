import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      MENU_API + resId + "&catalog_qa=undefined&submitAction=ENTER"
    );

    const json = await data.json();
    setResInfo(json.data);
  };

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
            <span className="item-name">{item?.card?.info?.name}</span> {" "}
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
