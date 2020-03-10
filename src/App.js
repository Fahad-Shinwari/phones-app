import React, { Component } from "react";
import "./App.css";
import { recipes } from "./tempList";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";

export default class App extends Component {
  state = {
    recipes: recipes,
    url: `https://www.food2fork.com/api/search?key=99cc272095d74e80e72cfd4dfaff234f`,
    details_id: 35389
  };
  async getRecipes() {
    const data = await fetch(this.state.url);
    const json = await data.json();
    //console.log(json);
    this.setState({
      recipes: json.recipes
    });
  }
  componentDidMount() {
    // this.getRecipes();
  }
  handleDetail = id => {
    this.setState({
      details_id: id
    });
  };
  render() {
    return (
      <React.Fragment>
        <RecipeList
          recipes={this.state.recipes}
          handleDetail={this.handleDetail}
        />
        <RecipeDetails id={this.state.details_id} />
      </React.Fragment>
    );
  }
}
