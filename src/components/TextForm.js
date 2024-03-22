import React, { useState } from 'react'
import { motion } from "framer-motion";
import ButtonGroup from './ButtonGroup';

export default function TextForm(props) {
  const [formText, newFormText] = useState('');
  const [filteredData, setFilteredData] = useState('');

  const updateFormText = (state) => {
    newFormText(state);
  }
  const handleText = (event) => {
    const inputText = event.target.value;
    if (inputText.length <= 6000) {
      newFormText(inputText);
    }
  }
  const handleFilteredData = (event) => {
    setFilteredData(event.target.value);
  }

  return (
    <motion.div
      className={`container-fluid text-center p-5 ${props.mode === 'light' ? 'bg-white' : 'bg-dark text-white'}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div >
        <div className={`container-fluid my-3 text-${props.text}`}>
          <div className="mb-3">
            <label htmlFor="textArea" className="form-label text-muted fs-4 fw-bold p-2">Unleash your creativity with these outstanding text editing tools! They’re nothing short of amazing.</label>
            <textarea className={`form-control text-secondary ${props.mode === 'light' ? 'bg-white border-primary' : 'bg-dark text-white border-primary'}`} id="exampleFormControlTextarea1" onChange={handleText} value={formText} placeholder="Enter text here!" rows="8"></textarea>
            <div className="d-flex justify-content-between mb-3">
            <p className='mb-2 mx-1'>{Text.length} characters and {formText.split(' ').filter((char) => { return char.length !== 0 }).length} words</p>
            <p className='mb-2 mx-1'>{formText.length} / 6000 characters</p>
          </div>
          </div>
        </div>
      </div>
      <ButtonGroup textData = {formText} triggerTextUpdate = {updateFormText} triggerFilteredData = {setFilteredData}/>
      <textarea className={`form-control text-secondary ${props.mode === 'light' ? 'bg-white' : 'bg-dark text-white'}`} onChange={handleFilteredData} value={filteredData}  rows="4" disabled style={{resize:'none'}}></textarea>
    </motion.div>
  )
}
