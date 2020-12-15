import userDucks from 'reducers/users'

export default async function(req: any, res: any, next: any) {
  const { store } = res.locals

  /** Load cookie */
  if(req.cookies?.jwtToken) {
    await store.dispatch(userDucks.creators.setCookie({ cookie: req.cookies.jwtToken }))
  }

  res.locals.store = store

  next()
}
