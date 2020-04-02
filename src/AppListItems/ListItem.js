import React from "react";
import { data } from "./DataFile";
import Item from "./Item";

class ListItem extends React.Component {
  state = {};
  render() {
    const users = data.users;
    const Items = users.map(user => <Item key={user.id} content={user} />);
    return <ul>{Items}</ul>;
  }
}

export default ListItem;
