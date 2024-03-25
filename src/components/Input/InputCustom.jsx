import "./InputCustom.css"
// eslint-disable-next-line react/prop-types
const InputCustom = ({label, type, name, handleChange}) => {
  return (
    <>
      <label className="form-label">{label}</label>
      <input type={type} name={name} className="form-control"  onChange={handleChange} required></input>
    </>
  )
}

export default InputCustom
