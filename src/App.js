import React, { Component } from "react";
import "./App.css";
import ReceipeForm from "./components/ReceipeForm/ReceipeForm";
import axios from "axios";
import ReceipeList from "./components/ReceipeList/ReceipeList";
import "./styles/main.scss";

class App extends Component {
  state = {
    receipes: [],
  };

  getReceipes = (e) => {
    e.preventDefault();
    const inputValue = e.target.receipeName.value;

    axios
      .get(
        `https://api.spoonacular.com/recipes/search?apiKey=${process.env.REACT_APP_API_KEY}&query=${inputValue}`
      )
      .then((response) => {
        this.setState({
          receipes: [...response.data.results],
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  render() {
    return (
      <div className="paper center">
        <h1 className="mb-1">Receipe App</h1>

        <ReceipeForm getReceipesMethod={this.getReceipes} />
        {this.state.receipes.length === 0 ? (
          ""
        ) : (
          <ReceipeList receipesList={this.state.receipes} />
        )}
      </div>
    );
  }
}

export default App;
