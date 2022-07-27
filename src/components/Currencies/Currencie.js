import PropTypes from 'prop-types';

function Currencie({ name, setCurrentCurrencyName }) {
  const handleClick = () => {
    setCurrentCurrencyName(name);
  };
  return (
    <li className="currencie_item">
      <button type="button" className="currencie_item--button" onClick={handleClick}>{ name }</button>
    </li>
  );
}

Currencie.propTypes = {
  name: PropTypes.string.isRequired,
  setCurrentCurrencyName: PropTypes.func.isRequired,
};

export default Currencie;
