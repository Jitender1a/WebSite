// Jade is working on this

import React, { Component } from 'react'

export default class Service extends Component {
  render() {
    return (
      <div>
          <div className='ServiceIntro'> We Do Development
              <p>Our diverse cross-funcational team has a set of skills that always fits your wants and needs. Weather it is creating quality code, a great looking design or reaching the limiations of online marketing.</p>
          </div>

            <br/>

          <div className='development'> Development
              <p>By using the latest technology we write smart code to develop the latest digital products.</p>
          </div>
          <ul className='devtTypes'>
            <li>E-commerce solutions (Shopify)</li>
            <li>CMS (WordPress, Shopfiy & Squarespace)</li>
            <li>Landing Pages</li>
            <li>Corporate/Institutional websites</li>
          </ul>

              <br/>

          <div className='Design'> Design
              <p>Digital design is like painting, except the paint never dries.</p>
          </div>
          <ul className='designTypes'>
            <li>User interface design(UI)</li>
            <li>User Experience design(UX)</li>
            <li>Web design</li>
            <li>Graphic design</li>
            <li>Photography</li>
          </ul>

            <br/>

          <div className='Strategy'> Strategy
            <p>In order for brands to truly engage with their audience you need the right approach to digital marketing.</p>
          </div>
          <ul className='startegyTypes'>
              <li>Social Media Management</li>
              <li>Online Campaigns</li>
              <li>Email Marketing</li>
          </ul>

            <br/>

          <div className='HowWeDo'> What we do
              <p>There is always an effective approach to every challenge we face ahead. We believe that establishing a close relationship with our clients from the get-go is the key to success. Our client is at the center of everything and we are constantly providing feedback, in order to better respond to future adversities.</p>
          </div>

          <div className='briefing'> 1. Initial Meeting
              <p>Every succesful project starts with a great idea</p>
          </div>

          <div className='research'>2. Research
              <p>dig deep, investigate and validate</p>
          </div>

          <div className='planning'>3. Planning
              <p>Strategize</p>
          </div>  

          <div className='design'>
              <p>We wow you starting from concept to creation</p>
          </div>

          <div className='Development'>4. Development
              <p>Spring cycles help us reach various devliverables</p>
          </div>

          <div className='Tests'> 5. Tests
              <p>Testing until perfection is reached</p>
          </div>

          <div className='monitoring'> 6. Monitoring
              <p>We monitor the website to minimize and uliminate any problems</p>
          </div>

          <div className='checkWork'>
            If you are ready to start a project, drop us a message below.
          </div>
      </div>
    )
  }
}
