import React from 'react';
import { View, FlatList, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from './_layout';
import AntDesign from '@expo/vector-icons/AntDesign';

const messages = [
  { id: '1', name: 'Mahinda Rajapaksha', message: 'On my way home but...', time: '5 min', avatar: '../assets/images/Mahinda-Rajapaksa.jpg' },
  { id: '2', name: 'Anura Kumara', message: 'I\'m watching Friends...', time: '15 min', avatar: '../assets/images/anura-kumara.jpg' },
  { id: '3', name: 'Ranil Wikramasinha', message: 'I\'m working now...', time: '1 hour', avatar: '../assets/images/ranil-wickremesinghe-2.jpg' },
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
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Messages</Text>
        <TouchableOpacity>
          <AntDesign name="search1" size={24} color="black" style={styles.searchIcon} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <TouchableOpacity style={styles.addButton}>
        <AntDesign name="plus" size={24} color="white" style={styles.addButtonText}/>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
  },
  header: {
    marginTop: 50,
    fontSize: 32,
    fontWeight: 'bold',
  },
  searchIcon: {
    marginTop: 50,
  },
  messageContainer: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#fff',
    marginBottom: 2,
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
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#ff5b77',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 30,
    lineHeight: 30,
  },
});
