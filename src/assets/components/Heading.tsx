import {NavLink} from 'react-router-dom'
export default function Heading(): JSX.Element {


    return(
        <>
        <header>
        <nav className ='nav'>
            <ul className="nav-ul">           
                <li className="margin-nav"><a href="#">Become Our Partner</a></li>
                <li className="margin-nav"><a href="#">About Us</a></li>
                <li className="margin-nav"><a href="#">Contact Us</a></li> 
                <li className="login"><NavLink to="/login" className="aa">Login</NavLink></li>
                <li className="sign-up"><NavLink to="/register" className="aa">Signup</NavLink></li>
            </ul>
        </nav>
    </header>
        
        
        </>


    )

}