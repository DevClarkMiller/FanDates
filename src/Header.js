import { useNavigate } from "react-router-dom"
import './header.css'

const Header = ({title})  =>{
    const navigate = useNavigate();

    return(
        <header>
            <h1>{title}</h1>
            <button onClick={()=>navigate('/')}><img src="https://seeklogo.com/images/F/fanshawe-college-logo-7837AF18B8-seeklogo.com.png" alt="Fanshawe logo home button" /></button>
            
        </header>
    )
}

export default Header