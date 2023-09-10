import { useEffect, useState } from "react";
import "./App.css";
import Watch from "./Components/Watch/Watch";

function App() {
  const [watches, setWatches] = useState([]);
  useEffect(() => {
    fetch("watches.json")
      .then((res) => res.json())
      .then((data) => setWatches(data));
  }, []);
  // const watches = [
  //   { id: 1, name: "Classic Silver Watch", price: 99.99 },
  //   { id: 2, name: "Sporty Black Chronograph", price: 149.99 },
  //   { id: 3, name: "Elegant Rose Gold Timepiece", price: 199.99 },
  //   { id: 4, name: "Luxury Diamond-Encrusted Watch", price: 499.99 },
  //   { id: 5, name: "Minimalist Leather Band Watch", price: 79.99 },
  //   { id: 6, name: "Digital Smartwatch", price: 129.99 },
  //   { id: 7, name: "Diver's Waterproof Watch", price: 179.99 },
  //   { id: 8, name: "Vintage Pocket Watch", price: 299.99 },
  // ];
  return (
    <>
      <h1 className="text-3xl">Hello From react</h1>
      {watches.map((watch) => (
        <Watch key={watch.id} watch={watch}></Watch>
      ))}
    </>
  );
}

export default App;
