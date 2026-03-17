import Input from "../components/input/Input.jsx";
import Button from "../components/button/Button.jsx";
import { Link, useNavigate } from "react-router-dom";
import { usuario } from "../dados/usuario.js"
import { useState } from "react";

export default function PaginaLogin() {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const trocarPagina = useNavigate()

    const sub = (e) => {
        e.preventDefault()

        usuario.forEach((user, index) => {
            if (user.email === email && user.senha === senha) {
                alert('Login realizado com sucesso')
                trocarPagina('/catalogo-livros')
            } else {
                alert('Email ou senha incorretos')
            }
        });
    }

    return (
        <div className={"container"}>
            <div className="row">
                <div className="col-sm-12 col d-flex justify-content-center align-items-center">
                    <form className={"w-75 px-2 py-4 my-4 bg-primary-subtle rounded"} onSubmit={sub}>
                        <Input htmlfor={"email"} label={"Insira seu email"} tipo={"email"} value={email} onChange={(e) => setEmail(e.target.value)} />
                        <Input htmlfor={"senha"} label={"Insira sua senha"} tipo={"password"} value={senha} onChange={(e) => setSenha(e.target.value)} />
                        <Button texto={"Logar"} tipo={"form"} />
                        <Link to={"/cadastro"}>Cadastrar</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}