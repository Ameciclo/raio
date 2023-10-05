import React from 'react';

const ActionsCarousel = ({ actions, goodAction = false }) => {
  const numParse = (numero) => numero.toLocaleString('pt-BR', { minimumFractionDigits: 2 });

  function catchActionCode(texto) {
    const regex = /^(\d+) - /;
    const match = texto.match(regex);
    if (match) return match[1];
    return '(sem código)';
  }

  function catchActionTitle(texto) {
    const regex = /^(\d+) - (.+)$/;
    const match = texto.match(regex);
    if (match) return match[2];
    return '(sem titulo)';
  }

  function catchSubactionTitle(texto) {
    const regex = / - (.+)/;
    const match = texto.match(regex);
    if (match && match[1]) return match[1];
    return '(sem titulo)';
  }

  return (
    <div className="carousel-container fade-in">
      <h1>{goodAction ? 'Ações que AVANÇAM na proteção do clima:' : 'Ações que REGRIDEM na luta contra a crise climática:'}</h1>
      <div
        className="carousel-track"
        style={{
          width: `${actions.length * 200}px`,
          animation: `${goodAction ? 'good-scroll' : 'bad-scroll'} ${actions.length * 7}s linear infinite`,
        }}
      >
        {actions.map((action, index) => (
          <div className={goodAction ? 'good-action action-card' : 'bad-action action-card'} key={index}>
            <h3>Ação {catchActionCode(action.cd_nm_acao)}</h3>
            <span>VALOR TOTAL ATUALIZADO</span>
            <h2>R$ {numParse(action.vlrdotatualizada)}</h2>
            <span>FUNÇÃO E SUBFUNÇÃO</span>
            <p>{catchActionTitle(action.cd_nm_funcao)}</p>
            <p>{catchActionTitle(action.cd_nm_subfuncao)}</p>
            <span>NOME DA AÇÃO</span>
            <p>{catchActionTitle(action.cd_nm_acao)}</p>
            <span>SUBAÇÃO</span>
            <p>{catchSubactionTitle(action.cd_nm_subacao)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActionsCarousel;
