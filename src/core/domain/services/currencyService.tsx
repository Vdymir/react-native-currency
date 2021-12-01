import {ICurrencyService} from '../interfaces/currency';
import {CurrencyRepository} from '../Currency/CurrencyRepository';
import { Currency } from "../models/currencyModel";

export class CurrencyService implements ICurrencyService {
  constructor(private readonly currencyRepository: CurrencyRepository) {}

  getCurrencies = async () => {
    const currency = new Currency();
    this.currencyRepository.getCurrencies(currency)
  }
}
