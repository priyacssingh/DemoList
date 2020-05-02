export const DEPOSIT = 'Deposit';
export const WITHDRAW = 'Withdraw';
export const US_DOLLAR = 'US Dollar';
export const RECENT_TRANSACTIONS = 'RECENT TRANSACTIONS';
export const SUBMIT = 'Submit';
export const DATA = [
  {
    id: '3',
    total: '$843.00',
    addSpent: '$43.00',
    date: 'Mar 1, 2020',
    name: 'Deposit'
  },
  {
    id: '2',
    total: '$800.00',
    addSpent: '-$35.11',
    date: 'Mar 1, 2020',
    name: 'Withdraw'
  },
  {
    id: '1',
    total: '$835.11',
    addSpent: '$835.11',
    date: 'Mar 1, 2020',
    name: 'Deposit'
  },
];
export const REGEX = /^-?(0|[1-9]\d*)(\.\d+)?$/;
export const WITHDRAW_ERROR_MSG = 'There is no enough money to withdraw';
export const INVALID_ERROR_MSG = 'please enter some valid value';