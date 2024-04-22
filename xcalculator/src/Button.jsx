import "./Button.css"

const Button = ({ name, handler }) => {
  return <button type="button" name={name} onClick={handler} className="customButton">{name}</button>;
};

export default Button;
