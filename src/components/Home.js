import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";
import '../assets/home.css';
import main from '../assets/main.png';
import combined from '../assets/combined.png';
import buttons from '../assets/buttons.png';

export default function Home(props) {
  let text = "text tools reimagined.";
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDisplayText(text.substring(0, index + 1));
      setIndex(index + 1);
      if (index === text.length - 1) {
        clearInterval(timer);
      }
    }, 200);

    return () => clearInterval(timer);
  }, [text, index]);


  return (
    <motion.div
      className={`container-fluid text-center mt-5 ${props.mode === 'light' ? 'bg-white' : 'bg-dark text-white'}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className={`container my-5 text-muted ${props.mode === 'light' ? 'bg-white ' : 'bg-dark text-white'}`} >
        <h1 className="typing-effect">{displayText}</h1>
      </div>

      <div className="container py-6 mb-5">
        <div className="row flex-lg-row-reverse align-items-center g-5">
          <div className="col-10 mx-auto col-sm-8 col-lg-6 ">
            <img src={main} class="d-block mx-lg-auto img-fluid" alt="" loading="lazy" />
          </div>
          <div class="col-lg-6">
            <div className="lc-block mb-3">
              <div editable="rich">
                <h2 class="fw-bold display-5 text-justify">Streamline Your Text: Powerful Formatting with a User-Friendly Interface</h2>
              </div>
            </div>
            <div className="lc-block mb-5">
              <div editable="rich">
                <p class="lead">Experience the power of text formatting in a straightforward and clean environment with our user-friendly interface. Our comprehensive text formatting toolset is designed to simplify complex text manipulation tasks, making it easy to convert text to uppercase, lowercase, and remove whitespaces, symbols, and extra spaces. With a focus on ease of use, our tool ensures that you can quickly apply a variety of formatting options to your text, all while maintaining a clean and intuitive user interface. Whether you're working on a document, creating a presentation, or simply organizing your notes, our text formatting tools in a simple and clean UI ensure that your text is not only well-formatted but also ready for any purpose.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container py-6 mb-5">
        <div class="row align-items-center g-5">
          <div class="col-lg-6">
            <img src={combined} class="d-block mx-lg-auto img-fluid" alt="" loading="lazy" />
          </div>
          <div class="col-lg-6">
            <div class="lc-block mb-3">
              <div editable="rich">
                <h2 class="fw-bold display-5">Switch Between Day and Night: Your Personalized Light/Dark Mode</h2>
              </div>
            </div>
            <div class="lc-block mb-3">
              <div editable="rich">
                <p class="lead">Elevate your text utility experience with our innovative light/dark mode feature. Designed with your comfort in mind, this feature allows you to switch between a light and dark theme with just a click. Whether you're working late into the night or prefer to start your day with a fresh look, our light/dark mode ensures that your text utility website is always tailored to your preferences. This feature not only enhances your visual experience but also reduces eye strain, making your text processing tasks more enjoyable and productive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-6 mb-3"> {/* Add mb-3 to create space below */}
        <div className="row flex-lg-row-reverse align-items-center g-5">
          <div className="col-10 mx-auto col-sm-8 col-lg-6 ">
            <img src={buttons} class="d-block mx-lg-auto img-fluid" alt="" loading="lazy" />
          </div>
          <div class="col-lg-6">
            <div className="lc-block mb-3">
              <div editable="rich">
                <h2 class="fw-bold display-5">Extract Essential Data: Advanced Data Fetching Options</h2>
              </div>
            </div>
            <div className="lc-block mb-3">
              <div editable="rich">
                <p class="lead">Unlock the full potential of your text utility website with our advanced data fetching options. From filtering emails and phone numbers to identifying Twitter tags, URLs, and more, our toolset is designed to extract essential data from your text with precision. Whether you're cleaning up a dataset, analyzing social media content, or preparing data for analysis, our data fetching options provide a comprehensive solution. With the ability to filter and extract specific types of data, you can streamline your workflow, enhance data quality, and gain valuable insights from your text.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container py-6 mb-5">
        <div class="row align-items-center g-5">
          <div class="col-lg-6">
            <img src={main} class="d-block mx-lg-auto img-fluid border border-2" alt="" loading="lazy" style={{ filter: 'blur(10px' }} data-bs-toggle="tooltip" data-bs-placement="top" title="coming soon, stay tuned!" />
          </div>
          <div class="col-lg-6">
            <div class="lc-block mb-3">
              <div editable="rich">
                <h2 class="fw-bold display-5">Embrace the Future: AI-Powered Text Utilities</h2>
              </div>
            </div>
            <div class="lc-block mb-3">
              <div editable="rich">
                <p class="lead">Prepare for a revolution in text utilities with the power of artificial intelligence (AI). Our platform will leverage cutting-edge AI technologies to offer a range of advanced features that will go beyond traditional text processing. From intelligent text analysis and data extraction to automated text formatting and personalized content recommendations, AI will be at the forefront of our services. This integration will provide you with a more intuitive, efficient, and personalized text utility experience. Whether you're looking to analyze text for insights, extract specific data, or simply format your text with ease, our AI-driven tools will be designed to anticipate your needs and deliver solutions that are tailored to your specific requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


    </motion.div >
  )
}
