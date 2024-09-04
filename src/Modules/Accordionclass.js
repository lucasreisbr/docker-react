import React from 'react';
import { Accordion } from "flowbite-react";
import './Accordionclass.css';


export default React.memo(function Accordionclass() {
return (

<div className="flex flex-row justify-center mb-24 p-3 lg:p-0">

    <div className="container accordion-class">

<Accordion collapseAll>

    <Accordion.Panel>
        <Accordion.Title className="text-white text-xl md:text-2xl">Relatório de estágio</Accordion.Title>
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
        <Accordion.Title className="text-white text-xl md:text-2xl" >Aproveitamento de estudos</Accordion.Title>
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
        <Accordion.Title className="text-white text-xl md:text-2xl" >Prorrogação do curso</Accordion.Title>
            <Accordion.Content>
            <div className=" grid grid-cols-1 justify-items-start">

                <p className="text-gray-800">
                    A prorrogação do curso TTI deve ser solicitada dentro do prazo contratual do mesmo e a solicitação deve ser feita através do e-mail <a className="text-cyan-400" href="mailto:matricula@ibresp.com.br">matricula@ibresp.com.br</a>. Expirado o prazo contratual, deve ser solicitado uma reativação da matricula, solicitada através do mesmo e-mail.
                </p>

            </div>
            </Accordion.Content>
    </Accordion.Panel>


    <Accordion.Panel>
        <Accordion.Title className="text-white text-xl md:text-2xl" >Cancelamento do curso</Accordion.Title>
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
        <h1 className=" text-orange-400 text-3xl md:text-4xl font-bold">
        FAQ IBRESP
        </h1>
    </div>
</div> 


<Accordion collapseAll>

    <Accordion.Panel>
        <Accordion.Title className="text-white text-xl md:text-2xl">Como acesso os cursos?</Accordion.Title>
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
        <Accordion.Title className="text-white text-xl md:text-2xl" >Qual é o prazo para concluir o curso de TTI?</Accordion.Title>
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
        <Accordion.Title className="text-white text-xl md:text-2xl" >Quais são os requisitos para conclusão do curso de TTI IBRESP 2022?</Accordion.Title>
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
        <Accordion.Title className="text-white text-xl md:text-2xl" >Quais são os requisitos para conclusão do curso de TTI IBRESP 2024 (a partir de abril/24)?</Accordion.Title>
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
        <Accordion.Title className="text-white text-xl md:text-2xl" >Como realizo as provas online?</Accordion.Title>
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
        <Accordion.Title className="text-white text-xl md:text-2xl" >Como agendo a prova presencial?</Accordion.Title>
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
        <Accordion.Title className="text-white text-xl md:text-2xl" >Quais são os documentos que devo entregar e a forma de envio?</Accordion.Title>
            <Accordion.Content>
                <div className=" grid grid-cols-1 justify-items-start">
                    <p className="text-gray-800">
                    Os documentos obrigatórios são:- RG (RNE para estrangeiros, não é aceito a CNH)- CPF- Certidão de nascimento ou casamento- CERTIFICADO / HISTÓRICO do Ensino Médio<br></br>
                    *DIPLOMA SUPERIOR NÃO É ACEITO<br></br>
                    <br></br>
                    Para anexá-los, faça o login na plataforma de estudos online.
                    <br></br><br></br>
                    Clique em ACESSO RÁPIDO, aba Envio de documentos.
                    <br></br><br></br>
                    Envie os documentos scaneados e salvos em PDF.
                    </p>
                </div>
            </Accordion.Content>
    </Accordion.Panel>

    <Accordion.Panel>
        <Accordion.Title className="text-white text-xl md:text-2xl" >Qual é o prazo de envio dos documentos?</Accordion.Title>
            <Accordion.Content>
                <div className=" grid grid-cols-1 justify-items-start">
                    <p className="text-gray-800 mb-5">
                        O curso de TTI é administrado pelo aluno, conforme CONTRATO pode ser concluído no prazo mínimo de 8 meses e máximo de 12 meses.
                    </p>
                    <p className="text-gray-800">
                        Na tela inicial do AVA tem a data de término para conclusão do curso.
                    </p>
                </div>
            </Accordion.Content>
    </Accordion.Panel>

    <Accordion.Panel>
        <Accordion.Title className="text-white text-xl md:text-2xl" >Como faço para dar o aceite no Contrato?</Accordion.Title>
            <Accordion.Content>
                <div className=" grid grid-cols-1 justify-items-start">
                    <p className="text-gray-800 mb-5">
                    No menu ACESSO RÁPIDO, clique em MEUS CONTRATOS e no botão ACEITAR.<br></br><br></br>
                    Aguarde 1 minuto e o conteúdo estará disponível no botão MEUS CURSOS, na tela inicial do AVA.<br></br><br></br>
                    É só clicar no curso, escolher a disciplina e iniciar os estudos.
                    </p>
                </div>
            </Accordion.Content>
    </Accordion.Panel>

    <Accordion.Panel>
        <Accordion.Title className="text-white text-xl md:text-2xl" >Como acesso às disciplinas?</Accordion.Title>
            <Accordion.Content>
                <div className=" grid grid-cols-1 justify-items-start">
                    <p className="text-gray-800 mb-5">
                        Acesse o botão MEUS CURSOS na tela inicial e em RESUMO DOS CURSOS (clique na foto) com o nome do curso: Técnico em Transações Imobiliárias, em seguida você terá acesso ao painel geral.
                    </p>
                    <p className="text-gray-800">
                        Se preferir, siga a sequência dos componentes ou escolha a disciplina que deseja iniciar. Clique na foto da disciplina ou no botão ACESSAR e inicie os estudos conforme ordem numérica das aulas.
                    </p>
                </div>
            </Accordion.Content>
    </Accordion.Panel>

    <Accordion.Panel>
        <Accordion.Title className="text-white text-xl md:text-2xl" >Quais são as ferramentas de apoio do curso?</Accordion.Title>
            <Accordion.Content>
                <div className=" grid grid-cols-1 justify-items-start">
                    <p className="text-gray-800">
                        Ao acessar o Ambiente Virtual de Aprendizagem (AVA), o (a) aluno (a) dispõe de vários recursos de estudo.<br></br><br></br>
                        Em MEUS CURSOS, clique em Técnico em Transações Imobiliárias e terá um resumo das disciplinas, obtendo autonomia para escolher a ordem em que deseja estudar.<br></br><br></br>
                        O conteúdo está distribuído na tela PONTO DE PARTIDA de cada disciplina, você conseguirá visualizar todas as Aulas Temáticas (em ordem numérica) e as ferramentas de interação com o aluno, com as seguintes finalidades:<br></br><br></br>
                        <ol className="list-disc ps-5">
                            <li>Fórum é o local de registro das opiniões sobre determinado assunto, ou apenas uma forma de apresentar-se aos colegas do curso.</li>
                            <li>Chat é o momento online, com dias agendados para falar, em tempo real, com os tutores e colegas de curso.</li>
                            <li>Fale com o Tutor é o canal para falar diretamente com os tutores do curso, expondo suas dúvidas sobre os conteúdos disponibilizados para estudo.</li>
                            <li>Apostila Virtual é o local para fazer o download do conteúdo online.</li>
                            <li>Simulados são exercícios de fixação de conteúdo, com o intuito de treinar o seu aproveitamento no curso, extremamente importantes para a prova final. Os simulados não somam nota, são apenas testes preparatórios. As tentativas são ilimitadas.</li>
                            <li>As videoaulas apresentam conteúdos relevantes sobre o estudo de cada disciplina, favorecendo ainda mais a aprendizagem.</li>
                        </ol>
                    </p>
                </div>
            </Accordion.Content>
    </Accordion.Panel>

    <Accordion.Panel>
        <Accordion.Title className="text-white text-xl md:text-2xl" >Posso assistir somente as videoaulas?</Accordion.Title>
            <Accordion.Content>
                <div className=" grid grid-cols-1 justify-items-start">
                    <p className="text-gray-800">
                        O aluno pode assistir as videoaulas, mas obrigatoriamente terá que acessar o conteúdo programático de forma linear, na sequência das aulas.<br></br><br></br>
                        Se assistir apenas os vídeos, a porcentagem não será registrada.
                    </p>
                </div>
            </Accordion.Content>
    </Accordion.Panel>

    <Accordion.Panel>
        <Accordion.Title className="text-white text-xl md:text-2xl" >Como faço o download das apostilas?</Accordion.Title>
            <Accordion.Content>
                <div className=" grid grid-cols-1 justify-items-start">
                    <p className="text-gray-800">
                        Para baixar as apostilas, escolha a disciplina, na tela: PONTO DE PARTIDA, clique em APOSTILA VIRTUAL.
                    </p>
                </div>
            </Accordion.Content>
    </Accordion.Panel>

    <Accordion.Panel>
        <Accordion.Title className="text-white text-xl md:text-2xl" >Posso estudar apenas pela apostila virtual ou impressa?</Accordion.Title>
            <Accordion.Content>
                <div className=" grid grid-cols-1 justify-items-start">
                    <p className="text-gray-800">
                        Quando tiver offline poderá estudar pela apostila virtual ou impressa, mas obrigatoriamente terá que acessar as aulas online, pois é obrigatório atingir no mínimo 50% de aproveitamento do conteúdo de cada disciplina.
                    </p>
                </div>
            </Accordion.Content>
    </Accordion.Panel>

    <Accordion.Panel>
        <Accordion.Title className="text-white text-xl md:text-2xl" >Como acesso o fórum?</Accordion.Title>
            <Accordion.Content>
                <div className=" grid grid-cols-1 justify-items-start">
                    <p className="text-gray-800">
                        Para acessar o fórum, escolha a disciplina, na tela: PONTO DE PARTIDA, clique em FÓRUM.
                    </p>
                </div>
            </Accordion.Content>
    </Accordion.Panel>

    <Accordion.Panel>
        <Accordion.Title className="text-white text-xl md:text-2xl" >Como acesso o chat?</Accordion.Title>
            <Accordion.Content>
                <div className=" grid grid-cols-1 justify-items-start">
                    <p className="text-gray-800">
                    Fique atento aos posts da tela inicial, eles vão indicar as datas dos chats programados.<br></br><br></br>
                    Acesse o chat no dia e horário estipulado.<br></br><br></br>
                    Para acessar o chat, escolha a disciplina, na tela: PONTO DE PARTIDA, clique em CHAT.<br></br><br></br>
                    Após o encerramento, o chat estará disponível para ser lido!<br></br><br></br>
                    Basta clicar no botão do CHAT / ver sessões encerradas / ver esta sessão.
                    </p>
                </div>
            </Accordion.Content>
    </Accordion.Panel>

    <Accordion.Panel>
        <Accordion.Title className="text-white text-xl md:text-2xl" >Como acesso o canal Fale com o Tutor?</Accordion.Title>
            <Accordion.Content>
                <div className=" grid grid-cols-1 justify-items-start">
                    <p className="text-gray-800">
                        Escolha a disciplina, na 1ª tela: PONTO DE PARTIDA, clique em FALE COM O TUTOR.<br></br><br></br>
                        O retorno do tutor será dado até 48h úteis.
                    </p>
                </div>
            </Accordion.Content>
    </Accordion.Panel>

    <Accordion.Panel>
        <Accordion.Title className="text-white text-xl md:text-2xl" >Como acesso o simulado?</Accordion.Title>
            <Accordion.Content>
                <div className=" grid grid-cols-1 justify-items-start">
                    <p className="text-gray-800">
                        Para acessar o simulado, escolha a disciplina, na tela: PONTO DE PARTIDA, clique em SIMULADO.<br></br><br></br>
                        Os simulados não somam nota, são apenas testes preparatórios. As tentativas são ilimitadas.
                    </p>
                </div>
            </Accordion.Content>
    </Accordion.Panel>

    <Accordion.Panel>
        <Accordion.Title className="text-white text-xl md:text-2xl" >Quais são os processos para emissão da Carteira de Estágio?</Accordion.Title>
            <Accordion.Content>
                <div className=" grid grid-cols-1 justify-items-start">
                    <p className="text-gray-800">
                        A inscrição de estagiário poderá ser solicitada, quando o aluno completar 30 dias de cadastro da matrícula no TTI.<br></br><br></br>
                        O cadastro deve estar ativo, ou seja, dentro da validade do curso.<br></br><br></br>
                        Para informações sobre a carteira de estagiário, acesse o site do CRECI através desse link: <a className="text-cyan-400" href="http://www.crecisp.gov.br/estagiario/inscricao">www.crecisp.gov.br/estagiario/inscricao</a>
                    </p>
                </div>
            </Accordion.Content>
    </Accordion.Panel>

    <Accordion.Panel>
        <Accordion.Title className="text-white text-xl md:text-2xl" >Onde está a Declaração de Matrícula?</Accordion.Title>
            <Accordion.Content>
                <div className=" grid grid-cols-1 justify-items-start">
                    <p className="text-gray-800">
                        A Declaração de Matrícula IBRESP (documento exigido pelo CRECI) está disponível para impressão no menu ACESSO RÁPIDO, clique em DECLARAÇÃO DE MATRÍCULA.
                    </p>
                </div>
            </Accordion.Content>
    </Accordion.Panel>

    <Accordion.Panel>
        <Accordion.Title className="text-white text-xl md:text-2xl" >Onde está o modelo do Relatório de Estágio?</Accordion.Title>
            <Accordion.Content>
                <div className=" grid grid-cols-1 justify-items-start">
                    <p className="text-gray-800">
                        O modelo de preenchimento está disponível no AVA, no menu ACESSO RÁPIDO, clique em Estágio Supervisionado.<br></br><br></br>
                        Baixe o arquivo MODELO E MANUAL DE RELATÓRIO DE ESTÁGIO IBRESP-SP
                    </p>
                </div>
            </Accordion.Content>
    </Accordion.Panel>

    <Accordion.Panel>
        <Accordion.Title className="text-white text-xl md:text-2xl" >O que são as atividades presenciais?</Accordion.Title>
            <Accordion.Content>
                <div className=" grid grid-cols-1 justify-items-start">
                    <p className="text-gray-800">
                        As atividades presenciais são realizadas nos polos e consistem em encontros com especialistas, monitoria e eventos.
                    </p>
                </div>
            </Accordion.Content>
    </Accordion.Panel>

    <Accordion.Panel>
        <Accordion.Title className="text-white text-xl md:text-2xl" >O que é o Projeto Integrador?</Accordion.Title>
            <Accordion.Content>
                <div className=" grid grid-cols-1 justify-items-start">
                    <p className="text-gray-800">
                        O Projeto Integrador é um relatório das atividades práticas em ambiente profissional, onde o aluno fará uma reflexão sobre o aprendizado do curso e aplicação dele na prática. Para isso disponibilizamos um roteiro que facilitará a elaboração do trabalho.
                    </p>
                </div>
            </Accordion.Content>
    </Accordion.Panel>

    <Accordion.Panel>
        <Accordion.Title className="text-white text-xl md:text-2xl" >Onde está o Manual do Projeto Integrador?</Accordion.Title>
            <Accordion.Content>
                <div className=" grid grid-cols-1 justify-items-start">
                    <p className="text-gray-800">
                        Está disponível no AVA, na aba Projeto Integrador.
                    </p>
                </div>
            </Accordion.Content>
    </Accordion.Panel>

    <Accordion.Panel>
        <Accordion.Title className="text-white text-xl md:text-2xl" >Onde localizo o RM?</Accordion.Title>
            <Accordion.Content>
                <div className=" grid grid-cols-1 justify-items-start">
                    <p className="text-gray-800">
                        Seu RM está disponível no MENU ACESSO RÁPIDO, clique em Meus Contratos. Campo Matrícula.
                    </p>
                </div>
            </Accordion.Content>
    </Accordion.Panel>

    <Accordion.Panel>
        <Accordion.Title className="text-white text-xl md:text-2xl" >É possível prorrogar/reativar o curso?</Accordion.Title>
            <Accordion.Content>
                <div className=" grid grid-cols-1 justify-items-start">
                    <p className="text-gray-800">
                    Sim, faça isso através do e-mail <a className="text-cyan-400" href="mailto:matricula@ibresp.com.br">matricula@ibresp.com.br</a><br></br><br></br>
                    Informe o nome completo, o CPF e o curso que deseja reativar.<br></br><br></br>
                    Aguarde o retorno em até 3 dias úteis.
                    </p>
                </div>
            </Accordion.Content>
    </Accordion.Panel>

    <Accordion.Panel>
        <Accordion.Title className="text-white text-xl md:text-2xl" >Qual o prazo da diplomação?</Accordion.Title>
            <Accordion.Content>
                <div className=" grid grid-cols-1 justify-items-start">
                    <p className="text-gray-800">
                    O prazo para a emissão do diploma é de até 30 dias úteis, após concluir todos os requisitos e cumprido o prazo de 8 meses da integralização do curso. Posteriormente, o processo de diplomação é iniciado e o (a) aluno (a) será notificado (a) via e-mail.<br></br><br></br>
                    O diploma ficará disponível em seu ambiente virtual, na aba DIPLOMA do menu ACESSO RÁPIDO.
                    </p>
                </div>
            </Accordion.Content>
    </Accordion.Panel>

    <Accordion.Panel>
        <Accordion.Title className="text-white text-xl md:text-2xl" >Onde consulto a publicação do GDAE/SISTEC?</Accordion.Title>
            <Accordion.Content>
                <div className=" grid grid-cols-1 justify-items-start">
                    <p className="text-gray-800 mb-12">
                        <span className="font-extrabold">Para os alunos do IBRESP/SP</span><br></br><br></br>
                        Segue o link para consulta do GDAE<br></br><br></br>
                        <a className="text-cyan-400" href="https://concluintes.educacao.sp.gov.br/publica/consultapublica/search">https://concluintes.educacao.sp.gov.br/publica/consultapublica/search</a><br></br><br></br>
                        Preencha apenas com o Nº DE REGISTRO DA PUBLICAÇÃO (disponível no verso da 2ª folha do diploma) e o código de imagem<br></br><br></br>
                        *Siga as orientações, não adicione dados além do que foi informado*
                    </p>
                    <p className="text-gray-800">
                        <span className="font-extrabold">Para os alunos da ETEMG</span><br></br><br></br>
                        Segue o link para consulta no SISTEC<br></br><br></br>
                        <a className="text-cyan-400" href="https://sistec.mec.gov.br/validadenacional">https://sistec.mec.gov.br/validadenacional</a><br></br><br></br>
                        Adicionar os dados solicitados: CPF e registro de autenticação (verso do diploma)
                    </p>
                </div>
            </Accordion.Content>
    </Accordion.Panel>

</Accordion>




</div>

</div>

);
});

