import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { typeWriter } from '@/lib/index';

/**
 * Props for the TypingText component.
 */
interface TypingTextProps {
  text: string;
  speed?: number;
  onComplete?: () => void;
  showCursor?: boolean;
}

/**
 * Animated typing text component that simulates terminal character-by-character output.
 * Features a blinking cursor and uses the typeWriter utility for timing.
 */
export function TypingText({ 
  text, 
  speed = 30, 
  onComplete, 
  showCursor = true 
}: TypingTextProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
    setIsTyping(true);
    setDisplayedText("");

    const startTypingSequence = async () => {
      try {
        await typeWriter(text, (currentValue) => {
          if (mountedRef.current) {
            setDisplayedText(currentValue);
          }
        }, speed);
        
        if (mountedRef.current) {
          setIsTyping(false);
          if (onComplete) {
            onComplete();
          }
        }
      } catch (error) {
        console.error("Terminal sequence interrupted:", error);
      }
    };

    startTypingSequence();

    return () => {
      mountedRef.current = false;
    };
  }, [text, speed, onComplete]);

  return (
    <span className="inline-flex items-center font-mono">
      <span className="whitespace-pre-wrap">{displayedText}</span>
      {showCursor && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ 
            duration: 0.6, 
            repeat: Infinity, 
            repeatType: "reverse",
            ease: "steps(2)" 
          }}
          className="ml-1 inline-block w-[0.6em] h-[1.1em] bg-primary align-middle shadow-[0_0_8px_var(--primary)]"
          aria-hidden="true"
        />
      )}
    </span>
  );
}
