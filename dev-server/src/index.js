'use strict';

//import react and reactDom for browser rendering
import React from 'react';
import ReactDom from 'react-dom';


//import the react-json-view component (installed with npm)
import JsonViewer from './../../src/js/index';

//render 2 different examples of the react-json-view component
ReactDom.render(
  <div>
    {/* just pass in your JSON to the src attribute */ }
    <JsonViewer
      sortKeys
      style={ { padding: '30px', backgroundColor: 'white' } }
      name={ null }
      src={ getExampleJson1() }
      quotesOnKeys={ false }
      theme={ {
        base00: '#fff',
        base01: '#f9f9f9',
        base02: '#f9f9f9',
        base03: '#282828',
        base04: '#04646C',
        base05: '#282828',
        base06: '#282828',
        base07: '#282828',
        base08: '#282828',
        base09: '#03BCCC',
        base0A: '#03BCCC',
        base0B: '#03BCCC',
        base0C: '#03BCCC',
        base0D: '#03BCCC',
        base0E: '#03BCCC',
        base0F: '#03BCCC'
      } }
      collapseStringsAfterLength={ 12 }
      onEdit={ e => {
        console.log('edit callback', e);
        if (e.new_value == 'error') {
          return false;
        }
      } }
      onDelete={ e => {
        console.log('delete callback', e);
      } }
      onAdd={ e => {
        console.log('add callback', e);
        if (e.new_value == 'error') {
          return false;
        }
      } }
      onCustomEvent={ (variable) => {
        console.log(variable)
      } }
      onSelect={ e => {
        console.log('select callback', e);
        console.log(e.namespace);
      } }
      displayObjectSize={ true }
      enableClipboard={ copy => {
        console.log('you copied to clipboard!', copy);
      } }
      shouldCollapse={ ({ src, namespace, type }) => {
        if (type === 'array' && src.indexOf('test') > -1) {
          return true;
        } else if (namespace.indexOf('moment') > -1) {
          return true;
        }
        return false;
      } }
      defaultValue=""

    />

    <br />

    {/* use a base16 theme */ }
    {/* <JsonViewer
      src={ getExampleJson1() }
      theme="railscasts"
      validationMessage="You're doing something wrong."
      collapseStringsAfterLength={ 15 }
      onEdit={ e => {
        console.log(e);
        if (e.new_value === 'error') {
          return false;
        }
      } }
      onDelete={ e => {
        console.log(e);
      } }
      onAdd={ e => {
        console.log(e);
        if (e.new_value === 'error') {
          return false;
        }
      } }
      name={ false }
      iconStyle="triangle"
      shouldCollapse={ ({ src, type }) =>
        type === 'object' &&
        src.constructor &&
        src.constructor.name === 'Moment'
      }
      selectOnFocus
    />

    <br /> */}

    {/* initialize this one with a name and default collapsed */ }
    {/* <JsonViewer
      src={ getExampleJson2() }
      collapsed={ true }
      name={ 'feature_set' }
      displayDataTypes={ false }
      indentWidth={ 2 }
    />

    <br /> */}

    {/* initialize this one with a name and default collapsed */ }
    {/* <JsonViewer
      src={ getExampleJson2() }
      collapsed={ 1 }
      name={ 'feature_set' }
      displayDataTypes={ false }
      indentWidth={ 5 }
    />

    <br /> */}

    {/* initialize an example with a long string */ }
    {/* <JsonViewer
      src={ getExampleJson3() }
      collapsed={ true }
      name={ 'collapsed_by_default_example' }
      indentWidth={ 8 }
      displayObjectSize={ false }
      displayDataTypes={ false }
      enableClipboard={ false }
    />

    <br /> */}

    {/*demo array support*/ }
    {/* <JsonViewer
      src={ getExampleArray() }
      theme="solarized"
      onEdit={ edit => {
        console.log(edit);
      } }
    />

    <br /> */}

    {/* custom theme example */ }
    {/* <JsonViewer
      enableClipboard={ false }
      src={ getExampleJson1() }
      shouldCollapse={ ({ src, namespace, type }) =>
        namespace.indexOf('moment') > -1
      }
      theme={ {
        base00: 'white',
        base01: '#ddd',
        base02: '#ddd',
        base03: '#444',
        base04: 'purple',
        base05: '#444',
        base06: '#444',
        base07: '#444',
        base08: '#444',
        base09: 'rgba(70, 70, 230, 1)',
        base0A: 'rgba(70, 70, 230, 1)',
        base0B: 'rgba(70, 70, 230, 1)',
        base0C: 'rgba(70, 70, 230, 1)',
        base0D: 'rgba(70, 70, 230, 1)',
        base0E: 'rgba(70, 70, 230, 1)',
        base0F: 'rgba(70, 70, 230, 1)'
      } }
    />

    <JsonViewer
      theme="hopscotch"
      collapsed={ false }
      name="large_array"
      groupArraysAfterLength={ 50 }
      src={ getExampleJson4() }
    /> */}

    {/* Name as colored react component */ }
    {/* <JsonViewer
      collapsed
      name={ <span style={ { color: "red", fontWeight: 800 } }>React Element as name</span> }
      src={ getExampleJson2() }
      onCustomEvent={ (e) => {
        console.log(e)
      } }
    /> */}

  </div>,
  document.getElementById('app-container')
);

