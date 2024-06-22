import React from 'react'
import { Link } from 'react-router-dom'

const Cybersecurity = () => {
  return (
    <div style={{backgroundColor:'#E7F6F6'}}>
       <div>
        <title>CYBER SECURITY</title>
        <link rel="stylesheet" href="/accordian/style.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@500&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="/serious.css" />
        <link rel="stylesheet" href="/nav.css" />
        <link rel="stylesheet" type="text/css" href="/course-grid.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8sh+WyWPzQlmNDQ99g2yUf1fuRZcp43KMIbCI" crossOrigin="anonymous" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        {/* <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossOrigin="anonymous" /> */}
        <link rel="stylesheet" href="course-page.css" />
        <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" />
        
        <div className="space">
        </div>
        <div className="top-container">
          <div className="course-info">
            <h2>CYBER SECURITY</h2>
            <p>
              Explore the intersection of cybersecurity and cutting-edge technologies to safeguard digital landscapes!
            </p>
            <h4>SKILLS YOU'LL GAIN:</h4>
            <p>🔒 Security Protocols: Master the fundamentals of cybersecurity protocols and best practices.</p>
            <p>🌐 Network Defense: Strengthen your skills in protecting and securing network infrastructures.</p>
            <p>🤖 Threat Intelligence: Analyze and understand cybersecurity threats using intelligence-driven strategies.</p>
            <p>💻 Ethical Hacking: Learn the art of ethical hacking to identify and rectify security vulnerabilities.</p>
          </div>
          <div className="course-img-div">
            <img className="course-img" src="./public/cyber.jpg" alt="Course Image" />
          </div>
        </div>
        <div className="start-test-div">
          <Link to="/test">
          <a className="button-64" role="button">
            <span className="text">
              START TEST
            </span>
          </a>
          </Link>
            
        </div>
        <div className="what-you-learn" style={{backgroundColor:'#4B0082'}}>
          <div className="left-learn">
            <h4 style={{color: 'white', fontWeight: 'bold', margin: '10px 0 12px 0'}}>What you'll Learn:</h4>
            <p style={{color: 'white'}}>✓ Cybersecurity Fundamentals</p>
            <p style={{color: 'white'}}>✓ Real-world Problem Solving in Cybersecurity</p>
            <p style={{color: 'white'}}>✓ Encryption Techniques</p>
            <p style={{color: 'white'}}>✓ Advanced Threat Detection and Response</p>
          </div>
          <div className="right-learn">
            <h4 style={{color: 'transparent'}}>.</h4>
            <p style={{color: 'white'}}>✓ Network Security Protocols</p>
            <p style={{color: 'white'}}>✓ Ethical Hacking Techniques</p>
            <p style={{color: 'white'}}>✓ Practical Security Implementation</p>
            <p style={{color: 'white'}}>✓ Ethical &amp; Legal Considerations</p>
          </div>
        </div>
        <div className="faq-container">
          <details className="Frequently-asked-questions">
            <summary>
              <span className="faq-title">
                <h3>Frequently asked Questions</h3>
              </span>
            </summary>
          </details>
          <details>
            <summary>
              <span className="faq-title">
                Is prior coding experience necessary for a cybersecurity course?
              </span>
              <svg xmlns="http://www.w3.org/2000/svg" className="expand-icon" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 6l6 6l-6 6" />
              </svg>
            </summary>
            <div className="faq-content">
              While coding skills can be beneficial, many cybersecurity courses cater to beginners and teach coding basics if required.
            </div>
          </details>
          <details>
            <summary>
              <span className="faq-title">
                What job roles can I pursue after completing a cybersecurity course?
              </span>
              <svg xmlns="http://www.w3.org/2000/svg" className="expand-icon" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 6l6 6l-6 6" />
              </svg>
            </summary>
            <div className="faq-content">
              Cybersecurity opens doors to roles like Ethical Hacker, Security Analyst, Incident Responder, and more. </div>
          </details>
          <details>
            <summary>
              <span className="faq-title">
                How long does it take to become proficient in cybersecurity?
              </span>
              <svg xmlns="http://www.w3.org/2000/svg" className="expand-icon" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 6l6 6l-6 6" />
              </svg>
            </summary>
            <div className="faq-content">
              The duration varies, but with dedication, one can acquire foundational skills in a few months and advance over time with practical experience.
            </div>
          </details>
          <details>
            <summary>
              <span className="faq-title">
                Do I get a certificate after completing a course?
              </span>
              <svg xmlns="http://www.w3.org/2000/svg" className="expand-icon" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 6l6 6l-6 6" />
              </svg>
            </summary>
            <div className="faq-content">Yes, after successfully finishing the quizzes within the course, you can download a
              certificate, proving all gained knowledge and skills.</div>
          </details>
          <details>
            <summary>
              <span className="faq-title">Are there any hidden fees within the course?</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="expand-icon" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 6l6 6l-6 6" />
              </svg>
            </summary>
            <div className="faq-content">Absolutely not! You will gain all benefits and features with the one-time payment,
              unlocking
              the course.</div>
          </details>
        </div>
      </div>
      <div>
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
            <br />
            <hr />
            <br />
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
      </div>
    </div>
  )
}

export default Cybersecurity;