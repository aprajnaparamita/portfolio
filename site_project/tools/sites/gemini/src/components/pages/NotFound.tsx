import React from 'react';

interface NotFoundProps {
  command: string;
}

const NotFound: React.FC<NotFoundProps> = ({ command }) => {
  return <p>Command not found: {command}</p>;
};

export default NotFound;
