import React,{useState} from 'react'


export default function TextForm(props) {
  const [Text,NewText] = useState('')
  const toUpCase = ()=>{
      NewText(Text.toUpperCase())
      props.ShowAlert('Converted to Uppercase','success')
   }
  const toLoCase = ()=>{
      NewText(Text.toLowerCase())
      props.ShowAlert('Converted to Lower Case','success')
   }
   const Onichan=(event)=>{
       NewText(event.target.value)
   }
   const Clear=()=>{
     NewText('')  
     props.ShowAlert('Text Cleared','success')   
   }
   const Space=()=>{
     NewText(Text.split(/[ ]+/).join(' '))  
     props.ShowAlert('Extra spaces removed','success')   
   }
   
   const Bold=()=>{
    const regex = /[A-Z/0-9/a-z/]/g
    const strin = Text.match(regex).join('')
    NewText(strin)
    props.ShowAlert('Removed symbols and whitespaces','success')

   }
 
  return (
    <div>
        <div className={`container my-3 bg-${props.mode} text-${props.mode==='light'?'dark':'light'}`}>
            <h1 className='text-primary font-family-Helvetica Neue'>TEXT UTILITY TOOLS</h1>
<div className="mb-3">
<label htmlFor="textArea" className="form-label">Try these amazing text editing tools!</label>
<textarea className="form-control text-secondary" id="exampleFormControlTextarea1" onChange={Onichan} value={Text} placeholder="Enter text here!" rows="8"></textarea>
<button onClick={toUpCase} disabled={Text.length===0} className="btn btn-success my-2">Convert to Upper Case</button>
<button onClick={toLoCase} disabled={Text.length===0} className="btn btn-success my-2 mx-2">Convert to Lower Case</button>
<button onClick={Clear} disabled={Text.length===0} className="btn btn-success my-2 mx-2">Reset</button>
<button onClick={Bold} disabled={Text.length===0} className="btn btn-success my-2 mx-2">Remove whitespaces and symbols</button>
<button onClick={Space} disabled={Text.length===0} className="btn btn-success my-2 mx-2">Remove extra whitespaces</button>
<p className='mb-2 mx-1'>{Text.length} characters and {Text.split(' ').filter((char)=>{return char.length!==0}).length} words</p>
</div>




      
    </div>
  

    </div>
  )
}

