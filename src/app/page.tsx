'use client';
import * as S from "@/styles/styledPage"
import { usePopoverStore } from "@ariakit/react";
import Series from "./components/series";
import Filmes from "./components/filmes";
import Desenhos from "./components/desenhos";
import Add from "./components/add";


export default function Home() {
  const popoverSeries = usePopoverStore({placement:"right-start"})
  const popoverFilmes = usePopoverStore({placement:"right-start"})
  const popoverDesenhos = usePopoverStore({placement:"right-start"})
  const popoverAdd = usePopoverStore({placement:"right-start"})
  return (
    <>
        <S.Fundo>
          <S.Titulo>Entreterimento</S.Titulo>
          <S.CaixaCaixas>
            <S.FundoProximos>
              <S.TituloProximos>Proximas coisas</S.TituloProximos>
            </S.FundoProximos>
            <S.CaixaIdeias>
              <S.BotaoSeries store={popoverSeries}>
                Seriesinhas
              </S.BotaoSeries>
              <S.FundoSeries store={popoverSeries}>
                <Series/>
              </S.FundoSeries>
              <S.BotaoFilmes store={popoverFilmes}>
                Filminhos
              </S.BotaoFilmes>
              <S.FundoFilmes store={popoverFilmes}>
                <Filmes/>
              </S.FundoFilmes>
              <S.BotaoDesenhos store={popoverDesenhos}>
                Desenhios
              </S.BotaoDesenhos>
              <S.FundoDesenhos store={popoverDesenhos}>
                <Desenhos/>
              </S.FundoDesenhos>
              <S.BotaoADD store={popoverAdd}>
                Adicionar
              </S.BotaoADD>
              <S.FundoAdd store={popoverAdd}>
                <Add/>
              </S.FundoAdd>
            </S.CaixaIdeias>
          </S.CaixaCaixas>
        </S.Fundo>
    </>
  )
}
