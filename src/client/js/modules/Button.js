import React from 'react';

export default class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (process.env.PORT === undefined) {
      setInterval(() => {
        try {
          const newNumber = this.state.lastPushed + 1;
          this.setState({
            lastPushed: newNumber,
          });
          console.log('new number', newNumber);
        } catch (ex) {
          console.log('wtf', ex);
        }
      }, 1000);
    }
  }
  componentWillUpdate() {
    console.log('sweet props', this.props);
    this.setState({
      lastPushed: this.props.lastPushed,
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
    console.log('time to re-render')
    const button = this.createButton();
    return <div>{button}</div>;
  }
}
