/* eslint-disable react/prop-types */
const Button = ({text, handleSubmit}) => {
  return (
<div className="d-flex justify-content-center m-1">
<button type="button" className="btn btn-outline-dark" onClick={handleSubmit}>
      {text}
    </button>
</div>
  )
}

export default Button
