import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import TTI from '../images/ibresp-curso-tti.webp';
import Avaliacao from '../images/ibresp-curso-avaliacao-de-imoveis.webp';
import Documentacao from '../images/ibresp-curso-documentacao-imobiliaria.webp';
import Financiamento from '../images/ibresp-curso-financiamento-imobiliario.webp';
import Captacao from '../images/ibresp-curso-captacao-de-imoveis-na-pratica.webp';
import Fotografia from '../images/ibresp-curso-fotografia-imobiliaria.webp';
import Marketing from '../images/ibresp-curso-marketing-imobiliario.webp';
import Perito from '../images/ibresp-curso-perito-judicial.webp';
import Vendas from '../images/ibresp-curso-tecnicas-de-negociacao-e-vendas.webp';
import Inferencia from '../images/ibresp-curso-inferencia-estatistica.webp';
import Locacao from '../images/ibresp-curso-gestao-e-locacao-de-imoveis.webp';
import Sindico from '../images/ibresp-curso-sindico-profissional.webp';
import Condominios from '../images/ibresp-curso-administracao-de-condominios.webp';
import Token from '../images/ibresp-curso-mercado-digital-imobiliario.webp';
import './Dots.css';


export default function CarouselCourses() {

return(

<div>


<h1 className='text-blue-950 mb-8 text-4xl font-bold px-3 xl:px-0 '>
Cursos IBRESP
</h1>

<div className="container mx-auto px-3 xl:px-0">
<OwlCarousel className='courses owl-theme' autoplay loop margin={30}  stagePadding={50} responsive= {
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
        <img loading='lazy' width="750" height="528" className='rounded-xl shadow-lg mb-5' src={TTI} alt='curso de TTI'/>
        <h2 className='my-2 text-2xl font-bold text-blue-950'>Curso TTI</h2>
        <p className='text-gray-600'>
        O curso de TTI prepara o profissional a atender com qualidade uma demanda existente no mercado imobiliário. Realizado na modalidade a distância, garante flexibilidade total aos alunos, permitindo a escolha dos horários e locais de estudo.
        </p>
        <div className="text-start mt-5">
            <a href="https://www.ibresp.com.br/Curso-TTI-IBRESP/" target="_self">
                <button className=" bg-cyan-950 text-white rounded-md hover:bg-cyan-300 hover:text-white hover:scale-110 duration-300 ease-in-out px-4 py-2 mb-28 text-md font-normal"> Saiba mais</button>
            </a>
        </div>
    </div>

    <div class='item'>
        <img loading='lazy' width="750" height="528" className='rounded-xl shadow-lg mb-5' src={Avaliacao} alt='curso de Avaliação de Imóveis'/>
        <h2 className='my-2 text-2xl font-bold text-blue-950'>Avaliação de imóveis</h2>
        <p className='text-gray-600'>
        O curso de Avaliação de Imóveis capacita profissionais do mercado imobiliário e áreas afins a obterem conhecimento de avaliações imobiliárias mercadológica para emissão de parecer competente (PTAM).
        </p>
        <div className="text-start mt-5">
            <a href="https://www.ibresp.com.br/curso-de-avaliacao-de-imoveis-em-sao-paulo/" target="_self">
                <button className=" bg-cyan-950 text-white rounded-md hover:bg-cyan-300 hover:text-white hover:scale-110 duration-300 ease-in-out px-4 py-2 mb-28 text-md font-normal"> Saiba mais</button>
            </a>
        </div>
    </div>

    <div class='item'>
        <img loading='lazy' width="750" height="528" className='rounded-xl shadow-lg mb-5' src={Documentacao} alt='curso de Documentação Imobiliária'/>
        <h2 className='my-2 text-2xl font-bold text-blue-950'>Documentação imobiliária</h2>
        <p className='text-gray-600'>
        O curso de Documentação Imobiliária capacita profissionais do mercado imobiliário e áreas afins a obterem conhecimento sobre a documentação que envolve a transação imobiliária. Não há nota mínima para aprovação.
        </p>
        <div className="text-start mt-5">
            <a href="https://www.ibresp.com.br/curso-documentacao-imobiliaria/" target="_self">
                <button className=" bg-cyan-950 text-white rounded-md hover:bg-cyan-300 hover:text-white hover:scale-110 duration-300 ease-in-out px-4 py-2 mb-28 text-md font-normal"> Saiba mais</button>
            </a>
        </div>
    </div>

    <div class='item'>
        <img loading='lazy' width="750" height="528" className='rounded-xl shadow-lg mb-5' src={Financiamento} alt='Financiamento e crédito imobiliário'/>
        <h2 className='my-2 text-2xl font-bold text-blue-950'>Financiamento e crédito imobiliário</h2>
        <p className='text-gray-600'>
        O curso proporciona conhecimentos sobre as formas de financiamento e crédito imobiliário capacitando a oferecer as melhores alternativas aos clientes para que possam adquirir imóveis de forma consciente.
        </p>
        <div className="text-start mt-5">
            <a href="https://www.ibresp.com.br/curso-financiamento-e-credito-imobiliario/" target="_self">
                <button className=" bg-cyan-950 text-white rounded-md hover:bg-cyan-300 hover:text-white hover:scale-110 duration-300 ease-in-out px-4 py-2 mb-28 text-md font-normal"> Saiba mais</button>
            </a>
        </div>
    </div>

    <div class='item'>
        <img loading='lazy' width="750" height="528" className='rounded-xl shadow-lg mb-5' src={Captacao} alt='Captação de Imóveis na Prática'/>
        <h2 className='my-2 text-2xl font-bold text-blue-950'>Captação de Imóveis na Prática</h2>
        <p className='text-gray-600'>
        Este curso tem como objetivo principal proporcionar ao profissional que atua no ramo imobiliário, entender de fato o que é captação de imóveis e o papel do corretor.
        </p>
        <div className="text-start mt-5">
            <a href="https://www.ibresp.com.br/curso-captacao-de-imoveis-na-pratica/" target="_self">
                <button className=" bg-cyan-950 text-white rounded-md hover:bg-cyan-300 hover:text-white hover:scale-110 duration-300 ease-in-out px-4 py-2 mb-28 text-md font-normal"> Saiba mais</button>
            </a>
        </div>
    </div>

    <div class='item'>
        <img loading='lazy' width="750" height="528" className='rounded-xl shadow-lg mb-5' src={Fotografia} alt='Fotografia Imobiliária: Clicks e Técnicas'/>
        <h2 className='my-2 text-2xl font-bold text-blue-950'>Fotografia Imobiliária: Clicks e Técnicas</h2>
        <p className='text-gray-600'>
        Esse curso foi elaborado para corretores(as), que buscam produzir melhores fotos de seus agenciamentos, para conseguir maior destaque nos portais imobiliários.
        </p> 
        <div className="text-start mt-5">
            <a href="https://www.ibresp.com.br/curso-de-fotografia-imobiliaria/" target="_self">
                <button className=" bg-cyan-950 text-white rounded-md hover:bg-cyan-300 hover:text-white hover:scale-110 duration-300 ease-in-out px-4 py-2 mb-28 text-md font-normal"> Saiba mais</button>
            </a>
        </div>
    </div>

    <div class='item'>
        <img loading='lazy' width="750" height="528" className='rounded-xl shadow-lg mb-5' src={Marketing} alt='Marketing Imobiliário'/>
        <h2 className='my-2 text-2xl font-bold text-blue-950'>Marketing Imobiliário</h2>
        <p className='text-gray-600'>
        O curso tem como objetivo principal proporcionar ao profissional que atua no ramo imobiliário, conhecimentos sobre conceitos, técnicas e práticas de marketing imobiliário na era digital, além de fornecer ferramentas para alavancar seus negócios.
        </p>
        <div className="text-start mt-5">
            <a href="https://www.ibresp.com.br/curso-marketing-imobiliario/" target="_self">
                <button className=" bg-cyan-950 text-white rounded-md hover:bg-cyan-300 hover:text-white hover:scale-110 duration-300 ease-in-out px-4 py-2 mb-28 text-md font-normal"> Saiba mais</button>
            </a>
        </div>
    </div>

    <div class='item'>
        <img loading='lazy' width="750" height="528" className='rounded-xl shadow-lg mb-5' src={Perito} alt='Perito Judicial'/>
        <h2 className='my-2 text-2xl font-bold text-blue-950'>Perito Judicial</h2>
        <p className='text-gray-600'>
        Quer saber como ser nomeado por um juiz para realizar avaliações imobiliárias? No curso Ser Perito para Corretores de Imóveis do IBRESP você vai aprender a atuar com Perito Judicial e a elaborar um Laudo Pericial impecável entre outras questões.
        </p>
        <div className="text-start mt-5">
            <a href="https://www.ibresp.com.br/curso-perito-judicial/" target="_self">
                <button className=" bg-cyan-950 text-white rounded-md hover:bg-cyan-300 hover:text-white hover:scale-110 duration-300 ease-in-out px-4 py-2 mb-28 text-md font-normal"> Saiba mais</button>
            </a>
        </div>
    </div>

    <div class='item'>
        <img loading='lazy' width="750" height="528" className='rounded-xl shadow-lg mb-5' src={Vendas} alt='Técnicas de Negociação e Vendas'/>
        <h2 className='my-2 text-2xl font-bold text-blue-950'>Técnicas de Negociação e Vendas</h2>
        <p className='text-gray-600'>
        Inscreva-se no curso Técnicas de Negociação e Vendas para o Mercado Imobiliário e aprenda de forma prática, técnicas de negociação e vendas para aplicar no seu dia a dia e conseguir melhores resultados.
        </p>
        <div className="text-start mt-5">
            <a href="https://www.ibresp.com.br/curso-tecnicas-de-negociacao-e-vendas/" target="_self">
                <button className=" bg-cyan-950 text-white rounded-md hover:bg-cyan-300 hover:text-white hover:scale-110 duration-300 ease-in-out px-4 py-2 mb-28 text-md font-normal"> Saiba mais</button>
            </a>
        </div>
    </div>

    <div class='item'>
        <img loading='lazy' width="750" height="528" className='rounded-xl shadow-lg mb-5' src={Inferencia} alt='Inferência Estatística'/>
        <h2 className='my-2 text-2xl font-bold text-blue-950'>Inferência Estatística</h2>
        <p className='text-gray-600'>
        A Inferência Estatística é uma metodologia sofisticada e muito valorizada no mercado imobiliário por utilizar conceitos, cálculos e análises de dados para a conclusão de um estudo, laudo ou parecer técnico.
        </p>
        <div className="text-start mt-5">
            <a href="https://ibresp.com.br/curso-inferencia-estatistica-na-avaliacao-imobiliaria/" target="_self">
                <button className=" bg-cyan-950 text-white rounded-md hover:bg-cyan-300 hover:text-white hover:scale-110 duration-300 ease-in-out px-4 py-2 mb-28 text-md font-normal"> Saiba mais</button>
            </a>
        </div>
    </div>

    <div class='item'>
        <img loading='lazy' width="750" height="528" className='rounded-xl shadow-lg mb-5' src={Locacao} alt='Gestão de Locação de Imóveis'/>
        <h2 className='my-2 text-2xl font-bold text-blue-950'>Gestão de Locação de Imóveis</h2>
        <p className='text-gray-600'>
        Aprenda a administração da locação, principais artigos da Lei do Inquilinato, operações e procedimentos das suas atividades imobiliárias, princípios legais e administrativos mais importantes.
        </p>
        <div className="text-start mt-5">
            <a href="https://ibresp.com.br/curso-gestao-de-locacao-de-imoveis/" target="_self">
                <button className=" bg-cyan-950 text-white rounded-md hover:bg-cyan-300 hover:text-white hover:scale-110 duration-300 ease-in-out px-4 py-2 mb-28 text-md font-normal"> Saiba mais</button>
            </a>
        </div>
    </div>

    <div class='item'>
        <img loading='lazy' width="750" height="528" className='rounded-xl shadow-lg mb-5' src={Sindico} alt='Síndico Profissional'/>
        <h2 className='my-2 text-2xl font-bold text-blue-950'>Síndico Profissional</h2>
        <p className='text-gray-600'>
        Aprenda todos os assuntos pertinentes à Sindicância, desde a área de engenharia, relacionamento humano, prestação de serviço, noções jurídicas, documentação, saúde e sustentabilidade.
        </p>
        <div className="text-start mt-5">
            <a href="https://ibresp.com.br/curso-sindico-profissional/" target="_self">
                <button className=" bg-cyan-950 text-white rounded-md hover:bg-cyan-300 hover:text-white hover:scale-110 duration-300 ease-in-out px-4 py-2 mb-28 text-md font-normal"> Saiba mais</button>
            </a>
        </div>
    </div>

    <div class='item'>
        <img loading='lazy' width="750" height="528" className='rounded-xl shadow-lg mb-5' src={Condominios} alt='Administração de Condomínios'/>
        <h2 className='my-2 text-2xl font-bold text-blue-950'>Administração de Condomínios</h2>
        <p className='text-gray-600'>
        O curso aborda os assuntos relevantes para uma boa administração como gestão, contabilidade, jurídico, documentação, relacionamento de pessoas, equipe de trabalho, obras e manutenções.
        </p>
        <div className="text-start mt-5">
            <a href="https://ibresp.com.br/curso-administracao-de-condominio/" target="_self">
                <button className=" bg-cyan-950 text-white rounded-md hover:bg-cyan-300 hover:text-white hover:scale-110 duration-300 ease-in-out px-4 py-2 mb-28 text-md font-normal"> Saiba mais</button>
            </a>
        </div>
    </div>

    <div class='item'>
        <img loading='lazy' width="750" height="528" className='rounded-xl shadow-lg mb-5' src={Token} alt='Mercado Imobiliário Digital'/>
        <h2 className='my-2 text-2xl font-bold text-blue-950'>Mercado Imobiliário Digital</h2>
        <p className='text-gray-600'>
        Você será um dos primeiros corretores imobiliários do Brasil a ter acesso a esse tipo de informação, que o tornará protagonista da revolução do maior mercado do mundo, o mercado imobiliário.
        </p>
        <div className="text-start mt-5">
            <a href="https://ibresp.com.br/curso-mercado-imobiliario-digital/" target="_self">
                <button className=" bg-cyan-950 text-white rounded-md hover:bg-cyan-300 hover:text-white hover:scale-110 duration-300 ease-in-out px-4 py-2 mb-28 text-md font-normal"> Saiba mais</button>
            </a>
        </div>
    </div>
    
</OwlCarousel>

</div>

</div>
    
);
}
