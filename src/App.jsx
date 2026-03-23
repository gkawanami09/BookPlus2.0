import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaginaHome from "./pages/PaginaHome.jsx";
import PaginaLogin from "./pages/PaginaLogin.jsx";
import PaginaCadastro from "./pages/PaginaCadastro.jsx";
import PaginaCatalogoLivros from "./pages/PaginaCatalogoLivros.jsx";
import PaginaDetalhesLivro from "./pages/PaginaDetalhesLivro.jsx";
import PaginaCadastroLivro from "./pages/PaginaCadastroLivro.jsx";
import PaginaAdminLivros from "./pages/PaginaAdminLivros.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={"/"} element={<PaginaHome />} />
        <Route path={"/login"} element={<PaginaLogin />} />
        <Route path={"/cadastro"} element={<PaginaCadastro />} />
        <Route path={"/catalogo-livros"} element={<PaginaCatalogoLivros />} />
        <Route path={"/detalhe-livro/:id"} element={<PaginaDetalhesLivro />} />
        <Route
          path={"/admin-livros"}
          element={
            <ProtectedRoute>
              <PaginaAdminLivros />
            </ProtectedRoute>
          }
        />
        <Route
          path={"/cadastro-livro"}
          element={
            <ProtectedRoute>
              <PaginaCadastroLivro />
            </ProtectedRoute>
          }
        />
        <Route
          path={"/editar-livro/:id"}
          element={
            <ProtectedRoute>
              <PaginaCadastroLivro />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer
        frase={
          "Sua livraria digital de confiança. Uma curadoria minimalista das obras mais impactantes para o seu crescimento."
        }
      />
    </BrowserRouter>
  );
}
