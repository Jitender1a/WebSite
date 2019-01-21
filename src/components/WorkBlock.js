import React, { Component } from 'react'

export default class WorkBlock extends Component {
  render() {
    return (
      <div>

        {/* background image alter ddisplay on hover */}
        <div class="">
                
            {/* Work title move right on hover */}
            <h2>{this.props.title}</h2>

            {/* Details (show on hover) */}
            <p>{this.props.details}</p>

            {/* button link to Full details page */}
            <button href=""></button>

            {/* foreground image */}
            <img src=""/>

        </div>

      </div>
    )
  }
}
