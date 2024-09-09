import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@fontsource/ubuntu"; 
import "@fontsource/ubuntu/300.css";
import "@fontsource/ubuntu/700.css";  
import Navbar from './Modules/Navbar';
import Home from '../src/Pages/Home';
import Polos from '../src/Pages/Polos';
import Equipe from '../src/Pages/Equipe';
import Alunos from '../src/Pages/AreaAluno';
import Sobre from '../src/Pages/Sobre';
import ScrollToTop from "./Modules/ScrollToTop";
import ScrollToAnchor from "./Modules/ScrollToAnchor";
import PageTitle from "./Modules/PageTitle";

function App() {
    
return (
    
<div>
    <BrowserRouter>
    <ScrollToTop /> 
    <ScrollToAnchor /> 
    <Navbar/>
        <Routes>
            <Route index element={<Home />} />
            <Route path="locais-de-prova" element={
                <>
                    <PageTitle title="Locais de Prova em São Paulo, Minas Gerais, Paraná e Pasrá | IBRESP" />
                    <meta name="description" content="Confira os locais de provas do Ibresp. São mais de 30 locais de provas espalhados pelo Estado de São Paulo, Minas, Paraná e Pará. Confira aqui os endereços." />
                    <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                    <meta property="og:locale" content="pt_BR" />
                    <meta property="og:type" content="article" />
                    <meta property="og:title" content="Locais de Prova em São Paulo e Minas Gerais | IBRESP" />
                    <meta property="og:description" content="Confira os locais de provas do Ibresp. São mais de 30 locais de provas espalhados pelo Estado de São Paulo e Minas. Confira aqui os endereços." />
                    <meta property="og:url" content="https://www.ibresp.com.br/locais-de-provas/" />
                    <meta property="og:site_name" content="IBRESP" />
                    <meta property="article:publisher" content="https://www.facebook.com/ibresp" />
                    <meta property="article:modified_time" content="2024-08-28T20:03:44+00:00" />
                    <meta property="og:image" content="https://www.ibresp.com.br/wp-content/uploads/2018/01/metas-Fim-de-ano.jpg" />
                    <meta property="og:image:width" content="450" />
                    <meta property="og:image:height" content="317" />
                    <Polos />
                </>
            } 
            />
            <Route path="equipe" element={<Equipe />} />
            <Route path="area-do-aluno" element={<Alunos />} />
            <Route path="o-ibresp" element={<Sobre />} />
        </Routes>
    </BrowserRouter>
</div>
);
}


export default App;
