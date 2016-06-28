import React from 'react';

import Button from './Button';

export default class ButtonContainer extends React.Component {
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

  createButtonContainer() {
    let time;
    try {
      time = parseInt(Number(this.state.lastPushed) / 1000, 10);
    } catch (ex) {
      time = `nope`;
    }
    return (
      <div className="button-container">
        <div>Time since last pushed: { time }</div>
        <br/>
        <Button/>
      </div>
    );
  }

  render() {
    const buttonContainer = this.createButtonContainer();
    return <div>{buttonContainer}</div>;
  }
}
