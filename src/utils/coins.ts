import {
  BitcoinIcon,
  CardanoIcon,
  DogeIcon,
  EthereumIcon,
  LitecoinIcon,
  SolanaIcon,
} from '~assets/icons';
import {Crypto} from '~interfaces/crypto';
import Colors from './theme';

export const CRYPTOS: Crypto[] = [
  {id: 'BTC-USD', name: 'Bitcoin', icon: BitcoinIcon, color: Colors.bitcoin},
  {id: 'ETH-USD', name: 'Ethereum', icon: EthereumIcon, color: Colors.ethereum},
  {id: 'DOGE-USD', name: 'Dogecoin', icon: DogeIcon, color: Colors.dogecoin},
  {id: 'SOL-USD', name: 'Solana', icon: SolanaIcon, color: Colors.solana},
  {id: 'ADA-USD', name: 'Cardano', icon: CardanoIcon, color: Colors.cardano},
  {id: 'LTC-USD', name: 'Litecoin', icon: LitecoinIcon, color: Colors.litecoin},
];
