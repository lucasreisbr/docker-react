import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import TTI from '../images/ibresp-curso-tti.webp';
import Avaliacao from '../images/ibresp-curso-avaliacao-de-imoveis.webp';
import Documentacao from '../images/ibresp-curso-documentacao-imobiliaria.webp';
import Financiamento from '../images/ibresp-curso-financiamento-imobiliario.webp';

export default function CarouselCourses() {

return(

<div>

<h1 className='text-blue-950 mb-8 text-4xl font-bold px-3 md:px-0 '>
Cursos IBRESP
</h1>

<OwlCarousel className='owl-theme' autoplay loop margin={30}  stagePadding={50} responsive= {
    {
        '1':{
            items: 1
        },
        '1025': {
            items: 3
        }
    }
    
}
>
    <div class='item'>
        <img className='rounded-xl shadow-lg mb-5' src={TTI} alt='ibresp'/>
        <h2 className='my-2 text-2xl font-bold text-blue-950'>Curso TTI</h2>
        <p className='text-gray-600'>
        O curso de TTI prepara o profissional a atender com qualidade uma demanda existente no mercado imobiliário. Realizado na modalidade a distância, garante flexibilidade total aos alunos, permitindo a escolha dos horários e locais de estudo.
        </p>
    </div>

    <div class='item'>
        <img className='rounded-xl shadow-lg mb-5' src={Avaliacao} alt='ibresp'/>
        <h2 className='my-2 text-2xl font-bold text-blue-950'>Avaliação de imóveis</h2>
        <p className='text-gray-600'>
        O curso de Avaliação de Imóveis capacita profissionais do mercado imobiliário e áreas afins a obterem conhecimento de avaliações imobiliárias mercadológica para emissão de parecer competente (PTAM).
        </p>
    </div>

    <div class='item'>
        <img className='rounded-xl shadow-lg mb-5' src={Documentacao} alt='ibresp'/>
        <h2 className='my-2 text-2xl font-bold text-blue-950'>Documentação imobiliária</h2>
        <p className='text-gray-600'>
        O curso de Documentação Imobiliária capacita profissionais do mercado imobiliário e áreas afins a obterem conhecimento sobre a documentação que envolve a transação imobiliária. Não há nota mínima para aprovação.
        </p>
    </div>

    <div class='item'>
        <img className='rounded-xl shadow-lg mb-5' src={Financiamento} alt='ibresp'/>
        <h2 className='my-2 text-2xl font-bold text-blue-950'>Financiamento e crédito imobiliário</h2>
        <p className='text-gray-600'>
        O curso proporciona conhecimentos sobre as formas de financiamento e crédito imobiliário capacitando a oferecer as melhores alternativas aos clientes para que possam adquirir imóveis de forma consciente.
        </p>
    </div>

    <div class='item'>
        <img className='rounded-xl shadow-lg mb-5' src='https://www.ibresp.com.br/wp-content/uploads/2022/05/www.ibresp.com.br-banner-tti.jpg' alt='ibresp'/>
        <h2 className='my-2 text-2xl font-bold text-blue-950'>Curso TTI</h2>
        <p className='text-gray-600'>
        O curso de TTI prepara o profissional a atender com qualidade uma demanda existente no mercado imobiliário. Realizado na modalidade a distância, garante flexibilidade total aos alunos, permitindo a escolha dos horários e locais de estudo.
        </p>
    </div>

    <div class='item'>
        <img className='rounded-xl shadow-lg mb-5' src='https://www.ibresp.com.br/wp-content/uploads/2022/05/www.ibresp.com.br-banner-tti.jpg' alt='ibresp'/>
        <h2 className='my-2 text-2xl font-bold text-blue-950'>Curso TTI</h2>
        <p className='text-gray-600'>
        O curso de TTI prepara o profissional a atender com qualidade uma demanda existente no mercado imobiliário. Realizado na modalidade a distância, garante flexibilidade total aos alunos, permitindo a escolha dos horários e locais de estudo.
        </p>
    </div>

    <div class='item'>
        <img className='rounded-xl shadow-lg mb-5' src='https://www.ibresp.com.br/wp-content/uploads/2022/05/www.ibresp.com.br-banner-tti.jpg' alt='ibresp'/>
        <h2 className='my-2 text-2xl font-bold text-blue-950'>Curso TTI</h2>
        <p className='text-gray-600'>
        O curso de TTI prepara o profissional a atender com qualidade uma demanda existente no mercado imobiliário. Realizado na modalidade a distância, garante flexibilidade total aos alunos, permitindo a escolha dos horários e locais de estudo.
        </p>
    </div>

    <div class='item'>
        <img className='rounded-xl shadow-lg mb-5' src='https://www.ibresp.com.br/wp-content/uploads/2022/05/www.ibresp.com.br-banner-tti.jpg' alt='ibresp'/>
        <h2 className='my-2 text-2xl font-bold text-blue-950'>Curso TTI</h2>
        <p className='text-gray-600'>
        O curso de TTI prepara o profissional a atender com qualidade uma demanda existente no mercado imobiliário. Realizado na modalidade a distância, garante flexibilidade total aos alunos, permitindo a escolha dos horários e locais de estudo.
        </p>
    </div>

    <div class='item'>
        <img className='rounded-xl shadow-lg mb-5' src='https://www.ibresp.com.br/wp-content/uploads/2022/05/www.ibresp.com.br-banner-tti.jpg' alt='ibresp'/>
        <h2 className='my-2 text-2xl font-bold text-blue-950'>Curso TTI</h2>
        <p className='text-gray-600'>
        O curso de TTI prepara o profissional a atender com qualidade uma demanda existente no mercado imobiliário. Realizado na modalidade a distância, garante flexibilidade total aos alunos, permitindo a escolha dos horários e locais de estudo.
        </p>
    </div>

    <div class='item'>
        <img className='rounded-xl shadow-lg mb-5' src='https://www.ibresp.com.br/wp-content/uploads/2022/05/www.ibresp.com.br-banner-tti.jpg' alt='ibresp'/>
        <h2 className='my-2 text-2xl font-bold text-blue-950'>Curso TTI</h2>
        <p className='text-gray-600'>
        O curso de TTI prepara o profissional a atender com qualidade uma demanda existente no mercado imobiliário. Realizado na modalidade a distância, garante flexibilidade total aos alunos, permitindo a escolha dos horários e locais de estudo.
        </p>
    </div>

    <div class='item'>
        <img className='rounded-xl shadow-lg mb-5' src='https://www.ibresp.com.br/wp-content/uploads/2022/05/www.ibresp.com.br-banner-tti.jpg' alt='ibresp'/>
        <h2 className='my-2 text-2xl font-bold text-blue-950'>Curso TTI</h2>
        <p className='text-gray-600'>
        O curso de TTI prepara o profissional a atender com qualidade uma demanda existente no mercado imobiliário. Realizado na modalidade a distância, garante flexibilidade total aos alunos, permitindo a escolha dos horários e locais de estudo.
        </p>
    </div>

    <div class='item'>
        <img className='rounded-xl shadow-lg mb-5' src='https://www.ibresp.com.br/wp-content/uploads/2022/05/www.ibresp.com.br-banner-tti.jpg' alt='ibresp'/>
        <h2 className='my-2 text-2xl font-bold text-blue-950'>Curso TTI</h2>
        <p className='text-gray-600'>
        O curso de TTI prepara o profissional a atender com qualidade uma demanda existente no mercado imobiliário. Realizado na modalidade a distância, garante flexibilidade total aos alunos, permitindo a escolha dos horários e locais de estudo.
        </p>
    </div>
    
</OwlCarousel>

</div>
    
);
}
