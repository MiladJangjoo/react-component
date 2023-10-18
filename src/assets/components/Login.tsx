import { FormEvent, useRef} from 'react'
import {useNavigate} from 'react-router-dom'


export default function Login() {
  const navigate = useNavigate()
  const usernamefield = useRef<HTMLInputElement>(null)
  const emailfield = useRef<HTMLInputElement>(null)
  const passwordfield = useRef<HTMLInputElement>(null)
  function handellogindata(e: FormEvent<HTMLElement>){
    e.preventDefault()
    const logininfo : Partial<User> = {
        password: passwordfield.current!.value
    }
    if(usernamefield.current?.value){
        logininfo.username usernamefield.current,value
    } else if (passwordfield.current?.value){

    }
    loginuser()
  }
  async function loginuser(){
    const res = await fetch('')
    if(res.ok){
        const data = await res.json()
        console.log(data)
        navigate('/')
    }else window.alert('invalid username or password')
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

