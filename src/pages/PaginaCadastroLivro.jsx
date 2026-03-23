import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Input from "../components/input/Input.jsx";
import Button from "../components/button/Button.jsx";
import Titulo from "../components/titulo/Titulo.jsx";
import { getAuthHeaders } from "../utils/auth.js";

const estadoInicialLivro = {
  imagem: "",
  titulo: "",
  categoria: "",
  descricao: "",
  autor: "",
  faixa_etaria: "",
};

export default function PaginaCadastroLivro() {
  const [livro, setLivro] = useState(estadoInicialLivro);
  const [loading, setLoading] = useState(false);
  const [carregandoLivro, setCarregandoLivro] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleChange = (e) => {
    setLivro((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    if (!id) {
      return;
    }

    const buscarLivro = async () => {
      setCarregandoLivro(true);
      try {
        const response = await fetch(
          `https://apps-api-livros.ucxocw.easypanel.host/livro/${id}`,
          {
            headers: {
              ...getAuthHeaders(),
            },
          },
        );
        if (response.ok) {
          const data = await response.json();
          setLivro({ ...estadoInicialLivro, ...(data.livro ?? data) });
        } else {
          alert("Erro ao carregar livro para edição");
        }
      } catch (error) {
        alert("Erro ao carregar livro para edição");
      } finally {
        setCarregandoLivro(false);
      }
    };

    buscarLivro();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        id
          ? `https://apps-api-livros.ucxocw.easypanel.host/livro/${id}`
          : "https://apps-api-livros.ucxocw.easypanel.host/livro",
        {
          method: id ? "PUT" : "POST",
          headers: {
            "Content-Type": "application/json",
            ...getAuthHeaders(),
          },
          body: JSON.stringify(livro),
        },
      );

      if (response.ok) {
        alert(
          id ? "Livro atualizado com sucesso!" : "Livro cadastrado com sucesso!",
        );
        navigate("/admin-livros");
      } else {
        alert(id ? "Erro ao atualizar livro" : "Erro ao cadastrar livro");
      }
    } catch (error) {
      alert(id ? "Erro ao atualizar livro" : "Erro ao cadastrar livro");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="container mt-4">
      <Titulo texto={id ? "Editar Livro" : "Cadastrar Novo Livro"} />
      <form onSubmit={handleSubmit} className="bg-light p-4 rounded">
        <Input
          htmlfor="imagem"
          label="URL da Imagem"
          tipo="url"
          value={livro.imagem}
          onChange={handleChange}
          required
          disabled={carregandoLivro}
        />
        <Input
          htmlfor="titulo"
          label="Título"
          tipo="text"
          value={livro.titulo}
          onChange={handleChange}
          required
          disabled={carregandoLivro}
        />
        <Input
          htmlfor="categoria"
          label="Categoria"
          tipo="text"
          value={livro.categoria}
          onChange={handleChange}
          required
          disabled={carregandoLivro}
        />
        <Input
          htmlfor="descricao"
          label="Descrição"
          tipo="text"
          value={livro.descricao}
          onChange={handleChange}
          required
          disabled={carregandoLivro}
        />
        <Input
          htmlfor="autor"
          label="Autor"
          tipo="text"
          value={livro.autor}
          onChange={handleChange}
          required
          disabled={carregandoLivro}
        />
        <Input
          htmlfor="faixa_etaria"
          label="Faixa Etária"
          tipo="text"
          value={livro.faixa_etaria}
          onChange={handleChange}
          required
          disabled={carregandoLivro}
        />
        <Button
          texto={
            loading
              ? id
                ? "Atualizando..."
                : "Cadastrando..."
              : id
                ? "Atualizar Livro"
                : "Cadastrar Livro"
          }
          tipo="form"
          disabled={loading || carregandoLivro}
        />
      </form>
    </main>
  );
}
