import { useState } from "react";
import "./SerieForm.css";

function SerieForm({ adicionarSerie }) {
  /*Estados para cada campo do formulário*/
  const [titulo, setTitulo] = useState("");
  const [temporadas, setTemporadas] = useState("");
  const [dataLancamento, setDataLancamento] = useState("");
  const [diretor, setDiretor] = useState("");
  const [produtora, setProdutora] = useState("");
  const [categoria, setCategoria] = useState("");
  const [dataAssistiu, setDataAssistiu] = useState("");

  /*Função chamada ao enviar o formulário*/
  function handleSubmit(e) {
    e.preventDefault();

    
    if (!titulo || !temporadas || !diretor) {
      alert("Título, Temporadas e Diretor são obrigatórios!");
      return;
    }

    
    const novaSerie = {
      titulo,
      temporadas,
      dataLancamento,
      diretor,
      produtora,
      categoria,
      dataAssistiu
    };

    adicionarSerie(novaSerie);

    setTitulo("");
    setTemporadas("");
    setDataLancamento("");
    setDiretor("");
    setProdutora("");
    setCategoria("");
    setDataAssistiu("");
  }

  return (
    <div>
      <h1>Adicionar Série</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Título"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
        <input
          type="number"
          placeholder="Número de temporadas"
          value={temporadas}
          onChange={(e) => setTemporadas(e.target.value)}
        />
        <input
          type="date"
          placeholder="Data de lançamento"
          value={dataLancamento}
          onChange={(e) => setDataLancamento(e.target.value)}
        />
        <input
          type="text"
          placeholder="Diretor"
          value={diretor}
          onChange={(e) => setDiretor(e.target.value)}
        />
        <input
          type="text"
          placeholder="Produtora"
          value={produtora}
          onChange={(e) => setProdutora(e.target.value)}
        />
        <input
          type="text"
          placeholder="Categoria"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
        />
        <input
          type="date"
          placeholder="Data que assistiu"
          value={dataAssistiu}
          onChange={(e) => setDataAssistiu(e.target.value)}
        />

        <button type="submit">Adicionar Série</button>
      </form>
    </div>
  );
}

export default SerieForm;