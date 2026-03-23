import Input from "../components/input/Input.jsx";
import Button from "../components/button/Button.jsx";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function PaginaLogin() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);
  const trocarPagina = useNavigate();

  const sub = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        "https://apps-api-livros.ucxocw.easypanel.host/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, senha }),
        },
      );

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("usuario", JSON.stringify(data));
        alert("Login realizado com sucesso");
        trocarPagina("/admin-livros");
      } else {
        alert("Email ou senha incorretos");
      }
    } catch (error) {
      alert("Erro ao fazer login");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={"container"}>
      <div className="row">
        <div className="col-sm-12 col d-flex justify-content-center align-items-center">
          <form
            className={"w-75 px-2 py-4 my-4 bg-primary-subtle rounded"}
            onSubmit={sub}
          >
            <Input
              htmlfor={"email"}
              label={"Insira seu email"}
              tipo={"email"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              htmlfor={"senha"}
              label={"Insira sua senha"}
              tipo={"password"}
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
            <Button
              texto={loading ? "Logando..." : "Logar"}
              tipo={"form"}
              disabled={loading}
            />
            <Link to={"/cadastro"}>Cadastrar</Link>
          </form>
        </div>
      </div>
    </div>
  );
}
