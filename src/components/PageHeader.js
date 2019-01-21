import React, { Component } from 'react'

export default class PageHeader extends Component {
  render() {
    return (
      <div>
          <div>{this.props.pageName}</div>
          <h1>{this.props.pageName}</h1>
          <div>{this.props.pageHeadline}</div>
          <div>{this.props.pageText}</div>





      </div>
    )
  }
}
