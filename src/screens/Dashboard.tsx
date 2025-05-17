import {CryptoItem, LiveUpdateButton} from '~components';
import {useLiveFeed} from '~hooks/useLiveFeed';
import {Crypto} from '~interfaces/crypto';
import {CRYPTOS} from '~utils/coins';
import React from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import {Colors} from '~utils/theme';

export const Dashboard = () => {
  const [enabled, setEnabled] = useLiveFeed();

  const toggleEnabled = () => setEnabled(x => !x);

  const keyExtractor = ({id}: Crypto) => id;

  const renderItem = ({item}: ListRenderItemInfo<Crypto>) => (
    <CryptoItem coin={item} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <LiveUpdateButton enabled={enabled} onPress={toggleEnabled} />
      <FlatList<Crypto>
        data={CRYPTOS}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});
