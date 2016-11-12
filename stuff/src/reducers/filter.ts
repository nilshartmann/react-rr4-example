import { IFilterState, IFilterAction, IFilterActionTypes } from '../types';

export default (state: IFilterState = null, action: IFilterAction): IFilterState => {
  switch (action.type) {
    case 'SET_FILTER':
      return action.payload;
  }

  return state;
};