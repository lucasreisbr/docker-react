import React, { useEffect } from "react";
import Footer from '../Modules/Footer';
import Accordionpolo from '../Modules/Accordionpolo';

function Polos() {

    useEffect(() => {
      document.title = "Locais de Prova em São Paulo, Minas Gerais, Paraná e Pasrá | IBRESP 2024";
      
      // Set meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute("content", "Confira os locais de provas do Ibresp. São mais de 30 locais de provas espalhados pelo Estado de São Paulo, Minas, Paraná e Pará. Confira aqui os endereços.");
      } else {
        const newMetaDescription = document.createElement('meta');
        newMetaDescription.name = "description";
        newMetaDescription.content = "Confira os locais de provas do Ibresp. São mais de 30 locais de provas espalhados pelo Estado de São Paulo, Minas, Paraná e Pará. Confira aqui os endereços.";
        document.head.appendChild(newMetaDescription);
      }
    }, []);

    return(
<div>
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