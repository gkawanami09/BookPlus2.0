import css from './Footer.module.css';
import NavFooter from '../navFooter/NavFooter.jsx';

export default function Footer({titulo = "BOOK PLUS", frase}) {
    return (
        <footer className={"container-fluid bg-light text-white p-4"}>
            <div className={"row"}>
                <div className={"col-12 col-md-6"}>
                    <div className={'d-flex gap-2'}>
                        <img src="/iconeDoLivro.png" alt="Icone livro aberto" className={css.iconLogo} />
                        <h1 className="">{titulo}</h1>
                    </div>
                    <div>
                        <p className={'w-md-50 ' + css.corCinzaClaro}>{frase}</p>
                    </div>
                    <div className={'d-flex gap-2 ' + css.redesContainer}>
                        <a href="" className={'d-flex align-items-center justify-content-center'}>
                            <span className={"material-symbols-outlined"}>share</span>
                        </a>
                        <a href="" className={'d-flex align-items-center justify-content-center'}>
                            <span className={"material-symbols-outlined"}>favorite</span>
                        </a>
                    </div>
                </div>
                <div className={"col-12 col-md-6 mt-md-0 mt-5"}>
                    <div className={'row d-flex gap-md-0 gap-3'}>
                        <NavFooter tituloGrupo={'EXPLORAR'} link1={'Lançamentos'} link2={'Mais Vendidos'} link3={'E-Books'} />
                        <NavFooter tituloGrupo={'SUPORTE'} link1={'Ajuda'} link2={'Envios'} link3={'Trocas'} />
                        <NavFooter tituloGrupo={'INSTITUCIONAL'} link1={'Sobre nós'} link2={'Contato'} link3={'Privacidade'} />
                    </div>
                </div>
                <div className={'col-12 col-md-6 d-flex mt-5 py-5'}>
                    <p className={css.cinzaEscuro}>© 2024 Book Plus. Todos os direitos reservados.</p>
                    
                </div>
                <div className={'col-12 col-md-6 d-flex justify-content-md-end mt-md-5 py-md-5'}>
                    <p className={css.cinzaEscuro}>Desenvolvido com <span className={"material-symbols-outlined " + css.coracao}>favorite</span> em SENAI</p>
                </div>
            </div>
        </footer>
    )
}