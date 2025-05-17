import {usePrice} from '~hooks/usePrice';
import {Crypto} from '~interfaces/crypto';
import React, {useCallback, useMemo} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Colors} from '~utils/theme';
import {useAppDispatch} from '~hooks/useAppDispatch';
import {clearSelectedCoin, setSelectedCoin} from '~store/crypto';
import {useAppSelector} from '~hooks/useAppSelector';
import Haptics from '~native/haptic';

interface Props {
  coin: Crypto;
}

const ICON_SIZE = 32;

export const CryptoItem = ({coin}: Props) => {
  const {price, direction, isLoading, error} = usePrice(coin.id);
  const {id, name, icon: Icon, color} = coin;
  const priceColor = useMemo(
    () =>
      direction === 'up'
        ? Colors.priceUp
        : direction === 'down'
        ? Colors.priceDown
        : Colors.text,
    [direction],
  );
  const selectedCoin = useAppSelector(x => x.crypto.selectedCoin);

  const isSelected = useMemo(() => selectedCoin === id, [selectedCoin, id]);
  const cardBackground = useMemo(
    () => (isSelected ? color : Colors.cardBackground),
    [isSelected, color],
  );
  const dispatch = useAppDispatch();

  const handlePress = () => {
    Haptics.trigger();
    if (isSelected) {
      dispatch(clearSelectedCoin());
    } else {
      dispatch(setSelectedCoin(id));
    }
  };

  const renderValue = useCallback(
    () =>
      isLoading ? (
        <ActivityIndicator color={Colors.loading} />
      ) : error ? (
        <Text style={styles.error}>N/A</Text>
      ) : (
        <Text style={[styles.price, {color: priceColor}]}>
          ${price?.toFixed(3)}
        </Text>
      ),
    [isLoading, error, price, priceColor],
  );

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[styles.item, {backgroundColor: cardBackground}]}>
      <View style={styles.coin}>
        <Icon width={ICON_SIZE} height={ICON_SIZE} />
        <Text style={styles.name}>{name}</Text>
      </View>
      {renderValue()}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomColor: Colors.border,
    borderBottomWidth: 1,
  },
  coin: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 16,
  },
  error: {
    color: Colors.error,
  },
  name: {fontSize: 18, color: Colors.text},
  price: {fontSize: 18, fontWeight: 'bold'},
});
