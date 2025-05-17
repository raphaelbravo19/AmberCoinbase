import React, {useMemo} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Colors from '~utils/theme';

interface Props {
  enabled: boolean;
  onPress: () => void;
}

export const LiveUpdateButton = ({onPress, enabled}: Props) => {
  const label = useMemo(
    () => (enabled ? 'Live Feed Running' : 'Start Live Feed'),
    [enabled],
  );
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, enabled && styles.buttonEnabled]}
        onPress={onPress}
        activeOpacity={0.8}>
        <Text style={styles.text}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
    alignItems: 'center',
  },
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
    elevation: 3,
    shadowColor: Colors.shadow,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  buttonEnabled: {
    backgroundColor: Colors.disabled,
  },
  text: {
    color: Colors.primaryText,
    fontWeight: 'bold',
    fontSize: 16,
  },
});
