import { AppRegistry, UIManager } from 'react-native';
import App from './App';

UIManager.setLayoutAnimationEnabledExperimental &&
UIManager.setLayoutAnimationEnabledExperimental(true);

AppRegistry.registerComponent('rnCourse', () => App);
