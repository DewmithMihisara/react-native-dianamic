import React from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from './_layout';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';


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
    const router = useRouter();
    const { name } = route.params;

    const renderItem = ({ item }: { item: ChatMessage }) => (
        <View style={item.sender != 'You' ? styles.myMsg : styles.msg}>
            <Text style={item.sender != 'You' ? styles.myMessage: styles.message}>{item.text}</Text>
            <Text style={item.sender != 'You' ?styles.time:styles.myTime}>{item.time}</Text>
        </View>
    );


    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
                    <AntDesign name="arrowleft" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.header}>{name}</Text>
                <TouchableOpacity style={styles.infoBtn}>
                    <Ionicons name="information-circle-outline" size={24} color="black" />
                </TouchableOpacity>
            </View>

            <View style={styles.msgBody}>
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
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        backgroundColor: '#EAEFFC',
    },
    msgBody: {
        borderRadius: 50,
        marginTop: 20,
        marginLeft: 0,
        height: '85%',
        paddingTop: 25,
        paddingBottom: 20,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
    },
    header: {
        // marginTop: 50,
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    messageContainer: {
        marginBottom: 30,
    },
    message: {
        backgroundColor: '#567AF4',
        padding: 10,
        marginBottom: 10,
        borderRadius: 10,
    },
    myMessage: {
        backgroundColor: '#F7F8FD',
        padding: 10,
        marginBottom: 10,
        borderRadius: 10,
        borderBlockColor: '#5E6876',
    },
    sender: {
        fontWeight: 'bold',
        marginBottom: 5,
    },
    time: {
        textAlign: 'left',
        color: 'grey',
        fontSize: 12,
    },
    myTime:{
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
        marginBottom: 20,
    },
    backBtn: {
        padding: 10,
    },
    infoBtn: {
        padding: 10,
    },
    topContainer:{
        marginTop:65,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // paddingVertical: 10,
    },
    myMsg: {
        marginTop: 15,
        marginBottom: 15,
        alignSelf: 'flex-start',
    },
    msg : {
        marginTop: 20,
        marginBottom: 15,
        alignSelf: 'flex-end',
    }
});