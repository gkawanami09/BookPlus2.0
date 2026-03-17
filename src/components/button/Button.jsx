import { Link } from 'react-router-dom'
import css from './Button.module.css'

export default function Button({ texto = "Botão", tipo = "", link = false, to = "/" }) {

    if (link) {
        return (
            <Link to={to}>
                <button className={css[tipo] + ' ' + css.botao + ' rounded-5 py-3 my-1'}>
                    {texto}
                </button>
            </Link>
        )
    }

    return (
        <button className={css[tipo] + ' ' + css.botao + ' rounded-5 py-3 my-1'}>
            {texto}
        </button>
    )
}