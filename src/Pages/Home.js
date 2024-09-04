import React from 'react';
import Banner from '../images/banner.avif';
import BannerMob from '../images/banner-mob.webp';
import CarouselCourses from '../Modules/CarouselCourses';
import CarouselBook from '../Modules/CarouselBook';
import Vendas from '../images/ibresp-programa-especialista-vendas.webp';
import Locacao from '../images/ibresp-programa-especialista-locacao.webp';
import Captacao from '../images/ibresp-programa-especialista-captacao.webp';
import Avaliacao from '../images/ibresp-programa-especialista-avaliacao.webp';
import VendasSmall from '../images/ibresp-programa-especialista-vendas-small.webp';
import LocacaoSmall from '../images/ibresp-programa-especialista-locacao-small.webp';
import CaptacaoSmall from '../images/ibresp-programa-especialista-captacao-small.webp';
import AvaliacaoSmall from '../images/ibresp-programa-especialista-avaliacao-small.webp';
import Footer from '../Modules/Footer';
import './Home.css';


function Home() {

return (
<div>

    <section className="flex flex-row bg-hero min-h-screen justify-center">
        <div className="w-full">
            <div className='container mx-auto px-3 xl:px-0'>
                <div className='mt-20'>
                    <h1 loading='lazy' className="w-9/12 text-white font-bold text-2xl sm:text-3xl md:text-6xl mb-56">
                        <span className="leading-relaxed">Seja um Corretor de Imóveis com uma grande formação!</span>
                    </h1>
                </div>
                <a href="https://www.ibresp.com.br/Curso-TTI-IBRESP/" target="_self">
                    <button className=" bg-cyan-300 text-cyan-950 rounded-md hover:bg-cyan-950 hover:text-cyan-300 hover:scale-110 duration-300 ease-in-out px-5 py-3 font-bold mb-14 md:mb-2 text-lg"> Saiba mais</button>
                </a>
            </div>
        </div>
    </section>

    <section className="flex flex-row justify-center">
        <div className="container mt-8">
            <CarouselCourses /> 
        </div>
    </section>

    <section className="flex flex-row justify-center">
        <div className="container my-14 desktop px-3 xl:px-0">
            <a href="https://www.ibresp.com.br/" target="_self">
                <img loading='lazy' width="100%" height="auto" src={Banner} alt="Banner site" title="Banner site"/>
            </a>
        </div>

        <div className="container my-14 mobile px-3">
            <a href="https://www.ibresp.com.br/" target="_self">
                <img loading='lazy' width="100%" height="auto" src={BannerMob} alt="Banner site" title="Banner site"/>
            </a>
        </div>
    </section>

    <section className="flex flex-row justify-center">
        <div className="container">
            <h1 className=' text-emerald-600 mb-8 text-4xl font-bold px-3 xl:px-0'>
                Programa educação continuada
            </h1>
        </div>
    </section>

    <section className='container mx-auto px-3 xl:px-0 mb-8'>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-stretch gap-5">
            
            <div>
                <img loading='lazy' width="750" height="528" className='rounded-xl shadow-lg mb-5' src={Vendas} srcSet={`${VendasSmall} 320w, ${VendasSmall} 680w, ${Vendas}   960w, ${Vendas} 1980w`} alt='Especialista em vendas'/>
                <h2 className='my-2 text-2xl font-bold text-emerald-600'>Especialista em vendas</h2>
                <p className='text-gray-600'>
                Saiba utilizar as melhores técnicas de negociação e vendas para se destacar na carreira e conseguir os melhores resultados.
                </p>
                <div className="text-start mt-5">
                    <a href="https://www.ibresp.com.br/especialista/Vendas/" target="_self">
                        <button className=" bg-emerald-800 text-white rounded-md hover:bg-emerald-400 hover:text-white hover:scale-110 duration-300 ease-in-out px-4 py-2 md:mb-2 text-md font-normal mb-4"> Saiba mais</button>
                    </a>
                </div>
            </div>

            <div>
                <img loading='lazy' width="750" height="528" className='rounded-xl shadow-lg mb-5' src={Locacao} srcSet={`${LocacaoSmall} 320w, ${LocacaoSmall} 680w, ${Locacao}   960w, ${Locacao} 1980w`} alt='Especialista em locação'/>
                <h2 className='my-2 text-2xl font-bold text-emerald-600'>Especialista em locação</h2>
                <p className='text-gray-600'>
                Aproveite os benefícios de ser um profissional na área de locação para ampliar seu campo de atuação e aumentar seus ganhos.
                </p>
                <div className="text-start mt-5">
                    <a href="https://www.ibresp.com.br/especialista/Locacao/" target="_self">
                        <button className=" bg-emerald-800 text-white rounded-md hover:bg-emerald-400 hover:text-white hover:scale-110 duration-300 ease-in-out px-4 py-2 md:mb-2 text-md font-normal mb-4"> Saiba mais</button>
                    </a>
                </div>
            </div>

            <div>
                <img loading='lazy' width="750" height="528" className='rounded-xl shadow-lg mb-5' src={Captacao} srcSet={`${CaptacaoSmall} 320w, ${CaptacaoSmall} 680w, ${Captacao}   960w, ${Captacao} 1980w`} alt='Especialista em captação'/>
                <h2 className='my-2 text-2xl font-bold text-emerald-600'>Especialista em captação</h2>
                <p className='text-gray-600'>
                Conquiste uma carreira reconhecida e valorizada no mercado imobiliário atuando em uma área estratégica para fazer mais negócios.
                </p>
                <div className="text-start mt-5">
                    <a href="https://www.ibresp.com.br/especialista/Captacao/" target="_self">
                        <button className=" bg-emerald-800 text-white rounded-md hover:bg-emerald-400 hover:text-white hover:scale-110 duration-300 ease-in-out px-4 py-2 md:mb-2 text-md font-normal mb-4"> Saiba mais</button>
                    </a>
                </div>
            </div>

            <div>
                <img loading='lazy' width="750" height="528" className='rounded-xl shadow-lg mb-5' src={Avaliacao} srcSet={`${AvaliacaoSmall} 320w, ${AvaliacaoSmall} 680w, ${Avaliacao}   960w, ${Avaliacao} 1980w`} alt='Especialista em avaliação'/>
                <h2 className='my-2 text-2xl font-bold text-emerald-600'>Especialista em avaliação</h2>
                <p className='text-gray-600'>
                Aumente o seu campo de atuação sendo um profissional especializado em avaliação de imóveis para aumentar os seus ganhos.
                </p>
                <div className="text-start mt-5">
                    <a href="https://www.ibresp.com.br/especialista/Avaliacao/" target="_self">
                        <button className=" bg-emerald-800 text-white rounded-md hover:bg-emerald-400 hover:text-white hover:scale-110 duration-300 ease-in-out px-4 py-2 md:mb-2 text-md font-normal"> Saiba mais</button>
                    </a>
                </div>
                <div id="biblioteca"></div>
            </div>
        
        </div>
        
    </section>
 
    <section className="flex flex-row justify-center mb-20">
        <div className="container mt-8">
            <CarouselBook /> 
        </div>
    </section>

    <section loading='lazy' className="flex flex-row bg-vantagem min-h-screen justify-cente">

        <div className="w-full">
            <div className='container mx-auto px-3 xl:px-0'>

                <div className=' mt-12 text-center mb-7 md:mb-28 ' >
                    <h2 className="text-white text-4xl">
                            VANTAGENS DE SER UM CORRETOR DE IMÓVEIS
                    </h2>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 justify-items-stretch gap-5 md:gap-36 mb-5 md:mb-20'>

                    <div>
                        <h2 className='my-2 text-3xl font-bold text-orange-400'>Demanda no mercado</h2>
                        <p className='text-white leading-loose'>
                        Segundo o COFECI, para atender a demanda do mercado, o número de corretores deveria ser pelo menos o dobro.
                        </p>
                    </div>
                    
                    <div>
                        <h2 className='my-2 text-3xl font-bold text-orange-400'>Alta remuneração</h2>
                        <p className='text-white leading-loose'>
                        A comissão do corretor pode chegar a 6% do valor do imóvel.Exemplificando, se vender um imóvel de 360 mil reais, sua comissão será de R$ 21.600,00 com apenas uma venda.
                        </p>
                    </div>

                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 justify-items-stretch gap-5 md:gap-36'>

                    <div>
                        <h2 className='my-2 text-3xl font-bold text-orange-400'>Flexibilidade de horário</h2>
                        <p className='text-white leading-loose'>
                        O corretor de imóveis tem uma agenda flexível com horários alternativos e com isso ganha tempo para dar atenção a outras atividades econômicas.
                        </p>
                    </div>

                    <div>
                        <h2 className='my-2 text-3xl font-bold text-orange-400'>Carreira sólida</h2>
                        <p className='text-white leading-loose'>
                        O mercado imobiliário é cheio de oportunidades de crescimento. Se o profissional se dedicar ele consegue construir uma carreira de sucesso no segmento imobiliário.
                        </p>
                    </div>

                </div>

                <div className="text-center my-20">
                    <a href="https://www.ibresp.com.br/Curso-TTI-IBRESP/" target="_self">
                        <button className=" bg-orange-600 text-white rounded-md hover:bg-orange-400 hover:text-white hover:scale-110 duration-300 ease-in-out px-5 py-3 md:mb-2 text-lg font-bold"> Saiba mais</button>
                    </a>
                </div>

            </div>
        </div>

    </section>

    <section loading='lazy' className="bg-destak flex flex-row min-h-screen justify-center">
        
        <div className="w-full">

            <div className='container mx-auto px-3 xl:px-0'>

                <div className='mt-44 mb-20 w-full md:w-1/3'>
                    <p className=' text-cyan-950 text-xl leading-loose '>
                    Ser aluno(a) IBRESP é ter tutoria especializada, cursos gratuitos, informação de qualidade, atendimento exclusivo, descontos e vantagens.
                    </p>
                </div>

                <div className='w-full md:w-1/3 mb-24'>
                    <p className=' text-cyan-950 text-2xl leading-loose '>
                    Tudo para uma formação com destaque no mercado imobiliário. 
                    </p>
                </div>

                <a href="https://www.ibresp.com.br/Curso-TTI-IBRESP/" target="_self">
                    <button className=" bg-cyan-950 text-white rounded-md hover:bg-cyan-300 hover:text-cyan-950 hover:scale-110 duration-300 ease-in-out px-5 py-3 font-bold mb-14 md:mb-2 text-lg"> Saiba mais</button>
                </a>

            </div>

        </div>

    </section>

    <section className="flex flex-row justify-center bg-cyan-300">
        
        <div className="w-full md:w-1/2 p-0">

            <div className='container mx-auto px-3 xl:px-0'>

                <div className=' mt-14 w-full'>
                    <p className=' text-violet-900 text-3xl text-center font-semibold mb-7'>
                    Assine nossa newsletter
                    </p>


                </div>

            </div>

        </div>

    </section>

    <Footer/>


</div>
);
}

export default React.memo(Home);
