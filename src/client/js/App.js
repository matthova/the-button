/* global button, io */
import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lastPushed: props.params.lastPushed,
    };
    try {
      this.socket = io();
      this.socket.on('timeUpdated', (data) => {
        this.setState({
          lastPushed: data,
        });
      });
    } catch (ex) {
      // Not possible on server side
    }
  }

  render() {
    const childrenComponents = React.Children.map(this.props.children, child => {
      // mapping through all of the children components in order to inject Button app objects
      return React.cloneElement(child, this.state);
    });
    return (
      <div>
        {childrenComponents}
      </div>
    );
  }
}
