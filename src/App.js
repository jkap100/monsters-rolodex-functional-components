import { Component } from "react";
import CardList from "./components/card-list/cardList.component.jsx";

import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
    // console.log("constructor");
  }

  componentDidMount() {
    // console.log("componentDidMount");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(users);
          }
        )
      );
  }

  onSearchChange = (e) => {
    const searchField = e.target.value.toLocaleLowerCase();

    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    // console.log("render");

    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <input
          className="search-box"
          type="search"
          placeholder="search monsters"
          onChange={onSearchChange}
        ></input>
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
