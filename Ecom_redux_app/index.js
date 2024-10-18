/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import store from './src/redux/store';

const AppStore = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <App></App>
      </Provider>
    </SafeAreaProvider>
  );
};
AppRegistry.registerComponent(appName, () => AppStore);
