import React from "react";

const Item = props => (
  <div>
    <h1>Uzytkownik {props.content.name}</h1>
    <h2>Ma {props.content.age}</h2>
  </div>
);

export default Item;
