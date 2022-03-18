import {View} from 'native-base';
import React from 'react';
import {StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface Props {
  children: JSX.Element | JSX.Element[];
  centered?: boolean;
  safeArea?: boolean;
}

const Container = ({ children, centered=false, safeArea=false }: Props) => {

  const { top } = useSafeAreaInsets();

  return (
    <View 
      _dark={{ backgroundColor: 'light.900' }} 
      _light={{ backgroundColor: 'dark.900' }}
      style={[(centered) && styles.centeredContainer, (safeArea) && { paddingTop: top },  { flex: 1 }]}
    >
      { children }
    </View>
  );
};

const styles = StyleSheet.create({
  centeredContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Container;

