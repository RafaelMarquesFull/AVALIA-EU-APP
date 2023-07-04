
import './login.css'

export default function Login() {


    return(
        <div className=''>
            {/* <img src=""/> */}
            <form>
                <input placeholder='E-mail' className="username"/>
                <input placeholder='Senha' className="password"/>
            </form>
            <form method='post'></form>
                <button>Login</button>
        </div>
    )
}