/* eslint-disable react/prop-types */
import "./InputCustom.css"

const InputCustom = ({ label, type, name, handleChange, handleBlur }) => {
  return (
    <>
      <label className="form-label">{label}</label>
      <input
        type={type}
        name={name}
        className="form-control"
        onChange={handleChange}
        onBlur={handleBlur}
      ></input>
    </>
  )
}

export default InputCustom
