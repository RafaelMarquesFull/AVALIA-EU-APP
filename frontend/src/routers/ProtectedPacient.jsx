import React, {useContext} from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContex } from '../features/contexts/routerContext';

function Protected({children}) {

  const { User, loading } = useContext(AuthContex);
  console.log(User)

  if(loading){
    return <div className="loading">Carregando... </div>;
  }

  if (!User) {
    return <Navigate to="/login" replace />;
  }
  
  return children;
}

export default Protected;
