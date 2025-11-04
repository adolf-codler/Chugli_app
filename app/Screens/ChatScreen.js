// src/screens/ChatScreen.js
import React, { useEffect, useState, useRef } from 'react'
import { View, TextInput, TouchableOpacity, Text, FlatList, KeyboardAvoidingView, Platform } from 'react-native'
import { collection, addDoc, orderBy, query, onSnapshot, serverTimestamp } from 'firebase/firestore'
import { db, auth } from '../../firebaseConfig'
import MessageBubble from '../components/MessageBubble'

export default function ChatScreen() {
    const [text, setText] = useState('')
    const [messages, setMessages] = useState([])
    const flatRef = useRef()


    useEffect(() => {
        const q = query(collection(db, 'messages'), orderBy('createdAt', 'asc'))
        const unsubscribe = onSnapshot(q, snapshot => {
            const msgs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
            setMessages(msgs)
            // auto-scroll handled by FlatList's inverted or scrollToEnd
        })
        return unsubscribe
    }, [])

    async function sendMessage() {
        if (!text.trim()) return
        try {
            await addDoc(collection(db, 'messages'), {
                text: text.trim(),
                uid: auth.currentUser ? auth.currentUser.uid : null,
                createdAt: serverTimestamp()
            })
            setText('')
            // optionally scroll
            flatRef.current?.scrollToEnd({ animated: true })
        } catch (err) {
            console.warn('Send message error', err)
        }
    }

    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined} keyboardVerticalOffset={80}>
            <FlatList
                ref={flatRef}
                data={messages}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <MessageBubble message={item} myUid={auth.currentUser?.uid} />}
                contentContainerStyle={{ padding: 12 }}
            />
            <View style={{ flexDirection: 'row', padding: 8, borderTopWidth: 1, borderColor: '#eee' }}>
                <TextInput
                    style={{ flex: 1, paddingHorizontal: 12, paddingVertical: 8, borderRadius: 20, backgroundColor: '#f2f2f2' }}
                    placeholder="Type a message"
                    value={text}
                    onChangeText={setText}
                    onSubmitEditing={sendMessage}
                    returnKeyType="send"
                />
                <TouchableOpacity onPress={sendMessage} style={{ justifyContent: 'center', paddingHorizontal: 12 }}>
                    <Text style={{ fontWeight: '600' }}>Send</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}
