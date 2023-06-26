'use client';
import * as S from "@/styles/components/styledAdd"

export default function Add() {
    return(
        <S.CaixaForm>
            <S.Titulo>Adicionar novo</S.Titulo>
            <S.CaixaItem>
                <S.Escrita>Nome</S.Escrita>
                <S.Input/>
            </S.CaixaItem>
        </S.CaixaForm>
    )
}