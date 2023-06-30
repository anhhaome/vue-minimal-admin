import { inject } from 'vue';
import { R_DIALOG } from '../../constants.js';

export default function () {
  return inject(R_DIALOG);
}
