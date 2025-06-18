import './Nav.css'

export default function Nav() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">MinhaLogo</div>
            <ul className="navbar-links">
                <li><a href="#home" className="navbar-link">Home</a></li>
                <li><a href="#sobre" className="navbar-link">Sobre</a></li>
                <li><a href="#servicos" className="navbar-link">Serviços</a></li>
                <li><a href="#contato" className="navbar-link">Contato</a></li>
            </ul>
        </nav>
    )
}
