import React, { Fragment } from 'react'
import './styles/main.scss'
import Header from './components/layout/Header'
import Slider from './components/slider/SimpleSlider'
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
