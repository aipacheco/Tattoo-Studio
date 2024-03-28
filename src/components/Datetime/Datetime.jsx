/* eslint-disable react/prop-types */
import { useState } from "react"
import DatePicker from "react-datepicker"
import "./Datetime.css"
import "react-datepicker/dist/react-datepicker.css"
import { registerLocale } from "react-datepicker"
import es from "date-fns/locale/es"

registerLocale("es", es)
const Datetime = ({ onDateTimeChange }) => {
  const [selectedDateTime, setSelectedDateTime] = useState(null)

  const handleDateTimeChange = (dateTime) => {
    console.log(dateTime)
    setSelectedDateTime(dateTime)
    onDateTimeChange(dateTime)
  }

  const today = new Date()
  const minTime = new Date(today.setHours(10, 0, 0))
  const maxTime = new Date(today.setHours(20, 0, 0))

  return (
    <div className="d-flex justify-content-center ">
      <DatePicker
        selected={selectedDateTime}
        onChange={handleDateTimeChange}
        dateFormat="yyyy-MM-dd HH:mm"
        showTimeSelect
        timeIntervals={30}
        timeCaption="Hora"
        placeholderText="Selecciona fecha y hora"
        locale="es"
        minDate={new Date()}
        minTime={minTime}
        maxTime={maxTime}
        inline
      />
    </div>
  )
}

export default Datetime
