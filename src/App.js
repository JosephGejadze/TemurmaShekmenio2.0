import React from 'react';
import './App.css';

export class App1 extends React.Component {
  constructor(props){
    super(props);
    this.state = {value: 0};
    this.decrement=this.decrement.bind(this);
    this.increment=this.increment.bind(this);
  }

  decrement(){
    this.setState({value: this.state.value - 1});
  }
  increment(){
    this.setState({value: this.state.value + 1});
  }

  render(){
    return (
      <div className = "appDiv">
        <button className = "button decrement" onClick={this.decrement}>-1</button>
        <h1 className="value">{this.state.value}</h1>
        <button className = "button increment" onClick={this.increment}>+1</button>
      </div>
    );
  }
};


// 🔹 Call fetchData and if promise resolves, render it on the page.
// 🔹 Display loading text while promise is not fulfilled yet.
// 🔹 If promise is rejected, display custom text on page and a single button. 
// 🔹 Clicking that button should retry calling fetchData and display loading text too, 
// 🔹 until promise is fulfilled (either resolved or rejected).

const fetchData = () => {
  return new Promise((resolve, reject) => {
      const time = Math.random() * 1000 + 500;
      setTimeout(() => {
          if (Math.random() > 0.5) {
              const userId = Math.floor(Math.random() * 10000);
              resolve(`Hello user${userId}!`);
          } else {
              reject(new Error("random error"));
          }
      }, time);
  });
}

export class App2 extends React.Component{
  render(){
    let returnVal;
    fetchData().then((value)=>{returnVal = value}).catch((value)=>{returnVal=value});
    return <h1>{returnVal}Hi</h1>;
  }
}
