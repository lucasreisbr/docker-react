import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import LGPD from '../images/ibresp-ebook-gratuito-lgpd.webp';
import Direito from '../images/ibresp-ebook-gratuito-direito.webp';
import Guia from '../images/ibresp-ebook-gratuito-guidocorretor.webp';
import Vistoria from '../images/ibresp-ebook-gratuito-vistoria.webp';
import Hospitalidade from '../images/ibresp-ebook-gratuito-hospitalidade.webp';
import Regularizacao from '../images/ibresp-ebook-gratuito-regularizacao.webp';
import Compliance from '../images/ibresp-ebook-gratuito-compliance.webp';
import Luxo from '../images/ibresp-ebook-gratuito-mercadodeluxo.webp';
import Midias from '../images/ibresp-ebook-gratuito-midiassociais.webp';
import Hp12c from '../images/ibresp-ebook-gratuito-hp12c.webp';
import Financiamento from '../images/ibresp-ebook-gratuito-finaciamento.webp';
import Avalion from '../images/ibresp-ebook-gratuito-avalion.webp';
import LGPDSmall from '../images/ibresp-ebook-gratuito-lgpd-small.webp';
import DireitoSmall from '../images/ibresp-ebook-gratuito-direito-small.webp';
import GuiaSmall from '../images/ibresp-ebook-gratuito-guidocorretor-small.webp';
import VistoriaSmall from '../images/ibresp-ebook-gratuito-vistoria-small.webp';
import HospitalidadeSmall from '../images/ibresp-ebook-gratuito-hospitalidade-small.webp';
import RegularizacaoSmall from '../images/ibresp-ebook-gratuito-regularizacao-small.webp';
import ComplianceSmall from '../images/ibresp-ebook-gratuito-compliance-small.webp';
import LuxoSmall from '../images/ibresp-ebook-gratuito-mercadodeluxo-small.webp';
import MidiasSmall from '../images/ibresp-ebook-gratuito-midiassociais-small.webp';
import Hp12cSmall from '../images/ibresp-ebook-gratuito-hp12c-small.webp';
import FinanciamentoSmall from '../images/ibresp-ebook-gratuito-finaciamento-small.webp';
import AvalionSmall from '../images/ibresp-ebook-gratuito-avalion-small.webp';
import './Dotsbook.css';


