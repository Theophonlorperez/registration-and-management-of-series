import "./SerieList.css";

function SerieList({ series, excluirSerie, editarSerie }) {
  return (
    <div className="serie-list-container">
      <h1 className="serie-list-title">Lista de Séries</h1>

      {series.length === 0 && (
        <p className="serie-list-empty">Nenhuma série cadastrada</p>
      )}

      <div className="serie-list-items">
        {series.map((serie, index) => (
          <div key={index} className="serie-card">
            <div className="serie-info">
              <strong>{serie.titulo}</strong> <br />
              {serie.temporadas} temporadas <br />
              Diretor: {serie.diretor} <br></br>
              Lançamento: {serie.dataLancamento} <br></br>
              Categoria: {serie.categoria} <br></br>
              Produtora: {serie.produtora} <br></br>
              Assiti em: {serie.dataAssistiu}

            </div>
            <div className="serie-actions">
              <button
                className="serie-edit-btn"
                onClick={() =>
                  editarSerie(index, {
                    ...serie,
                    titulo:
                      prompt("Novo título:", serie.titulo) || serie.titulo,
                    temporadas:
                      prompt("Número de temporadas:", serie.temporadas) ||
                      serie.temporadas,
                    dataLancamento:
                      prompt("Data de lançamento:", serie.dataLancamento) ||
                      serie.dataLancamento,
                    diretor: prompt("Diretor:", serie.diretor) || serie.diretor,
                    produtora:
                      prompt("Produtora:", serie.produtora) || serie.produtora,
                    categoria:
                      prompt("Categoria:", serie.categoria) || serie.categoria,
                    dataAssistiu:
                      prompt("Data que assistiu:", serie.dataAssistiu) ||
                      serie.dataAssistiu,
                  })
                }
              >
                Editar
              </button>
              <button
                className="serie-delete-btn"
                onClick={() => excluirSerie(index)}
              >
                Excluir
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SerieList;
