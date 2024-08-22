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

export default function Accordiontime() {
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
                        <h5 className="font-bold">Bruno Fialho</h5>
                        <p className="mb-2">Central de vendas</p>
                        <a href="https://api.whatsapp.com/send?phone=5511953207279&text=Olá,%20tudo%20bem?%20" target="_blank" rel="noreferrer">
                            <i className="text-2xl text-violet-800 float-start me-1" ><FaWhatsapp/> </i> <p className="text-violet-800">(11) 95320-7279</p>
                        </a>
                    </div>

                    <div className="text-gray-800 p-3">
                        <img className="rounded-md bg-cyan-400 mb-3 shadow-lg shadow-slate-400" src={Cinthia} alt="team" title="team"/>
                        <h5 className="font-bold">Cinthia Santos</h5>
                        <p className="mb-2">Central de vendas</p>
                        <a href="https://api.whatsapp.com/send?phone=5511961864091&text=Olá,%20tudo%20bem?%20" target="_blank" rel="noreferrer">
                            <i className="text-2xl text-violet-800 float-start me-1" ><FaWhatsapp/> </i> <p className="text-violet-800">(11) 96186-4091</p>
                        </a>
                    </div>

                    <div className="text-gray-800 p-3">
                        <img className="rounded-md bg-yellow-200 mb-3 shadow-lg shadow-slate-400" src={Evelyn} alt="team" title="team"/>
                        <h5 className="font-bold">Evelyn Pereira</h5>
                        <p className="mb-2">Central de vendas</p>
                        <a href="https://api.whatsapp.com/send?phone=5511937393427&text=Olá,%20tudo%20bem?%20" target="_blank" rel="noreferrer">
                            <i className="text-2xl text-violet-800 float-start me-1" ><FaWhatsapp/> </i> <p className="text-violet-800">(11) 93739-3427</p>
                        </a>
                    </div>

                    <div className="text-gray-800 p-3">
                        <img className="rounded-md bg-rose-400 mb-3 shadow-lg shadow-slate-400" src={Pauliana} alt="team" title="team"/>
                        <h5 className="font-bold">Pauliana Freitas</h5>
                        <p className="mb-2">Central de vendas</p>
                        <a href="https://api.whatsapp.com/send?phone=5511942363331 &text=Olá,%20tudo%20bem?%20" target="_blank" rel="noreferrer">
                            <i className="text-2xl text-violet-800 float-start me-1" ><FaWhatsapp/> </i> <p className="text-violet-800">(11) 94236-3331 </p>
                        </a>
                    </div>

                    <div className="text-gray-800 p-3">
                        <img className="rounded-md bg-indigo-500 mb-3 shadow-lg shadow-slate-400" src={Thaina} alt="team" title="team"/>
                        <h5 className="font-bold">Thainá Cavalcante</h5>
                        <p className="mb-2">Central de vendas</p>
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
                        <h5 className="font-bold">Vagner Lopes</h5>
                        <p className="mb-2">Coordenador Comercial</p>
                        <a href="https://api.whatsapp.com/send?phone=5511973328858&text=Olá,%20tudo%20bem?%20" target="_blank" rel="noreferrer">
                            <i className="text-2xl text-violet-800 float-start me-1" ><FaWhatsapp/> </i> <p className="text-violet-800">(11) 97332-8858</p>
                        </a>
                    </div>

                    <div className="text-gray-800 p-3">
                        <img className=" rounded-md bg-cyan-400 mb-3 shadow-lg shadow-slate-400" src={Bruna} alt="team" title="team"/>
                        <h5 className="font-bold">Bruna César</h5>
                        <p className="mb-2">Piracicaba</p>
                        <a href="https://api.whatsapp.com/send?phone=5519996964008&text=Olá,%20tudo%20bem?%20" target="_blank" rel="noreferrer">
                            <i className="text-2xl text-violet-800 float-start me-1" ><FaWhatsapp/> </i> <p className="text-violet-800">(19) 99696-4008</p>
                        </a>
                    </div>

                    <div className="text-gray-800 p-3">
                        <img className=" rounded-md bg-yellow-200 mb-3 shadow-lg shadow-slate-400" src={Camila} alt="team" title="team"/>
                        <h5 className="font-bold">Camila Rodrigues</h5>
                        <p className="mb-2">Parcerias</p>
                        <a href="https://api.whatsapp.com/send?phone=5511942363662&text=Olá,%20tudo%20bem?%20" target="_blank" rel="noreferrer">
                            <i className="text-2xl text-violet-800 float-start me-1" ><FaWhatsapp/> </i> <p className="text-violet-800">(11) 94236-3662</p>
                        </a>
                    </div>

                    <div className="text-gray-800 p-3">
                        <img className=" rounded-md bg-green-500 mb-3 shadow-lg shadow-slate-400" src={Debora} alt="team" title="team"/>
                        <h5 className="font-bold">Debora Ounap</h5>
                        <p className="mb-2">Guarulhos</p>
                        <a href="https://api.whatsapp.com/send?phone=5511942363575&text=Olá,%20tudo%20bem?%20" target="_blank" rel="noreferrer">
                            <i className="text-2xl text-violet-800 float-start me-1" ><FaWhatsapp/> </i> <p className="text-violet-800">(11) 94236-3575</p>
                        </a>
                    </div>


                    <div className="text-gray-800 p-3">
                        <img className=" rounded-md bg-orange-400 mb-3 shadow-lg shadow-slate-400" src={Diego} alt="team" title="team"/>
                        <h5 className="font-bold">Diego Rodrigues</h5>
                        <p className="mb-2">Bragança Paulista e Jundiaí</p>
                        <a href="https://api.whatsapp.com/send?phone=5511942362865&text=Olá,%20tudo%20bem?%20" target="_blank" rel="noreferrer">
                            <i className="text-2xl text-violet-800 float-start me-1" ><FaWhatsapp/> </i> <p className="text-violet-800">(11) 94236-2865</p>
                        </a>
                    </div>


                    <div className="text-gray-800 p-3">
                        <img className=" rounded-md bg-teal-400 mb-3 shadow-lg shadow-slate-400" src={Douglas} alt="team" title="team"/>
                        <h5 className="font-bold">Douglas Cunha</h5>
                        <p className="mb-2">Bauru, Presidente Prudente e Marília</p>
                        <a href="https://api.whatsapp.com/send?phone=5514999042832&text=Olá,%20tudo%20bem?%20" target="_blank" rel="noreferrer">
                            <i className="text-2xl text-violet-800 float-start me-1" ><FaWhatsapp/> </i> <p className="text-violet-800">(14) 99904-2832</p>
                        </a>
                    </div>

                    <div className="text-gray-800 p-3">
                        <img className=" rounded-md bg-amber-500 mb-3 shadow-lg shadow-slate-400" src={Erica} alt="team" title="team"/>
                        <h5 className="font-bold">Érica Martins</h5>
                        <p className="mb-2">Sorocaba e Itu</p>
                        <a href="https://api.whatsapp.com/send?phone=5515996257812&text=Olá,%20tudo%20bem?%20" target="_blank" rel="noreferrer">
                            <i className="text-2xl text-violet-800 float-start me-1" ><FaWhatsapp/> </i> <p className="text-violet-800">(15) 99625-7812</p>
                        </a>
                    </div>

                    <div className="text-gray-800 p-3">
                        <img className=" rounded-md bg-lime-500 mb-3 shadow-lg shadow-slate-400" src={Juliana} alt="team" title="team"/>
                        <h5 className="font-bold">Juliana Nascimento</h5>
                        <p className="mb-2">São José dos Campos e Caraguatatuba</p>
                        <a href="https://api.whatsapp.com/send?phone=5512996538729&text=Olá,%20tudo%20bem?%20" target="_blank" rel="noreferrer">
                            <i className="text-2xl text-violet-800 float-start me-1" ><FaWhatsapp/> </i> <p className="text-violet-800">(12) 99653-8729</p>
                        </a>
                    </div>

                    <div className="text-gray-800 p-3">
                        <img className=" rounded-md bg-indigo-400 mb-3 shadow-lg shadow-slate-400" src={Kaliane} alt="team" title="team"/>
                        <h5 className="font-bold">Kalliane Maximo</h5>
                        <p className="mb-2">Franca e Araraquara</p>
                        <a href="https://api.whatsapp.com/send?phone=5516997500042&text=Olá,%20tudo%20bem?%20" target="_blank" rel="noreferrer">
                            <i className="text-2xl text-violet-800 float-start me-1" ><FaWhatsapp/> </i> <p className="text-violet-800">(16) 99750-0042</p>
                        </a>
                    </div>

                    <div className="text-gray-800 p-3">
                        <img className=" rounded-md bg-fuchsia-500 mb-3 shadow-lg shadow-slate-400" src={Renato} alt="team" title="team"/>
                        <h5 className="font-bold">Renato Silva</h5>
                        <p className="mb-2">Campinas</p>
                        <a href="https://api.whatsapp.com/send?phone=5519996922312&text=Olá,%20tudo%20bem?%20" target="_blank" rel="noreferrer">
                            <i className="text-2xl text-violet-800 float-start me-1" ><FaWhatsapp/> </i> <p className="text-violet-800">(19) 99692-2312</p>
                        </a>
                    </div>

                    <div className="text-gray-800 p-3">
                        <img className=" rounded-md bg-orange-400 mb-3 shadow-lg shadow-slate-400" src={Rubens} alt="team" title="team"/>
                        <h5 className="font-bold">Rubens Quicoli</h5>
                        <p className="mb-2">Santos</p>
                        <a href="https://api.whatsapp.com/send?phone=551399778-8472&text=Olá,%20tudo%20bem?%20" target="_blank" rel="noreferrer">
                            <i className="text-2xl text-violet-800 float-start me-1" ><FaWhatsapp/> </i> <p className="text-violet-800">(13) 99778-8472</p>
                        </a>
                    </div>

                    <div className="text-gray-800 p-3">
                        <img className=" rounded-md bg-pink-500 mb-3 shadow-lg shadow-slate-400" src={Sheila} alt="team" title="team"/>
                        <h5 className="font-bold">Sheila Lima</h5>
                        <p className="mb-2">ABC e Osasco</p>
                        <a href="https://api.whatsapp.com/send?phone=5511997832536&text=Olá,%20tudo%20bem?%20" target="_blank" rel="noreferrer">
                            <i className="text-2xl text-violet-800 float-start me-1" ><FaWhatsapp/> </i> <p className="text-violet-800">(11) 99783-2536</p>
                        </a>
                    </div>

                    <div className="text-gray-800 p-3">
                        <img className=" rounded-md bg-violet-500 mb-3 shadow-lg shadow-slate-400" src={Shirley} alt="team" title="team"/>
                        <h5 className="font-bold">Shirley Carvalho</h5>
                        <p className="mb-2">Campinas</p>
                        <a href="https://api.whatsapp.com/send?phone=5519997982800&text=Olá,%20tudo%20bem?%20" target="_blank" rel="noreferrer">
                            <i className="text-2xl text-violet-800 float-start me-1" ><FaWhatsapp/> </i> <p className="text-violet-800">(19) 99798-2800</p>
                        </a>
                    </div>

                    <div className="text-gray-800 p-3">
                        <img className=" rounded-md bg-green-500 mb-3 shadow-lg shadow-slate-400" src={Simone} alt="team" title="team"/>
                        <h5 className="font-bold">Simone Lima</h5>
                        <p className="mb-2">São José do Rio Preto e Araçatuba</p>
                        <a href="https://api.whatsapp.com/send?phone=5517996567923&text=Olá,%20tudo%20bem?%20" target="_blank" rel="noreferrer">
                            <i className="text-2xl text-violet-800 float-start me-1" ><FaWhatsapp/> </i> <p className="text-violet-800">(17) 99656-7923</p>
                        </a>
                    </div>

                    <div className="text-gray-800 p-3">
                        <img className=" rounded-md bg-sky-500 mb-3 shadow-lg shadow-slate-400" src={Tiago} alt="team" title="team"/>
                        <h5 className="font-bold">Thiago Xavier</h5>
                        <p className="mb-2">Praia Grande e Lorena</p>
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
                        <h5 className="font-bold">Mantovani Junior</h5>
                        <p className="mb-2">Coordenador Comercial</p>
                        <a href="https://api.whatsapp.com/send?phone=5531999498112&text=Olá,%20tudo%20bem?%20" target="_blank" rel="noreferrer">
                            <i className="text-2xl text-violet-800 float-start me-1" ><FaWhatsapp/> </i> <p className="text-violet-800">(31) 99949-8112</p>
                        </a>
                    </div>

                    <div className="text-gray-800 p-3">
                        <img className=" rounded-md bg-cyan-400 mb-3 shadow-lg shadow-slate-400" src={Alessandro} alt="team" title="team"/>
                        <h5 className="font-bold">Alessandro Ribeiro</h5>
                        <p className="mb-2">Divinópolis</p>
                        <a href="https://api.whatsapp.com/send?phone=5537999871322&text=Olá,%20tudo%20bem?%20" target="_blank" rel="noreferrer">
                            <i className="text-2xl text-violet-800 float-start me-1" ><FaWhatsapp/> </i> <p className="text-violet-800">(37) 99987-1322</p>
                        </a>
                    </div>

                    <div className="text-gray-800 p-3">
                        <img className=" rounded-md bg-amber-400 mb-3 shadow-lg shadow-slate-400" src={Elias} alt="team" title="team"/>
                        <h5 className="font-bold">Elias Monteiro</h5>
                        <p className="mb-2">Belo Horizonte</p>
                        <a href="https://api.whatsapp.com/send?phone=5531971929175&text=Olá,%20tudo%20bem?%20" target="_blank" rel="noreferrer">
                            <i className="text-2xl text-violet-800 float-start me-1" ><FaWhatsapp/> </i> <p className="text-violet-800">(31) 97192-9175</p>
                        </a>
                    </div>

                    <div className="text-gray-800 p-3">
                        <img className=" rounded-md bg-rose-400 mb-3 shadow-lg shadow-slate-400" src={Catia} alt="team" title="team"/>
                        <h5 className="font-bold">Cátia Viana</h5>
                        <p className="mb-2">Sul de Minas</p>
                        <a href="https://api.whatsapp.com/send?phone=5535992010017&text=Olá,%20tudo%20bem?%20" target="_blank" rel="noreferrer">
                            <i className="text-2xl text-violet-800 float-start me-1" ><FaWhatsapp/> </i> <p className="text-violet-800">(35) 99201-0017</p>
                        </a>
                    </div>

                    <div className="text-gray-800 p-3">
                        <img className=" rounded-md bg-lime-400 mb-3 shadow-lg shadow-slate-400" src={Geuler} alt="team" title="team"/>
                        <h5 className="font-bold">Giuller Mamede</h5>
                        <p className="mb-2">Triângulo Mineiro</p>
                        <a href="https://api.whatsapp.com/send?phone=553498075703&text=Olá,%20tudo%20bem?%20" target="_blank" rel="noreferrer">
                            <i className="text-2xl text-violet-800 float-start me-1" ><FaWhatsapp/> </i> <p className="text-violet-800">(34) 9807-5703</p>
                        </a>
                    </div>

                    <div className="text-gray-800 p-3">
                        <img className=" rounded-md bg-red-500 mb-3 shadow-lg shadow-slate-400" src={Marlon} alt="team" title="team"/>
                        <h5 className="font-bold">Marlon Pereira</h5>
                        <p className="mb-2">Montes Claros</p>
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
                        <h5 className="font-bold">Felipe Bonetti</h5>
                        <p className="mb-2">Maringá</p>
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
                        <h5 className="font-bold">Claudio Lima</h5>
                        <p className="mb-2">Belém</p>
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
}

