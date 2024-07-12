import logo from '../logo-ibresp.svg';
import logoAbed from '../images/logo-abed.png'
import './Footer.css';


export default function Footer() {

    return(
    
    <div>
        <section className="flex flex-row justify-center footer-bg">
        
            <div className="w-full">

                <div className='container mx-auto px-3 xl:px-0'>

                    <div className='mt-14 w-full'>
                        <img alt="Logo Footer IBRESP" src={logo} className="lg:h-12 md:h-10 h-8" />
                    </div>

                    <div className=' grid grid-cols-1 lg:grid-cols-3 gap-5 justify-items-center mt-16'>

                        <div className='w-full'>
                            <p className=' text-white text-start mb-7'>
                                <b className='text-cyan-400'>São Paulo</b><br></br>
                                Alameda dos Guatas, 659 - Planalto Paulista - SP<br></br>
                                <a href='tel:+551125783652' target='_blank' rel='noreferrer'>(11) 2578-3652</a><br></br>
                                <a href='mailto:comunicacao@ibresp.com.br' target='_blank' rel='noreferrer'>comunicacao@ibresp.com.br</a>
                            </p>
                            <p className=' text-white text-start'>
                                <b className='text-cyan-400'>Minas Gerais</b><br></br>
                                Rua Dom Assis, 66 - Centro - Pouso Alegre - MG<br></br>
                                <a href='tel:+553530228345' target='_blank' rel='noreferrer'>(35) 3022-8345</a><br></br>
                                <a href='mailto:contato@etemg.com.br' target='_blank' rel='noreferrer'>contato@etemg.com.br</a>
                            </p>
                        </div>

                        <div className='w-full'>
                            <p className=' text-white text-start mb-7'>
                                <b className='text-cyan-400'>Pará</b><br></br>
                                Avenida Nazaré, 1319 – Nazaré<br></br>
                                Belém - PA<br></br>
                                {/* <a href='tel:+551125783652' target='_blank' rel='noreferrer'>(11) 2578-3652</a><br></br> */}
                                <a href='mailto:para@ibresp.com.br' target='_blank' rel='noreferrer'>para@ibresp.com.br</a>
                            </p>
                            <p className=' text-white text-start'>
                                <b className='text-cyan-400'>Paraná</b><br></br>
                                Avenida Colombo, 9161 – 1º andar – Shopping Catuí<br></br>
                                Maringá - PR<br></br>
                                {/* <a href='tel:+551125783652' target='_blank' rel='noreferrer'>(11) 2578-3652</a><br></br> */}
                                <a href='mailto:parana@ibresp.com.br' target='_blank' rel='noreferrer'>parana@ibresp.com.br</a>
                            </p>
                        </div>


                        <div className='w-fit place-content-center'>
                            <img alt="Logo Abed" src={logoAbed} className='h-40 mt-12 md:mt-0' />
                        </div>

                    </div>

                    <div className='grid justify-items-center py-20'>
                        <div className=' border-b-2 border-cyan-200 border-solid w-2/4 '>
                        </div>
                    </div>
                    


                    <div className=' grid grid-cols-1 lg:grid-cols-3 gap-5 justify-items-center mb-20'>

                        <div className='w-full'>
                            <p className=' text-cyan-400 text-start font-light leading-loose'>
                            <a href='/home'>Curso Técnico em Transações Imobiliárias</a><br></br>
                            <a href='/home'>Curso Avaliação de Imóveis</a><br></br>
                            <a href='/home'>Curso Documentação Imobiliária</a><br></br>
                            <a href='/home'>Curso Financiamento e Crédito Imobiliário</a><br></br>
                            <a href='/home'>Curso Captação de Imóveis na Prática</a><br></br>
                            </p>
                        </div>

                        <div className='w-full'>
                            <p className=' text-cyan-400 text-start font-light leading-loose'>
                            <a href='/home'>Curso Fotografia Imobiliária</a><br></br>
                            <a href='/home'>Curso Marketing Imobiliário</a><br></br> 
                            <a href='/home'>Curso Perito Judicial</a><br></br> 
                            <a href='/home'>Curso Técnicas de Negociação e Vendas</a><br></br>
                            <a href='/home'>Curso Inferência e Estátistica</a><br></br>
                            </p>
                        </div>


                        <div className='w-full'>
                            <p className=' text-cyan-400 text-start font-light leading-loose'>
                            <a href='/home'>Curso Gestão de Imóvei</a><br></br> 
                            <a href='/home'>Curso Síndico Profissional</a><br></br> 
                            <a href='/home'>Curso Administração de Condomínios</a><br></br> 
                            <a href='/home'>Curso Tokenização Imobiliária</a><br></br>
                            </p>
                        </div>

                    </div>

                </div>

            </div>

        </section>
    </div>
);
}