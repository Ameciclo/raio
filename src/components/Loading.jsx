import loading_img from '../images/loading.gif'

function Loading() {
  return (
    <div className="loading-area">
      <img id='loading-gif' src={loading_img} alt="gif loading" />
    </div>
  )
}

export default Loading