import Header from './Header.tsx';
import MenuTopo from './MenuTopo.tsx';
import './Produtos.css';

export default function Produtos() {
  return (
    <>
      <Header />

      <div className="pagina-produtos">
        <main className="conteudo-principal">
          <MenuTopo />

          <h1>Produtos</h1>
          <div className="grid-produtos">
            <div className="card-produto">
              <img
                src="https://apaixonadosporpelucia.cdn.magazord.com.br/img/2019/11/produto/2026/br417cz.jpg?ims=800x800"
                alt="Golfinho"
              />
              <div className="info">
                <h2>Pelúcia Golfinho</h2>
                <p className="descricao">Pelúcia de golfinho 90cm de algodão</p>
                <p className="preco">R$144.99</p>
              </div>
            </div>

            <div className="card-produto">
              <img
                src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSPz6Z7HoMVFam1UuoitFOngby0DG4N5MwFbPycI111LV3WR2toPVlWLYkUS27cNnQI2EnDc124hrRTraIKeb4Y4qaO9XKw93J3rMFEz18"
                alt="Colar fundo do mar"
              />
              <div className="info">
                <h2>Colar fundo do mar</h2>
                <p className="descricao">Colar fundo do mar</p>
                <p className="preco">R$150</p>
              </div>
            </div>
            <div className="card-produto">
              <img
                src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSuqVDIrvDjKhPxi011lE-NkT9gqyALbMMMO9LMP2z8MWYo55uHe9Nah3S4aYo_pTFzoIqBKfxLYcUP4BH9VwBP7iWaaTrriHm6uPhBhzo"
                alt="Colar"
              />
              <div className="info">
                <h2>Colar Estrela do mar</h2>
                <p className="descricao">Colar de estrela com conchas</p>
                <p className="preco">R$50</p>
              </div>
            </div>
            <div className="card-produto">
              <img
                src="https://apaixonadosporpelucia.cdn.magazord.com.br/img/2019/09/produto/1891/img-3192.jpg?ims=800x800"
                alt="Tubarão"
              />
              <div className="info">
                <h2>Pelúcia Tubarão branco</h2>
                <p className="descricao">Pelúcia de Tubarão Branco 90cm de algodão</p>
                <p className="preco">R$150</p>
              </div>
            </div>
            <div className="card-produto">
              <img
                src="https://img.ltwebstatic.com/images3_spmp/2024/06/07/31/1717734554a3d17fd0e6d1735dfb3a0a801cafec47_thumbnail_384x.webp"
                alt="Pulseira "
              />
              <div className="info">
                <h2>Bracelete pin</h2>
                <p className="descricao">Bracelete com pingentes</p>
                <p className="preco">R$20</p>
              </div>
            </div>
            <div className="card-produto">
              <img
                src="https://img.ltwebstatic.com/images3_spmp/2024/06/14/96/17183676360b184f9c2b04f19b14d3e06c2d743f42_thumbnail_405x.webp"
                alt="Acessorio"
              />
              <div className="info">
                <h2>Gargantilha Marfin</h2>
                <p className="descricao">Gargantilha com berlocs com o tema fundo do mar</p>
                <p className="preco">R$50</p>
              </div>
            </div>
            <div className="card-produto">
              <img
                src="https://http2.mlstatic.com/D_NQ_NP_637239-MLU73206981987_122023-O.webp"
                alt="Pelucia"
              />
              <div className="info">
                <h2>Pelúcia Tartaruga</h2>
                <p className="descricao">Pelucia fofa tarataruga 50% algodão 80cm</p>
                <p className="preco">R$250</p>
              </div>
            </div>
            <div className="card-produto">
              <img
                src="https://img.ltwebstatic.com/v4/j/spmp/2025/05/26/63/17482635931cd4cc13006c12e5497012cabbb6b0f1_wk_1748347590_thumbnail_560x.webp"
                alt="Vestuario"
              />
              <div className="info">
                <h2>Camiseta </h2>
                <p className="descricao">Camiseta fofa  100% algodão </p>
                <p className="preco">R$50</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}