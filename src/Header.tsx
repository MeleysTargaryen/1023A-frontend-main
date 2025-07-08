import { Link } from 'react-router-dom';
import './Header.css';  

export default function Header() {
  return (
    <header className="cabecalho">
      <div className="logotipo"><img src="https://images.icon-icons.com/1921/PNG/96/c_122067.png" alt="logo"/><Link to="/">Caladan EcoRefúgio</Link></div>
      <nav className="navegacao">
        <ul className="links-navegacao">
          <li><Link to="/especies">Espécies</Link></li>
          <li><Link to="/produtos">Produtos</Link></li>
          <li><Link to="/animaisresgatados">Animais resgatados</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
    </header>
  );
}
