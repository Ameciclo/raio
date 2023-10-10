import React from 'react';

function ProposalsCard(props) {
  const proposal = props.data
  return (
    <a href={`/propostas/${proposal.id}`} >
      <div className="card-proposals">
        <div className="proposals-card">
          <h2>{proposal.title}</h2>
        </div>
      </div>
    </a>
  );
}

export default ProposalsCard;
