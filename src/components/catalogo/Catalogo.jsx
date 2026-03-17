import BookCard from "../BookCard/BookCard.jsx";
import { livros as livrosMock } from "../../dados/livros.js";
import { useEffect, useState } from "react";
import Input from "../input/Input.jsx";

export default function Catalogo() {
    const [livros, setLivros] = useState([]);
    const [termoBusca, setTermoBusca] = useState("");

    function normalizarTexto(valor) {
        return String(valor ?? "").toLowerCase().trim();
    }

    async function buscarLivros() {
        try {
            let busca = await fetch("https://apps-api-livros.ucxocw.easypanel.host/livro", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });

            busca = await busca.json();
            const listaLivros = Array.isArray(busca.livros) ? busca.livros : [];

            setLivros(listaLivros);
        } catch {
            setLivros(livrosMock);
        }
    }

    useEffect(function () {
        buscarLivros();
    }, []);

    const livrosFiltrados = livros.filter(function (livro) {
        const buscaNormalizada = normalizarTexto(termoBusca);

        if (!buscaNormalizada) {
            return true;
        }

        return (
            normalizarTexto(livro.titulo).includes(buscaNormalizada) ||
            normalizarTexto(livro.autor).includes(buscaNormalizada) ||
            normalizarTexto(livro.tipo).includes(buscaNormalizada)
        );
    });

    return (
        <>
            <div className="col-12">
                <Input
                    label="Buscar livros"
                    tipo="text"
                    htmlfor="buscar-livros"
                    value={termoBusca}
                    onChange={function (event) {
                        setTermoBusca(event.target.value);
                    }}
                />
            </div>

            {livrosFiltrados.map(function (livro, index) {
                return(
                <div className='col-md-3 col-12' key={index}>
                    <BookCard titulo={livro.titulo} autor={livro.autor} tipo={livro.tipo} imagem={livro.imagem} id={index} />
                </div>
                );
            })}

            {!livrosFiltrados.length && (
                <div className="col-12">
                    <p>Nenhum livro encontrado para "{termoBusca}".</p>
                </div>
            )}
        </>
    );
}
