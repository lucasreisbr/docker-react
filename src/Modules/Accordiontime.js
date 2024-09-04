import React from "react";
import { Accordion } from "flowbite-react";
import { FaWhatsapp } from "react-icons/fa6";
import Bruno from "../images/team/bruno-fialho.webp";
import Vagner from "../images/team/vagner-lopes.webp";
import Cinthia from "../images/team/cinthia-santos.webp";
import Evelyn from "../images/team/evelyn.webp";
import Pauliana from "../images/team/pauliana.webp";
import Thaina from "../images/team/thaina.webp";
import Bruna from "../images/team/bruna.webp";
import Camila from "../images/team/camila.webp";
import Debora from "../images/team/debora.webp";
import Diego from "../images/team/diego.webp";
import Douglas from "../images/team/douglas.webp";
import Erica from "../images/team/erica.webp";
import Juliana from "../images/team/juliana.webp";
import Kaliane from "../images/team/kaliane.webp";
import Renato from "../images/team/renato.webp";
import Rubens from "../images/team/rubens.webp";
import Sheila from "../images/team/sheila.webp";
import Shirley from "../images/team/shirley.webp";
import Simone from "../images/team/simone.webp";
import Tiago from "../images/team/thiago.webp";
import Mantovani from "../images/team/mantovani.webp";
import Alessandro from "../images/team/alessandro.webp";
import Elias from "../images/team/elias.webp";
import Catia from "../images/team/catia.webp";
import Geuler from "../images/team/giuler.webp";
import Marlon from "../images/team/marlon.webp";
import Felipe from "../images/team/felipe.webp";
import Claudio from "../images/team/caludio.webp";
import './Accordiontime.css';

