import {useNavigation} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface Props {
  title?: string;

  additionalComponent?: React.ReactNode;
}

const Header = ({title, additionalComponent}: Props) => {
  const navigation = useNavigation();

  const goBack = useCallback(() => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  }, [navigation]);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={goBack}>
        <MaterialIcons name={'arrow-back-ios'} size={16} />
      </TouchableOpacity>

      <Text>{title}</Text>

      {additionalComponent || <View style={styles.button} />}
    </View>
  );
};

export default React.memo(Header);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  button: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
