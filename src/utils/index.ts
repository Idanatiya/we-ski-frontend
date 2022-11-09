import { format } from 'date-fns';

import { PeopleOption } from '../types/index';

const getPeopleOptions = (): PeopleOption[] => {
  const options = [];
  for (let i = 1; i <= 10; i += 1) {
    options.push({
      label: `${i} people`,
      value: i,
    });
  }

  return options;
};

const formatDate = (date: string) => format(new Date(date), 'dd/MM/yyyy');

export const utilService = {
  getPeopleOptions,
  formatDate,
};
