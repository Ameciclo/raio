import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import SideNavBar from '../components/SideNavBar';
import Footer from '../components/Footer';
import ActionCarousel from '../components/ActionsCarousel';
import LazyLoad from 'react-lazyload';
import { getActionsData2020, getActionsData2021, getActionsData2022, getActionsData2023 } from '../services/request';
import { Chart } from "react-google-charts";

function Observatory() {
  const [renderOthers, setRenderOthers] = useState(false);
  const [actions2023, setActions2023] = useState(false)
  const [actions2022, setActions2022] = useState(false)
  const [actions2021, setActions2021] = useState(false)
  const [actions2020, setActions2020] = useState(false)
  const [totalGoodActions2023, setTotalGoodActions2023] = useState([
    {
      "cd_nm_funcao": "04 - ADMINISTRAÇÃO",
      "cd_nm_prog": "0098 - CONSERVAÇÃO E PRESERVAÇÃO DOS RECURSOS NATURAIS DO ESTADO",
      "vlrdotatualizada": 7750359.36,
      "vlrtotalpago": 5653905.65,
      "cd_nm_acao": "0398 - OPERACIONALIZAÇÃO E CONSERVAÇÃO DO PARQUE DOIS IRMÃOS",
      "cd_nm_subacao": "0000 - OUTRAS MEDIDAS",
      "vlrempenhado": 6008812.04,
      "vlrliquidado": 5420829.08,
      "cd_nm_subfuncao": "122 - ADMINISTRAÇÃO GERAL"
    },
    {
      "cd_nm_funcao": "12 - EDUCAÇÃO",
      "cd_nm_prog": "0402 - AMPLIAÇÃO DO ACESSO E OPERACIONALIZAÇÃO DA EDUCAÇÃO INTEGRAL E SEMI-INTEGRAL",
      "vlrdotatualizada": 52674126.89,
      "vlrtotalpago": 34543211.55,
      "cd_nm_acao": "2310 - FORNECIMENTO DE ALIMENTAÇÃO ESCOLAR PARA EDUCAÇÃO INTEGRAL E SEMI-INTEGRAL",
      "cd_nm_subacao": "0000 - OUTRAS MEDIDAS",
      "vlrempenhado": 44863792.28,
      "vlrliquidado": 35231832.75,
      "cd_nm_subfuncao": "362 - ENSINO MÉDIO"
    },
    {
      "cd_nm_funcao": "12 - EDUCAÇÃO",
      "cd_nm_prog": "0402 - AMPLIAÇÃO DO ACESSO E OPERACIONALIZAÇÃO DA EDUCAÇÃO INTEGRAL E SEMI-INTEGRAL",
      "vlrdotatualizada": 21238300,
      "vlrtotalpago": 20587858.61,
      "cd_nm_acao": "2310 - FORNECIMENTO DE ALIMENTAÇÃO ESCOLAR PARA EDUCAÇÃO INTEGRAL E SEMI-INTEGRAL",
      "cd_nm_subacao": "A129 - DESPESAS COM MERENDA ESCOLAR POR CONTRATO DE GESTÃO NAS ESCOLAS INTEGRAIS E SEMI-INTEGRAIS",
      "vlrempenhado": 20651393.14,
      "vlrliquidado": 20587858.61,
      "cd_nm_subfuncao": "362 - ENSINO MÉDIO"
    },
    {
      "cd_nm_funcao": "12 - EDUCAÇÃO",
      "cd_nm_prog": "0402 - AMPLIAÇÃO DO ACESSO E OPERACIONALIZAÇÃO DA EDUCAÇÃO INTEGRAL E SEMI-INTEGRAL",
      "vlrdotatualizada": 4310907,
      "vlrtotalpago": 3352896.69,
      "cd_nm_acao": "2310 - FORNECIMENTO DE ALIMENTAÇÃO ESCOLAR PARA EDUCAÇÃO INTEGRAL E SEMI-INTEGRAL",
      "cd_nm_subacao": "A130 - DESPESAS COM GÁS DE COZINHA PARA MERENDA ESCOLAR NAS ESCOLAS INTEGRAIS E SEMI-INTEGRAIS",
      "vlrempenhado": 3356951.54,
      "vlrliquidado": 3356819.04,
      "cd_nm_subfuncao": "362 - ENSINO MÉDIO"
    },
    {
      "cd_nm_funcao": "12 - EDUCAÇÃO",
      "cd_nm_prog": "0402 - AMPLIAÇÃO DO ACESSO E OPERACIONALIZAÇÃO DA EDUCAÇÃO INTEGRAL E SEMI-INTEGRAL",
      "vlrdotatualizada": 68797701,
      "vlrtotalpago": 46073728.65,
      "cd_nm_acao": "2310 - FORNECIMENTO DE ALIMENTAÇÃO ESCOLAR PARA EDUCAÇÃO INTEGRAL E SEMI-INTEGRAL",
      "cd_nm_subacao": "A132 - DESPESAS COM PAGAMENTO DE MERENDEIRAS NAS ESCOLAS INTEGRAIS E SEMI-INTEGRAIS",
      "vlrempenhado": 55701988.22,
      "vlrliquidado": 46509512.08,
      "cd_nm_subfuncao": "362 - ENSINO MÉDIO"
    },
    {
      "cd_nm_funcao": "12 - EDUCAÇÃO",
      "cd_nm_prog": "0402 - AMPLIAÇÃO DO ACESSO E OPERACIONALIZAÇÃO DA EDUCAÇÃO INTEGRAL E SEMI-INTEGRAL",
      "vlrdotatualizada": 11670531,
      "vlrtotalpago": 911238.49,
      "cd_nm_acao": "2310 - FORNECIMENTO DE ALIMENTAÇÃO ESCOLAR PARA EDUCAÇÃO INTEGRAL E SEMI-INTEGRAL",
      "cd_nm_subacao": "A134 - AQUISIÇÃO DE ALIMENTOS DA AGRICULTURA FAMILIAR - PEAAF PARA EDUCAÇÃO INTEGRAL E SEMI-INTEGRAL",
      "vlrempenhado": 7849900.87,
      "vlrliquidado": 980260.3,
      "cd_nm_subfuncao": "362 - ENSINO MÉDIO"
    },
    {
      "cd_nm_funcao": "12 - EDUCAÇÃO",
      "cd_nm_prog": "0402 - AMPLIAÇÃO DO ACESSO E OPERACIONALIZAÇÃO DA EDUCAÇÃO INTEGRAL E SEMI-INTEGRAL",
      "vlrdotatualizada": 86076188.47,
      "vlrtotalpago": 45843548.64,
      "cd_nm_acao": "2310 - FORNECIMENTO DE ALIMENTAÇÃO ESCOLAR PARA EDUCAÇÃO INTEGRAL E SEMI-INTEGRAL",
      "cd_nm_subacao": "A211 - DESPESAS COM MERENDA TERCEIRIZADA NAS ESCOLAS INTEGRAIS E SEMI-INTEGRAIS",
      "vlrempenhado": 71529468.82,
      "vlrliquidado": 47700795.32,
      "cd_nm_subfuncao": "362 - ENSINO MÉDIO"
    },
    {
      "cd_nm_funcao": "12 - EDUCAÇÃO",
      "cd_nm_prog": "0402 - AMPLIAÇÃO DO ACESSO E OPERACIONALIZAÇÃO DA EDUCAÇÃO INTEGRAL E SEMI-INTEGRAL",
      "vlrdotatualizada": 20000,
      "vlrtotalpago": 0,
      "cd_nm_acao": "2310 - FORNECIMENTO DE ALIMENTAÇÃO ESCOLAR PARA EDUCAÇÃO INTEGRAL E SEMI-INTEGRAL",
      "cd_nm_subacao": "EK2Z - EMENDA PARLAMENTAR NO.527/2022",
      "vlrempenhado": 0,
      "vlrliquidado": 0,
      "cd_nm_subfuncao": "362 - ENSINO MÉDIO"
    },
    {
      "cd_nm_funcao": "12 - EDUCAÇÃO",
      "cd_nm_prog": "0915 - AMPLIAÇÃO DO ACESSO E OPERACIONALIZAÇÃO  DA EDUCAÇÃO BÁSICA DA REDE PÚBLICA NO MEIO RURAL",
      "vlrdotatualizada": 7616744.54,
      "vlrtotalpago": 5432889.76,
      "cd_nm_acao": "4320 - OPERACIONALIZAÇÃO DA EDUCAÇÃO DO CAMPO E QUILOMBOLA",
      "cd_nm_subacao": "0000 - OUTRAS MEDIDAS",
      "vlrempenhado": 5972471.45,
      "vlrliquidado": 4118521.75,
      "cd_nm_subfuncao": "368 - EDUCAÇÃO BÁSICA"
    },
    {
      "cd_nm_funcao": "12 - EDUCAÇÃO",
      "cd_nm_prog": "0915 - AMPLIAÇÃO DO ACESSO E OPERACIONALIZAÇÃO  DA EDUCAÇÃO BÁSICA DA REDE PÚBLICA NO MEIO RURAL",
      "vlrdotatualizada": 735400,
      "vlrtotalpago": 33437,
      "cd_nm_acao": "4320 - OPERACIONALIZAÇÃO DA EDUCAÇÃO DO CAMPO E QUILOMBOLA",
      "cd_nm_subacao": "1690 - CAPACITAÇÃO DOS PROFISSIONAIS DA REDE DE EDUCAÇÃO DO CAMPO E QUILOMBOLA",
      "vlrempenhado": 35036,
      "vlrliquidado": 33437,
      "cd_nm_subfuncao": "368 - EDUCAÇÃO BÁSICA"
    },
    {
      "cd_nm_funcao": "12 - EDUCAÇÃO",
      "cd_nm_prog": "0915 - AMPLIAÇÃO DO ACESSO E OPERACIONALIZAÇÃO  DA EDUCAÇÃO BÁSICA DA REDE PÚBLICA NO MEIO RURAL",
      "vlrdotatualizada": 2604300,
      "vlrtotalpago": 1702499.98,
      "cd_nm_acao": "4320 - OPERACIONALIZAÇÃO DA EDUCAÇÃO DO CAMPO E QUILOMBOLA",
      "cd_nm_subacao": "A232 - DESPESAS COM MERENDA ESCOLAR POR CONTRATO DE GESTÃO NAS ESCOLAS DA EDUCAÇÃO DO CAMPO E QUILOMBOLA",
      "vlrempenhado": 1721459.89,
      "vlrliquidado": 1702499.98,
      "cd_nm_subfuncao": "368 - EDUCAÇÃO BÁSICA"
    },
    {
      "cd_nm_funcao": "12 - EDUCAÇÃO",
      "cd_nm_prog": "0915 - AMPLIAÇÃO DO ACESSO E OPERACIONALIZAÇÃO  DA EDUCAÇÃO BÁSICA DA REDE PÚBLICA NO MEIO RURAL",
      "vlrdotatualizada": 13206192.67,
      "vlrtotalpago": 10900296.87,
      "cd_nm_acao": "4320 - OPERACIONALIZAÇÃO DA EDUCAÇÃO DO CAMPO E QUILOMBOLA",
      "cd_nm_subacao": "A235 - FORNECIMENTO DE TRANSPORTE ESCOLAR PARA EDUCAÇÃO DO CAMPO E QUILOMBOLA",
      "vlrempenhado": 12792003.83,
      "vlrliquidado": 11951976.9,
      "cd_nm_subfuncao": "368 - EDUCAÇÃO BÁSICA"
    },
    {
      "cd_nm_funcao": "12 - EDUCAÇÃO",
      "cd_nm_prog": "0915 - AMPLIAÇÃO DO ACESSO E OPERACIONALIZAÇÃO  DA EDUCAÇÃO BÁSICA DA REDE PÚBLICA NO MEIO RURAL",
      "vlrdotatualizada": 912953,
      "vlrtotalpago": 153124.37,
      "cd_nm_acao": "4320 - OPERACIONALIZAÇÃO DA EDUCAÇÃO DO CAMPO E QUILOMBOLA",
      "cd_nm_subacao": "A236 - MANUTENÇÃO DAS ESCOLAS DA EDUCAÇÃO DO CAMPO E QUILOMBOLA",
      "vlrempenhado": 144090.99,
      "vlrliquidado": 134552.94,
      "cd_nm_subfuncao": "368 - EDUCAÇÃO BÁSICA"
    },
    {
      "cd_nm_funcao": "12 - EDUCAÇÃO",
      "cd_nm_prog": "0915 - AMPLIAÇÃO DO ACESSO E OPERACIONALIZAÇÃO  DA EDUCAÇÃO BÁSICA DA REDE PÚBLICA NO MEIO RURAL",
      "vlrdotatualizada": 567584,
      "vlrtotalpago": 23688.65,
      "cd_nm_acao": "4320 - OPERACIONALIZAÇÃO DA EDUCAÇÃO DO CAMPO E QUILOMBOLA",
      "cd_nm_subacao": "A238 - AQUISIÇÃO DE ALIMENTOS DA AGRICULTURA FAMILIAR - PEAAF DA EDUCAÇÃO DO CAMPO E QUILOMBOLA",
      "vlrempenhado": 197118.69,
      "vlrliquidado": 23688.65,
      "cd_nm_subfuncao": "368 - EDUCAÇÃO BÁSICA"
    },
    {
      "cd_nm_funcao": "12 - EDUCAÇÃO",
      "cd_nm_prog": "0915 - AMPLIAÇÃO DO ACESSO E OPERACIONALIZAÇÃO  DA EDUCAÇÃO BÁSICA DA REDE PÚBLICA NO MEIO RURAL",
      "vlrdotatualizada": 955800,
      "vlrtotalpago": 337800,
      "cd_nm_acao": "4320 - OPERACIONALIZAÇÃO DA EDUCAÇÃO DO CAMPO E QUILOMBOLA",
      "cd_nm_subacao": "A432 - EXECUÇÃO DO PROGRAMA DE MONITORIA PE PARA AS ESCOLAS CAMPO E QUILOMBOLA",
      "vlrempenhado": 417000,
      "vlrliquidado": 417000,
      "cd_nm_subfuncao": "368 - EDUCAÇÃO BÁSICA"
    },
    {
      "cd_nm_funcao": "12 - EDUCAÇÃO",
      "cd_nm_prog": "0915 - AMPLIAÇÃO DO ACESSO E OPERACIONALIZAÇÃO  DA EDUCAÇÃO BÁSICA DA REDE PÚBLICA NO MEIO RURAL",
      "vlrdotatualizada": 1039596.97,
      "vlrtotalpago": 0,
      "cd_nm_acao": "4320 - OPERACIONALIZAÇÃO DA EDUCAÇÃO DO CAMPO E QUILOMBOLA",
      "cd_nm_subacao": "A612 - PROGRAMA INVESTE ESCOLA PE - ESCOLAS DO CAMPO E QUILOMBOLA",
      "vlrempenhado": 264432.32,
      "vlrliquidado": 264432.32,
      "cd_nm_subfuncao": "368 - EDUCAÇÃO BÁSICA"
    },
    {
      "cd_nm_funcao": "12 - EDUCAÇÃO",
      "cd_nm_prog": "1027 - MELHORIA DA GESTÃO DA REDE ESCOLAR",
      "vlrdotatualizada": 27800686.73,
      "vlrtotalpago": 15854658.78,
      "cd_nm_acao": "4538 - FORNECIMENTO DE ALIMENTAÇÃO ESCOLAR",
      "cd_nm_subacao": "0000 - OUTRAS MEDIDAS",
      "vlrempenhado": 21297050.67,
      "vlrliquidado": 15873656.23,
      "cd_nm_subfuncao": "368 - EDUCAÇÃO BÁSICA"
    },
    {
      "cd_nm_funcao": "12 - EDUCAÇÃO",
      "cd_nm_prog": "1027 - MELHORIA DA GESTÃO DA REDE ESCOLAR",
      "vlrdotatualizada": 65714900,
      "vlrtotalpago": 49317739.03,
      "cd_nm_acao": "4538 - FORNECIMENTO DE ALIMENTAÇÃO ESCOLAR",
      "cd_nm_subacao": "A252 - DESPESAS COM MERENDA ESCOLAR POR CONTRATO DE GESTÃO NAS ESCOLAS",
      "vlrempenhado": 59780254.34,
      "vlrliquidado": 49317739.03,
      "cd_nm_subfuncao": "368 - EDUCAÇÃO BÁSICA"
    },
    {
      "cd_nm_funcao": "12 - EDUCAÇÃO",
      "cd_nm_prog": "1027 - MELHORIA DA GESTÃO DA REDE ESCOLAR",
      "vlrdotatualizada": 4042550,
      "vlrtotalpago": 3214405.17,
      "cd_nm_acao": "4538 - FORNECIMENTO DE ALIMENTAÇÃO ESCOLAR",
      "cd_nm_subacao": "A253 - DESPESAS COM GÁS DE COZINHA PARA MERENDA ESCOLAR NAS ESCOLAS",
      "vlrempenhado": 3215014.06,
      "vlrliquidado": 3214879.2,
      "cd_nm_subfuncao": "368 - EDUCAÇÃO BÁSICA"
    },
    {
      "cd_nm_funcao": "12 - EDUCAÇÃO",
      "cd_nm_prog": "1027 - MELHORIA DA GESTÃO DA REDE ESCOLAR",
      "vlrdotatualizada": 37442498,
      "vlrtotalpago": 22103722.12,
      "cd_nm_acao": "4538 - FORNECIMENTO DE ALIMENTAÇÃO ESCOLAR",
      "cd_nm_subacao": "A254 - DESPESAS COM PAGAMENTO DE MERENDEIRAS NAS ESCOLAS",
      "vlrempenhado": 30461461.1,
      "vlrliquidado": 22574343.28,
      "cd_nm_subfuncao": "368 - EDUCAÇÃO BÁSICA"
    },
    {
      "cd_nm_funcao": "12 - EDUCAÇÃO",
      "cd_nm_prog": "1027 - MELHORIA DA GESTÃO DA REDE ESCOLAR",
      "vlrdotatualizada": 10187242.8,
      "vlrtotalpago": 762993.11,
      "cd_nm_acao": "4538 - FORNECIMENTO DE ALIMENTAÇÃO ESCOLAR",
      "cd_nm_subacao": "A256 - AQUISIÇÃO DE ALIMENTOS DA AGRICULTURA FAMILIAR - PEAAF",
      "vlrempenhado": 7418985.36,
      "vlrliquidado": 769928.17,
      "cd_nm_subfuncao": "368 - EDUCAÇÃO BÁSICA"
    },
    {
      "cd_nm_funcao": "12 - EDUCAÇÃO",
      "cd_nm_prog": "1027 - MELHORIA DA GESTÃO DA REDE ESCOLAR",
      "vlrdotatualizada": 20000,
      "vlrtotalpago": 0,
      "cd_nm_acao": "4538 - FORNECIMENTO DE ALIMENTAÇÃO ESCOLAR",
      "cd_nm_subacao": "EHWZ - EMENDA PARLAMENTAR NO.726/2019",
      "vlrempenhado": 20000,
      "vlrliquidado": 0,
      "cd_nm_subfuncao": "368 - EDUCAÇÃO BÁSICA"
    },
    {
      "cd_nm_funcao": "12 - EDUCAÇÃO",
      "cd_nm_prog": "1027 - MELHORIA DA GESTÃO DA REDE ESCOLAR",
      "vlrdotatualizada": 60000,
      "vlrtotalpago": 0,
      "cd_nm_acao": "4538 - FORNECIMENTO DE ALIMENTAÇÃO ESCOLAR",
      "cd_nm_subacao": "EIUN - EMENDA PARLAMENTAR NO.383/2021",
      "vlrempenhado": 60000,
      "vlrliquidado": 0,
      "cd_nm_subfuncao": "368 - EDUCAÇÃO BÁSICA"
    },
    {
      "cd_nm_funcao": "12 - EDUCAÇÃO",
      "cd_nm_prog": "1027 - MELHORIA DA GESTÃO DA REDE ESCOLAR",
      "vlrdotatualizada": 20000,
      "vlrtotalpago": 0,
      "cd_nm_acao": "4538 - FORNECIMENTO DE ALIMENTAÇÃO ESCOLAR",
      "cd_nm_subacao": "EJ9H - EMENDA DERIVADA 1017/2022",
      "vlrempenhado": 20000,
      "vlrliquidado": 0,
      "cd_nm_subfuncao": "368 - EDUCAÇÃO BÁSICA"
    },
    {
      "cd_nm_funcao": "12 - EDUCAÇÃO",
      "cd_nm_prog": "1027 - MELHORIA DA GESTÃO DA REDE ESCOLAR",
      "vlrdotatualizada": 0,
      "vlrtotalpago": 0,
      "cd_nm_acao": "4538 - FORNECIMENTO DE ALIMENTAÇÃO ESCOLAR",
      "cd_nm_subacao": "EJY1 - EMENDA PARLAMENTAR NO.349/2022",
      "vlrempenhado": 0,
      "vlrliquidado": 0,
      "cd_nm_subfuncao": "368 - EDUCAÇÃO BÁSICA"
    }
  ])
  const [totalGoodActions2022, setTotalGoodActions2022] = useState([])
  const [totalGoodActions2021, setTotalGoodActions2021] = useState([])
  const [totalGoodActions2020, setTotalGoodActions2020] = useState([])
  const [totalValueGoodActions2023, setTotalValueGoodActions2023] = useState(766694019.16)
  const [totalValueGoodActions2022, setTotalValueGoodActions2022] = useState(841151819.25)
  const [totalValueGoodActions2021, setTotalValueGoodActions2021] = useState(616539400.44)
  const [totalValueGoodActions2020, setTotalValueGoodActions2020] = useState(504785055.78)
  const [totalValueActions2023, setTotalValueActions2023] = useState(52192384129.44)
  const [totalValueBudgeted2023, setTotalValueBudgeted2023] = useState(766694019.16)
  const [totalValueExecuted2023, setTotalValueExecuted2023] = useState(386886119.98)
  const [totalValueEmissions, setTotalValueEmissions] = useState(3045.76)

  // useEffect(() => {
      // console.log(totalGoodActions2023.slice(0, 25))
    // console.log(totalValueGoodActions2023) // 766694019.16
    // console.log(totalValueGoodActions2022) // 841151819.25
    // console.log(totalValueGoodActions2021) // 616539400.44
    // console.log(totalValueGoodActions2020) // 504785055.78
    // console.log(totalValueEmissions) // 3045.76
    // console.log(totalValueActions2023) // 52192384129.44
    // console.log(totalValueExecuted2023) // 386886119.98
    // console.log(actions2023
    //   .filter((action) => {
    //     const conditions = (
    //       action.vlrdotatualizada !== 0
    //       && action.cd_nm_funcao.includes('15 - URBANISMO')
    //     )
    //     return conditions
    //   })
    //   .slice(0, 25))
  // }, [totalValueGoodActions2023])


  const numParse = (numero) => numero.toLocaleString('pt-BR', { minimumFractionDigits: 2 });

  useEffect(() => {
    const timeout = setTimeout(() => {
      setRenderOthers(true);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  // useEffect(() => {
    // async function fetchActionsData() {
      // const dataActions2023 = await getActionsData2023();
      // dataActions2023 !== [] && setActions2023(dataActions2023.filter((action) => {
      //   return true
      //   // return goodActionsTags.some((tag) => action.cd_nm_subfuncao.includes(tag))
      //   // return action.vlrdotatualizada < action.vlrtotalpago & action.vlrtotalpago > 100000000
      // }));

  //     const dataActions2022 = await getActionsData2022();
  //     dataActions2022 !== [] && setActions2022(dataActions2022);

  //     const dataActions2021 = await getActionsData2021();
  //     dataActions2021 !== [] && setActions2021(dataActions2021)

  //     const dataActions2020 = await getActionsData2020();
  //     dataActions2020 !== [] && setActions2020(dataActions2020)
  //   }

  //   return fetchActionsData();
  // }, []);

  // useEffect(() => {
  //   const goodActionsTags = [
  //     "2310", "4318", "4320", "4538", "4450", "1007", "0398", "3308", "3378", "3382",
  //     "3389", "3786", "3891", "3906", "4122", "4123", "4165", "4167", "4185", "4294",
  //     "4313", "4482", "4648", "3198", "4202", "4642", "4352", "4176", "4483", "4166",
  //     "4074", "4458", "3594", "3595", "0028", "4055", "3721", "3725", "3544", "3545"
  //   ];

    // function filterAndSetTotalGoodActions2023() {
    //   const filteredActions = actions2023.filter((action) =>
    //     goodActionsTags.some((tag) => action.cd_nm_acao.includes(tag))
    //   );
    //   setTotalGoodActions2023(filteredActions);
    // }

    // function filterAndSetTotalGoodActions2022() {
    //   const filteredActions = actions2022.filter((action) =>
    //     goodActionsTags.some((tag) => action.cd_nm_acao ? action.cd_nm_acao.includes(tag) : false)
    //   );
    //   setTotalGoodActions2022(filteredActions);
    // }

    // function filterAndSetTotalGoodActions2021() {
    //   const filteredActions = actions2021.filter((action) =>
    //     goodActionsTags.some((tag) => action.cd_nm_acao ? action.cd_nm_acao.includes(tag) : false)
    //   );
    //   setTotalGoodActions2021(filteredActions);
    // }

    // function filterAndSetTotalGoodActions2020() {
    //   const filteredActions = actions2020.filter((action) =>
    //     goodActionsTags.some((tag) => action.cd_nm_acao ? action.cd_nm_acao.includes(tag) : false)
    //   );
    //   setTotalGoodActions2020(filteredActions);
    // }

    // function filterAndSetTotalBadActions() {
    //   const filteredActions = actions2023.filter((action) =>
    //     goodActionsTags.every((tag) => !action.cd_nm_acao.includes(tag))
    //   );
    //   setTotalValueActions2023(filteredActions);
    // }

    // actions2023 !== [] && filterAndSetTotalGoodActions2023();
    // actions2022 !== [] && filterAndSetTotalGoodActions2022();
    // actions2021 !== [] && filterAndSetTotalGoodActions2021();
    // actions2020 !== [] && filterAndSetTotalGoodActions2020();
    // actions2023 !== [] && filterAndSetTotalBadActions();
  // }, [actions2020, actions2021, actions2022, actions2023]);

  // useEffect(() => {
  //   function calculateTotalGoodActions2023() {
  //     const total = totalGoodActions2023.reduce((acc, action) => acc + action.vlrdotatualizada, 0);
  //     setTotalValueGoodActions2023(total);
  //   }

  //   function calculateTotalGoodActions2022() {
  //     const total = totalGoodActions2022.reduce((acc, action) => acc + action.vlrdotatualizada, 0);
  //     setTotalValueGoodActions2022(total);
  //   }

  //   function calculateTotalGoodActions2021() {
  //     const total = totalGoodActions2021.reduce((acc, action) => acc + action.vlrdotatualizada, 0);
  //     setTotalValueGoodActions2021(total);
  //   }

  //   function calculateTotalGoodActions2020() {
  //     const total = totalGoodActions2020.reduce((acc, action) => acc + action.vlrdotatualizada, 0);
  //     setTotalValueGoodActions2020(total);
  //   }


  //   function calculateTotalActions() {
  //     const total = actions2023.reduce((acc, action) => acc + action.vlrdotatualizada, 0);
  //     setTotalValueActions2023(total);
  //   }

  //   function sumValueBudgeted() {
  //     const total = totalGoodActions2023.reduce((acc, action) => acc + action.vlrdotatualizada, 0);
  //     setTotalValueBudgeted2023(total);
  //   }

  //   function sumValueExecuted() {
  //     const total = totalGoodActions2023.reduce((acc, action) => acc + action.vlrtotalpago, 0);
  //     setTotalValueExecuted2023(total);
  //   }


  //   function calculateEmissions() {
  //     const totalEmission2020 = 17136035;
  //     setTotalValueEmissions(totalValueActions2023 / totalEmission2020)
  //   }

  //   actions2023 && calculateTotalGoodActions2023();
  //   actions2022 && calculateTotalGoodActions2022();
  //   actions2021 && calculateTotalGoodActions2021();
  //   actions2020 && calculateTotalGoodActions2020();
  //   actions2023 && calculateTotalActions();
  //   actions2023 && sumValueExecuted();
  //   actions2023 && sumValueBudgeted();
  //   calculateEmissions()
  // }, [actions2020, actions2021, actions2022, actions2023, totalGoodActions2020, totalGoodActions2021, totalGoodActions2022, totalGoodActions2023, totalValueActions2023])


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
      <Header page='dev' />
      {
        renderOthers && (
          <>
            <SideNavBar />
            <div className='observatory-pg'>
              <div className="observatory-banner">
                <h1>OBSERVATÓRIO</h1>
              </div>
              <div className='observatory-area'>
                <h1 className='observatory-titles'>Quanto é investindo em ações que contribuem pro clima em Pernambuco:</h1>
                <div className="data-cards fade-in">
                  <div className="value-card display-flex-center good-value">
                    <LazyLoad height={400} offset={0}>
                      <h1><AnimatedNumber initialValue={0} finalValue={(totalValueGoodActions2023 / 1000000000).toFixed(1)} duration={500} /> Bi</h1>
                      <h3>Colaboração com o clima</h3>
                      <h3>R$ <AnimatedNumber initialValue={0} finalValue={
                        totalValueGoodActions2023} duration={1000} /></h3>
                    </LazyLoad>
                  </div>
                  <div className="value-card display-flex-center bad-value">
                    <LazyLoad height={400} offset={0}>
                      <h1><AnimatedNumber initialValue={0} finalValue={
                        (totalValueActions2023 / 1000000000).toFixed(1)} duration={2000} /> Bi</h1>
                      <h3>Total investido</h3>
                      <h3>R$ <AnimatedNumber initialValue={0} finalValue={
                        totalValueActions2023} duration={2500} /></h3>
                    </LazyLoad>
                  </div>
                </div><br /><br />
                <h1 className='observatory-titles'>Quanto é gasto por emissão de CARBONO em nosso Estado:</h1>
                <div className="data-cards fade-in">
                  <div className="value-card display-flex-center carbon-value">
                    <LazyLoad height={400} offset={0}>
                      <h1>R$ <AnimatedNumber initialValue={0} finalValue={(totalValueEmissions / 1000).toFixed(0)} duration={700} /> Mil / CO2e</h1>
                      <h3>Valor por emissão carbono</h3>
                      <h3>R$ <AnimatedNumber initialValue={0} finalValue={totalValueEmissions} duration={1000} /></h3>
                    </LazyLoad>
                  </div>
                </div><br /><br />
                <h1 className='observatory-titles'>Qual valor total orçado e qual valor REAL executado em boas ações pro clima:</h1>
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
                <Chart
                  chartType="Bar"
                  data={
                    [
                      ["Ano", "Orçado"],
                      ['2020', totalValueGoodActions2020],
                      ['2021', totalValueGoodActions2021],
                      ['2022', totalValueGoodActions2022],
                      ['2023', totalValueGoodActions2023],
                    ]
                  }
                  width="90%"
                  height="50%"
                  options={{
                    chart: {
                      title: "Performace de investimento em ações pro clima no Estado",
                      subtitle: "2020-2023",
                    },
                  }}
                  legendToggle
                /><br /><br /><br /><br />

                <h1 className="observatory-titles">Ações que COLABORAM com o clima:</h1>
                <LazyLoad height={400} offset={0}>
                  <ActionCarousel actions={totalGoodActions2023} actionType='good-action' />
                </LazyLoad>
                <h1 className="observatory-titles">Ações que NÃO COLABORAM com o clima:</h1>
                <LazyLoad height={400} offset={0}>
                  <ActionCarousel
                    actionType='bad-action'
                    actions={
                      actions2023 ? actions2023
                        .filter((action) => {
                          const conditions = (
                            action.vlrdotatualizada !== 0
                            && action.cd_nm_funcao.includes('15 - URBANISMO')
                          )
                          return conditions
                        })
                        .slice(0, 50)
                        :
                        [
                          {
                            "cd_nm_funcao": "15 - URBANISMO",
                            "cd_nm_prog": "0130 - PLANEJAMENTO E GESTÃO METROPOLITANA",
                            "vlrdotatualizada": 10000,
                            "vlrtotalpago": 0,
                            "cd_nm_acao": "0147 - OPERACIONALIZAÇÃO, IMPLEMENTAÇÃO E ADEQUAÇÃO DOS INSTRUMENTOS DE GESTÃO DO USO E OCUPAÇÃO DO SOLO",
                            "cd_nm_subacao": "0000 - OUTRAS MEDIDAS",
                            "vlrempenhado": 0,
                            "vlrliquidado": 0,
                            "cd_nm_subfuncao": "121 - PLANEJAMENTO E ORÇAMENTO"
                          },
                          {
                            "cd_nm_funcao": "15 - URBANISMO",
                            "cd_nm_prog": "0130 - PLANEJAMENTO E GESTÃO METROPOLITANA",
                            "vlrdotatualizada": 90000,
                            "vlrtotalpago": 0,
                            "cd_nm_acao": "0727 - APOIO OPERACIONAL AO PROMETRÓPOLE",
                            "cd_nm_subacao": "0000 - OUTRAS MEDIDAS",
                            "vlrempenhado": 0,
                            "vlrliquidado": 0,
                            "cd_nm_subfuncao": "121 - PLANEJAMENTO E ORÇAMENTO"
                          },
                          {
                            "cd_nm_funcao": "15 - URBANISMO",
                            "cd_nm_prog": "0130 - PLANEJAMENTO E GESTÃO METROPOLITANA",
                            "vlrdotatualizada": 90000,
                            "vlrtotalpago": 0,
                            "cd_nm_acao": "2942 - ELABORAÇÃO E ATUALIZAÇÃO DE INSTRUMENTOS DE PLANEJAMENTO METROPOLITANO",
                            "cd_nm_subacao": "0000 - OUTRAS MEDIDAS",
                            "vlrempenhado": 0,
                            "vlrliquidado": 0,
                            "cd_nm_subfuncao": "121 - PLANEJAMENTO E ORÇAMENTO"
                          },
                          {
                            "cd_nm_funcao": "15 - URBANISMO",
                            "cd_nm_prog": "0130 - PLANEJAMENTO E GESTÃO METROPOLITANA",
                            "vlrdotatualizada": 1816300,
                            "vlrtotalpago": 0,
                            "cd_nm_acao": "2942 - ELABORAÇÃO E ATUALIZAÇÃO DE INSTRUMENTOS DE PLANEJAMENTO METROPOLITANO",
                            "cd_nm_subacao": "1848 - IMPLEMENTAR E ATUALIZAR O PLANO DE DESENVOLVIMENTO URBANO INTEGRADO - PDUI - DA RMR",
                            "vlrempenhado": 0,
                            "vlrliquidado": 0,
                            "cd_nm_subfuncao": "121 - PLANEJAMENTO E ORÇAMENTO"
                          },
                          {
                            "cd_nm_funcao": "15 - URBANISMO",
                            "cd_nm_prog": "0130 - PLANEJAMENTO E GESTÃO METROPOLITANA",
                            "vlrdotatualizada": 90000,
                            "vlrtotalpago": 0,
                            "cd_nm_acao": "3119 - MELHORIA DOS SERVIÇOS DE INTERESSE COMUM METROPOLITANO",
                            "cd_nm_subacao": "0000 - OUTRAS MEDIDAS",
                            "vlrempenhado": 0,
                            "vlrliquidado": 0,
                            "cd_nm_subfuncao": "121 - PLANEJAMENTO E ORÇAMENTO"
                          },
                          {
                            "cd_nm_funcao": "15 - URBANISMO",
                            "cd_nm_prog": "0056 - ENCARGOS ADMINISTRATIVOS DO ESTADO",
                            "vlrdotatualizada": 1535400,
                            "vlrtotalpago": 1116433.94,
                            "cd_nm_acao": "1789 - ENCARGOS COM INSS DO PESSOAL CONTRATADO E COMISSIONADO DA SECRETARIA DE DESENVOLVIMENTO URBANO E HABITAÇÃO",
                            "cd_nm_subacao": "0000 - OUTRAS MEDIDAS",
                            "vlrempenhado": 1235395,
                            "vlrliquidado": 941685.3,
                            "cd_nm_subfuncao": "122 - ADMINISTRAÇÃO GERAL"
                          },
                          {
                            "cd_nm_funcao": "15 - URBANISMO",
                            "cd_nm_prog": "0450 - APOIO GERENCIAL E TECNOLÓGICO PARA A PROMOÇÃO DA MOBILIDADE E DO URBANISMO",
                            "vlrdotatualizada": 10700,
                            "vlrtotalpago": 2351,
                            "cd_nm_acao": "4019 - CONSERVAÇÃO DO PATRIMÔNIO PÚBLICO NA SECRETARIA DE DESENVOLVIMENTO URBANO E HABITAÇÃO",
                            "cd_nm_subacao": "0000 - OUTRAS MEDIDAS",
                            "vlrempenhado": 2351,
                            "vlrliquidado": 2351,
                            "cd_nm_subfuncao": "122 - ADMINISTRAÇÃO GERAL"
                          },
                          {
                            "cd_nm_funcao": "15 - URBANISMO",
                            "cd_nm_prog": "0450 - APOIO GERENCIAL E TECNOLÓGICO PARA A PROMOÇÃO DA MOBILIDADE E DO URBANISMO",
                            "vlrdotatualizada": 64200,
                            "vlrtotalpago": 0,
                            "cd_nm_acao": "4019 - CONSERVAÇÃO DO PATRIMÔNIO PÚBLICO NA SECRETARIA DE DESENVOLVIMENTO URBANO E HABITAÇÃO",
                            "cd_nm_subacao": "2186 - PRESTAÇÃO DE SERVIÇOS DE LIMPEZA E CONSERVAÇÃO DA SEDUH",
                            "vlrempenhado": 0,
                            "vlrliquidado": 0,
                            "cd_nm_subfuncao": "122 - ADMINISTRAÇÃO GERAL"
                          },
                          {
                            "cd_nm_funcao": "15 - URBANISMO",
                            "cd_nm_prog": "0450 - APOIO GERENCIAL E TECNOLÓGICO PARA A PROMOÇÃO DA MOBILIDADE E DO URBANISMO",
                            "vlrdotatualizada": 104000,
                            "vlrtotalpago": 38600.44,
                            "cd_nm_acao": "4019 - CONSERVAÇÃO DO PATRIMÔNIO PÚBLICO NA SECRETARIA DE DESENVOLVIMENTO URBANO E HABITAÇÃO",
                            "cd_nm_subacao": "2187 - DESPESAS COM MANUTENÇÃO PREDIAL DA SEDUH",
                            "vlrempenhado": 39777.68,
                            "vlrliquidado": 38600.44,
                            "cd_nm_subfuncao": "122 - ADMINISTRAÇÃO GERAL"
                          },
                          {
                            "cd_nm_funcao": "15 - URBANISMO",
                            "cd_nm_prog": "0450 - APOIO GERENCIAL E TECNOLÓGICO PARA A PROMOÇÃO DA MOBILIDADE E DO URBANISMO",
                            "vlrdotatualizada": 8742200,
                            "vlrtotalpago": 5130354.09,
                            "cd_nm_acao": "4375 - GESTÃO DAS ATIVIDADES DA SECRETARIA DE DESENVOLVIMENTO URBANO E HABITAÇÃO",
                            "cd_nm_subacao": "0000 - OUTRAS MEDIDAS",
                            "vlrempenhado": 8513080.8,
                            "vlrliquidado": 5130354.09,
                            "cd_nm_subfuncao": "122 - ADMINISTRAÇÃO GERAL"
                          },
                          {
                            "cd_nm_funcao": "15 - URBANISMO",
                            "cd_nm_prog": "0450 - APOIO GERENCIAL E TECNOLÓGICO PARA A PROMOÇÃO DA MOBILIDADE E DO URBANISMO",
                            "vlrdotatualizada": 4026773.3,
                            "vlrtotalpago": 1920018.65,
                            "cd_nm_acao": "4375 - GESTÃO DAS ATIVIDADES DA SECRETARIA DE DESENVOLVIMENTO URBANO E HABITAÇÃO",
                            "cd_nm_subacao": "2014 - RESSARCIMENTO DE DESPESAS DE PESSOAL À DISPOSIÇÃO DA SECRETARIA DE DESENVOLVIMENTO URBANO E HABITAÇÃO",
                            "vlrempenhado": 2155726.83,
                            "vlrliquidado": 2150128.09,
                            "cd_nm_subfuncao": "122 - ADMINISTRAÇÃO GERAL"
                          },
                          {
                            "cd_nm_funcao": "15 - URBANISMO",
                            "cd_nm_prog": "0450 - APOIO GERENCIAL E TECNOLÓGICO PARA A PROMOÇÃO DA MOBILIDADE E DO URBANISMO",
                            "vlrdotatualizada": 18200,
                            "vlrtotalpago": 0,
                            "cd_nm_acao": "4375 - GESTÃO DAS ATIVIDADES DA SECRETARIA DE DESENVOLVIMENTO URBANO E HABITAÇÃO",
                            "cd_nm_subacao": "2188 - DESPESAS COM TAXA DE ÁGUA E ESGOTO DA SEDE DA SEDUH",
                            "vlrempenhado": 0,
                            "vlrliquidado": 0,
                            "cd_nm_subfuncao": "122 - ADMINISTRAÇÃO GERAL"
                          },
                          {
                            "cd_nm_funcao": "15 - URBANISMO",
                            "cd_nm_prog": "0450 - APOIO GERENCIAL E TECNOLÓGICO PARA A PROMOÇÃO DA MOBILIDADE E DO URBANISMO",
                            "vlrdotatualizada": 22500,
                            "vlrtotalpago": 16030.74,
                            "cd_nm_acao": "4375 - GESTÃO DAS ATIVIDADES DA SECRETARIA DE DESENVOLVIMENTO URBANO E HABITAÇÃO",
                            "cd_nm_subacao": "2189 - PAGAMENTO DE DIÁRIAS DA SECRETARIA DA SEDUH",
                            "vlrempenhado": 20333.65,
                            "vlrliquidado": 16494.7,
                            "cd_nm_subfuncao": "122 - ADMINISTRAÇÃO GERAL"
                          },
                          {
                            "cd_nm_funcao": "15 - URBANISMO",
                            "cd_nm_prog": "0450 - APOIO GERENCIAL E TECNOLÓGICO PARA A PROMOÇÃO DA MOBILIDADE E DO URBANISMO",
                            "vlrdotatualizada": 133200,
                            "vlrtotalpago": 47119.48,
                            "cd_nm_acao": "4375 - GESTÃO DAS ATIVIDADES DA SECRETARIA DE DESENVOLVIMENTO URBANO E HABITAÇÃO",
                            "cd_nm_subacao": "2190 - DESPESAS COM TARIFA DE ENERGIA ELÉTRICA DA SEDE DA SEDUH",
                            "vlrempenhado": 49073.34,
                            "vlrliquidado": 47119.48,
                            "cd_nm_subfuncao": "122 - ADMINISTRAÇÃO GERAL"
                          },
                          {
                            "cd_nm_funcao": "15 - URBANISMO",
                            "cd_nm_prog": "0450 - APOIO GERENCIAL E TECNOLÓGICO PARA A PROMOÇÃO DA MOBILIDADE E DO URBANISMO",
                            "vlrdotatualizada": 299500,
                            "vlrtotalpago": 195637.83,
                            "cd_nm_acao": "4375 - GESTÃO DAS ATIVIDADES DA SECRETARIA DE DESENVOLVIMENTO URBANO E HABITAÇÃO",
                            "cd_nm_subacao": "2191 - DESPESAS COM LOCAÇÃO DE VEÍCULOS DA SECRETARIA DA SEDUH",
                            "vlrempenhado": 250104.05,
                            "vlrliquidado": 204365.5,
                            "cd_nm_subfuncao": "122 - ADMINISTRAÇÃO GERAL"
                          },
                          {
                            "cd_nm_funcao": "15 - URBANISMO",
                            "cd_nm_prog": "0450 - APOIO GERENCIAL E TECNOLÓGICO PARA A PROMOÇÃO DA MOBILIDADE E DO URBANISMO",
                            "vlrdotatualizada": 493300,
                            "vlrtotalpago": 278801.89,
                            "cd_nm_acao": "4375 - GESTÃO DAS ATIVIDADES DA SECRETARIA DE DESENVOLVIMENTO URBANO E HABITAÇÃO",
                            "cd_nm_subacao": "2192 - APOIO ADMINISTRATIVO - PRESTAÇÃO DE SERVIÇOS TERCEIRIZADOS NA SEDUH",
                            "vlrempenhado": 444251.3,
                            "vlrliquidado": 281297.9,
                            "cd_nm_subfuncao": "122 - ADMINISTRAÇÃO GERAL"
                          },
                          {
                            "cd_nm_funcao": "15 - URBANISMO",
                            "cd_nm_prog": "0450 - APOIO GERENCIAL E TECNOLÓGICO PARA A PROMOÇÃO DA MOBILIDADE E DO URBANISMO",
                            "vlrdotatualizada": 51914.2,
                            "vlrtotalpago": 30286.35,
                            "cd_nm_acao": "4375 - GESTÃO DAS ATIVIDADES DA SECRETARIA DE DESENVOLVIMENTO URBANO E HABITAÇÃO",
                            "cd_nm_subacao": "2193 - APOIO ADMINISTRATIVO - PAGAMENTO DE ESTAGIÁRIOS DA SEDUH",
                            "vlrempenhado": 46950,
                            "vlrliquidado": 30286.35,
                            "cd_nm_subfuncao": "122 - ADMINISTRAÇÃO GERAL"
                          },
                          {
                            "cd_nm_funcao": "15 - URBANISMO",
                            "cd_nm_prog": "0450 - APOIO GERENCIAL E TECNOLÓGICO PARA A PROMOÇÃO DA MOBILIDADE E DO URBANISMO",
                            "vlrdotatualizada": 164666.66,
                            "vlrtotalpago": 120647.77,
                            "cd_nm_acao": "4375 - GESTÃO DAS ATIVIDADES DA SECRETARIA DE DESENVOLVIMENTO URBANO E HABITAÇÃO",
                            "cd_nm_subacao": "2194 - DESPESAS COM PUBLICAÇÕES OFICIAIS DA SEDUH EM DIÁRIO OFICIAL",
                            "vlrempenhado": 148638.76,
                            "vlrliquidado": 120647.77,
                            "cd_nm_subfuncao": "122 - ADMINISTRAÇÃO GERAL"
                          },
                          {
                            "cd_nm_funcao": "15 - URBANISMO",
                            "cd_nm_prog": "0450 - APOIO GERENCIAL E TECNOLÓGICO PARA A PROMOÇÃO DA MOBILIDADE E DO URBANISMO",
                            "vlrdotatualizada": 132000,
                            "vlrtotalpago": 107344.85,
                            "cd_nm_acao": "4375 - GESTÃO DAS ATIVIDADES DA SECRETARIA DE DESENVOLVIMENTO URBANO E HABITAÇÃO",
                            "cd_nm_subacao": "2195 - DESPESAS COM COMBUSTÍVEL DA SEDUH",
                            "vlrempenhado": 107395,
                            "vlrliquidado": 107344.85,
                            "cd_nm_subfuncao": "122 - ADMINISTRAÇÃO GERAL"
                          },
                          {
                            "cd_nm_funcao": "15 - URBANISMO",
                            "cd_nm_prog": "0450 - APOIO GERENCIAL E TECNOLÓGICO PARA A PROMOÇÃO DA MOBILIDADE E DO URBANISMO",
                            "vlrdotatualizada": 5000,
                            "vlrtotalpago": 0,
                            "cd_nm_acao": "4375 - GESTÃO DAS ATIVIDADES DA SECRETARIA DE DESENVOLVIMENTO URBANO E HABITAÇÃO",
                            "cd_nm_subacao": "2196 - DESPESAS COM MANUTENÇÃO DE VEÍCULOS DA SEDUH",
                            "vlrempenhado": 0,
                            "vlrliquidado": 0,
                            "cd_nm_subfuncao": "122 - ADMINISTRAÇÃO GERAL"
                          },
                          {
                            "cd_nm_funcao": "15 - URBANISMO",
                            "cd_nm_prog": "0450 - APOIO GERENCIAL E TECNOLÓGICO PARA A PROMOÇÃO DA MOBILIDADE E DO URBANISMO",
                            "vlrdotatualizada": 358250,
                            "vlrtotalpago": 269431.83,
                            "cd_nm_acao": "4375 - GESTÃO DAS ATIVIDADES DA SECRETARIA DE DESENVOLVIMENTO URBANO E HABITAÇÃO",
                            "cd_nm_subacao": "2197 - DESPESAS COM MOTORISTAS DA SEDUH",
                            "vlrempenhado": 267624.69,
                            "vlrliquidado": 239892.2,
                            "cd_nm_subfuncao": "122 - ADMINISTRAÇÃO GERAL"
                          },
                          {
                            "cd_nm_funcao": "15 - URBANISMO",
                            "cd_nm_prog": "0450 - APOIO GERENCIAL E TECNOLÓGICO PARA A PROMOÇÃO DA MOBILIDADE E DO URBANISMO",
                            "vlrdotatualizada": 160475,
                            "vlrtotalpago": 47233.89,
                            "cd_nm_acao": "4375 - GESTÃO DAS ATIVIDADES DA SECRETARIA DE DESENVOLVIMENTO URBANO E HABITAÇÃO",
                            "cd_nm_subacao": "2198 - FORNECIMENTO DE PASSAGENS DA SEDUH",
                            "vlrempenhado": 66104.17,
                            "vlrliquidado": 55403.12,
                            "cd_nm_subfuncao": "122 - ADMINISTRAÇÃO GERAL"
                          },
                          {
                            "cd_nm_funcao": "15 - URBANISMO",
                            "cd_nm_prog": "0450 - APOIO GERENCIAL E TECNOLÓGICO PARA A PROMOÇÃO DA MOBILIDADE E DO URBANISMO",
                            "vlrdotatualizada": 904470.84,
                            "vlrtotalpago": 718010.56,
                            "cd_nm_acao": "4375 - GESTÃO DAS ATIVIDADES DA SECRETARIA DE DESENVOLVIMENTO URBANO E HABITAÇÃO",
                            "cd_nm_subacao": "2199 - DESPESA COM VIGILÂNCIA OSTENSIVA DA SEDUH",
                            "vlrempenhado": 718322.59,
                            "vlrliquidado": 718010.56,
                            "cd_nm_subfuncao": "122 - ADMINISTRAÇÃO GERAL"
                          },
                          {
                            "cd_nm_funcao": "15 - URBANISMO",
                            "cd_nm_prog": "0450 - APOIO GERENCIAL E TECNOLÓGICO PARA A PROMOÇÃO DA MOBILIDADE E DO URBANISMO",
                            "vlrdotatualizada": 50837800,
                            "vlrtotalpago": 34514459.96,
                            "cd_nm_acao": "4691 - GESTÃO DAS ATIVIDADES DO CONSÓRCIO DE TRANSPORTES DA REGIÃO METROPOLITANA DO RECIFE - CTM",
                            "cd_nm_subacao": "0000 - OUTRAS MEDIDAS",
                            "vlrempenhado": 48944277.92,
                            "vlrliquidado": 33842215.42,
                            "cd_nm_subfuncao": "122 - ADMINISTRAÇÃO GERAL"
                          },
                          {
                            "cd_nm_funcao": "15 - URBANISMO",
                            "cd_nm_prog": "0450 - APOIO GERENCIAL E TECNOLÓGICO PARA A PROMOÇÃO DA MOBILIDADE E DO URBANISMO",
                            "vlrdotatualizada": 305900,
                            "vlrtotalpago": 256042.09,
                            "cd_nm_acao": "4691 - GESTÃO DAS ATIVIDADES DO CONSÓRCIO DE TRANSPORTES DA REGIÃO METROPOLITANA DO RECIFE - CTM",
                            "cd_nm_subacao": "1056 - DESPESAS COM LOCAÇÃO DE VEÍCULOS DO CTM - SEDE",
                            "vlrempenhado": 305900,
                            "vlrliquidado": 276615.21,
                            "cd_nm_subfuncao": "122 - ADMINISTRAÇÃO GERAL"
                          }
                        ]
                    }
                  />
                </LazyLoad>
                <br />
              </div>
            </div>
            <Footer />
          </>
        )
      }
    </>
  )
}

export default Observatory;