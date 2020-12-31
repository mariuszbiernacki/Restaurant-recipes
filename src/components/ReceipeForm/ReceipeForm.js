import React from "react";

const ReceipeForm = (props) => {
  return (
    <form className="mb-1" onSubmit={props.getReceipesMethod}>
      <input
        className="input"
        name="receipeName"
        type="text"
        placeholder="type your receipe"
      />
      <button className="button" type="submit">
        Search
      </button>
    </form>
  );
};

export default ReceipeForm;
