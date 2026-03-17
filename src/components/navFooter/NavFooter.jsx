import css from './NavFooter.module.css';

export default function NavFooter({tituloGrupo, link1, link2, link3}) {
    return (
        <div className={"col d-flex flex-column gap-2"}>
            <h5 className={css.titulo}>{tituloGrupo}</h5>
            <a href="#" className={css.link}>{link1}</a>
            <a href="#" className={css.link}>{link2}</a>
            <a href="#" className={css.link}>{link3}</a>
        </div>
    )
}