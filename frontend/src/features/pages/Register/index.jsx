import { useNavigate } from "react-router-dom";

export default function Register() {
    const navigate = useNavigate();
    return(
        <div>
            <form className="form_register">
                <ul className="list_inputs">
                    <li><input placeholder='Nome' className="input"/></li>
                    <li><input placeholder='Sobrenome' className="input"/></li>
                    <li><input placeholder='CPF' className="input"/></li>
                    <li><input placeholder='Endereço' className="input"/></li>
                    <li><input placeholder='Cidade' className="input"/></li>
                    <li><input placeholder='CEP' className="input"/></li>
                    <li><input placeholder='Telefone' className="input"/></li>
                    <li><input placeholder='Whatsapp' className="input"/></li>
                    <li><input placeholder='E-mail' className="input"/></li>
                    <li><input placeholder='Senha' className="input"/></li>
                    <li><input placeholder='Senha' className="input"/></li>
                    <li><input placeholder='Repita sua senha' className="input"/></li>
                </ul>
            </form>
            <form method='post'>
                <button onClick={()=> navigate("/pacient-inicio")} >Login</button>
            </form>
        </div>
    )
}