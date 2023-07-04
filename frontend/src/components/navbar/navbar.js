import { Link } from 'react-router-dom'
import './navbar.css'


export default function Navbar() {
    return(
        <div>
            <ul className='container_menu'>
                <li className='menu_item'><Link to="/">Home</Link></li>
                <li className='menu_item'><Link to="/aviacao">Avaliação</Link></li>
                <li className='menu_item'><Link to="/profissionais">Profissionais</Link></li>
                <li className='menu_item'><Link to="/contato">Contato</Link></li>
                <li className='menu_item'><Link to="/sobre">Sobre</Link></li>
            </ul>
        </div>
    )
    
}