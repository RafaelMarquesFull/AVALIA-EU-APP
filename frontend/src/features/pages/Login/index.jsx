import React, { useRef, useContext } from 'react';
import './login.css';
// import VerifyRouter from '../../contexts/authContex';
import {AuthContex} from '../../contexts/routerContext';

export default function Login() {
  const {login} = useContext(AuthContex);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  // const [showVerifyRouter, setShowVerifyRouter] = useState(false);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const email = await emailRef.current.value;
    const password = await passwordRef.current.value;
    login(email, password);

    // setShowVerifyRouter(true);
  };

  return (
    <div className="form_login">
      <form>
        <input
          placeholder="E-mail"
          className="username"
          ref={emailRef}
        />
        <input
          placeholder="Senha"
          className="password"
          ref={passwordRef}
        />
      </form>
      <form>
        <button onClick={handleFormSubmit}>Login</button>
      </form>
      {/* {showVerifyRouter && <VerifyRouter Email={emailRef.current.value} Password={passwordRef.current.value} />} Renderiza o componente VerifyRouter quando showVerifyRouter é true */}
    </div>
  );
}
