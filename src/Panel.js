import React, { Component } from 'react';

class Panel extends Component {
  constructor() {
    super();
    this.state = {
      value: 1,
    };
  }

  render() {
    return (
      <div>
        <h1>{ this.props.value }</h1>
        <div onClick={ () => this.setState({ value: this.state.value + 1 }) } >{ this.state.value }</div>
      </div>
    );
  }
}

export default Panel;
