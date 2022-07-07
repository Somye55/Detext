import React from 'react'

export default function Home(props) {
  return (
    <div className='container my-3' style={{fontSize:'22px'}}>
<p className={`text-${props.mode==='dark'?'light':'dark'} `}> An online text editor is a web-based tool that helps several users to submit an error-free document within no time.
The main focus of an online editor is to edit the plain text in real-time by using some excellent editing features.
Most of the time, a file or document gets rejected if it has any grammatical problem.
Several students face these kinds of issues while submitting their assignments or other academic work to their teachers.
To deal with this, many businessmen and students widely used an online text editor to quickly edit documents in real-time.</p>
    </div>
  )
}
