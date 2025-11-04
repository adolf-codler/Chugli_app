// src/components/MessageBubble.js
import React from 'react'
import { View, Text } from 'react-native'

export default function MessageBubble({ message, myUid }) {
    const isMine = message.uid === myUid
    return (
        <View style={{ marginBottom: 8, alignSelf: isMine ? 'flex-end' : 'flex-start', maxWidth: '80%' }}>
            <View style={{ backgroundColor: isMine ? '#DCF8C6' : '#FFF', padding: 10, borderRadius: 12, elevation: 1 }}>
                <Text>{message.text}</Text>
            </View>
            <Text style={{ fontSize: 10, color: '#666', marginTop: 4 }}>{/* optionally show time */}</Text>
        </View>
    )
}