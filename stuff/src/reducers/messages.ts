import { IMessagesState } from '../types';

export default (state: IMessagesState = {}, action): IMessagesState => {
  if (action.error) {
    return { error: action.error };
  } else if (action.success) {
    return { success: action.success };
  }
  return state;
};