/*-------------------------------------------------------------------------*/
/*     the following functions just contain test json data for display     */
/*-------------------------------------------------------------------------*/

//just a function to get an example JSON object
function getExampleJson1() {
  return {
    "2Safe": {
      "nome": "LUCAS DOS SANTOS ABREU",
      "cpfCnpj": "08596422919",
      "acordoAtivo": false,
      "clienteEmAtraso": true,
      "mediaDiasAtraso": 488,
      "mediaGeralAtraso": 400.15,
      "maiorAtrasoAberto": 884,
      "valorComprometido": 345426.93,
      "percentualQtdAtivo": 8.73,
      "valorMaiorContrato": 161371.06,
      "quantidadeContratos": 69,
      "maiorValorPago1a90Dias": 3280.38,
      "maiorValorPago91a365Dias": 250.1,
      "maiorValorPagoAteZeroDias": 161371.06,
      "quantidadeContratosAtivos": 48,
      "valorMedioContratoQuitado": 25037.84,
      "maiorValorPagoAcima365Dias": 8000,
      "quantidadeContratosQuitados": 11,
      "quantidadeContratosAtrasados": 13,
      "quantidadeContratosFinalizadosAtrasados": 1
    },
    "pedido": {
      "seguros": [
        {
          "descricao": "001317/BR/PRETO - BALCAO IG3G4-120 TL D PREMIUM",
          "quantidade": 1,
          "tipo_seguro": "Garantia Estentida",
          "valor_total": 30368,
          "tipo_categoria": "garantia",
          "valor_unitario": 30368
        },
        {
          "descricao": "MS CREDITO",
          "quantidade": 1,
          "tipo_seguro": "Prestamista",
          "valor_total": 2400,
          "tipo_categoria": "prestamista",
          "valor_unitario": 2400
        }
      ],
      "produtos": [
        {
          "descricao": "001317/BR/PRETO - BALCAO IG3G4-120 TL D PREMIUM",
          "quantidade": 1,
          "valor_total": 125561,
          "tipo_entrega": "VOLTAR_PARA_RETIRAR",
          "produto_risco": false,
          "tipo_categoria": "Móveis",
          "valor_unitario": 95193
        },
        {
          "descricao": "001317/BR/PRETO - BALCAO IG3G4-120 TL D PREMIUM",
          "quantidade": 1,
          "valor_total": 125561,
          "tipo_entrega": "VOLTAR_PARA_RETIRAR",
          "produto_risco": false,
          "tipo_categoria": "Móveis",
          "valor_unitario": 95193
        },
        {
          "descricao": "001317/BR/PRETO - BALCAO IG3G4-120 TL D PREMIUM",
          "quantidade": 1,
          "valor_total": 125561,
          "tipo_entrega": "VOLTAR_PARA_RETIRAR",
          "produto_risco": false,
          "tipo_categoria": "Móveis",
          "valor_unitario": 95193
        },
        {
          "descricao": "001317/BR/PRETO - BALCAO IG3G4-120 TL D PREMIUM",
          "quantidade": 1,
          "valor_total": 125561,
          "tipo_entrega": "VOLTAR_PARA_RETIRAR",
          "produto_risco": false,
          "tipo_categoria": "Móveis",
          "valor_unitario": 95193
        },
        {
          "descricao": "001317/BR/PRETO - BALCAO IG3G4-120 TL D PREMIUM",
          "quantidade": 1,
          "valor_total": 125561,
          "tipo_entrega": "VOLTAR_PARA_RETIRAR",
          "produto_risco": false,
          "tipo_categoria": "Móveis",
          "valor_unitario": 95193
        }
      ],
      "valor_total": 160729,
      "pagamento_CDC": {
        "qtde_parcelas": 8,
        "valor_parcela": 2781,
        "tipo_pagamento": "CDC",
        "valor_pagamento": 22249,
        "carencia_em_dias": 45,
        "perfil_pretendido": "D",
        "taxa_financiamento": 10000,
        "data_primeira_parcela": "07/07/2023"
      },
      "metodos_pagamento": [
        {
          "tipo_pagamento": "MS CREDITO",
          "valor_pagamento": 22249
        },
        {
          "tipo_pagamento": "PIX",
          "valor_pagamento": 100000
        }
      ]
    },
    "cliente": {
      "rg": {
        "uf": "ES",
        "numero": "564564654",
        "data_expedicao": "07/02/1994",
        "orgao_expedidor": {
          "nome": "CARTORI - CARTORIO ESPECIAL TITULO DOCTO",
          "sigla": "CARTO"
        }
      },
      "cpf": "08596422919",
      "nome": "LUCAS DOS SANTOS ABREU",
      "sexo": 1,
      "email": "lucas.abreu@coderockr.com",
      "endereco": {
        "uf": "ES",
        "cep": "29980000",
        "bairro": "CENTRO",
        "numero": "245",
        "municipio": "PINHEIROS",
        "logradouro": "CARLOS CASTRO",
        "referencia": "",
        "caixa_postal": "",
        "tipo_logradouro": "residencial"
      },
      "nome_mae": "VANDENICE",
      "nome_pai": "ALVARO",
      "ocupacao": {
        "cargo": "PROGRAMADOR",
        "empresa": "",
        "endereco": {
          "uf": "SC",
          "cep": "89230800",
          "bairro": "CENTRO",
          "numero": "456",
          "telefone": 996451033,
          "municipio": "JOINVILLE",
          "logradouro": "RUA BLUMENAU",
          "complemento": "",
          "ddd_telefone": 47
        },
        "aposentado": false,
        "pensionista": false,
        "data_admissao": "01/01/2019",
        "num_matricula": "",
        "tipo_atividade": "EMPREGADOR",
        "tipo_organizacao": ""
      },
      "telefone": "47-996451033",
      "financeiro": {
        "outras_rendas": 1000,
        "renda_principal": 123400
      },
      "cpf_conjuge": "06417422909",
      "estado_civil": 2,
      "naturalidade": "JOINVILLE",
      "nome_conjuge": "LUANA HELLMANN",
      "nacionalidade": "BRASILEIRO",
      "data_nascimento": "02/07/1994",
      "referencias_pessoais": [
        {
          "nome": "ESPOSA",
          "telefone": "47-996451033",
          "quantidade_telefones_repetidos": 5
        },
        {
          "nome": "PAI",
          "telefone": "47-996451034",
          "quantidade_telefones_repetidos": 0
        }
      ],
      "quantidade_telefones_repetidos": 5
    },
    "spcScore": {
      "ccf": {
        "resumo": {
          "quantidade-total": 0
        }
      },
      "spc": {
        "resumo": {
          "quantidade-total": 4
        }
      },
      "data": "2023-05-12T09:40:01.686-03:00",
      "operador": {
        "nome": "LOJAS SIMONETTI - WS TESTE",
        "codigo": "4945931"
      },
      "grafia-pj": [],
      "protocolo": {
        "digito": 9,
        "numero": 2139888121
      },
      "restricao": false,
      "consumidor": {
        "consumidor-pessoa-fisica": [
          {
            "cpf": {
              "numero": "08596422919",
              "regiao-origem": "PARANA E SANTA CATARINA"
            },
            "nome": "CLINTON FRANCIS BARTON",
            "sexo": "MASCULINO",
            "situacao-cpf": []
          }
        ]
      },
      "processado": {
        "score3Meses": 250,
        "quantidadeTotal": 125
      },
      "cheque-lojista": {
        "resumo": {
          "quantidade-total": 0
        }
      },
      "alerta-documento": {
        "resumo": {
          "quantidade-total": 0
        }
      },
      "credito-concedido": {
        "resumo": {
          "quantidade-total": 0
        }
      },
      "spc-score-3-meses": {
        "detalhe-spc-score-3-meses": {
          "score": 398,
          "classe": "E",
          "horizonte": 3,
          "probabilidade": 11.03709473769776,
          "tipo-cliente-score": "NAO_RESTRITO",
          "mesagem-interpretativa-score": "Não há registros de débito para o CPF: 085.964.229-19. A cada 1000 compradores classificados na classe de risco \"E\", 110 poderá(ão) apresentar registros de inadimplência nos próximos 3 meses. Esta informação não é restritiva, mas de apoio à concessão de crédito."
        }
      },
      "consulta-realizada": {
        "resumo": {
          "quantidade-total": 1,
          "data-ultima-ocorrencia": "2023-05-12T00:00:00-03:00"
        },
        "detalhe-consulta-realizada": [
          {
            "data-consulta": "2023-05-12T09:39:56-03:00",
            "nome-associado": "CONFEDERACAO NACIONAL DE DIRIGENTES LOJISTAS",
            "origem-associado": {
              "nome": "BRASILIA",
              "estado": {
                "sigla-uf": "DF"
              }
            },
            "nome-entidade-origem": "CDL - FORTALEZA / CE"
          },
          {
            "data-consulta": "2023-04-27T09:50:56-03:00",
            "nome-associado": "CONFEDERACAO NACIONAL DE DIRIGENTES LOJISTAS",
            "origem-associado": {
              "nome": "BRASILIA",
              "estado": {
                "sigla-uf": "DF"
              }
            },
            "nome-entidade-origem": "CDL - FORTALEZA / CE"
          }
        ],
        "quantidade-dias-consultados": 90
      },
      "telefone-consultado": {
        "resumo": {
          "quantidade-total": 0
        }
      },
      "endereco-cep-consultado": [],
      "ultimo-endereco-informado": [],
      "ultimo-telefone-informado": {
        "detalhe-ultimo-telefone-informado": {
          "telefone": {
            "numero": 996451033,
            "numero-ddd": 47
          },
          "quantidade-consulta": 1,
          "data-ultima-consulta": "2022-11-23T00:00:00-02:00",
          "data-primeira-consulta": "2022-11-23T00:00:00-02:00"
        }
      },
      "informacao-poder-judiciario": {
        "resumo": {
          "quantidade-total": 0
        }
      }
    },
    "processo_id": "id do ytalo",
    "spcRegistros": {
      "ccf": {
        "resumo": {
          "quantidade-total": 0
        }
      },
      "spc": {
        "resumo": {
          "quantidade-total": 15
        }
      },
      "data": "2023-05-12T09:39:56.144-03:00",
      "operador": {
        "nome": "LOJAS SIMONETTI - WS TESTE",
        "codigo": "4945931"
      },
      "grafia-pj": [],
      "protocolo": {
        "digito": 11,
        "numero": 2139888120
      },
      "restricao": false,
      "consumidor": {
        "consumidor-pessoa-fisica": {
          "cpf": {
            "numero": "08596422919",
            "regiao-origem": "PARANA E SANTA CATARINA"
          },
          "nome": "CLINTON FRANCIS BARTON",
          "sexo": "MASCULINO",
          "situacao-cpf": []
        }
      },
      "contumacia": {
        "resumo": {
          "quantidade-total": 0
        }
      },
      "processado": {
        "quantidadeTotal": 200.12
      },
      "contra-ordem": {
        "resumo": {
          "quantidade-total": 0
        }
      },
      "cheque-lojista": {
        "resumo": {
          "quantidade-total": 0
        }
      },
      "alerta-documento": {
        "resumo": {
          "quantidade-total": 0
        }
      },
      "credito-concedido": {
        "resumo": {
          "quantidade-total": 0
        }
      },
      "consulta-realizada": {
        "resumo": {
          "quantidade-total": 1,
          "data-ultima-ocorrencia": "2023-04-27T00:00:00-03:00"
        },
        "detalhe-consulta-realizada": {
          "data-consulta": "2023-04-27T09:50:56-03:00",
          "nome-associado": "CONFEDERACAO NACIONAL DE DIRIGENTES LOJISTAS",
          "origem-associado": {
            "nome": "BRASILIA",
            "estado": {
              "sigla-uf": "DF"
            }
          },
          "nome-entidade-origem": "CDL - FORTALEZA / CE"
        },
        "quantidade-dias-consultados": 90
      },
      "telefone-consultado": {
        "resumo": {
          "quantidade-total": 0
        }
      },
      "dados-agencia-bancaria": [],
      "endereco-cep-consultado": [],
      "ultimo-endereco-informado": [],
      "ultimo-telefone-informado": {
        "detalhe-ultimo-telefone-informado": {
          "telefone": {
            "numero": 996451033,
            "numero-ddd": 47
          },
          "quantidade-consulta": 1,
          "data-ultima-consulta": "2022-11-23T00:00:00-02:00",
          "data-primeira-consulta": "2022-11-23T00:00:00-02:00"
        }
      },
      "cheque-consulta-online-srs": {
        "resumo": {
          "quantidade-total": 0
        }
      },
      "informacao-poder-judiciario": {
        "resumo": {
          "quantidade-total": 0
        }
      },
      "contra-ordem-documento-diferente": {
        "resumo": {
          "quantidade-total": 0
        }
      }
    },
    "analise_interna": {
      "fraude": false,
      "limite": 100,
      "listaNegativa": false,
      "cartaoDasmoney": {
        "ativo": false,
        "preAprovado": false
      }
    },
    "estrutura_comercial": {
      "uf_loja": "ES",
      "cnpj_loja": "31743818000128",
      "bairro_loja": "CENTRO",
      "cidade_loja": "SAO MATEUS",
      "numero_loja": 20,
      "nome_atendente": "Josiane Vilela Costa",
      "codigo_atendente": "35b2920a-9725-4aab-8a1f-007d7fd750d2"
    },
    "nivel_risco_interno": {
      "nivel_risco_loja": 3,
      "nivel_risco_soma": 45,
      "nivel_risco_idade": 2,
      "nivel_risco_total": 5,
      "maior_risco_seguro": 2,
      "maior_risco_entrega": 4,
      "maior_risco_produto": 3,
      "nivel_risco_vendedor": 3,
      "nivel_tempo_admissao": 5,
      "nivel_risco_historico": 5,
      "nivel_risco_spc_score": 5,
      "nivel_risco_registro_spc": 3,
      "nivel_risco_valor_financiado": 1,
      "nivel_risco_seguro_prestamista": 1
    }
  };
}

