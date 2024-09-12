import React from "react";
import { Helmet } from "react-helmet";
import Footer from '../Modules/Footer';
import Accordiontime from '../Modules/Accordiontime';

function Equipe() {
    return(
<div>
  <Helmet>
    <title>Equipe comercial IBRESP São Paulo, Minas Gerais, Paraná e Pará | Fale com a gente</title>
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
  </Helmet>

  <div className=" flex flex-row justify-center p-3 lg:p-0">

    <div className="container mt-12">
      <h1 className=" text-violet-800 text-4xl font-bold">
      Equipe comercial IBRESP
      </h1>
      <p>Sempre um consultor perto de você, só chamar!</p>

    </div>
  </div> 

  <Accordiontime/>

  <Footer/>
</div>
    );
}

export default Equipe;