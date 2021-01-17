/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './src/app.json';


// document.getElementById('root').innerHTML = '';




if (module.hot) {
  console.log('here >>',  module.hot.status());
 
  module.hot.dispose(() => {
    AppRegistry.unmountApplicationComponentAtRootTag(document.getElementById('root'))
  })
  module.hot.accept((err) => {
    console.log('error', err)
  })
}

AppRegistry.registerComponent(appName, () => App);
AppRegistry.runApplication(appName, {
  rootTag: document.getElementById('root'),
});

console.log('-_>> start')