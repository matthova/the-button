import React from 'react';

export default class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  createButton() {
    return <div>Time since last pushed: { this.props.params.lastPushed }</div>;
  }

  render() {
    const button = this.createButton();
    return <div>{button}</div>;
  }
}
