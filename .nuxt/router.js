import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _59510f6c = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _283d1296 = () => interopDefault(import('../pages/_username/_score/_levelmsg/index.vue' /* webpackChunkName: "pages/_username/_score/_levelmsg/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/en",
    component: _59510f6c,
    name: "index___en"
  }, {
    path: "/jp",
    component: _59510f6c,
    name: "index___jp"
  }, {
    path: "/en/:username/:score?/:levelmsg",
    component: _283d1296,
    name: "username-score-levelmsg___en"
  }, {
    path: "/jp/:username/:score?/:levelmsg",
    component: _283d1296,
    name: "username-score-levelmsg___jp"
  }, {
    path: "/",
    component: _59510f6c,
    name: "index___tw"
  }, {
    path: "/:username/:score?/:levelmsg",
    component: _283d1296,
    name: "username-score-levelmsg___tw"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
