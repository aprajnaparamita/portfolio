import { useState, useEffect } from 'react';

interface TypedOutputProps {
  text: string;
  speed?: number;
}

const TypedOutput = ({ text, speed = 50 }: TypedOutputProps) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    setDisplayedText('');
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayedText((prev) => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed]);

  return <p>{displayedText}</p>;
};

export default TypedOutput;
