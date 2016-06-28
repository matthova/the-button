import React from 'react';

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lastPushed: props.lastPushed,
    };
  }

  componentDidMount() {
    if (process.env.PORT === undefined) {
      setInterval(() => {
        try {
          const newNumber = this.state.lastPushed + 1000;
          this.setState({
            lastPushed: newNumber,
          });
        } catch (ex) {
          console.log('Time update failed', ex);
        }
      }, 1000);
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      lastPushed: nextProps.lastPushed,
    });
  }

  createButton() {
    let time;
    try {
      time = parseInt(Number(this.state.lastPushed) / 1000, 10);
    } catch (ex) {
      time = `nope`;
    }
    return <div>Time since last pushed: { time }</div>;
  }

  render() {
    const button = this.createButton();
    return <div>{button}</div>;
  }
}
