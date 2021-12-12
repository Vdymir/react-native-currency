import {useState} from 'react';
import {Alert} from 'react-native';
import {
  CurrencyDetailDTO,
  CurrencyMarketDTO,
} from '../../../../dto/CurrencyDTO';
import {currencyService} from '../../../../../domain/services/currencyService';

const useCurrencyDetail = (idCurrency: string) => {
  const [currency, setCurrency] = useState<CurrencyDetailDTO>(
    {} as unknown as CurrencyDetailDTO,
  );
  const [currencyMarkets, setCurrencyMarkets] = useState<CurrencyMarketDTO[]>(
    [] as unknown as CurrencyMarketDTO[],
  );

  const fetchAll = async () => {
    await getCurrencyDetail();
    await getCurrencyMarkets();
  };
  const getCurrencyDetail = async () => {
    const {error, response} = await currencyService.getById(idCurrency);
    if (error) {
      return alert('Could not get that currencies', 'error');
    }
    setCurrency(response[0]);
  };
  const getCurrencyMarkets = async () => {
    const {error, response} = await currencyService.getMarkets(idCurrency);
    if (error) {
      return alert('Could not get that currencies', 'error');
    }
    setCurrencyMarkets(response);
  };

  const alert = (
    title: string,
    type: 'success' | 'error' | 'warning' | 'info' | 'question' = 'success',
  ) => {
    Alert.alert(type, title);
  };

  return {
    currency,
    currencyMarkets,
    fetchAll,
    alert,
  };
};

export default useCurrencyDetail;
