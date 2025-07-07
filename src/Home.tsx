import { Link } from 'react-router-dom';
import './Home.css';
import Header from './Header.tsx';

function Home() {
  return (
    <>
      <Header />

      <main>
        <section className="secao-banner">
          <img
            src="https://img.freepik.com/foto-gratis/primer-plano-tortuga-marina-verde-nadando-agua-luces_181624-25236.jpg?semt=ais_hybrid&w=740"
            alt="Fundo"
          />
          <div className="sobreposicao-banner" />
          <div className="conteudo-banner">
            <h1>Bem-vindo ao Caladan EcoRefúgio</h1>
            <p>Protegendo vidas marinhas, um casco por vez. Conheça nosso trabalho e faça parte dessa jornada!</p>
            <Link to="/animaisresgatados" className="botao">
              Saiba Mais
            </Link>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 Caladan EcoRefúgio – Todos os direitos reservados.</p>
      </footer>
    </>
  );
}

export default Home;
