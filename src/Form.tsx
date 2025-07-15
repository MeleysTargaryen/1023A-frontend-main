import { useState } from 'react'; 
import './Form.css';

export default function Form() {
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [categoria, setCategoria] = useState('');
  const [mensagem, setMensagem] = useState('');

  async function cadastrar(e: React.FormEvent) {
    e.preventDefault();
    setMensagem('Enviando...');

    try {
      const resposta = await fetch('http://localhost:8000/produtos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nome,
          preco: parseFloat(preco),
          categoria
        })
      });

      if (!resposta.ok) {
        const erro = await resposta.json();
        throw new Error(erro.mensagem || 'Erro ao cadastrar produto');
      }

      setMensagem('Produto cadastrado com sucesso!');
      setNome('');
      setPreco('');
      setCategoria('');
    } catch (err: any) {
      setMensagem(`Erro: ${err.message}`);
    }
  }

  return (
    <div className="form-container">
      <h2>Cadastrar Novo Produto</h2>
      <form onSubmit={cadastrar}>
        <label>
          Nome:
          <input type="text" value={nome} onChange={e => setNome(e.target.value)} required />
        </label>
        <label>
          Preço:
          <input type="number" step="0.01" value={preco} onChange={e => setPreco(e.target.value)} required />
        </label>
        <label>
          Categoria:
          <select value={categoria} onChange={e => setCategoria(e.target.value)} required>
            <option value="">Selecione a categoria</option>
            <option value="Brinquedos">Brinquedos</option>
            <option value="Acessórios">Acessórios</option>
            <option value="Produtos Gerais">Produtos Gerais</option>
            <option value="Ofertas">Ofertas</option>
            <option value="Pelúcias">Pelúcias</option>
            <option value="Camisetas">Camisetas</option>
          </select>
        </label>
        <button type="submit">Cadastrar Produto</button>
      </form>
      {mensagem && <p className="mensagem">{mensagem}</p>}
    </div>
  );
}
