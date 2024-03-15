import React from 'react'
import { motion } from "framer-motion";

export default function Home(props) {
  return (
    <motion.div
    className={`container-fluid text-center ${props.mode === 'light' ? 'bg-white' : 'bg-dark text-white'}`}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1 }}
  >
<div className={`container my-3 ${props.mode === 'light' ? 'bg-white' : 'bg-dark text-white'}`} >
  <h1 className="display-4 mb-4">Text Utility Website</h1>
  <p className="lead mb-4">A Solution for Your Text Processing Needs</p>
  <hr />
  <section className="mb-5 ">
    <h2 className="h3 mb-3">Features</h2>
    <ul className={`list-group ${props.mode === 'light' ? 'bg-white' : 'bg-dark text-white'} `}>
      <li className={`list-group-item ${props.mode === 'light' ? 'bg-white' : 'bg-dark text-white'} `} >Information extraction: Extract useful information from your text, such as email addresses, phone numbers, URLs, dates, numbers, and more.</li>
      <li className={`list-group-item ${props.mode === 'light' ? 'bg-white' : 'bg-dark text-white'}`} >Text editing: Edit your text by removing extra spaces, changing the case, finding and replacing words, sorting lines, removing duplicates, and more.</li>
      <li className={`list-group-item ${props.mode === 'light' ? 'bg-white' : 'bg-dark text-white'}`}>Text analysis: Analyze your text by counting words, characters, sentences, paragraphs, and more. You can also check the readability score, sentiment score, and keyword density of your text.<img width="20" height="20" style={{paddingBottom:'3px'}} src="https://img.icons8.com/color/48/coming-soon.png" alt="coming-soon" title='this feature is expected to be released in the future.'/></li>
      <li className={`list-group-item ${props.mode === 'light' ? 'bg-white' : 'bg-dark text-white'}`} >Text generation: Generate new text based on your input text, such as summaries, paraphrases, headlines, slogans, and more.  <img width="20" height="20" style={{paddingBottom:'3px'}} src="https://img.icons8.com/color/48/coming-soon.png" alt="coming-soon" title='this feature is expected to be released in the future.'/></li>
    </ul>
  </section>
  <section className="mb-5" style={{color:`${props.text}`}}>
    <h2 className="h3 mb-3">About Us</h2>
    <p>
      Text Utility Website was created by a team of developers who wanted to make text processing easier and faster for everyone. We started this project as a hobby in   2022, and since then we have been adding new features and improving the user experience. We have also received positive feedback and suggestions from our users, which motivates us to keep working on this project.
    </p>
    <p>
      We hope that Text Utility Website can help you with your text processing needs and save you some time and effort. You can access Text Utility Website for free at https://textutility.website. If you have any questions or comments, please feel free to contact us at support@textutility.website. We would love to hear from you!
    </p>
  </section>
</div>
    </motion.div>
  )
}
