import React from 'react';

export default class Clock extends React.Component {
  constructor(props) {
    console.log('clock props', props);
    super(props);
  }

  createClock() {
    return <div>Clock</div>;
  }

  render() {
    const clock = this.createClock();
    return <div>{clock}</div>;
  }
}
