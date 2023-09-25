function CardPartner(props) {
  const partner = props.partner
  return (
    <div className='card-container' key={partner.id}>
      <a className='partner-card' href={partner.url}>
        <img src={partner.logo.formats.thumbnail.url} alt={partner.logo.name}></img>
      </a>
    </div>
  );
}

export default CardPartner;
