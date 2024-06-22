import React from "react";
import './App.css';
import './index.css';
import Carousel from './Carousel';
import CoursesContainer from './Coursecontainer';
import Nav from './Nav';
import Scroll from './Scroll';
import Trendcourse from './Trendcourse';
import { Route, Routes } from "react-router-dom";
import Signup from "./Signup";
import Home from "./Home";
import Welcome from "./Welcome";
import CloudComputing from "./CloudComputing";
import Quiz from "./Quiz";
import TextFileViewer from "./TextFileViewer";
import TopicContainer from "./TopicContainer";
import CyberCrime from "./Cybercrime";
import Darkweb from "./DarkWeb";
import Firewall from "./Firewall";
import IncResponse from "./IncResponse";
import MappingSortScanning from "./MappingSortScanning";
import Money from "./Money";
import Networking from "./Networking";
import NetworkLayer from "./NetworkLayer";
import NetworkTransport from "./NetworkTransport";
import WebApplications from "./WebApplications";
import NetworksAttacks from "./NetworksAttacks";
import Webattacks from "./Webattacks";
import WifiAttacks from "./WifiAttacks";
import PenetratingTest from "./PenetratingTest";
import Passwords from "./Passwords";
import SecurityOperations from "./SecurityOperations";
import TopicOne from "./Topicone";
import TopicTwo from "./Topictwo";
import Clone from "./Clone";
import Display from "./Display";


const App = () => {
  return (
    <div className="App">
        <Nav/>
      <Routes>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/welcome" element={<Welcome/>}/>
        <Route path="/welcome/:score" element={<Welcome />} />
        <Route path="/cloudcomputing" element={<CloudComputing/>}/>
        <Route path="/textfileviewer" element={<Darkweb/>}/>
        <Route path="/test" element={<Quiz/>}/>
        <Route path="/clone" element={<Clone/>}/>
        <Route
          path="/topics/:score"
          element={
            <TopicContainer>
              <Route path="/" element={<TopicOne />} />
              <Route path="/topic-two" element={<TopicTwo />} />
              <Route path="/topics" element={<TopicContainer/>}/>
              {/* Add more routes for other topics if needed */}
            </TopicContainer>
          }
        />
  
        <Route path="/cybercrime" element={<CyberCrime/>}/>
        <Route path="/darkweb" element={<Darkweb/>}/>
        <Route path="/firewall" element={<Firewall/>}/>
        <Route path="/incresponse" element={<IncResponse/>}/>
        <Route path="/mappingscanner" element={<MappingSortScanning/>}/>
        <Route path="/money" element={<Money/>}/>
        <Route path="/networking" element={<Networking/>}/>
        <Route path="/networklayer" element={<NetworkLayer/>}/>
        <Route path="/networktransport" element={<NetworkTransport/>}/>
        <Route path="/webapplication" element={<WebApplications/>}/>
        <Route path="/networkattack" element={<NetworksAttacks/>}/>
        <Route path="/webattack" element={<Webattacks/>}/>
        <Route path="/wifiattack" element={<WifiAttacks/>}/>
        <Route path="/penetratingtest" element={<PenetratingTest/>}/>
        <Route path="/password" element={<Passwords/>}/>
        <Route path="/securityoperations" element={<SecurityOperations/>}/>
        <Route path="/display" element={<Display/>}/>
       
      </Routes>

    </div>
  );
};

export default App;