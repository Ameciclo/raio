function CardPartner(props) {
  const partner = props.partner
  return (
    <div className='partner-card' key={partner.id}>
      <a href={partner.url}>
        <img src={partner.logo.url} alt={partner.logo.name}></img>
      </a>
      <p>{partner.name}</p>
    </div>
  );
}

export default CardPartner;
