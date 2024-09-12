import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
    <Router>
    <ScrollToTop /> 
    <ScrollToAnchor /> 
    <Navbar/>
            <Routes>
                <Route index element={
                    <>
                    <PageTitle title="Curso de Corretor de Imóveis Online São Paulo, Minas Gerais, Paraná e Pará | IBRESP" />
                    <meta name="description" content="Curso de corretor de imóveis a distância (EAD) com prova presencial. Você poderá estudar onde e quando quiser! O melhor curso de corretor de imóveis de São Paulo, Minas Gerais, Paraná e Pará." />
                    <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                    <link rel="canonical" href="https://www.ibresp.com.br/" />
                    <meta property="og:locale" content="pt_BR" />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content="Curso de Corretor de Imóveis Online São Paulo, Minas Gerais, Paraná e Pará | IBRESP" />
                    <meta property="og:description" content="Curso de corretor de imóveis a distância (EAD) com prova presencial. Você poderá estudar onde e quando quiser! O melhor curso de corretor de imóveis de São Paulo, Minas Gerais, Paraná e Pará." />
                    <meta property="og:url" content="https://www.ibresp.com.br/" />
                    <meta property="og:site_name" content="IBRESP" />
                    <meta property="article:publisher" content="https://www.facebook.com/ibresp" />
                    <meta property="article:modified_time" content="2024-09-09T17:20:54+00:00" />
                    <meta property="og:image" content="https://www.ibresp.com.br/wp-content/uploads/2022/05/www.ibresp.com.br-banner-tti.jpg" />
                    <Home />
                    </>
                    } 
                    />
                <Route path="locais-de-prova" element={
                    <>
                        <PageTitle title="Locais de Prova em São Paulo, Minas Gerais, Paraná e Pasrá | IBRESP" />
                        <meta name="description" content="Confira os locais de provas do Ibresp. São mais de 30 locais de provas espalhados pelo Estado de São Paulo, Minas, Paraná e Pará. Confira aqui os endereços." />
                        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                        <link rel="canonical" href="https://www.ibresp.com.br/locais-de-provas/" />
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
                <Route path="equipe" element={
                    <>
                    <PageTitle title="Equipe comercial IBRESP São Paulo, Minas Gerais, Paraná e Pará | Fale com a gente" />
                    <meta name="description" content="Equipe de consultores do IBRESP, sempre tem um próximo da sua cidade." />
                    <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                    <meta property="og:locale" content="pt_BR" />
                    <meta property="og:type" content="article" />
                    <meta property="og:title" content="Equipe comercial IBRESP São Paulo, Minas Gerais, Paraná e Pará | Fale com a gente" />
                    <meta property="og:description" content="Equipe de consultores do IBRESP, sempre tem um próximo da sua cidade." />
                    <meta property="og:url" content="https://www.ibresp.com.br/equipe/" />
                    <meta property="og:site_name" content="IBRESP" />
                    <meta property="article:publisher" content="https://www.facebook.com/ibresp" />
                    <meta property="article:modified_time" content="2024-07-10T17:46:22+00:00" />
                    <meta property="og:image" content="https://www.ibresp.com.br/wp-content/uploads/2021/11/www.ibresp.com.br-capa-news-cursos-gratuitos-ibresp-01.jpg" />
                    <meta property="og:image:width" content="580" />
                    <meta property="og:image:height" content="418" />
                    <Equipe />
                    </>
                    } 
                    />
                <Route path="area-do-aluno" element={
                    <>
                    <PageTitle title="Área do Aluno IBRESP | Escola para Corretores de Imóveis" />
                    <meta name="description" content="Para auxiliá-lo, na área do aluno, elaboramos um manual sintético em que você, aluno, encontra as resposta de suas principais dúvidas. Saiba mais." />
                    <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                    <link rel="canonical" href="https://www.ibresp.com.br/area-do-aluno/" />
                    <meta property="og:locale" content="pt_BR" />
                    <meta property="og:type" content="article" />
                    <meta property="og:title" content="Área do Aluno IBRESP - IBRESP" />
                    <meta property="og:description" content="Para auxiliá-lo, na área do aluno, elaboramos um manual sintético em que você, aluno, encontra as resposta de suas principais dúvidas. Saiba mais." />
                    <meta property="og:url" content="https://www.ibresp.com.br/area-do-aluno/" />
                    <meta property="og:site_name" content="IBRESP" />
                    <meta property="article:publisher" content="https://www.facebook.com/ibresp" />
                    <meta property="article:modified_time" content="2024-07-03T19:05:34+00:00" />
                    <meta property="og:image" content="https://www.ibresp.com.br/wp-content/uploads/2017/01/advogado-como-corretor.jpg" />
                    <meta property="og:image:width" content="800" />
                    <meta property="og:image:height" content="536" />
                    <Alunos />
                    </>
                    }
                    />
                <Route path="o-ibresp" element={
                    <>
                    <PageTitle title="Educação Imobiliária à Distância EAD São Paulo, Minas Gerais, Paraná e Pará | IBRESP" />
                    <meta name="description" content="O IBRESP iniciou suas atividades em São Paulo no ano de 2009, deste modo, por meio de uma parceria entre os fundadores do Instituto Educar, Eduardo Penterich e Arnaldo Alves, e o fundador do IBREP Santa Catarina, Celso Pereira Raimundo." />
                    <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                    <link rel="canonical" href="https://www.ibresp.com.br/o-ibresp/" />
                    <meta property="og:locale" content="pt_BR" />
                    <meta property="og:type" content="article" />
                    <meta property="og:title" content="Educação Imobiliária à Distância EAD São Paulo e Minas Gerais | IBRESP" />
                    <meta property="og:description" content="O IBRESP iniciou suas atividades em São Paulo no ano de 2009, deste modo, por meio de uma parceria entre os fundadores do Instituto Educar, Eduardo Penterich e Arnaldo Alves, e o fundador do IBREP Santa Catarina, Celso Pereira Raimundo." />
                    <meta property="og:url" content="https://www.ibresp.com.br/o-ibresp/" />
                    <meta property="og:site_name" content="IBRESP" />
                    <meta property="article:publisher" content="https://www.facebook.com/ibresp" />
                    <meta property="article:modified_time" content="2024-07-10T17:46:22+00:00" />
                    <meta property="og:image" content="https://www.ibresp.com.br/wp-content/uploads/2021/11/www.ibresp.com.br-capa-news-cursos-gratuitos-ibresp-01.jpg" />
                    <meta property="og:image:width" content="580" />
                    <meta property="og:image:height" content="418" />
                    <Sobre />
                    </>
                    } 
                    />
            </Routes>
    </Router>
</div>
);
}


export default App;
