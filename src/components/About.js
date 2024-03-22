import React from 'react';
import { motion } from "framer-motion";

export default function About() {

  return (
    <motion.div
      className="container text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >

      <div className="container my-4">
        <p className="lead text-muted">
          I created Detext, a text utility website, driven by a desire to make text processing easier and faster for everyone. I started this project as a hobby in 2022, and since then, I have been adding new features and improving the user experience. I have also received positive feedback and suggestions from the users, which motivates me to keep working on this project.
        </p>
        <p className="text-muted">
          I hope that Text Utility Website can help you with your text processing needs and save you some time and effort. If you have any questions or comments, please feel free to contact me at <a href="mailto:somyeverma@gmail.com">somyeverma@gmail.com</a>. I would love to hear from you!
        </p>
      </div>
    </motion.div>
 );

}
