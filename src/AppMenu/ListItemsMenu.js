import React from "react";
import ItemMenu from "./ItemMenu";

const ListItemsMenu = props => {
  const items = props.items.map(item => (
    <ItemMenu
      key={item.id}
      id={item.id}
      name={item.name}
      active={item.active}
      changeStatus={props.changeStatus}
    />
  ));
  return (
    <div className="list">
      <h1>Twoje Zamowienie: </h1>
      <ul>{items}</ul>
    </div>
  );
};
export default ListItemsMenu;
