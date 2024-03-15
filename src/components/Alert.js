import React from 'react'
import { motion } from "framer-motion";

export default function Alert(props) {
  const capitalize = ()=>{
    const lower = props.alert.type.toLowerCase()
    return lower.charAt(0).toUpperCase() + lower.slice(1)
  }
  const myStyle = {
    height: '50px'

  }
  
  return (
    <motion.div
    className="container text-center"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1 }}
  >
    <div style={myStyle}>
  { props.alert && <div className={`alert alert-${props.alert.type} d-flex align-items-center`}  role="alert" >
   <span><strong>{capitalize(props.alert.type)} !</strong> {props.alert.msg}.</span>
   </div>}</div>
  </motion.div>
  )
}

