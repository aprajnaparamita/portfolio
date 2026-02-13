import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

const UsefulSites: React.FC = () => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    fetch('/website_index.md')
      .then((response) => response.text())
      .then((text) => setMarkdown(text));
  }, []);

  return (
    <div>
      <h2>Useful Sites</h2>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
};

export default UsefulSites;
