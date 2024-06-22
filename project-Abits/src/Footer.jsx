import React from 'react'

const Footer = () => {
  return (
    <div style={{backgroundColor:'white'}}>
      <>
  {/* Site footer */}
  <footer className="site-footer">
    <div className="container">
      <div className="row">
        <div className="about">
          <h6>About</h6>
          <p className="text-justify">
            Welcome to ABITS, where we revolutionize learning through
            personalized, AI-driven education. In a world of rapid technological
            change, we recognize the diverse levels of understanding and
            learning paces among individuals. Our platform is designed to
            address this challenge by dynamically creating courses in real-time,
            tailored to each user's unique understanding and learning capacity.
            Say goodbye to one-size-fits-all approaches and embrace an
            efficient, productive, and personalized learning experience that
            optimizes both time and knowledge acquisition. Join us on a journey
            where education meets innovation, and every learner's path is
            uniquely crafted for success.
          </p>
        </div>
        <div className="categories">
          <h6>Categories</h6>
          <ul className="footer-links">
            <li>
              <a href="#">Cloud Computing</a>
            </li>
            <li>
              <a href="#">Generative AI</a>
            </li>
            <li>
              <a href="#">Cyber Security</a>
            </li>
          </ul>
        </div>
        <div className="quicklinks">
          <h6>Quick Links</h6>
          <ul className="footer-links">
            <li>
              <a href="http://scanfcode.com/about/">About Us</a>
            </li>
            <li>
              <a href="http://scanfcode.com/contact/">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
      <hr />
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-sm-6 col-xs-12">
          {/* <p class="copyright-text">Copyright &copy; 2017 All Rights Reserved by 
 <a href="#">ABITS</a>.
    </p> */}
        </div>
        <div className="col-md-4 col-sm-6 col-xs-12">
          <ul className="social-icons">
            <li>
              <a className="facebook" href="#">
                <i className="fa fa-facebook" />
              </a>
            </li>
            <li>
              <a className="twitter" href="#">
                <i className="fa fa-twitter" />
              </a>
            </li>
            <li>
              <a className="dribbble" href="#">
                <i className="fa fa-dribbble" />
              </a>
            </li>
            <li>
              <a className="linkedin" href="#">
                <i className="fa fa-linkedin" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</>

    </div>
  )
}

export default Footer
