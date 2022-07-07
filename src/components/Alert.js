import React from 'react'

export default function Alert(props) {
  const capitalize = ()=>{
    const lower = props.alert.type.toLowerCase()
    return lower.charAt(0).toUpperCase() + lower.slice(1)
  }
  const myStyle = {
    height: '50px'

  }
  
  return (
    <div style={myStyle}>
  { props.alert && <div className={`alert alert-${props.alert.type} d-flex align-items-center`}  role="alert" >
   <span><strong>{capitalize(props.alert.type)} !</strong> {props.alert.msg}.</span>
   </div>}</div>
  )
}

