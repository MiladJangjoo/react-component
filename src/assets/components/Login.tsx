import { FormEvent, useEffect, useRef} from 'react'
import {useNavigate} from 'react-router-dom'
import{ User } from '../components/types'


export default function Login() {
  const navigate = useNavigate()
  const usernamefield = useRef<HTMLInputElement>(null)
  const emailfield = useRef<HTMLInputElement>(null)
  const passwordfield = useRef<HTMLInputElement>(null)

  useEffect(()=>{
    if(localStorage.getItem('token')){navigate('/')}
  },[])

  function handellogindata(e: FormEvent<HTMLElement>){
    e.preventDefault()
    const logininfo : Partial<User> = {
        password: passwordfield.current!.value
    }
    if(usernamefield.current?.value){
        logininfo.username = usernamefield.current.value
    } else if(emailfield.current?.value){
      logininfo.email = emailfield.current.value
    }else{
      window.alert('please include username or email')
      return
    }
    clearform()
    loginuser(logininfo)
    navigate('/')
  }
  async function loginuser(logininfo: Partial<User>){
    const res = await fetch('https://snaptransportation.onrender.com/passengerlogin', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(logininfo)
    })
    if(res.ok){
        const data = await res.json()
        const accessToken = data.access_token
        localStorage.setItem('token',accessToken)
        navigate('/')
    }else window.alert('invalid username or password')
  }

  function clearform(){
    usernamefield.current!.value = ''
    emailfield.current!.value = ''
    passwordfield.current!.value = ''
  }
  return (
   <>
   <form onSubmit = {handellogindata}>
   <div className="login-container">
    <h3 className="h3-login">User Login</h3>
    <label htmlFor="username" className="username-login-label">Enter your username</label>
    <input type="text" className="username-login" name="username" placeholder="Username"ref={usernamefield}/>
    <label htmlFor="email" className="username-login-label">Enter Your Email</label>
    <input type="email" className="username-login" name="username" placeholder="email"ref={emailfield}/>
    <label htmlFor="username" className="username-login-label">Enter Your Password</label>
    <input type="password" className="username-login" name="username" placeholder="Password"ref={passwordfield} required/>
    <button type="submit" className="submit-button">Submit</button>
    <p className="sign-in-login">or signIn <a href="#">Here</a></p>
   </div>
   </form>
   
   
   
   </>
  )
}

