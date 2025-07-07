import {Link} from 'react-router-dom'
import '../styles/Nav.css'

export default function Nav() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">MinhaLogo</div>
            <ul className="navbar-links">
                <li><Link to='/' >Home</Link></li>
                <li><Link to='/mudanome' >Muda Nome</Link></li>
                <li><Link to='/semaforo' >Semaforo</Link></li>
                <li><Link to='/pai' >Papai</Link></li>
            </ul>
        </nav>
    )
}
