import {NativeModules} from 'react-native';

interface HapticsInterface {
  trigger: () => void;
}
const Haptics: HapticsInterface = NativeModules.HapticsModule;

export default Haptics;
