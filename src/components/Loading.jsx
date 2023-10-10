import loading_img from '../images/loading.gif'

function Loading() {
  return (
    <div className="loading-area">
      <h1 className="observatory-titles">Aguarde enquanto os dados são carregados...</h1>
      <img id='loading-gif' src={loading_img} alt="gif loading" />
    </div>
  )
}

export default Loading