import {CurrencyServiceImpl} from '../../../domain/Currency/CurrencyUseCase';
import {CurrencyRepositoryImpl} from '../../../data/Currency/CurrencyRepositorylmpl';

async function getSampleCurrencyData() {
  let currencyRepository = new CurrencyRepositoryImpl();
  let currencyService = new CurrencyServiceImpl(currencyRepository);
  return await currencyService.getSampleCurrency();
}

export default getSampleCurrencyData;
