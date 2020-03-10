import React, { Component } from "react";
import Recipe from "./recipe";
export default class RecipeList extends Component {
  render() {
    const { recipes, handleDetails } = this.props;
    return (
      <React.Fragment>
        <div className="container my-5">
          <div className="row">
            {recipes.map(recipe => {
              <Recipe
                key={recipe.recipe_id}
                recipe={recipe}
                handleDetails={handleDetails}
              />;
            })}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
