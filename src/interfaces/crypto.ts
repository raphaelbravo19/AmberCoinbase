import {FC} from 'react';
import {SvgProps} from 'react-native-svg';

export interface Crypto {
  id: string;
  name: string;
  color: string;
  icon: FC<SvgProps>;
}
