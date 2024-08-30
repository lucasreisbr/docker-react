import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import TTI from '../images/ibresp-curso-tti.webp';
import TTISmall from '../images/ibresp-curso-tti-small.webp';
import Avaliacao from '../images/ibresp-curso-avaliacao-de-imoveis.webp';
import AvaliacaoSmall from '../images/ibresp-curso-avaliacao-de-imoveis-small.webp';
import Documentacao from '../images/ibresp-curso-documentacao-imobiliaria.webp';
import DocumentacaoSmall from '../images/ibresp-curso-documentacao-imobiliaria-small.webp';
import Financiamento from '../images/ibresp-curso-financiamento-imobiliario.webp';
import FinanciamentoSmall from '../images/ibresp-curso-financiamento-imobiliario-small.webp';
import Captacao from '../images/ibresp-curso-captacao-de-imoveis-na-pratica.webp';
import CaptacaoSmall from '../images/ibresp-curso-captacao-de-imoveis-na-pratica-small.webp';
import Fotografia from '../images/ibresp-curso-fotografia-imobiliaria.webp';
import FotografiaSmall from '../images/ibresp-curso-fotografia-imobiliaria-small.webp';
import Marketing from '../images/ibresp-curso-marketing-imobiliario.webp';
import MarketingSmall from '../images/ibresp-curso-marketing-imobiliario-small.webp';
import Perito from '../images/ibresp-curso-perito-judicial.webp';
import PeritoSmall from '../images/ibresp-curso-perito-judicial-small.webp';
import Vendas from '../images/ibresp-curso-tecnicas-de-negociacao-e-vendas.webp';
import VendasSmall from '../images/ibresp-programa-especialista-vendas-small.webp';
import Inferencia from '../images/ibresp-curso-inferencia-estatistica.webp';
import InferenciaSmall from '../images/ibresp-curso-inferencia-estatistica-small.webp';
import Locacao from '../images/ibresp-curso-gestao-e-locacao-de-imoveis.webp';
import LocacaoSmall from '../images/ibresp-curso-gestao-e-locacao-de-imoveis-small.webp';
import Sindico from '../images/ibresp-curso-sindico-profissional.webp';
import SindicoSmall from '../images/ibresp-curso-sindico-profissional-small.webp';
import Condominios from '../images/ibresp-curso-administracao-de-condominios.webp';
import CondominiosSmall from '../images/ibresp-curso-administracao-de-condominios-small.webp';
import Token from '../images/ibresp-curso-mercado-digital-imobiliario.webp';
import TokenSmall from '../images/ibresp-curso-mercado-digital-imobiliario-small.webp';
import './Dots.css';