export default function CarouselBook() {

return(

<div>

<h1 className='text-purple-800 mb-8 text-4xl font-bold px-3 xl:px-0'>
E-books gratuitos
</h1>

<div className="container mx-auto px-3 xl:px-0">

<OwlCarousel className='ebooks owl-theme' autoplay nav loop margin={30}  stagePadding={60} dots={false} responsive= {
    {
        '1':{
            items: 1
        },
        '810': {
            items: 2
        },
        '1025': {
            items: 3
        }
    }
}>
    <div class='item'>
        <img loading='lazy' width="750" height="528" className='rounded-xl shadow-lg mb-5' src={LGPD} srcSet={`${LGPDSmall} 320w, ${LGPDSmall} 680w, ${LGPD}   960w, ${LGPD} 1980w`} alt='LGPD, o que o corretor de imóveis precisa saber?'/>
        <h2 className='my-2 text-2xl font-bold text-purple-800'>LGPD, o que o corretor de imóveis precisa saber?</h2>
        <div className="text-start mt-5">
            <a href="https://www.ibresp.com.br/blogs/2020/ebook-gratuito-lgpd-o-que-o-corretor-de-imoveis-precisa-saber/" target="_self">
                <button className=" bg-purple-800 text-white rounded-md hover:bg-purple-400 hover:text-white hover:scale-110 duration-300 ease-in-out px-4 py-2 mb-14 text-md font-normal">Fazer download</button>
            </a>
        </div>
    </div>

    <div class='item'>
        <img loading='lazy' width="750" height="528" className='rounded-xl shadow-lg mb-5' src={Direito} srcSet={`${DireitoSmall} 320w, ${DireitoSmall} 680w, ${Direito}   960w, ${Direito} 1980w`} alt='Conhecimentos Gerais do Direito Imobiliário'/>
        <h2 className='my-2 text-2xl font-bold text-purple-800'>Conhecimentos gerais do direito imobiliário</h2>
        <div className="text-start mt-5">
            <a href="https://www.ibresp.com.br/blogs/2021/e-book-gratuito-conhecimentos-gerais-do-direito-imobiliario/" target="_self">
                <button className=" bg-purple-800 text-white rounded-md hover:bg-purple-400 hover:text-white hover:scale-110 duration-300 ease-in-out px-4 py-2 mb-14 text-md font-normal">Fazer download</button>
            </a>
        </div>
    </div>

    <div class='item'>
        <img loading='lazy' width="750" height="528" className='rounded-xl shadow-lg mb-5' src={Guia} srcSet={`${GuiaSmall} 320w, ${GuiaSmall} 680w, ${Guia}   960w, ${Guia} 1980w`} alt='Como se tornar um corretor de imóveis'/>
        <h2 className='my-2 text-2xl font-bold text-purple-800'>Como se tornar um corretor de imóveis</h2>
        <div className="text-start mt-5">
            <a href="https://www.ibresp.com.br/blogs/2022/e-book-gratuito-como-se-tornar-um-corretor-de-imoveis/" target="_self">
                <button className=" bg-purple-800 text-white rounded-md hover:bg-purple-400 hover:text-white hover:scale-110 duration-300 ease-in-out px-4 py-2 mb-14 text-md font-normal">Fazer download</button>
            </a>
        </div>
    </div>

    <div class='item'>
        <img loading='lazy' width="750" height="528" className='rounded-xl shadow-lg mb-5' src={Vistoria} srcSet={`${VistoriaSmall} 320w, ${VistoriaSmall} 680w, ${Vistoria}   960w, ${Vistoria} 1980w`} alt='Como realizar uma boa vistoria imobiliária'/>
        <h2 className='my-2 text-2xl font-bold text-purple-800'>Como realizar uma boa vistoria imobiliária</h2>
        <div className="text-start mt-5">
            <a href="https://www.ibresp.com.br/blogs/2022/e-book-gratuito-como-realizar-uma-boa-vistoria-imobiliaria/" target="_self">
                <button className=" bg-purple-800 text-white rounded-md hover:bg-purple-400 hover:text-white hover:scale-110 duration-300 ease-in-out px-4 py-2 mb-14 text-md font-normal">Fazer download</button>
            </a>
        </div>
    </div>

    <div class='item'>
        <img loading='lazy' width="750" height="528" className='rounded-xl shadow-lg mb-5' src={Hospitalidade} srcSet={`${HospitalidadeSmall} 320w, ${HospitalidadeSmall} 680w, ${Hospitalidade}   960w, ${Hospitalidade} 1980w`} alt='Sobre hospitalidade imobiliária'/>
        <h2 className='my-2 text-2xl font-bold text-purple-800'>Sobre hospitalidade imobiliária</h2>
        <div className="text-start mt-5">
            <a href="https://www.ibresp.com.br/blogs/2022/baixe-o-e-book-gratuito-sobre-hospitalidade-imobiliaria/" target="_self">
                <button className=" bg-purple-800 text-white rounded-md hover:bg-purple-400 hover:text-white hover:scale-110 duration-300 ease-in-out px-4 py-2 mb-14 text-md font-normal">Fazer download</button>
            </a>
        </div>
    </div>

    <div class='item'>
        <img loading='lazy' width="750" height="528" className='rounded-xl shadow-lg mb-5' src={Regularizacao} srcSet={`${RegularizacaoSmall} 320w, ${RegularizacaoSmall} 680w, ${Regularizacao}   960w, ${Regularizacao} 1980w`} alt='Regularização de imóveis na prática'/>
        <h2 className='my-2 text-2xl font-bold text-purple-800'>Regularização de imóveis na prática</h2>
        <div className="text-start mt-5">
            <a href="https://www.ibresp.com.br/blogs/2022/e-book-gratuito-sobre-regularizacao-de-imoveis-na-pratica/" target="_self">
                <button className=" bg-purple-800 text-white rounded-md hover:bg-purple-400 hover:text-white hover:scale-110 duration-300 ease-in-out px-4 py-2 mb-14 text-md font-normal">Fazer download</button>
            </a>
        </div>
    </div>

    <div class='item'>
        <img loading='lazy' width="750" height="528" className='rounded-xl shadow-lg mb-5' src={Compliance} srcSet={`${ComplianceSmall} 320w, ${ComplianceSmall} 680w, ${Compliance}   960w, ${Compliance} 1980w`} alt='Compliance para a área imobiliária'/>
        <h2 className='my-2 text-2xl font-bold text-purple-800'>Compliance para a área imobiliária</h2>
        <div className="text-start mt-5">
            <a href="https://www.ibresp.com.br/blogs/2022/baixe-o-e-book-gratuito-compliance-para-a-area-imobiliaria/" target="_self">
                <button className=" bg-purple-800 text-white rounded-md hover:bg-purple-400 hover:text-white hover:scale-110 duration-300 ease-in-out px-4 py-2 mb-14 text-md font-normal">Fazer download</button>
            </a>
        </div>
    </div>

    <div class='item'>
        <img loading='lazy' width="750" height="528" className='rounded-xl shadow-lg mb-5' src={Luxo} srcSet={`${LuxoSmall} 320w, ${LuxoSmall} 680w, ${Luxo}   960w, ${Luxo} 1980w`} alt='Mercado de luxo na área imobiliária'/>
        <h2 className='my-2 text-2xl font-bold text-purple-800'>Mercado de luxo na área imobiliária</h2>
        <div className="text-start mt-5">
            <a href="https://www.ibresp.com.br/blogs/2023/baixe-o-e-book-gratuito-mercado-de-luxo-na-area-imobiliaria/" target="_self">
                <button className=" bg-purple-800 text-white rounded-md hover:bg-purple-400 hover:text-white hover:scale-110 duration-300 ease-in-out px-4 py-2 mb-14 text-md font-normal">Fazer download</button>
            </a>
        </div>
    </div>

    <div class='item'>
        <img loading='lazy' width="750" height="528" className='rounded-xl shadow-lg mb-5' src={Midias} srcSet={`${MidiasSmall} 320w, ${MidiasSmall} 680w, ${Midias}   960w, ${Midias} 1980w`} alt='Mídias sociais para a área imobiliária'/>
        <h2 className='my-2 text-2xl font-bold text-purple-800'>Mídias sociais para a área imobiliária</h2>
        <div className="text-start mt-5">
            <a href="https://www.ibresp.com.br/wp-content/uploads/2023/05/www.ibresp.com.br-ebookmidiassociais.pdf" target="_blank" rel="noreferrer">
                <button className=" bg-purple-800 text-white rounded-md hover:bg-purple-400 hover:text-white hover:scale-110 duration-300 ease-in-out px-4 py-2 mb-14 text-md font-normal">Fazer download</button>
            </a>
        </div>
    </div>

    <div class='item'>
        <img loading='lazy' width="750" height="528" className='rounded-xl shadow-lg mb-5' src={Hp12c} srcSet={`${Hp12cSmall} 320w, ${Hp12cSmall} 680w, ${Hp12c}   960w, ${Hp12c} 1980w`} alt='Práticas com a HP 12c'/>
        <h2 className='my-2 text-2xl font-bold text-purple-800'>Práticas com a HP 12c</h2>
        <div className="text-start mt-5">
            <a href="https://www.ibresp.com.br/wp-content/uploads/2023/05/www.ibresp.com.br-ebookpraticascomahp12c.pdf" target="_self">
                <button className=" bg-purple-800 text-white rounded-md hover:bg-purple-400 hover:text-white hover:scale-110 duration-300 ease-in-out px-4 py-2 mb-14 text-md font-normal">Fazer download</button>
            </a>
        </div>
    </div>

    <div class='item'>
        <img loading='lazy' width="750" height="528" className='rounded-xl shadow-lg mb-5' src={Financiamento} srcSet={`${FinanciamentoSmall} 320w, ${FinanciamentoSmall} 680w, ${Financiamento}   960w, ${Financiamento} 1980w`} alt='Guia prático de financiamento imobiliário'/>
        <h2 className='my-2 text-2xl font-bold text-purple-800'>Guia prático de financiamento imobiliário</h2>
        <div className="text-start mt-5">
            <a href="https://www.ibresp.com.br/blogs/2024/e-book-gratuito-guia-pratico-de-financiamento-imobiliario/" target="_self">
                <button className=" bg-purple-800 text-white rounded-md hover:bg-purple-400 hover:text-white hover:scale-110 duration-300 ease-in-out px-4 py-2 mb-14 text-md font-normal">Fazer download</button>
            </a>
        </div>
    </div>

    <div class='item'>
        <img loading='lazy' width="750" height="528" className='rounded-xl shadow-lg mb-5' src={Avalion} srcSet={`${AvalionSmall} 320w, ${AvalionSmall} 680w, ${AvalionSmall}   960w, ${AvalionSmall} 1980w`} alt='Saiba como captar imóveis de forma efetiva'/>
        <h2 className='my-2 text-2xl font-bold text-purple-800'>Saiba como captar imóveis de forma efetiva</h2>
        <div className="text-start mt-5">
            <a href="https://www.ibresp.com.br/blogs/2024/e-book-gratuito-saiba-como-captar-imoveis-de-forma-efetiva/" target="_self">
                <button className=" bg-purple-800 text-white rounded-md hover:bg-purple-400 hover:text-white hover:scale-110 duration-300 ease-in-out px-4 py-2 mb-14 text-md font-normal">Fazer download</button>
            </a>
        </div>
    </div>

    
</OwlCarousel>

</div>

</div>
    
);
}
