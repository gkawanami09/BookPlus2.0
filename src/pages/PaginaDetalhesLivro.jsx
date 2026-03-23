import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Titulo from "../components/titulo/Titulo.jsx";

export default function PaginaDetalhesLivro() {
  const { id } = useParams();
  const [livro, setLivro] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLivro = async () => {
      try {
        const response = await fetch(
          `https://apps-api-livros.ucxocw.easypanel.host/livro/${id}`,
        );
        if (response.ok) {
          const data = await response.json();
          setLivro(data.livro ?? data);
        } else {
          alert("Erro ao carregar livro");
        }
      } catch (error) {
        alert("Erro ao carregar livro");
      } finally {
        setLoading(false);
      }
    };

    fetchLivro();
  }, [id]);

  if (loading) {
    return (
      <div className="container mt-4">
        <p>Carregando...</p>
      </div>
    );
  }

  if (!livro) {
    return (
      <div className="container mt-4">
        <p>Livro não encontrado</p>
      </div>
    );
  }

  return (
    <main className="mt-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img
              src={livro.imagem}
              alt={`Livro ${livro.titulo}`}
              className="img-fluid"
            />
          </div>
          <div className="col-md-8">
            <div className="row">
              <div className="col-12">
                <Titulo texto={livro.titulo} />
              </div>
              <div className="col-12">
                <small className="mb-3">{livro.categoria}</small>
              </div>
              <div className="col-12">
                <p>
                  Por <span className="text-primary">{livro.autor}</span>
                </p>
              </div>
              <div className="col-12">
                <p className="mb-1">
                  <small>SINOPSE</small>
                </p>
                <p className="text-secondary">{livro.descricao}</p>
              </div>
              <div className="col-12">
                <p>Faixa etária: {livro.faixa_etaria}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
