import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MegaMenu, Navbar } from 'flowbite-react';
import logo from '../logo-ibresp.svg';
import './Navbar.css';

export default function Component() {

    const path = useLocation().pathname;

    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 80) {
            setColorchange(true);
        } else {
            setColorchange(false);
        }
    };
    window.addEventListener("scroll", changeNavbarColor);

return (

<div className={colorChange ? "navbarcolor active": "navbarcolor"} >     

<div className=' lg:container xl:container mx-auto '>

    <MegaMenu className=" bg-transparent " >
        
        <div className="flex flex-wrap w-full items-center justify-between py-4 md:space-x-8">
            
            <Navbar.Brand href="/">
                <img alt="" src={logo} className="lg:h-14 md:h-7 h-8" />
            </Navbar.Brand>
        

            <Navbar.Toggle />
    
        
        <Navbar.Collapse >

            <Navbar.Link active={path === "/polos"} as={"div"}> 
                <Link to="/polos"> 
                    Polos
                </ Link>   
            </Navbar.Link>

            <Navbar.Link href="https://ibresp.com.br/loja/Inicio" target="_blank"> Loja</Navbar.Link>

            <MegaMenu.Dropdown className=" bg-blue-950 " toggle={<>Cursos</>}>

            <ul className="grid grid-cols-2 md:grid-cols-4 ">
                <div className="space-y-4 p-4">
                    <li>
                        <a href="/home" className="hover:text-primary-600 dark:hover:text-primary-500">
                        About Us
                        </a>
                    </li>
                    <li>
                        <a href="/home" className="hover:text-primary-600 dark:hover:text-primary-500">
                        Library
                        </a>
                    </li>
                    <li>
                        <a href="/home" className="hover:text-primary-600 dark:hover:text-primary-500">
                        Resources
                        </a>
                    </li>
                    <li>
                        <a href="/home" className="hover:text-primary-600 dark:hover:text-primary-500">
                        Pro Version
                        </a>
                    </li>
                </div>

                <div className="space-y-4 p-4">
                    <li>
                        <a href="/home" className="hover:text-primary-600 dark:hover:text-primary-500">
                        Contact Us
                        </a>
                    </li>
                    <li>
                        <a href="/home" className="hover:text-primary-600 dark:hover:text-primary-500">
                        Support Center
                        </a>
                    </li>
                    <li>
                        <a href="/home" className="hover:text-primary-600 dark:hover:text-primary-500">
                        Terms
                        </a>
                    </li>
                    <li>
                        <a href="/home" className="hover:text-primary-600 dark:hover:text-primary-500">
                        Blog
                        </a>
                    </li>
                </div>

                <div className="space-y-4 p-4">
                    <li>
                        <a href="/home" className="hover:text-primary-600 dark:hover:text-primary-500">
                        Newsletter
                        </a>
                    </li>
                    <li>
                        <a href="/home" className="hover:text-primary-600 dark:hover:text-primary-500">
                        Playground
                        </a>
                    </li>
                    <li>
                        <a href="/home" className="hover:text-primary-600 dark:hover:text-primary-500">
                        License
                        </a>
                    </li>
                    <li>
                        <a href="/home" className="hover:text-primary-600 dark:hover:text-primary-500">
                        License
                        </a>
                    </li>
                </div>

                <div className="space-y-4 p-4">
                    <li>
                        <a href="/home" className="hover:text-primary-600 dark:hover:text-primary-500">
                        Newsletter
                        </a>
                    </li>
                    <li>
                        <a href="/home" className="hover:text-primary-600 dark:hover:text-primary-500">
                        Playground
                        </a>
                    </li>
                    <li>
                        <a href="/home" className="hover:text-primary-600 dark:hover:text-primary-500">
                        License
                        </a>
                    </li>
                    <li>
                        <a href="/home" className="hover:text-primary-600 dark:hover:text-primary-500">
                        License
                        </a>
                    </li>

                </div>
            </ul>
            </MegaMenu.Dropdown>

            <MegaMenu.Dropdown className=" bg-blue-950 " toggle={<>IBRESP</>}>
            <ul className="grid grid-cols-1">
                <div className="space-y-4 p-4">
                    <li>
                        <a href="/polos" className="hover:text-primary-600 dark:hover:text-primary-500">
                        Polos
                        </a>
                    </li>
                    <li>
                        <a href="/equipe" className="hover:text-primary-600 dark:hover:text-primary-500">
                        Equipe
                        </a>
                    </li>
                    <li>
                        <a href="/home" className="hover:text-primary-600 dark:hover:text-primary-500">
                        Área do aluno(as)
                        </a>
                    </li>
                </div>
            </ul>
            </MegaMenu.Dropdown>

            <MegaMenu.Dropdown style={{ transform: `translate(${1060}px, ${72}px)` }} className=" bg-blue-950 ml-0 " toggle={<>Conteúdo</>}>
            <ul className="grid grid-cols-1">
                <div className="space-y-4 p-4">
                    <li>
                        <a href="/home" className="hover:text-primary-600 dark:hover:text-primary-500">
                        Blog
                        </a>
                    </li>
                    <li>
                        <a href="/home" className="hover:text-primary-600 dark:hover:text-primary-500">
                        Vídeos
                        </a>
                    </li>
                    <li>
                        <a href="/home" className="hover:text-primary-600 dark:hover:text-primary-500">
                        Biblioteca IBRESP
                        </a>
                    </li>
                </div>
            </ul>
            </MegaMenu.Dropdown>

            <Navbar.Link href="https://www.ibresp.com.br/espaco-do-corretor/" target="_blank">Soluções</Navbar.Link>

            <Navbar.Link href="https://aluno.ibresp.com.br/Account/Login" target="_blank">AVA</Navbar.Link>

        </Navbar.Collapse>
        </div>
    </MegaMenu>

</div>

</div>

);
}
