import React from 'react'
import Firstheader from './Firstheader/Firstheader'
import Secondheader from './Secondheader/Secondheader'
import Carousel from './Carousel/Carousel'
import Academics from './Academics_section/Academics'
import Campuslife from './Campuslife_section/Campuslife'
import PopularCourses from './PopularCourses_section/PopularCourses'

const App = () => {
  return (
    <>
      <Firstheader/>
      <Secondheader/>
      <Carousel/>
      <Academics/>
      <Campuslife/> 
      <PopularCourses/>
    </>
  )
}

export default App
