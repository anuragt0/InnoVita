import React from 'react'
import {LeftNav} from './LeftNav'
import RightBody from './RightBody'
import RightNav from './RightNav'
import {ChartComponent} from './LeftNav'
import App from './corecontainer/App'
import Footer from './footer/Footer'

import "./css/app.css"
const Report = () => {
  return (<>
   <div className="App">
    
      <LeftNav />
  <RightBody />
      
    
  </div>
  <ChartComponent />
<App/>
<Footer/>
  </>
  )
}

export default Report