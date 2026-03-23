import css from "./BookCard.module.css";
import Button from "../button/Button.jsx";

export default function BookCard({ titulo, autor, tipo, categoria, imagem, id }) {
  const categoriaTexto = categoria ?? tipo ?? "";

  return (
    <div className={"" + css.card}>
      <div className={"rounded-3 " + css.divImagem}>
        <img
          src={imagem}
          className={"rounded-3 shadow " + css.imagem}
          alt={"Imagem do livro: " + titulo}
        />
        <div
          id={"botaoSobreposto"}
          className={
            "d-flex justify-content-center align-items-center rounded-3 " +
            css.botaoSobreposto
          }
        >
          <Button
            texto={"VER DETALHES"}
            tipo={"card"}
            link={true}
            to={`/detalhe-livro/${id}`}
          />
        </div>
        <div
          id={"fundoSobreposto"}
          className={"rounded-3 " + css.fundoSobreposto}
        ></div>
      </div>
      <div className={""}>
        <span className={css.categoriaTexto}>{categoriaTexto}</span>
        <h5 className={"card-title " + css.tituloTexto}>{titulo}</h5>
        <p className={css.autorTexto}>{autor}</p>
      </div>
    </div>
  );
}
