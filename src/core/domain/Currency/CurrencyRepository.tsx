import {Currency} from '../../data/Currency/Currency';

export interface CurrencyRepository {
  getCurrency(): Promise<Currency>;
}
