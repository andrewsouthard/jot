import React from 'react';
import { StyleSheet } from 'react-native';
import { Header, Button, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';

const ICON_SIZE = 30;

export default function JotHeader() {
  return (
    <Header containerStyle={styles.header}>
      <Button
        buttonStyle={styles.button}
        icon={<Icon name="menu" size={ICON_SIZE} color="black" />}
      />
      <Text h2>JOT</Text>
      <Button
        buttonStyle={styles.button}
        icon={<Icon name="search" size={ICON_SIZE} color="black" />}
      />
    </Header>
  );
}

const styles = StyleSheet.create({
  header: {
    top: 0,
    left: 0,
    right: 0,
    height: '100px',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: '#fcfcfc',
  },
  button: {
    backgroundColor: '#fcfcfc',
    borderColor: 'transparent',
  },
});
