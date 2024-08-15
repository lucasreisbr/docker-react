import { Accordion } from "flowbite-react";
import { FaWhatsapp } from "react-icons/fa6";
import Teamphoto from "../images/team/photo.png";
import Bruno from "../images/team/bruno-fialho.png";
import Vagner from "../images/team/vagner-lopes.png";
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
                        <img className="rounded-md bg-cyan-400 mb-3 shadow-lg shadow-slate-400" src={Teamphoto} alt="team" title="team"/>
                        <h5 className="font-bold">Vagner Lopes</h5>
                        <p className="mb-2">Coordenador Comercial</p>
                        <a href="https://api.whatsapp.com/send?phone=5511973328858&text=Olá,%20tudo%20bem?%20" target="_blank" rel="noreferrer">
                            <i className="text-2xl text-violet-800 float-start me-1" ><FaWhatsapp/> </i> <p className="text-violet-800">11 9000-0000</p>
                        </a>
                    </div>

                    <div className="text-gray-800 p-3">
                        <img className="rounded-md bg-yellow-200 mb-3 shadow-lg shadow-slate-400" src={Teamphoto} alt="team" title="team"/>
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

