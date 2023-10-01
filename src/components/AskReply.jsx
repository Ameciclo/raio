function AskReply(props) {
  return (
    <div className='ask-card'>
      <h1>{props.data.title}</h1>
      <p>{props.data.answer}</p>
    </div>
  )
}

export default AskReply;