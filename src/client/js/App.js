/* global clock */
import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const childrenComponents = React.Children.map(this.props.children, child => {
      // mapping through all of the children components in order to inject Clock app objects
      // return React.cloneElement(child, this.props.params.hydraPrint);
      return React.cloneElement(child, clock);
    });
    return (
      <div>
        {childrenComponents}
      </div>
    );
  }
}