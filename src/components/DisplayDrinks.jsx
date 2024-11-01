import React, { useState } from "react";
import { cocktails } from "../data";
import Header from "./Header";
import SingleDrinkModal from "./SingleDrinkModal";

export default function displayDrinks() {
  const [sortedDrinks, setSortedDrinks] = useState(cocktails);
  {
    const [activeCategory, setActiveCategory] = useState("All");
    const [selectedCocktail, setSelectedCocktail] = useState(null);

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
      setActiveCategory(category);
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
    const handleOpenModal = (cocktail) => {
      setSelectedCocktail(cocktail);
    };
    const handleCloseModal = () => {
      setSelectedCocktail(null);
    };
    return (
      <>
        <Header handleSearch={handleSearch} />
        <div className="wrapper">
          <nav className="list">
            {coctailCategories.map((category) => {
              const customClassName =
                category === activeCategory ? "active" : "";
              return (
                <div
                  style={{ paddingTop: "20px" }}
                  onClick={() => handleSortDrinks(category)}
                  className={`list-item ${customClassName}`}
                  key={category}
                >
                  {category}
                </div>
              );
            })}
          </nav>

          <main className="main-content">
            {sortedDrinks.map((drink) => (
              <div className="cocktail-item" key={drink.id}>
                <div
                  onClick={() => handleOpenModal(drink)}
                  className="img-wrapper"
                >
                  <img src={drink.strDrinkThumb} alt={drink.strCategory} />
                  <p className="category-type">{drink.strCategory}</p>
                </div>
                <p className="coctail-name">{drink.strDrink}</p>
              </div>
            ))}
          </main>
          {selectedCocktail && (
            <SingleDrinkModal
              drink={selectedCocktail}
              handleCloseModal={handleCloseModal}
              isOpen={selectedCocktail}
            />
          )}
        </div>
      </>
    );
  }
}
