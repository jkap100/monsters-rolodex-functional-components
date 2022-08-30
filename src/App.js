import React, { useState, useEffect } from "react";

import CardList from "./components/card-list/cardList.component.jsx";
import SearchBox from "./components/search-box/searchBox.component.jsx";

import "./App.css";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((r) => r.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });

    setFilteredMonsters(filteredMonsters);
  }, [monsters, searchField]);

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
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
