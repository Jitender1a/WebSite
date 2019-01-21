import React, { Component } from 'react'
import PageHeader from './PageHeader'
import Quote from './Quote'

export default class Home extends Component {
  constructor(){
    super()
    this.state={
      mainPageName:'Home page',
      mainPageHeadline:'we\'re badass',
      mainPageText:'more about us shit',
      workPageName:'Work',
      workPageHeadline:'We do some sometimes',
      workPageText:'blah blah blah work work work',
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
<div>LANDING ANIMATION</div>
{/* Main */}
        <PageHeader
        pageName={this.state.mainPageName}
        pageHeadline= {this.state.mainPageHeadline}
        pageText= {this.state.mainPageText}
        />
        <div>Feel good stuff with big image</div>
        <Quote
        quote="a;klsdfl askd faksd asdf a dfoa df adfv asd asd"
        reference="Someone Smart"
        />
{/* Work */}
        <PageHeader
        pageName={this.state.workPageName}
        pageHeadline= {this.state.workPageHeadline}
        pageText= {this.state.workPageText}
        />
        {works}
      </div>
    )
  }
}
