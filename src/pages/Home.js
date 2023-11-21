import React from 'react';
import styled from 'styled-components';
import {Colors} from '../shared/DesignTokens'
import EmergenciaButton from '../common-components/emergenciaButton/EmergenciaButton';

// CONTAINER PARA DIMENCIONAR O CONTEUDO
const DivContainer = styled.div`
    background-color:${Colors.NEUTRAL_GREY};

    max-width:80%;
    min-height:80vh;
    margin:5vh auto ;
    
`;

const Span =styled.div`
    background-color:${Colors.RED_800};
    width:200px;
    text-align:center;
    font-weight:bolder;
    font-size:1.2em;
    color:${Colors.NEUTRAL_WHITE};
`;

const DivInfos = styled.div`
    width:95%;
    height:10vh;
    margin:auto;
    background-color:${Colors.NEUTRAL_WHITE};
    display: flex;
    justify-content: space-around;

`;

const ContentInfos = styled.div`
    background-color:${Colors.RED_800};

    width:23%;
    heihgt:100vh;
    text-align:center;
    font-weight:bolder;
    font-size:1.5em;
    color:${Colors.NEUTRAL_WHITE};
`
const LineInfo = styled.div`
    background-color:${Colors.NEUTRAL_WHITE};

    width:90%;
    margin:5%auto;
    color:${Colors.NEUTRAL_BLACK};
`;

const Detalhes = styled.div`
    background-color:${Colors.GREEN_800};
    width:95%;
    margin:4vh auto;

`;

const H3 = styled.div`
    background-color:${Colors.RED_800};
    width:250px;
    margin:auto;
    text-align: center;
    
    color:${Colors.NEUTRAL_WHITE};
`;

    const PacienteINFO = styled.div`
    background-color:${Colors.NEUTRAL_DARK};
    color:${Colors.NEUTRAL_WHITE};
    width:95%;
    height:100%;
    font-size:1.2em;

    margin:auto;
    text-align:center;
    padding:15px;
    

`;

const H5 = styled.div`
    color:${Colors.RED_800};
    margin:auto;
    text-align:center;
    font-size:1.2em;
    font-weight:bolder;
`;


function Home () {
    return(
        <DivContainer>
                {/* INFORMAÇÕES SOBRE LOCAL - DATA - PROFISSIONAL  */}
            <DivInfos>
                <ContentInfos>Data <LineInfo> 10/10/2023 </LineInfo></ContentInfos>
                <ContentInfos>Especialidade <LineInfo> Clinico Geral </LineInfo></ContentInfos>
                <ContentInfos>Profissional <LineInfo> Renato A. Santos </LineInfo></ContentInfos>
                <ContentInfos>Unidade <LineInfo> A.V Paulista nº 000 </LineInfo></ContentInfos>
            </DivInfos>
                {/* Detalhes 1 */}
            <Detalhes>
                <Span>Queixa Principal</Span>
                <H3>Dor de Cabeça - R51</H3>
                <PacienteINFO>Dor Intensa na parte traseira da cabeça a pelo menos 4 dias</PacienteINFO>
            </Detalhes>
                {/* DETALHES 2  */}
            <Detalhes>
                <Span>Alergias</Span>
                <H3>N/A</H3>   {/* OPCONAL */}
                <PacienteINFO>Dor Intensa na parte traseira da cabeça a pelo menos 4 dias</PacienteINFO>
            </Detalhes>
                {/* DETALHES 3  */}
            <Detalhes> 
                <Span>Procedimentos</Span>                  
                <PacienteINFO>Medicação Oral no Local - Paracetamol + <br></br> Medicação para casa - Dipirona 500mg a cada 8h por 3 dias</PacienteINFO>
            </Detalhes>


            <H5>Em caso de piora, recomendamos retornar ao posto de Saúde, em caso extremo, acione a emergencia no botão a baixo.</H5>

            <EmergenciaButton/>
        </DivContainer>
    );
    
    
}

export default Home;