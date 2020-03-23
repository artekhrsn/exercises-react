import React from "react";

const HeaderMenu = props => {
  const activeItems = props.items.filter(item => item.active === true);
  const number = activeItems.length;
  return (
    <header>
      <h2>Wielkość zamówienia: {number}</h2>
      <h2>
        Do zapłaty:
        {number ? `${number * 10} złotych` : "nie kupujesz , to nie płacisz"}
      </h2>
    </header>
  );
};

export default HeaderMenu;
