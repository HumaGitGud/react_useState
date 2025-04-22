import { useState } from "react";

function Restaurant(props) {
  const [hours, setHours] = useState(false);
  const [menu, setMenu] = useState(false);

  const handleHours = () => setHours(prevState => !prevState);
  const handleMenu = () => setMenu(prevState => !prevState);

  return (
    <div className="restaurant">
      <img src={props.restaurant.image} alt={props.name} />
      <h2>{props.restaurant.name}</h2>
      <ul>
        <li>{props.restaurant.address}</li>
        <li>{props.restaurant.phone}</li>
        <li>{props.restaurant.cuisine}</li>
        <li>{props.restaurant.rating}</li>
      </ul>
      <button onClick={handleHours}>Hours</button>
      <button onClick={handleMenu}>Menu</button>
    </div>
  );
}

export default Restaurant;
