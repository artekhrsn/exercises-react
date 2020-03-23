import React from "react";
import HeaderMenu from "./HeaderMenu";
import ListItemsMenu from "./ListItemsMenu";
import ItemMenu from "./ItemMenu";

class AppMenu extends React.Component {
  state = {
    items: [
      { id: 1, name: "herbata", active: true },
      { id: 2, name: "ziemniaki", active: false },
      { id: 3, name: "kasza", active: false },
      { id: 4, name: "zupa wodna", active: false },
      { id: 5, name: "wrzatek", active: false },
      { id: 6, name: "chleb", active: true }
    ]
  };
  handleChangeStatus = id => {
    const items = this.state.items.map(item => {
      if (id === item.id) {
        item.active = !item.active;
      }
      return item;
    });
    this.setState({
      items: items
    });
  };
  render() {
    return (
      <React.Fragment>
        <HeaderMenu items={this.state.items} />
        <ListItemsMenu
          items={this.state.items}
          changeStatus={this.handleChangeStatus}
        />
        <ItemMenu />
      </React.Fragment>
    );
  }
}

export default AppMenu;
