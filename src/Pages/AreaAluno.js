import React from "react";
import Footer from '../Modules/Footer';
import Accordionclass from '../Modules/Accordionclass';
import { ImWhatsapp } from "react-icons/im";

function Alunos() {
    return(
<div>

    <section className="flex flex-row min-h-screen justify-center bg-class">
        <div className="w-full">
            <div className='container mx-auto px-3 xl:px-0 w-full'>
                <div className='mt-44 mb-32'>
                    <h1 className="text-blue-950 font-bold text-3xl lg:text-5xl mb-3">
                    Área do aluno(a) IBRESP
                    </h1>
                    <p className="text-white text-xl lg:text-2xl mb-32">
                    Outras dúvidas e Relatório de Estágio estão abaixo
                    </p>

                    <h2 className="text-blue-950 font-bold text-2xl lg:text-3xl mb-3">
                    Ambientação,
                    <br></br>
                    Ambiente Virtual de Aprendizagem - AVA
                    </h2>
                </div>
                <a href="https://www.ibresp.com.br/wp-content/uploads/2021/03/www.ibresp.com.br-manual-acesso-ava.pdf" target="_self">
                    <button className=" bg-purple-700 text-white rounded-md hover:bg-purple-300 hover:text-purple-950 hover:scale-110 duration-300 ease-in-out px-5 py-3 font-bold mb-14 md:mb-2 text-lg me-12">Manual AVA</button>
                </a>

                <a href="https://www.ibresp.com.br/cursos-gratuitos" target="_self">
                    <button className=" bg-orange-400 text-white rounded-md hover:bg-orange-200 hover:text-orange-900 hover:scale-110 duration-300 ease-in-out px-5 py-3 font-bold mb-14 md:mb-2 text-lg">Cursos gratuitos</button>
                </a>
            </div>
        </div>
    </section>

    <div className=" flex flex-row justify-center p-3 lg:p-0">

    <div className="container mt-12 mb-5">
    <h1 className=" text-orange-400 text-3xl md:text-4xl font-bold">
    Informações importantes para o curso
    </h1>
    </div>
</div> 

    <Accordionclass/>

    <div className="flex flex-row justify-center mb-40">
        <a href="https://wa.me/5511991949033?text=Olá,%20estou%20no%20site%20do%20Ibresp%20e%20preciso%20de%20ajuda." target="_blank" rel="noreferrer">
            <button className=" bg-emerald-600 text-white rounded-md hover:bg-emerald-200 hover:text-emerald-900 hover:scale-110 duration-300 ease-in-out px-7 py-5 font-bold text-2xl"><i className=" float-start me-2 text-3xl"><ImWhatsapp /></i>Chamar atendimento</button>
        </a>
    </div>

<Footer/>

</div>
    );
}

export default Alunos;