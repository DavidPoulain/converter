import './currencies.scss';

import PropTypes from 'prop-types';
import Currencie from './Currencie';

function Currencies({ currenciesList, setCurrentCurrencyName, searchString, setSearchString, }) {
  function handleChange(event) {
    const newInputValue = event.target.value;
    console.log(`On veut changer la valeur de searchString par : ${newInputValue}`);
    setSearchString(newInputValue);
  }
  return (
    <section className="section section_currencies">
      <h2 className="section_currencies--title">Currencies</h2>
      <input
        type="text"
        className="currencies_filter"
        placeholder="Rechercher ..."
        value={searchString}
        onChange={handleChange}
      />
      <ul className="currencies">
        {currenciesList.map((item) => (
          <Currencie
            name={item.name}
            key={item.name}
            setCurrentCurrencyName={setCurrentCurrencyName}
          />
        ))}
      </ul>
    </section>
  );
}

Currencies.propTypes = {
  currenciesList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      // rate: PropTypes.number.isRequired,
    })
  ).isRequired,
  setCurrentCurrencyName: PropTypes.func.isRequired,
  searchString: PropTypes.string.isRequired,
  setSearchString: PropTypes.func.isRequired,
};

export default Currencies;
