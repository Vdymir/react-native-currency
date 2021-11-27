import {Currency} from './Currency';
import {CurrencyRepository} from '../../domain/Currency/CurrencyRepository';

export class CurrencyRepositoryImpl implements CurrencyRepository {
  async getCurrency(): Promise<Currency> {
    const data = await fetch('https://api.coinlore.net/api/tickers/');
    const rowData = await data.json();
    return new Currency(rowData.data);
  }
}