export default function CarouselCourses() {

return(

<div>


<h1 className='text-blue-950 mb-8 text-4xl font-bold px-3 xl:px-0 '>
Cursos IBRESP
</h1>

<div className="container mx-auto px-3 xl:px-0">
<OwlCarousel className='courses owl-theme' autoplay nav loop margin={30}  stagePadding={50} dots={false} responsive= {
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
    
}
>
    <div class='item'>
        <img loading='lazy' width="750" height="528" className='rounded-xl shadow-lg mb-5' src={TTI} srcSet={`${TTISmall} 320w, ${TTISmall} 680w, ${TTI}   960w, ${TTI} 1980w`} alt='curso de TTI'/>
        <h2 className='my-2 text-2xl font-bold text-blue-950'>Curso TTI</h2>
        <p className='text-gray-600'>
        O curso de TTI prepara o profissional a atender com qualidade uma demanda existente no mercado imobiliário. Realizado na modalidade a distância, garante flexibilidade total aos alunos, permitindo a escolha dos horários e locais de estudo.
        </p>
        <div className="text-start mt-5">
            <a href="https://www.ibresp.com.br/Curso-TTI-IBRESP/" target="_self">
                <button className=" bg-cyan-950 text-white rounded-md hover:bg-cyan-300 hover:text-white hover:scale-110 duration-300 ease-in-out px-4 py-2 mb-14 text-md font-normal"> Saiba mais</button>
            </a>
        </div>
    </div>

    <div class='item'>
        <img loading='lazy' width="750" height="528" className='rounded-xl shadow-lg mb-5' src={Avaliacao} srcSet={`${AvaliacaoSmall} 320w, ${AvaliacaoSmall} 680w, ${Avaliacao}   960w, ${Avaliacao} 1980w`} alt='curso de Avaliação de Imóveis'/>
        <h2 className='my-2 text-2xl font-bold text-blue-950'>Avaliação de imóveis</h2>
        <p className='text-gray-600'>
        O curso de Avaliação de Imóveis capacita profissionais do mercado imobiliário e áreas afins a obterem conhecimento de avaliações imobiliárias mercadológica para emissão de parecer competente (PTAM).
        </p>
        <div className="text-start mt-5">
            <a href="https://www.ibresp.com.br/curso-de-avaliacao-de-imoveis-em-sao-paulo/" target="_self">
                <button className=" bg-cyan-950 text-white rounded-md hover:bg-cyan-300 hover:text-white hover:scale-110 duration-300 ease-in-out px-4 py-2 mb-14 text-md font-normal"> Saiba mais</button>
            </a>
        </div>
    </div>

    <div class='item'>
        <img loading='lazy' width="750" height="528" className='rounded-xl shadow-lg mb-5' src={Documentacao} srcSet={`${DocumentacaoSmall} 320w, ${DocumentacaoSmall} 680w, ${Documentacao}   960w, ${Documentacao} 1980w`} alt='curso de Documentação Imobiliária'/>
        <h2 className='my-2 text-2xl font-bold text-blue-950'>Documentação imobiliária</h2>
        <p className='text-gray-600'>
        O curso de Documentação Imobiliária capacita profissionais do mercado imobiliário e áreas afins a obterem conhecimento sobre a documentação que envolve a transação imobiliária. Não há nota mínima para aprovação.
        </p>
        <div className="text-start mt-5">
            <a href="https://www.ibresp.com.br/curso-documentacao-imobiliaria/" target="_self">
                <button className=" bg-cyan-950 text-white rounded-md hover:bg-cyan-300 hover:text-white hover:scale-110 duration-300 ease-in-out px-4 py-2 mb-14 text-md font-normal"> Saiba mais</button>
            </a>
        </div>
    </div>

    <div class='item'>
        <img loading='lazy' width="750" height="528" className='rounded-xl shadow-lg mb-5' src={Financiamento} srcSet={`${FinanciamentoSmall} 320w, ${FinanciamentoSmall} 680w, ${Financiamento}   960w, ${Financiamento} 1980w`} alt='Financiamento e crédito imobiliário'/>
        <h2 className='my-2 text-2xl font-bold text-blue-950'>Financiamento e crédito imobiliário</h2>
        <p className='text-gray-600'>
        O curso proporciona conhecimentos sobre as formas de financiamento e crédito imobiliário capacitando a oferecer as melhores alternativas aos clientes para que possam adquirir imóveis de forma consciente.
        </p>
        <div className="text-start mt-5">
            <a href="https://www.ibresp.com.br/curso-financiamento-e-credito-imobiliario/" target="_self">
                <button className=" bg-cyan-950 text-white rounded-md hover:bg-cyan-300 hover:text-white hover:scale-110 duration-300 ease-in-out px-4 py-2 mb-14 text-md font-normal"> Saiba mais</button>
            </a>
        </div>
    </div>

    <div class='item'>
        <img loading='lazy' width="750" height="528" className='rounded-xl shadow-lg mb-5' src={Captacao} srcSet={`${CaptacaoSmall} 320w, ${CaptacaoSmall} 680w, ${Captacao}   960w, ${Captacao} 1980w`} alt='Captação de Imóveis na Prática'/>
        <h2 className='my-2 text-2xl font-bold text-blue-950'>Captação de Imóveis na Prática</h2>
        <p className='text-gray-600'>
        Este curso tem como objetivo principal proporcionar ao profissional que atua no ramo imobiliário, entender de fato o que é captação de imóveis e o papel do corretor.
        </p>
        <div className="text-start mt-5">
            <a href="https://www.ibresp.com.br/curso-captacao-de-imoveis-na-pratica/" target="_self">
                <button className=" bg-cyan-950 text-white rounded-md hover:bg-cyan-300 hover:text-white hover:scale-110 duration-300 ease-in-out px-4 py-2 mb-14 text-md font-normal"> Saiba mais</button>
            </a>
        </div>
    </div>

    <div class='item'>
        <img loading='lazy' width="750" height="528" className='rounded-xl shadow-lg mb-5' src={Fotografia} srcSet={`${FotografiaSmall} 320w, ${FotografiaSmall} 680w, ${Fotografia}   960w, ${Fotografia} 1980w`} alt='Fotografia Imobiliária: Clicks e Técnicas'/>
        <h2 className='my-2 text-2xl font-bold text-blue-950'>Fotografia Imobiliária: Clicks e Técnicas</h2>
        <p className='text-gray-600'>
        Esse curso foi elaborado para corretores(as), que buscam produzir melhores fotos de seus agenciamentos, para conseguir maior destaque nos portais imobiliários.
        </p> 
        <div className="text-start mt-5">
            <a href="https://www.ibresp.com.br/curso-de-fotografia-imobiliaria/" target="_self">
                <button className=" bg-cyan-950 text-white rounded-md hover:bg-cyan-300 hover:text-white hover:scale-110 duration-300 ease-in-out px-4 py-2 mb-14 text-md font-normal"> Saiba mais</button>
            </a>
        </div>
    </div>

    <div class='item'>
        <img loading='lazy' width="750" height="528" className='rounded-xl shadow-lg mb-5' src={Marketing} srcSet={`${MarketingSmall} 320w, ${MarketingSmall} 680w, ${Marketing}   960w, ${Marketing} 1980w`} alt='Marketing Imobiliário'/>
        <h2 className='my-2 text-2xl font-bold text-blue-950'>Marketing Imobiliário</h2>
        <p className='text-gray-600'>
        O curso tem como objetivo principal proporcionar ao profissional que atua no ramo imobiliário, conhecimentos sobre conceitos, técnicas e práticas de marketing imobiliário na era digital, além de fornecer ferramentas para alavancar seus negócios.
        </p>
        <div className="text-start mt-5">
            <a href="https://www.ibresp.com.br/curso-marketing-imobiliario/" target="_self">
                <button className=" bg-cyan-950 text-white rounded-md hover:bg-cyan-300 hover:text-white hover:scale-110 duration-300 ease-in-out px-4 py-2 mb-14 text-md font-normal"> Saiba mais</button>
            </a>
        </div>
    </div>

    <div class='item'>
        <img loading='lazy' width="750" height="528" className='rounded-xl shadow-lg mb-5' src={Perito} srcSet={`${PeritoSmall} 320w, ${PeritoSmall} 680w, ${Perito}   960w, ${Perito} 1980w`} alt='Perito Judicial'/>
        <h2 className='my-2 text-2xl font-bold text-blue-950'>Perito Judicial</h2>
        <p className='text-gray-600'>
        Quer saber como ser nomeado por um juiz para realizar avaliações imobiliárias? No curso Ser Perito para Corretores de Imóveis do IBRESP você vai aprender a atuar com Perito Judicial e a elaborar um Laudo Pericial impecável entre outras questões.
        </p>
        <div className="text-start mt-5">
            <a href="https://www.ibresp.com.br/curso-perito-judicial/" target="_self">
                <button className=" bg-cyan-950 text-white rounded-md hover:bg-cyan-300 hover:text-white hover:scale-110 duration-300 ease-in-out px-4 py-2 mb-14 text-md font-normal"> Saiba mais</button>
            </a>
        </div>
    </div>

    <div class='item'>
        <img loading='lazy' width="750" height="528" className='rounded-xl shadow-lg mb-5' src={Vendas} srcSet={`${VendasSmall} 320w, ${VendasSmall} 680w, ${Vendas}   960w, ${Vendas} 1980w`} alt='Técnicas de Negociação e Vendas'/>
        <h2 className='my-2 text-2xl font-bold text-blue-950'>Técnicas de Negociação e Vendas</h2>
        <p className='text-gray-600'>
        Inscreva-se no curso Técnicas de Negociação e Vendas para o Mercado Imobiliário e aprenda de forma prática, técnicas de negociação e vendas para aplicar no seu dia a dia e conseguir melhores resultados.
        </p>
        <div className="text-start mt-5">
            <a href="https://www.ibresp.com.br/curso-tecnicas-de-negociacao-e-vendas/" target="_self">
                <button className=" bg-cyan-950 text-white rounded-md hover:bg-cyan-300 hover:text-white hover:scale-110 duration-300 ease-in-out px-4 py-2 mb-14 text-md font-normal"> Saiba mais</button>
            </a>
        </div>
    </div>

    <div class='item'>
        <img loading='lazy' width="750" height="528" className='rounded-xl shadow-lg mb-5' src={Inferencia} srcSet={`${InferenciaSmall} 320w, ${InferenciaSmall} 680w, ${Inferencia}   960w, ${Inferencia} 1980w`} alt='Inferência Estatística'/>
        <h2 className='my-2 text-2xl font-bold text-blue-950'>Inferência Estatística</h2>
        <p className='text-gray-600'>
        A Inferência Estatística é uma metodologia sofisticada e muito valorizada no mercado imobiliário por utilizar conceitos, cálculos e análises de dados para a conclusão de um estudo, laudo ou parecer técnico.
        </p>
        <div className="text-start mt-5">
            <a href="https://ibresp.com.br/curso-inferencia-estatistica-na-avaliacao-imobiliaria/" target="_self">
                <button className=" bg-cyan-950 text-white rounded-md hover:bg-cyan-300 hover:text-white hover:scale-110 duration-300 ease-in-out px-4 py-2 mb-14 text-md font-normal"> Saiba mais</button>
            </a>
        </div>
    </div>

    <div class='item'>
        <img loading='lazy' width="750" height="528" className='rounded-xl shadow-lg mb-5' src={Locacao} srcSet={`${LocacaoSmall} 320w, ${LocacaoSmall} 680w, ${Locacao}   960w, ${Locacao} 1980w`} alt='Gestão de Locação de Imóveis'/>
        <h2 className='my-2 text-2xl font-bold text-blue-950'>Gestão de Locação de Imóveis</h2>
        <p className='text-gray-600'>
        Aprenda a administração da locação, principais artigos da Lei do Inquilinato, operações e procedimentos das suas atividades imobiliárias, princípios legais e administrativos mais importantes.
        </p>
        <div className="text-start mt-5">
            <a href="https://ibresp.com.br/curso-gestao-de-locacao-de-imoveis/" target="_self">
                <button className=" bg-cyan-950 text-white rounded-md hover:bg-cyan-300 hover:text-white hover:scale-110 duration-300 ease-in-out px-4 py-2 mb-14 text-md font-normal"> Saiba mais</button>
            </a>
        </div>
    </div>

    <div class='item'>
        <img loading='lazy' className='rounded-xl shadow-lg mb-5' src={Sindico} srcSet={`${SindicoSmall} 320w, ${SindicoSmall} 680w, ${Sindico}   960w, ${Sindico} 1980w`} alt='Síndico Profissional'/>
        <h2 className='my-2 text-2xl font-bold text-blue-950'>Síndico Profissional</h2>
        <p className='text-gray-600'>
        Aprenda todos os assuntos pertinentes à Sindicância, desde a área de engenharia, relacionamento humano, prestação de serviço, noções jurídicas, documentação, saúde e sustentabilidade.
        </p>
        <div className="text-start mt-5">
            <a href="https://ibresp.com.br/curso-sindico-profissional/" target="_self">
                <button className=" bg-cyan-950 text-white rounded-md hover:bg-cyan-300 hover:text-white hover:scale-110 duration-300 ease-in-out px-4 py-2 mb-14 text-md font-normal"> Saiba mais</button>
            </a>
        </div>
    </div>

    <div class='item'>
        <img loading='lazy' width="750" height="528" className='rounded-xl shadow-lg mb-5' src={Condominios} srcSet={`${CondominiosSmall} 320w, ${CondominiosSmall} 680w, ${Condominios}   960w, ${Condominios} 1980w`} alt='Administração de Condomínios'/>
        <h2 className='my-2 text-2xl font-bold text-blue-950'>Administração de Condomínios</h2>
        <p className='text-gray-600'>
        O curso aborda os assuntos relevantes para uma boa administração como gestão, contabilidade, jurídico, documentação, relacionamento de pessoas, equipe de trabalho, obras e manutenções.
        </p>
        <div className="text-start mt-5">
            <a href="https://ibresp.com.br/curso-administracao-de-condominio/" target="_self">
                <button className=" bg-cyan-950 text-white rounded-md hover:bg-cyan-300 hover:text-white hover:scale-110 duration-300 ease-in-out px-4 py-2 mb-14 text-md font-normal"> Saiba mais</button>
            </a>
        </div>
    </div>

    <div class='item'>
        <img loading='lazy' width="750" height="528" className='rounded-xl shadow-lg mb-5' src={Token} srcSet={`${TokenSmall} 320w, ${TokenSmall} 680w, ${Token}   960w, ${Token} 1980w`} alt='Mercado Imobiliário Digital'/>
        <h2 className='my-2 text-2xl font-bold text-blue-950'>Mercado Imobiliário Digital</h2>
        <p className='text-gray-600'>
        Você será um dos primeiros corretores imobiliários do Brasil a ter acesso a esse tipo de informação, que o tornará protagonista da revolução do maior mercado do mundo, o mercado imobiliário.
        </p>
        <div className="text-start mt-5">
            <a href="https://ibresp.com.br/curso-mercado-imobiliario-digital/" target="_self">
                <button className=" bg-cyan-950 text-white rounded-md hover:bg-cyan-300 hover:text-white hover:scale-110 duration-300 ease-in-out px-4 py-2 mb-14 text-md font-normal"> Saiba mais</button>
            </a>
        </div>
    </div>
    
</OwlCarousel>

</div>

</div>
    
);
}
