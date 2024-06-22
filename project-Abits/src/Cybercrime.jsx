import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CyberCrime = () => {
  const [fileContent, setFileContent] = useState('');
  const [loading, setLoading] = useState(true);

  const readFile = async () => {
    try {
      const response = await fetch('https://gist.githubusercontent.com/jammusaikiran/3d0a8e6585039b4c908b744bfaa26f51/raw/6fa7299840e9427e5a5697605aa55ca1d142de13/cybersecurity_crime.txt');
      const content = await response.text();
      setFileContent(content);
    } catch (error) {
      console.error('Error reading file:', error);
      toast.error("Unable To load The File!")
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    readFile();
  }, []);

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
      {loading && <div style={{ textAlign: 'center', marginBottom: '20px' }}>Loading Spinner...</div>}
      <h1 style={{ textAlign: 'center', marginBottom: '20px', color: '#333' }}>CYBER CRIME</h1>
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
    </div>
  );
};

export default CyberCrime;