//and another a function to get an example JSON object
function getExampleJson2() {
  return {
    normalized: {
      '1-grams': {
        body: 1,
        testing: 1
      },
      '2-grams': {
        'testing body': 1
      },
      '3-grams': {}
    },
    noun_phrases: {
      body: 1
    },
    lemmatized: {
      '1-grams': {
        test: 1,
        body: 1
      },
      '2-grams': {
        'test body': 1
      },
      '3-grams': {}
    },
    dependency: {
      '1-grams': {
        testingVERBROOTtestingVERB: 1,
        bodyNOUNdobjtestingVERB: 1
      },
      '2-grams': {
        'testingVERBROOTtestingVERB bodyNOUNdobjtestingVERB': 1
      },
      '3-grams': {}
    }
  };
}

function getExampleJson3() {
  return {
    example_information:
      'this example has the collapsed prop set to true and the indentWidth prop is set to 8',
    default_collapsed: true,
    collapsed_array: [
      'you expanded me',
      'try collapsing and expanding the root node',
      'i will still be expanded',
      {
        leaf_node: true
      }
    ]
  };
}

function getExampleJson4() {
  const large_array = new Array(225).fill(
    'this is a large array full of items'
  );

  large_array.push(getExampleArray());

  large_array.push(new Array(75).fill(Math.random()));

  return large_array;
}

function getExampleArray() {
  return [
    'you can also display arrays!',
    new Date(),
    1,
    2,
    3,
    {
      pretty_cool: true
    }
  ];
}
