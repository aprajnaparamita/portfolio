import React from 'react';
import Mailto from '../Mailto';

const Contact: React.FC = () => {
  return (
    <div>
      <h2>Contact & Social Links</h2>
      <ul>
        <li>GitHub: <a href="https://github.com/aprajnaparamita" target="_blank" rel="noopener noreferrer">aprajnaparamita</a></li>
        <li>LinkedIn: <a href="https://www.linkedin.com/in/janet-jeffus-b0709720/" target="_blank" rel="noopener noreferrer">Janet Jeffus</a></li>
        <li>Email: <Mailto email="darajeffus@gmail.com" /></li>
        <li>Tiktok: @darabuilds</li>
        <li>Instagram: @darabuilds</li>
        <li>LINE: @jjeffus</li>
        <li>WhatsApp: +660818387716</li>
      </ul>
    </div>
  );
};

export default Contact;
