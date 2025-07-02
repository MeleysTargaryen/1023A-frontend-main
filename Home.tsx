import './Home.css';

function Home() {
    return (
        <>
            <header className="cabecalho">
                <div className="logotipo"> Caladan EcoRefúgio </div>
                <nav className="navegacao">
                    <ul className="links-navegacao">
                        <li><a href="/">Espécies</a></li>
                        <li><a href="/sobre">Produtos</a></li>
                        <li><a href="/visitas">Animais resgatados</a></li>
                        <li><a href="/contato">Contato</a></li>
                    </ul>
                </nav>
            </header>

            <main>
                <section className="secao-banner">
                    <img
                        src="https://img.freepik.com/foto-gratis/primer-plano-tortuga-marina-verde-nadando-agua-luces_181624-25236.jpg?semt=ais_hybrid&w=740"
                        alt="Fundo"
                        className="imagem-fundo-banner"
                    />
                    <div className="sobreposicao-banner" />
                    <div className="conteudo-banner">
                        <h1>Bem-vindo ao Caladan EcoRefúgio</h1>
                        <p>Protegendo vidas marinhas, um casco por vez. Conheça nosso trabalho e faça parte dessa jornada!</p>
                        <a href="/sobre" className="botao-principal">
                            Saiba Mais
                        </a>
                    </div>
                </section>
            </main>

            <footer className="rodape">
                <p>&copy; 2025 Caladan EcoRefúgio – Todos os direitos reservados.</p>
            </footer>
        </>
    )
}

export default Home;
