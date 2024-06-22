import React from "react";
import { Link } from "react-router-dom";

const Topictwo = () => {
  return (
    <div>
      
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="styles.css" />
  <title>CYBER SECURITY</title>
  <header className="header99">
    <div className="container" >
      <h1>Welcome to Cyber Security Course</h1>
      <p>
        This course serves as an excellent primer to the many different domains
        of Cyber security.
      </p>
    </div>
  </header>
  <h1 className="h199" style={{color:'black'}}>Fundamentals of Cyber Security</h1>
  <div className="container99" style={{width:'800px'}}>
    <h2>1. CS Cyber Crime</h2>
    <p>
      Cybercrime encompasses identity theft, online predators, ransomware, and
      intellectual property theft, with its rise attributed to easy execution,
      low risk, high returns, and the anonymity facilitated by cryptocurrency.
    </p>
    <Link to="/cybercrime">
    <a className="read-content">
      Read Content
    </a>
    </Link>
    <a href="#" className="watch-video">
      Watch Video
    </a>
    <p className="time">Time Duration: 30 minutes</p>
  </div>
  <br />
  <div className="container99" style={{width:'800px'}}>
    <h2>2. CS Money</h2>
    <p>
      Common cyber threats include ransomware, cryptocurrency mining, and
      Business Email Compromise. Cybercriminals exploit IT assets, employing
      DDoS attacks, hacking for valuable information, and extortion schemes,
      highlighting the need for robust cybersecurity.
    </p>
    <Link to="/money">
    <a className="read-content">
      Read Content
    </a>
    </Link>
    <a className="watch-video">
      Watch Video
    </a>
    <p className="time">Time Duration: 45 minutes</p>
  </div>
  <br />
  <div className="container99" style={{width:'800px'}}>
    <h2>3. CS Dark Web</h2>
    <p>
      The Dark Web, accessible through the Tor Browser, is a network within the
      internet with .onion addresses, ensuring anonymity and encryption. While
      offering access to both regular and unique websites, it also hosts
      criminal activities, emphasizing the need for caution and appropriate
      software.
    </p>
    <Link to="/darkweb">
    <a className="read-content">
      Read Content
    </a>
    </Link>
    <a href="#" className="watch-video">
      Watch Video
    </a>
    <p className="time">Time Duration: 20 minutes</p>
  </div>
  <br />
  <div className="container99" style={{width:'800px'}}>
    <h2>4. CS Networking</h2>
    <p>
      Understanding computer communication is crucial for Cyber Security
      Professionals. The OSI model divides network communication into layers,
      with the top three in software and the bottom three in hardware.{" "}
    </p>
    <Link to="/networking">
    <a href="#" className="read-content">
      Read Content
    </a>
    </Link>
    <a href="#" className="watch-video">
      Watch Video
    </a>
    <p className="time">Time Duration: 20 minutes</p>
  </div>
  <br />
  <div className="container99" style={{width:'800px'}}>
    <h2>5. CS Networks Layers</h2>
    <p>This is some text inside the third container.</p>
    <Link to="/networklayer">
    <a href="#" className="read-content">
      Read Content
    </a>
    </Link>
    <a href="#" className="watch-video">
      Watch Video
    </a>
    <p className="time">Time Duration: 20 minutes</p>
  </div>
  <br />
  <div className="container99" style={{width:'800px'}}>
    <h2>6. CS Network Transport</h2>
    <p>This is some text inside the third container.</p>
    <Link to="/networktransport">
    <a href="#" className="read-content">
      Read Content
    </a>
    </Link>
    <a href="#" className="watch-video">
      Watch Video
    </a>
    <p className="time">Time Duration: 20 minutes</p>
  </div>
  <br />
  <div className="container99" style={{width:'800px'}}>
    <h2>7. CS Fire Walls</h2>
    <p>This is some text inside the third container.</p>
    <Link to="/firewall">
    <a className="read-content">
      Read Content
    </a>
    </Link>
    <a href="#" className="watch-video">
      Watch Video
    </a>
    <p className="time">Time Duration: 20 minutes</p>
  </div>
  <br />
  <div className="container99" style={{width:'800px'}}>
    <h2>8. CS Web Applications</h2>
    <p>This is some text inside the third container.</p>
    <Link to="/webapplication">
    <a href="#" className="read-content">
      Read Content
    </a>
    </Link>
    <a href="#" className="watch-video">
      Watch Video
    </a>
    <p className="time">Time Duration: 20 minutes</p>
  </div>
  <br />
  <div className="container99" style={{width:'800px'}}>
    <h2>9. CS Mapping Port Scanning</h2>
    <p>This is some text inside the third container.</p>
    <Link to="/mappingscanner">
    <a href="#" className="read-content">
      Read Content
    </a>
    </Link>
    <a href="#" className="watch-video">
      Watch Video
    </a>
    <p className="time">Time Duration: 20 minutes</p>
  </div>
  <br />
  <div className="container99" style={{width:'800px'}}>
    <h2>10. CS Network Attacks</h2>
    <p>This is some text inside the third container.</p>
    <Link to="/networkattack">
    <a href="#" className="read-content">
      Read Content
    </a>
    </Link>
    <a href="#" className="watch-video">
      Watch Video
    </a>
    <p className="time">Time Duration: 20 minutes</p>
  </div>
  <br />
    </div>
  );
};

export default Topictwo;