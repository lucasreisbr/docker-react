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
        <Accordion.Title className="text-white text-2xl" >Cancelamento do curso</Accordion.Title>
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
                            www.ibresp.com.br
                            <br></br><br></br>
                            Link: aluno.ibresp.com.br
                            <br></br><br></br>
                            Login: seu e-mail cadastrado no ato da matrículaSenha: CPF (sem traço ou ponto) 
                        </p>
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
        <Accordion.Title className="text-white text-2xl" >Cancelamento do curso</Accordion.Title>
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

</Accordion>




</div>

</div>

);
}

