import { Accordion } from "flowbite-react";
import { FaWhatsapp } from "react-icons/fa6";
import Teamphoto from "../images/team/photo.png";
import Bruno from "../images/team/bruno-fialho.webp";
import Vagner from "../images/team/vagner-lopes.webp";
import Cinthia from "../images/team/cinthia-santos.webp";
import Evelyn from "../images/team/evelyn.webp";
import Pauliana from "../images/team/pauliana.webp";
import Thaina from "../images/team/thaina.webp";
import './Accordiontime.css';

export default function Accordiontime() {
return (



<div className="flex flex-row justify-center mt-12 mb-24 p-3 lg:p-0">

    <div className="container accordion-time">

<Accordion collapseAll>

<Accordion.Panel>
        <Accordion.Title className="text-white text-2xl" >Central de vendas</Accordion.Title>
            <Accordion.Content>
            
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">

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
                        <img className="rounded-md bg-green-500 mb-3 shadow-lg shadow-slate-400" src={Pauliana} alt="team" title="team"/>
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

                <div className=" grid grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">

                    <div className="text-gray-800 p-3">
                        <img className=" rounded-md bg-purple-500 mb-3 shadow-lg shadow-slate-400" src={Vagner} alt="Vagner Lopes" title="Vagner Lopes"/>
                        <h5 className="font-bold">Vagner Lopes</h5>
                        <p className="mb-2">Coordenador Comercial</p>
                        <a href="https://api.whatsapp.com/send?phone=5511973328858&text=Olá,%20tudo%20bem?%20" target="_blank" rel="noreferrer">
                            <i className="text-2xl text-violet-800 float-start me-1" ><FaWhatsapp/> </i> <p className="text-violet-800">(11) 97332-8858</p>
                        </a>
                    </div>

                    <div className="text-gray-800 p-3">
                        <img className=" rounded-md bg-cyan-400 mb-3 shadow-lg shadow-slate-400" src={Teamphoto} alt="team" title="team"/>
                        <h5 className="font-bold">Vagner Lopes</h5>
                        <p className="mb-2">Coordenador Comercial</p>
                        <a href="https://api.whatsapp.com/send?phone=5511973328858&text=Olá,%20tudo%20bem?%20" target="_blank" rel="noreferrer">
                            <i className="text-2xl text-violet-800 float-start me-1" ><FaWhatsapp/> </i> <p className="text-violet-800">11 9000-0000</p>
                        </a>
                    </div>

                    <div className="text-gray-800 p-3">
                        <img className=" rounded-md bg-yellow-200 mb-3 shadow-lg shadow-slate-400" src={Teamphoto} alt="team" title="team"/>
                        <h5 className="font-bold">Vagner Lopes</h5>
                        <p className="mb-2">Coordenador Comercial</p>
                        <a href="https://api.whatsapp.com/send?phone=5511973328858&text=Olá,%20tudo%20bem?%20" target="_blank" rel="noreferrer">
                            <i className="text-2xl text-violet-800 float-start me-1" ><FaWhatsapp/> </i> <p className="text-violet-800">11 9000-0000</p>
                        </a>
                    </div>

                    <div className="text-gray-800 p-3">
                        <img className=" rounded-md bg-green-500 mb-3 shadow-lg shadow-slate-400" src={Teamphoto} alt="team" title="team"/>
                        <h5 className="font-bold">Vagner Lopes</h5>
                        <p className="mb-2">Coordenador Comercial</p>
                        <a href="https://api.whatsapp.com/send?phone=5511973328858&text=Olá,%20tudo%20bem?%20" target="_blank" rel="noreferrer">
                            <i className="text-2xl text-violet-800 float-start me-1" ><FaWhatsapp/> </i> <p className="text-violet-800">11 9000-0000</p>
                        </a>
                    </div>


                    <div className="text-gray-800 p-3">
                        <img className=" rounded-md bg-orange-400 mb-3 shadow-lg shadow-slate-400" src={Teamphoto} alt="team" title="team"/>
                        <h5 className="font-bold">Vagner Lopes</h5>
                        <p className="mb-2">Coordenador Comercial</p>
                        <a href="https://api.whatsapp.com/send?phone=5511973328858&text=Olá,%20tudo%20bem?%20" target="_blank" rel="noreferrer">
                            <i className="text-2xl text-violet-800 float-start me-1" ><FaWhatsapp/> </i> <p className="text-violet-800">11 9000-0000</p>
                        </a>
                    </div>


                    <div className="text-gray-800 p-3">
                        <img className=" rounded-md bg-teal-400 mb-3 shadow-lg shadow-slate-400" src={Teamphoto} alt="team" title="team"/>
                        <h5 className="font-bold">Vagner Lopes</h5>
                        <p className="mb-2">Coordenador Comercial</p>
                        <a href="https://api.whatsapp.com/send?phone=5511973328858&text=Olá,%20tudo%20bem?%20" target="_blank" rel="noreferrer">
                            <i className="text-2xl text-violet-800 float-start me-1" ><FaWhatsapp/> </i> <p className="text-violet-800">11 9000-0000</p>
                        </a>
                    </div>

                </div>

            </Accordion.Content>
    </Accordion.Panel>

    <Accordion.Panel>
        <Accordion.Title className="text-white text-2xl" >Minas Gerais</Accordion.Title>
            <Accordion.Content>
            
                <div className=" grid grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">

                <div className="text-gray-800 p-3">
                        <img className=" rounded-md bg-purple-500 mb-3 shadow-lg shadow-slate-400" src={Teamphoto} alt="team" title="team"/>
                        <h5 className="font-bold">Vagner Lopes</h5>
                        <p className="mb-2">Coordenador Comercial</p>
                        <a href="https://api.whatsapp.com/send?phone=5511973328858&text=Olá,%20tudo%20bem?%20" target="_blank" rel="noreferrer">
                            <i className="text-2xl text-violet-800 float-start me-1" ><FaWhatsapp/> </i> <p className="text-violet-800">11 9000-0000</p>
                        </a>
                    </div>

                    <div className="text-gray-800 p-3">
                        <img className=" rounded-md bg-cyan-400 mb-3 shadow-lg shadow-slate-400" src={Teamphoto} alt="team" title="team"/>
                        <h5 className="font-bold">Vagner Lopes</h5>
                        <p className="mb-2">Coordenador Comercial</p>
                        <a href="https://api.whatsapp.com/send?phone=5511973328858&text=Olá,%20tudo%20bem?%20" target="_blank" rel="noreferrer">
                            <i className="text-2xl text-violet-800 float-start me-1" ><FaWhatsapp/> </i> <p className="text-violet-800">11 9000-0000</p>
                        </a>
                    </div>

                    <div className="text-gray-800 p-3">
                        <img className=" rounded-md bg-yellow-200 mb-3 shadow-lg shadow-slate-400" src={Teamphoto} alt="team" title="team"/>
                        <h5 className="font-bold">Vagner Lopes</h5>
                        <p className="mb-2">Coordenador Comercial</p>
                        <a href="https://api.whatsapp.com/send?phone=5511973328858&text=Olá,%20tudo%20bem?%20" target="_blank" rel="noreferrer">
                            <i className="text-2xl text-violet-800 float-start me-1" ><FaWhatsapp/> </i> <p className="text-violet-800">11 9000-0000</p>
                        </a>
                    </div>

                </div>

            </Accordion.Content>
    </Accordion.Panel>


    <Accordion.Panel>
        <Accordion.Title className="text-white text-2xl" >Paraná</Accordion.Title>
            <Accordion.Content>
                <div className=" grid grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">

                    <div className="text-gray-800 p-3">
                        <img className=" rounded-md bg-purple-500 mb-3 shadow-lg shadow-slate-400" src={Teamphoto} alt="team" title="team"/>
                        <h5 className="font-bold">Vagner Lopes</h5>
                        <p className="mb-2">Coordenador Comercial</p>
                        <a href="https://api.whatsapp.com/send?phone=5511973328858&text=Olá,%20tudo%20bem?%20" target="_blank" rel="noreferrer">
                            <i className="text-2xl text-violet-800 float-start me-1" ><FaWhatsapp/> </i> <p className="text-violet-800">11 9000-0000</p>
                        </a>
                    </div>

                    <div className="text-gray-800 p-3">
                        <img className=" rounded-md bg-cyan-400 mb-3 shadow-lg shadow-slate-400" src={Teamphoto} alt="team" title="team"/>
                        <h5 className="font-bold">Vagner Lopes</h5>
                        <p className="mb-2">Coordenador Comercial</p>
                        <a href="https://api.whatsapp.com/send?phone=5511973328858&text=Olá,%20tudo%20bem?%20" target="_blank" rel="noreferrer">
                            <i className="text-2xl text-violet-800 float-start me-1" ><FaWhatsapp/> </i> <p className="text-violet-800">11 9000-0000</p>
                        </a>
                    </div>

                    <div className="text-gray-800 p-3">
                        <img className=" rounded-md bg-yellow-200 mb-3 shadow-lg shadow-slate-400" src={Teamphoto} alt="team" title="team"/>
                        <h5 className="font-bold">Vagner Lopes</h5>
                        <p className="mb-2">Coordenador Comercial</p>
                        <a href="https://api.whatsapp.com/send?phone=5511973328858&text=Olá,%20tudo%20bem?%20" target="_blank" rel="noreferrer">
                            <i className="text-2xl text-violet-800 float-start me-1" ><FaWhatsapp/> </i> <p className="text-violet-800">11 9000-0000</p>
                        </a>
                    </div>

                </div>
            </Accordion.Content>
    </Accordion.Panel>


    <Accordion.Panel>
        <Accordion.Title className="text-white text-2xl" >Pará</Accordion.Title>
            <Accordion.Content>
                <div className=" grid grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">

                    <div className="text-gray-800 p-3">
                        <img className=" rounded-md bg-purple-500 mb-3 shadow-lg shadow-slate-400" src={Teamphoto} alt="team" title="team"/>
                        <h5 className="font-bold">Vagner Lopes</h5>
                        <p className="mb-2">Coordenador Comercial</p>
                        <a href="https://api.whatsapp.com/send?phone=5511973328858&text=Olá,%20tudo%20bem?%20" target="_blank" rel="noreferrer">
                            <i className="text-2xl text-violet-800 float-start me-1" ><FaWhatsapp/> </i> <p className="text-violet-800">11 9000-0000</p>
                        </a>
                    </div>

                    <div className="text-gray-800 p-3">
                        <img className=" rounded-md bg-cyan-400 mb-3 shadow-lg shadow-slate-400" src={Teamphoto} alt="team" title="team"/>
                        <h5 className="font-bold">Vagner Lopes</h5>
                        <p className="mb-2">Coordenador Comercial</p>
                        <a href="https://api.whatsapp.com/send?phone=5511973328858&text=Olá,%20tudo%20bem?%20" target="_blank" rel="noreferrer">
                            <i className="text-2xl text-violet-800 float-start me-1" ><FaWhatsapp/> </i> <p className="text-violet-800">11 9000-0000</p>
                        </a>
                    </div>

                    <div className="text-gray-800 p-3">
                        <img className=" rounded-md bg-yellow-200 mb-3 shadow-lg shadow-slate-400" src={Teamphoto} alt="team" title="team"/>
                        <h5 className="font-bold">Vagner Lopes</h5>
                        <p className="mb-2">Coordenador Comercial</p>
                        <a href="https://api.whatsapp.com/send?phone=5511973328858&text=Olá,%20tudo%20bem?%20" target="_blank" rel="noreferrer">
                            <i className="text-2xl text-violet-800 float-start me-1" ><FaWhatsapp/> </i> <p className="text-violet-800">11 9000-0000</p>
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

