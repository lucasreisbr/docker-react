import React from 'react';
import logo from '../logo-ibresp.svg';
import logoAbed from '../images/logo-abed.webp'
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaSpotify } from "react-icons/fa6";
import './Footer.css';


export default React.memo(function Footer() {

    return(
    
    <div>
        <section className="flex flex-row justify-center footer-bg">
        
            <div className="w-full">

                <div className='container mx-auto px-3 xl:px-0'>

                    <div className='mt-14 w-full'>
                        <img loading='lazy' width="auto" height="auto" alt="Logo Footer IBRESP" src={logo} className="lg:h-12 md:h-10 h-8" />
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
                            <img loading='lazy' width="auto" height="auto" alt="Logo Abed" src={logoAbed} className='h-40 mt-12 md:mt-0' />
                        </div>

                    </div>

                    <div className='grid justify-items-center py-20'>
                        <div className=' border-b-2 border-cyan-200 border-solid w-2/4 '>
                        </div>
                    </div>
                    


                    <div className=' grid grid-cols-1 lg:grid-cols-3 gap-5 justify-items-center mb-10'>

                        <div className='w-full'>
                            <p className=' text-cyan-400 text-start font-light leading-loose'>
                            <a href='https://www.ibresp.com.br/Curso-TTI-IBRESP/'>Curso Técnico em Transações Imobiliárias</a><br></br>
                            <a href='https://www.ibresp.com.br/curso-de-avaliacao-de-imoveis/'>Curso Avaliação de Imóveis</a><br></br>
                            <a href='https://www.ibresp.com.br/curso-de-documentacao-imobiliaria/'>Curso Documentação Imobiliária</a><br></br>
                            <a href='https://www.ibresp.com.br/curso-de-financiamento-e-credito-imobiliario/'>Curso Financiamento e Crédito Imobiliário</a><br></br>
                            <a href='https://www.ibresp.com.br/curso-captacao-imoveis-na-pratica/'>Curso Captação de Imóveis na Prática</a><br></br>
                            </p>
                        </div>

                        <div className='w-full'>
                            <p className=' text-cyan-400 text-start font-light leading-loose'>
                            <a href='https://www.ibresp.com.br/curso-fotografia-imobiliaria/'>Curso Fotografia Imobiliária</a><br></br>
                            <a href='https://www.ibresp.com.br/curso-de-marketing-imobiliario/'>Curso Marketing Imobiliário</a><br></br> 
                            <a href='https://www.ibresp.com.br/curso-perito-judicial/'>Curso Perito Judicial</a><br></br> 
                            <a href='https://www.ibresp.com.br/curso-tecnicas-de-negociacao-e-vendas/'>Curso Técnicas de Negociação e Vendas</a><br></br>
                            <a href='https://ibresp.com.br/curso-inferencia-estatistica-na-avaliacao-imobiliaria/'>Curso Inferência e Estátistica</a><br></br>
                            </p>
                        </div>


                        <div className='w-full'>
                            <p className=' text-cyan-400 text-start font-light leading-loose'>
                            <a href='https://ibresp.com.br/curso-gestao-de-locacao-de-imoveis/'>Curso Gestão de Locação de Imóveis</a><br></br> 
                            <a href='https://ibresp.com.br/curso-sindico-profissional/'>Curso Síndico Profissional</a><br></br> 
                            <a href='https://ibresp.com.br/curso-administracao-de-condominio/'>Curso Administração de Condomínios</a><br></br> 
                            <a href='https://ibresp.com.br/curso-mercado-imobiliario-digital/'>Curso Tokenização Imobiliária</a><br></br>
                            </p>
                        </div>

                    </div>

                    <div className='flex flex-row justify-center mt-10 gap-6 md:gap-10 lg:gap-12'>

                        <a href='https://www.instagram.com/corretoribresp/' aria-label='Instagram' target='_blank' rel='noreferrer'>
                            <i className="me-1 text-4xl text-cyan-400"> <FaInstagram /> </i>
                        </a>

                        <a href='https://www.youtube.com/CorretorIbresp' aria-label='Youtube' target='_blank' rel='noreferrer'>
                            <i className="me-1 text-4xl text-cyan-400"> <FaYoutube /> </i>
                        </a>

                        <a href='https://www.linkedin.com/company/ibresp/' aria-label='Linkedin' target='_blank' rel='noreferrer'>
                            <i className="me-1 text-4xl text-cyan-400"> <FaLinkedinIn /> </i>
                        </a>

                        <a href='https://www.facebook.com/ibresp' target='_blank' aria-label='Facebook' rel='noreferrer'>
                            <i className="me-1 text-4xl text-cyan-400"> <FaFacebookF /> </i>
                        </a>

                        <a href='https://open.spotify.com/show/3DIoEUI2w1E18wuoK0OEIF?si=4df935ee3ab04790' aria-label='Spotify' target='_blank' rel='noreferrer'>
                            <i className="me-1 text-4xl text-cyan-400"> <FaSpotify /> </i>
                        </a>
                        

                    </div>

                    <p className='text-white text-center pb-7 font-light text-sm'>
                    Copyright © 2024 Ibresp - Todos os direitos reservados
                    </p>

                </div>

            </div>

        </section>
    </div>
);
});