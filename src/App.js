import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import NavBar from "./components/NavBar/NavBar";
import SerieList from "./components/SerieList/SerieList";
import SerieForm from "./components/SerieForm/SerieForm";

import Home from "./pages/Home";
import Sobre from "./pages/Sobre";

function App() {
  /* Carrega do localStorage ou começa com lista vazia */
  const [series, setSeries] = useState(() => {
    const savedSeries = localStorage.getItem("series");
    return savedSeries ? JSON.parse(savedSeries) : [];
  });

  /* Salva no localStorage sempre que a lista mudar */
  useEffect(() => {
    localStorage.setItem("series", JSON.stringify(series));
  }, [series]);

  function adicionarSerie(serie) {
    setSeries([...series, serie]);
  }

  function excluirSerie(index) {
    setSeries(series.filter((_, i) => i !== index));
  }

  function editarSerie(index, serieAtualizada) {
    setSeries(series.map((s, i) => (i === index ? serieAtualizada : s)));
  }

  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route
          path="/series"
          element={
            <SerieList
              series={series}
              excluirSerie={excluirSerie}
              editarSerie={editarSerie}
            />
          }
        />
        <Route
          path="/cadastro"
          element={<SerieForm adicionarSerie={adicionarSerie} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
