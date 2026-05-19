import oklabFunction from '@csstools/postcss-oklab-function';
import colorMixFunction from '@csstools/postcss-color-mix-function';
import autoprefixer from 'autoprefixer';

export default {
  plugins: [
    oklabFunction({ preserve: false }),
    colorMixFunction({ preserve: false }),
    autoprefixer,
  ],
};
