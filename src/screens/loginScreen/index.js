import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './_index.scss'
import YoutubeLogo from './../../assets/images/logo192.png'
import { login } from '../../redux/actions/auth.action'
import { useHistory } from 'react-router-dom'

const LoginScreen = () => {
  const dispatch = useDispatch()

  const accessToken = useSelector((state) => state.auth.accessToken)

  const handleLogin = () => {
    dispatch(login())
  }

  const history = useHistory()

  useEffect(() => {
    if (accessToken) {
      history.push('/')
    }
  }, [accessToken, history])

  return (
    <div className='login'>
      <div className='login_container'>
        <img src={YoutubeLogo} alt='' />
        <button onClick={handleLogin}>Login with google</button>
        <p>This project is made using Youtube Data Api</p>
      </div>
    </div>
  )
}

export default LoginScreen
