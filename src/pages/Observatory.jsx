import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import SideNavBar from '../components/SideNavBar';
import Footer from '../components/Footer';
import ActionCarousel from '../components/ActionsCarousel';
import LazyLoad from 'react-lazyload';
import { getActionsData2020, getActionsData2021, getActionsData2022, getActionsData2023 } from '../services/request';
import { Chart } from "react-google-charts";
import Loading from '../components/Loading';

function Observatory() {
  const [renderOthers, setRenderOthers] = useState(false);
  const [actions2023, setActions2023] = useState([])
  const [actions2022, setActions2022] = useState([])
  const [actions2021, setActions2021] = useState([])
  const [actions2020, setActions2020] = useState([])
  const [totalGoodActions2023, setTotalGoodActions2023] = useState(
    [
      {
        "cd_nm_funcao": "04 - ADMINISTRAÇÃO",
        "cd_nm_prog": "0098 - CONSERVAÇÃO E PRESERVAÇÃO DOS RECURSOS NATURAIS DO ESTADO",
        "vlrdotatualizada": 7750359.36,
        "vlrtotalpago": 5653905.65,
        "cd_nm_acao": "0398 - OPERACIONALIZAÇÃO E CONSERVAÇÃO DO PARQUE DOIS IRMÃOS",
        "cd_nm_subacao": "0000 - OUTRAS MEDIDAS",
        "vlrempenhado": 6028142.27,
        "vlrliquidado": 5526648.83,
        "cd_nm_subfuncao": "122 - ADMINISTRAÇÃO GERAL"
      },
      {
        "cd_nm_funcao": "04 - ADMINISTRAÇÃO",
        "cd_nm_prog": "0451 - APOIO GERENCIAL E TECNOLÓGICO PARA A PROMOÇÃO DA INFRAESTRUTURA",
        "vlrdotatualizada": 0,
        "vlrtotalpago": 4768.23,
        "cd_nm_acao": "2967 - GESTÃO DAS ATIVIDADES DA SECRETARIA DE INFRAESTRUTURA E RECURSOS HÍDRICOS",
        "cd_nm_subacao": "0000 - OUTRAS MEDIDAS",
        "vlrempenhado": 0,
        "vlrliquidado": 0,
        "cd_nm_subfuncao": "122 - ADMINISTRAÇÃO GERAL"
      },
      {
        "cd_nm_funcao": "04 - ADMINISTRAÇÃO",
        "cd_nm_prog": "0451 - APOIO GERENCIAL E TECNOLÓGICO PARA A PROMOÇÃO DA INFRAESTRUTURA",
        "vlrdotatualizada": 0,
        "vlrtotalpago": 3314.66,
        "cd_nm_acao": "2967 - GESTÃO DAS ATIVIDADES DA SECRETARIA DE INFRAESTRUTURA E RECURSOS HÍDRICOS",
        "cd_nm_subacao": "1915 - DESPESAS COM TAXA DE ÁGUA E ESGOTO DA SECRETARIA DE INFRAESTRUTURA E RECURSOS HÍDRICOS",
        "vlrempenhado": 0,
        "vlrliquidado": 0,
        "cd_nm_subfuncao": "122 - ADMINISTRAÇÃO GERAL"
      },
      {
        "cd_nm_funcao": "04 - ADMINISTRAÇÃO",
        "cd_nm_prog": "0451 - APOIO GERENCIAL E TECNOLÓGICO PARA A PROMOÇÃO DA INFRAESTRUTURA",
        "vlrdotatualizada": 0,
        "vlrtotalpago": 1265,
        "cd_nm_acao": "2967 - GESTÃO DAS ATIVIDADES DA SECRETARIA DE INFRAESTRUTURA E RECURSOS HÍDRICOS",
        "cd_nm_subacao": "1919 - DESPESAS COM LOCAÇÃO DE VEÍCULOS DA SECRETARIA DE INFRAESTRUTURA E RECURSOS HÍDRICOS",
        "vlrempenhado": 0,
        "vlrliquidado": 0,
        "cd_nm_subfuncao": "122 - ADMINISTRAÇÃO GERAL"
      },
      {
        "cd_nm_funcao": "04 - ADMINISTRAÇÃO",
        "cd_nm_prog": "0451 - APOIO GERENCIAL E TECNOLÓGICO PARA A PROMOÇÃO DA INFRAESTRUTURA",
        "vlrdotatualizada": 0,
        "vlrtotalpago": 5700,
        "cd_nm_acao": "2967 - GESTÃO DAS ATIVIDADES DA SECRETARIA DE INFRAESTRUTURA E RECURSOS HÍDRICOS",
        "cd_nm_subacao": "2043 - CAPACITAÇÃO DE RECURSOS HUMANOS DA SECRETARIA DE INFRAESTRUTURA E RECURSOS HÍDRICOS",
        "vlrempenhado": 0,
        "vlrliquidado": 0,
        "cd_nm_subfuncao": "122 - ADMINISTRAÇÃO GERAL"
      },
      {
        "cd_nm_funcao": "04 - ADMINISTRAÇÃO",
        "cd_nm_prog": "0451 - APOIO GERENCIAL E TECNOLÓGICO PARA A PROMOÇÃO DA INFRAESTRUTURA",
        "vlrdotatualizada": 7535412,
        "vlrtotalpago": 4711676.61,
        "cd_nm_acao": "2967 - GESTÃO DAS ATIVIDADES DA SECRETARIA DE MOBILIDADE E INFRAESTRUTURA",
        "cd_nm_subacao": "0000 - OUTRAS MEDIDAS",
        "vlrempenhado": 7322474.97,
        "vlrliquidado": 4711676.61,
        "cd_nm_subfuncao": "122 - ADMINISTRAÇÃO GERAL"
      },
      {
        "cd_nm_funcao": "04 - ADMINISTRAÇÃO",
        "cd_nm_prog": "0451 - APOIO GERENCIAL E TECNOLÓGICO PARA A PROMOÇÃO DA INFRAESTRUTURA",
        "vlrdotatualizada": 22500,
        "vlrtotalpago": 16404.33,
        "cd_nm_acao": "2967 - GESTÃO DAS ATIVIDADES DA SECRETARIA DE MOBILIDADE E INFRAESTRUTURA",
        "cd_nm_subacao": "1915 - DESPESAS COM TAXA DE ÁGUA E ESGOTO DA SECRETARIA DE MOBILIDADE E INFRAESTRUTURA",
        "vlrempenhado": 20873,
        "vlrliquidado": 16404.33,
        "cd_nm_subfuncao": "122 - ADMINISTRAÇÃO GERAL"
      },
      {
        "cd_nm_funcao": "04 - ADMINISTRAÇÃO",
        "cd_nm_prog": "0451 - APOIO GERENCIAL E TECNOLÓGICO PARA A PROMOÇÃO DA INFRAESTRUTURA",
        "vlrdotatualizada": 69800,
        "vlrtotalpago": 34783.65,
        "cd_nm_acao": "2967 - GESTÃO DAS ATIVIDADES DA SECRETARIA DE MOBILIDADE E INFRAESTRUTURA",
        "cd_nm_subacao": "1916 - APOIO ADMINISTRATIVO - PAGAMENTO DE ESTAGIÁRIOS DA SECRETARIA DE MOBILIDADE E INFRAESTRUTURA",
        "vlrempenhado": 39276.22,
        "vlrliquidado": 34787.65,
        "cd_nm_subfuncao": "122 - ADMINISTRAÇÃO GERAL"
      },
      {
        "cd_nm_funcao": "04 - ADMINISTRAÇÃO",
        "cd_nm_prog": "0451 - APOIO GERENCIAL E TECNOLÓGICO PARA A PROMOÇÃO DA INFRAESTRUTURA",
        "vlrdotatualizada": 142336,
        "vlrtotalpago": 105067.36,
        "cd_nm_acao": "2967 - GESTÃO DAS ATIVIDADES DA SECRETARIA DE MOBILIDADE E INFRAESTRUTURA",
        "cd_nm_subacao": "1917 - DESPESAS COM COMBUSTÍVEL DA SECRETARIA DE MOBILIDADE E INFRAESTRUTURA",
        "vlrempenhado": 134635.72,
        "vlrliquidado": 105067.36,
        "cd_nm_subfuncao": "122 - ADMINISTRAÇÃO GERAL"
      },
      {
        "cd_nm_funcao": "04 - ADMINISTRAÇÃO",
        "cd_nm_prog": "0451 - APOIO GERENCIAL E TECNOLÓGICO PARA A PROMOÇÃO DA INFRAESTRUTURA",
        "vlrdotatualizada": 12100,
        "vlrtotalpago": 6370.69,
        "cd_nm_acao": "2967 - GESTÃO DAS ATIVIDADES DA SECRETARIA DE MOBILIDADE E INFRAESTRUTURA",
        "cd_nm_subacao": "1918 - PAGAMENTO DE DIÁRIAS DA SECRETARIA DE MOBILIDADE E INFRAESTRUTURA",
        "vlrempenhado": 7340,
        "vlrliquidado": 6455.66,
        "cd_nm_subfuncao": "122 - ADMINISTRAÇÃO GERAL"
      },
      {
        "cd_nm_funcao": "04 - ADMINISTRAÇÃO",
        "cd_nm_prog": "0451 - APOIO GERENCIAL E TECNOLÓGICO PARA A PROMOÇÃO DA INFRAESTRUTURA",
        "vlrdotatualizada": 256973,
        "vlrtotalpago": 182090.48,
        "cd_nm_acao": "2967 - GESTÃO DAS ATIVIDADES DA SECRETARIA DE MOBILIDADE E INFRAESTRUTURA",
        "cd_nm_subacao": "1919 - DESPESAS COM LOCAÇÃO DE VEÍCULOS DA SECRETARIA DE MOBILIDADE E INFRAESTRUTURA",
        "vlrempenhado": 239591.13,
        "vlrliquidado": 182090.48,
        "cd_nm_subfuncao": "122 - ADMINISTRAÇÃO GERAL"
      },
      {
        "cd_nm_funcao": "04 - ADMINISTRAÇÃO",
        "cd_nm_prog": "0451 - APOIO GERENCIAL E TECNOLÓGICO PARA A PROMOÇÃO DA INFRAESTRUTURA",
        "vlrdotatualizada": 10200,
        "vlrtotalpago": 0,
        "cd_nm_acao": "2967 - GESTÃO DAS ATIVIDADES DA SECRETARIA DE MOBILIDADE E INFRAESTRUTURA",
        "cd_nm_subacao": "2043 - CAPACITAÇÃO DE RECURSOS HUMANOS DA SECRETARIA DE MOBILIDADE E INFRAESTRUTURA",
        "vlrempenhado": 0,
        "vlrliquidado": 0,
        "cd_nm_subfuncao": "122 - ADMINISTRAÇÃO GERAL"
      },
      {
        "cd_nm_funcao": "15 - URBANISMO",
        "cd_nm_prog": "1031 - MELHORIA DA MOBILIDADE URBANA",
        "vlrdotatualizada": 10000,
        "vlrtotalpago": 0,
        "cd_nm_acao": "4218 - MELHORIA DA CIRCULAÇÃO NAS VIAS URBANAS",
        "cd_nm_subacao": "0000 - OUTRAS MEDIDAS",
        "vlrempenhado": 0,
        "vlrliquidado": 0,
        "cd_nm_subfuncao": "451 - INFRA-ESTRUTURA URBANA"
      },
      {
        "cd_nm_funcao": "15 - URBANISMO",
        "cd_nm_prog": "1031 - MELHORIA DA MOBILIDADE URBANA",
        "vlrdotatualizada": 200000,
        "vlrtotalpago": 0,
        "cd_nm_acao": "4218 - MELHORIA DA CIRCULAÇÃO NAS VIAS URBANAS",
        "cd_nm_subacao": "EK7Y - EMENDA PARLAMENTAR NO.706/2022",
        "vlrempenhado": 0,
        "vlrliquidado": 0,
        "cd_nm_subfuncao": "451 - INFRA-ESTRUTURA URBANA"
      },
      {
        "cd_nm_funcao": "15 - URBANISMO",
        "cd_nm_prog": "1076 - GESTÃO DOS RESÍDUOS SÓLIDOS E DESENVOLVIMENTO DOS ARRANJOS PRODUTIVOS",
        "vlrdotatualizada": 10000,
        "vlrtotalpago": 0,
        "cd_nm_acao": "4166 - IMPLANTAÇÃO DO SISTEMA ESTADUAL DE APOIO À GESTÃO MUNICIPAL DOS RESÍDUOS SÓLIDOS",
        "cd_nm_subacao": "0000 - OUTRAS MEDIDAS",
        "vlrempenhado": 0,
        "vlrliquidado": 0,
        "cd_nm_subfuncao": "452 - SERVIÇOS URBANOS"
      },
      {
        "cd_nm_funcao": "15 - URBANISMO",
        "cd_nm_prog": "1076 - GESTÃO DOS RESÍDUOS SÓLIDOS E DESENVOLVIMENTO DOS ARRANJOS PRODUTIVOS",
        "vlrdotatualizada": 544621.21,
        "vlrtotalpago": 0,
        "cd_nm_acao": "4166 - IMPLANTAÇÃO DO SISTEMA ESTADUAL DE APOIO À GESTÃO MUNICIPAL DOS RESÍDUOS SÓLIDOS",
        "cd_nm_subacao": "0241 - APOIO À GESTÃO MUNICIPAL PARA IMPLANTAÇÃO DO SISTEMA DE TRATAMENTO DE RESÍDUOS SÓLIDOS EM CONSÓRCIO NA RMR",
        "vlrempenhado": 0,
        "vlrliquidado": 0,
        "cd_nm_subfuncao": "452 - SERVIÇOS URBANOS"
      },
      {
        "cd_nm_funcao": "15 - URBANISMO",
        "cd_nm_prog": "1031 - MELHORIA DA MOBILIDADE URBANA",
        "vlrdotatualizada": 2702000,
        "vlrtotalpago": 1234485.66,
        "cd_nm_acao": "3877 - MANUTENÇÃO E OPERACIONALIZAÇÃO DAS ESTAÇÕES DE BRT",
        "cd_nm_subacao": "0000 - OUTRAS MEDIDAS",
        "vlrempenhado": 820175.63,
        "vlrliquidado": 814987.05,
        "cd_nm_subfuncao": "453 - TRANSPORTES COLETIVOS URBANOS"
      },
      {
        "cd_nm_funcao": "15 - URBANISMO",
        "cd_nm_prog": "1031 - MELHORIA DA MOBILIDADE URBANA",
        "vlrdotatualizada": 9473096.48,
        "vlrtotalpago": 876151.69,
        "cd_nm_acao": "4131 - IMPLANTAÇÃO DE CORREDORES VIÁRIOS E RADIAL",
        "cd_nm_subacao": "0834 - RAMAL CIDADE DA COPA (LIGAÇÃO DO CORREDOR LESTE/OESTE AO TERMINAL COSME E DAMIÃO À CIDADE DA COPA E À BR-408) COM IMPLANTAÇÃO DE BRT",
        "vlrempenhado": 5590767.74,
        "vlrliquidado": 190936.02,
        "cd_nm_subfuncao": "453 - TRANSPORTES COLETIVOS URBANOS"
      },
      {
        "cd_nm_funcao": "15 - URBANISMO",
        "cd_nm_prog": "1031 - MELHORIA DA MOBILIDADE URBANA",
        "vlrdotatualizada": 51886256.16,
        "vlrtotalpago": 4982436.83,
        "cd_nm_acao": "4131 - IMPLANTAÇÃO DE CORREDORES VIÁRIOS E RADIAL",
        "cd_nm_subacao": "0835 - IMPLANTAÇÃO DE CORREDORES INTELIGENTES NA RMR (NORTE/SUL) - TRECHO IGARASSU-TACARUNA-CENTRO",
        "vlrempenhado": 5340854.29,
        "vlrliquidado": 5340854.29,
        "cd_nm_subfuncao": "453 - TRANSPORTES COLETIVOS URBANOS"
      },
      {
        "cd_nm_funcao": "15 - URBANISMO",
        "cd_nm_prog": "1031 - MELHORIA DA MOBILIDADE URBANA",
        "vlrdotatualizada": 3601846.14,
        "vlrtotalpago": 528121.77,
        "cd_nm_acao": "4131 - IMPLANTAÇÃO DE CORREDORES VIÁRIOS E RADIAL",
        "cd_nm_subacao": "0836 - IMPLANTAÇÃO DE CORREDORES INTELIGENTES NA RMR (LESTE/OESTE)",
        "vlrempenhado": 528121.77,
        "vlrliquidado": 528121.77,
        "cd_nm_subfuncao": "453 - TRANSPORTES COLETIVOS URBANOS"
      },
      {
        "cd_nm_funcao": "15 - URBANISMO",
        "cd_nm_prog": "1031 - MELHORIA DA MOBILIDADE URBANA",
        "vlrdotatualizada": 2164497.92,
        "vlrtotalpago": 858758.21,
        "cd_nm_acao": "4131 - IMPLANTAÇÃO DE CORREDORES VIÁRIOS E RADIAL",
        "cd_nm_subacao": "1657 - CONSTRUÇÃO E AMPLIAÇÃO DO TERMINAL DE IGARASSU",
        "vlrempenhado": 858758.21,
        "vlrliquidado": 858758.21,
        "cd_nm_subfuncao": "453 - TRANSPORTES COLETIVOS URBANOS"
      },
      {
        "cd_nm_funcao": "15 - URBANISMO",
        "cd_nm_prog": "1031 - MELHORIA DA MOBILIDADE URBANA",
        "vlrdotatualizada": 10000,
        "vlrtotalpago": 0,
        "cd_nm_acao": "4235 - MELHORIA NO SISTEMA DE TRANSPORTE PÚBLICO DE PASSAGEIROS",
        "cd_nm_subacao": "0000 - OUTRAS MEDIDAS",
        "vlrempenhado": 0,
        "vlrliquidado": 0,
        "cd_nm_subfuncao": "453 - TRANSPORTES COLETIVOS URBANOS"
      },
      {
        "cd_nm_funcao": "15 - URBANISMO",
        "cd_nm_prog": "1031 - MELHORIA DA MOBILIDADE URBANA",
        "vlrdotatualizada": 97162738.46,
        "vlrtotalpago": 96657701.56,
        "cd_nm_acao": "4235 - MELHORIA NO SISTEMA DE TRANSPORTE PÚBLICO DE PASSAGEIROS",
        "cd_nm_subacao": "2326 - EXECUÇÃO DOS RECURSOS DA ASSISTÊNCIA FINANCEIRA TRANSPORTE COLETIVO - ART 5º, INCISO IV EC 123/2022",
        "vlrempenhado": 96657701.56,
        "vlrliquidado": 96657701.56,
        "cd_nm_subfuncao": "453 - TRANSPORTES COLETIVOS URBANOS"
      },
      {
        "cd_nm_funcao": "15 - URBANISMO",
        "cd_nm_prog": "1031 - MELHORIA DA MOBILIDADE URBANA",
        "vlrdotatualizada": 60800,
        "vlrtotalpago": 0,
        "cd_nm_acao": "4235 - MELHORIA NO SISTEMA DE TRANSPORTE PÚBLICO DE PASSAGEIROS",
        "cd_nm_subacao": "A406 - IMPLANTAÇÃO DA NAVEGABILIDADE NOS RIOS BEBERIBE E CAPIBARIBE",
        "vlrempenhado": 0,
        "vlrliquidado": 0,
        "cd_nm_subfuncao": "453 - TRANSPORTES COLETIVOS URBANOS"
      },
      {
        "cd_nm_funcao": "15 - URBANISMO",
        "cd_nm_prog": "1031 - MELHORIA DA MOBILIDADE URBANA",
        "vlrdotatualizada": 10000,
        "vlrtotalpago": 0,
        "cd_nm_acao": "4679 - REALIZAÇÃO DE PESQUISAS OPERACIONAIS PARA MELHORIA DO STPP/RMR",
        "cd_nm_subacao": "0000 - OUTRAS MEDIDAS",
        "vlrempenhado": 0,
        "vlrliquidado": 0,
        "cd_nm_subfuncao": "453 - TRANSPORTES COLETIVOS URBANOS"
      },
      {
        "cd_nm_funcao": "15 - URBANISMO",
        "cd_nm_prog": "1031 - MELHORIA DA MOBILIDADE URBANA",
        "vlrdotatualizada": 1000,
        "vlrtotalpago": 8750,
        "cd_nm_acao": "4682 - IMPLANTAÇÃO DE BRT NOS CORREDORES NORTE - SUL E LESTE - OESTE DO STPP / RMR",
        "cd_nm_subacao": "0000 - OUTRAS MEDIDAS",
        "vlrempenhado": 0,
        "vlrliquidado": 0,
        "cd_nm_subfuncao": "453 - TRANSPORTES COLETIVOS URBANOS"
      },
      {
        "cd_nm_funcao": "15 - URBANISMO",
        "cd_nm_prog": "1086 - OPERACIONALIZAÇÃO DO SISTEMA DE TRANSPORTES PÚBLICO DE PASSAGEIROS",
        "vlrdotatualizada": 27777473.7,
        "vlrtotalpago": 27087981.56,
        "cd_nm_acao": "1313 - AMPLIAÇÃO E MELHORIA DO SISTEMA DE BILHETAGEM ELETRÔNICA PARA OS USUÁRIOS DO STPP/RMR",
        "cd_nm_subacao": "1126 - INSERÇÃO DA GRATUIDADE DO CARTÃO ELETRÔNICO VEM ESTUDANTIL NO STPP/RMR",
        "vlrempenhado": 27088279.7,
        "vlrliquidado": 27087981.56,
        "cd_nm_subfuncao": "453 - TRANSPORTES COLETIVOS URBANOS"
      },
      {
        "cd_nm_funcao": "17 - SANEAMENTO",
        "cd_nm_prog": "0433 - PROMOÇÃO E FORTALECIMENTO DA POLÍTICA DE SANEAMENTO AMBIENTAL NO ESTADO",
        "vlrdotatualizada": 5200,
        "vlrtotalpago": 0,
        "cd_nm_acao": "3198 - AMPLIAÇÃO DA COBERTURA DA COLETA E TRATAMENTO DO ESGOTAMENTO SANITÁRIO",
        "cd_nm_subacao": "0000 - OUTRAS MEDIDAS",
        "vlrempenhado": 0,
        "vlrliquidado": 0,
        "cd_nm_subfuncao": "511 - SANEAMENTO BÁSICO RURAL"
      },
      {
        "cd_nm_funcao": "17 - SANEAMENTO",
        "cd_nm_prog": "0433 - PROMOÇÃO E FORTALECIMENTO DA POLÍTICA DE SANEAMENTO AMBIENTAL NO ESTADO",
        "vlrdotatualizada": 0,
        "vlrtotalpago": 0,
        "cd_nm_acao": "3198 - AMPLIAÇÃO DA COBERTURA DA COLETA E TRATAMENTO DO ESGOTAMENTO SANITÁRIO",
        "cd_nm_subacao": "EK37 - EMENDA PARLAMENTAR NO.535/2022",
        "vlrempenhado": 0,
        "vlrliquidado": 0,
        "cd_nm_subfuncao": "511 - SANEAMENTO BÁSICO RURAL"
      },
      {
        "cd_nm_funcao": "17 - SANEAMENTO",
        "cd_nm_prog": "0611 - GESTÃO DE RECURSOS HÍDRICOS E ENERGÉTICOS DE PERNAMBUCO",
        "vlrdotatualizada": 2300000,
        "vlrtotalpago": 346495.61,
        "cd_nm_acao": "3178 - AMPLIAÇÃO DA CAPACIDADE DE ACUMULAÇÃO HÍDRICA",
        "cd_nm_subacao": "0000 - OUTRAS MEDIDAS",
        "vlrempenhado": 596507.89,
        "vlrliquidado": 346495.61,
        "cd_nm_subfuncao": "512 - SANEAMENTO BÁSICO URBANO"
      },
      {
        "cd_nm_funcao": "17 - SANEAMENTO",
        "cd_nm_prog": "0611 - GESTÃO DE RECURSOS HÍDRICOS E ENERGÉTICOS DE PERNAMBUCO",
        "vlrdotatualizada": 9444800,
        "vlrtotalpago": 0,
        "cd_nm_acao": "3178 - AMPLIAÇÃO DA CAPACIDADE DE ACUMULAÇÃO HÍDRICA",
        "cd_nm_subacao": "0838 - CONSTRUÇÃO DA BARRAGEM DE PANELAS",
        "vlrempenhado": 0,
        "vlrliquidado": 0,
        "cd_nm_subfuncao": "512 - SANEAMENTO BÁSICO URBANO"
      },
      {
        "cd_nm_funcao": "17 - SANEAMENTO",
        "cd_nm_prog": "0611 - GESTÃO DE RECURSOS HÍDRICOS E ENERGÉTICOS DE PERNAMBUCO",
        "vlrdotatualizada": 6081118.68,
        "vlrtotalpago": 0,
        "cd_nm_acao": "3178 - AMPLIAÇÃO DA CAPACIDADE DE ACUMULAÇÃO HÍDRICA",
        "cd_nm_subacao": "0839 - CONSTRUÇÃO DA BARRAGEM DE GATOS",
        "vlrempenhado": 0,
        "vlrliquidado": 0,
        "cd_nm_subfuncao": "512 - SANEAMENTO BÁSICO URBANO"
      },
      {
        "cd_nm_funcao": "17 - SANEAMENTO",
        "cd_nm_prog": "0611 - GESTÃO DE RECURSOS HÍDRICOS E ENERGÉTICOS DE PERNAMBUCO",
        "vlrdotatualizada": 320000,
        "vlrtotalpago": 0,
        "cd_nm_acao": "3178 - AMPLIAÇÃO DA CAPACIDADE DE ACUMULAÇÃO HÍDRICA",
        "cd_nm_subacao": "A163 - CONSTRUÇÃO DA BARRAGEM DE IGARAPEBA",
        "vlrempenhado": 0,
        "vlrliquidado": 0,
        "cd_nm_subfuncao": "512 - SANEAMENTO BÁSICO URBANO"
      },
      {
        "cd_nm_funcao": "17 - SANEAMENTO",
        "cd_nm_prog": "0611 - GESTÃO DE RECURSOS HÍDRICOS E ENERGÉTICOS DE PERNAMBUCO",
        "vlrdotatualizada": 624000,
        "vlrtotalpago": 0,
        "cd_nm_acao": "3178 - AMPLIAÇÃO DA CAPACIDADE DE ACUMULAÇÃO HÍDRICA",
        "cd_nm_subacao": "A164 - CONSTRUÇÃO DA BARRAGEM DE BARRA DE GUABIRABA",
        "vlrempenhado": 0,
        "vlrliquidado": 0,
        "cd_nm_subfuncao": "512 - SANEAMENTO BÁSICO URBANO"
      },
      {
        "cd_nm_funcao": "17 - SANEAMENTO",
        "cd_nm_prog": "0611 - GESTÃO DE RECURSOS HÍDRICOS E ENERGÉTICOS DE PERNAMBUCO",
        "vlrdotatualizada": 408413.53,
        "vlrtotalpago": 212787.72,
        "cd_nm_acao": "3178 - AMPLIAÇÃO DA CAPACIDADE DE ACUMULAÇÃO HÍDRICA",
        "cd_nm_subacao": "C176 - AMPLIAÇÃO DA BARRAGEM PEDRO MOURA JUNIOR - LEITO DO RIO IPOJUCA EM BELO JARDIM",
        "vlrempenhado": 212787.72,
        "vlrliquidado": 212787.72,
        "cd_nm_subfuncao": "512 - SANEAMENTO BÁSICO URBANO"
      }
    ]
  )
  const [totalGoodActions2022, setTotalGoodActions2022] = useState([])
  const [totalGoodActions2021, setTotalGoodActions2021] = useState([])
  const [totalGoodActions2020, setTotalGoodActions2020] = useState([])
  const [totalBadActions2023, setTotalBadActions2023] = useState([
    {
      "cd_nm_funcao": "15 - URBANISMO",
      "cd_nm_prog": "1031 - MELHORIA DA MOBILIDADE URBANA",
      "vlrdotatualizada": 10000,
      "vlrtotalpago": 0,
      "cd_nm_acao": "4218 - MELHORIA DA CIRCULAÇÃO NAS VIAS URBANAS",
      "cd_nm_subacao": "0000 - OUTRAS MEDIDAS",
      "vlrempenhado": 0,
      "vlrliquidado": 0,
      "cd_nm_subfuncao": "451 - INFRA-ESTRUTURA URBANA"
    },
    {
      "cd_nm_funcao": "15 - URBANISMO",
      "cd_nm_prog": "1031 - MELHORIA DA MOBILIDADE URBANA",
      "vlrdotatualizada": 200000,
      "vlrtotalpago": 0,
      "cd_nm_acao": "4218 - MELHORIA DA CIRCULAÇÃO NAS VIAS URBANAS",
      "cd_nm_subacao": "EK7Y - EMENDA PARLAMENTAR NO.706/2022",
      "vlrempenhado": 0,
      "vlrliquidado": 0,
      "cd_nm_subfuncao": "451 - INFRA-ESTRUTURA URBANA"
    },
    {
      "cd_nm_funcao": "26 - TRANSPORTE",
      "cd_nm_prog": "0927 - CAMINHOS DE PERNAMBUCO",
      "vlrdotatualizada": 328132467.98,
      "vlrtotalpago": 248875.14,
      "cd_nm_acao": "1045 - RESTAURAÇÃO E MELHORAMENTO DA MALHA VIÁRIA DO ESTADO",
      "cd_nm_subacao": "0000 - OUTRAS MEDIDAS",
      "vlrempenhado": 763853.04,
      "vlrliquidado": 248875.14,
      "cd_nm_subfuncao": "782 - TRANSPORTE RODOVIÁRIO"
    },
    {
      "cd_nm_funcao": "26 - TRANSPORTE",
      "cd_nm_prog": "0927 - CAMINHOS DE PERNAMBUCO",
      "vlrdotatualizada": 93241095.16,
      "vlrtotalpago": 69699.08,
      "cd_nm_acao": "1045 - RESTAURAÇÃO E MELHORAMENTO DA MALHA VIÁRIA DO ESTADO",
      "cd_nm_subacao": "0513 - RESTAURAÇÃO DA RODOVIA PE-045 - ESCADA - VITÓRIA DE SANTO ANTÃO",
      "vlrempenhado": 90705311.05,
      "vlrliquidado": 69699.08,
      "cd_nm_subfuncao": "782 - TRANSPORTE RODOVIÁRIO"
    },
    {
      "cd_nm_funcao": "26 - TRANSPORTE",
      "cd_nm_prog": "0927 - CAMINHOS DE PERNAMBUCO",
      "vlrdotatualizada": 0,
      "vlrtotalpago": 0,
      "cd_nm_acao": "1045 - RESTAURAÇÃO E MELHORAMENTO DA MALHA VIÁRIA DO ESTADO",
      "cd_nm_subacao": "0618 - RESTAURAÇÃO DA RODOVIA PE-058 - ENTR. BR-232 (POMBOS) - USINA NOSSA SENHORA DO CARMO - ENTR. PE-071 (AMARAJI)",
      "vlrempenhado": 0,
      "vlrliquidado": 0,
      "cd_nm_subfuncao": "782 - TRANSPORTE RODOVIÁRIO"
    },
    {
      "cd_nm_funcao": "26 - TRANSPORTE",
      "cd_nm_prog": "0927 - CAMINHOS DE PERNAMBUCO",
      "vlrdotatualizada": 21180689.77,
      "vlrtotalpago": 1241188.85,
      "cd_nm_acao": "1045 - RESTAURAÇÃO E MELHORAMENTO DA MALHA VIÁRIA DO ESTADO",
      "cd_nm_subacao": "0620 - RESTAURAÇÃO DA RODOVIA PE-017 - ENTR. PE-007 (JABOATÃO DOS GUARARAPES) - ENTR. BR-101 (MURIBECA)",
      "vlrempenhado": 20468413.34,
      "vlrliquidado": 1241188.85,
      "cd_nm_subfuncao": "782 - TRANSPORTE RODOVIÁRIO"
    },
    {
      "cd_nm_funcao": "26 - TRANSPORTE",
      "cd_nm_prog": "0927 - CAMINHOS DE PERNAMBUCO",
      "vlrdotatualizada": 0,
      "vlrtotalpago": 0,
      "cd_nm_acao": "1045 - RESTAURAÇÃO E MELHORAMENTO DA MALHA VIÁRIA DO ESTADO",
      "cd_nm_subacao": "0874 - RESTAURAÇÃO DA RODOVIA PE-095 - ENTR. PE-050 (LIMOEIRO) - ENTR. BR-104 (CARUARU)",
      "vlrempenhado": 0,
      "vlrliquidado": 0,
      "cd_nm_subfuncao": "782 - TRANSPORTE RODOVIÁRIO"
    },
    {
      "cd_nm_funcao": "26 - TRANSPORTE",
      "cd_nm_prog": "0927 - CAMINHOS DE PERNAMBUCO",
      "vlrdotatualizada": 0,
      "vlrtotalpago": 0,
      "cd_nm_acao": "1045 - RESTAURAÇÃO E MELHORAMENTO DA MALHA VIÁRIA DO ESTADO",
      "cd_nm_subacao": "0875 - RESTAURAÇÃO DA RODOVIA PE-120 - ENT.. PE-126 (CATENDE) - ENT.. BR-104 (AGRESTINA)",
      "vlrempenhado": 0,
      "vlrliquidado": 0,
      "cd_nm_subfuncao": "782 - TRANSPORTE RODOVIÁRIO"
    },
    {
      "cd_nm_funcao": "26 - TRANSPORTE",
      "cd_nm_prog": "0927 - CAMINHOS DE PERNAMBUCO",
      "vlrdotatualizada": 530175.29,
      "vlrtotalpago": 458329.55,
      "cd_nm_acao": "1045 - RESTAURAÇÃO E MELHORAMENTO DA MALHA VIÁRIA DO ESTADO",
      "cd_nm_subacao": "0876 - RESTAURAÇÃO DA RODOVIA PE-103 - ENTR. BR-232 (BEZERROS) - ENTR. PE-109 (BONITO)",
      "vlrempenhado": 530175.29,
      "vlrliquidado": 458329.55,
      "cd_nm_subfuncao": "782 - TRANSPORTE RODOVIÁRIO"
    },
    {
      "cd_nm_funcao": "26 - TRANSPORTE",
      "cd_nm_prog": "0927 - CAMINHOS DE PERNAMBUCO",
      "vlrdotatualizada": 40563546.17,
      "vlrtotalpago": 731377.02,
      "cd_nm_acao": "1045 - RESTAURAÇÃO E MELHORAMENTO DA MALHA VIÁRIA DO ESTADO",
      "cd_nm_subacao": "0877 - RESTAURAÇÃO DA RODOVIA PE-075 - ENTR. PE-062 (GOIANA) - ITAMBÉ - ENTR. PE-082 (IBIRANGA)",
      "vlrempenhado": 40563545.97,
      "vlrliquidado": 162685.48,
      "cd_nm_subfuncao": "782 - TRANSPORTE RODOVIÁRIO"
    },
    {
      "cd_nm_funcao": "26 - TRANSPORTE",
      "cd_nm_prog": "0927 - CAMINHOS DE PERNAMBUCO",
      "vlrdotatualizada": 28649074.82,
      "vlrtotalpago": 14256011.91,
      "cd_nm_acao": "1045 - RESTAURAÇÃO E MELHORAMENTO DA MALHA VIÁRIA DO ESTADO",
      "cd_nm_subacao": "0878 - RESTAURAÇÃO DA RODOVIA PE-170 - ENTR.BR-423 (LAJEDO) - CANHOTINHO",
      "vlrempenhado": 28649074.82,
      "vlrliquidado": 14256011.91,
      "cd_nm_subfuncao": "782 - TRANSPORTE RODOVIÁRIO"
    },
    {
      "cd_nm_funcao": "26 - TRANSPORTE",
      "cd_nm_prog": "0927 - CAMINHOS DE PERNAMBUCO",
      "vlrdotatualizada": 19911048.65,
      "vlrtotalpago": 9218590.85,
      "cd_nm_acao": "1045 - RESTAURAÇÃO E MELHORAMENTO DA MALHA VIÁRIA DO ESTADO",
      "cd_nm_subacao": "0880 - RESTAURAÇÃO DA RODOVIA PE-145 - ENTR. BR-104 (FAZENDA NOVA - BREJO DA MADRE DE DEUS)",
      "vlrempenhado": 19910817.25,
      "vlrliquidado": 9218591.65,
      "cd_nm_subfuncao": "782 - TRANSPORTE RODOVIÁRIO"
    },
    {
      "cd_nm_funcao": "26 - TRANSPORTE",
      "cd_nm_prog": "0927 - CAMINHOS DE PERNAMBUCO",
      "vlrdotatualizada": 0,
      "vlrtotalpago": 604.65,
      "cd_nm_acao": "1045 - RESTAURAÇÃO E MELHORAMENTO DA MALHA VIÁRIA DO ESTADO",
      "cd_nm_subacao": "0886 - RESTAURAÇÃO DA RODOVIA PE-041 - ARAÇOIABA - ENTR. BR-408 (CARPINA)",
      "vlrempenhado": 0,
      "vlrliquidado": 0,
      "cd_nm_subfuncao": "782 - TRANSPORTE RODOVIÁRIO"
    },
    {
      "cd_nm_funcao": "26 - TRANSPORTE",
      "cd_nm_prog": "0927 - CAMINHOS DE PERNAMBUCO",
      "vlrdotatualizada": 0,
      "vlrtotalpago": 40332.69,
      "cd_nm_acao": "1045 - RESTAURAÇÃO E MELHORAMENTO DA MALHA VIÁRIA DO ESTADO",
      "cd_nm_subacao": "1119 - IMPLANTAÇÃO DA RODOVIA PE-099 - USINA SANTA TEREZINHA ENGENHO CRUZ DE MALTA - ENTR. PE-096 (ÁGUA PRETA)",
      "vlrempenhado": 0,
      "vlrliquidado": 0,
      "cd_nm_subfuncao": "782 - TRANSPORTE RODOVIÁRIO"
    },
    {
      "cd_nm_funcao": "26 - TRANSPORTE",
      "cd_nm_prog": "0927 - CAMINHOS DE PERNAMBUCO",
      "vlrdotatualizada": 0,
      "vlrtotalpago": 0,
      "cd_nm_acao": "1045 - RESTAURAÇÃO E MELHORAMENTO DA MALHA VIÁRIA DO ESTADO",
      "cd_nm_subacao": "1217 - RESTAURAÇÃO DA RODOVIA PE-430 (TRECHO URBANO DE SÃO JOSÉ DO BELMONTE)",
      "vlrempenhado": 0,
      "vlrliquidado": 0,
      "cd_nm_subfuncao": "782 - TRANSPORTE RODOVIÁRIO"
    },
    {
      "cd_nm_funcao": "26 - TRANSPORTE",
      "cd_nm_prog": "0927 - CAMINHOS DE PERNAMBUCO",
      "vlrdotatualizada": 10000,
      "vlrtotalpago": 0,
      "cd_nm_acao": "1045 - RESTAURAÇÃO E MELHORAMENTO DA MALHA VIÁRIA DO ESTADO",
      "cd_nm_subacao": "1781 - EXECUÇÃO DAS OBRAS DE RECUPERAÇÃO DA PONTE GETÚLIO VARGAS (PONTE DE ITAMARACÁ) NA RODOVIA PE-035",
      "vlrempenhado": 0,
      "vlrliquidado": 0,
      "cd_nm_subfuncao": "782 - TRANSPORTE RODOVIÁRIO"
    },
    {
      "cd_nm_funcao": "26 - TRANSPORTE",
      "cd_nm_prog": "0927 - CAMINHOS DE PERNAMBUCO",
      "vlrdotatualizada": 33582314.13,
      "vlrtotalpago": 26060272.59,
      "cd_nm_acao": "1045 - RESTAURAÇÃO E MELHORAMENTO DA MALHA VIÁRIA DO ESTADO",
      "cd_nm_subacao": "2029 - RESTAURAÇÃO DA RODOVIA PE-270 - ENTR. BR-232 (ARCOVERDE) - ENTR. PE-300 (ITAÍBA)",
      "vlrempenhado": 33582314.13,
      "vlrliquidado": 26060272.59,
      "cd_nm_subfuncao": "782 - TRANSPORTE RODOVIÁRIO"
    },
    {
      "cd_nm_funcao": "26 - TRANSPORTE",
      "cd_nm_prog": "0927 - CAMINHOS DE PERNAMBUCO",
      "vlrdotatualizada": 261743.92,
      "vlrtotalpago": 0,
      "cd_nm_acao": "1045 - RESTAURAÇÃO E MELHORAMENTO DA MALHA VIÁRIA DO ESTADO",
      "cd_nm_subacao": "2045 - RESTAURAÇÃO DA RODOVIA PE-365 - TRECHO: ENTR. BR-232 (SERRA TALHADA) - ENTR. PE-350 (TRIUNFO)",
      "vlrempenhado": 0,
      "vlrliquidado": 0,
      "cd_nm_subfuncao": "782 - TRANSPORTE RODOVIÁRIO"
    },
    {
      "cd_nm_funcao": "26 - TRANSPORTE",
      "cd_nm_prog": "0927 - CAMINHOS DE PERNAMBUCO",
      "vlrdotatualizada": 0,
      "vlrtotalpago": 0,
      "cd_nm_acao": "1045 - RESTAURAÇÃO E MELHORAMENTO DA MALHA VIÁRIA DO ESTADO",
      "cd_nm_subacao": "2046 - RESTAURAÇÃO DA RODOVIA PE-304 - ENTR. PE-320 (TABIRA) - DIVISA PE/PB (ÁGUA BRANCA)",
      "vlrempenhado": 0,
      "vlrliquidado": 0,
      "cd_nm_subfuncao": "782 - TRANSPORTE RODOVIÁRIO"
    },
    {
      "cd_nm_funcao": "26 - TRANSPORTE",
      "cd_nm_prog": "0927 - CAMINHOS DE PERNAMBUCO",
      "vlrdotatualizada": 0,
      "vlrtotalpago": 10000,
      "cd_nm_acao": "1045 - RESTAURAÇÃO E MELHORAMENTO DA MALHA VIÁRIA DO ESTADO",
      "cd_nm_subacao": "2079 - RESTAURAÇÃO DA RODOVIA PE-018 - TRECHO: ENTR. BR-101 (PAULISTA) - PENITENCIÁRIA MOURÃO FILHO (CAETÉS)",
      "vlrempenhado": 0,
      "vlrliquidado": 0,
      "cd_nm_subfuncao": "782 - TRANSPORTE RODOVIÁRIO"
    },
    {
      "cd_nm_funcao": "26 - TRANSPORTE",
      "cd_nm_prog": "0927 - CAMINHOS DE PERNAMBUCO",
      "vlrdotatualizada": 34127083.45,
      "vlrtotalpago": 1103020.03,
      "cd_nm_acao": "1045 - RESTAURAÇÃO E MELHORAMENTO DA MALHA VIÁRIA DO ESTADO",
      "cd_nm_subacao": "2107 - RESTAURAÇÃO DA RODOVIA PE-300 - ENTR. BR-423 (ÁGUAS BELAS) - ENTR. BR-316 (INAJÁ)",
      "vlrempenhado": 32378521.68,
      "vlrliquidado": 1289745.8,
      "cd_nm_subfuncao": "782 - TRANSPORTE RODOVIÁRIO"
    },
    {
      "cd_nm_funcao": "26 - TRANSPORTE",
      "cd_nm_prog": "0927 - CAMINHOS DE PERNAMBUCO",
      "vlrdotatualizada": 2191070.78,
      "vlrtotalpago": 2191070.48,
      "cd_nm_acao": "1045 - RESTAURAÇÃO E MELHORAMENTO DA MALHA VIÁRIA DO ESTADO",
      "cd_nm_subacao": "2108 - RESTAURAÇÃO DA PE-265",
      "vlrempenhado": 2191070.78,
      "vlrliquidado": 2191070.48,
      "cd_nm_subfuncao": "782 - TRANSPORTE RODOVIÁRIO"
    },
    {
      "cd_nm_funcao": "26 - TRANSPORTE",
      "cd_nm_prog": "0927 - CAMINHOS DE PERNAMBUCO",
      "vlrdotatualizada": 1348670.55,
      "vlrtotalpago": 1348157.43,
      "cd_nm_acao": "1045 - RESTAURAÇÃO E MELHORAMENTO DA MALHA VIÁRIA DO ESTADO",
      "cd_nm_subacao": "2221 - RESTAURAÇÃO DA RODOVIA PE-064 - ENTR. PE-060 (SIRINHÁEM) - ENTR. ACESSO DO NÚCLEO 31 DE MARÇO (IBIRATINGA)",
      "vlrempenhado": 1348670.55,
      "vlrliquidado": 1348157.43,
      "cd_nm_subfuncao": "782 - TRANSPORTE RODOVIÁRIO"
    },
    {
      "cd_nm_funcao": "26 - TRANSPORTE",
      "cd_nm_prog": "0927 - CAMINHOS DE PERNAMBUCO",
      "vlrdotatualizada": 50095.16,
      "vlrtotalpago": 50095.16,
      "cd_nm_acao": "1045 - RESTAURAÇÃO E MELHORAMENTO DA MALHA VIÁRIA DO ESTADO",
      "cd_nm_subacao": "2222 - RECUPERAÇÃO E MANUTENÇÃO DA RODOVIA PE-149 - ENTR. BR-104 (AGRESTINA) - ENTR. BR-423 (LAJEDO)",
      "vlrempenhado": 50095.16,
      "vlrliquidado": 50095.16,
      "cd_nm_subfuncao": "782 - TRANSPORTE RODOVIÁRIO"
    },
    {
      "cd_nm_funcao": "26 - TRANSPORTE",
      "cd_nm_prog": "0927 - CAMINHOS DE PERNAMBUCO",
      "vlrdotatualizada": 0,
      "vlrtotalpago": 81543.91,
      "cd_nm_acao": "1045 - RESTAURAÇÃO E MELHORAMENTO DA MALHA VIÁRIA DO ESTADO",
      "cd_nm_subacao": "2228 - RESTAURAÇÃO E ADEQUAÇÃO DE CAPACIDADE DA RODOVIA PE-550 - ENTR. PE-555 (URIMAMÃ) - ENTR. BR-428 (CARAÍBAS)",
      "vlrempenhado": 0,
      "vlrliquidado": 0,
      "cd_nm_subfuncao": "782 - TRANSPORTE RODOVIÁRIO"
    },
    {
      "cd_nm_funcao": "26 - TRANSPORTE",
      "cd_nm_prog": "0927 - CAMINHOS DE PERNAMBUCO",
      "vlrdotatualizada": 0,
      "vlrtotalpago": 0,
      "cd_nm_acao": "1045 - RESTAURAÇÃO E MELHORAMENTO DA MALHA VIÁRIA DO ESTADO",
      "cd_nm_subacao": "2237 - EXECUÇÃO DE PAVIMENTAÇÃO EM PARALELEPÍPEDO DA VIA LITORÂNEA DO UNA",
      "vlrempenhado": 0,
      "vlrliquidado": 0,
      "cd_nm_subfuncao": "782 - TRANSPORTE RODOVIÁRIO"
    },
    {
      "cd_nm_funcao": "26 - TRANSPORTE",
      "cd_nm_prog": "0927 - CAMINHOS DE PERNAMBUCO",
      "vlrdotatualizada": 24695.07,
      "vlrtotalpago": 0,
      "cd_nm_acao": "1045 - RESTAURAÇÃO E MELHORAMENTO DA MALHA VIÁRIA DO ESTADO",
      "cd_nm_subacao": "2240 - REJUVENESCIMENTO DAS RODOVIAS DE ACESSO ÀS PRAIAS DO LITORAL SUL",
      "vlrempenhado": 0,
      "vlrliquidado": 0,
      "cd_nm_subfuncao": "782 - TRANSPORTE RODOVIÁRIO"
    },
    {
      "cd_nm_funcao": "26 - TRANSPORTE",
      "cd_nm_prog": "0927 - CAMINHOS DE PERNAMBUCO",
      "vlrdotatualizada": 36700753.95,
      "vlrtotalpago": 5308062.02,
      "cd_nm_acao": "1045 - RESTAURAÇÃO E MELHORAMENTO DA MALHA VIÁRIA DO ESTADO",
      "cd_nm_subacao": "2245 - RESTAURAÇÃO DA RODOVIA PE-638 - ENTR. BR-428 (KM 180) - ENTR. BR-407 (BURRINHO)",
      "vlrempenhado": 34000174.95,
      "vlrliquidado": 5308062.02,
      "cd_nm_subfuncao": "782 - TRANSPORTE RODOVIÁRIO"
    },
    {
      "cd_nm_funcao": "26 - TRANSPORTE",
      "cd_nm_prog": "0927 - CAMINHOS DE PERNAMBUCO",
      "vlrdotatualizada": 20367668.86,
      "vlrtotalpago": 13106152.15,
      "cd_nm_acao": "1045 - RESTAURAÇÃO E MELHORAMENTO DA MALHA VIÁRIA DO ESTADO",
      "cd_nm_subacao": "2246 - RESTAURAÇÃO DA RODOVIA VPE-639 - ENTR. BR-407 (BURRINHO) - ENTR. PE-647 (VILA DO NÚCLEO 5)",
      "vlrempenhado": 18960200.95,
      "vlrliquidado": 13106152.15,
      "cd_nm_subfuncao": "782 - TRANSPORTE RODOVIÁRIO"
    },
    {
      "cd_nm_funcao": "26 - TRANSPORTE",
      "cd_nm_prog": "0927 - CAMINHOS DE PERNAMBUCO",
      "vlrdotatualizada": 74594,
      "vlrtotalpago": 0,
      "cd_nm_acao": "1045 - RESTAURAÇÃO E MELHORAMENTO DA MALHA VIÁRIA DO ESTADO",
      "cd_nm_subacao": "2247 - RESTAURAÇÃO DA RODOVIA PE-233 - ENTR. BR-423 - IATI (ACESSO IATI)",
      "vlrempenhado": 74594,
      "vlrliquidado": 0,
      "cd_nm_subfuncao": "782 - TRANSPORTE RODOVIÁRIO"
    },
    {
      "cd_nm_funcao": "26 - TRANSPORTE",
      "cd_nm_prog": "0927 - CAMINHOS DE PERNAMBUCO",
      "vlrdotatualizada": 2317087.8,
      "vlrtotalpago": 51762.26,
      "cd_nm_acao": "1045 - RESTAURAÇÃO E MELHORAMENTO DA MALHA VIÁRIA DO ESTADO",
      "cd_nm_subacao": "2273 - RESTAURAÇÃO DA RODOVIA PE-633 - ENTR. RODOVIA PERIMETRAL (PEDRA LINDA) - ENTR. PE-638",
      "vlrempenhado": 2317087.8,
      "vlrliquidado": 51762.26,
      "cd_nm_subfuncao": "782 - TRANSPORTE RODOVIÁRIO"
    },
    {
      "cd_nm_funcao": "26 - TRANSPORTE",
      "cd_nm_prog": "0927 - CAMINHOS DE PERNAMBUCO",
      "vlrdotatualizada": 20276877.22,
      "vlrtotalpago": 14250091.89,
      "cd_nm_acao": "1045 - RESTAURAÇÃO E MELHORAMENTO DA MALHA VIÁRIA DO ESTADO",
      "cd_nm_subacao": "2280 - RESTAURAÇÃO DA RODOVIA PE-087 - ENTR. PERIMETRAL (GRAVATÁ) - MANDACARÚ",
      "vlrempenhado": 20276877.22,
      "vlrliquidado": 14250091.89,
      "cd_nm_subfuncao": "782 - TRANSPORTE RODOVIÁRIO"
    },
    {
      "cd_nm_funcao": "26 - TRANSPORTE",
      "cd_nm_prog": "0927 - CAMINHOS DE PERNAMBUCO",
      "vlrdotatualizada": 74231.18,
      "vlrtotalpago": 46947.72,
      "cd_nm_acao": "1045 - RESTAURAÇÃO E MELHORAMENTO DA MALHA VIÁRIA DO ESTADO",
      "cd_nm_subacao": "2287 - RESTAURAÇÃO DA RODOVIA PE-035 - ITAPISSUMA - ITAMARACÁ (PILAR)",
      "vlrempenhado": 74231.18,
      "vlrliquidado": 46947.72,
      "cd_nm_subfuncao": "782 - TRANSPORTE RODOVIÁRIO"
    },
    {
      "cd_nm_funcao": "26 - TRANSPORTE",
      "cd_nm_prog": "0927 - CAMINHOS DE PERNAMBUCO",
      "vlrdotatualizada": 1488289.83,
      "vlrtotalpago": 1488289.79,
      "cd_nm_acao": "1045 - RESTAURAÇÃO E MELHORAMENTO DA MALHA VIÁRIA DO ESTADO",
      "cd_nm_subacao": "2288 - REJUVENESCIMENTO DA RODOVIA PE-035 - ENTR. BR-101 (IGARASSU) - ITAPISSUMA",
      "vlrempenhado": 1488289.83,
      "vlrliquidado": 1488289.79,
      "cd_nm_subfuncao": "782 - TRANSPORTE RODOVIÁRIO"
    },
    {
      "cd_nm_funcao": "26 - TRANSPORTE",
      "cd_nm_prog": "0927 - CAMINHOS DE PERNAMBUCO",
      "vlrdotatualizada": 2000000,
      "vlrtotalpago": 0,
      "cd_nm_acao": "1045 - RESTAURAÇÃO E MELHORAMENTO DA MALHA VIÁRIA DO ESTADO",
      "cd_nm_subacao": "2306 - RESTAURAÇÃO DO ACESSO À AGRESTINA - ENTR. BR-232 (DUPLICADA) - ENTR. BR-104 (PARA AGRESTINA)",
      "vlrempenhado": 0,
      "vlrliquidado": 0,
      "cd_nm_subfuncao": "782 - TRANSPORTE RODOVIÁRIO"
    }
  ])
  const [totalValueActions2023, setTotalValueActions2023] = useState(52195938993.61)
  const [totalValueActions2022, setTotalValueActions2022] = useState(53602660064.86)
  const [totalValueActions2021, setTotalValueActions2021] = useState(46936310274.24)
  const [totalValueActions2020, setTotalValueActions2020] = useState(42260394375.91)
  const [totalValueBudgeted2023, setTotalValueBudgeted2023] = useState(469843274.04)
  const [totalValueBudgeted2022, setTotalValueBudgeted2022] = useState(511455340.08)
  const [totalValueBudgeted2021, setTotalValueBudgeted2021] = useState(277121706.46)
  const [totalValueBudgeted2020, setTotalValueBudgeted2020] = useState(274171854.19)
  const [totalValueExecuted2023, setTotalValueExecuted2023] = useState(178252296.04)
  const [totalValueExecuted2022, setTotalValueExecuted2022] = useState(377751117.86)
  const [totalValueExecuted2021, setTotalValueExecuted2021] = useState(119026684.75)
  const [totalValueExecuted2020, setTotalValueExecuted2020] = useState(79110000.53)
  const [totalValueEmissions, setTotalValueEmissions] = useState(3045.97)

  const numParse = (numero) => numero.toLocaleString('pt-BR', { minimumFractionDigits: 2 });

  useEffect(() => {
    const timeout = setTimeout(() => {
      setRenderOthers(true);
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    async function fetchActionsData() {
      const dataActions2023 = await getActionsData2023();
      dataActions2023 !== [] && setActions2023(dataActions2023.filter((action) => {
        return true
        // return goodActionsTags.some((tag) => action.cd_nm_subfuncao.includes(tag))
        // return action.vlrdotatualizada < action.vlrtotalpago & action.vlrtotalpago > 100000000
      }));

      const dataActions2022 = await getActionsData2022();
      setActions2022(dataActions2022);

      const dataActions2021 = await getActionsData2021();
      setActions2021(dataActions2021)

      const dataActions2020 = await getActionsData2020();
      setActions2020(dataActions2020)
    }

    return fetchActionsData();
  }, []);

  const goodActionsTags = ["0398", "3308", "3378", "3382", "3389", "3786", "3891", "3906", "4122", "4123", "4165", "4167", "4185", "4294", "4313", "4482", "4648", "3198", "3340", "4202", "4642", "4646", "4176", "4483", "4166", "4074", "4055", "3721", "3725", "2755", "2796", "2286", "0569", "3877", "4131", "4235", "4679", "4682", "1313", "2967", "2730", "2733", "4650", "4669", "1537", "3178", "3187", "4116", "4440", "1896"];

  const badActionsTags = [
    "4067", "4218", "1045", "3882", "4096", "4134", "4186", "4227"
  ];

  useEffect(() => {
    if (actions2023.length === 0) return
    function filterAndSetTotalGoodActions2023() {
      const filteredActions = actions2023.filter((action) =>
        goodActionsTags.some((tag) => action.cd_nm_acao.includes(tag))
      );
      setTotalGoodActions2023(filteredActions);
    }

    function filterAndSetTotalBadActions2023() {
      const filteredActions = actions2023.filter((action) =>
        badActionsTags.some((tag) => action.cd_nm_acao.includes(tag))
      );
      setTotalBadActions2023(filteredActions);
    }

    function calculateTotalActions() {
      const total = actions2023.reduce((acc, action) => acc + action.vlrdotatualizada, 0);
      setTotalValueActions2023(total);
    }

    calculateTotalActions();
    filterAndSetTotalGoodActions2023();
    filterAndSetTotalBadActions2023();
  }, [actions2023]);

  useEffect(() => {
    if (actions2022.length === 0) return

    function filterAndSetTotalGoodActions2022() {
      const filteredActions = actions2022.filter((action) =>
        goodActionsTags.some((tag) => action.cd_nm_acao ? action.cd_nm_acao.includes(tag) : false)
      );
      setTotalGoodActions2022(filteredActions);
    }

    function calculateTotalActions() {
      const total = actions2022.reduce((acc, action) => acc + action.vlrdotatualizada, 0);
      setTotalValueActions2022(total);
    }

    calculateTotalActions();
    filterAndSetTotalGoodActions2022();
  }, [actions2022])

  useEffect(() => {
    if (actions2021.length === 0) return

    function filterAndSetTotalGoodActions2021() {
      const filteredActions = actions2021.filter((action) =>
        goodActionsTags.some((tag) => action.cd_nm_acao ? action.cd_nm_acao.includes(tag) : false)
      );
      setTotalGoodActions2021(filteredActions);
    }

    function calculateTotalActions() {
      const total = actions2021.reduce((acc, action) => acc + action.vlrdotatualizada, 0);
      setTotalValueActions2021(total);
    }

    calculateTotalActions();
    filterAndSetTotalGoodActions2021();
  }, [actions2021])

  useEffect(() => {
    if (actions2020.length === 0) return

    function filterAndSetTotalGoodActions2020() {
      const filteredActions = actions2020.filter((action) =>
        goodActionsTags.some((tag) => action.cd_nm_acao ? action.cd_nm_acao.includes(tag) : false)
      );
      setTotalGoodActions2020(filteredActions);
    }

    function calculateTotalActions() {
      const total = actions2020.reduce((acc, action) => acc + action.vlrdotatualizada, 0);
      setTotalValueActions2020(total);
    }

    calculateTotalActions();
    filterAndSetTotalGoodActions2020();
  }, [actions2020])

  useEffect(() => {
    function sumValueBudgeted2023() {
      if (totalGoodActions2023.length === 35) return
      const total = totalGoodActions2023.reduce((acc, action) => acc + action.vlrdotatualizada, 0);
      setTotalValueBudgeted2023(total);
    }

    function sumValueBudgeted2022() {
      if (totalGoodActions2022.length === 0) return
      const total = totalGoodActions2022.reduce((acc, action) => acc + action.vlrdotatualizada, 0);
      setTotalValueBudgeted2022(total);
    }

    function sumValueBudgeted2021() {
      if (totalGoodActions2021.length === 0) return
      const total = totalGoodActions2021.reduce((acc, action) => acc + action.vlrdotatualizada, 0);
      setTotalValueBudgeted2021(total);
    }

    function sumValueBudgeted2020() {
      if (totalGoodActions2020.length === 0) return
      const total = totalGoodActions2020.reduce((acc, action) => acc + action.vlrdotatualizada, 0);
      setTotalValueBudgeted2020(total);
    }

    function sumValueExecuted2023() {
      if (totalGoodActions2023.length === 35) return
      const total = totalGoodActions2023.reduce((acc, action) => acc + action.vlrtotalpago, 0);
      setTotalValueExecuted2023(total);
    }


    function sumValueExecuted2022() {
      if (totalGoodActions2022.length === 0) return
      const total = totalGoodActions2022.reduce((acc, action) => acc + action.vlrtotalpago, 0);
      setTotalValueExecuted2022(total);
    }

    function sumValueExecuted2021() {
      if (totalGoodActions2021.length === 0) return
      const total = totalGoodActions2021.reduce((acc, action) => acc + action.vlrtotalpago, 0);
      setTotalValueExecuted2021(total);
    }


    function sumValueExecuted2020() {
      if (totalGoodActions2020.length === 0) return
      const total = totalGoodActions2020.reduce((acc, action) => acc + action.vlrtotalpago, 0);
      setTotalValueExecuted2020(total);
    }


    function calculateEmissions() {
      const totalEmission2020 = 17136035;
      setTotalValueEmissions(totalValueActions2023 / totalEmission2020)
    }

    sumValueExecuted2023();
    sumValueExecuted2022();
    sumValueExecuted2021();
    sumValueExecuted2020();
    sumValueBudgeted2023();
    sumValueBudgeted2022();
    sumValueBudgeted2021();
    sumValueBudgeted2020();
    calculateEmissions()
  }, [actions2023, totalGoodActions2020, totalGoodActions2021, totalGoodActions2022, totalGoodActions2023, totalValueActions2023])


  function AnimatedNumber({ initialValue, finalValue, duration }) {
    const [value, setValue] = useState(initialValue);

    useEffect(() => {
      const increment = (finalValue - initialValue) / (duration / 10);

      const interval = setInterval(() => {
        setValue((prevValue) => {
          const newValue = prevValue + increment;
          return newValue >= finalValue ? finalValue : newValue;
        });
      }, 10);

      return () => {
        clearInterval(interval);
      };
    }, [initialValue, finalValue, duration]);

    return `${numParse(value)}`;
  }

  return (
    <>
      <Header page='observatorio' />
      <SideNavBar />
      <div className='page'>
        <div className="page-banner observatory-banner">
          <h1>OBSERVATÓRIO</h1>
        </div>
        <div className='observatory-area'>
          {
            renderOthers ? (
              <>
                <h1 className='observatory-titles'>Quanto é investindo em ações que contribuem para o clima em Pernambuco</h1>
                <div className="data-cards fade-in">
                  <div className="value-card display-flex-center good-value">
                    <LazyLoad height={400} offset={0}>
                      <h1><AnimatedNumber initialValue={0} finalValue={(totalValueBudgeted2023 / 1000000000).toFixed(1)} duration={500} /> Bi</h1>
                      <h3>Colaboração com o clima</h3>
                      <h3>R$ <AnimatedNumber initialValue={0} finalValue={
                        totalValueBudgeted2023} duration={1000} /></h3>
                    </LazyLoad>
                  </div>
                  <div className="value-card display-flex-center bad-value">
                    <LazyLoad height={400} offset={500}>
                      <h1><AnimatedNumber initialValue={0} finalValue={
                        (totalValueActions2023 / 1000000000).toFixed(1)} duration={2000} /> Bi</h1>
                      <h3>Total investido em todas as ações</h3>
                      <h3>R$ <AnimatedNumber initialValue={0} finalValue={
                        totalValueActions2023} duration={2500} /></h3>
                    </LazyLoad>
                  </div>
                </div><br /><br />
                <h1 className='observatory-titles'>Quanto é gasto por emissão de CARBONO em nosso Estado</h1>
                <div className="data-cards fade-in">
                  <div className="value-card display-flex-center carbon-value">
                    <LazyLoad height={400} offset={0}>
                      <h1>R$ <AnimatedNumber initialValue={0} finalValue={(totalValueEmissions / 1000).toFixed(0)} duration={700} /> Mil / CO2e</h1>
                      <h3>Valor por emissão de carbono</h3>
                      <h3>R$ <AnimatedNumber initialValue={0} finalValue={totalValueEmissions} duration={1000} /></h3>
                    </LazyLoad>
                  </div>
                </div><br /><br />
                <h1 className='observatory-titles'>Qual valor total orçado e qual valor REAL executado em boas ações para o clima</h1>
                <div className="data-cards fade-in">
                  <div className="value-card display-flex-center">
                    <LazyLoad height={400} offset={0}>
                      <h1><AnimatedNumber initialValue={0} finalValue={(totalValueBudgeted2023 / 1000000).toFixed(1)} duration={500} /> Mi</h1>
                      <h3>Valor Orçado</h3>
                      <h3>R$ <AnimatedNumber initialValue={0} finalValue={totalValueBudgeted2023} duration={1000} /></h3>
                    </LazyLoad>
                  </div>
                  <div className="value-card display-flex-center">
                    <LazyLoad height={400} offset={0}>
                      <h1><AnimatedNumber initialValue={0} finalValue={(totalValueExecuted2023 / 1000000).toFixed(1)} duration={500} /> Mi</h1>
                      <h3>Valor Executado</h3>
                      <h3>R$ <AnimatedNumber initialValue={0} finalValue={totalValueExecuted2023} duration={1000} /></h3>
                    </LazyLoad>
                  </div>
                </div><br /><br /><br /><br />
                <h1 className='observatory-titles'>Valor orçado e executado em ações colaboradoras durante os anos</h1><br />
                <Chart
                  chartType="Bar"
                  data={
                    [
                      ["Ano", "Orçado (R$)", 'Executado (R$)'],
                      ['2020', totalValueBudgeted2020, totalValueExecuted2020],
                      ['2021', totalValueBudgeted2021, totalValueExecuted2021],
                      ['2022', totalValueBudgeted2022, totalValueExecuted2022],
                      ['2023', totalValueBudgeted2023, totalValueExecuted2023],
                    ]
                  }
                  width="100%"
                  height="400px"
                  options={{
                    chart: {
                      subtitle: "2020-2023",
                    },
                  }}
                  legendToggle
                /><br /><br /><br /><br />

                <h1 className='observatory-titles'>Valor total orçado para todas as ações durante os anos</h1><br />
                <Chart
                  chartType="Bar"
                  data={
                    [
                      ["Ano", "Total (R$)"],
                      ['2020', totalValueActions2020],
                      ['2021', totalValueActions2021],
                      ['2022', totalValueActions2022],
                      ['2023', totalValueActions2023],
                    ]
                  }
                  width="100%"
                  height="400px"
                  options={{
                    chart: {
                      subtitle: "2020-2023",
                    },
                  }}
                  legendToggle
                /><br /><br /><br /><br />

                <h1 className="observatory-titles">Ações COLABORATIVAS</h1>
                <LazyLoad height={400} offset={0}>
                  <ActionCarousel actions={totalGoodActions2023} actionType='good-action' />
                </LazyLoad>
                <h1 className="observatory-titles">Ações DEGRADANTES</h1>
                <LazyLoad height={400} offset={0}>
                  <ActionCarousel
                    actionType='bad-action'
                    actions={totalBadActions2023}
                  />
                </LazyLoad>
                <br />
                <nav className='observatory-docs'>
                  <div>
                    <h1>Documentos Orçamentários</h1><br />
                    <a href="https://dados.pe.gov.br/dataset/acoes-e-programas" target="_blank" rel="noopener noreferrer">Ações e programas - Portal de Dados Abertos de Pernambuco</a><br /><br />
                    <a href="https://dados.pe.gov.br/dataset/despesas-gerais" target="_blank" rel="noopener noreferrer">Despesas gerais - Portal de Dados Abertos de Pernambuco</a><br /><br />
                    <a href="https://dados.pe.gov.br/dataset/all-pagamentos" target="_blank" rel="noopener noreferrer">Pagamentos - Portal de Dados Abertos de Pernambuco</a><br /><br />
                    <a href="https://dados.pe.gov.br/dataset/todas-despesas-detalhadas" target="_blank" rel="noopener noreferrer">Despesas detalhadas - Portal de Dados Abertos de Pernambuco</a><br /><br />
                  </div>
                  <div>
                    <h1>Documentos Climáticos</h1><br />
                    <a href="https://semas.pe.gov.br/wp-content/uploads/2022/03/2022_03_16_GIZ_plano_descarbonizacao_pernambuco-v6_reduzido.pdf">Plano de descarbonização de Pernambuco</a><br /><br />
                    <a href="https://www.gov.br/mma/pt-br/assuntos/climaozoniodesertificacao/clima/diretrizes-para-uma-estrategia-nacional-para-neutralidade-climatica_.pdf">Diretrizes para uma estratégia nacional para neutralidade climática</a><br /><br />
                    <a href="https://semas.pe.gov.br/grafico-inventario-gee/">Gráfico Dinâmico – Inventário de Gases de Efeito Estufa de Pernambuco</a><br /><br />
                  </div>
                  <div>
                    <h1>Baixe os Dados</h1><br />
                    <a href="https://dados.pe.gov.br/dataset/38401a88-5a99-4b21-99d2-2d4a36a241f1/resource/bd2f90f2-3cc1-4b46-ab8d-9b15a1b0d453/download/acoes_e_programas_json_2023_20231010.json">Ações e Programas - 10/10/2023</a><br /><br />
                    <a href="https://dados.pe.gov.br/dataset/38401a88-5a99-4b21-99d2-2d4a36a241f1/resource/55784447-97e8-4fb0-b062-99c368bf6384/download/acoes_e_programas_json_2022_20221231.json">Ações e Programas - 2022</a><br /><br />
                    <a href="https://dados.pe.gov.br/dataset/38401a88-5a99-4b21-99d2-2d4a36a241f1/resource/0a2e8fd7-7a65-46df-bd1b-15f2dfaaded7/download/acoes_e_programas_json_2021_20211231.json">Ações e Programas - 2021</a><br /><br />
                    <a href="https://dados.pe.gov.br/dataset/38401a88-5a99-4b21-99d2-2d4a36a241f1/resource/5e5e1107-e1ed-4c2c-b258-e19a013f6caa/download/acoes_e_programas_json_2020_20201231.json">Ações e Programas - 2020</a><br /><br />
                  </div>
                  <div>
                    <h1>Outros Documentos</h1><br />
                    <a href="Projeto - 2023 - LOA CLIMA - Incidência política na legislação orçamentária do Estado de Pernambuco - Google Drive">Projeto - 2023 - LOA CLIMA - Incidência política na legislação orçamentária do Estado de Pernambuco - Google Drive</a><br /><br />
                  </div>
                </nav>
                <span id='att'>{!!actions2023.length ? `ATUALIZADO: ${new Date()}` : 'ATUALIZADO: 10/10/2023'}</span>
              </>
            ) : (
              <>
                <h1 className="observatory-titles">Aguarde enquanto os dados são carregados...</h1>
                <Loading />
              </>
            )
          }
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Observatory;