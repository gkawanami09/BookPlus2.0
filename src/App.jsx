import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaginaHome from "./pages/PaginaHome.jsx";
import PaginaLogin from "./pages/PaginaLogin.jsx";
import Input from "./components/input/Input.jsx";
import PaginaCadastro from "./pages/PaginaCadastro.jsx";
import PaginaCatalogoLivros from "./pages/PaginaCatalogoLivros.jsx";
import PaginaDetalhesLivro from "./pages/PaginaDetalhesLivro.jsx";

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
            </Routes>
            {/* <Banner />
            <Main /> */}
            <Footer frase={'Sua livraria digital de confiança. Uma curadoria minimalista das obras mais impactantes para o seu crescimento.'} />
        </BrowserRouter>
    )
}