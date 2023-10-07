// app/javascript/components/Greeting.js
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGreeting } from '../redux/actions';

class Greeting extends Component {
  componentDidMount() {
    // Dispatch the fetchGreeting action when the component mounts
    this.props.fetchGreeting();
  }

  render() {
    return (
      <div>
        <h1>Greeting</h1>
        <p>{message}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  message: state.greeting,
});

export default connect(mapStateToProps, { fetchGreeting })(Greeting);