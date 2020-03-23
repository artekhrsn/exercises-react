import React from "react";

const Cash = props => {
  const value = ((props.cash / props.ratio) * props.price).toFixed(2);
  return (
    <div>
      {props.title} {props.cash <= 0 ? "" : value}
    </div>
  );
};

class ExchangeCounter extends React.Component {
  state = {
    amount: "",
    product: "electricity"
  };
  static defaultProps = {
    currencies: [
      {
        id: 0,
        name: "złoty",
        ratio: 1,
        title: "wartosc w złotówkach: "
      },
      {
        id: 1,
        name: "dollar",
        ratio: 3.6,
        title: "wartosc w dolarach: "
      },
      { id: 2, name: "euro", ratio: 4.6, title: "wartosc w euro: " },
      { id: 3, name: "pound", ratio: 5.6, title: "wartosc w funtach: " }
    ],
    prices: {
      electricity: 0.51,
      gas: 4.76,
      oranges: 3.79
    }
  };
  handleChange = e => {
    this.setState({
      amount: e.target.value
    });
  };
  handleSelect = e => {
    this.setState({
      product: e.target.value,
      amount: ""
    });
  };
  insertSuffix = select => {
    if (select === "electricity") return <em>kWh</em>;
    if (select === "gas") return <em>litrów</em>;
    if (select === "oranges") return <em>kilogramów</em>;
    else return null;
  };
  selectPrice(select) {
    const price = this.props.prices[select];
    return price;
  }
  render() {
    const calculators = this.props.currencies.map(currency => (
      <Cash
        key={currency.id}
        ratio={currency.ratio}
        title={currency.title}
        cash={this.state.amount}
        price={this.selectPrice(this.state.product)}
      />
    ));
    return (
      <>
        <div className="app">
          <label>
            Wybierz produkt:
            <select value={this.state.product} onChange={this.handleSelect}>
              <option value="electricity">prąd</option>
              <option value="gas">benzyna</option>
              <option value="oranges">pomarancze</option>
            </select>
          </label>
          <br />
          <label>
            <input
              type="number"
              value={this.state.amount}
              onChange={this.handleChange}
            />
            {this.insertSuffix(this.state.product)}
          </label>
        </div>
        {calculators}
      </>
    );
  }
}

export default ExchangeCounter;
