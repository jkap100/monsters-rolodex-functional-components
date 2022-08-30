import React, { useState } from "react";

import CardList from "./components/card-list/cardList.component.jsx";
import SearchBox from "./components/search-box/searchBox.component.jsx";

import "./App.css";

const App = () => {
  const [searchField, setSearchField] = useState("");

  const onSearchChange = (e) => {
    const searchFieldString = e.target.value.toLowerCase();

    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>

      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="search monsters"
        className="monsters search-box"
      />
      {/* <CardList monsters={filteredMonsters} /> */}
    </div>
  );
};

export default App;
