/** @format */
import { Component } from "react";
import "../components/countries.scss";

class ExampleClass extends Component {
  constructor() {
    super();

    this.state = {
      count: 0,
    };

    this.handlePlus = this.plusCount.bind(this);
    this.handleMinus = this.minusCount.bind(this);
  }

  plusCount() {
    this.setState((prev) => ({
      count: prev.count + 1,
    }));
  }

  minusCount() {
    this.setState((prev) => ({
      count: prev.count - 1,
    }));
  }

  render() {
    return (
      <div className='container'>
        {this.state.count}
        <div className='btns'>
          <button onClick={this.handlePlus}>Plus</button>
          <button onClick={this.handleMinus}>Minus</button>
        </div>
      </div>
    );
  }
}

export default ExampleClass;
