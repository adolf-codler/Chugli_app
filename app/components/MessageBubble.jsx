
import React from 'react'
import { View, Text } from 'react-native'

export default function MessageBubble({ message, myUid }) {
    const isMine = message.uid === myUid
    return (
        <View style={{ marginBottom: 8, alignSelf: isMine ? 'flex-end' : 'flex-start', maxWidth: '80%' }}>
            <View style={{ backgroundColor: isMine ? '#08bbb2ff' : '#8d32e3ff', padding: 10, borderRadius: 12, elevation: 1 }}>
                <Text style={{ color: "white" }}>{message.text}</Text>
            </View>
            <Text style={{ fontSize: 10, color: '#666', marginTop: 4 }}>{/* optionally show time */}</Text>
        </View>
    )
}