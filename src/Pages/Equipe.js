import React from "react";
import Footer from '../Modules/Footer';
import Accordiontime from '../Modules/Accordiontime';

function Equipe() {
    return(
<div>

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