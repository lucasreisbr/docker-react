import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import LGPD from '../images/ibresp-ebook-gratuito-lgpd.webp';
import './Dotsbook.css';

export default function CarouselBook() {

return(

<div>


<h1 className='text-purple-800 mb-8 text-4xl font-bold px-3 xl:px-0'>
E-books gratuitos
</h1>

<div className="container mx-auto px-3 xl:px-0">

<OwlCarousel className='ebooks owl-theme' autoplay loop margin={30}  stagePadding={60} responsive= {
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
        <img width='auto' height='auto' className='rounded-xl shadow-lg mb-5' src={LGPD} alt='LGPD, o que o corretor de imóveis precisa saber?'/>
        <h2 className='my-2 text-2xl font-bold text-purple-800'>LGPD, o que o corretor de imóveis precisa saber?</h2>
        <div className="text-start mt-5">
            <a href="https://www.ibresp.com.br/blogs/2020/ebook-gratuito-lgpd-o-que-o-corretor-de-imoveis-precisa-saber/" target="_self">
                <button className=" bg-purple-800 text-white rounded-md hover:bg-purple-400 hover:text-white hover:scale-110 duration-300 ease-in-out px-4 py-2 mb-14 md:mb-2 text-md font-normal">Fazer download</button>
            </a>
        </div>
    </div>

    <div class='item'>
        <img width='auto' height='auto' className='rounded-xl shadow-lg mb-5' src={LGPD} alt='LGPD, o que o corretor de imóveis precisa saber?'/>
        <h2 className='my-2 text-2xl font-bold text-purple-800'>LGPD, o que o corretor de imóveis precisa saber?</h2>
        <div className="text-start mt-5">
            <a href="https://www.ibresp.com.br/blogs/2020/ebook-gratuito-lgpd-o-que-o-corretor-de-imoveis-precisa-saber/" target="_self">
                <button className=" bg-purple-800 text-white rounded-md hover:bg-purple-400 hover:text-white hover:scale-110 duration-300 ease-in-out px-4 py-2 mb-14 md:mb-2 text-md font-normal">Fazer download</button>
            </a>
        </div>
    </div>

    <div class='item'>
        <img width='auto' height='auto' className='rounded-xl shadow-lg mb-5' src={LGPD} alt='LGPD, o que o corretor de imóveis precisa saber?'/>
        <h2 className='my-2 text-2xl font-bold text-purple-800'>LGPD, o que o corretor de imóveis precisa saber?</h2>
        <div className="text-start mt-5">
            <a href="https://www.ibresp.com.br/blogs/2020/ebook-gratuito-lgpd-o-que-o-corretor-de-imoveis-precisa-saber/" target="_self">
                <button className=" bg-purple-800 text-white rounded-md hover:bg-purple-400 hover:text-white hover:scale-110 duration-300 ease-in-out px-4 py-2 mb-14 md:mb-2 text-md font-normal">Fazer download</button>
            </a>
        </div>
    </div>

    <div class='item'>
        <img width='auto' height='auto' className='rounded-xl shadow-lg mb-5' src={LGPD} alt='LGPD, o que o corretor de imóveis precisa saber?'/>
        <h2 className='my-2 text-2xl font-bold text-purple-800'>LGPD, o que o corretor de imóveis precisa saber?</h2>
        <div className="text-start mt-5">
            <a href="https://www.ibresp.com.br/blogs/2020/ebook-gratuito-lgpd-o-que-o-corretor-de-imoveis-precisa-saber/" target="_self">
                <button className=" bg-purple-800 text-white rounded-md hover:bg-purple-400 hover:text-white hover:scale-110 duration-300 ease-in-out px-4 py-2 mb-14 md:mb-2 text-md font-normal">Fazer download</button>
            </a>
        </div>
    </div>

    <div class='item'>
        <img width='auto' height='auto' className='rounded-xl shadow-lg mb-5' src={LGPD} alt='LGPD, o que o corretor de imóveis precisa saber?'/>
        <h2 className='my-2 text-2xl font-bold text-purple-800'>LGPD, o que o corretor de imóveis precisa saber?</h2>
        <div className="text-start mt-5">
            <a href="https://www.ibresp.com.br/blogs/2020/ebook-gratuito-lgpd-o-que-o-corretor-de-imoveis-precisa-saber/" target="_self">
                <button className=" bg-purple-800 text-white rounded-md hover:bg-purple-400 hover:text-white hover:scale-110 duration-300 ease-in-out px-4 py-2 mb-14 md:mb-2 text-md font-normal">Fazer download</button>
            </a>
        </div>
    </div>

    <div class='item'>
        <img width='auto' height='auto' className='rounded-xl shadow-lg mb-5' src={LGPD} alt='LGPD, o que o corretor de imóveis precisa saber?'/>
        <h2 className='my-2 text-2xl font-bold text-purple-800'>LGPD, o que o corretor de imóveis precisa saber?</h2>
        <div className="text-start mt-5">
            <a href="https://www.ibresp.com.br/blogs/2020/ebook-gratuito-lgpd-o-que-o-corretor-de-imoveis-precisa-saber/" target="_self">
                <button className=" bg-purple-800 text-white rounded-md hover:bg-purple-400 hover:text-white hover:scale-110 duration-300 ease-in-out px-4 py-2 mb-14 md:mb-2 text-md font-normal">Fazer download</button>
            </a>
        </div>
    </div>

    <div class='item'>
        <img width='auto' height='auto' className='rounded-xl shadow-lg mb-5' src={LGPD} alt='LGPD, o que o corretor de imóveis precisa saber?'/>
        <h2 className='my-2 text-2xl font-bold text-purple-800'>LGPD, o que o corretor de imóveis precisa saber?</h2>
        <div className="text-start mt-5">
            <a href="https://www.ibresp.com.br/blogs/2020/ebook-gratuito-lgpd-o-que-o-corretor-de-imoveis-precisa-saber/" target="_self">
                <button className=" bg-purple-800 text-white rounded-md hover:bg-purple-400 hover:text-white hover:scale-110 duration-300 ease-in-out px-4 py-2 mb-14 md:mb-2 text-md font-normal">Fazer download</button>
            </a>
        </div>
    </div>

    <div class='item'>
        <img width='auto' height='auto' className='rounded-xl shadow-lg mb-5' src={LGPD} alt='LGPD, o que o corretor de imóveis precisa saber?'/>
        <h2 className='my-2 text-2xl font-bold text-purple-800'>LGPD, o que o corretor de imóveis precisa saber?</h2>
        <div className="text-start mt-5">
            <a href="https://www.ibresp.com.br/blogs/2020/ebook-gratuito-lgpd-o-que-o-corretor-de-imoveis-precisa-saber/" target="_self">
                <button className=" bg-purple-800 text-white rounded-md hover:bg-purple-400 hover:text-white hover:scale-110 duration-300 ease-in-out px-4 py-2 mb-14 md:mb-2 text-md font-normal">Fazer download</button>
            </a>
        </div>
    </div>

    <div class='item'>
        <img width='auto' height='auto' className='rounded-xl shadow-lg mb-5' src={LGPD} alt='LGPD, o que o corretor de imóveis precisa saber?'/>
        <h2 className='my-2 text-2xl font-bold text-purple-800'>LGPD, o que o corretor de imóveis precisa saber?</h2>
        <div className="text-start mt-5">
            <a href="https://www.ibresp.com.br/blogs/2020/ebook-gratuito-lgpd-o-que-o-corretor-de-imoveis-precisa-saber/" target="_self">
                <button className=" bg-purple-800 text-white rounded-md hover:bg-purple-400 hover:text-white hover:scale-110 duration-300 ease-in-out px-4 py-2 mb-14 md:mb-2 text-md font-normal">Fazer download</button>
            </a>
        </div>
    </div>

    <div class='item'>
        <img width='auto' height='auto' className='rounded-xl shadow-lg mb-5' src={LGPD} alt='LGPD, o que o corretor de imóveis precisa saber?'/>
        <h2 className='my-2 text-2xl font-bold text-purple-800'>LGPD, o que o corretor de imóveis precisa saber?</h2>
        <div className="text-start mt-5">
            <a href="https://www.ibresp.com.br/blogs/2020/ebook-gratuito-lgpd-o-que-o-corretor-de-imoveis-precisa-saber/" target="_self">
                <button className=" bg-purple-800 text-white rounded-md hover:bg-purple-400 hover:text-white hover:scale-110 duration-300 ease-in-out px-4 py-2 mb-14 md:mb-2 text-md font-normal">Fazer download</button>
            </a>
        </div>
    </div>

    <div class='item'>
        <img width='auto' height='auto' className='rounded-xl shadow-lg mb-5' src={LGPD} alt='LGPD, o que o corretor de imóveis precisa saber?'/>
        <h2 className='my-2 text-2xl font-bold text-purple-800'>LGPD, o que o corretor de imóveis precisa saber?</h2>
        <div className="text-start mt-5">
            <a href="https://www.ibresp.com.br/blogs/2020/ebook-gratuito-lgpd-o-que-o-corretor-de-imoveis-precisa-saber/" target="_self">
                <button className=" bg-purple-800 text-white rounded-md hover:bg-purple-400 hover:text-white hover:scale-110 duration-300 ease-in-out px-4 py-2 mb-14 md:mb-2 text-md font-normal">Fazer download</button>
            </a>
        </div>
    </div>

    <div class='item'>
        <img width='auto' height='auto' className='rounded-xl shadow-lg mb-5' src={LGPD} alt='LGPD, o que o corretor de imóveis precisa saber?'/>
        <h2 className='my-2 text-2xl font-bold text-purple-800'>LGPD, o que o corretor de imóveis precisa saber?</h2>
        <div className="text-start mt-5">
            <a href="https://www.ibresp.com.br/blogs/2020/ebook-gratuito-lgpd-o-que-o-corretor-de-imoveis-precisa-saber/" target="_self">
                <button className=" bg-purple-800 text-white rounded-md hover:bg-purple-400 hover:text-white hover:scale-110 duration-300 ease-in-out px-4 py-2 mb-14 md:mb-2 text-md font-normal">Fazer download</button>
            </a>
        </div>
    </div>

    
</OwlCarousel>

</div>

</div>
    
);
}
