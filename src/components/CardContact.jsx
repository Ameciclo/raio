function CardContact(props) {
  return (
    <a
      rel="noreferrer"
      className='contact-button'
      href={props.link}
      target="_blank"
    >
      <img
        type="button"
        src={props.icon}
        alt={`Icone do ${props.title}`}
        className='contact-icon'
      />
      <h3 className="contact-title">{props.title}</h3>
    </a>
  );
}

export default CardContact;
