/*
 * Code structure with creat-react-native-app with expo and redux.
 * @author Vineet Verma <vkv000@gmail.com>
 * @Blog URL : www.gardeningtoolszone.com && www.jseye.com
 */

import React from 'react';
import { Provider } from 'react-redux'
import Root from './src/client'
import store from './src/client/store';

export default App = () =>{
  return (
    <Provider store={store}>    
      <Root />
    </Provider>
  )
}