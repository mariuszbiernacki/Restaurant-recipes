import React from "react";
import { Link } from "react-router-dom";

const ReceipeList = (props) => {
  return (
    <ul class="row">
      {props.receipesList.map((receipe) => {
        return (
          <li className="recipe mb-1">
            <Link
              to={{
                pathname: `/recipes/${receipe.title}`,
                state: {
                  recipeTitle: receipe.title,
                  recipeImage: receipe.image,
                  servings: receipe.servings,
                  readyInMin: receipe.readyInMinutes,
                  link: receipe.sourceUrl,
                },
              }}
            >
              <div
                className="recipe__photo"
                style={{
                  backgroundImage: `url(https://spoonacular.com/recipeImages/${receipe.image})`,
                }}
              ></div>
            </Link>
            <p>{receipe.title}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default ReceipeList;
