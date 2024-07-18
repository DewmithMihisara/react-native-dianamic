import React from 'react';
import { View, FlatList, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from './_layout'; 

const messages = [
  { id: '1', name: 'Shane Martinez', message: 'On my way home but...', time: '5 min', avatar: 'https://example.com/avatar1.png' },
  { id: '2', name: 'Katie Keller', message: 'I\'m watching Friends...', time: '15 min', avatar: 'https://example.com/avatar2.png' },
  { id: '3', name: 'Stephen Mann', message: 'I\'m working now...', time: '1 hour', avatar: 'https://example.com/avatar3.png' },
];


type Message = {
  id: string;
  name: string;
  message: string;
  time: string;
  avatar: string;
};

export default function Index() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const renderItem = ({ item }: { item: Message }) => (
    <TouchableOpacity style={styles.messageContainer} onPress={() => navigation.navigate('chatScreen', { name: item.name })}>
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.message}>{item.message}</Text>
      </View>
      <Text style={styles.time}>{item.time}</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={messages}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
}

const styles = StyleSheet.create({
  messageContainer: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  name: {
    fontWeight: 'bold',
  },
  message: {
    color: 'grey',
  },
  time: {
    color: 'grey',
  },
});
