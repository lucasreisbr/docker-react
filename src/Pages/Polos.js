import React from "react";
import Footer from '../Modules/Footer';
import Accordionpolo from '../Modules/Accordionpolo';

function Polos() {
    return(
<div>

  <div className=" flex flex-row justify-center">

    <div className="container mt-12">
      <h1 className=" text-violet-900 text-4xl font-bold">
          Polos IBRESP 
      </h1>
      <p>Um polo sempre perto de você!</p>

    </div>
  </div> 

  <Accordionpolo/>
  
  <Footer/>

</div>
    );
}

export default Polos;