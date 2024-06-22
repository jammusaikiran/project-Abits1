import React from 'react';
import Carousel from './Carousel';
import CoursesContainerone from './Coursecontainerone';
import Scroll from './Scroll';
import Trendcourse from './Trendcourse';
import CloudComputing from './CloudComputing';
import Footer from './Footer';

const Clone = () => {
  return (
    <div style={{backgroundColor:'#E7F6F6'}}>
      <Scroll />
      <Carousel />
      <Trendcourse />
      <CoursesContainerone />
      <Footer/>
    </div>
  )
}

export default Clone;
