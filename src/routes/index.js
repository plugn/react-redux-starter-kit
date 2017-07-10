// We only need to import the modules necessary for initial render
import MDLayout from '../layouts/AppLayout/MDLayout'
// import AppLayout from '../layouts/AppLayout/AppLayout'
// import TopLayout from '../layouts/AppLayout/TopLayout'
// import FlexLayout from '../layouts/AppLayout/FlexLayout'
// import CoreLayout from '../layouts/PageLayout/PageLayout'
import Home from './Home'
import CounterRoute from './Counter'

/*  Note: Instead of using JSX, we recommend using react-router
    PlainRoute objects to build route definitions.   */

export const createRoutes = (store) => ({
  path        : '/',
	component: MDLayout,
  indexRoute  : Home,
  childRoutes : [
    CounterRoute(store)
  ]
})

/*  Note: childRoutes can be chunked or otherwise loaded programmatically
    using getChildRoutes with the following signature:

    getChildRoutes (location, cb) {
      require.ensure([], (require) => {
        cb(null, [
          // Remove imports!
          require('./Counter').default(store)
        ])
      })
    }

    However, this is not necessary for code-splitting! It simply provides
    an API for async route definitions. Your code splitting should occur
    inside the route `getComponent` function, since it is only invoked
    when the route exists and matches.
*/

export default createRoutes
