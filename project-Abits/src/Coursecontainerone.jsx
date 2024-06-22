import React from 'react';
import {Link} from "react-router-dom";


const CoursesContainerone = () => {
  const redirectToCourse = (courseUrl) => {
    // Open the link in a new tab
    window.open(courseUrl, '_blank');
  };


  return (
    <>
  <div className="container">
    <article className="card">
      <div className="background">
        <img src="generativeai.jpg" alt="Blog Preview Image" />
      </div>
      <div className="content">
        <div className="card-content">
          <h2>GENERATIVE AI</h2>
          <p>
          Generative AI, or Generative Artificial Intelligence, is an 
          AI field dedicated to creating systems that autonomously produce 
          novel content. Unlike traditional AI, which relies on explicit 
          programming, generative AI uses machine learning to teach machines 
          pattern recognition for content generation.
          </p>
        </div>
        <div className="blog-preview__bottom">
        <Link to="/cloudcomputing">
          <a
            className="go-to-article-button"
            target="_blank"
            title="New Blog"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-arrow-narrow-right"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 12l14 0" />
              <path d="M15 16l4 -4" />
              <path d="M15 8l4 4" />
            </svg>
          </a>
          </Link>
        </div>
      </div>
    </article>
  </div>
  <br />
  <br />
  <div className="container">
    <article className="card">
      <div className="background">
        <img src="cyber.jpg" alt="Blog Preview Image" />
      </div>
      <div className="content">
        <div className="card-content">
          <h2>CYBER SECURITY</h2>
          <p>
          Cyber Security is a specialized field in information technology and 
          computer science dedicated to safeguarding digital systems, networks, 
          and data from unauthorized access, attacks, and damage. It employs 
          advanced tools, threat intelligence, and risk management to proactively 
          defend against cyber threats.
          </p>
        </div>
        <div className="blog-preview__bottom">
          < Link to="/cloudcomputing">
          <a
            className="go-to-article-button"
            target="_blank"
            title="New Blog"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-arrow-narrow-right"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 12l14 0" />
              <path d="M15 16l4 -4" />
              <path d="M15 8l4 4" />
            </svg>
          </a>
          </Link>
        </div>
      </div>
    </article>
  </div>
  <br />
  <br />
  <div className="container">
    <article className="card">
      <div className="background">
        <img src="cloud.jpg" alt="Blog Preview Image" />
      </div>
      <div className="content">
        <div className="card-content">
          <h2>CLOUD COMPUTING</h2>
          <p>
            Cloud Computing is a paradigm in computing that involves the
            delivery of various services, including storage, processing power,
            and applications, over the internet. It provides on-demand access to
            a shared pool of configurable computing resources, allowing
            organizations and individuals to scale their IT infrastructure.
          </p>
        </div>
        <div className="blog-preview__bottom">
          <a
            className="go-to-article-button"
            target="_blank"
            title="New Blog"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-arrow-narrow-right"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 12l14 0" />
              <path d="M15 16l4 -4" />
              <path d="M15 8l4 4" />
            </svg>
          </a>
        </div>
      </div>
    </article>
  </div>
</>

  );
};

export default CoursesContainerone;