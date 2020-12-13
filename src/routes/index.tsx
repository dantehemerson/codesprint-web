import loadable from '@loadable/component'
import Loading from 'components/Common/Loading'
import { ConnectedRouter } from 'connected-react-router'
import React from 'react'
import { Route, Switch } from 'react-router-dom'

const Main = loadable(() => import(/* webpackPrefetch: true */  'containers/Main'), {
  fallback: <Loading />
})

const Dashboard = loadable(() => import(/* webpackPrefetch: true */ 'containers/Dashboard'), {
  fallback: <Loading />
})

export default (history: any) => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route>
        <Main>
          <Route component={Dashboard} exact path='/' />
        </Main>
      </Route>
    </Switch>
  </ConnectedRouter>
)
