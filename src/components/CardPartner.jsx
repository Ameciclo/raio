function CardPartner(props) {
  const partner = props.partner
  return (
    <a className='partner-card' key={partner.id} href={partner.url}>
      <img src={partner.logo.url} alt={partner.logo.name}></img>
      <p>{partner.name}</p>
    </a>
  );
}

export default CardPartner;
