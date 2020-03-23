import React from "react";
const data = {
  users: [
    { id: 1, age: 29, name: "Artek" },
    { id: 2, age: 19, name: "Marta" },
    { id: 3, age: 28, name: "Karolina" }
  ]
};
const Item = props => (
  <div>
    <h1>Uzytkownik {props.content.name}</h1>
    <h2>Ma {props.content.age}</h2>
  </div>
);

class ListItem extends React.Component {
  state = {};
  render() {
    const users = data.users;
    const Items = users.map(user => <Item key={user.id} content={user} />);
    return <ul>{Items}</ul>;
  }
}

export default ListItem;
