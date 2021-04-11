import spinnerGif from "../assets/spinner.gif"

const Spinner = () => {
  return (
    <div className="spinner-container">
      <img src={spinnerGif} id="spinner"/>
    </div>
  )
}

export default Spinner;