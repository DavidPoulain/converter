// == Import
import "./app.scss";
import Header from "src/components/Header";
import Result from "src/components/Result";
import Currencies from "src/components/Currencies";
import Toggler from "src/components/Toggler";

// Import data
import currencieData from "src/data/currencies";
import React from "react";

// == Composant
class App extends React.Component {
  // on ajoute un constructeur de classe pour pouvoir initialiser un state
  constructor(props) {
    // on fait appel au constructeur de la classe parente
    // car il permet de recuperer toutes les props et de les mémoriser en tant qu'propriété
    super(props);

    // on initialise un state et on lui donne la liste des données
    this.state = {
      isCurrenciesVisible: true,
      currentCurrencyName: 'United States Dollar',
      baseAmount: 1,
      searchString: '',
    };

    // la méthode setIsCurrenciesVisible va etre passé via les props à Toggler
    // mais du coup le this qui represente l'instance de App sera perdu
    // quand on passe une focntion en callback on perd le this
    //  pour résoudre le prob on "bind" le this pour qu'il reste tjs le meme
    this.setIsCurrenciesVisible = this.setIsCurrenciesVisible.bind(this);
    this.setCurrentCurrencyName = this.setCurrentCurrencyName.bind(this);
    this.setSearchString = this.setSearchString.bind(this);
    this.setBaseAmount = this.setBaseAmount.bind(this);
    // this.currencyName = this.currencyName.bind(this);
  }

  setSearchString(newValue) {
    this.setState({
      searchString: newValue,
    });
  }

  setBaseAmount(newValue) {
    this.setState({
      baseAmount: Number(newValue),
    });
  }

  getFilteredCurrencies() {
    const { searchString } = this.state;

    // on va filtrer la liste currencieData
    // avec la chaine tapée dans le input et recupéré du state searchString
    return currencieData.filter((item) => {
      const name = item.name.toLowerCase();

      //  est ce que searchString est inclue dans item.name ???
      return name.includes(searchString.toLowerCase());
    });
  }

  /**
   * fonction qui retourne le résultat de la conversion du montant de base dans la devise selectionée
   * => se servir de cette fonction à un moment !!!
   * */
  getConvertedAmount() {
    // on pioche les infos nécessaires dans le state
    const { currentCurrencyName, baseAmount } = this.state;

    // on récupére le taux de conversion de la devise sélectionnée
    const currentCurrency = currencieData.find(
      (item) => item.name === currentCurrencyName
    );
    const { rate } = currentCurrency;
    // version sans destructuring : const rate = currentCurrency.rate;

    // on multiplie le montant de base par le taux de conversion
    const convertedAmount = baseAmount * rate;

    // on retourne le resultat arrondis à 2 décimales
    return Math.round(convertedAmount * 100) / 100;
  }

  setIsCurrenciesVisible() {
    const { isCurrenciesVisible } = this.state;
    // on veut faire ça mais ça ne declanchera pas le re-rendu de l'app
    // this.state.isCurrenciesVisible = !this.state.isCurrenciesVisible;

    // donc on va utiliser le bon outils mis à dispo par la classe parent
    // c'est la méthode setState()
    this.setState({
      isCurrenciesVisible: !isCurrenciesVisible,
    });
  }

  setCurrentCurrencyName(newValue) {
    this.setState({
      currentCurrencyName: newValue,
    });
  }

  render() {
    //  ce booleen va definir si oui ou non les currencies sont affichées
    // on verra après pour mettre cette variable dans un state
    // *sans destructuring : const isCurrenciesVisible = this.state.isCurrenciesVisible;
    const {
      isCurrenciesVisible,
      baseAmount,
      currentCurrencyName,
      searchString,
    } = this.state;
    return (
      <div className="app">
        <Header amount={baseAmount} setBaseAmount={this.setBaseAmount} />
        <Toggler
          isCurrenciesVisible={isCurrenciesVisible}
          setIsCurrenciesVisible={this.setIsCurrenciesVisible}
        />
        {isCurrenciesVisible && (
          <Currencies
            currenciesList={this.getFilteredCurrencies()}
            setCurrentCurrencyName={this.setCurrentCurrencyName}
            searchString={searchString}
            setSearchString={this.setSearchString}
          />
        )}
        {/* {isCurrenciesVisible && <Currencies currenciesList={currencieData} />} */}
        <Result
          currencieName={currentCurrencyName}
          resultAmount={this.getConvertedAmount()}
        />
      </div>
    );
  }
}

// == Export
export default App;
