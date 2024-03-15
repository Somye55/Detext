import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

export const Transition = () => {
 const controls = useAnimation();
 const [isTypingDone, setIsTypingDone] = useState(false);

 useEffect(() => {
    // Simulate the typing effect completion
    setTimeout(() => {
      setIsTypingDone(true);
    }, 2000); // Adjust this time to match the typing effect duration
 }, []);

 useEffect(() => {
    if (isTypingDone) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1 },
      });
    }
 }, [controls, isTypingDone]);

 return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Start with opacity 0 and move up by 50px
      animate={controls}
    >
      {isTypingDone ? (
        <TypingText />
      ) : (
        <div>
          {/* Your page content goes here */}
          <h1>Welcome to the Text Utility Tools!</h1>
          {/* Add more content as needed */}
        </div>
      )}
    </motion.div>
 );
};

const TypingText = () => {
    const [text, setText] = useState('');
    const fullText = 'Text Utility Tools';
   
    useEffect(() => {
       let index = 0;
       const timer = setInterval(() => {
         setText((prevText) => prevText + fullText[index]);
         index++;
         if (index > fullText.length - 1) {
           clearInterval(timer);
         }
       }, 100); // Adjust the speed of typing here
   
       return () => clearInterval(timer);
    }, []);
   
    return <div>{text}</div>;
   };

