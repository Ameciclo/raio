function AskReply(props) {
  return (
    <div className='ask-card'>
      <h1>{props.data.ask}</h1>
      <p>{props.data.reply}</p>
    </div>
  )
}

export default AskReply;