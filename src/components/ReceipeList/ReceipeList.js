import React from "react";
import { Link } from "react-router-dom";

const ReceipeList = (props) => {
  console.log(props.receipesList.length);

  return (
    <ul class="row">
      {props.receipesList.map((receipe) => {
        return (
          <li className="recipe mb-1">
            {/* Linki posiadają parametr(właściwość) to, która może posiadać pathname czyli drogę gdzie ma nas zabrać oraz może wysłać pewne informacje w momencie przejścia z jednej ścieżki na drugą za pomocą stanu linku - nie mylic ze stanem aplikacji!!!  */}
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
              {/* <img
                src={`https://spoonacular.com/recipeImages/${receipe.image}`}
                alt="receipePhoto"
              /> */}
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
