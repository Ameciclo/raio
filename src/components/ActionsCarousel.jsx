import React from 'react';

const ActionsCarousel = (props) => {
  const goodActions = [
    '0673',
    '3426',
    '1111',
  ]

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
    return '(sem código)';
  }

  return (
    <div className="carousel-container fade-in">
      <div
        className="carousel-track"
        style={{
          width: `${props.actions.length * 200}px`,
          animation: `scroll ${props.actions.length * 7}s linear infinite`,
        }}
      >
        {props.actions.map((action, index) => (
          <div className={goodActions.some((actionNumber) => action.cd_nm_acao.includes(actionNumber)) ? 'good-action action-card' : 'bad-action action-card'} key={index}>
            <h3>Ação {catchActionCode(action.cd_nm_acao)}</h3>
            <p>{catchActionTitle(action.cd_nm_acao)}</p>
            <h2>R$ {numParse(action.vlrdotatualizada)}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActionsCarousel;
