import RestaurantsContainer from "./components/RestaurantsContainer";
import { restaurants } from "./data/data.js";
import { useState } from "react";
import "./App.css";

function App() {
  // state to hold list of restaurants initially set to restaurants data
  // ... creates shallow copy instead of mutating data 
  const [restaurantState, setRestaurants] = useState([...restaurants]);

  // state for controlled form inputs
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent default submission behavior

    // new restaurant object with values from form inputs
    const newRestaurant = {
      name,
      address,
      phone,
      cuisine,
      rating,
      image: "https://example-image.com",
      menu: [],
      hours: {},
    };

    // update state with new restaurant added to existing list
    setRestaurants([...restaurantState, newRestaurant]);

    // clear form fields after submiting
    setName("");
    setAddress("");
    setPhone("");
    setCuisine("");
    setRating("");
  };

  // onChange update state. required means form input required
  return (
    <div className="App">
      <h1>Add a Restaurant</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Restaurant name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} required />
        <input type="text" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        <input type="text" placeholder="Cuisine" value={cuisine} onChange={(e) => setCuisine(e.target.value)} required />

        <select value={rating} onChange={(e) => setRating(e.target.value)} required>
          <option value="">Select rating</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>

        <button type="submit">Add</button>
      </form>

      <RestaurantsContainer restaurants={restaurantState} />
    </div>
  );
}

export default App;