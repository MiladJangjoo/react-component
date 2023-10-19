import { FormEvent, useEffect, useRef} from 'react'
import {useNavigate} from 'react-router-dom'
import{ User } from '../components/types'




export default function Register() {

  const navigate = useNavigate()

  const usernamefield = useRef<HTMLInputElement>(null)
  const emailfield = useRef<HTMLInputElement>(null)
  const passwordfield = useRef<HTMLInputElement>(null)
  const phonenumberfield = useRef<HTMLInputElement>(null)
  const firstnamefield = useRef<HTMLInputElement>(null)
  const lastnamefield = useRef<HTMLInputElement>(null)

  useEffect(()=>{
    if(localStorage.getItem('token')){navigate('/')}
  },[])
  
  async function handleRegisterdata(e: FormEvent<HTMLElement>){
        e.preventDefault()
      const user: User = {
        username: usernamefield.current!.value,
        email:emailfield.current!.value,
        password:passwordfield.current!.value,
        phone_number:phonenumberfield.current!.value,
        // first_name:firstnamefield.current.value,
        // last_name:lastnamefield.current.value
    }
    if(firstnamefield.current!.value) {
        user.first_name = firstnamefield.current?.value
    
    }
    if(lastnamefield.current!.value) {
        user.last_name = lastnamefield.current?.value
    
    }
    clearFormData()
    await registerUser(user)
  }

  async function registerUser(user: User){
    const res = await fetch('https://snaptransportation.onrender.com/passengerregister', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(user)
    })
    const data = await res.json()
        console.log(data)
    if (!res.ok){
        window.alert('username or email already exist')
        
    } else navigate('/passengerlogin')
    
  }
  function clearFormData(){
    usernamefield.current!.value = ''
    emailfield.current!.value = ''
    passwordfield.current!.value = ''
    firstnamefield.current!.value = ''
    lastnamefield.current!.value = ''
    phonenumberfield.current!.value = ''
  }
  
  
    return (
    <>
    <form onSubmit={handleRegisterdata}>
    <div className="login-container2">
     <h3 className="h3-login">Create User</h3>
     <label htmlFor="username" className="username-login-label">Enter your username</label>
     <input type="text" className="username-login" name="username" placeholder="Username " ref={usernamefield} required/>
     <label htmlFor="Email" className="username-login-label">Enter Your Email</label>
     <input type="email" className="username-login" name="username" placeholder="Email" ref={emailfield} required/>
     <label htmlFor="password" className="username-login-label">Enter Your Password</label>
     <input type="password" className="username-login" name="username" placeholder="Password" ref={passwordfield} required/>
     <label htmlFor="phonenumber" className="username-login-label">Enter Your Phone Number</label>
     <input type="number" className="username-login" name="username" placeholder="Phonenumber" ref={phonenumberfield} required/>
     <label htmlFor="firstname" className="username-login-label">Enter Your First Name</label>
     <input type="text" className="username-login" name="firstname" placeholder="Firstname" ref={firstnamefield}/>
     <label htmlFor="lastname" className="username-login-label">Enter Your Last Name</label>
     <input type="text" className="username-login" name="lastname" placeholder="Lastname" ref={lastnamefield}/>
     <button type="submit" className="submit-button">Submit</button>
     <p className="sign-in-login">or signIn <a href="#">Here</a></p>
   </div>
   </form>
   </>
  )
}
