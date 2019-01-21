import React, { Component } from 'react'

export default class Quote extends Component {
  render() {
    return (
      <div>
{/* Display important text */}
<div class="">
<p class="">
{this.props.quote}
</p>
<p class="">
{this.props.reference}
</p>
</div>





      </div>
    )
  }
}
