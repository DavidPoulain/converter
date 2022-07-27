import PropTypes from 'prop-types';
import 'src/components/Result/result.scss';

function Result({ currencieName, resultAmount }) {
  return (
    <section className="section section_result">
      <p className="result">{ resultAmount }</p>
      <h2 className="subtitle section_result--subtitle">{ currencieName }</h2>
    </section>
  );
}

Result.propTypes = {
  currencieName: PropTypes.string.isRequired,
  resultAmount: PropTypes.number.isRequired,
};

export default Result;
