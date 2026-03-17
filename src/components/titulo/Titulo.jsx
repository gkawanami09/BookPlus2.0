import css from './Titulo.module.css'

export default function Titulo({texto}) {
    return (
        <h1 className={css.titulo}>
            {texto}
        </h1>
    )
}