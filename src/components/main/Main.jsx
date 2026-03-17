import css from './Main.module.css'
import Button from '../button/Button.jsx';
import BookCard from '../BookCard/BookCard.jsx';
import Catalogo from "../catalogo/Catalogo.jsx";
import { Link } from "react-router-dom";
import Titulo from "../titulo/Titulo.jsx";
import Input from "../input/Input.jsx"

export default function Main() {

    return (
        <main className={'pt-5'}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <p className={'d-flex align-items-center'}>
                            <span className={css.tracinho + ' d-inline-block'}></span>
                            <span className={css.textoNovidades}>NOVIDADES</span>
                        </p>
                    </div>
                    <div className='col-12 d-flex justify-content-between align-items-center mb-2'>
                        <div className='row w-100 justify-content-between align-items-center'>
                            <div className="col-12 col-md-6">
                                <Titulo texto={"Destaques da Semana"}/>
                            </div>
                            <div className="col-12 col-md-6 d-flex justify-content-md-end justify-content-start align-items-center gap-3 mt-3 mt-md-0">
                                <select name="categorias" id="categorias" className={'rounded-5 p-2 ' + css.select}>
                                    <option value="relevancia">Ordenar por: Relevância</option>
                                    <option value="maisRecentes">Mais recentes</option>
                                    <option value="menorPreco">Menor preço</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <Catalogo />

                    {/*{livros.map((livro, index) => (*/}
                    {/*    <div className='col-md-3 col-12' key={index}>*/}
                    {/*        <BookCard titulo={livro.titulo} autor={livro.autor} tipo={livro.tipo} imagem={livro.imagem} />*/}
                    {/*    </div>*/}
                    {/*))}*/}
                    <div className='col-12 d-flex justify-content-center py-5'>
                        <Link to={"/catalogo-livros"}>
                            <Button texto={'Ver catálogo completo'} tipo={'vazio color-dark'} />
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    )
}