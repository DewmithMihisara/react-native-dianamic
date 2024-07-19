import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, TouchableOpacity, Keyboard, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView } from 'react-native';
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

export default function ChatScreen() {
    const [keyboardHeight, setKeyboardHeight] = useState(0);
    const route = useRoute<ChatScreenRouteProp>();
    const router = useRouter();
    const { name } = route.params;

    const renderItem = ({ item }: { item: ChatMessage }) => (
        <View style={item.sender !== 'You' ? styles.myMsg : styles.msg}>
            <Text style={item.sender !== 'You' ? styles.myMessage : styles.message}>{item.text}</Text>
            <Text style={item.sender !== 'You' ? styles.time : styles.myTime}>{item.time}</Text>
        </View>
    );

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', (e) => {
            setKeyboardHeight(e.endCoordinates.height);
        });
        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
            setKeyboardHeight(0);
        });

        return () => {
            keyboardDidHideListener.remove();
            keyboardDidShowListener.remove();
        };
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topContainer}>
                <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
                    <AntDesign name="arrowleft" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.header}>{name}</Text>
                <TouchableOpacity style={styles.infoBtn}>
                    <Ionicons name="information-circle-outline" size={24} color="black" />
                </TouchableOpacity>
            </View>

            <View style={styles.msgContainer}>
                <ScrollView
                    contentContainerStyle={styles.msgBody}
                    keyboardShouldPersistTaps='handled'
                >
                    <FlatList
                        data={messages}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                </ScrollView>
            </View>

            <KeyboardAvoidingView
                style={[styles.inputContainer, { paddingBottom: keyboardHeight }]}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <TextInput
                    style={styles.input}
                    placeholder="Message..."
                    placeholderTextColor="#888"
                />
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EAEFFC',
    },
    topContainer: {
        // marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    msgContainer: {
        flex: 1,
    },
    msgBody: {
        flexGrow: 1,
        borderRadius: 50,
        marginTop: 20,
        marginLeft: 0,
        paddingTop: 25,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
    },
    message: {
        // backgroundColor: '#F7F8FD',
        padding: 10,
        marginBottom: 10,
        borderRadius: 10,
        // borderTopLeftRadius: 20,
        // borderTopRightRadius: 20,
        borderColor: '#5E6876',
        borderWidth: 1,


    },
    myMessage: {
        // backgroundColor: '#F7F8FD',
        padding: 10,
        marginBottom: 10,
        borderRadius: 10,
        // borderTopLeftRadius: 20,
        // borderTopRightRadius: 20,
        // borderBottomRightRadius: 0,
        borderColor: '#5E6876',
        borderWidth: 1,
    },
    time: {
        textAlign: 'left',
        color: 'grey',
        fontSize: 12,
    },
    myTime: {
        textAlign: 'right',
        color: 'grey',
        fontSize: 12,
    },
    input: {
        backgroundColor: '#fff',
        height: 40,
        paddingHorizontal: 10,
        borderRadius: 20,
        marginTop: 10,
    },
    inputContainer: {
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    backBtn: {
        padding: 10,
    },
    infoBtn: {
        padding: 10,
    },
    myMsg: {
        marginTop: 15,
        marginBottom: 15,
        alignSelf: 'flex-start',
    },
    msg: {
        marginTop: 20,
        marginBottom: 15,
        alignSelf: 'flex-end',
    }
});
