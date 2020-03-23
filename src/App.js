import React from "react";

//4. aplikacja zliczania liczby klikniec
// class Counter extends React.Component {
//   state = {
//     count: 0,
//     result: 0
//   };
//   handleMathClick = (type, number) => {
//     if (type === "substraction") {
//       this.setState(prevState => ({
//         count: prevState.count + 1,
//         result: prevState.result - number
//       }));
//     } else if (type === "reset") {
//       this.setState(prevState => ({
//         count: prevState.count + 1,
//         result: 0
//       }));
//     } else if (type === "addition") {
//       this.setState(prevState => ({
//         count: prevState.count + 1,
//         result: prevState.result + number
//       }));
//     }
//   };

//   render() {
//     return (
//       <>
//         <MathButton
//           name="-10"
//           number="10"
//           type="substraction"
//           click={this.handleMathClick}
//         />
//         <MathButton
//           name="-1"
//           number="1"
//           type="substraction"
//           click={this.handleMathClick}
//         />
//         <MathButton name="reset" type="reset" click={this.handleMathClick} />
//         <MathButton
//           name="+1"
//           number="1"
//           type="addition"
//           click={this.handleMathClick}
//         />
//         <MathButton
//           name="+10"
//           number="10"
//           type="addition"
//           click={this.handleMathClick}
//         />
//         <ResultPanel count={this.state.count} result={this.state.result} />
//       </>
//     );
//   }
// }
// const MathButton = props => {
//   const number = parseInt(props.number);
//   return (
//     <button onClick={() => props.click(props.type, number)}>
//       {props.name}
//     </button>
//   );
// };
// const ResultPanel = props => {
//   return (
//     <>
//       <h1>
//         Liczba klikniec: {props.count}
//         {props.count > 10 ? <span>.Przeciazenie procesora!</span> : null}
//       </h1>
//       <h1>Wynik: {props.result}</h1>
//     </>
//   );
// };

//3. aplikacja przycisk pokaz/ukryj
// class Message extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       messageIsActive: false
//     };
//     this.handleMessageButton = this.handleMessageButton.bind(this);
//   }
//   handleMessageButton() {
//     this.setState(prevState => ({
//       messageIsActive: !prevState.messageIsActive
//     }));
//   }

//   render() {
//     console.log(this.state.messageIsActive);
//     const text = "jakis przykladowy tekst";
//     return (
//       <React.Fragment>
//         <button onClick={this.handleMessageButton}>
//           {this.state.messageIsActive ? "Ukryj" : "Pokaz"}
//         </button>
//         {/* {this.state.messageIsActive ? <p>{text}</p> : null} */}
//         <p>{this.state.messageIsActive && text}</p>
//       </React.Fragment>
//     );
//   }
// }

//2. aplikacja reset
// class App extends React.Component {
//   state = {
//     value: ""
//   };
//   handleInputChange = e => {
//     console.log(e.target.value);
//     this.setState({
//       value: e.target.value
//     });
//   };
//   handleResetClick = () => {
//     this.setState({
//       value: ""
//     });
//   };

//   render() {
//     return (
//       <React.Fragment>
//         <input
//           value={this.state.value}
//           placeholder="wpisz tekst.."
//           onChange={this.handleInputChange}
//           type="text"
//         />
//         <button onClick={this.handleResetClick}>Reset</button>
//         <h1 className="title">{this.state.value.toUpperCase()}</h1>
//       </React.Fragment>
//     );
//   }
// }

//1. aplikacja Addsign
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       text: ""
//     };
//   }

//   handleClick = () => {
//     const number = Math.floor(Math.random() * 10);
//     this.setState({
//       text: this.state.text + number

//     });
//   };
//   render() {
//     const btnName = "stwórz liczbe";
//     return (
//       <>
//         <button onClick={this.handleClick}>{btnName}</button>
//         <PanelResult text={this.state.text} />
//       </>
//     );
//   }
// }
// const PanelResult = props => {
//   return <h1>{props.text}</h1>;
// };

export default App;
