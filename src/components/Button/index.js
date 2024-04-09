import "./Button.css";

const Button = ({ handleLogic, children }) => {
    return <button onClick={handleLogic}>{children}</button>;
    // test
};

export default Button;