export default React.memo(function Accordiontime() {
return (



<div className="flex flex-row justify-center mt-12 mb-24 p-3 lg:p-0">

    <div className="container accordion-time">

<Accordion collapseAll>

<Accordion.Panel>
        <Accordion.Title className="text-white text-2xl" >Central de vendas</Accordion.Title>
            <Accordion.Content>
            
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">

                <div className="text-gray-800 p-3">
                        <img className="rounded-md bg-purple-500 mb-3 shadow-lg shadow-slate-400" src={Bruno} alt="Bruno Fialho" title="Bruno Fialho"/>
                        <h5 className="font-bold">Central de vendas</h5>
                        <p className="mb-2">Bruno Fialho</p>
                        <a href="https://api.whatsapp.com/send?phone=5511953207279&text=Olá,%20tudo%20bem?%20" target="_blank" rel="noreferrer">
                            <i className="text-2xl text-violet-800 float-start me-1" ><FaWhatsapp/> </i> <p className="text-violet-800">(11) 95320-7279</p>
                        </a>
                    </div>

                    <div className="text-gray-800 p-3">
                        <img className="rounded-md bg-cyan-400 mb-3 shadow-lg shadow-slate-400" src={Cinthia} alt="team" title="team"/>
                        <h5 className="font-bold">Central de vendas</h5>
                        <p className="mb-2">Cinthia Santos</p>
                        <a href="https://api.whatsapp.com/send?phone=5511961864091&text=Olá,%20tudo%20bem?%20" target="_blank" rel="noreferrer">
                            <i className="text-2xl text-violet-800 float-start me-1" ><FaWhatsapp/> </i> <p className="text-violet-800">(11) 96186-4091</p>
                        </a>
                    </div>

                    <div className="text-gray-800 p-3">
                        <img className="rounded-md bg-yellow-200 mb-3 shadow-lg shadow-slate-400" src={Evelyn} alt="team" title="team"/>
                        <h5 className="font-bold">Central de vendas</h5>
                        <p className="mb-2">Evelyn Pereira</p>
                        <a href="https://api.whatsapp.com/send?phone=5511937393427&text=Olá,%20tudo%20bem?%20" target="_blank" rel="noreferrer">
                            <i className="text-2xl text-violet-800 float-start me-1" ><FaWhatsapp/> </i> <p className="text-violet-800">(11) 93739-3427</p>
                        </a>
                    </div>

                    <div className="text-gray-800 p-3">
                        <img className="rounded-md bg-rose-400 mb-3 shadow-lg shadow-slate-400" src={Pauliana} alt="team" title="team"/>
                        <h5 className="font-bold">Central de vendas</h5>
                        <p className="mb-2">Pauliana Freitas</p>
                        <a href="https://api.whatsapp.com/send?phone=5511942363331 &text=Olá,%20tudo%20bem?%20" target="_blank" rel="noreferrer">
                            <i className="text-2xl text-violet-800 float-start me-1" ><FaWhatsapp/> </i> <p className="text-violet-800">(11) 94236-3331 </p>
                        </a>
                    </div>

                    <div className="text-gray-800 p-3">
                        <img className="rounded-md bg-indigo-500 mb-3 shadow-lg shadow-slate-400" src={Thaina} alt="team" title="team"/>
                        <h5 className="font-bold">Central de vendas</h5>
                        <p className="mb-2">Thainá Cavalcantes</p>
                        <a href="https://api.whatsapp.com/send?phone=5511994480539&text=Olá,%20tudo%20bem?%20" target="_blank" rel="noreferrer">
                            <i className="text-2xl text-violet-800 float-start me-1" ><FaWhatsapp/> </i> <p className="text-violet-800">(11) 99448-0539</p>
                        </a>
                    </div>

                </div>

            </Accordion.Content>
    </Accordion.Panel>

    <Accordion.Panel>
        <Accordion.Title className="text-white text-2xl">São Paulo</Accordion.Title>
            <Accordion.Content>

                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">

                    <div className="text-gray-800 p-3">
                        <img className=" rounded-md bg-purple-500 mb-3 shadow-lg shadow-slate-400" src={Vagner} alt="Vagner Lopes" title="Vagner Lopes"/>
                        <h5 className="font-bold">Coordenador Comercial</h5>
                        <p className="mb-2">Vagner Lopes</p>
                        <a href="https://api.whatsapp.com/send?phone=5511973328858&text=Olá,%20tudo%20bem?%20" target="_blank" rel="noreferrer">
                            <i className="text-2xl text-violet-800 float-start me-1" ><FaWhatsapp/> </i> <p className="text-violet-800">(11) 97332-8858</p>
                        </a>
                    </div>

                    <div className="text-gray-800 p-3">
                        <img className=" rounded-md bg-cyan-400 mb-3 shadow-lg shadow-slate-400" src={Bruna} alt="team" title="team"/>
                        <h5 className="font-bold">Piracicaba</h5>
                        <p className="mb-2">Bruna César</p>
                        <a href="https://api.whatsapp.com/send?phone=5519996964008&text=Olá,%20tudo%20bem?%20" target="_blank" rel="noreferrer">
                            <i className="text-2xl text-violet-800 float-start me-1" ><FaWhatsapp/> </i> <p className="text-violet-800">(19) 99696-4008</p>
                        </a>
                    </div>

                    <div className="text-gray-800 p-3">
                        <img className=" rounded-md bg-yellow-200 mb-3 shadow-lg shadow-slate-400" src={Camila} alt="team" title="team"/>
                        <h5 className="font-bold">Parcerias</h5>
                        <p className="mb-2">Camila Rodrigues</p>
                        <a href="https://api.whatsapp.com/send?phone=5511942363662&text=Olá,%20tudo%20bem?%20" target="_blank" rel="noreferrer">
                            <i className="text-2xl text-violet-800 float-start me-1" ><FaWhatsapp/> </i> <p className="text-violet-800">(11) 94236-3662</p>
                        </a>
                    </div>

                    <div className="text-gray-800 p-3">
                        <img className=" rounded-md bg-green-500 mb-3 shadow-lg shadow-slate-400" src={Debora} alt="team" title="team"/>
                        <h5 className="font-bold">Guarulhos</h5>
                        <p className="mb-2">Debora Ounap</p>
                        <a href="https://api.whatsapp.com/send?phone=5511942363575&text=Olá,%20tudo%20bem?%20" target="_blank" rel="noreferrer">
                            <i className="text-2xl text-violet-800 float-start me-1" ><FaWhatsapp/> </i> <p className="text-violet-800">(11) 94236-3575</p>
                        </a>
                    </div>


                    <div className="text-gray-800 p-3">
                        <img className=" rounded-md bg-orange-400 mb-3 shadow-lg shadow-slate-400" src={Diego} alt="team" title="team"/>
                        <h5 className="font-bold">Bragança Paulista e Jundiaí</h5>
                        <p className="mb-2">Diego Rodrigues</p>
                        <a href="https://api.whatsapp.com/send?phone=5511942362865&text=Olá,%20tudo%20bem?%20" target="_blank" rel="noreferrer">
                            <i className="text-2xl text-violet-800 float-start me-1" ><FaWhatsapp/> </i> <p className="text-violet-800">(11) 94236-2865</p>
                        </a>
                    </div>


                    <div className="text-gray-800 p-3">
                        <img className=" rounded-md bg-teal-400 mb-3 shadow-lg shadow-slate-400" src={Douglas} alt="team" title="team"/>
                        <h5 className="font-bold">Bauru, Presidente Prudente e Marília</h5>
                        <p className="mb-2">Douglas Cunha</p>
                        <a href="https://api.whatsapp.com/send?phone=5514999042832&text=Olá,%20tudo%20bem?%20" target="_blank" rel="noreferrer">
                            <i className="text-2xl text-violet-800 float-start me-1" ><FaWhatsapp/> </i> <p className="text-violet-800">(14) 99904-2832</p>
                        </a>
                    </div>

                    <div className="text-gray-800 p-3">
                        <img className=" rounded-md bg-amber-500 mb-3 shadow-lg shadow-slate-400" src={Erica} alt="team" title="team"/>
                        <h5 className="font-bold">Sorocaba e Itu</h5>
                        <p className="mb-2">Érica Martins</p>
                        <a href="https://api.whatsapp.com/send?phone=5515996257812&text=Olá,%20tudo%20bem?%20" target="_blank" rel="noreferrer">
                            <i className="text-2xl text-violet-800 float-start me-1" ><FaWhatsapp/> </i> <p className="text-violet-800">(15) 99625-7812</p>
                        </a>
                    </div>

                    <div className="text-gray-800 p-3">
                        <img className=" rounded-md bg-lime-500 mb-3 shadow-lg shadow-slate-400" src={Juliana} alt="team" title="team"/>
                        <h5 className="font-bold">São José dos Campos e Caraguatatuba</h5>
                        <p className="mb-2">Juliana Nascimento</p>
                        <a href="https://api.whatsapp.com/send?phone=5512996538729&text=Olá,%20tudo%20bem?%20" target="_blank" rel="noreferrer">
                            <i className="text-2xl text-violet-800 float-start me-1" ><FaWhatsapp/> </i> <p className="text-violet-800">(12) 99653-8729</p>
                        </a>
                    </div>

                    <div className="text-gray-800 p-3">
                        <img className=" rounded-md bg-indigo-400 mb-3 shadow-lg shadow-slate-400" src={Kaliane} alt="team" title="team"/>
                        <h5 className="font-bold">Franca e Araraquara</h5>
                        <p className="mb-2">Kalliane Maximo</p>
                        <a href="https://api.whatsapp.com/send?phone=5516997500042&text=Olá,%20tudo%20bem?%20" target="_blank" rel="noreferrer">
                            <i className="text-2xl text-violet-800 float-start me-1" ><FaWhatsapp/> </i> <p className="text-violet-800">(16) 99750-0042</p>
                        </a>
                    </div>

                    <div className="text-gray-800 p-3">
                        <img className=" rounded-md bg-fuchsia-500 mb-3 shadow-lg shadow-slate-400" src={Renato} alt="team" title="team"/>
                        <h5 className="font-bold">Campinas</h5>
                        <p className="mb-2">Renato Silva</p>
                        <a href="https://api.whatsapp.com/send?phone=5519996922312&text=Olá,%20tudo%20bem?%20" target="_blank" rel="noreferrer">
                            <i className="text-2xl text-violet-800 float-start me-1" ><FaWhatsapp/> </i> <p className="text-violet-800">(19) 99692-2312</p>
                        </a>
                    </div>

                    <div className="text-gray-800 p-3">
                        <img className=" rounded-md bg-orange-400 mb-3 shadow-lg shadow-slate-400" src={Rubens} alt="team" title="team"/>
                        <h5 className="font-bold">Santos</h5>
                        <p className="mb-2">Rubens Quicoli</p>
                        <a href="https://api.whatsapp.com/send?phone=551399778-8472&text=Olá,%20tudo%20bem?%20" target="_blank" rel="noreferrer">
                            <i className="text-2xl text-violet-800 float-start me-1" ><FaWhatsapp/> </i> <p className="text-violet-800">(13) 99778-8472</p>
                        </a>
                    </div>

                    <div className="text-gray-800 p-3">
                        <img className=" rounded-md bg-pink-500 mb-3 shadow-lg shadow-slate-400" src={Sheila} alt="team" title="team"/>
                        <h5 className="font-bold">ABC e Osasco</h5>
                        <p className="mb-2">Sheila Lima</p>
                        <a href="https://api.whatsapp.com/send?phone=5511997832536&text=Olá,%20tudo%20bem?%20" target="_blank" rel="noreferrer">
                            <i className="text-2xl text-violet-800 float-start me-1" ><FaWhatsapp/> </i> <p className="text-violet-800">(11) 99783-2536</p>
                        </a>
                    </div>

                    <div className="text-gray-800 p-3">
                        <img className=" rounded-md bg-violet-500 mb-3 shadow-lg shadow-slate-400" src={Shirley} alt="team" title="team"/>
                        <h5 className="font-bold">Campinas</h5>
                        <p className="mb-2">Shirley Carvalho</p>
                        <a href="https://api.whatsapp.com/send?phone=5519997982800&text=Olá,%20tudo%20bem?%20" target="_blank" rel="noreferrer">
                            <i className="text-2xl text-violet-800 float-start me-1" ><FaWhatsapp/> </i> <p className="text-violet-800">(19) 99798-2800</p>
                        </a>
                    </div>

                    <div className="text-gray-800 p-3">
                        <img className=" rounded-md bg-green-500 mb-3 shadow-lg shadow-slate-400" src={Simone} alt="team" title="team"/>
                        <h5 className="font-bold">São José do Rio Preto e Araçatuba</h5>
                        <p className="mb-2">Simone Lima</p>
                        <a href="https://api.whatsapp.com/send?phone=5517996567923&text=Olá,%20tudo%20bem?%20" target="_blank" rel="noreferrer">
                            <i className="text-2xl text-violet-800 float-start me-1" ><FaWhatsapp/> </i> <p className="text-violet-800">(17) 99656-7923</p>
                        </a>
                    </div>

                    <div className="text-gray-800 p-3">
                        <img className=" rounded-md bg-sky-500 mb-3 shadow-lg shadow-slate-400" src={Tiago} alt="team" title="team"/>
                        <h5 className="font-bold">Praia Grande e Lorena</h5>
                        <p className="mb-2">Thiago Xavier</p>
                        <a href="https://api.whatsapp.com/send?phone=5513996599033&text=Olá,%20tudo%20bem?%20" target="_blank" rel="noreferrer">
                            <i className="text-2xl text-violet-800 float-start me-1" ><FaWhatsapp/> </i> <p className="text-violet-800">(13) 99659-9033</p>
                        </a>
                    </div>

                </div>

            </Accordion.Content>
    </Accordion.Panel>

    <Accordion.Panel>
        <Accordion.Title className="text-white text-2xl" >Minas Gerais</Accordion.Title>
            <Accordion.Content>
            
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">

                    <div className="text-gray-800 p-3">
                        <img className=" rounded-md bg-purple-500 mb-3 shadow-lg shadow-slate-400" src={Mantovani} alt="team" title="team"/>
                        <h5 className="font-bold">Coordenador Comercial</h5>
                        <p className="mb-2">Mantovani Junior</p>
                        <a href="https://api.whatsapp.com/send?phone=5531999498112&text=Olá,%20tudo%20bem?%20" target="_blank" rel="noreferrer">
                            <i className="text-2xl text-violet-800 float-start me-1" ><FaWhatsapp/> </i> <p className="text-violet-800">(31) 99949-8112</p>
                        </a>
                    </div>

                    <div className="text-gray-800 p-3">
                        <img className=" rounded-md bg-cyan-400 mb-3 shadow-lg shadow-slate-400" src={Alessandro} alt="team" title="team"/>
                        <h5 className="font-bold">Divinópolis</h5>
                        <p className="mb-2">Alessandro Ribeiro</p>
                        <a href="https://api.whatsapp.com/send?phone=5537999871322&text=Olá,%20tudo%20bem?%20" target="_blank" rel="noreferrer">
                            <i className="text-2xl text-violet-800 float-start me-1" ><FaWhatsapp/> </i> <p className="text-violet-800">(37) 99987-1322</p>
                        </a>
                    </div>

                    <div className="text-gray-800 p-3">
                        <img className=" rounded-md bg-amber-400 mb-3 shadow-lg shadow-slate-400" src={Elias} alt="team" title="team"/>
                        <h5 className="font-bold">Belo Horizonte</h5>
                        <p className="mb-2">Elias Monteiro</p>
                        <a href="https://api.whatsapp.com/send?phone=5531971929175&text=Olá,%20tudo%20bem?%20" target="_blank" rel="noreferrer">
                            <i className="text-2xl text-violet-800 float-start me-1" ><FaWhatsapp/> </i> <p className="text-violet-800">(31) 97192-9175</p>
                        </a>
                    </div>

                    <div className="text-gray-800 p-3">
                        <img className=" rounded-md bg-rose-400 mb-3 shadow-lg shadow-slate-400" src={Catia} alt="team" title="team"/>
                        <h5 className="font-bold">Sul de Minas</h5>
                        <p className="mb-2">Cátia Viana</p>
                        <a href="https://api.whatsapp.com/send?phone=5535992010017&text=Olá,%20tudo%20bem?%20" target="_blank" rel="noreferrer">
                            <i className="text-2xl text-violet-800 float-start me-1" ><FaWhatsapp/> </i> <p className="text-violet-800">(35) 99201-0017</p>
                        </a>
                    </div>

                    <div className="text-gray-800 p-3">
                        <img className=" rounded-md bg-lime-400 mb-3 shadow-lg shadow-slate-400" src={Geuler} alt="team" title="team"/>
                        <h5 className="font-bold">Triângulo Mineiro</h5>
                        <p className="mb-2">Giuller Mamede</p>
                        <a href="https://api.whatsapp.com/send?phone=553498075703&text=Olá,%20tudo%20bem?%20" target="_blank" rel="noreferrer">
                            <i className="text-2xl text-violet-800 float-start me-1" ><FaWhatsapp/> </i> <p className="text-violet-800">(34) 9807-5703</p>
                        </a>
                    </div>

                    <div className="text-gray-800 p-3">
                        <img className=" rounded-md bg-red-500 mb-3 shadow-lg shadow-slate-400" src={Marlon} alt="team" title="team"/>
                        <h5 className="font-bold">Montes Claros</h5>
                        <p className="mb-2">Marlon Pereira</p>
                        <a href="https://api.whatsapp.com/send?phone=5538998118753&text=Olá,%20tudo%20bem?%20" target="_blank" rel="noreferrer">
                            <i className="text-2xl text-violet-800 float-start me-1" ><FaWhatsapp/> </i> <p className="text-violet-800">(38) 99811-8753</p>
                        </a>
                    </div>

                </div>

            </Accordion.Content>
    </Accordion.Panel>


    <Accordion.Panel>
        <Accordion.Title className="text-white text-2xl" >Paraná</Accordion.Title>
            <Accordion.Content>
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">

                    <div className="text-gray-800 p-3">
                        <img className=" rounded-md bg-purple-500 mb-3 shadow-lg shadow-slate-400" src={Felipe} alt="team" title="team"/>
                        <h5 className="font-bold">Maringá</h5>
                        <p className="mb-2">Felipe Bonetti</p>
                        <a href="https://api.whatsapp.com/send?phone=5544991182366&text=Olá,%20tudo%20bem?%20" target="_blank" rel="noreferrer">
                            <i className="text-2xl text-violet-800 float-start me-1" ><FaWhatsapp/> </i> <p className="text-violet-800">(44) 99118-2366</p>
                        </a>
                    </div>

                </div>
            </Accordion.Content>
    </Accordion.Panel>


    <Accordion.Panel>
        <Accordion.Title className="text-white text-2xl" >Pará</Accordion.Title>
            <Accordion.Content>
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">

                    <div className="text-gray-800 p-3">
                        <img className=" rounded-md bg-teal-400 mb-3 shadow-lg shadow-slate-400" src={Claudio} alt="team" title="team"/>
                        <h5 className="font-bold">Belém</h5>
                        <p className="mb-2">Claudio Lima</p>
                        <a href="https://api.whatsapp.com/send?phone=5591991325868&text=Olá,%20tudo%20bem?%20" target="_blank" rel="noreferrer">
                            <i className="text-2xl text-violet-800 float-start me-1" ><FaWhatsapp/> </i> <p className="text-violet-800">(91) 99132-5868</p>
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

