import Button from "../components/button/Button";
import Input from "../components/input/Input";

export default function PaginaCadastro() {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    return (
        <div className={"container"}>
            <div className={"row"}>
                <div className={"col-sm-12 col d-flex justify-content-center align-items-center"}>
                    <form className={"w-sm-100 w-75 px-2 py-4 my-4 bg-primary-subtle rounded"}>
                        <Input htmlfor={"nome"} label={"Insira seu Nome"} tipo={"text"} value={nome} onChange={(e) => setNome(e.target.value)} />
                        <Input htmlfor={"email"} label={"Insira seu email"} tipo={"email"} value={email} onChange={(e) => setEmail(e.target.value)} />
                        <Input htmlfor={"senha"} label={"Insira sua senha"} tipo={"password"} value={senha} onChange={(e) => setSenha(e.target.value)} />
                        <Button texto={"Cadastrar"} tipo={"form"} />
                    </form>
                </div>
            </div>
        </div>
    )
}