import components from './components/index.js';

export default {
  install(Vue) {
    for (const prop in components) {
      if (components.hasOwnProperty(prop)) {
        const component = components[prop]
        Vue.component(prop, component)
      }
    }
  }
}