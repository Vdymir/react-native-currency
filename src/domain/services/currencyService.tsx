import {currencyRepository} from '../../insfrastructure/repositories/currencyRepository';

export const currencyService = {
  get: async () => await currencyRepository.get(),
  getById: async (id: string) => await currencyRepository.getById(id),
};
