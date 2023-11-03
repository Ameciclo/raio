function AskReply(props) {

  const highlightKeyword = (text, keyword) => {
    const parts = text.split(' ');
    return parts.map((part, index) => {
      const partLowerCase = part.toLowerCase();
      const isKeyword = partLowerCase.includes(keyword) && keyword
      return isKeyword ? <mark key={index}> {part}</mark> : ' ' + part + ' '
    });
  };

  return (
    <div className='ask-card'>
      <h1>{highlightKeyword(props.data.title, props.keyword)}</h1>
      <p>{highlightKeyword(props.data.answer, props.keyword)}</p>
    </div>
  )
}

export default AskReply;