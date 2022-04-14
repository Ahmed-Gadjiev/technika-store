import React from 'react'
import Categories from '../components/Section-1/Categories/Categories'
import Slider from '../components/Section-1/Slider'

const Main: React.FunctionComponent = () => {
  return (
    <div>
      <div className="section-1">
        <Categories />
        <Slider />
      </div>
    </div>
  )
}

export default Main