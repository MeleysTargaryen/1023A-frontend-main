import { useEffect, useState } from 'react';
import Header from './Header.tsx';
import MenuTopo from './MenuTopo.tsx';
import './Produtos.css';

interface Produto {
  id: number;
  nome: string;
  preco: number;
  categoria: string;
}

export default function Produtos() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState<string | null>(null);

  useEffect(() => {
    async function buscarProdutos() {
      try {
        const resposta = await fetch('http://localhost:8000/produtos');
        if (!resposta.ok) throw new Error('Erro ao buscar produtos do servidor');
        const dados = await resposta.json();
        setProdutos(dados);
      } catch (err: any) {
        console.error(err);
        setErro('Falha ao carregar produtos. Tente novamente.');
      } finally {
        setCarregando(false);
      }
    }

    buscarProdutos();
  }, []);

  return (
    <>
      <Header />

      <div className="pagina-produtos">
        <main className="conteudo-principal">
          <MenuTopo />

          <h1>Produtos</h1>

          {carregando && <p>Carregando produtos...</p>}
          {erro && <p className="erro">{erro}</p>}

          {!carregando && !erro && (
            <>
              <p className="numero-produtos">{produtos.length} produto(s) encontrado(s)</p>
              
              {produtos.length === 0 && <p>Nenhum produto cadastrado ainda.</p>}

              <div className="grid-produtos">
                {produtos.map((produto) => (
                  <div key={produto.id} className="card-produto">
                    <img
                      src={gerarImagemProduto(produto.categoria)}
                      alt={produto.nome}
                    />
                    <div className="info">
                      <h2>{produto.nome}</h2>
                      <p className="descricao">Categoria: {produto.categoria}</p>
                      <p className="preco">Preço: R$ {produto.preco.toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </main>
      </div>
    </>
  );
}

function gerarImagemProduto(categoria: string) {
  if (!categoria) return 'https://via.placeholder.com/300x200?text=Produto';

  const categoriaLower = categoria.toLowerCase();

  if (categoriaLower.includes('pelúcia') || categoriaLower.includes('pelucia')) {
    return 'https://apaixonadosporpelucia.cdn.magazord.com.br/img/2019/11/produto/2026/br417cz.jpg?ims=800x800';
  }
  if (categoriaLower.includes('acessório') || categoriaLower.includes('acessorio') || categoriaLower.includes('colar')) {
    return 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSPz6Z7HoMVFam1UuoitFOngby0DG4N5MwFbPycI111LV3WR2toPVlWLYkUS27cNnQI2EnDc124hrRTraIKeb4Y4qaO9XKw93J3rMFEz18';
  }
  if (categoriaLower.includes('pulseira') || categoriaLower.includes('bracelete')) {
    return 'https://img.ltwebstatic.com/images3_spmp/2024/06/07/31/1717734554a3d17fd0e6d1735dfb3a0a801cafec47_thumbnail_384x.webp';
  }
  if (categoriaLower.includes('camiseta')) {
    return 'https://img.ltwebstatic.com/v4/j/spmp/2025/05/26/63/17482635931cd4cc13006c12e5497012cabbb6b0f1_wk_1748347590_thumbnail_560x.webp';
  }
  if (categoriaLower.includes('brinquedo')) {
    return 'https://img.freepik.com/fotos-premium/orca-baleia-pelucia-brinquedo_447400-3212.jpg';
  }

  return 'https://via.placeholder.com/300x200?text=Produto';
}
