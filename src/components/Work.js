import React, { Component } from 'react'
import PageHeader from "./PageHeader"

export default class Work extends Component {
  constructor(){
  super()
    this.state={
      pageName:"Work",
      pageHeadline: "We do great work",
      pageText: "if you don't believe us fuck you",
      work:[
        {
          title: 'Custom ecommerc',
          details: 'lorem ipsum asdkfasd fas df asdf a sdf afd sa'
        },
        {
          title: 'Sopify Apps',
          details: 'lorem ipsum asdkfasd fas df asdf a sdf afd sa'

        },
        {
          title: 'Chat',
          details: 'lorem ipsum asdkfasd fas df asdf a sdf afd sa'

        },
        {
          title: 'Video player',
          details: 'lorem ipsum asdkfasd fas df asdf a sdf afd sa'

        }
      ]
    }
}
  render() {
    const works = this.state.work.map( product => {
      
      return <div>
      <h2>{product.title}</h2>
      <p>{product.details}</p>
      </div>
    })
    return (
      <div>
        {/* bring in pageheader */}
      <PageHeader
        pageName={this.state.pageName}
        pageHeadline= {this.state.pageHeadline}
        pageText= {this.state.pageText}
        // page.title = {this.state.title}
        // page.details = {this.state.details}
        />

        {/* map over work bringing in json data* stored on state*/}

{works}



      </div>
    )
  }
}
