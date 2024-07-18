import React from 'react';
import { View, Text, TextInput, StyleSheet, FlatList } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from './_layout';

type ChatScreenRouteProp = RouteProp<RootStackParamList, 'chatScreen'>;


type ChatMessage = {
    id: string;
    sender: string;
    text: string;
    time: string;
};

const messages: ChatMessage[] = [
    { id: '1', sender: 'Shane Martinez', text: 'I\'m meeting a friend here for dinner. How about you?', time: '5:30 PM' },
    { id: '2', sender: 'You', text: 'I\'m doing my homework, but I really need to take a break.', time: '5:48 PM' },
    { id: '3', sender: 'You', text: 'On my way home but I needed to stop by the bookstore to buy a textbook.', time: '5:58 PM' },
];


export default function chatScreen() {
    const route = useRoute<ChatScreenRouteProp>();
    const { name } = route.params;

    const renderItem = ({ item }: { item: ChatMessage }) => (
        <View style={styles.messageContainer}>
            <Text style={styles.sender}>{item.sender != 'You'? name : item.sender}</Text>
            <Text style={styles.message}>{item.text}</Text>
            <Text style={styles.time}>{item.time}</Text>
        </View>
    );


    return (
        <View style={styles.container}>
            <Text style={styles.header}>{name}</Text>
            <FlatList
                data={messages}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
            <TextInput
                style={styles.input}
                placeholder="Message..."
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    header: {
        marginTop: 50,
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    messageContainer: {
        marginBottom: 10,
    },
    message: {
        backgroundColor: '#e1ffc7',
        padding: 10,
        borderRadius: 10,
    },
    sender: {
        fontWeight: 'bold',
        marginBottom: 5,
    },
    time: {
        textAlign: 'right',
        color: 'grey',
        fontSize: 12,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        borderRadius: 20,
        marginTop: 10,
    },
});