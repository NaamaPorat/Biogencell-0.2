import { combineReducers, createStore } from 'redux';
import { drawerReducer } from './drawer-state';
import { windowSizeReducer } from './ws-state';

const reducers = combineReducers({
  windowSizeState: windowSizeReducer,
  DrawerState: drawerReducer,
});

const store = createStore(
  reducers,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
