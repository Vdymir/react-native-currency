import {useState} from 'react';
import {Alert} from 'react-native';
import {CurrencyDetailDTO} from '../../../../dto/CurrencyDTO';
import {currencyService} from '../../../../../domain/services/currencyService';

const useCurrencyDetail = (idCurrency: string) => {
  const [currency, setCurrency] = useState<CurrencyDetailDTO>(
    {} as unknown as CurrencyDetailDTO,
  );
  const getCurrencyDetail = async () => {
    const {error, response} = await currencyService.getById(idCurrency);
    if (error) {
      return alert('Could not get that currencies', 'error');
    }
    setCurrency(response[0]);
  };

  const alert = (
    title: string,
    type: 'success' | 'error' | 'warning' | 'info' | 'question' = 'success',
  ) => {
    Alert.alert(type, title);
  };

  return {
    currency,
    getCurrencyDetail,
    alert,
  };
};

export default useCurrencyDetail;
