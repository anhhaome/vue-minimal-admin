import components from './components/index.js'

export default {
  ...components,

  install(Vue) {
    for (const prop in components) {
      Vue.component(prop, components[prop])
    }
  }
}
