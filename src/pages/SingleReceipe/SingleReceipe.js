import React from "react";

const SingleReceipe = (props) => {
  return (
    <div className="single-receipe paper">
      <img
        className="mb-1"
        src={`https://spoonacular.com/recipeImages/${props.location.state.recipeImage}`}
        alt=""
      />
      <h2 className="mb-1 big">{`${props.location.state.recipeTitle}`}</h2>
      <p className="big">{`servings for ${props.location.state.servings} people`}</p>
      <p className="big">{`ready in ${props.location.state.readyInMin} minutes`}</p>
      <a className="big" target="_blank" href={props.location.state.link}>
        more details
      </a>
    </div>
  );
};

export default SingleReceipe;
