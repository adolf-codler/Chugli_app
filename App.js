import React, { useEffect } from 'react'
import { StatusBar } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import ChatScreen from './src/screens/ChatScreen'
import { auth } from './firebaseConfig'
import { onAuthStateChanged, signInAnonymously } from 'firebase/auth'

export default function App() {
    useEffect(() => {
        // Ensure anonymous sign-in for this demo
        const unsub = onAuthStateChanged(auth, user => {
            if (!user) {
                signInAnonymously(auth).catch(err => console.warn('Auth error', err))
            }
        })
        return unsub
    }, [])

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar barStyle="dark-content" />
            <ChatScreen />
        </SafeAreaView>
    )
}