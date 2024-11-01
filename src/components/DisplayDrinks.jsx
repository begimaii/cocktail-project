import React, { useState } from "react";
import { cocktails } from "../data";
import Header from "./Header";

export default function displayDrinks() {
  const [sortedDrinks, setSortedDrinks] = useState(cocktails);

  const coctailCategories = [
    "All",
    "Ordinary Drink",
    "Cocktail",
    "Shot",
    "Coffee / Tea",
    "Other/Unknown",
  ];
  console.log(cocktails);
  const handleSortDrinks = (category) => {
    console.log("click");
    if (category === "All") {
      setSortedDrinks(cocktails);
    } else {
      const filteredDrinks = cocktails.filter(
        (drink) => drink.strCategory === category
      );
      setSortedDrinks(filteredDrinks);
    }
  };
  const handleSearch = (title) => {
    const filteredDrinks = cocktails.filter((drink) =>
      drink.strDrink.toLowerCase().includes(title.toLowerCase())
    );
    setSortedDrinks(filteredDrinks);
  };

  return (
    <>
      <Header handleSearch={handleSearch} />
      <div className="wrapper">
        <nav className="list">
          {coctailCategories.map((category) => (
            <div
              onClick={() => handleSortDrinks(category)}
              className="list-item "
              key={category}
            >
              {category}
            </div>
          ))}
        </nav>

        <main className="main-content">
          {sortedDrinks.map((drink) => (
            <div className="cocktail-item" key={drink.id}>
              <div className="img-wrapper">
                <img src={drink.strDrinkThumb} alt={drink.strCategory} />
                <p className="category-type">{drink.strCategory}</p>
              </div>
              <p className="coctail-name">{drink.strDrink}</p>
            </div>
          ))}
        </main>
      </div>
    </>
  );
}
