import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {SessioLogin, SessioLoginProfessional} from '../../services/useService';
import instance from '../../services/api';

const AuthContex = createContext();

const AuthProvider = ({children})=>{
  const [user ,setUser] = useState(null);
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate();

  useEffect(()=>{
    const recoveredUser = localStorage.getItem('user')
    console.log(recoveredUser);

    if(recoveredUser){
        setUser(JSON.parse(recoveredUser))
    }

    setLoading(false);

  },[]);

  const login = async (email, password) => {

    let response;
    if(!response){
        response = await SessioLogin(email, password);
        
    }else if(response.menssage === 'Credenciais invalidas'){
        response = await SessioLoginProfessional(email, password);
    }
    

    if(response.type === 'pacient'){
        console.log(response)
        const user = response;
        // const user = {user: true, type: 'pacient', token:"qdlajsfiu349198934883ysdjfkasmvnsufyds7eu9weur" }
        localStorage.setItem('user', JSON.stringify(user));
        instance.defaults.headers.Authorization = `Bearer ${user.token}`
        console.log("login",email, password);
        setUser(user.user)
        navigate("/pacient");

    }else if( response.type === 'profissional'){
        console.log(response)
        const user = response;
        localStorage.setItem('user', JSON.stringify(user));
        instance.defaults.headers.Authorization = `Bearer ${user.token}`
        console.log("login",email, password);
        setUser(user.user)
        navigate("/profissional");
    }
        
    
  };

  const logout = () =>{
    setUser(null);
    localStorage.removeItem('user');
    navigate("/login");

  };
  return(
    <AuthContex.Provider 
    value={{User:!!user,user ,loading ,login, logout}}>
    {children}    
    </AuthContex.Provider>
  )
}
export {AuthContex, AuthProvider}