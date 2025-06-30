import {Link} from 'react-router-dom'
import './Nav.css'

export default function Nav() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">MinhaLogo</div>
            <ul className="navbar-links">
                <li><Link to='/' >Home</Link></li>
                <li><Link to='/mudanome' >Muda Nome</Link></li>
                <li><Link to='/semaforo' >Semaforo</Link></li>
            </ul>
        </nav>
    )
}
