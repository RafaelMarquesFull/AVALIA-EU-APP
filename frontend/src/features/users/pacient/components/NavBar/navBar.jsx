import { Link } from "react-router-dom";

const NavBarPacient =  () =>{
    return(
        <div>
            <ul>
                <li><Link to="/minha-conta">Minha conta</Link></li>
                <li>Profissionais</li>
                <li>Agendar Consulta</li>
            </ul>
        </div>
    )
}
export default NavBarPacient;