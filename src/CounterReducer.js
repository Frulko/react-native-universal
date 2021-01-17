const INCREMENT = 'INCREMENT';

const DECREMENT = 'DECREMENT';

const CHANGE_BY_AMOUNT = 'CHANGE_BY_AMOUNT';

export const incrementAction = () => ({
  type: INCREMENT,
});

export const decrementAction = () => ({
  type: DECREMENT,
});

export const changeByAmount = (val) => ({
  type: CHANGE_BY_AMOUNT,
  payload: val,
});

const initialState = {
  counter: {amount: 0},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: {amount: state.counter.amount + 1},
      };
    case DECREMENT:
      return {
        ...state,
        counter: {amount: state.counter.amount - 1},
      };
    case CHANGE_BY_AMOUNT:
      return {
        ...state,
        counter: {amount: state.counter.amount + action.payload},
      };
    default:
      return state;
  }
};
