import '../styles/Footer.css'

export default function Footer() {
    return (
        <footer className="footer">
            <p className="footer-texto">&copy; 2025 MinhaEmpresa. Todos os direitos reservados.</p>
            <ul className="footer-links">
                <li><a href="#termos" className="footer-link">Termos de Uso</a></li>
                <li><a href="#politica" className="footer-link">Política de Privacidade</a></li>
                <li><a href="#contato" className="footer-link">Contato</a></li>
            </ul>
        </footer>
    )
}
