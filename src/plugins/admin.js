import { join } from 'path-browserify';
import { h } from 'vue'

import MAppLogo from '../components/MAppLogo.vue';

export default function({ logo }) {
  return {
    install(app){
      app.component('AppLogo', {
        components: MAppLogo,
        props: ["size", "responsive"],
        computed: {
          props(){
            return {
              ...(logo ? logo : {}),
              size: this.size,
              responsive: this.responsive
            }
          }
        },
        render(){
          return h(MAppLogo, this.props);
        }
      });
    }
  }
}