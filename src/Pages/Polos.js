import React from "react";
import { Helmet } from "react-helmet";
import Footer from '../Modules/Footer';
import Accordionpolo from '../Modules/Accordionpolo';

function Polos() {
    return(
<div>
      <Helmet>
        <title>Locais de Prova em São Paulo e Minas Gerais | IBRESP</title>
        <meta name="description" content="Confira os locais de provas do Ibresp. São mais de 30 locais de provas espalhados pelo Estado de São Paulo e Minas. Confira aqui os endereços." />
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
      </Helmet>

  <div id="top" className=" flex flex-row justify-center p-3 lg:p-0">

    <div className="container mt-12">
      <h1 className=" text-cyan-700 text-4xl font-bold">
          Polos IBRESP 
      </h1>
      <p>Sempre um lugar perto de você!</p>

    </div>
  </div> 

  <Accordionpolo/>
  
  <Footer/>

</div>
    );
}

export default Polos;