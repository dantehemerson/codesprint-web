import loadable from '@loadable/component'
import Loading from 'components/Common/Loading'
import { ConnectedRouter } from 'connected-react-router'
import React from 'react'
import { Route, Switch } from 'react-router-dom'

/** Layout */
const Main = loadable(() => import(/* webpackPrefetch: true */  'containers/Main'), {
  fallback: <Loading />
})

/** Views */
const Dashboard = loadable(() => import(/* webpackPrefetch: true */ 'containers/Dashboard'), {
  fallback: <Loading />,
  ssr     : true
})

const Login = loadable(() => import(/* webpackPrefetch: true */ 'containers/views/Login'), {
  fallback: <Loading />,
  ssr     : true
})

export default (history: any) => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route component={Login} path='/login' />
      <Route>
        <Main>
          <Switch>
            <Route component={Dashboard} exact path='/' />
          </Switch>
        </Main>
      </Route>
    </Switch>
  </ConnectedRouter>
)
