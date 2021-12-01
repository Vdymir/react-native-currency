import {useState} from 'react';
import {Alert} from 'react-native';
import {CurrencyDTO} from '../../../../dto/CurrencyDTO';
import {currencyService} from '../../../../../domain/services/currencyService';

const useCurrency = () => {
  const [currencies, setCurrencies] = useState<Array<CurrencyDTO>>(
    [] as unknown as Array<CurrencyDTO>,
  );
  const [copyCurrencies, setCopyCurrencies] = useState<Array<CurrencyDTO>>([]);
  const [query, setQuery] = useState('');

  function handlerSearchCurrency(value: string) {
    const expresion = new RegExp(`${value.toUpperCase()}.*`, 'i');
    const currenciesFound = copyCurrencies.filter(currency =>
      expresion.test(currency.name),
    );
    setQuery(value);
    setCurrencies(currenciesFound);
  }
  const getCurrencies = async () => {
    const {error, response} = await currencyService.get();
    if (error) {
      return alert('Could not get that currencies', 'error');
    }
    setCurrencies(response.data);
    setCopyCurrencies(response.data);
  };

  const alert = (
    title: string,
    type: 'success' | 'error' | 'warning' | 'info' | 'question' = 'success',
  ) => {
    Alert.alert(type, title);
  };

  return {
    currencies,
    query,
    handlerSearchCurrency,
    getCurrencies,
    alert,
  };
};

export default useCurrency;
