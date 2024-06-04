import Background from '../images/hero-ibresp.avif';
import Banner from '../images/banner.avif';
import Navbar from '../Modules/Navbar';

function Home() {
return (
<div>

    <section style={{ background: `url(${Background})`,}} className="flex flex-row bg-cover bg-center bg-no-repeat min-h-screen justify-center">

        <div className="w-full">
            
            <Navbar/>
            
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
        
        <div className="container my-24">

        <a href="https://www.ibresp.com.br/" target="_self">
            <img src={Banner} alt="Banner site" title="Banner site"/>
        </a>

        </div>

    </section>

</div>
);
}

export default Home;
