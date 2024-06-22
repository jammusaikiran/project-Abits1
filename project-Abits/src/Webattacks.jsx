import React, { useState, useEffect } from 'react';

const TextFileViewer = () => {
  const [fileContent, setFileContent] = useState('');
  const [showLink, setShowLink] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);

  const readFile = async () => {
    try {
      const response = await fetch('https://gist.githubusercontent.com/jammusaikiran/110fae3039bef093caa633c71818c408/raw/a1639a91efd9b42bc58c1148518082608e6841d7/web_applications_attacks.txt');
      const content = await response.text();

      setFileContent(content);
      setStartTime(new Date().getTime());
    } catch (error) {
      console.error('Error reading file:', error);
    }
  };

  const toggleLinkVisibility = () => {
    setShowLink(!showLink);
  };

  useEffect(() => {
    readFile();
  }, []);

  useEffect(() => {
    if (startTime && showLink) {
      const endTime = new Date().getTime();
      const timeDiff = endTime - startTime;
      setElapsedTime(timeDiff);
    }
  }, [startTime, showLink]);

  const formatTime = (milliseconds) => {
    const seconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes} min ${remainingSeconds} sec`; // Enclose template string in backticks
  };

  const handleWatchVideo = () => {
    window.open('https://www.youtube.com/watch?v=38RZdFK7Prg', '_blank');
  };

  return (
    <div style={{
      maxWidth: '1200px',
      margin: 'auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f5f5f5',
      borderRadius: '5px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      boxSizing: 'border-box',
    }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px', color: '#333' }}>CYBER CRIME</h1>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <div style={{
          maxHeight: '400px',
          overflowY: 'auto',
          marginBottom: '20px',
          padding: '20px',
          border: '1px solid #ccc',
          borderRadius: '5px',
          backgroundColor: '#f9f9f9',
          width: '100%',
          boxSizing: 'border-box',
          fontSize: '16px',
          lineHeight: '1.6',
          whiteSpace: 'pre-wrap',
          fontFamily: 'monospace',
        }}>
          <p style={{ margin: '0', color: '#555', fontSize: '18px' }}>File Content:</p>
          <pre>{fileContent}</pre>
        </div>
        {fileContent && (
          <div style={{ textAlign: 'center'}}>
            <button
              onClick={toggleLinkVisibility}
              style={{
                backgroundColor: '#4CAF50',
                color: 'white',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                marginBottom: '20px',
              }}>
              Show Link
            </button>
            {showLink && (
              <div style={{ textAlign: 'left' }}>
                <p style={{ margin: '0', color: '#555', fontSize: '18px' }}>Link to file: </p>
                <a
                  href={`data:text/plain;charset=utf-8,${encodeURIComponent(fileContent)}`} // Correctly use backticks
                  download="file.txt"
                  style={{
                    textDecoration: 'none',
                    color: '#3498db',
                    fontSize: '20px',
                    fontWeight: 'bold',
                    display: 'block',
                    margin: '10px 0',
                  }}>
                  Download File
                </a>
                <p style={{ margin: '0', color: '#555', fontSize: '18px' }}>
                  Time taken to read: {formatTime(elapsedTime)}
                </p>
              </div>
            )}
          </div>
        )}
        <button
          onClick={handleWatchVideo}
          style={{
            backgroundColor: '#3498db',
            color: 'white',
            padding: '15px 30px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '18px',
          }}>
          Watch Video
        </button>
      </div>
    </div>
  );
};

export default TextFileViewer;
