import { Link } from 'react-router-dom'
import './navbar.css'


export default function Navbar() {
    return(
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/aviacao">Avaliação</Link></li>
                <li><Link to="/profissionais">Profissionais</Link></li>
                <li><Link to="/contato">Contato</Link></li>
                <li><Link to="/sobre">Sobre</Link></li>
            </ul>
        </div>
    )
    
}