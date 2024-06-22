import React from "react";
import { useLocation, Link } from "react-router-dom";
import TopicContainer from "./TopicContainer";
import TopicOne from "./Topicone";
import TopicTwo from "./Topictwo";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Welcome = () => {
  const location = useLocation();
  const { score } = location.state || { score: 0 };

  let topicComponent;

  if (score <= 3) {
    topicComponent = <TopicOne />;
  } else if (score <= 7) {
    topicComponent = <TopicTwo />;
  } else {
    topicComponent = <TopicContainer />;
  }

  return (
    <div className="welcome-body" style={{backgroundColor:'rgb(81, 102, 119)'}}>
      <div className="container">
        <h1 className="welcome-heading">YOUR PROGRESS:</h1>
        <p>Your score: {score} out of 10</p>
        <div className="topic-container">{topicComponent}</div>
      </div>
    </div>
  );
};

export default Welcome;
