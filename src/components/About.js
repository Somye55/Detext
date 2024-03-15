import React from 'react'
import { motion } from "framer-motion";

export default function About(props) {
    // const [myStyle,darkStyle] = useState({backgroundColor: 'white',
    // color: 'black',
    // border: '1px solid white'});

    //   const dark = ()=>{
    //     if(myStyle.color==='white'){
    //     darkStyle({
    //       backgroundColor: 'white',
    //       color: 'black',
    //       border: '1px solid white',
    //       transition: 'all 1s'

    //     })
    //   }
    //   else{
    //     darkStyle({
    //       backgroundColor: 'black',
    //       color: 'white',
    //       border: '1px solid black',
    //       transition: 'all 1s'

    //   })
    // }}
   
   
    
    

  return (
    <motion.div
    className="container text-center"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    
    <div className="container my-4 ">
      <div className='accordion' id="accordionExample">
  <div className={`accordion-item bg-${props.mode}`} >
    <h2 className="accordion-header my-1" id="headingOne">
      <button className={`accordion-button bg-${props.mode} text-${props.mode==='light'?'dark':'light'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" >
      <strong>Time-Saving </strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show"  aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className={`accordion-body bg-${props.mode} text-${props.mode==='light'?'dark':'light'}`} >
        The best thing about these online editors is that they help users to produce an error-free result within a few seconds. Every file or document submission must have a time limit. And if you’re a student or a researcher, you have to submit essays and other academic documents on time.
      </div>
    </div>
  </div>
  <div className={`accordion-item  bg-${props.mode}`} >
    <h2 className="accordion-header" id="headingTwo">
      <button className={`accordion-button collapsed bg-${props.mode} text-${props.mode==='light'?'dark':'light'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" >
       <strong>No Installation Required</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className={`accordion-body bg-${props.mode} text-${props.mode==='light'?'dark':'light'}`}  >
      Installing a text editor in the system takes a lot of time and also requires a long installation process. But, these online editors don’t require any installation process and provides the best options to perform the editing tasks.
      </div>
    </div>
  </div>
  <div className={`accordion-item  bg-${props.mode}`} >
    <h2 className="accordion-header" id="headingThree">
      <button className={`accordion-button bg-${props.mode} text-${props.mode==='light'?'dark':'light'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" >
        <strong>Easily Accessible</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className={`accordion-body bg-${props.mode} text-${props.mode==='light'?'dark':'light'}`}>
      These editors are compatible with almost every smart device having an internet connection.The plain text editors don’t have any specific device-based user limitation.Users can easily edit every individual part of the document within no time.
      </div>
    </div>
  </div>
</div>
 </div>
 </motion.div>
  )

  }