import { Link } from 'react-router-dom';
import './Header.css';  

export default function Header() {
  return (
    <header className="cabecalho">
      <div className="logotipo">Caladan EcoRefúgio</div>
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
