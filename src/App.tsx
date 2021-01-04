import React from 'react';
import Root from './containers/Root';
import createRoutes from './routes';
import store, { history } from './store/configureStore';

const routes = createRoutes(history);

const App: React.FC<Record<string, unknown>> = () => (
  <Root store={store}>{routes}</Root>
);

export default App;
