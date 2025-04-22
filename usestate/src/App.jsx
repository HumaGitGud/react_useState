import RestaurantsContainer from "./components/RestaurantsContainer";
import { restaurants } from "./data/data.js";
import { useState } from "react";
import "./App.css";

function App() {
  const [restaurantState, setRestaurants] = useState([...restaurants]);

  return (
    <div className="App">
      <RestaurantsContainer restaurants={restaurantState} />
    </div>
  );
}

export default App;