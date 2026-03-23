import css from "./Header.module.css";
import { Link, useNavigate } from "react-router-dom";

export default function Header({ titulo = "BOOK PLUS" }) {
  const navigate = useNavigate();
  const usuario = localStorage.getItem("usuario");

  const handleLogout = () => {
    localStorage.removeItem("usuario");
    navigate("/");
  };

  return (
    <header className={"py-4"}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 justify-content-between align-items-center d-block d-md-flex">
            <div className="d-flex gap-2">
              <img
                src="/iconeDoLivro.png"
                alt="Icone livro aberto"
                className={css.iconLogo}
              />
              <h1 className="">{titulo}</h1>
            </div>
          </div>
          <div className={"col-12 col-md-6"}>
            <div
              className={
                "w-100 d-flex justify-content-center justify-content-sm-center"
              }
            >
              <nav
                className={
                  "navbar navbar-expand-lg w-100 d-flex justify-content-between align-items-center"
                }
              >
                <button
                  className={"navbar-toggler m-auto"}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className={"navbar-toggler-icon"}></span>
                </button>
                <div className={"collapse navbar-collapse"} id="navbarNav">
                  <ul
                    className={
                      "navbar-nav d-flex align-items-center justify-content-between w-100"
                    }
                  >
                    <li className={"nav-item active mt-3 mt-md-0"}>
                      <Link to="/catalogo-livros">CATÁLOGO</Link>
                    </li>
                    <li className={"nav-item mt-3 mt-md-0"}>
                      <a href="#">LANÇAMENTOS</a>
                    </li>
                    <li className={"nav-item mt-3 mt-md-0"}>
                      <a href="#">MAIS VENDIDOS</a>
                    </li>
                    {usuario ? (
                      <>
                        <li className={"nav-item mt-3 mt-md-0"}>
                          <Link
                            to="/admin-livros"
                            className={css.btnLoginAdm + " px-4"}
                          >
                            Admin
                          </Link>
                        </li>
                        <li className={"nav-item mt-3 mt-md-0"}>
                          <button
                            onClick={handleLogout}
                            className={css.btnLoginAdm + " px-4"}
                          >
                            Logout
                          </button>
                        </li>
                      </>
                    ) : (
                      <li className={"nav-item mt-3 mt-md-0"}>
                        <Link to="/login" className={css.btnLoginAdm + " px-4"}>
                          Login ADM
                        </Link>
                      </li>
                    )}
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
