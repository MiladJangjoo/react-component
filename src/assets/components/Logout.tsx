import Spinner from 'react-bootstrap/Spinner'
import {useEffect } from 'react'
import{useNavigate} from 'react-router-dom'
export default function Logout() {
  const navigate = useNavigate()
  useEffect(()=>{
    localStorage.clear()
    navigate('/')
  },[])
  
  
    return <Spinner />
    
 
}
