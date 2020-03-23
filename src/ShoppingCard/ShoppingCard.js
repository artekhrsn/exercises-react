import React from "react";

class AppBasket extends React.Component {
  state = {
    availableProducts: 20,
    shoppingCart: 0
  };
  handleRemoveFromCart = () => {
    this.setState({
      shoppingCart: this.state.shoppingCart - 1
    });
  };
  handleAddToCart = () => {
    this.setState({
      shoppingCart: this.state.shoppingCart + 1
    });
  };
  handleBuy = () => {
    this.setState({
      availableProducts: this.state.availableProducts - 1,
      shoppingCart: 0
    });
  };

  render() {
    const { shoppingCart, availableProducts } = this.state;
    const style =
      shoppingCart === 0
        ? {
            opacity: 0.3
          }
        : {};
    return (
      <div>
        <button
          disabled={shoppingCart === 0 ? true : false}
          onClick={this.handleRemoveFromCart}
        >
          -
        </button>
        <span style={style}>{shoppingCart}</span>
        <button
          disabled={shoppingCart === availableProducts ? true : false}
          onClick={this.handleAddToCart}
        >
          +
        </button>
        {shoppingCart > 0 && <button onClick={this.handleBuy}>Kup</button>}
      </div>
    );
  }
}

export default AppBasket;
