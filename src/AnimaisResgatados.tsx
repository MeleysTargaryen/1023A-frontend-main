import Header from './Header.tsx';
import './AnimaisResgatados.css';

function AnimaisResgatados() {
  return (
    <>
      <Header />

      <div className="pagina-animais">
        <main className="conteudo-principal">


          <h1>Animais Resgatados</h1>
          <div className="grid-animais">
            <div className="card-animal">
              <img
                src="https://cdn.oantagonista.com/uploads/2024/02/132674993_dolphin2.jpg.webp"
                alt="Luna"
              />
              <div className="info">
                <h2> Golfinho Luna</h2>
                <p className="descricao">
                  Resgatada em uma prai após encalhar e engolir uma rede de pesca.
                </p>
                <p className="status">Resgatado e devolvido ao mar</p>
              </div>
            </div>

            <div className="card-animal">
              <img
                src="https://ogimg.infoglobo.com.br/in/21109273-1bd-f49/FT1086A/GOPR1901.jpg"
                alt="Thor"
              />
              <div className="info">
                <h2> Tubarão Thor</h2>
                <p className="descricao">
                  Resgatado de um aquario privado de 3m, agora em tratamento.
                </p>
                <p className="status">Em tratamento</p>
              </div>
            </div>

            <div className="card-animal">
              <img
                src="https://s2-g1.glbimg.com/JGTBX5xPEm3ugq4YWC-1SxsCU-A=/0x0:1784x1214/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/Q/f/NWKY2iTg2y4z1bmn8YoA/lolita-miami-seaquarium-apjpg.jpg"
                alt="Mimi"
              />
              <div className="info">
                <h2>Orca Mimi</h2>
                <p className="descricao">
                  Abandonada em parque marinho, resgatada e tratada.
                </p>
                <p className="status">Devolvido ao mar</p>
              </div>
            </div>

            <div className="card-animal">
              <img
                src="https://www.ceara.gov.br/wp-content/uploads/2025/02/IMG4-10022025.jpeg"
                alt="Tartaruraga"
              />
              <div className="info">
                <h2>Tartaruraga jeff</h2>
                <p className="descricao">
                  Resgatado depois de um vazamento de petroleo.
                </p>
                <p className="status">Em tratamento</p>
              </div>
            </div>
            <div className="card-animal">
              <img
                src="https://s2-g1.glbimg.com/9DuHhiOwLrhw4gQCXai63GPtGFs=/0x147:1080x1071/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2025/Y/3/5i6DnoQEKekPZCP2Wtng/snapinsta.app-472724970-18390998341097287-3489428492710079382-n-1080.jpg"
                alt="Tartaruraga Atreídes"
              />
              <div className="info">
                <h2>Tartaruraga Atreídes</h2>
                <p className="descricao">
                  Resgatado depois de engolir rede de pesca.
                </p>
                <p className="status">Devolvida ao mar</p>
              </div>
            </div>
            <div className="card-animal">
              <img
                src="https://s2-umsoplaneta.glbimg.com/KNMj8nj3YuHIdd1N6St9XWYxy8M=/0x0:668x376/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_7d5b9b5029304d27b7ef8a7f28b4d70f/internal_photos/bs/2025/w/Z/SHNZUdRbAPyhPQN3XPeQ/489293180-1082698567232022-2022733888344294803-n-copy.webp"
                alt="Tartaruraga Moly"
              />
              <div className="info">
                <h2>Tartaruraga Moly</h2>
                <p className="descricao">
                  Resgatado de aquario privado, agora em tratamento.
                </p>
                <p className="status">Em tratamento</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default AnimaisResgatados;
