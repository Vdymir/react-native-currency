import {Currency} from '../../data/Currency/Currency';
import {CurrencyRepository} from './CurrencyRepository';

export interface CurrencyService {
  getSampleCurrency(): Promise<Currency>;
}

export class CurrencyServiceImpl implements CurrencyService {
  currencyRepo: CurrencyRepository;

  constructor(currencyRepo: CurrencyRepository) {
    this.currencyRepo = currencyRepo;
  }

  async getSampleCurrency(): Promise<Currency> {
    return await this.currencyRepo.getCurrency();
  }
}
