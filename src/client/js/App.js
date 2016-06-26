/* global button */
import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const childrenComponents = React.Children.map(this.props.children, child => {
      // mapping through all of the children components in order to inject Button app objects
      return React.cloneElement(child, button);
    });
    return (
      <div>
        {childrenComponents}
      </div>
    );
  }
}
