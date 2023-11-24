import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();
const rootReducer = combineReducers({
  ...reducers,
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore(initialState?: AppState) {
  const enhancers: any[] = [];

  return createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(thunk), ...enhancers)
  );
}

export { history };
