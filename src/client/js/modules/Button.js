import React from 'react';

export default class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick() {
    fetch('/v1/button', {
      method: 'POST',
    });
  }

  render() {
    return <div onClick={this.handleClick} className="the-button"></div>
  }
}
