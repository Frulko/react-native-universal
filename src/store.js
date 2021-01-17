import {createStore} from 'redux';

import simpleCounterReducer from './CounterReducer';

export default createStore(simpleCounterReducer);
