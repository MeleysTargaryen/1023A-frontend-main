import Header from "./Header";
import "./Especies.css";

function Especies() {
  return (
    <>
       <Header />
      <div className="pagina-especies">
        <main className="conteudo-principal">
          <h1>Espécies Marinhas</h1>

          <section className="secao-especie">
            <h2>Golfinhos</h2>
            <p>
              Os golfinhos são mamíferos marinhos conhecidos por sua inteligência, comportamento social complexo e habilidades acrobáticas. 
              Vivem em grupos chamados de cardumes ou bandos, cooperando para caçar e se proteger. São encontrados em todos os oceanos do mundo.
            </p>
          </section>

          <section className="secao-especie">
            <h2>Tartarugas Marinhas</h2>
            <p>
              Tartarugas marinhas são répteis antigos que viajam milhares de quilômetros entre áreas de alimentação e locais de desova.
              Estão ameaçadas pela poluição, pesca predatória e destruição de ninhos nas praias. A preservação dessas espécies é fundamental para manter o equilíbrio dos ecossistemas marinhos.
            </p>
          </section>

          <section className="secao-especie">
            <h2>Tubarões</h2>
            <p>
              Tubarões são predadores importantes para a saúde dos oceanos. Embora sejam temidos, a maioria das espécies não representa perigo para humanos. 
              A pesca excessiva e o comércio de barbatanas ameaçam muitas populações de tubarões, prejudicando todo o ambiente marinho.
            </p>
          </section>

          <section className="secao-especie">
            <h2>Corais</h2>
            <p>
              Corais são animais coloniais que formam recifes, oferecendo abrigo e alimento para inúmeras espécies. 
              Eles são altamente sensíveis a mudanças na temperatura da água, acidificação dos oceanos e poluição. 
              A conservação dos recifes é vital para a biodiversidade marinha.
            </p>
          </section>
        </main>
      </div>
    </>
  );
}

export default Especies;
