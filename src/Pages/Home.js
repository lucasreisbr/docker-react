import Background from '../images/hero-ibresp.avif';
import Banner from '../images/banner.avif';
import BannerMob from '../images/banner-mob.webp';
import CarouselCourses from '../Modules/CarouselCourses';
import Vendas from '../images/ibresp-programa-especialista-vendas.webp';
import Locacao from '../images/ibresp-programa-especialista-locacao.webp';
import Captacao from '../images/ibresp-programa-especialista-captacao.webp';
import Avaliacao from '../images/ibresp-programa-especialista-avaliacao.webp';


import './Home.css';

function Home() {
return (
<div>

    <section style={{ background: `url(${Background})`,}} className="flex flex-row bg-cover bg-center bg-no-repeat min-h-screen justify-center">
        <div className="w-full">
            <div className='lg:container xl:container mx-auto px-3'>
                <div className=' mt-44 ' >
                    <h1 className="w-9/12 text-white font-bold text-3xl sm:text-4xl md:text-6xl mb-44 ">
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
        <div className="container my-14 desktop">
            <a href="https://www.ibresp.com.br/" target="_self">
                <img src={Banner} alt="Banner site" title="Banner site"/>
            </a>
        </div>

        <div className="container my-14 mobile px-3">
            <a href="https://www.ibresp.com.br/" target="_self">
                <img src={BannerMob} alt="Banner site" title="Banner site"/>
            </a>
        </div>
    </section>

    <section className="flex flex-row justify-center">
        <div className="container">
            <h1 className=' text-orange-400 mb-8 text-4xl font-bold px-3 lg:px-0'>
                Programa educação continuada
            </h1>
        </div>
    </section>

<section className='container mx-auto px-3 lg:px-0'>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-stretch gap-5 mb-40">
        
        <div>
            <img width='auto' height='auto' className='rounded-xl shadow-lg mb-5' src={Vendas} alt='Especialista em vendas'/>
            <h2 className='my-2 text-2xl font-bold text-orange-400'>Especialista em vendas</h2>
            <p className='text-gray-600'>
            Saiba utilizar as melhores técnicas de negociação e vendas para se destacar na carreira e conseguir os melhores resultados.
            </p>
            <div className="text-start mt-5">
                <a href="https://www.ibresp.com.br/especialista/Vendas/" target="_self">
                    <button className=" bg-orange-400 text-white rounded-md hover:bg-orange-600 hover:text-white hover:scale-110 duration-300 ease-in-out px-4 py-2 mb-14 md:mb-2 text-md font-normal"> Saiba mais</button>
                </a>
            </div>
        </div>

        <div>
            <img width='auto' height='auto' className='rounded-xl shadow-lg mb-5' src={Locacao} alt='Especialista em locação'/>
            <h2 className='my-2 text-2xl font-bold text-orange-400'>Especialista em locação</h2>
            <p className='text-gray-600'>
            Aproveite os benefícios de ser um profissional na área de locação para ampliar seu campo de atuação e aumentar seus ganhos.
            </p>
            <div className="text-start mt-5">
                <a href="https://www.ibresp.com.br/especialista/Locacao/" target="_self">
                    <button className=" bg-orange-400 text-white rounded-md hover:bg-orange-600 hover:text-white hover:scale-110 duration-300 ease-in-out px-4 py-2 mb-14 md:mb-2 text-md font-normal"> Saiba mais</button>
                </a>
            </div>
        </div>

        <div>
            <img width='auto' height='auto' className='rounded-xl shadow-lg mb-5' src={Captacao} alt='Especialista em captação'/>
            <h2 className='my-2 text-2xl font-bold text-orange-400'>Especialista em captação</h2>
            <p className='text-gray-600'>
            Conquiste uma carreira reconhecida e valorizada no mercado imobiliário atuando em uma área estratégica para fazer mais negócios.
            </p>
            <div className="text-start mt-5">
                <a href="https://www.ibresp.com.br/especialista/Captacao/" target="_self">
                    <button className=" bg-orange-400 text-white rounded-md hover:bg-orange-600 hover:text-white hover:scale-110 duration-300 ease-in-out px-4 py-2 mb-14 md:mb-2 text-md font-normal"> Saiba mais</button>
                </a>
            </div>
        </div>

        <div>
            <img width='auto' height='auto' className='rounded-xl shadow-lg mb-5' src={Avaliacao} alt='Especialista em avaliação'/>
            <h2 className='my-2 text-2xl font-bold text-orange-400'>Especialista em avaliação</h2>
            <p className='text-gray-600'>
            Aumente o seu campo de atuação sendo um profissional especializado em avaliação de imóveis para aumentar os seus ganhos.
            </p>
            <div className="text-start mt-5">
                <a href="https://www.ibresp.com.br/especialista/Avaliacao/" target="_self">
                    <button className=" bg-orange-400 text-white rounded-md hover:bg-orange-600 hover:text-white hover:scale-110 duration-300 ease-in-out px-4 py-2 mb-14 md:mb-2 text-md font-normal"> Saiba mais</button>
                </a>
            </div>
        </div>

    </div>

</section>


</div>
);
}

export default Home;
