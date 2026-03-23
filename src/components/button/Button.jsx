import { Link } from "react-router-dom";
import css from "./Button.module.css";

export default function Button({
  texto = "Botão",
  tipo = "",
  link = false,
  to = "/",
  onClick,
  disabled = false,
  buttonType,
  className = "",
}) {
  const resolvedType = buttonType ?? (tipo === "form" ? "submit" : "button");
  const classes = `${css.botao} ${css[tipo] ?? ""} rounded-5 py-3 my-1 ${className}`.trim();

  if (link) {
    return (
      <Link to={to}>
        <button
          type="button"
          className={classes}
          onClick={onClick}
          disabled={disabled}
        >
          {texto}
        </button>
      </Link>
    );
  }

  return (
    <button
      type={resolvedType}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {texto}
    </button>
  );
}
