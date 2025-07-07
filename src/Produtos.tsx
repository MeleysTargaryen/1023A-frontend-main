import Header from './Header.tsx';
import './Produtos.css';

export default function Produtos() {
  return (
    <>
      <Header />
      <div className="produtos-container">
        <aside className="menu-lateral">
          <h2>Categorias</h2>
          <ul>
            <li><a href="#">Acessórios</a></li>
            <li><a href="#">Pelúcias</a></li>
            <li><a href="#">Produtos Gerais</a></li>
          </ul>
        </aside>

        <main className="conteudo-principal">
          <h1>Produtos</h1>
          <p>Selecione uma categoria para ver os produtos disponíveis.</p>
        </main>
      </div>
    </>
  )
}
