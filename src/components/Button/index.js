import "./Button.css";

const Button = ({ handleLogic, children }) => {
    return <button onClick={handleLogic}>{children}</button>;
};

export default Button;
