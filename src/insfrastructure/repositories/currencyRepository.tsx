import {apiUrlV1} from '../config';
import {http} from '../lib';
import {CurrencyDetailDTO, CurrencyDTO} from '../dto/CurrencyDTO';

export const currencyRepository = {
  get: async () => await http.get<CurrencyDTO[]>(`${apiUrlV1}/tickers`),
  getById: async (id: string) =>
    await http.get<CurrencyDetailDTO[]>(`${apiUrlV1}/ticker/?id=${id}`),
};
