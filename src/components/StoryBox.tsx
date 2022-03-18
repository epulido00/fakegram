import React from 'react';
import {Text, View} from 'native-base';
import {StyleSheet} from 'react-native';

interface Props {
  size?: 'chat' | 'history' | 'post';
}

enum Size {
  'chat' = 70,
  'history' = 70,
  'post' = 40
}

const StoryBox = ({ size = 'history' }: Props) => {
  return (
    <View style={{ alignItems: 'center', marginHorizontal: 2 }}>
      <View
        style={{...styles.borderStory, width: Size[size], height: Size[size] }}
      >
          <View style={ styles.imageUser } />
      </View>
      {
        (size == 'history') && <Text>Nombre</Text>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  borderStory: {
    borderRadius: 100,
    borderWidth: 2,
    borderColor: 'gray',
    padding: 3,
    overflow: 'hidden',
  },
  imageUser: {
    backgroundColor: '#d5d5d5',
    flex: 1,
    borderRadius: 100
  }
});

export default StoryBox;

