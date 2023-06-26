import { Playfair_Display } from 'next/font/google';
import styled from "styled-components"
import { Popover, PopoverDisclosure } from "@ariakit/react"
export const Fundo = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(45deg, ${(props)=>props.theme.LARA["999"]} 30%, ${(props)=>props.theme.VANESSA["600"]} 70%);
`
export const Titulo = styled.div`
    font-size: 30px;
    text-align: center;
    width: 94%;
    height: 6%;
    margin-top: 1%;
    padding: 20px;
    border: solid 2px white;
    border-radius: .375rem;
    color: white;
    background: linear-gradient(90deg, ${(props)=>props.theme.LARA["400"]} 30%, ${(props)=>props.theme.VANESSA["400"]} 70%);
`
export const CaixaCaixas = styled.div`
    height: 99%;
    width: 99%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
export const CaixaIdeias = styled.div`
    height: 100%;
    width: 58%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-end;
`
export const BotaoSeries = styled(PopoverDisclosure)`
    height: 12%;
    width: 40%;
    font-family: 'Playfair_Display';
    font-size: 30px;
    color: white;
    border: solid 2px white;
    border-radius: .375rem;
    background-color: ${(props)=>props.theme.VERDINHOS["300"]};
`
export const BotaoFilmes = styled(PopoverDisclosure)`
    height: 12%;
    width: 40%;
    font-family: 'Playfair_Display';
    font-size: 30px;
    color: white;
    border: solid 2px white;
    border-radius: .375rem;
    background-color: ${(props)=>props.theme.ROXINHOS["300"]};
`
export const BotaoDesenhos = styled(PopoverDisclosure)`
    height: 12%;
    width: 40%;
    font-family: 'Playfair_Display';
    font-size: 30px;
    color: white;
    border: solid 2px white;
    border-radius: .375rem;
    background-color: ${(props)=>props.theme.VERDINHOS["300"]};
`
export const BotaoADD = styled(PopoverDisclosure)`
    height: 12%;
    width: 40%;
    font-family: 'Playfair_Display';
    font-size: 30px;
    color: white;
    border: solid 2px white;
    border-radius: .375rem;
    background-color: ${(props)=>props.theme.ROXINHOS["300"]};
`
export const FundoSeries = styled(Popover)`
    height: 94vh;
    width: 70vw;
    border: solid 2px white;
    border-radius: .375rem;
    background-color: ${(props)=>props.theme.VERDINHOS["300"]};
`
export const FundoFilmes = styled(Popover)`
    height: 94vh;
    width: 70vw;
    border: solid 2px white;
    border-radius: .375rem;
    background-color: ${(props)=>props.theme.ROXINHOS["300"]};
`
export const FundoDesenhos = styled(Popover)`
    height: 94vh;
    width: 70vw;
    border: solid 2px white;
    border-radius: .375rem;
    background-color: ${(props)=>props.theme.VERDINHOS["300"]};
`
export const FundoAdd = styled(Popover)`
    height: 94vh;
    width: 70vw;
    border: solid 2px white;
    border-radius: .375rem;
    background-color: ${(props)=>props.theme.ROXINHOS["300"]};
`
export const FundoProximos = styled.div`
    height: 94%;
    width: 40%;
    border: solid 2px white;
    border-radius: .375rem;
    background-color: ${(props)=>props.theme.ROXINHOS["400"]};
`
export const TituloProximos = styled.div`
    font-size: 25px;
    text-align: center;
    color: white;
    width: 90%;
    padding: 15px;
    margin: 2%;
    border: solid 2px white;
    border-radius: .375rem;
    background-color: ${(props)=>props.theme.ROXINHOS["300"]};
`