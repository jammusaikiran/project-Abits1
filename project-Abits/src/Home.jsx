import React from 'react';
import Carousel from './Carousel';
import CoursesContainer from './Coursecontainer';
import Scroll from './Scroll';
import Trendcourse from './Trendcourse';
import CloudComputing from './CloudComputing';
import Footer from './Footer';

const Home = () => {
  return (
    <div >
      <Scroll />
      <Carousel />
      <Trendcourse />
      <CoursesContainer />
      <Footer/>
    </div>
  )
}

export default Home;
