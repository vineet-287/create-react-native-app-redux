import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import reducers from './Services/Reducers';

const middleware=
    applyMiddleware(
        logger, 
        thunk
     );

export default createStore(reducers, {}, middleware);