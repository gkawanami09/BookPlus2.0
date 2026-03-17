import { useParams } from "react-router-dom";
import { livros } from "../dados/livros.js"
import Titulo from "../components/titulo/Titulo.jsx";

export default function PaginaDetalhesLivro() {

    const { id } = useParams();

    return (
        <main className="mt=4">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <img src={livros[id].imagem} alt={`Livro ${livros[id].nome}`} />
                    </div>
                    <div className="col">
                        <div class="row">
                            <div className="col-12">
                                <Titulo texto={livros[id].titulo} />
                            </div>
                            <div className="col-12">
                                <small className="mb-3">{livros[id].tipo}</small>
                            </div>
                            <div className="col-12">
                                <p>Por <span className="text-primary">{livros[id].autor}</span></p>
                            </div>

                            <div className="col-12">
                                <p className="mb-1"><small>SINOPSE</small></p>
                                <p className="text-secondary"> {livros[id].descricao}</p>
                            </div>
                            <div className="col-12">
                                <p>Faixa etária: {livros[id].faixaEtaria}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}