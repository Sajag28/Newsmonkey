import React, { Component } from 'react';
import Radar from './Radar.gif';

export class Spinner extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={Radar} alt="loading..." />
      </div>
    )
  }
}

export default Spinner
