import React from "react";
import Footer from '../Modules/Footer';
import Accordionpolo from '../Modules/Accordionpolo';

function Polos() {
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