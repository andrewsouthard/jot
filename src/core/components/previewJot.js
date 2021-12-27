import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, Button, Text } from 'react-native-elements';
import { formatDatetimeToSentence } from 'utilities/datetime';

export default function PreviewJot() {
  const modifiedAt = Date.now();
  const jot = {
    contents: 'This is my jot',
    tags: ['business', 'todo'],
  };
  return (
    <Card>
      <Card.Title>{formatDatetimeToSentence(modifiedAt)}</Card.Title>
      <Text>This is my Jot</Text>
      <View style={styles.hashtagContainer}>
        {jot.tags.map((t) => (
          <Button
            buttonStyle={styles.hashtag}
            type="clear"
            title={`#${t}`}
            onPress={() => alert(t)}
          />
        ))}
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  hashtagContainer: {},
  hashtag: {
    fontWeight: 'bold',
  },
});
