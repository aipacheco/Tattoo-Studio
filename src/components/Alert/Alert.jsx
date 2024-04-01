/* eslint-disable react/prop-types */
import "./Alert.css"

const Alert = ({className, message}) => {
  return (
    <div className={`alert alert-${className}`} role="alert">
      {message}
    </div>
  );
};

export default Alert;

