import React, { Component } from 'react';

export default class extends Component {
  render() {
    const {
      data: {
        component: RefComponent
      },
    } = this.props;
    return (
      <RefComponent
        {...this.props}
      />
    )
  }
}
