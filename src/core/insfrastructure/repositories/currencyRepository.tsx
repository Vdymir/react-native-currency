import {apiUrlV1} from '../config';
import {http} from '../lib';
import {CurrencyDTO} from '../dto/CurrencyDTO';

export const currencyRepository = {
  get: async () => await http.get<CurrencyDTO>(`${apiUrlV1}/tickers`),
};
