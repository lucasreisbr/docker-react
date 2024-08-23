import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {MegaMenu, Navbar } from 'flowbite-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine, faHouseUser } from '@fortawesome/free-solid-svg-icons'
import { MdOutlineAddAPhoto, MdOutlineCrisisAlert } from "react-icons/md";
import { FaRegAddressCard } from "react-icons/fa6";
import { BsHouseCheck, BsBuildings } from "react-icons/bs";
import { GrDocumentUser } from "react-icons/gr";
import { GiTakeMyMoney, GiMagnifyingGlass } from "react-icons/gi";
import { IoRocketOutline } from "react-icons/io5";
import { GoLaw } from "react-icons/go";
import { TbDoorEnter } from "react-icons/tb";
import { LiaUserShieldSolid } from "react-icons/lia";
import { RiNftLine } from "react-icons/ri";
import { LuMonitorPlay } from "react-icons/lu";
import logo from '../logo-ibresp.svg';
import './Navbar.css';


export default function Component() {

    const [style, setStyle] = useState("btn-active");
    const changeStyle = () => {
        console.log("you just clicked");
        if (style !== "btn-active") setStyle("btn-active");
        else setStyle("btn-active-on");
    };

    const [style1, setStyle1] = useState("btn-active");
    const changeStyle1 = () => {
        console.log("you just clicked");
        if (style1 !== "btn-active") setStyle1("btn-active");
        else setStyle1("btn-active-on");
    };

    const [style2, setStyle2] = useState("btn-active");
    const changeStyle2 = () => {
        console.log("you just clicked");
        if (style2 !== "btn-active") setStyle2("btn-active");
        else setStyle2("btn-active-on");
    };

    // const [style1, setStyle1] = useState("btn-active1");

    // const changeStyle1 = () => {
    //     console.log("you just clicked");
    //     if (style !== "btn-active1") setStyle1("btn-active1");
    //     else setStyle1("btn-active-on1");
    // };

    // const [style2, setStyle2] = useState("btn-active2");
    // const changeStyle2 = () => {
    //     console.log("you just clicked");
    //     if (style !== "btn-active2") setStyle2("btn-active2");
    //     else setStyle2("btn-active-on2");
    // };

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


<div className= {colorChange ? "navbarcolor active": "navbarcolor"} >     

<div className='container mx-auto z-50'>

    <MegaMenu className="bg-transparent">
        
        <div className="flex flex-wrap w-full items-center justify-between py-4 md:space-x-8">
            
            <Navbar.Brand href="/">
                <img alt="Logo IBRESP a melhor escola imobiliária do Brasil" src={logo} className="lg:h-14 md:h-7 h-8" />
            </Navbar.Brand>
        
            <Navbar.Toggle />
    
        <Navbar.Collapse >

            <Navbar.Link href="https://ibresp.com.br/loja/Inicio" target="_blank"> Loja</Navbar.Link>
        
            <div className={style} onClick={changeStyle}>
            
            <MegaMenu.Dropdown className=" btn-color bg-blue-950" toggle={<>Cursos</>}>
        
            <ul className="grid grid-cols-1 md:grid-cols-2">
                <div className="space-y-2 md:space-y-6 p-4">
                    <li>
                        <a href="https://www.ibresp.com.br/Curso-TTI-IBRESP/" className="hover:text-primary-600 dark:hover:text-primary-500 active">
                            <i className=" float-start me-1 text-2xl "> <FaRegAddressCard /> </i>Curso de TTI
                        </a>
                    </li>
                    <li>
                        <a href="https://www.ibresp.com.br/curso-de-avaliacao-de-imoveis-em-sao-paulo/" className="hover:text-primary-600 dark:hover:text-primary-500">
                        <i className=" float-start me-1 text-2xl "> <BsHouseCheck /> </i> Avaliação de Imóveis
                        </a>
                    </li>
                    <li>
                        <a href="https://www.ibresp.com.br/curso-documentacao-imobiliaria/" className="hover:text-primary-600 dark:hover:text-primary-500">
                        <i className=" float-start me-1 text-2xl "><GrDocumentUser /> </i> Documentação Imobiliária
                        </a>
                    </li>
                    <li>
                        <a href="https://www.ibresp.com.br/curso-financiamento-e-credito-imobiliario/" className="hover:text-primary-600 dark:hover:text-primary-500">
                        <i className=" float-start me-1 text-2xl "><GiTakeMyMoney /> </i> Financiamento e Crédito Imobiliário
                        </a>
                    </li>
                </div>

                <div className="space-y-2 md:space-y-6 p-4">
                    <li>
                        <a href="https://www.ibresp.com.br/curso-captacao-de-imoveis-na-pratica/" className="hover:text-primary-600 dark:hover:text-primary-500">
                        <FontAwesomeIcon icon={faHouseUser} size="lg"  /> Captação de Imóveis na Prática
                        </a>
                    </li>
                    <li>
                        <a href="https://www.ibresp.com.br/curso-de-fotografia-imobiliaria/" className="hover:text-primary-600 dark:hover:text-primary-500">
                        <i className=" float-start me-1 text-2xl "> <MdOutlineAddAPhoto /> </i> Fotografia Imobiliária
                        </a>
                    </li>
                    <li>
                        <a href="https://www.ibresp.com.br/curso-marketing-imobiliario/" className="hover:text-primary-600 dark:hover:text-primary-500">
                        <i className=" float-start me-1 text-2xl "> <IoRocketOutline /> </i> Marketing Imobiliário
                        
                        </a>
                    </li>
                    <li>
                        <a href="https://www.ibresp.com.br/curso-perito-judicial/" className="hover:text-primary-600 dark:hover:text-primary-500">
                        <i className=" float-start me-1 text-2xl "> <GoLaw /> </i> Perito Judicial
                        </a>
                    </li>
                </div>

                <div className="space-y-2 md:space-y-6 p-4">
                    <li>
                        <a href="https://www.ibresp.com.br/curso-tecnicas-de-negociacao-e-vendas/" className="hover:text-primary-600 dark:hover:text-primary-500">
                        <i className=" float-start me-1 text-2xl "> <MdOutlineCrisisAlert /> </i> Técnicas de Negociação e Vendas
                    
                        </a>
                    </li>
                    <li>
                        <a href="https://ibresp.com.br/curso-inferencia-estatistica-na-avaliacao-imobiliaria/" className="hover:text-primary-600 dark:hover:text-primary-500">
                        <FontAwesomeIcon icon={faChartLine} size="lg" /> Inferência Estatística
                        </a>
                    </li>
                    <li>
                        <a href="https://ibresp.com.br/curso-gestao-de-locacao-de-imoveis/" className="hover:text-primary-600 dark:hover:text-primary-500">
                        <i className=" float-start me-1 text-2xl "> <TbDoorEnter /> </i>  Gestão de Locação de Imóveis
                        </a>
                    </li>
                    <li>
                        <a href="https://ibresp.com.br/curso-sindico-profissional/" className="hover:text-primary-600 dark:hover:text-primary-500">
                        <i className=" float-start me-1 text-2xl "> <LiaUserShieldSolid /> </i> Síndico Profissional
                        </a>
                    </li>
                </div>

                <div className="space-y-2 md:space-y-6 p-4">
                    <li>
                        <a href="https://ibresp.com.br/curso-administracao-de-condominio/" className="hover:text-primary-600 dark:hover:text-primary-500">
                        <i className=" float-start me-1 text-2xl "> <BsBuildings /> </i>  Administração de Condomínios 
                        </a>
                    </li>
                    <li>
                        <a href="https://ibresp.com.br/curso-mercado-imobiliario-digital/" className="hover:text-primary-600 dark:hover:text-primary-500">
                        <i className=" float-start me-1 text-2xl "> <RiNftLine /> </i> Tokenização Imobiliária
                        </a>
                    </li>
                    <li>
                        <a href="https://www.ibresp.com.br/cursos-gratuitos" className="hover:text-primary-600 dark:hover:text-primary-500">
                        <i className=" float-start me-1 text-2xl "> <LuMonitorPlay /> </i>  Cursos Gratuitos
                        </a>
                    </li>
                    <li>
                        <a href="https://www.ibresp.com.br/especialista/home/" className="hover:text-primary-600 dark:hover:text-primary-500">
                        <i className=" float-start me-1 text-2xl "> <GiMagnifyingGlass /> </i> Programa Especialista
                        </a>
                    </li>

                </div>
            </ul>
            </MegaMenu.Dropdown>
            </div>

            <div className={style1} onClick={changeStyle1}>
            <MegaMenu.Dropdown className=" bg-blue-950 " toggle={<>IBRESP</>}>
            <ul className="grid grid-cols-1">
                <div className="space-y-2 md:space-y-4 p-4">
                    <li>
                        <Navbar.Link className="m-0 p-0" active={path === "/alunos"} as={"div"}> 
                            <Link to="/alunos"> 
                                Área do aluno(a)
                            </ Link>   
                        </Navbar.Link>
                    </li>
                    <li>                
                        <Navbar.Link className="m-0 p-0 active" active={path === "/polos"} as={"div"}> 
                            <Link to="/polos"> 
                                Polos
                            </ Link>   
                        </Navbar.Link>
                    </li>
                    <li>
                        <Navbar.Link className="m-0 p-0" active={path === "/equipe"} as={"div"}> 
                            <Link to="/equipe"> 
                                Equipe
                            </ Link>   
                        </Navbar.Link>
                    </li>
                    <li>
                        <Navbar.Link className="m-0 p-0" active={path === "/sobre"} as={"div"}> 
                            <Link to="/sobre"> 
                                Sobre
                            </ Link>   
                        </Navbar.Link>
                    </li>
                </div>
            </ul>
            </MegaMenu.Dropdown>
            </div>

            <div className={style2} onClick={changeStyle2}>
            <MegaMenu.Dropdown style={{ transform: `translate(${1060}px, ${72}px)` }} className=" bg-blue-950 ml-0 " toggle={<>Conteúdo</>}>
            <ul className="grid grid-cols-1">
                <div className="space-y-2 md:space-y-4 p-4">
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

                    {/* <li>
                        <HashLink smooth to="/#biblioteca">
                            Biblioteca
                        </HashLink>
                    </li> */}
                   
                    <li>
                        <a href="/#biblioteca" className="hover:text-primary-600 dark:hover:text-primary-500">
                            Biblioteca IBRESP
                        </a>
                    </li>
                </div>
            </ul>
            </MegaMenu.Dropdown>
            </div>

            <Navbar.Link href="https://www.ibresp.com.br/espaco-do-corretor/" target="_blank">Soluções</Navbar.Link>

            <Navbar.Link href="https://aluno.ibresp.com.br/Account/Login" target="_blank">AVA</Navbar.Link>

        </Navbar.Collapse>
        </div>
    </MegaMenu>

</div>

</div>



);
}
