import React, { Fragment } from 'react'
import './styles/main.scss'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css"
import Header from './components/layout/Header'
import SimpleSlider from './components/slider/SimpleSlider'

function App() {
  return (
    <Fragment>
      <div>
        <Header />
        <SimpleSlider />
      </div>
    </Fragment>
  )
}

export default App
