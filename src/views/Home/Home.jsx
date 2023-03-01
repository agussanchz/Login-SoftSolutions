import React from 'react'
import Intro from '../../components/Intro/Intro'
import Login from '../../components/Login/Login'

export default function Home() {

  const [intro, setIntro] = React.useState(true)

  setTimeout(() => {
    setIntro(false)
  }, 3400)

  return (
    <div className='Home'>   
        {intro ? (
          <Intro/> 
        ) 
        : (
          <Login/>
        )}
    </div>
  )
}