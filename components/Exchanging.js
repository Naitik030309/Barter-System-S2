import React from 'react';
import LottieView from 'lottie-react-native';

export default class ExchangingAnimation extends React.Component {
  render() {
    return (
      <LottieView
      source={require('../assets/54077-platform-exchange.json')}
      style={{width:"80%",marginTop:-30}}
      autoPlay loop />
    )
  }
}