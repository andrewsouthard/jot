import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button, Icon } from 'react-native-elements';

const BUTTON_SIZE = 20;

export default function Sidebar() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 40 }}>j</Text>
      <Button
        buttonStyle={styles.button}
        icon={<Icon name="file-o" size={BUTTON_SIZE} color="black" type="font-awesome" />}
      />
      <Button
        buttonStyle={styles.button}
        icon={<Icon name="bookmark" size={BUTTON_SIZE} color="black" type="font-awesome" />}
      />
      <Button
        buttonStyle={styles.button}
        icon={<Icon name="search" size={BUTTON_SIZE} color="black" type="font-awesome" />}
      />
      <Button
        buttonStyle={styles.button}
        icon={<Icon name="plus" size={BUTTON_SIZE} color="black" type="font-awesome" />}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    width: 100,
    display: 'flex',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'transparent',
  },
});
