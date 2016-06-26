import React from 'react';

export default class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  createButton() {
    return <div>Button will go here</div>;
  }

  render() {
    const button = this.createButton();
    return <div>{button}</div>;
  }
}
