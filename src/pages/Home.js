import React from 'react';
import styled from 'styled-components';
import {Colors} from '../shared/DesignTokens';
import EmergenciaButton from '../common-components/emergenciaButton/EmergenciaButton';
import FormPaciente from './FormPaciente'

// CONTAINER PARA DIMENCIONAR O CONTEUDO
const DivContainer = styled.div`
    background-color:${Colors.LIGHT_PURPLE};

    max-width:80%;
    min-height:80vh;
    margin:5vh auto ;
    padding:15px;
    border-radius: 5px;
    box-shadow: 0.5px 0.5px 5px  ${Colors.NEUTRAL_BLACK};
`;

const Span =styled.div`
    background-color:${Colors.NEUTRAL_PURPLE};
    width:200px;
    text-align:center;
    font-weight:bolder;
    font-size:1.2em;
    border-radius: 5px;
    box-shadow: 1px 1px 1px  black;
    color:${Colors.NEUTRAL_WHITE};
`;

const DivInfos = styled.div`
    width:97%;
    height:10vh;
    margin:auto;
    display: flex;
    justify-content: space-around;

`;

const ContentInfos = styled.div`
    background-color:${Colors.NEUTRAL_PURPLE};
    width:23%;
    heihgt:100vh;
    text-align:center;
    font-weight:bolder;
    font-size:1.5em;
    border-radius: 5px;
    color:${Colors.NEUTRAL_WHITE};
`
const LineInfo = styled.div`
    background-color:${Colors.NEUTRAL_WHITE};
    font-weight:normal;
    width:90%;
    margin:5%auto;
    border-radius: 5px;
    color:${Colors.NEUTRAL_BLACK};
`;

const Detalhes = styled.div`
    background-color:${Colors.NEUTRAL_PURPLE};
    width:95%;
    margin:4vh auto;
    border-radius: 5px;
`;

const H3 = styled.div`
    background-color:${Colors.NEUTRAL_DARK};
    width:250px;
    margin:auto;
    font-size:1.2em;
    text-align: center;
    border-radius: 2px;
    box-shadow: 1px 1px 1px  black;
    color:${Colors.NEUTRAL_WHITE};
`;

    const PacienteINFO = styled.div`
    background-color:${Colors.NEUTRAL_WHITE};
    color:${Colors.NEUTRAL_WHITE};
    width:95%;
    height:100%;
    font-size:1.2em;
    color:${Colors.NEUTRAL_BLACK};
    margin:auto;
    text-align:center;
    padding:15px;
    border-radius: 5px;

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
                <PacienteINFO>Paciente não tem Alergias a medicação.</PacienteINFO>
            </Detalhes>
                {/* DETALHES 3  */}
            <Detalhes> 
                <Span>Procedimentos</Span>                  
                <PacienteINFO>Medicação Oral no Local - Paracetamol + <br></br> Medicação para casa - Dipirona 500mg a cada 8h por 3 dias</PacienteINFO>
            </Detalhes>

            <H3>Informe como esta o pós consulta</H3>

            <FormPaciente/>

            <H5>Em caso de piora, recomendamos retornar ao posto de Saúde, em caso extremo, acione a emergencia no botão a baixo.</H5>

            <EmergenciaButton/>

        </DivContainer>
    );
    
    
}

export default Home;