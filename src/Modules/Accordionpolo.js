import React from "react";
import { Accordion } from "flowbite-react";
import { FaMapLocationDot } from "react-icons/fa6";
import './Accordionpolo.css';

export default React.memo(function Accordionpolo() {
return (

<div className="flex flex-row justify-center mt-12 mb-24 p-3 lg:p-0">

    <div className="container accordion">

<Accordion collapseAll>

    <Accordion.Panel>
        <Accordion.Title className="text-white text-2xl">São Paulo</Accordion.Title>
            <Accordion.Content>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-5">

                    <div className="text-gray-800">
                        <h5 className="font-bold">Araçatuba</h5>
                        <p>Avenida General Glicério 355 - Centro<br></br>
                        Parceiro Colégio Impacto</p>
                        <a href="https://goo.gl/maps/Nv9QwGuc6vCLsVat8" target="_blank" rel="noreferrer">
                            <i className="text-3xl text-cyan-700" ><FaMapLocationDot/> </i>
                        </a>
                    </div>

                    <div className="text-gray-800">
                        <h5 className="font-bold">Bragança Paulista</h5>
                        <p>
                        Avenida Marcelo Stefani, 15 - Prédio 143<br></br>
                        Sala 01 - Térreo - Jardim do Lago
                        </p>
                        <a href="https://goo.gl/maps/QyVGfXcdC22T6ViP9" target="_blank" rel="noreferrer">
                            <i className="text-3xl text-cyan-700" ><FaMapLocationDot/> </i>
                        </a>
                    </div>

                    <div className="text-gray-800">
                        <h5 className="font-bold">Bauru</h5>
                        <p>
                        R. Hugo Cavichine Píres, 238 - Jardim Sambura<br></br>
                        Parceiro FGV
                        </p>
                        <a href="https://maps.app.goo.gl/TAPw2gspZ5xhupBr9" target="_blank" rel="noreferrer">
                            <i className="text-3xl text-cyan-700" ><FaMapLocationDot/> </i>
                        </a>
                    </div>

                    <div className="text-gray-800">
                        <h5 className="font-bold">Caraguatatuba</h5>
                        <p>
                        Praça José Rabelo da Cunha, 130 - Bairro Sumaré<br></br>
                        Parceiro MultiEDUC
                        </p>
                        <a href="https://maps.app.goo.gl/BoJ7b4eCp24cQU1CA" target="_blank" rel="noreferrer">
                            <i className="text-3xl text-cyan-700" ><FaMapLocationDot/> </i>
                        </a>
                    </div>

                    <div className="text-gray-800">
                        <h5 className="font-bold">Fernandópolis</h5>
                        <p>
                        Rua Bahia, 1079 - Centro<br></br>    
                        Parceiro Centro Cultural América
                        </p>
                        <a href="https://goo.gl/maps/VdbdaAiwPSkpC8m1A" target="_blank" rel="noreferrer">
                            <i className="text-3xl text-cyan-700" ><FaMapLocationDot/> </i>
                        </a>
                    </div>

                    <div className="text-gray-800">
                        <h5 className="font-bold">Franca</h5>
                        <p>
                        Avenida Major Nicácio, 1907 - Cidade Nova<br></br>
                        Parceiro CCBEU
                        </p>
                        <a href="https://www.google.com.br/maps/place/Av.+Maj.+Nic%C3%A1cio,+Franca+-+SP/@-20.5352614,-47.3959464,17z/data=!3m1!4b1!4m5!3m4!1s0x94b0a622de16dc53:0xe925d62fa24fae1c!8m2!3d-20.5352614!4d-47.3937577" target="_blank" rel="noreferrer">
                            <i className="text-3xl text-cyan-700" ><FaMapLocationDot/> </i>
                        </a>
                    </div>

                    <div className="text-gray-800">
                        <h5 className="font-bold">Guarulhos</h5>
                        <p>
                        Rua do Rosário, 313 - Centro<br></br>
                        Parceiro Colégio Internacional Torricelli
                        </p>
                        <a href="https://www.google.com.br/maps/place/R.+do+Ros%C3%A1rio,+313+-+Macedo,+Guarulhos+-+SP,+07111-100/@-23.4675931,-46.5218003,17z/data=!3m1!4b1!4m5!3m4!1s0x94cef55144aaac17:0xce34ca16ed2c5209!8m2!3d-23.4675931!4d-46.5196116" target="_blank" rel="noreferrer">
                            <i className="text-3xl text-cyan-700" ><FaMapLocationDot/> </i>
                        </a>
                    </div>

                    <div className="text-gray-800">
                        <h5 className="font-bold">Igarapava</h5>
                        <p>
                        Avenida Maciel, 460 - Centro<br></br>
                        Parceiro - ACEIG
                        </p>
                        <a href="https://www.google.com.br/maps/place/Av.+Maciel,+460+-+Lot.+Maria+da+Conceicao,+Igarapava+-+SP,+14540-000/@-20.0374332,-47.7508715,17z/data=!3m1!4b1!4m5!3m4!1s0x94ba92a0abdb41b7:0x1055ad93a7dd01d7!8m2!3d-20.0374332!4d-47.7486828" target="_blank" rel="noreferrer">
                            <i className="text-3xl text-cyan-700" ><FaMapLocationDot/> </i>
                        </a>
                    </div>

                    <div className="text-gray-800">
                        <h5 className="font-bold">Itapetininga</h5>
                        <p>
                        Rua Quintino Bocaiúva, 800 - Centro<br></br>
                        Parceiro Uninter
                        </p>
                        <a href="https://goo.gl/maps/9fsLqN4ZAYau8MCXA" target="_blank" rel="noreferrer">
                            <i className="text-3xl text-cyan-700" ><FaMapLocationDot/> </i>
                        </a>
                    </div>

                    <div className="text-gray-800">
                        <h5 className="font-bold">Jundiaí</h5>
                        <p>
                        Rua Baronesa do Japi, 64 - Centro<br></br>
                        Parceiro UNICESUMAR
                        </p>
                        <a href="https://maps.app.goo.gl/TAMpM3NSet51cDjj8" target="_blank" rel="noreferrer">
                            <i className="text-3xl text-cyan-700" ><FaMapLocationDot/> </i>
                        </a>
                    </div>


                    <div className="text-gray-800">
                        <h5 className="font-bold">Limeira</h5>
                        <p>
                        Rua João Guilherme, 273 - Cidade Jardim<br></br>
                        Parceiro EVO Educacional
                        </p>
                        <a href="https://maps.app.goo.gl/r9eF4qNfTrnZhXum9" target="_blank" rel="noreferrer">
                            <i className="text-3xl text-cyan-700" ><FaMapLocationDot/> </i>
                        </a>
                    </div>

                    <div className="text-gray-800">
                        <h5 className="font-bold">Lorena</h5>
                        <p>Rua Dr. Peixoto de Castro, 970 - Bairro Cruz<br></br>
                        Parceiro Uninter
                        </p>
                        <a href="https://goo.gl/maps/uvAVXjrwCby1TVxm7?coh=178572&entry=tt" target="_blank" rel="noreferrer">
                            <i className="text-3xl text-cyan-700" ><FaMapLocationDot/> </i>
                        </a>
                    </div>

                    <div className="text-gray-800">
                        <h5 className="font-bold">Mogi das Cruzes</h5>
                        <p>
                        Avenida Vereador Narciso Yague Guimarães, 1001 
                        Loja D | Shopping Mogi | Parceiro - FGV
                        </p>
                        <a href="https://www.google.com.br/maps/place/moggi+shopping+-+Av.+Ver.+Narciso+Yague+Guimar%C3%A3es,+1001+-+Jardim+Armenia,+Mogi+das+Cruzes+-+SP,+08780-000/@-23.51595,-46.1817634,17z/data=!3m1!4b1!4m5!3m4!1s0x94cdd8308a246871:0x9de705a00b285471!8m2!3d-23.51595!4d-46.1795747" target="_blank" rel="noreferrer">
                            <i className="text-3xl text-cyan-700" ><FaMapLocationDot/> </i>
                        </a>
                    </div>

                    <div className="text-gray-800">
                        <h5 className="font-bold">Osasco</h5>
                        <p>
                        Rua Antônio Agú, 1279 - Centro<br></br>
                        Parceiro Escola de Inglês - CNA
                        </p>
                        <a href="https://www.google.com.br/maps/place/R.+Ant%C3%B4nio+Ag%C3%BA,+1279+-+Centro,+Osasco+-+SP,+06013-006/@-23.5383427,-46.7837945,17z/data=!3m1!4b1!4m5!3m4!1s0x94ceff0c75ada6a5:0xc557a5dfa6a1fff5!8m2!3d-23.5383427!4d-46.7816058" target="_blank" rel="noreferrer">
                            <i className="text-3xl text-cyan-700" ><FaMapLocationDot/> </i>
                        </a>
                    </div>

                    <div className="text-gray-800">
                        <h5 className="font-bold">Praia Grande</h5>
                        <p>
                        Rua Oswaldo de Oliveira, 355 - Boqueirão<br></br>
                        Parceiro - UNISA
                        </p>
                        <a href="https://www.google.com.br/maps/place/R.+Oswaldo+de+Oliveira,+355+-+Boqueir%C3%A3o,+Praia+Grande+-+SP,+11701-120/@-24.0088551,-46.4189896,17z/data=!3m1!4b1!4m5!3m4!1s0x94ce1db4392ec3cd:0xe5ae46ebd7e2d722!8m2!3d-24.0088551!4d-46.4168009" target="_blank" rel="noreferrer">
                            <i className="text-3xl text-cyan-700" ><FaMapLocationDot/> </i>
                        </a>
                    </div>

                    <div className="text-gray-800">
                        <h5 className="font-bold">Presidente Prudente</h5>
                        <p>
                        Rua Dr Gurgel, 60 - Centro<br></br>
                        Parceiro Microlins
                        </p>
                        <a href="https://www.google.com.br/maps/place/R.+Dr.+Gurgel,+60+-+Vila+do+Estadio,+Pres.+Prudente+-+SP,+19010-020/@-22.1235342,-51.3856292,17z/data=!3m1!4b1!4m5!3m4!1s0x9493f5b18118d9f9:0xb278147755aa17c8!8m2!3d-22.1235342!4d-51.3834405" target="_blank" rel="noreferrer">
                            <i className="text-3xl text-cyan-700" ><FaMapLocationDot/> </i>
                        </a>
                    </div>

                    <div className="text-gray-800">
                        <h5 className="font-bold">Ribeirão Preto</h5>
                        <p>
                        Rua Campos Salles, 730 - Centro<br></br>         
                        Parceiro Escola de Inglês - CNA
                        </p>
                        <a href="https://www.google.com.br/maps/place/R.+Campos+Salles,+730+-+Centro,+Ribeir%C3%A3o+Preto+-+SP,+14015-110/@-21.1819025,-47.8123779,17z/data=!3m1!4b1!4m5!3m4!1s0x94b9bee4e68d73f1:0x85f251f962e28c0e!8m2!3d-21.1819025!4d-47.8101892" target="_blank" rel="noreferrer">
                            <i className="text-3xl text-cyan-700" ><FaMapLocationDot/> </i>
                        </a>
                    </div>

                    <div className="text-gray-800">
                        <h5 className="font-bold">Santana</h5>
                        <p>
                        Rua Dr Gabriel Piza, 462
                        Parceiro Damásio
                        </p>
                        <a href="https://goo.gl/maps/ZwVkzgAZUDCrwwraA" target="_blank" rel="noreferrer">
                            <i className="text-3xl text-cyan-700" ><FaMapLocationDot/> </i>
                        </a>
                    </div>

                    <div className="text-gray-800">
                        <h5 className="font-bold">São João da Boa Vista</h5>
                        <p>
                        Rua Dr. Teófilo Ribeiro de Andrade, 278 - Centro<br></br>
                        Parceiro Achieve/Oxford
                        </p>
                        <a href="https://goo.gl/maps/TYCPhU92s7RLjZSo8" target="_blank" rel="noreferrer">
                            <i className="text-3xl text-cyan-700" ><FaMapLocationDot/> </i>
                        </a>
                    </div>

                    <div className="text-gray-800">
                        <h5 className="font-bold">São José do Rio Preto </h5>
                        <p>
                        Rua Antonio Godoy nº 3277 - Centro<br></br>
                        Parceiro Microlins
                        </p>
                        <a href="https://www.google.com.br/maps/place/Rua+Ant%C3%B4nio+de+Godoy,+3277+-+Centro,+S%C3%A3o+Jos%C3%A9+do+Rio+Preto+-+SP,+15015-100/@-20.8151085,-49.3827813,17z/data=!3m1!4b1!4m5!3m4!1s0x94bdad5eb508ba2d:0x875f95547b644d09!8m2!3d-20.8151085!4d-49.3805926?hl=pt-BR" target="_blank" rel="noreferrer">
                            <i className="text-3xl text-cyan-700" ><FaMapLocationDot/> </i>
                        </a>
                    </div>

                    <div className="text-gray-800">
                        <h5 className="font-bold">São José dos Campos</h5>
                        <p>
                        Rua Santa Clara, 417 - Vila Adyana<br></br>
                        Parceiro UNINTER
                        </p>
                        <a href="https://goo.gl/maps/iHSrSF3uvsQ1DzFi9?coh=178572&entry=tt" target="_blank" rel="noreferrer">
                            <i className="text-3xl text-cyan-700" ><FaMapLocationDot/> </i>
                        </a>
                    </div>

                    <div className="text-gray-800">
                        <h5 className="font-bold">Sede</h5>
                        <p>Alameda dos Guatás, 659<br></br>
                            Planalto Paulista</p>
                        <a href="https://www.google.com.br/maps/place/Alameda+dos+Guat%C3%A1s,+659+-+Vila+da+Sa%C3%BAde,+S%C3%A3o+Paulo+-+SP,+04053-042/@-23.6151322,-46.6464371,17z/data=!3m1!4b1!4m5!3m4!1s0x94ce5a444c31e5b7:0x1e6adb97ea1b2b44!8m2!3d-23.6151322!4d-46.6442484?hl=pt-BR" target="_blank" rel="noreferrer">
                            <i className="text-3xl text-cyan-700" ><FaMapLocationDot/> </i>
                        </a>
                    </div>

                    <div className="text-gray-800">
                        <h5 className="font-bold">Sorocaba</h5>
                        <p>
                        Rua José Jorge Nardi de Souza, 37 - Campolim<br></br>
                        Parceiro Pro Arte/UNIP
                        </p>
                        <a href="https://goo.gl/maps/jCkwjQdnwWPyEwUh9" target="_blank" rel="noreferrer">
                            <i className="text-3xl text-cyan-700" ><FaMapLocationDot/> </i>
                        </a>
                    </div>

                    <div className="text-gray-800">
                        <h5 className="font-bold">República</h5>
                        <p>
                        Praça Dom José Gaspar, 30 - Sobreloja J2<br></br>
                        Parceiro UNIP
                        </p>
                        <a href="https://maps.app.goo.gl/VY715QZManL9mBCBA" target="_blank" rel="noreferrer">
                            <i className="text-3xl text-cyan-700" ><FaMapLocationDot/> </i>
                        </a>
                    </div>

                </div>

            </Accordion.Content>
    </Accordion.Panel>

    <Accordion.Panel>
        <Accordion.Title className="text-white text-2xl" >Minas Gerais</Accordion.Title>
            <Accordion.Content>
            
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-5">

                    <div className="text-gray-800">
                        <h5 className="font-bold">Belo Horizonte</h5>
                        <p>
                        Av. Amazonas, 491 - Centro<br></br>
                        10ºand Sls 1001 | 1002
                        </p>
                        <a href="https://goo.gl/maps/4bpnDNSmycbPGdDb8" target="_blank" rel="noreferrer">
                            <i className="text-3xl text-cyan-700" ><FaMapLocationDot/> </i>
                        </a>
                    </div>

                    <div className="text-gray-800">
                        <h5 className="font-bold">Betim</h5>
                        <p>
                        Rua Rio Negro, 73 - casa 11 - Bairro Brasileira<br></br>
                        Parceiro FISK
                        </p>
                        <a href="https://maps.app.goo.gl/HnEhDz7fWpxD2QQ3A" target="_blank" rel="noreferrer">
                            <i className="text-3xl text-cyan-700" ><FaMapLocationDot/> </i>
                        </a>
                    </div>

                    <div className="text-gray-800">
                        <h5 className="font-bold">Divinópolis</h5>
                        <p>
                        Rua Itapecerica, 173<br></br>
                        Centro
                        </p>
                        <a href="https://goo.gl/maps/jNfBqbPXKxcEhKbr8" target="_blank" rel="noreferrer">
                            <i className="text-3xl text-cyan-700" ><FaMapLocationDot/> </i>
                        </a>
                    </div>

                    <div className="text-gray-800">
                        <h5 className="font-bold">Ipatinga</h5>
                        <p>Rua Macapá, 510 - Bairro Veneza<br></br>
                            Parceiro Uniasselvi
                            </p>
                        <a href="https://maps.app.goo.gl/RQGa1rBBddapUP9e7" target="_blank" rel="noreferrer">
                            <i className="text-3xl text-cyan-700" ><FaMapLocationDot/> </i>
                        </a>
                    </div>

                    <div className="text-gray-800">
                        <h5 className="font-bold">Montes Claros</h5>
                        <p>
                        Rua Eugênio Nunes, 256<br></br>
                        Jardim São Luiz
                        </p>
                        <a href="https://goo.gl/maps/8EJLt7hV7gAQ81k5A" target="_blank" rel="noreferrer">
                            <i className="text-3xl text-cyan-700" ><FaMapLocationDot/> </i>
                        </a>
                    </div>

                    <div className="text-gray-800">
                        <h5 className="font-bold">Sede</h5>
                        <p>
                        Rua Dom Assis, 66 - Centro<br></br>
                        Pouso Alegre
                        </p>
                        <a href="https://goo.gl/maps/8ZzJDGstBD3zwMKBA" target="_blank" rel="noreferrer">
                            <i className="text-3xl text-cyan-700" ><FaMapLocationDot/> </i>
                        </a>
                    </div>

                    <div className="text-gray-800">
                        <h5 className="font-bold">Uberlândia</h5>
                        <p>
                        Av. Afonso Pena, 3538<br></br>
                        Bairro Brasil
                        </p>
                        <a href="https://goo.gl/maps/uuZWyrt6isKNbNr98" target="_blank" rel="noreferrer">
                            <i className="text-3xl text-cyan-700" ><FaMapLocationDot/> </i>
                        </a>
                    </div>

                </div>

            </Accordion.Content>
    </Accordion.Panel>


    <Accordion.Panel>
        <Accordion.Title className="text-white text-2xl" >Paraná</Accordion.Title>
            <Accordion.Content>
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-5">

                    <div className="text-gray-800">
                        <h5 className="font-bold">Maringá</h5>
                        <p>
                        Avenida Colombo, 9161 - 1º andar<br></br> 
                        Shopping Catuaí | Parceiro FGV
                        </p>
                        <a href="https://maps.app.goo.gl/9pho8sMKaE7YvySg6" target="_blank" rel="noreferrer">
                            <i className="text-3xl text-cyan-700" ><FaMapLocationDot/> </i>
                        </a>
                    </div>

                </div>
            </Accordion.Content>
    </Accordion.Panel>


    <Accordion.Panel>
        <Accordion.Title className="text-white text-2xl" >Pará</Accordion.Title>
            <Accordion.Content>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-5">

                    <div className="text-gray-800">
                        <h5 className="font-bold">Belém</h5>
                        <p>
                        Avenida Nazaré, 1319<br></br>
                        Nazaré
                        </p>
                        <a href="https://goo.gl/maps/YomUjBf3cVxTFfh99?coh=178571&entry=tt" target="_blank" rel="noreferrer">
                            <i className="text-3xl text-cyan-700" ><FaMapLocationDot/> </i>
                        </a>
                    </div>

                </div>
            </Accordion.Content>
    </Accordion.Panel>

</Accordion>

</div>

</div>

);
});

