import { Accordion } from "flowbite-react";
import './Accordionclass.css';

export default function Accordionclass() {
return (



<div className="flex flex-row justify-center mb-24 p-3 lg:p-0">

    <div className="container accordion-class">

<Accordion collapseAll>

    <Accordion.Panel>
        <Accordion.Title className="text-white text-2xl">Relatório de estágio</Accordion.Title>
            <Accordion.Content>

                <div className="grid grid-cols-1 justify-items-start">
                    <div>
                        <p className="text-gray-800 mb-8">
                        O Relatório de Estágio é um componente curricular obrigatório para a aprovação do curso TTI, no botão abaixo você tem acesso ao manual e, de como preenche-lo.
                        </p>
                    </div>
                   
                    <div className="mb-8">
                        <a href="https://www.ibresp.com.br/wp-content/uploads/2023/05/www.ibresp.com.br-estagio-supervisionado-ibresp-final.pdf">
                            <button className="bg-orange-400 text-white rounded-md hover:bg-orange-600 hover:text-white hover:scale-110 duration-300 ease-in-out px-4 py-2 md:mb-2 text-md font-normal">MANUAL E MODELO ALUNOS IBRESP</button>
                        </a>
                    </div>

                    <div className="mb-5">
                        <a href="https://www.ibresp.com.br/wp-content/uploads/2023/03/www.ibresp.com.br-estagio-supervisionado-etemg-atual.pdf">
                            <button className="bg-orange-400 text-white rounded-md hover:bg-orange-600 hover:text-white hover:scale-110 duration-300 ease-in-out px-4 py-2 md:mb-2 text-md font-normal">MANUAL E MODELO ALUNOS ETEMG</button>
                        </a>
                    </div>

                </div>

            </Accordion.Content>
    </Accordion.Panel>

    <Accordion.Panel>
        <Accordion.Title className="text-white text-2xl" >Aproveitamento de estudos</Accordion.Title>
            <Accordion.Content>
            
                <div className=" grid grid-cols-1 justify-items-start">

                    <p className="text-gray-800">
                        Obedecendo à legislação específica, poderá ocorrer aproveitamento de estudos desde que, anteriormente concluídos pelo aluno o curso de Técnico em Transações Imobiliárias ou cursos superiores. Para isso as disciplinas devem ter os valores formativos equivalentes aos oferecidos no curso de T.T.I. Os documentos escolares do aluno passarão por análise criteriosa da Direção Pedagógica da Escola.
                        Após a análise da documentação, o aluno será liberado das atividades on-line nas disciplinas contempladas com o aproveitamento de estudos, porém será submetido a Avaliação de Competência (prova) presencial, conforme legislação vigente.
<br></br><br></br>
                        Nota: o envio da documentação completa para análise de aproveitamento deve ser feito em até 15 dias após a matrícula no TTI. Solicitações fora do prazo serão negadas.
<br></br><br></br>
                        Prazo para resposta: 15 dias.
<br></br><br></br>
                        Documentos necessários para solicitação:
<br></br>
                        <ol className="list-decimal ps-5">
                            <li>
                            Requerimento preenchido e assinado;
                            </li>

                            <li>
                            Cópia do histórico escolar do ensino superior;
                            </li>

                            <li>
                            Ementas ou conteúdo programático do curso;
                            </li>

                            <li>
                            Os documentos acima descritos devem ser encaminhados para o e-mail <a className="text-cyan-400" href="mailto:secretariaescolar@ibresp.com.br">secretariaescolar@ibresp.com.br</a>
                            </li>
                        </ol>
<br></br><br></br>
                        Para acessar o requerimento <a className="text-cyan-400" href="https://www.ibresp.com.br/wp-content/uploads/2023/01/www.ibresp.com.br-requerimento-aproveitamento-de-estudos.pdf" target="_blank" rel="noopener noreferrer">clique aqui</a>
                    </p>
                    
                </div>

            </Accordion.Content>
    </Accordion.Panel>


    <Accordion.Panel>
        <Accordion.Title className="text-white text-2xl" >Prorrogação do curso</Accordion.Title>
            <Accordion.Content>
            <div className=" grid grid-cols-1 justify-items-start">

                <p className="text-gray-800">
                    A prorrogação do curso TTI deve ser solicitada dentro do prazo contratual do mesmo e a solicitação deve ser feita através do e-mail <a className="text-cyan-400" href="mailto:matricula@ibresp.com.br">matricula@ibresp.com.br</a>. Expirado o prazo contratual, deve ser solicitado uma reativação da matricula, solicitada através do mesmo e-mail.
                </p>

            </div>
            </Accordion.Content>
    </Accordion.Panel>


    <Accordion.Panel>
        <Accordion.Title className="text-white text-2xl" >Cancelamento do curso</Accordion.Title>
            <Accordion.Content>
            <div className=" grid grid-cols-1 justify-items-start">

                    <p className="text-gray-800">
                        O cancelamento do curso pode ser realizado em qualquer momento, basta solicitar através do <a className="text-cyan-400" href="mailto:cancelamento@ibresp.com.br">cancelamento@ibresp.com.br</a> informando dados de aluno e o motivo do cancelamento.
                    </p>

                </div>
            </Accordion.Content>
    </Accordion.Panel>

</Accordion>


{/* FAQ IBRESP */}

<div className=" flex flex-row justify-center p-3 lg:p-0">

    <div className="container mt-12 mb-5">
        <h1 className=" text-orange-400 text-4xl font-bold">
        FAQ IBRESP
        </h1>
    </div>
</div> 


<Accordion collapseAll>

    <Accordion.Panel>
        <Accordion.Title className="text-white text-2xl">Como acesso os cursos?</Accordion.Title>
            <Accordion.Content>

                <div className="grid grid-cols-1 justify-items-start">
                    <div>
                        <p className="text-gray-800 mb-8">
                            Acesse o site do IBRESP, aba ACESSAR AVA
                            <br></br><br></br>
                            <a className="text-cyan-400" href="https://ibresp.com.br">www.ibresp.com.br</a>
                            <br></br><br></br>
                            <a className="text-cyan-400" href="https://aluno.ibresp.com.br/">aluno.ibresp.com.br</a>
                            <br></br><br></br>
                            Login: seu e-mail cadastrado no ato da matrículaSenha: CPF (sem traço ou ponto) 
                        </p>
                    </div>

                </div>

            </Accordion.Content>
    </Accordion.Panel>

    <Accordion.Panel>
        <Accordion.Title className="text-white text-2xl" >Qual é o prazo para concluir o curso de TTI?</Accordion.Title>
            <Accordion.Content>
                <div className=" grid grid-cols-1 justify-items-start">
                    <p className="text-gray-800">
                        O curso de TTI é administrado pelo aluno, conforme CONTRATO pode ser concluído no prazo mínimo de 8 meses e máximo de 12 meses.<br></br>
                        Na tela inicial do AVA tem a data de término para conclusão do curso.
                    </p>
                </div>
            </Accordion.Content>
    </Accordion.Panel>


    <Accordion.Panel>
        <Accordion.Title className="text-white text-2xl" >Quais são os requisitos para conclusão do curso de TTI IBRESP 2022?</Accordion.Title>
            <Accordion.Content>
                <div className=" grid grid-cols-1 justify-items-start">
                    <p className="text-gray-800">
                        <ol className="list-disc ps-5">
                            <li>9 (nove) provas online com nota mínima 6.0.</li>
                            <li>Prova presencial com nota mínima 5.0.</li>
                            <li>Estágio supervisionado obrigatório, mediante entrega do Relatório de Estágio.</li>
                            <li>Documentação completa e aprovada no sistema.</li>
                        </ol>
                    </p>
                </div>
            </Accordion.Content>
    </Accordion.Panel>


    <Accordion.Panel>
        <Accordion.Title className="text-white text-2xl" >Quais são os requisitos para conclusão do curso de TTI IBRESP 2024 (a partir de abril/24)?</Accordion.Title>
            <Accordion.Content>
                <div className=" grid grid-cols-1 justify-items-start">
                    <p className="text-gray-800">
                        <ol className="list-disc ps-5">
                            <li>9 (nove) provas online com nota mínima 6.0.</li>
                            <li>Prova presencial com nota mínima 5.0.</li>
                            <li>Participar das atividades presenciais através dos encontros e palestras elaboradas por especialistas e monitoria do curso.</li>
                            <li>Entrega do Projeto Integrador, conforme Manual e modelo disponível no AVA.</li>
                            <li>Documentação completa e aprovada no sistema.</li>
                        </ol>
                    </p>
                </div>
            </Accordion.Content>
    </Accordion.Panel>

    <Accordion.Panel>
        <Accordion.Title className="text-white text-2xl" >Como realizo as provas online?</Accordion.Title>
            <Accordion.Content>
                <div className=" grid grid-cols-1 justify-items-start">
                <p className="text-gray-800 mb-5">
                        Cada disciplina tem uma prova online e quando você completar todos os registros de navegação das aulas com o sinal do check list ✅ poderá fazer a avaliação online clicando no botão AVALIAÇÃO FINAL. A nota mínima para aprovação é 6,0 (seis).
                    </p>
                    <p className="text-gray-800">
                        É obrigatório atingir no mínimo 50% no percentual de navegação da disciplina.
                    </p>
                </div>
            </Accordion.Content>
    </Accordion.Panel>

    <Accordion.Panel>
        <Accordion.Title className="text-white text-2xl" >Como agendo a prova presencial?</Accordion.Title>
            <Accordion.Content>
                <div className=" grid grid-cols-1 justify-items-start">
                    <p className="text-gray-800 mb-5">
                        <ol className="list-disc ps-5">
                            <li>Para agendar a PROVA PRESENCIAL, acesse o AVA, clique na aba PROVA PRESENCIAL e no botão AGENDAR.</li>
                            <li>Escolha o Polo e aguarde o sistema carregar as datas.</li>
                            <li>O agendamento deve ser feito conforme datas e horários disponíveis de cada polo.</li>
                            <li>A validação é feita em até 48hs. Acompanhe o status de confirmação no mesmo campo onde foi feito o agendamento.</li>
                        </ol>
                    </p>
                </div>
            </Accordion.Content>
    </Accordion.Panel>

    <Accordion.Panel>
        <Accordion.Title className="text-white text-2xl" >HELLO</Accordion.Title>
            <Accordion.Content>
                <div className=" grid grid-cols-1 justify-items-start">
                    <p className="text-gray-800">
                        O curso de TTI é administrado pelo aluno, conforme CONTRATO pode ser concluído no prazo mínimo de 8 meses e máximo de 12 meses.<br></br>
                        Na tela inicial do AVA tem a data de término para conclusão do curso.
                    </p>
                </div>
            </Accordion.Content>
    </Accordion.Panel>

    <Accordion.Panel>
        <Accordion.Title className="text-white text-2xl" >HELLO</Accordion.Title>
            <Accordion.Content>
                <div className=" grid grid-cols-1 justify-items-start">
                    <p className="text-gray-800">
                        O curso de TTI é administrado pelo aluno, conforme CONTRATO pode ser concluído no prazo mínimo de 8 meses e máximo de 12 meses.<br></br>
                        Na tela inicial do AVA tem a data de término para conclusão do curso.
                    </p>
                </div>
            </Accordion.Content>
    </Accordion.Panel>

    <Accordion.Panel>
        <Accordion.Title className="text-white text-2xl" >HELLO</Accordion.Title>
            <Accordion.Content>
                <div className=" grid grid-cols-1 justify-items-start">
                    <p className="text-gray-800">
                        O curso de TTI é administrado pelo aluno, conforme CONTRATO pode ser concluído no prazo mínimo de 8 meses e máximo de 12 meses.<br></br>
                        Na tela inicial do AVA tem a data de término para conclusão do curso.
                    </p>
                </div>
            </Accordion.Content>
    </Accordion.Panel>

    <Accordion.Panel>
        <Accordion.Title className="text-white text-2xl" >HELLO</Accordion.Title>
            <Accordion.Content>
                <div className=" grid grid-cols-1 justify-items-start">
                    <p className="text-gray-800">
                        O curso de TTI é administrado pelo aluno, conforme CONTRATO pode ser concluído no prazo mínimo de 8 meses e máximo de 12 meses.<br></br>
                        Na tela inicial do AVA tem a data de término para conclusão do curso.
                    </p>
                </div>
            </Accordion.Content>
    </Accordion.Panel>

    <Accordion.Panel>
        <Accordion.Title className="text-white text-2xl" >HELLO</Accordion.Title>
            <Accordion.Content>
                <div className=" grid grid-cols-1 justify-items-start">
                    <p className="text-gray-800">
                        O curso de TTI é administrado pelo aluno, conforme CONTRATO pode ser concluído no prazo mínimo de 8 meses e máximo de 12 meses.<br></br>
                        Na tela inicial do AVA tem a data de término para conclusão do curso.
                    </p>
                </div>
            </Accordion.Content>
    </Accordion.Panel>

    <Accordion.Panel>
        <Accordion.Title className="text-white text-2xl" >HELLO</Accordion.Title>
            <Accordion.Content>
                <div className=" grid grid-cols-1 justify-items-start">
                    <p className="text-gray-800">
                        O curso de TTI é administrado pelo aluno, conforme CONTRATO pode ser concluído no prazo mínimo de 8 meses e máximo de 12 meses.<br></br>
                        Na tela inicial do AVA tem a data de término para conclusão do curso.
                    </p>
                </div>
            </Accordion.Content>
    </Accordion.Panel>

    <Accordion.Panel>
        <Accordion.Title className="text-white text-2xl" >HELLO</Accordion.Title>
            <Accordion.Content>
                <div className=" grid grid-cols-1 justify-items-start">
                    <p className="text-gray-800">
                        O curso de TTI é administrado pelo aluno, conforme CONTRATO pode ser concluído no prazo mínimo de 8 meses e máximo de 12 meses.<br></br>
                        Na tela inicial do AVA tem a data de término para conclusão do curso.
                    </p>
                </div>
            </Accordion.Content>
    </Accordion.Panel>

    <Accordion.Panel>
        <Accordion.Title className="text-white text-2xl" >HELLO</Accordion.Title>
            <Accordion.Content>
                <div className=" grid grid-cols-1 justify-items-start">
                    <p className="text-gray-800">
                        O curso de TTI é administrado pelo aluno, conforme CONTRATO pode ser concluído no prazo mínimo de 8 meses e máximo de 12 meses.<br></br>
                        Na tela inicial do AVA tem a data de término para conclusão do curso.
                    </p>
                </div>
            </Accordion.Content>
    </Accordion.Panel>

    <Accordion.Panel>
        <Accordion.Title className="text-white text-2xl" >HELLO</Accordion.Title>
            <Accordion.Content>
                <div className=" grid grid-cols-1 justify-items-start">
                    <p className="text-gray-800">
                        O curso de TTI é administrado pelo aluno, conforme CONTRATO pode ser concluído no prazo mínimo de 8 meses e máximo de 12 meses.<br></br>
                        Na tela inicial do AVA tem a data de término para conclusão do curso.
                    </p>
                </div>
            </Accordion.Content>
    </Accordion.Panel>

    <Accordion.Panel>
        <Accordion.Title className="text-white text-2xl" >HELLO</Accordion.Title>
            <Accordion.Content>
                <div className=" grid grid-cols-1 justify-items-start">
                    <p className="text-gray-800">
                        O curso de TTI é administrado pelo aluno, conforme CONTRATO pode ser concluído no prazo mínimo de 8 meses e máximo de 12 meses.<br></br>
                        Na tela inicial do AVA tem a data de término para conclusão do curso.
                    </p>
                </div>
            </Accordion.Content>
    </Accordion.Panel>

    <Accordion.Panel>
        <Accordion.Title className="text-white text-2xl" >HELLO</Accordion.Title>
            <Accordion.Content>
                <div className=" grid grid-cols-1 justify-items-start">
                    <p className="text-gray-800">
                        O curso de TTI é administrado pelo aluno, conforme CONTRATO pode ser concluído no prazo mínimo de 8 meses e máximo de 12 meses.<br></br>
                        Na tela inicial do AVA tem a data de término para conclusão do curso.
                    </p>
                </div>
            </Accordion.Content>
    </Accordion.Panel>

</Accordion>




</div>

</div>

);
}
