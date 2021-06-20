import React from 'react'
import './_index.scss'
import YoutubeLogo from './../../assets/images/logo192.png'

const LoginScreen = () => {
  return (
    <div className='login'>
      <div className='login_container'>
        <img src={YoutubeLogo} alt='' />
        <button>Login with google</button>
        <p>This project is made using Youtube Data Api</p>
      </div>
    </div>
  )
}

export default LoginScreen
