import {currencyRepository} from '../../insfrastructure/repositories/currencyRepository';

export const currencyService = {
  get: async () => {
    const result = await currencyRepository.get();
    console.log(result);
    return result;
  },
};
