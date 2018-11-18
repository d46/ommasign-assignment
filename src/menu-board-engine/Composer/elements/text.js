import React, { Component } from 'react';

export default class extends Component {
  render() {
    const {
      data: {
        content,
        id,
        style = {}
      },
      refCall
    } = this.props;
    return (
      <div key={id} ref={el => refCall(el)} style={style}>
        {content}
      </div>
    )
  }
}
