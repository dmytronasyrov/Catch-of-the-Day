import React from 'react';
import { render } from 'react-dom';

import css from './styles/style.styl';
import routes from './routes';
import registerServiceWorker from './utils/registerServiceWorker';

// ###########################################################################################

render (routes, document.querySelector('#root'))
registerServiceWorker();
