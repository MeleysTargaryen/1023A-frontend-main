import Header from "./Header";
import Form from "./Form.tsx";
import AtualizarProduto from "./AtualizarProduto.tsx";
import ExcluirProduto from "./ExcluirProduto.tsx";


function Adm() {
  return (
    <>
      <Header />
      <div className="pagina-adm">
        <main className="conteudo-principal">
          <h1>Área Administrativa</h1>
          <div className="forms-lado-a-lado">
            <Form />
            <AtualizarProduto />
            <ExcluirProduto />
          </div>
        </main>
      </div>
    </>
  );
}

export default Adm;
