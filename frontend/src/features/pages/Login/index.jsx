
import './login.css'
import { useNavigate } from "react-router-dom";


export default function Login() {
    const navigate = useNavigate();

    return(
        <div className=''>
            {/* <img src=""/> */}
            <form>
                <input placeholder='E-mail' className="username"/>
                <input placeholder='Senha' className="password"/>
            </form>
            <form method='post'>
                <button onClick={()=> navigate("/pacient-inicio")} >Login</button>
            </form>
        </div>
    )
}