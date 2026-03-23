import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Titulo from "../components/titulo/Titulo.jsx";
import Button from "../components/button/Button.jsx";
import { getAuthHeaders } from "../utils/auth.js";

export default function PaginaAdminLivros() {
  const [livros, setLivros] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLivros();
  }, []);

  const fetchLivros = async () => {
    try {
      const response = await fetch(
        "https://apps-api-livros.ucxocw.easypanel.host/livro",
        {
          headers: {
            ...getAuthHeaders(),
          },
        },
      );
      if (response.ok) {
        const data = await response.json();
        const listaLivros = Array.isArray(data)
          ? data
          : Array.isArray(data.livros)
            ? data.livros
            : [];
        setLivros(listaLivros);
      } else {
        alert("Erro ao carregar livros");
      }
    } catch (error) {
      alert("Erro ao carregar livros");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Tem certeza que deseja excluir este livro?")) {
      try {
        const response = await fetch(
          `https://apps-api-livros.ucxocw.easypanel.host/livro/${id}`,
          {
            method: "DELETE",
            headers: {
              ...getAuthHeaders(),
            },
          },
        );
        if (response.ok) {
          alert("Livro excluído com sucesso!");
          setLivros((listaAtual) => listaAtual.filter((livro) => livro.id !== id));
        } else {
          alert("Erro ao excluir livro");
        }
      } catch (error) {
        alert("Erro ao excluir livro");
      }
    }
  };

  if (loading) {
    return (
      <div className="container mt-4">
        <p>Carregando...</p>
      </div>
    );
  }

  return (
    <main className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <Titulo texto="Administração de Livros" />
        <Link to="/cadastro-livro">
          <Button texto="Cadastrar Novo Livro" tipo="button" />
        </Link>
      </div>
      <div className="row">
        {livros.map((livro) => (
          <div key={livro.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <img
                src={livro.imagem}
                className="card-img-top"
                alt={livro.titulo}
              />
              <div className="card-body">
                <h5 className="card-title">{livro.titulo}</h5>
                <p className="card-text">Autor: {livro.autor}</p>
                <p className="card-text">
                  Categoria: {livro.categoria ?? livro.tipo}
                </p>
                <div className="d-flex flex-wrap gap-2">
                  <Link to={`/detalhe-livro/${livro.id}`}>
                    <Button texto="Ver Detalhes" tipo="button" />
                  </Link>
                  <Link to={`/editar-livro/${livro.id}`}>
                    <Button texto="Editar" tipo="button" />
                  </Link>
                  <Button
                    texto="Excluir"
                    tipo="button"
                    onClick={() => handleDelete(livro.id)}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}

        {!livros.length && (
          <div className="col-12">
            <p>Nenhum livro cadastrado.</p>
          </div>
        )}
      </div>
    </main>
  );
}
