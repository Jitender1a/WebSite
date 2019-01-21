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
          backgroundImage:'',
          title: 'Custom ecommerc',
          details: 'lorem ipsum asdkfasd fas df asdf a sdf afd sa',
          primaryImage:'',
          link:''
        },
        {
          backgroundImage:'',
          title: 'Sopify Apps',
          details: 'lorem ipsum asdkfasd fas df asdf a sdf afd sa',
          primaryImage:'',
          link:''

        },
        {backgroundImage:'',
          title: 'Chat',
          details: 'lorem ipsum asdkfasd fas df asdf a sdf afd sa',
          primaryImage:'',
          link:''

        },
        {
          backgroundImage:'',
          title: 'Video player',
          details: 'lorem ipsum asdkfasd fas df asdf a sdf afd sa',
          primaryImage:'',
          link:''

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
        />
        {/* map over work bringing in json data* stored on state*/}

        {works}



      </div>
    )
  }
}
