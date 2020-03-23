import React from "react";

const ValidationMessage = props => {
  return <p>{props.txt}</p>;
};
const OrderForm = props => {
  const { submit, isConfirmed, change } = props;
  return (
    <form onSubmit={submit}>
      <input type="checkbox" id="age" onChange={change} checked={isConfirmed} />
      <label htmlFor="age">Mam conajmniej 16 lat</label>
      <br />
      <button type="submit">Kup bilet!</button>
    </form>
  );
};

class TicketShop extends React.Component {
  state = {
    isConfirmed: false,
    isFormSubmitted: false
  };
  handleCheckboxChange = () => {
    this.setState({
      isConfirmed: !this.state.isConfirmed,
      isFormSubmitted: false
    });
  };
  handleFormSubmit = e => {
    e.preventDefault();
    if (!this.state.isFormSubmitted) {
      this.setState({
        isFormSubmitted: true
      });
    }
  };
  displayMessage = () => {
    if (this.state.isFormSubmitted) {
      if (this.state.isConfirmed) {
        return <ValidationMessage txt="Mozesz obejrzec film.Zapraszamy!" />;
      } else {
        return (
          <ValidationMessage txt="Nie mozesz obejrzec filmu, jesli masz ponizej 16 lat!" />
        );
      }
    } else {
      return null;
    }
  };

  render() {
    return (
      <>
        <h1>Kup bilet na horror roku!</h1>
        <OrderForm
          change={this.handleCheckboxChange}
          submit={this.handleFormSubmit}
          checked={this.isConfirmed}
        />

        {this.displayMessage()}
      </>
    );
  }
}
export default TicketShop;
