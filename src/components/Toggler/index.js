import PropTypes from 'prop-types';
import './toggler.scss';

function Toggler({ isCurrenciesVisible, setIsCurrenciesVisible }) {
  const handleClick = () => {
    // On veut changer la valeur de isCurrenciesVisible dans le state
    // on utilise la fonction reçu en props envoyée par App
    setIsCurrenciesVisible();
  };

  let label = 'Cacher';
  if (!isCurrenciesVisible) {
    label = 'Afficher';
  }

  return (
    // on ajoute un listener sur le click qui déclanche le handler handleClick
    <button type="button" className="toggler" onClick={handleClick}>
      { label } les devises
    </button>
  );
}

Toggler.propTypes = {
  isCurrenciesVisible: PropTypes.bool.isRequired,
  setIsCurrenciesVisible: PropTypes.func.isRequired,
};

export default Toggler;
