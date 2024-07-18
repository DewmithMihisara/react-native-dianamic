import React from 'react';
import { View, FlatList, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const messages = [
  { id: '1', name: 'Shane Martinez', message: 'On my way home but...', time: '5 min', avatar: 'https://example.com/avatar1.png' },
  { id: '2', name: 'Katie Keller', message: 'I\'m watching Friends...', time: '15 min', avatar: 'https://example.com/avatar2.png' },
  { id: '3', name: 'Stephen Mann', message: 'I\'m working now...', time: '1 hour', avatar: 'https://example.com/avatar3.png' },
];

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
