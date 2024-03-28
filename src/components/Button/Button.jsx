/* eslint-disable react/prop-types */
const Button = ({text, handleSubmit, isFormComplete}) => {
  return (
<div className="d-flex justify-content-center m-3">
<button type="button" className="btn btn-outline-light" onClick={handleSubmit} disabled={!isFormComplete}>
      {text}
    </button>
</div>
  )
}

export default Button
