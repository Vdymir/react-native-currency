import {CurrencyServiceImpl} from '../../../domain/Currency/CurrencyUseCase';
import {CurrencyRepositoryImpl} from '../../../data/Currency/CurrencyRepositorylmpl';

function getSampleCurrencyData() {
  let currencyRepository = new CurrencyRepositoryImpl();
  let currencyService = new CurrencyServiceImpl(currencyRepository);
  return currencyService.getSampleCurrency();
}

export default getSampleCurrencyData;
