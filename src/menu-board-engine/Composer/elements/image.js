import React, { Component } from 'react';

export default class extends Component {
  render() {
    const {
      data: {
        url,
        id,
        style = {},
      },
      refCall
    } = this.props;
    return (
      <img alt={id} key={id} ref={el => refCall(el)} style={style} src={url} />
    )
  }
}
