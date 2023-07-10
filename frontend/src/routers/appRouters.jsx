// AppRouters.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../features/pages/Home/index';
import Login from '../features/pages/Login/index';
import Register from '../features/pages/Register/index';
import PageBase from '../features/PageBase/index';
import Page404 from '../features/pages/notFound/Page404';
import PacientHome from '../features/users/pacient/pages/Home';

import {AuthProvider} from '../features/contexts/routerContext';
import ProtectedPacient from '../routers/ProtectedPacient'
import MinhaConta from '../features/users/pacient/pages/myAccount/myAccount';
import ProfissonaisPacient from '../features/users/pacient/pages/Profissionais/profissionais';
import AgendarConsulta from '../features/users/pacient/pages/AgendarConsulta/agendarConsulta';
function AppRouters() {


  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<PageBase />}>
            <Route index element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route path="/registre-se" element={<Register />} />
            <Route path="*" element={<Page404 />} />
          </Route>

          <Route path="/pacient" element={<ProtectedPacient><PacientHome/></ProtectedPacient>} />
          <Route path="/profissionais" element={<ProtectedPacient> <MinhaConta/> </ProtectedPacient>}/>
          <Route path="/profissionais" element={<ProtectedPacient> <ProfissonaisPacient/> </ProtectedPacient>}/>
          <Route path="/agendar" element={<ProtectedPacient><AgendarConsulta/></ProtectedPacient>}/>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default AppRouters;
