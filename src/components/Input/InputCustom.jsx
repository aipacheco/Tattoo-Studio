/* eslint-disable react/prop-types */
import "./InputCustom.css"

const InputCustom = ({ label, type, name, handleChange }) => {
  return (
    <>
      <label className="form-label">{label}</label>
      <input
        type={type}
        name={name}
        className="form-control"
        onChange={handleChange}
        required
      ></input>
      {/* <div className="form-text">
      {error}
      </div> */}
    </>
  )
}

export default InputCustom
