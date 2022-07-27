import PropTypes from "prop-types";
import "src/components/Header/header.scss";

function Header({ amount, setBaseAmount }) {
  function handleChange(event) {
    // const newInputValue = event.target.value;
    // setBaseAmount(newInputValue);
    //* version sucrée :
    setBaseAmount(event.target.value);
  }
  return (
    <header className="header">
      <h1 className="header_title">Converter</h1>
      <p className="subtitle header_subtitle">
        <input
          type="number"
          className="header_input"
          value={amount}
          onChange={handleChange}
        />
        euro
      </p>
    </header>
  );
}

Header.propTypes = {
  amount: PropTypes.number.isRequired,
  setBaseAmount: PropTypes.func.isRequired,
};

export default Header;
