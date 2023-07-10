import instance from './api';

async function SessioLogin(email, password) {
    try {
      const response = await instance.post('/backend/pacientelogin', {
        email: email,
        password: password
        });
      const dados = await response.data  
      return dados

    } catch (error) {
      console.log('ERRRO DE CHAMADA')
      console.error(error);
    }
}
async function SessioLoginProfessional(email, password) {
  try {
    const response = await instance.post('/backend/profissionallogin', {
      email: email,
      password: password
      });
    const dados = await response.data  
    return dados

  } catch (error) {
    console.log('ERRRO DE CHAMADA')
    console.error(error);
  }
}

export{
  SessioLogin,
  SessioLoginProfessional
}
